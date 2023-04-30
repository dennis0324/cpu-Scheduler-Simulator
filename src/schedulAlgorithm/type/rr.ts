import Process from "@/types/process";
import schedular, { copyProcess } from "@/schedulAlgorithm/cpuScheduler";
import { MinPriorityQueue, PriorityQueue } from "@datastructures-js/priority-queue";

export default class sjf extends schedular{
    private readyQueue:Process[]
    private timeQuantum:number;

    constructor(timeQuantum:number){
        super()
        this.timeQuantum = timeQuantum
        this.readyQueue = []
    }

    protected override workingPCB: () => boolean = () => this.dispatchedPCB != null || this.readyQueue.length > 0
    protected override shouldDispatch = (): boolean =>this.dispatchedPCB == null 
    || this.dispatchedPCB.executeTime == this.timeQuantum

    push(process:Process){
        this.onPush(process)
        this.readyQueue.push(process)
    }

    dispatch(): void {
        if(this.dispatchedPCB != null){
            this.dispatchedPCB!.arrivalTime = this.currentTime
            if(this.dispatchedPCB.remainingTime > 0){
                this.readyQueue.push(copyProcess(this.dispatchedPCB))
            }
            this.timeout()
        }
        this.onDispatch(this.readyQueue.shift()!)
    }

}