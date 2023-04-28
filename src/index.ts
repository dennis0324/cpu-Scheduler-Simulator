import fcfs from "@/schedulAlgorithm/type/fcfs"
import {createProcess} from "@/schedulAlgorithm/CpuSchedular"
debugger;
const processArray = [...Array(5)].map((_, i) => createProcess(i, i, ~~(Math.random() * 10 ) + 1, i));

const FCFS = new fcfs();
// processArray.forEach(e => FCFS.push(e))
console.log(FCFS.getResult(processArray))