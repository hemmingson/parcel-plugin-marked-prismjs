const kebabize = (text) => text.toLowerCase().replace(/[^\w]+/g, '-')

const htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
}
const replacer = new RegExp(`[${Object.keys(htmlEscapes).join('')}]`, 'g')
const escapeHtml = (text) =>
  new RegExp(replacer.source).test(text)
    ? text.replace(replacer, (c) => htmlEscapes[c])
    : text

module.exports = {
  kebabize,
  escapeHtml,
}
