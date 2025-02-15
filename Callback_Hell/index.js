function task1(callback) {
  setTimeout(() => {
    console.log(`Task 1 is complete`);
    callback();
  }, 1000);
}

function task2(callback) {
  setTimeout(() => {
    console.log(`Task 2 is complete`);
    callback();
  }, 1000);
}
function task3(callback) {
  setTimeout(() => {
    console.log(`Task 3 is complete`);
    callback();
  }, 1000);
}
function task4(callback) {
  setTimeout(() => {
    console.log(`Task 4 is complete`);
    callback()
  }, 1000);
}

//function chain of callbacks
task1(() => {
  task2(() => {
    task3(() => {
      task4(() => {
        console.log("all task are completed");
      });
    });
  });
});
