// // this is for scheduling algorithm
// import {Process} from '@/types/Process'
// import { MinPriorityQueue } from '@datastructures-js/priority-queue'

// const CPUAlgorithm = {

//     timeQuantum : 2,
//     createProcess:function(pid:number,arrivalTime:number,burstTime:number,priority:number){
//         const process: Process = {
//             executeTurn: 0,
//             pid: pid,
//             arrivalTime: arrivalTime,
//             burstTime: burstTime,
//             priority: priority,
//             waitingTime: 0,
//             turnAroundTime: 0,
//             completionTime: 0
//         }
//         return process
//     },

//     //fcfs
//     /**
//      * FCFS 알고리즘 함수
//      * @param processes 
//      * @returns 
//      */
//     fcfs:function(processes: Process[]){
//         let totalProcessTime = 0
//         let turn = 1
//         const sortedProcess = processes.sort((a, b) => a.arrivalTime - b.arrivalTime)
        
//         sortedProcess.map(e => {
//             e.executeTurn = turn++ // process execute turn
//             e.waitingTime = totalProcessTime - e.arrivalTime // process waiting time
        
//             totalProcessTime += e.burstTime // total process time
//             e.completionTime = totalProcessTime // process completion time
//             e.turnAroundTime = totalProcessTime - e.arrivalTime // process turn around time
//         })
        
//         return sortedProcess
//     },

//     /**
//      * shortest job first 알고리즘 함수
//      * 
//      * @param processes 실행할 프로세스 
//      */
//     sjf:function(processes: Process[]){
//         const priorityQueue = MinPriorityQueue.fromArray<Process>(processes)
//         // const sortedProcess = processes.sort((a, b) => a.burstTime - b.burstTime)
        
//     },

//     /**
//      * stable priority 알고리즘 함수
//      * @param processes 실행할 프로세스
//      */
//     staticPriority:function(processes: Process[]){
        
//     },
//     dynamicsPriorty:function(processes: Process[]){
//     },
//     srt:function(processes: Process[]){
//     },
//     rr:function(processes: Process[]){
//     },
//     hrn:function(processes: Process[]){
//     }




//     // //sjf
//     // const sjf = (processes: Process[]) => {
//     //     const sortedProcess = processes.sort((a, b) => a.burstTime - b.burstTime)
//     // }

//     // //stable priority
//     // const stablePriority = (processes: Process[]) => {
//     //     const sortedProcess = processes.sort((a, b) => a.priority - b.priority)
//     // }

//     // //unstable priority
//     // const unstablePriority = (processes: Process[]) => {
//     //     const sortedProcess = processes.sort((a, b) => a.priority - b.priority)
//     // }

//     // //srt
//     // const srt = () => {

//     // }

//     // //round robin
//     // const roundRobin = () => {

//     // }

//     // //hrn
//     // const hrn = () => {
    
//     // }

//     // return {
//     //     createProcess
//     // }
// }

// export default CPUAlgorithm