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
    // define if scheduler is runnning or not
    // 스케줄러가 실행되고 있는지 확인하는 조건은 정의
    // pcb that is execute state or readyQueue's size is bigger than 0, then it is running
    //실행상태의 pcb 혹은 준비큐의 크기가 0보다 크면 실행중이라고 판단
    protected override workingPCB: () => boolean = () => this.dispatchedPCB != null || this.readyQueue.length > 0

    // define if scheduler should dispatch new pcb or not
    // 스케줄러가 새로운 pcb를 디스패치 해야하는지 확인하는 조건은 정의
    // if dispatched execute time is same as time quantum, then it should dispatch new pcb
    // 디스패치된 pcb의 실행시간이 time quantum과 같다면 새로운 pcb를 디스패치 해야한다고 판단
    protected override shouldDispatch = (): boolean =>this.dispatchedPCB == null 
    || this.dispatchedPCB.executeTime == this.timeQuantum

    push(process:Process){
        this.onPush(process)
        this.readyQueue.push(process)
    }

    dispatch(): void {
        if(this.dispatchedPCB != null){
            this.dispatchedPCB!.lastfinishTime = this.currentTime
            if(this.dispatchedPCB.remainingTime > 0){
                this.readyQueue.push(this.dispatchedPCB!)
            }
            this.timeout()
        }
        this.onDispatch(this.readyQueue.shift()!)
    }

}