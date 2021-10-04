module.exports = {
  buildOptions: {   
    clean: true,
    out: "./build"
  },
  root: './src',
  optimize: {
    sourcemap: false,
    bundle: true,
    minify: true,
    target: 'es2018',
    treeshake: true,
    entrypoints: ['./src/index.js']
  }
}