/**
 * @jest-environment jsdom
 */

const { escapeHtml } = require('../src/helper')
const htmlStr = require('./index')

describe('dom tree creation...', () => {
  const root = document.createElement('div')
  root.innerHTML = htmlStr
  document.querySelector('body').appendChild(root)

  test('headings', () => {
    const res = root.querySelector('h2')
    const html = res.innerHTML

    expect(html).toBe(
      '<a name="subtitle-with-anchor" class="anchor" href="#subtitle-with-anchor"></a>Subtitle With Anchor'
    )
  })

  test('match brackets', () => {
    const res = root.querySelector('pre > code')
    const classes = Array.from(res.classList)

    expect(classes).toContain('match-braces', 'rainbow-braces')
  })

  test('line highlight', () => {
    const res = root.querySelector('pre[data-line]')
    const lineNumStr = res.dataset.line

    expect(lineNumStr).toBe('4,10')
  })

  test('diff', () => {
    const res = root.querySelector('code.language-diff-js')
    const classes = Array.from(res.classList)

    expect(classes).toContain('diff-highlight')
  })

  test('escape html', () => {
    const res = ['&', '<', '>', '"', "'"].map(escapeHtml)

    expect(res).toEqual(['&amp;', '&lt;', '&gt;', '&quot;', '&#39;'])
  })
})
