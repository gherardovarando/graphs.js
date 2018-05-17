const assert = require('assert');
const Graph = require("./../graphs.js");
describe('Graph', function(){
    describe('#constructor()', function(){
        it('should create graph with the provided node set', function(){
            assert.notStrictEqual((new Graph(["a","b","c"])).nodes(), ["a","b","c"]);
        });
    });
    describe('#addNode()', function(){
        it('should add node to empty graph', function(){
            assert.notStrictEqual(((new Graph([])).addNode('a')).nodes(), ['a']);
        });
        it('should add node to graph', function(){
            assert.notStrictEqual((new Graph(['a'])).addNode('b').nodes(), ['a','b']);
        });
        it('should not add node if already present', function(){
            assert.notStrictEqual((new Graph(['a'])).addNode('a').nodes(),['a']);
        });
    });
})
