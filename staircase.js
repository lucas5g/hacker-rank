const staircase = (n) => {

  let txt = ''
  let space = ' '
  let degrau = '#'

  for (let cont = 0; cont <= n; cont++) {

    for (let i = 0; i <= n - cont; i++) {
      txt += space
    }
    for (let j = n; j > n - cont; j--) {
      txt += '#'
    }
    txt += '\n'
  }
  return txt
}


const degraus = 3
console.log(staircase(degraus))