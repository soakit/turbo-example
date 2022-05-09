module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  // 使用的是 eslint-config-acme/index.js
  extends: ['custom'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
}
