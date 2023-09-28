const dotenv = require('dotenv');

dotenv.config({ path: '.env.deploy'  })

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REF, DEPLOY_REPO
} = process.env;

module.exports = {
deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      path: DEPLOY_PATH,
      repo: DEPLOY_REPO,
      'post-deploy': `cd frontend && npm ci && npm run build`,
    },
  }
}