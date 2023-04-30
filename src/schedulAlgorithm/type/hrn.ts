import schedular from "@/schedulAlgorithm/cpuScheduler";
import Process from "@/types/process";
import { PriorityQueue } from "@datastructures-js/priority-queue";

export default class staticPriority extends schedular{

    private readyQueue: Process[]
    constructor(){
        super()
        this.readyQueue = []
    }

    protected override workingPCB: () => boolean = () => this.dispatchedPCB != null || this.readyQueue.length > 0
    protected override shouldDispatch = (): boolean =>this.dispatchedPCB == null;

    push(process:Process){
        this.onPush(process)
        this.readyQueue.push(process)
    }

    dispatch(): void {
        const currentTime = this.currentTime
        const max = this.readyQueue.reduce(function(prev, current) {
            const prevPriority = (prev.burstTime + (currentTime - prev.arrivalTime)) / prev.burstTime;
            const currentPriority = (current.burstTime + (currentTime - current.arrivalTime)) / current.burstTime;
            return (prevPriority > currentPriority) ? prev : current
        }) //returns object
        this.onDispatch(max)
        this.readyQueue.splice(this.readyQueue.indexOf(max), 1)
    }
    
}