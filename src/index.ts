import fcfs from "./schedulAlgorithm/type/fcfs";
import hrn from "./schedulAlgorithm/type/hrn";
import nonpreemptivePriority from "./schedulAlgorithm/type/nonpreemptivePriority";
import preemptivePriority from "./schedulAlgorithm/type/preemptivePriority";
import rr from "./schedulAlgorithm/type/rr";
import sjf from "./schedulAlgorithm/type/sjf";
import srt from "./schedulAlgorithm/type/srt";

export {
    fcfs,
    hrn,
    nonpreemptivePriority,
    preemptivePriority,
    rr,
    sjf,
    srt,
}

module.exports = fcfs
module.exports = hrn
module.exports = nonpreemptivePriority
module.exports = preemptivePriority
module.exports = rr
module.exports = sjf
module.exports = srt
