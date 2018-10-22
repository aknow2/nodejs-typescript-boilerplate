import Counter from './Counter';

it('test counter', () => {
  const counter = new Counter();

  expect(counter.Num).toEqual(0);
  counter.increment();
  expect(counter.Num).toEqual(1);

});
