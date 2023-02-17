window.addEventListener('DOMContentLoaded', () => {
  const module_suffix = queryParams.engineType === 'HARP' && region === 'row' ? '.harp' : '';
  const import_origin = `${getCDNDistUrl()}mapsjs.bundle${module_suffix}.js`;
  import(import_origin).then(module=> {
    self.mapsjs = module.default;
    loadScript('res/demo.js');
  })
});
