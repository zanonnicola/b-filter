import Bfilter from '../src';

describe('Bloom Filter', () => {
  it('Create a filter correctly', () => {
    const bfilter = new Bfilter(20);
    expect(bfilter.size).toBeDefined;
    expect(bfilter.hashCount).toBeDefined;
  });
  it('Add items to filter', () => {
    const bfilter = new Bfilter(20);
    bfilter.add('test 1');
    bfilter.add('test 2');
    expect(bfilter.itemCounter).toEqual(2);
  });
  it('should return true for elements that might be in the set', () => {
    const bfilter = new Bfilter(20);
    bfilter.add('test 1');
    bfilter.add('test 2');
    expect(bfilter.test('test 1')).toBeTruthy();
    expect(bfilter.test('test 2')).toBeTruthy();
  });
  it('should return false for elements that are definitively nt in the set', () => {
    const bfilter = new Bfilter(20);
    bfilter.add('test 1');
    bfilter.add('test 2');
    expect(bfilter.test('ciao')).toBeFalsy();
    expect(bfilter.test('random')).toBeFalsy();
  });
});
