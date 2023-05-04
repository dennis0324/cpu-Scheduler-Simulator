import Process from "@/types/process";
import schedular from "@/schedulAlgorithm/cpuScheduler";

export default class fcfs extends schedular{

    private readyQueue:Process[]

    constructor(){
        super()
        this.readyQueue = []
    }

    // define if scheduler is runnning or not
    // 스케줄러가 실행되고 있는지 확인하는 조건은 정의
    // pcb that is execute state or readyQueue's size is bigger than 0, then it is running
    //실행상태의 pcb 혹은 준비큐의 크기가 0보다 크면 실행중이라고 판단
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