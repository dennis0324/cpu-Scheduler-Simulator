import fcfs from "@/schedulAlgorithm/type/fcfs"
import {createProcess} from "@/schedulAlgorithm/cpuScheduler"
debugger;
const processArray = [...Array(5)].map((_, i) => createProcess(i, i, ~~(Math.random() * 10 ) + 1, i));

const FCFS = new fcfs();
FCFS.simulate(processArray)
// processArray.forEach(e => FCFS.push(e))
console.log(FCFS.getResult())
console.log(FCFS.getAverageWaitingTime())
console.log(FCFS.getAverageTurnaroundTime())