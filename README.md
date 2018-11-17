# simple.graphs.js
### A simple simple graph utility in js
[![Build Status](https://travis-ci.com/gherardovarando/graphs.js.svg?branch=master)](https://travis-ci.com/gherardovarando/graphs.js)
[![npm version](https://badge.fury.io/js/simple.graphs.js.svg)](https://badge.fury.io/js/simple.graphs.js)

### How to use it

```
const Graph = require(simple.graphs.js);

const g = new Graph(['a','b','c'], [['a','c'],['c','b']])

g.graph

g.addNode('d');

g.addEdge('d', 'a');

g.nodes()

g.neighbours('a')

g.degree('a')

g.removeNode('a')

g.removeEdge('b','c')

g.degreeList()

Graph.random(10, 0.5)
```
