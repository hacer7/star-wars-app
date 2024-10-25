import _capitalize from 'lodash/capitalize'

export const capitalizeString = (str: string) => {
  if(!str) return ''

  const strArray = str.split(' ')

  const capitalized = strArray.map(el => _capitalize(el))
  
  return capitalized.join(' ')
}