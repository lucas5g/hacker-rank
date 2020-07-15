const staircase = (n) => {

  for(let i = 1; i <= n; i++){
    console.log('#'.repeat(i).padStart(n))
  }
}


const degraus = 6
// console.log(staircase(degraus))
staircase(degraus)
// console.log('teste')