import { Application } from 'probot'

export default (app: Application) => {
  app.on('pull_request_review_comment.created', async function(context) {
    console.log(context)
  })
}
