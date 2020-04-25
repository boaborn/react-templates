/**
 *
 * @param {string} key
 * @return {string} value || null
 */
export function getValueByKeyFromLocalStorage(key) {
  return localStorage.getItem(key)
}
