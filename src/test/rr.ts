import {createProcess} from "@/schedulAlgorithm/cpuScheduler"
import rr from "@/schedulAlgorithm/type/rr";
debugger;
// const processArray = [...Array(5)].map((_, i) => createProcess(i, i, ~~(Math.random() * 10 ) + 1, ~~(Math.random() * 10 ) + 1));

const processArray = [{
    pid: 0,
    arrivalTime: 0,
    burstTime: 10,
    remainingTime: 10,
    priority: 8,
    waitingTime: 0,
    completionTime: 0,
    executeTime: 0,
    lastfinishTime: 0
  },
  {
    pid: 1,
    arrivalTime: 1,
    burstTime: 4,
    remainingTime: 4,
    priority: 4,
    waitingTime: 0,
    completionTime: 0,
    executeTime: 0,
    lastfinishTime: 1
  },
  {
    pid: 2,
    arrivalTime: 2,
    burstTime: 7,
    remainingTime: 7,
    priority: 8,
    waitingTime: 0,
    completionTime: 0,
    executeTime: 0,
    lastfinishTime: 2
  },
  {
    pid: 3,
    arrivalTime: 3,
    burstTime: 10,
    remainingTime: 10,
    priority: 5,
    waitingTime: 0,
    completionTime: 0,
    executeTime: 0,
    lastfinishTime: 3
  },
  {
    pid: 4,
    arrivalTime: 4,
    burstTime: 5,
    remainingTime: 5,
    priority: 6,
    waitingTime: 0,
    completionTime: 0,
    executeTime: 0,
    lastfinishTime: 4
  }
]

const RR = new rr(3);
RR.simulate(processArray)
// processArray.forEach(e => FCFS.push(e))
console.log(RR.getResult())
console.log(RR.getAverageWaitingTime())
console.log(RR.getAverageTurnaroundTime())