import schedular, { copyProcess } from "@/schedulAlgorithm/cpuScheduler";
import Process from "@/types/process";
import { PriorityQueue } from "@datastructures-js/priority-queue";

export default class staticPriority extends schedular{

    // this readyQueue is sorted by priority
    // 이 준비큐는 우선순위에 따라 정렬
    private readyQueue: PriorityQueue<Process>
    constructor(){
        super()
        this.readyQueue = new PriorityQueue<Process>((a,b) => {
            if(a.priority == b.priority)
                return a.arrivalTime > b.arrivalTime ? 1 : -1
            return a.priority > b.priority ? 1 : -1
        })
    }

    // define if scheduler is runnning or not
    // 스케줄러가 실행되고 있는지 확인하는 조건은 정의
    // pcb that is execute state or readyQueue's size is bigger than 0, then it is running
    //실행상태의 pcb 혹은 준비큐의 크기가 0보다 크면 실행중이라고 판단
    protected override workingPCB: () => boolean = () => this.dispatchedPCB != null || this.readyQueue.size() > 0
    
    // define if scheduler should dispatch new pcb or not
    // 스케줄러가 새로운 pcb를 디스패치 해야하는지 확인하는 조건은 정의
    // if disatched pcb's priority is higher than readyqueue front pcb's priority, then it should dispatch new pcb
    // 디스패치된 pcb가 없다면 새로운 pcb를 디스패치 해야한다고 판단
    protected override shouldDispatch = (): boolean =>this.dispatchedPCB == null 
    || this.dispatchedPCB.priority > this.readyQueue.front()?.priority;

    push(process:Process){
        this.onPush(process)
        this.readyQueue.push(process)
    }

    dispatch(): void {
        //check dispathced pcb
        //디스패치된 pcb가 있는지 확인
        if(this.dispatchedPCB != null){
            // save last finish time
            // 마지막 종료 시간 저장
            this.dispatchedPCB!.lastfinishTime = this.currentTime
            // if pcb's remaining time is bigger than 0, then push it to readyQueue
            // 만약 pcb의 남은 실행시간이 0보다 크다면 준비큐에 다시 넣는다.
            if(this.dispatchedPCB.remainingTime > 0){
                this.readyQueue.push(copyProcess(this.dispatchedPCB))
            }
            this.timeout()
        }
        this.onDispatch(this.readyQueue.dequeue())
    }
    
}