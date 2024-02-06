export default function consoleTestDuration (){
  const start = performance.now()
  const lim = 100 * 1000
  for (let i = 0; i < lim; i++) {
    console.log(i)
  }
  return (performance.now() - start)/1000
}
