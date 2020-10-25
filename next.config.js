const {
  NEXT_PUBLIC_SENTRY_DSN,
  NEXT_PUBLIC_SENTRY_RELEASE,
} = process.env

process.env.SENTRY_DSN = NEXT_PUBLIC_SENTRY_DSN
process.env.SENTRY_RELEASE = NEXT_PUBLIC_SENTRY_RELEASE

module.exports = {
  experimental: { plugins: true },
  env: {
    // Required for now because the experimental plugins API is not checking
    // for variables with the NEXT_PUBLIC prefix that are automatically pulled
    // in
    NEXT_PUBLIC_SENTRY_DSN: NEXT_PUBLIC_SENTRY_DSN,
    SENTRY_DSN: NEXT_PUBLIC_SENTRY_DSN,
    SENTRY_RELEASE: NEXT_PUBLIC_SENTRY_RELEASE,
  },
  webpack: (config, options) => {
    // The build ID is only available here, so this is where we'll define its
    // environment variable
    config.plugins.push(
      new options.webpack.DefinePlugin({
        'process.env.NEXT_PUBLIC_SENTRY_RELEASE': JSON.stringify(
          options.buildId
        ),
      })
    )
    return config
  }
}
