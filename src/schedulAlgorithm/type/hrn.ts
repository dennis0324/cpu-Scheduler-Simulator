import schedular from "@/schedulAlgorithm/cpuScheduler";
import Process from "@/types/process";
import { PriorityQueue } from "@datastructures-js/priority-queue";

export default class staticPriority extends schedular{

    private readyQueue: Process[]
    constructor(){
        super()
        this.readyQueue = []
    }

    // define if scheduler is runnning or not
    // 스케줄러가 실행되고 있는지 확인하는 조건은 정의
    // pcb that is execute state or readyQueue's size is bigger than 0, then it is running
    //실행상태의 pcb 혹은 준비큐의 크기가 0보다 크면 실행중이라고 판단
    protected override workingPCB: () => boolean = () => this.dispatchedPCB != null || this.readyQueue.length > 0

    // define if scheduler should dispatch new pcb or not
    // 스케줄러가 새로운 pcb를 디스패치 해야하는지 확인하는 조건은 정의
    // if there is no pcb in the readyQueue, then it should dispatch new pcb
    //디스패치된 pcb가 없다면 새로운 pcb를 디스패치 해야한다고 판단
    protected override shouldDispatch = (): boolean =>this.dispatchedPCB == null;

    push(process:Process){
        this.onPush(process)
        this.readyQueue.push(process)
    }

    dispatch(): void {
        // save current time 
        // 현재 실행중인 시간 저장
        const currentTime = this.currentTime
        // find max priority
        // 최대 우선순위를 검색
        const max = this.readyQueue.reduce(function(prev, current) {
            // get a prev priority
            // 전의 우선순위를 구함
            const prevPriority = (prev.burstTime + (currentTime - prev.arrivalTime)) / prev.burstTime;
            // get a current priority
            // 현재 우선순위를 구함
            const currentPriority = (current.burstTime + (currentTime - current.arrivalTime)) / current.burstTime;
            // compare prev and current priority and return bigger one
            // 2개의 프로세스를 비교해서 우선순위가 높은 프로세스를 반환
            return (prevPriority > currentPriority) ? prev : current
        }) //returns object

        // dispatch max priority process
        // 가장 우선순위가 높은 프로세스를 디스패치
        this.onDispatch(max)
        // remove dispatched process from ready queue
        // 디스패치된 프로세스를 준비 큐에서 제거
        this.readyQueue.splice(this.readyQueue.indexOf(max), 1)
    }
    
}