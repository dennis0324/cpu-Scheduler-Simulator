import Process from "@/types/Process";

export abstract class schedular{
    private currentTime:number;
    private dispatchedPCB:Process | null;


    constructor(){
        this.currentTime = 0;
        this.dispatchedPCB = null;

    }

    workingPCB = () => this.dispatchedPCB != null
    

    abstract push(process:Process):void;

    onPush(process:Process){
        if(this.currentTime < process.arrivalTime){
            while()
        }
    }

    run(){
        this.currentTime++;

    }

}