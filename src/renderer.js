const marked = require('marked')

function escape(html) {
  const replacements = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }

  return /[&<>"']/.test(html)
    ? html.replace(/[&<>"']/g, (c) => replacements[c])
    : html
}

class Renderer extends marked.Renderer {
  constructor(options) {
    super(options)
  }

  heading(text, level) {
    const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-')

    return `<h${level}><a name="${escapedText}" class="anchor" href="#${escapedText}"></a>${text}</h${level}>`
  }

  codespan(text) {
    return `<code class="codespan">${text}</code>`
  }

  code(code, str) {
    const configs = str.split('{')
    const [lang, nums] = configs

    return `<pre ${nums ? 'data-line=' + nums.slice(0, -1) : ''}><code class="${
      this.options.langPrefix
    }${lang} match-braces rainbow-braces diff-highlight">${escape(
      code
    )}</code></pre>`
  }
}

module.exports = new Renderer()
