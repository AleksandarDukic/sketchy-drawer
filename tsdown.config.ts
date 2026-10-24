import { defineConfig } from 'tsdown'

export default defineConfig({
  // dts: {
  //   tsgo: true,
  //   sourcemap: true,
  // },
  dts:true,
  exports: true,
  minify: true
  // ...config options
})
