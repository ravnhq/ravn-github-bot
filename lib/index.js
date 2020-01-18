'use strict'
// Git Data API use case example
// See: https://developer.github.com/v3/git/ to learn more
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
var cherryPick_1 = __importDefault(require('./cherryPick'))
module.exports = function(app) {
  // Opens a PR every time someone installs your app for the first time
  cherryPick_1.default(app)
}
//# sourceMappingURL=index.js.map
