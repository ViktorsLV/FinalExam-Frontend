module.exports = {
  // publicPath: "/class/mmdi0919/1079331/mmdai0919/AP/Version_1",
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'public/service-worker.js',
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}