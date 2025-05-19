
process.on('message', message  => {
    let result = 0
    console.log("child",message)
    for(let i=0; i<5e9;i++) {
        result+=1
    };
    console.log("terminado calculo")
    process.send(result)
}) 

/*
export default () => {
  let result = 0;

  for (let i = 0; i < 5e9; i++) {
    result += 1;
  }

  return result;
}; 
*/