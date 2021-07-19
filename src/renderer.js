const { Renderer } = require('marked')

const { kebabize, escapeHtml } = require('./helper')

class CustomRenderer extends Renderer {
  constructor(options) {
    super(options)
  }

  heading(text, level) {
    const escapedText = kebabize(text)

    return `<h${level}>${
      level === 1
        ? ''
        : `<a name="${escapedText}" class="anchor" href="#${escapedText}"></a>`
    }${text}</h${level}>`
  }

  codespan(text) {
    return `<code class="codespan">${text}</code>`
  }

  code(code, str) {
    const [lang, nums] = str.split('{')

    return `<pre ${nums ? 'data-line=' + nums.slice(0, -1) : ''}><code class="${
      this.options.langPrefix
    }${lang} match-braces rainbow-braces ${
      lang.includes('diff') ? 'diff-highlight' : ''
    }">${escapeHtml(code)}</code></pre>`
  }
}

module.exports = new CustomRenderer()
