const EventEmitter = require('events');

// 1. Create a school bell system using EventEmitter
class SchoolBellSystem extends EventEmitter {
  startClass() {
    this.emit('classStart');
  }

  endClass() {
    this.emit('classEnd');
  }
}

const bellSystem = new SchoolBellSystem();

// Register event listeners
bellSystem.on('classStart', () => {
  console.log(' [Event]: Class has started! Please take your seats.');
});

bellSystem.on('classEnd', () => {
  console.log(' [Event]: Class has ended! Time for a break.');
});

console.log('--- School Day Begins ---');

// Trigger the start class event synchronously
bellSystem.startClass();

console.log('\n---  Event Loop Demonstration ---');

// Schedule asynchronous operations
setTimeout(() => {
  console.log(' [setTimeout]: Ring bell (Timer Phase)');
}, 0);

setImmediate(() => {
  console.log(' [setImmediate]: Ring bell (Check Phase)');
});

process.nextTick(() => {
  console.log(' [process.nextTick]: Ring bell (NextTick Queue)');
});

// Trigger the end class event synchronously
bellSystem.endClass();

console.log('--- School Day Ends (End of Synchronous Execution) ---');