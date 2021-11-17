export const insertSpaces = (num: number, digits: number = 3) => {
  const [str1, str2] = String(num).split('.')

  const integer = [...str1].reduce((acc, char, i, arr) => {
    const hasSpace = (i + (digits - (arr.length % digits))) % digits === 0
    return (acc = hasSpace ? `${acc} ${char}` : `${acc}${char}`)
  }, '')

  return integer + (str2 ? `.${str2}` : '')
}
