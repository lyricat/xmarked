var testcases = [
  {
    "section": "Message Block Note",
    "html": "<div class='message-block is-note'>\n<p class='message-title'><span class='message-status'></span>NOTE</p>\n<p>This is a NOTE</p>\n</div>",
    "markdown": "> [!NOTE]\n> This is a NOTE",
    "example": 1900
  },
  {
    "section": "Footnotes",
    "html": '<p>Here&#39;s a simple footnote,<a id="footnote-1" href="#footnote-block-1" title="1">1</a> and here&#39;s a longer one<a id="footnote-bignote" href="#footnote-block-bignote" title="bignote">bignote</a>.</p>\n'
            + '<p id="footnote-block-1"><a href="#footnote-1" title="Jump to">^</a>This is the first footnote.</p>\n'
            + '<p id="footnote-block-bignote"><a href="#footnote-bignote" title="Jump to">^</a>Here&#39;s another</p>\n',
    "markdown": "Here's a simple footnote,[^1] and here's a longer one[^bignote].\n\n[^1]: This is the first footnote.\n\n[^bignote]: Here's another",
    "example": 1901
  },
]

var marked = require('../../../lib/marked.js')

describe("A suite is just a function", function() {
  var a;
  testcases.forEach(function (tc) {
    it(tc.section, function() {
      a = true;
      let html = marked(tc.markdown)
      expect(html).toBe(tc.html)
    })
  })
})

