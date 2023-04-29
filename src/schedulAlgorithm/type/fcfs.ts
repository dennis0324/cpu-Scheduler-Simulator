import Process from "@/types/process";
import schedular from "../cpuSchedular";

export default class fcfs extends schedular{

    private readyQueue:Process[]

    constructor(){
        super()
        this.readyQueue = []
    }

    protected override workingPCB: () => boolean = () => this.dispatchedPCB != null || this.readyQueue.length > 0

    push(process:Process){
        this.onPush(process)
        this.readyQueue.push(process)
    }

    dispatch(): void {
        this.onDispatch(this.readyQueue.shift()!)
    }

    shouldDispatch(): boolean {
        return this.dispatchedPCB == null;
    }
}