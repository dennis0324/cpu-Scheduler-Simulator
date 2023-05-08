import Process from "@/types/process";

/**
 * 프로세스를 실행하는 스케줄러 클래스 scheduler class to execute processes
 */
export default abstract class schedular{
    // 실행 할 전체 프로세스 큐 queue of all processes to execute
    private processQueue:Process[]
    // 전체 프로세스 실행 시간 total process execute time
    private totalExecuteTime:number
    // 프로세스 실행 결과 process execute result
    private result:Process[]
    // 스케줄러 실행 시간 scheduler execute time
    protected currentTime:number
    // 실행 중인 프로세스 executed process
    protected dispatchedPCB:Process | null

    constructor(){
        this.currentTime = 0;
        this.dispatchedPCB = null;
        this.result = [];
        this.processQueue = [];

        this.totalExecuteTime = 0;

    }
    
    /**
     * if scheduler is on working
     * 다음의 스케줄러가 아직 실행 상태인지 확인하는 함수이다.
     */
    protected abstract workingPCB():boolean;

    /**
     * if scheduler should dispatch
     * 다음의 스케줄러가 디스패치를 해야하는 상황인지 확인하는 함수이다.
     */
    protected abstract shouldDispatch():boolean;

    /**
     * pcb push function 
     * pcb를 사용할 프로세스를 추가할 때 행동을 정의하는 함수이다.
     * @param process 
     */
    protected abstract push(process:Process):void;

    /**
     * pcb dispatch function
     * pcb를 디스패치할 때 행동을 정의하는 함수이다.
     */
    protected abstract dispatch():void;

    /**
     * pcb push preprocess function
     * pcb 추가 전처리 함수
     * 
     * @param process type Process
     */
    onPush(process:Process){
        // if scheduler is still on, added pcb's arrival time is not smaller than current time
        // because of preemptive scheduling
        // 스케줄러가 실행 중이고, 추가된 프로세스의 도착시간보다 현재 실행 시간이 작아야한다.
        // 선점형 스케줄러로 인한 조건문이다.
        while(this.workingPCB() && this.currentTime < process.arrivalTime){
            // check scheduler need a dispatch
            // 스케줄러가 새로운 디스패치를 확인한다.
            if(this.shouldDispatch())
                this.dispatch()
            // running function
            // 실행 함수
            this.run()
        }
    }

    /**
     * pcb dispatch preprocess function
     * pcb 디스패치 전처리 함수
     *       
     * @param process type Process
     */
    onDispatch(process:Process){
        if (this.currentTime < process.arrivalTime)
        {
            this.currentTime = process.arrivalTime;
        }
        this.dispatchedPCB = process;
        this.dispatchedPCB!.executeTime = 0
        this.dispatchedPCB!.waitingTime = this.currentTime - this.dispatchedPCB!.lastfinishTime
    }


    /**
     * exectue state pcb run function
     * 실행 상태 pcb 실행 함수
     */
    run(){
        this.currentTime++;
        this.dispatchedPCB!.remainingTime--;
        this.dispatchedPCB!.executeTime++;
        if(!this.dispatchedPCB!.remainingTime)
            this.timeout()
    }

    /**
     * scheduler timeout function
     * 스케줄러 타임아웃 함수
     */
    timeout(){
        this.result.push(copyProcess(this.dispatchedPCB!))
        // to add execute time to total execute time
        // reason why subtract remaining time is that remaining time is the time that process has been executed
        this.totalExecuteTime += (this.dispatchedPCB!.burstTime - this.dispatchedPCB!.remainingTime)
        this.dispatchedPCB = null;
    }


    /**
     * simulate corrsponding algorithm
     * 해당 알고리즘을 시뮬레이션 한다.
     * 
     * @param processes 
     */
    simulate(processes:Process[]){
        if(processes.length <= 0) return new Error("processes length should be bigger than 0")
        if(processes.find(e => e.arrivalTime < 0)) return new Error("arrival time should be bigger than 0")
        if(processes.find(e => e.burstTime <= 0)) return new Error("burst time should be bigger than 0")
        this.processQueue = processes.sort((a,b) => a.arrivalTime - b.arrivalTime)
        this.processQueue.forEach(e => this.push(e))
        // 잔여 프로세스 실행 remaining process execute
        while(this.workingPCB()){
            if(this.dispatchedPCB?.pid === 0) 
                console.log(this.currentTime)
            if(this.shouldDispatch())
                this.dispatch()
            this.run()
        }
        console.log(this.totalExecuteTime)
    }

    /**
     * get result of simulation
     * 시뮬레이션 결과를 반환하는 함수
     * 
     * @returns Array of Process
     */
    getResult(){
        return this.result
    }

    getTotalRunTime(){
        return this.totalExecuteTime
    }

    /**
     * get average waiting time of simulation
     * 시뮬레이션의 평균 대기 시간을 반환하는 함수
     * 
     * @returns number
     */
    getAverageWaitingTime(){
        return this.result.reduce((a,b) => a + b.waitingTime,0) / this.processQueue.length
    }

    /**
     * get average turnaround time of simulation
     * @returns number
     */
    getAverageTurnaroundTime(){
        return this.result.reduce((a,b) => a + (b.executeTime + b.waitingTime),0) / this.processQueue.length
    }
}


/**
 * create New Process
 * 새로운 프로세스를 생성하는 함수
 * 
 * @param pid processID 프로세스ID
 * @param arrivalTime arrivalTime 도착시간
 * @param burstTime brustTime 실행시간
 * @param priority priority 우선순위
 * @returns Process
 */
const createProcess = (pid:number,arrivalTime:number,burstTime:number,priority:number) => {
    const process: Process = {
        pid: pid,
        arrivalTime: arrivalTime,
        remainingTime: burstTime, //처음 초기화를 위해 남은 전체 코드를 적은 것이므로 brust 타임이 맞다
        burstTime: burstTime,
        priority: priority,
        waitingTime: 0,
        completionTime: 0,
        executeTime: 0,
        lastfinishTime: arrivalTime
    }
    return process
}

/**
 * copy a Process
 * 프로세스를 복사하는 함수
 * 
 * @param process process
 * @returns new process
 */
const copyProcess = (process:Process) => {
    const newProcess: Process = {
        pid: process.pid,
        arrivalTime: process.arrivalTime,
        burstTime: process.burstTime,
        remainingTime: process.remainingTime, //복사하기 위한 코드
        priority: process.priority,
        waitingTime: process.waitingTime,
        completionTime: process.completionTime,
        executeTime: process.executeTime,
        lastfinishTime: process.lastfinishTime
    }
    return newProcess
}

export {createProcess, copyProcess}