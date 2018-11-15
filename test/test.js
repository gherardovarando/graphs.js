const assert = require('assert');
const Graph = require("./../graphs.js");
describe('Graph', function() {

  describe('#constructor()', function() {
    it('should create graph with the provided node set', function() {
      assert.deepEqual((new Graph(['a', 'b', 'c'])).nodes(), ['a', 'b', 'c']);
    });
    it('should create graph with provided edge set', function() {
      assert.deepEqual((new Graph(['a', 'b', 'c'],
          [
            ['a', 'b'],
            ['c', 'b']
          ]).graph['a']),
        ['b']);
      assert.deepEqual((new Graph(['a', 'b', 'c'],
          [
            ['a', 'b'],
            ['c', 'b']
          ]).graph['b']),
        ['a', 'c']);

      assert.deepEqual((new Graph(['a', 'b', 'c'],
          [
            ['a', 'b'],
            ['c', 'b']
          ]).graph['c']),
        ['b']);
    });
  }); //end constructor

  describe('#addNode()', function() {
    it('should add node to empty graph', function() {
      assert.deepEqual(((new Graph([])).addNode('a')).nodes(), ['a']);
    });
    it('should add node to graph', function() {
      assert.deepEqual((new Graph(['a'])).addNode('b').nodes(), ['a', 'b']);
    });
    it('should not add node if already present', function() {
      assert.deepEqual((new Graph(['a'])).addNode('a').nodes(), ['a']);
    });
    it('should return a graph', function() {
      assert.deepEqual((new Graph(['a'])).addNode('a'), new Graph(['a']));
      assert.deepEqual((new Graph(['a'])).addNode('b'), new Graph(['a', 'b']));
      assert.deepEqual((new Graph([])).addNode('a'), new Graph(['a']));
    });
  }); //end addNode

  describe('#removeNode()', function() {
    it('should remove a node', function() {
      assert.deepEqual((new Graph(['a', 'b', 'c'])).removeNode('a').nodes(), ['b', 'c']);
      assert.deepEqual((new Graph(['a', 'b', 'c'])).removeNode('b').nodes(), ['a', 'c']);
      assert.deepEqual((new Graph(['a','b','c'])).removeNode('c').nodes(),['a', 'b']);
    });
    it('should return the graph if the node is not there', function() {
      const g = new Graph(['a', 'b', 'c'], [['a','c'],['c','b']]);
      const g2 = new Graph(['a', 'b', 'c'], [['a','c'],['c','b']]);
      assert.deepEqual(g.removeNode('xxx'), g2);
      assert.deepEqual(g.removeNode(1), g2);
    });
    it('should remove also the respective edges', function() {
       const g = new Graph(['a', 'b', 'c'], [['a','c'],['c','b']]);
       assert.deepEqual(g.removeNode('a').graph['c'], ['b']);
    });
  }); //end removeNode
});
