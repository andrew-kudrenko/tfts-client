export const splitLocationPath = (separator = '/') => window.location.pathname.split(separator).filter(str => str.length)
