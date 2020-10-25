const { withSentrySourceMaps } = require('@next/plugin-sentry')

module.exports = withSentrySourceMaps({
  experimental: { plugins: true },
})