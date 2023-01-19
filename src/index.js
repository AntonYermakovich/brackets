module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let OPEN_BRACKETS = []
  let BRACKETS_PAIR = {}

  bracketsConfig.forEach(bracket => {
    BRACKETS_PAIR[bracket[1]] = bracket[0]
    OPEN_BRACKETS.push(bracket[0])
  })

  if (str.length % 2 !== 0) return false

  for (let i = 0; i < str.length; i++) {
    let currentElem = str[i]

    if (stack.includes('|') && currentElem === '|'
      || stack.includes('8') && currentElem === '8'
      || stack.includes('7') && currentElem === '7') {
      stack.pop()
      continue
    }

    if (OPEN_BRACKETS.includes(currentElem)) {
      stack.push(currentElem)
    } else {
      if (stack.length === 0) {
        return false
      }

      let top = stack[stack.length - 1]

      if (BRACKETS_PAIR[currentElem] === top) {
        stack.pop()
      } else {
        return false
      }
    }
  }

  return stack.length === 0
}
