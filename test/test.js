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


  describe('#nodes()', function() {
    it('should return the nodes vector', function() {
      assert.deepEqual((new Graph(['a', 'b', 'c'])).nodes(), ['a', 'b', 'c']);
      assert.deepEqual((new Graph([1,2,3,4,5,6])).nodes(), [1,2,3,4,5,6]);
      assert.deepEqual((new Graph([])).nodes(),[]);
    });
  }); //ens nodes

  describe('#hasEdge()', function() {
    it('should return TRUE if edge is present', function() {
      assert.equal((new Graph(['a', 'b'], [['a', 'b']])).hasEdge('a', 'b'), true);
      assert.equal((new Graph(['a', 'b'], [['a', 'b']])).hasEdge('b', 'a'), true);
      assert.equal((new Graph([1, 2], [[1, 2]])).hasEdge(1, 2), true);
    });

    it('should return FALSE if edge is  not present', function() {
      assert.equal((new Graph(['a', 'b'])).hasEdge('a', 'b'), false);
      assert.equal((new Graph(['a', 'b', 'c'], [['a', 'c']])).hasEdge('b', 'a'), false);
      assert.equal((new Graph([1, 2, 3], [[1, 2]])).hasEdge(3, 2), false);
    });
  });// end hasEdge

  describe('#addEdge()', function() {
     it('should add edge', function(){
       assert.equal((new Graph(['a', 'b'])).addEdge('a', 'b').hasEdge('a', 'b'), true)
       assert.equal((new Graph([1, 0])).addEdge(0, 1).hasEdge(1, 0), true)
     })

     it('should not add edge if already present', function(){
       assert.deepEqual((new Graph(['a', 'b'], [['a', 'b']])).addEdge('a', 'b').graph['a'], ['b'])

     })
  });
});
