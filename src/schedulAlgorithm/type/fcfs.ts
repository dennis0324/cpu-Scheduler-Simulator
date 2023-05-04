import Process from "@/types/process";
import schedular from "@/schedulAlgorithm/cpuScheduler";

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
        //fsfs's default dispatch condition is if there is no pcb in the readyQueue, then it should dispatch new pcb
        //fcfs의 기본 디스패치 방식은 만약 실행 상태의 pcb가 아무것도 없다면 새로 디스패치 해야하기 때문에 다음과 같이 정의한다.
        return this.dispatchedPCB == null; 
    }
}