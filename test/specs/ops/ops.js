var testcases = [
  {
    "section": "Message Block Note",
    "html": "<div class='message-block is-note'>\n<p class='message-title'><span class='message-status'></span>NOTE</p>\n<p>This is a NOTE</p>\n</div>",
    "markdown": "> [!NOTE]\n> This is a NOTE",
    "example": 1900
  }
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

