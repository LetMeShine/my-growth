import babel from '@rollup/plugin-babel';  
import commonjs from '@rollup/plugin-commonjs';  

export default {  
  input: '/Users/chenyi/wht/my-growth/rollup/src/main.js', // 入口文件路径  
  output: {  
    file: 'bundle.js', // 输出文件路径  
    format: 'iife' // 输出格式，iife表示立即执行函数表达式，适合在浏览器中使用  
  },  
  plugins: [  
    babel({  
      exclude: 'node_modules/**' // 排除node_modules目录下的文件  
    }),  
    commonjs() // 将CommonJS模块转换为ES6模块  
  ]  
};