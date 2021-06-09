import BigNumber from 'bignumber.js'

const number = '0123456789'
const alphabet = 'abcdefghijklmnopqrstuvwxyz'
const left = `${number}${alphabet.toLowerCase()}${alphabet.toUpperCase()}$_`.split('')
const right = `${alphabet.toUpperCase()}${alphabet.toLowerCase()}${number}-_`.split('')

BigNumber.set({ ALPHABET: left.join('') })
const idToUrl = Object.assign({}, ...left.map((value, index) => ({ [value]: right[index] })))
const numberToUrl = Object.assign({}, ...right.map((value, index) => ({ [value]: left[index] })))

export const instagramIdToUrlSegment = (id) => {
  const big = new BigNumber(id).toString(64)
  return [...big].reduce((previous, current) => previous + idToUrl[current], '')
}

export const urlSegmentToInstagramId = (url) => {
  const id = [...url].reduce((previous, current) => previous + numberToUrl[current], '')
  return new BigNumber(id, 64).toString(10)
}
