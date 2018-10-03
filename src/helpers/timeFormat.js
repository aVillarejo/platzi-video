// --- Da formato de 00 a un número n
// export const leftPad=(number)=>{
//   const str = '00'
//   return str.substring(0,str.length - number.length)+ number;
// }

// export const formattedTime=(secs)=>{
//   const minutos = parseInt(secs/60,10)
//   const segundos = parseInt(secs % 60,10)
//   return `${leftPad(minutos.toString())}:${leftPad(segundos.toString())}`
// }

// --- Da formato de 00 a un número n
export const leftPad = n => `0${n}`.substr(-2)

// // --- Da formato 00 : 00 (min : seg) a una cantidad de segundos dada
export const formattedTime = secs => `${leftPad(~~(secs/60))}:${leftPad(~~(secs%60))}`

