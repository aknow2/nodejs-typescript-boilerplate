import Counter from './Counter';

const sleep = (msec: number) => {
  return new Promise(r => setTimeout(r, msec));
};
const incrementEvery5Sec = async (counter: Counter): Promise<never> => {
  while (true) {
    console.log(`Current number is ${counter.Num}`);
    await sleep(5000);
    counter.increment();
  }
};

console.log('===================================================================================');
console.log('You can debug by accessing 『chrome://inspect/#devices』 in Chrome');
console.log('===================================================================================');

const counter = new Counter();
(async () => await incrementEvery5Sec(counter))();
