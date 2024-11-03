'use strict'

const { parentPort } = require('node:worker_threads')

parentPort.postMessage({
  code: 'CUSTOM-WORKER-CALLED'
})

require('../lib/worker')
