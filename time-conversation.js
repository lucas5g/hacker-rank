const timeConversion = (s) => {
  const format = s.search('AM') === -1 ? 'PM' : 'AM'
  const  date = s.replace('PM','').replace('AM', '').split(':')

  // if(format === 'PM' || date[0] === '12' ){
  format === 'PM'  && date[0] !== '12' && (date[0] = parseInt(date[0]) + 12 )

  format === 'AM' && date[0] === '12' && (date[0] = '00')

  // parseInt(date[0]) > 23 && (date[0] = '00')
  
  const newHour = date.join(':')
  console.log(newHour)
} 


//  const s =  '12:40:22AM'
// const s = '07:05:45PM'
 const s = '12:45:54PM'
timeConversion(s)