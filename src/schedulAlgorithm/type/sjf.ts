import Process from "@/types/process";
import schedular from "@/schedulAlgorithm/cpuSchedular";
import { MinPriorityQueue, PriorityQueue } from "@datastructures-js/priority-queue";

export default class sjf extends schedular{
    private readyQueue:PriorityQueue<Process>;

    constructor(){
        super()
        this.readyQueue = new PriorityQueue<Process>((a,b) => {
            return a.burstTime > b.burstTime ? 1 : -1
        })
    }

    protected override workingPCB: () => boolean = () => this.dispatchedPCB != null || this.readyQueue.size() > 0
    protected override shouldDispatch = (): boolean =>this.dispatchedPCB == null;

    push(process:Process){
        this.onPush(process)
        this.readyQueue.push(process)
    }

    dispatch(): void {
        this.onDispatch(this.readyQueue.dequeue())
    }

}