import CPUAlgorithm from "./schedulAlgorithm/Algorithm";

const processArray = [...Array(5)].map((_, i) => CPUAlgorithm.createProcess(i, i, ~~(Math.random() * 10 ) + 1, i));

processArray.forEach( e => console.log(e.arrivalTime,e.burstTime))
const processRunData = CPUAlgorithm.fcfs(processArray);

console.log(processRunData)

console.log("hello world")