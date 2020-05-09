/**
 * 行内样式单位不会转换，用的时候要格外注意
 * 安装后在项目根目录下新建postcss.config.js 做一些配置
 * 配置完重启服务才生
 * PostCss运行在node中的，用的是commonjs
 * */

//  导出一个对象
module.exports = {
  plugins: {
    // autoprefixer可以自动加载浏览器厂商前缀
    // VueCli 已经在内部默认配置了
    // autoprefixer: {
    //   // 因为VueCli 在browserslistrc内置了
    //   browsers: ['Android >= 4.0', 'iOS >= 8'],
    // },
    'postcss-pxtorem': {
      // 转换的根源素基准值 750/10
      // vant组件是基于逻辑像素375设计的
      // 设计稿是物理像素，宽750
      // 要用vant就得把设计稿测量单位 / 2
      rootValue: 37.5,
      // 所有css属性都要转包含width height...
      propList: ['*']
    }
  }
}
