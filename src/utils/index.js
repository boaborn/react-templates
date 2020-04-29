/**
 *
 * @param {string} key
 * @return {string} value || null
 */
export function getValueByKeyFromLocalStorage(key) {
  return localStorage.getItem(key)
}

export function storeItemInLocalStorage(key, value) {
  localStorage.setItem(key, value)
}

export function updateFormStatus(formikHelpers) {

}
