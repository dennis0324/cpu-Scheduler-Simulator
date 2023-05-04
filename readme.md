# CPU SCHEDULING SIMULATOR

This packing to get result of process by using various cpu scheduling algorithm

### INDEX
- [How to download](#how-to-download)
- [List of cpu scheduling algorithm](#list-of-cpu-scheduling-algorithm)
- [Available Methods](#available-methods)

### How to download
```bash
#right only js and ts are supported
npm i cpuschedulerts
```
### List of cpu scheduling algorithm
- [FCFS, First come first serverd](#FCFS,-First-come-first-serverd)
- [SJF, Shortest Job First](#SJF,-Shortest-Job-First)
- [NPP, non-Preemptive Priority](#NPP,-non-Preemptive-Priority)
- [HRN, Highest Response-ratio Next](HRN,-Highest-Response-ratio-Next)
- [PP, Preemptive Priority](#PP,-Preemptive-Priority)
- [RR, Round Robin](#RR,-Round-Robin)
- [SRT, Shortest Remaining Time](SRT,-Shortest-Remaining-Time)

### Scheduling algorithm declaration

##### FCFS, First come first serverd
```ts
// declaration
fcfs()
```
```ts
//eg
const FCFS = new fcfs();
FCFS.simulate(processArray)
```

##### SJF, Shortest Job First
```ts
// declaration
sjf()
```
```ts
//eg
const SJF = new sjf();
SJF.simulate(processArray)
```

##### NPP, non-Preemptive Priority
```ts
// declaration
staticPriority()
```
```ts
//eg
const StaticPriority = new staticPriority();
StaticPriority.simulate(processArray)
```
##### HRN, Highest Response-ratio Next
```ts
// declaration
hrn()
```
```ts
//eg
const HRN = new hrn();
HRN.simulate(processArray)
```

##### Preemptive Priority
```ts
// declaration
dynamicPriority()
```
```ts
//eg
const DynamicPriority = new dynamicPriority();
DynamicPriority.simulate(processArray)
```
##### RR, Round Robin
```ts
// declaration
rr(timeQuantum:number)
```
```ts
//eg
const RR = new rr(3);
RR.simulate(processArray)
```

##### SRT, Shortest Remaining Time
```ts
// declaration
srt(timeQuantum:number)
```
```ts
//eg
const SRT = new srt(10);
SRT.simulate(processArray)
```
### Available Methods
| methods |  define:return |description | 
| :---:| :---:| :---:|
| getResult | [class].getResult():Process[] | get a Array of result PCB |
| simulate | [class].simulate():void | to simulate corresponding cpu scheduling simulator |
| getAverageWaitingTime | [class].getAverageWaitingTime():number | get a AWT of corresponding simulator | 
| getAverageTurnaroundTime | [class].getAverageTurnaroundTime():number | get a ATT of corresponding simulator | 
| createProcess | createProcess(pid:number,brustTime:number,arrivalTime:number,priority:number):process | create a Process |