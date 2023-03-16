declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
// 在ts中没有办法识别.vue结尾的文件,此文件做了适配处理,所有.vue的文件就不会报错,
