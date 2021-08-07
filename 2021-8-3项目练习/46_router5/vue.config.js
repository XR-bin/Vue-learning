// 关闭selint、方向代理......
module.exports = {
  // lintOnSave: false       //关闭selint检查

  devServer: {
    proxy: {
      '/ajax': {
        target: 'https://m.maoyan.com/'
      }
    }
  }
}
