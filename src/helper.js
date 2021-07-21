const kebabize = (text) => text.toLowerCase().replace(/[^\w]+/g, '-')

const htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
}
const htmlEscapesRe = new RegExp(`[${Object.keys(htmlEscapes).join('')}]`, 'g')
const escapeHtml = (text) =>
  new RegExp(htmlEscapesRe.source).test(text)
    ? text.replace(htmlEscapesRe, (c) => htmlEscapes[c])
    : text

module.exports = {
  kebabize,
  escapeHtml,
}
