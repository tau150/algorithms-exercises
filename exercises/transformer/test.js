const  transformData  = require('./index');

describe('transformData', () => {
  it('should transform data object into the specified output structure', () => {
    const input1 = { nombres: ["Bruno", "Andrea"], edades: [20, 19] };
    const expected1 = [
      { id: "1", nombre: "Bruno", edad: 20 },
      { id: "2", nombre: "Andrea", edad: 19 },
    ];
    expect(transformData(input1)).toEqual(expected1);

    const input2 = { nombres: [], edades: [] };
    const expected2 = [];
    expect(transformData(input2)).toEqual(expected2);

    const input3 = { nombres: ["Alice", "Bob", "Charlie"], edades: [25, 30, 35] };
    const expected3 = [
      { id: "1", nombre: "Alice", edad: 25 },
      { id: "2", nombre: "Bob", edad: 30 },
      { id: "3", nombre: "Charlie", edad: 35 },
    ];
    expect(transformData(input3)).toEqual(expected3);

    const input4 = { nombres: ["John"], edades: [40] };
    const originalInput4 = { ...input4 };
    transformData(input4);
    expect(input4).toEqual(originalInput4);
  });

});
