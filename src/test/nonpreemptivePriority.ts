import {createProcess} from "@/schedulAlgorithm/cpuSchedular"
import staticPriority from "@/schedulAlgorithm/type/nonpreemptivePriority";
debugger;
const processArray = [...Array(5)].map((_, i) => createProcess(i, i, ~~(Math.random() * 10 ) + 1, i));

const StaticPriority = new staticPriority();
StaticPriority.simulate(processArray)
// processArray.forEach(e => FCFS.push(e))
console.log(StaticPriority.getResult())
console.log(StaticPriority.getAverageWaitingTime())
console.log(StaticPriority.getAverageTurnaroundTime())