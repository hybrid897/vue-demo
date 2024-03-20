/**
 * DOM Ready
 * Borrowed from https://github.com/sindresorhus/dom-loaded
 * However the imported module causes issues with Vitest :(
 */

export const hasLoaded = () =>
  document.readyState === 'interactive' || document.readyState === 'complete'

export const domLoaded = new Promise<void>((resolve) => {
  if (hasLoaded()) {
    resolve()
  } else {
    document.addEventListener(
      'DOMContentLoaded',
      () => {
        resolve()
      },
      {
        capture: true,
        once: true,
        passive: true
      }
    )
  }
})
