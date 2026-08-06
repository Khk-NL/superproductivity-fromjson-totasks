PluginAPI.registerMenuEntry({
  label: 'JSON to Tasks',
  icon: 'playlist_add',
  onClick: () => {
    PluginAPI.showIndexHtmlAsView();
  },
});

PluginAPI.registerHeaderButton({
  id: 'json-to-tasks-open',
  label: 'JSON',
  icon: 'data_object',
  onClick: () => {
    PluginAPI.showIndexHtmlAsView();
  },
});
