import * as wt from "worker_threads"
import { writeFile } from "node:fs/promises"

wt.parentPort.on("message", async (msg) => {
    await writeFile(
        // file descriptor 1 is special, it points to stdout
        "/dev/fd/1", 
        JSON.stringify({
            message: msg.i,
            diff: performance.now() - msg.start
        }) + "\n"
    )
})
