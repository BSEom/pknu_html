const a = [1,2]
const b = [3,4]
// const result = a+b // 안됨 string 형식으로 더해짐

const result = [...a, ...b]
console.log(result,  typeof(result))
console.log(result,  Array.isArray(result))
