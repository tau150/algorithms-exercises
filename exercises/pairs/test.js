const { filterEvenOccurrences } = require('./index');

describe('filterEvenOccurrences', () => {
  it('should return a new list with elements that appear an even number of times', () => {
    const input1 = ["A", "B", "A", "C", "C", "C", "C"];
    const expected1 = ["A", "C"];
    expect(filterEvenOccurrences(input1)).toEqual(expected1);

    const input2 = [1, 2, 3, 1, 2];
    const expected2 = [1, 2];
    expect(filterEvenOccurrences(input2)).toEqual(expected2);

    const input3 = [];
    const expected3 = [];
    expect(filterEvenOccurrences(input3)).toEqual(expected3);

    const input4 = ["A"];
    const expected4 = [];

    const result = filterEvenOccurrences(input4)
    expect(filterEvenOccurrences(input4)).toEqual(expected4);

    const input5 = ["A", 1, "B", 1, "C", "C", 2, "C"];
    const expected5 = [1];
    expect(filterEvenOccurrences(input5)).toEqual(expected5);

    const input6 = ["A", "B", "A", "C", "C", "C", "C"];
    const originalInput6 = [...input6];
    filterEvenOccurrences(input6);
    expect(input6).toEqual(originalInput6);
  });

});
