import {createProcess} from "@/schedulAlgorithm/cpuSchedular"
import dynamicPriority from "@/schedulAlgorithm/type/preemptivePriority";
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
    executeTime: 10
  },
  {
    pid: 1,
    arrivalTime: 1,
    burstTime: 4,
    remainingTime: 4,
    priority: 4,
    waitingTime: 9,
    completionTime: 0,
    executeTime: 4
  },
  {
    pid: 2,
    arrivalTime: 2,
    burstTime: 7,
    remainingTime: 7,
    priority: 8,
    waitingTime: 0,
    completionTime: 0,
    executeTime: 0
  },
  {
    pid: 3,
    arrivalTime: 3,
    burstTime: 10,
    remainingTime: 10,
    priority: 5,
    waitingTime: 11,
    completionTime: 0,
    executeTime: 10
  },
  {
    pid: 4,
    arrivalTime: 4,
    burstTime: 5,
    remainingTime: 5,
    priority: 6,
    waitingTime: 0,
    completionTime: 0,
    executeTime: 0
  }
]

const DynamicPriority = new dynamicPriority();
DynamicPriority.simulate(processArray)
// processArray.forEach(e => FCFS.push(e))
console.log(DynamicPriority.getResult())
console.log(DynamicPriority.getAverageWaitingTime())
console.log(DynamicPriority.getAverageTurnaroundTime())