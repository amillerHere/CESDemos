/* eslint-disable */
loadScript('https://unpkg.com/three@0.106.2/build/three.min.js', () => {
  loadScript('https://unpkg.com/three@0.106.2/examples/js/loaders/GLTFLoader.js', onThreeJsLoad);
});

const mapCenter = {lat: 52.52532819793483, lng: 13.365769189502432, alt: 0};
map.getViewModel().setLookAtData({tilt: 69, position: mapCenter, zoom: 19});

const modelsInfo = [
  {
    position: {lat: 52.52532819793483, lng: 13.365769189502432, alt: 0},
    url: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Lantern/glTF/Lantern.gltf',
    scale: 1
  },
  {
    position: {lat: 52.52593830286487, lng: 13.367709602191285, alt: 0},
    url: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/RiggedFigure/glTF/RiggedFigure.gltf',
    scale: 20
  },
  {
    position: {lat: 52.52466703280912, lng: 13.366185579696138, alt: 0},
    url: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/BrainStem/glTF/BrainStem.gltf',
    scale: 20
  }
];

function onThreeJsLoad() {

    /**
     * Loads a [GLTF](https://www.khronos.org/gltf/) formatted model and renders using
     * [ThreeJS GLTF Loader](https://threejs.org/docs/#examples/en/loaders/GLTFLoader) on the map.
     * @class
     */
    class GLTFLayer extends mapsjs.map.layer.CanvasLayer {
      constructor() {
        super((gl, params) => this.renderScene(gl, params), { contextType: 'webgl' });

        const {x, y, z} = map.getEngine().geoToMeters(mapCenter);
        this._origin = {x, y, z};

        this._camera = new THREE.Camera();
        this._scene = new THREE.Scene();
        this._animations = [];

        let directionalLight = new THREE.DirectionalLight(0xffffff);
        directionalLight.position.set(0, -70, 100).normalize();
        this._scene.add(directionalLight);

        let directionalLight2 = new THREE.DirectionalLight(0xffffff);
        directionalLight2.position.set(0, 70, 100).normalize();
        this._scene.add(directionalLight2);

        this._state = mapsjs.map.render.RenderState.PENDING;

        let loader = new THREE.GLTFLoader();
        let promises = [];
        modelsInfo.forEach((info) => {
          let promise = new Promise((resolve, reject) => {
            loader.load(info.url, resolve);
          });
          promises.push(promise);
        });

        Promise.all(promises).then((gltfs) => {
          gltfs.forEach((gltf, i) => {
            let model = gltf.scene;
            let {position, scale} = modelsInfo[i];
            let {x, y, z} = map.getEngine().geoToMeters(position);
            model.position.set(x - this._origin.x, y - this._origin.y, z - this._origin.z);
            model.scale.set(scale, scale, scale);
            model.rotateX(Math.PI / 2);
            this._scene.add(model);


            let mixer = new THREE.AnimationMixer(model);
            gltf.animations.forEach((animation) => {
              mixer.clipAction(animation).play();
            });
            let clock = new THREE.Clock();
            this._animations.push({mixer, clock});
          });

          this._state = mapsjs.map.render.RenderState.ACTIVE;
        });
      }

      renderScene(gl, {size: {w, h}, cameraMatrix, pixelRatio}) {
        if (this._state === mapsjs.map.render.RenderState.PENDING) {
          return this._state;
        }

        let renderer = this.renderer;
        if (!renderer) {
          renderer = new THREE.WebGLRenderer({
            canvas: gl.canvas,
            context: gl,
            antialias: true
          });
          renderer.setPixelRatio(pixelRatio);
          this.renderer = renderer;
        }
        renderer.setSize(w / pixelRatio, h / pixelRatio);

        this._camera.projectionMatrix = new THREE.Matrix4().fromArray(cameraMatrix);
        this._camera.projectionMatrix = this._camera.projectionMatrix.multiply(new THREE.Matrix4()
            .makeTranslation(this._origin.x, this._origin.y, this._origin.z));

        renderer.state.reset();

        this._animations.forEach((animation) => {
          animation.mixer.update(animation.clock.getDelta());
        });

        renderer.render(this._scene, this._camera);

        this._state = mapsjs.map.render.RenderState.ACTIVE;
        return this._state;
      }
    }

    map.addLayer(new GLTFLayer());
}
