const fromLast = require('./index');
const L = require('./linkedlist');
const List = L.LinkedList;
const Node = L.Node;

test('fromLast is a function', () => {
  expect(typeof fromLast).toEqual('function');
});

test('fromLast returns the node n elements from the end', () => {
  const l = new List();

  l.insertLast('a');
  l.insertLast('b');
  l.insertLast('c');
  l.insertLast('d');
  l.insertLast('e');

  expect(fromLast(l, 3).data).toEqual('b');
});


test('fromLast returns the node n elements from the end 2', () => {
  const l = new List();

  l.insertLast('a');
  l.insertLast('b');
  l.insertLast('c');
  l.insertLast('d');
  l.insertLast('e');
  l.insertLast('x');
  l.insertLast('y');
  l.insertLast('w');
  l.insertLast('m');
  l.insertLast('n');
  l.insertLast('l');

  expect(fromLast(l,5).data).toEqual('x');
});
