/**
 *
 * @param {string} key
 * @return {string} value || null
 */
export function getValueByKeyFromLocalStorage (key) {
  const value = localStorage.getItem(key)
  console.log('value >', value)
  return value
}
