const { Asset } = require('parcel-bundler')
const marked = require('marked')

const renderer = require('./renderer')

module.exports = class extends Asset {
  constructor(name, options) {
    super(name, options)
    this.type = 'html'
    this.hmrPageReload = true
  }

  async generate() {
    return marked(this.contents, { renderer })
  }
}
