# ASYNCHRONOUS LOGGING IN NODE.JS


## TABLE OF CONTENTS
1. [INTRO](#intro)
1. [PREREQUISITES](#prerequisites)
2. [GETTING STARTED](#getting-started)
6. [RESULTS](#results)
6. [CONCLUSION](#conclusion)


## INTRO <a name="intro"></a>
- [`console.log()` is slow](https://duckduckgo.com)
- but i want to use stdout
- this repo demonstrates a Proof of Concept for logging using a worker thread


## PREREQUISITES <a name="prerequisites"></a>
- `make`
- `node`


## GETTING STARTED <a name="getting-started"></a>
- `make start`


## RESULTS <a name="results"></a>
on my machine i see the following results:
┌─────────┬─────────────────────────┬─────────────────────┐
│ (index) │      logging type       │   duration (sec)    │
├─────────┼─────────────────────────┼─────────────────────┤
│    0    │        'console'        │  6.022608299999498  │
│    1    │     'worker thread'     │ 0.09937109999917447 │
│    2    │ 'worker thread (async)' │ 0.11323109999950975 │
└─────────┴─────────────────────────┴─────────────────────┘


## CAVEATS <a name="caveats"></a>
- order remains
- solution is not fault tolerance 
