'use strict'
var __awaiter =
  (this && this.__awaiter) ||
  function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function(resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
var __generator =
  (this && this.__generator) ||
  function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
          if (t[0] & 1) throw t[1]
          return t[1]
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function() {
          return this
        }),
      g
    )
    function verb(n) {
      return function(v) {
        return step([n, v])
      }
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.')
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y['return']
                  : op[0]
                  ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t
          if (((y = 0), t)) op = [op[0] & 2, t.value]
          switch (op[0]) {
            case 0:
            case 1:
              t = op
              break
            case 4:
              _.label++
              return { value: op[1], done: false }
            case 5:
              _.label++
              y = op[1]
              op = [0]
              continue
            case 7:
              op = _.ops.pop()
              _.trys.pop()
              continue
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0
                continue
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1]
                break
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1]
                t = op
                break
              }
              if (t && _.label < t[2]) {
                _.label = t[2]
                _.ops.push(op)
                break
              }
              if (t[2]) _.ops.pop()
              _.trys.pop()
              continue
          }
          op = body.call(thisArg, _)
        } catch (e) {
          op = [6, e]
          y = 0
        } finally {
          f = t = 0
        }
      if (op[0] & 5) throw op[1]
      return { value: op[0] ? op[1] : void 0, done: true }
    }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.default = function(app) {
  app.on('installation.created', function check(context) {
    return __awaiter(this, void 0, void 0, function() {
      var owner
      var _this = this
      return __generator(this, function(_a) {
        // shows all repos you've installed the app on
        console.log('HERE:', context.payload.repositories)
        owner = context.payload.installation.account.login
        context.payload.repositories.forEach(function(repository) {
          return __awaiter(_this, void 0, void 0, function() {
            var repo, branch, reference
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  repo = repository.name
                  branch = 'new-branch-' + Math.floor(Math.random() * 9999)
                  context.github.pulls.create({})
                  return [
                    4 /*yield*/,
                    context.github.gitdata.getReference({
                      repo: repo,
                      owner: owner,
                      ref: 'heads/master',
                    }),
                    // Create a branch
                  ]
                case 1:
                  reference = _a.sent()
                  // Create a branch
                  return [
                    4 /*yield*/,
                    context.github.gitdata.createReference({
                      repo: repo,
                      owner: owner,
                      ref: 'refs/heads/' + branch,
                      sha: reference.data.object.sha,
                    }),
                    // create a new file
                  ]
                case 2:
                  // Create a branch
                  _a.sent()
                  // create a new file
                  return [
                    4 /*yield*/,
                    context.github.repos.createFile({
                      repo: repo,
                      owner: owner,
                      path: 'path/to/your/file.md',
                      message: 'adds config file',
                      content: Buffer.from('My new file is awesome!').toString(
                        'base64',
                      ),
                      // the content of your file, must be base64 encoded
                      branch: branch,
                    }),
                    // create a PR from that branch with the commit of our added file
                  ]
                case 3:
                  // create a new file
                  _a.sent()
                  // create a PR from that branch with the commit of our added file
                  return [
                    4 /*yield*/,
                    context.github.pullRequests.create({
                      repo: repo,
                      owner: owner,
                      title: 'Adding my file!',
                      head: branch,
                      base: 'master',
                      body: 'Adds my new file!',
                      maintainer_can_modify: true,
                    }),
                  ]
                case 4:
                  // create a PR from that branch with the commit of our added file
                  _a.sent()
                  return [2 /*return*/]
              }
            })
          })
        })
        return [2 /*return*/]
      })
    })
  })
}
//# sourceMappingURL=onFirstInstall.js.map
