/*
下面，利用 for...of循环会自动依次执行 yield命令的特性，提供一种更一般的控制流管理的方法。
 */
let steps = [step1Func, step2Func, step3Func];

function* iterateSteps(steps){
    for(var i = 0; i < steps.length; i++ ){
        var step = steps[i];
        yield step();
    }
}
/*
上面代码中，数组 steps 封装了一个任务的多个步骤，Generator 函数 iterateSteps则是依次为这些步骤加上 yield命令。
 */

/*
将任务分解成步骤之后，还可以将项目分解成多个依次执行的任务。
 */
let jobs = [job1, job2, job3];

function* iterateJobs(jobs){
  for (var i=0; i< jobs.length; i++){
    var job = jobs[i];
    yield* iterateSteps(job.steps);
  }
}
/*
上面代码中，数组 jobs封装了一个项目的多个任务，Generator 函数 iterateJobs则是依次为这些任务加上 yield*命令。
 */
/*
最后，就可以用 for...of 循环一次性依次执行所有任务的所有步骤。
 */
for(var step of iterateJobs(jobs)){
    console.log(step.id);
}
/*
再次提醒，上面的做法只能用于所有步骤都是同步操作的情况，不能有异步操作的步骤。
如果想要依次执行异步的步骤，必须使用后面的《异步操作》一章介绍的方法。
 */
/*
for...of的本质是一个while循环，所以上面的代码实质上执行的是下面的逻辑。
 */
var it = iterateJobs(jobs);
var res = it.next();

while(!res.done){
    // ...
    res = it.next();
}


