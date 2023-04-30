import schedular, { copyProcess } from "@/schedulAlgorithm/cpuScheduler";
import Process from "@/types/process";
import { PriorityQueue } from "@datastructures-js/priority-queue";

export default class staticPriority extends schedular{

    private readyQueue: PriorityQueue<Process>
    constructor(){
        super()
        this.readyQueue = new PriorityQueue<Process>((a,b) => {
            if(a.priority == b.priority)
                return a.arrivalTime > b.arrivalTime ? 1 : -1
            return a.priority > b.priority ? 1 : -1
        })
    }

    protected override workingPCB: () => boolean = () => this.dispatchedPCB != null || this.readyQueue.size() > 0
    protected override shouldDispatch = (): boolean =>this.dispatchedPCB == null 
    || this.dispatchedPCB.priority > this.readyQueue.front()?.priority;

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
        this.onDispatch(this.readyQueue.dequeue())
    }
    
}