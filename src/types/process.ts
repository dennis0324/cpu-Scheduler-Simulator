export default interface Process {
    pid:number;
    burstTime:number;
    priority:number;
    remainingTime:number;
    completionTime:number;
    
    arrivalTime:number;
    lastfinishTime:number;
    waitingTime:number;
    executeTime:number;
    
    
}