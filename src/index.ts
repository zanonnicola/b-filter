import murmur from 'murmurhash-js';

interface IBloomFilter {
  add(item: string): void;
  test(item: string): boolean;
}

export default class Bfilter implements IBloomFilter {
  bit_array: Int8Array;
  hash_count: number;
  items: number;
  falsePositiveRate: number;
  itemCounter: number;

  constructor(items: number, falsePositiveRate: number = 0.05) {
    this.items = items;
    this.falsePositiveRate = falsePositiveRate;
    this.bit_array = new Int8Array(this.size);
    this.hash_count = this.hashCount;
    this.itemCounter = 0;
  }
  /**
   * Return the Size of Bit Array based on the numbers of items and expected false positive probability
   *
   * @readonly
   * @type {number}
   * @memberof Bfilter
   */
  get size(): number {
    return Math.floor(
      -(this.items * Math.log(this.falsePositiveRate)) / Math.log(2) ** 2
    );
  }

  get hashCount() {
    return (this.size / this.items) * Math.log(2);
  }

  /**
   * Add element to the filter
   *
   * @param {string} item
   * @memberof Bfilter
   */
  add(item: string) {
    for (let index = 0; index < this.hash_count; index++) {
      const elHashed = murmur.murmur3(item, index) % this.size;
      this.bit_array[elHashed] = 1;
    }
    this.itemCounter++;
  }
  /**
   * Check if element is in the set
   *
   * @param {string} item
   * @return {boolean} False if the element is definitively not in the filter. True if the element might be in the filter
   * @memberof Bfilter
   */
  test(item: string) {
    for (let index = 0; index < this.hash_count; index++) {
      const elHashed = murmur.murmur3(item, index) % this.size;
      if (this.bit_array[elHashed] === 0) {
        return false;
      }
    }
    return true;
  }
}
