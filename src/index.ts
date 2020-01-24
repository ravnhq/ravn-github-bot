// Git Data API use case example
// See: https://developer.github.com/v3/git/ to learn more

/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Application} app
 */
import { Application } from 'probot'
import cherryPick from './cherryPick'

export = (app: Application) => {
  // Opens a PR every time someone installs your app for the first time
  cherryPick(app)
}
