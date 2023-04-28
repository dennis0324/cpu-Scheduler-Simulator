import Process from "@/types/Process";

export abstract class schedular{
    private currentTime:number
    private processQueue:Process[]
    protected dispatchedPCB:Process | null

    private result:Process[]


    constructor(){
        this.currentTime = 0;
        this.dispatchedPCB = null;
        this.result = [];
        this.processQueue = [];

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
        this.dispatchedPCB = null;
    }


    getResult(processes:Process[]){
        this.processQueue = processes.sort((a,b) => a.arrivalTime - b.arrivalTime)
        this.processQueue.forEach(e => this.push(e))
        while(this.workingPCB()){
            if(this.shouldDispatch())
                this.dispatch()
            this.run()
        }
        console.log(this.currentTime)
        return this.result
    }

}

const createProcess = (pid:number,arrivalTime:number,burstTime:number,priority:number) => {
    const process: Process = {
        pid: pid,
        arrivalTime: arrivalTime,
        burstTime: burstTime,
        priority: priority,
        remainingTime: burstTime,
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
        remainingTime: process.burstTime,
        priority: process.priority,
        waitingTime: process.waitingTime,
        completionTime: process.completionTime
    }
    return newProcess
}

export {createProcess, copyProcess}