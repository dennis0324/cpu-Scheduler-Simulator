import {createProcess} from "@/schedulAlgorithm/cpuSchedular"
import sjf from "@/schedulAlgorithm/type/sjf";
debugger;
const processArray = [...Array(5)].map((_, i) => createProcess(i, i, ~~(Math.random() * 10 ) + 1, i));

const SJF = new sjf();
SJF.simulate(processArray)
// processArray.forEach(e => FCFS.push(e))
console.log(SJF.getResult())
console.log(SJF.getAverageWaitingTime())
console.log(SJF.getAverageTurnaroundTime())