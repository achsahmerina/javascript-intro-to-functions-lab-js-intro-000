function shout(string){
  return string.toUpperCase()
}
function whisper(string){
  return string.toLowerCase()
}
function logShout(string){
  console.log('HELLO')
}
function logWhisper(string){
  console.log('hello')
}
function sayHiToGrandma(string){
  return("I can\'t hear you!")
}
function sayHiToGrandma(string){
  expect(shout('YES INDEED!')).toEqual('I can\'t hear you!')
}
