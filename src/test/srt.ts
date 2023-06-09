import {createProcess} from "@/schedulAlgorithm/cpuScheduler"
import srt from "@/schedulAlgorithm/type/srt";
debugger;
// const processArray = [...Array(5)].map((_, i) => createProcess(i, i, ~~(Math.random() * 10 ) + 1, ~~(Math.random() * 10 ) + 1));

const processArray = [{
    pid: 0,
    arrivalTime: 0,
    burstTime: 30,
    remainingTime: 30,
    priority: 8,
    waitingTime: 0,
    completionTime: 0,
    executeTime: 10
  },
  {
    pid: 1,
    arrivalTime: 3,
    burstTime: 18,
    remainingTime: 18,
    priority: 4,
    waitingTime: 9,
    completionTime: 0,
    executeTime: 4
  },
  {
    pid: 2,
    arrivalTime: 6,
    burstTime: 9,
    remainingTime: 9,
    priority: 8,
    waitingTime: 0,
    completionTime: 0,
    executeTime: 0
  }
]

const SRT = new srt(10);
SRT.simulate(processArray)
// processArray.forEach(e => FCFS.push(e))
console.log(SRT.getResult())
console.log(SRT.getAverageWaitingTime())
console.log(SRT.getAverageTurnaroundTime())