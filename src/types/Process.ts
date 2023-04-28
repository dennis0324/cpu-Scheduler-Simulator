export default interface Process {
    pid:number;
    arrivalTime:number;
    burstTime:number;
    priority:number;
    remainingTime:number;
    waitingTime:number;
    completionTime:number;

    
}