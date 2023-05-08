import {createProcess} from "@/schedulAlgorithm/cpuScheduler"
import dynamicPriority from "@/schedulAlgorithm/type/preemptivePriority";
debugger;
// const processArray = [...Array(5)].map((_, i) => createProcess(i, i, ~~(Math.random() * 10 ) + 1, ~~(Math.random() * 10 ) + 1));

const processArray = [
  //     {
  //     pid: 0,
  //     arrivalTime: 0,
  //     burstTime: 10,
  //     remainingTime: 10,
  //     priority: 3,
  //     waitingTime: 0,
  //     completionTime: 0,
  //     executeTime: 0,
  //     lastfinishTime: 0
  //   },
    {
      pid: 1,
      arrivalTime: 1,
      burstTime: 0,
      remainingTime: 28,
      priority: 2,
      waitingTime: 0,
      completionTime: 0,
      executeTime: 0,
      lastfinishTime: 1
    },
    {
      pid: 2,
      arrivalTime: 2,
      burstTime: 6,
      remainingTime: 6,
      priority: 4,
      waitingTime: 0,
      completionTime: 0,
      executeTime: 0,
      lastfinishTime: 2
    },
    {
      pid: 3,
      arrivalTime: 3,
      burstTime: 4,
      remainingTime: 4,
      priority: 1,
      waitingTime: 0,
      completionTime: 0,
      executeTime: 0,
      lastfinishTime: 3
    },
    {
      pid: 4,
      arrivalTime: 4,
      burstTime: 14,
      remainingTime: 14,
      priority: 2,
      waitingTime: 0,
      completionTime: 0,
      executeTime: 0,
      lastfinishTime: 4
    }
  ]

const DynamicPriority = new dynamicPriority();
DynamicPriority.simulate(processArray)
// processArray.forEach(e => FCFS.push(e))
console.log(DynamicPriority.getResult())
console.log(DynamicPriority.getAverageWaitingTime())
console.log(DynamicPriority.getAverageTurnaroundTime())