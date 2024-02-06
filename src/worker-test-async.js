import { Worker } from "worker_threads"

export default function asyncWorkerTestDuration (){
  const logger = new Worker(
    "./src/worker-logger.js",
    { synchronisedStdio: false }
  )
  const start = performance.now()
  const lim = 100 * 1000
  for (let i = 0; i < lim; i++) {
    logger.postMessage({i, start})
  }
  return (performance.now() - start)/1000
}
