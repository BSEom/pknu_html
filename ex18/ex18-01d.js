/* 객체 다루기 */

const user = {name:"홍길동", age:10}
// 객체의 키로 값을 읽는법 R
console.log(user.name)
console.log(user['name'])

// 객체를 추가하는 법 C
user.gender = "male"
user['address']  = "부산"

// 수정하는법 U
user.age = 17
user['name'] = '수퍼맨'

// 삭제하는법 D
delete user['gender']

// 출력하기
console.log(user)


/* 위의 방식은 react에서 인식 안됨 */

// 객체 // Tip
// const test = {test} // {test:test}

const updated =  { ...user , age:20}    // node.js 구버전 안됨
console.log(updated)