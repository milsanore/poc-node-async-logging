import consoleTestDuration from "./console-test.js"
import workerTestDuration from "./worker-test.js"
import asyncWorkerTestDuration from "./worker-test-async.js"

const d1 = consoleTestDuration()
const d2 = workerTestDuration()
const d3 = asyncWorkerTestDuration()

console.table([
    { "logging type": "console", "duration (sec)": d1 },
    { "logging type": "worker thread", "duration (sec)": d2 },
    { "logging type": "worker thread (async)", "duration (sec)": d3 },
])

