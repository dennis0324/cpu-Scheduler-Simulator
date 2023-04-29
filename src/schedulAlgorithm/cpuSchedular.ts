import Process from "@/types/process";

/**
 * 프로세스를 실행하는 스케줄러 클래스 scheduler class to execute processes
 */
export abstract class schedular{
    // 스케줄러 실행 시간 scheduler execute time
    private currentTime:number
    // 실행 할 전체 프로세스 큐 queue of all processes to execute
    private processQueue:Process[]
    // 실행 중인 프로세스 executed process
    protected dispatchedPCB:Process | null

    // 전체 프로세스 실행 시간 total process execute time
    private totalExecuteTime:number
    // 프로세스 실행 결과 process execute result
    private result:Process[]


    constructor(){
        this.currentTime = 0;
        this.dispatchedPCB = null;
        this.result = [];
        this.processQueue = [];

        this.totalExecuteTime = 0;

    }

    protected workingPCB = () => this.dispatchedPCB != null
    
    protected abstract shouldDispatch():boolean;
    protected abstract push(process:Process):void;
    protected abstract dispatch():void;

    

    onPush(process:Process){
        while(this.workingPCB()){
            if(this.shouldDispatch())
                this.dispatch()
            this.run()
        }
    }

    onDispatch(process:Process){
        this.dispatchedPCB = process;
    }

    run(){
        this.currentTime++;
        this.dispatchedPCB!.remainingTime--;
        if(!this.dispatchedPCB!.remainingTime)
            this.timeout()
    }

    timeout(){
        this.result.push(copyProcess(this.dispatchedPCB!))
        // to add execute time to total execute time
        // reason why subtract remaining time is that remaining time is the time that process has been executed
        this.totalExecuteTime += (this.dispatchedPCB!.burstTime - this.dispatchedPCB!.remainingTime)
        this.dispatchedPCB = null;
    }


    getResult(processes:Process[]){
        this.processQueue = processes.sort((a,b) => a.arrivalTime - b.arrivalTime)
        this.processQueue.forEach(e => this.push(e))
        // 잔여 프로세스 실행 remaining process execute
        while(this.workingPCB()){
            if(this.shouldDispatch())
                this.dispatch()
            this.run()
        }
        console.log(this.totalExecuteTime)
        return this.result
    }

}

const createProcess = (pid:number,arrivalTime:number,burstTime:number,priority:number) => {
    const process: Process = {
        pid: pid,
        arrivalTime: arrivalTime,
        remainingTime: burstTime, //처음 초기화를 위해 남은 전체 코드를 적은 것이므로 brust 타임이 맞다
        burstTime: burstTime,
        priority: priority,
        waitingTime: 0,
        completionTime: 0
    }
    return process
}

const copyProcess = (process:Process) => {
    const newProcess: Process = {
        pid: process.pid,
        arrivalTime: process.arrivalTime,
        burstTime: process.burstTime,
        remainingTime: process.remainingTime, //복사하기 위한 코드
        priority: process.priority,
        waitingTime: process.waitingTime,
        completionTime: process.completionTime
    }
    return newProcess
}

export {createProcess, copyProcess}