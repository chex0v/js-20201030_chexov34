/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  return [...arr].sort((a, b) => {
    switch (param) {
        case 'desc':
          return compare(b, a)            
        case 'asc':
        default:
          return compare(a, b)
    }
  })
}

const compare = (str1, str2) => str1.localeCompare(str2, ['ru', 'en'], {caseFirst: "upper"})