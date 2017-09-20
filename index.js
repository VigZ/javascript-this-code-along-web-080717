const app = "I don't do much."
((name1,name2)=>{
  let result = []
  let nameArray = [name1, name2]
  for (let i = 0;i<2; i++){
  result.push(nameArray[(Math.floor(Math.random()*nameArray.length))])
}
debugger
counter1 = 0
counter2 = 0
for (let i = 0;i<result.length;i++){
  (result[i] == name1) ? (counter1++) : (counter2++)
}
(counter1 > counter2) ? ( `${name1}:${counter1}`) : ( `${name2}:${counter2}`)
})()
