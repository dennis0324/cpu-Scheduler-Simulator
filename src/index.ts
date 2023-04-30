import fcfs from "./schedulAlgorithm/type/fcfs"
import sjf from "./schedulAlgorithm/type/sjf"
import nonpreemptivePriority from "./schedulAlgorithm/type/nonpreemptivePriority"
import preemptivePriority from "./schedulAlgorithm/type/preemptivePriority"
import hrn from "./schedulAlgorithm/type/fcfs"
import rr from "@/schedulAlgorithm/type/rr"
import srt from "@/schedulAlgorithm/type/srt"



module.exports = {
    name: '@cpuScheduler',
    fcfs,
    sjf,
    nonpreemptivePriority,
    preemptivePriority,
    hrn,
    rr,
    srt
}