const capitalizeString = (str) => {
  str = str.replace(/\s/g, '').toLowerCase()
  if (str === '') {
    return ''
  }
  return str[0].toUpperCase() + str.substring(1)
}

module.exports = capitalizeString