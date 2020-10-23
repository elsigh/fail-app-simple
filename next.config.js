const withSourceMaps = require('@zeit/next-source-maps')()
const withSentry = require('next-sentry-source-maps')()

module.exports = withSentry(
  withSourceMaps({
    experimental: { plugins: true },
    // TODO: This should be gone. We need to somehow provide env variables to plugins
    // otherwise it's not very UX-friendly — Kamil
    env: {
      SENTRY_DSN: process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN,
      SENTRY_RELEASE:
        process.env.SENTRY_RELEASE ||
        process.env.VERCEL_GITHUB_COMMIT_SHA ||
        process.env.VERCEL_GITLAB_COMMIT_SHA ||
        process.env.VERCEL_BITBUCKET_COMMIT_SHA,
    },
  })
)
