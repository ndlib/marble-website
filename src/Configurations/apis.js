// These are secrets and should go into parameter store.

// Allowed domains on Sentry has been limited to:
// https://mellon-unified-testlibnd-prod.library.nd.edu
// https://mellon-unified-testlibnd-test.library.nd.edu
// New Sentry keys can be generated on website

// Primo base url can be destroyed and rebuilt so it will get a new url

export const SENTRY_DSN = 'https://4c1993c43f954b99b98e53fdf0a594f2@sentry.io/1318849'
export const PRIMO_BASE_URL = 'https://a1fc3ld3d7.execute-api.us-east-1.amazonaws.com/dev/primo/v1/pnxs'
export const MANIFEST_BASE_URL = 'https://wellcomelibrary.org/iiif/'
export const UNIVERSAL_VIEWER_BASE_URL = 'https://image-viewer.library.nd.edu/universalviewer/index.html'
