Package.describe({
  summary: "Test package"
});

Package.on_use(function (api) {
  if (typeof api.export !== 'undefined') {
  	api.export('Messager', 'client');
  }

  api.add_files('common.js', ['client']);
});
