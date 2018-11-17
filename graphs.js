module.exports =  class Graph {
    constructor(nodes, edges){
        this.graph = {};
        nodes.map( (n) => {
            this.graph[n] = []
        });
        if (!Array.isArray(edges)){ return;}
        edges.map( (edg) => {
            this.addEdge(edg[0], edg[1])
        });

    }

    nodes(){
        return Object.keys(this.graph);
    }

    neighbours(a){
        if (!this.hasNode(a)) return;
        return this.graph[a]
    }


    hasNode(a){
        return (Array.isArray(this.graph[a])) ;
    }


    addNodeUnsafe(a){
        this.graph[a]=[];
        return this;
    }

    addNode(a){
        if (this.hasNode(a)){ return this; }
        this.graph[a] = [];
        return this;
    }

    removeNode(a){
        if (!this.hasNode(a)){ return this; }
        this.graph[a].map((n) => {
            this.graph[n].splice(this.graph[n].indexOf(a), 1);
        });
        delete this.graph[a];
        return this;
    }

    hasEdge(a,b){
        if (!this.hasNode(a)) return false;
        if (!this.hasNode(b)) return false;
        return this.graph[a].includes(b);
    }

    hasEdgeUnsafe(a,b){
      return this.graph[a].includes(b);
    }

    addEdgeUnsafe(a,b){
        this.graph[a].push(b);
        this.graph[b].push(a);
        return this;
    }

    addEdge(a,b) {
        this.addNode(a).addNode(b);
        if (this.hasEdge(a,b)){ return this; }
        this.graph[a].push(b);
        this.graph[b].push(a);
        return this;
    }


    removeEdge(a,b){
        if (!this.hasEdge(a, b)) return this;
        this.graph[a].splice(this.graph[a].indexOf(b),1);
        this.graph[b].splice(this.graph[b].indexOf(a),1);
        return this;
    }


    toString(){
        // to do
        return this;
    }

    toGraphJSON(){
       //to do

    }


    degree(a){
        if (a == undefined){
            a = this.nodes()
        }
        if (Array.isArray(a)){
            return  a.map((nod)=>{
                return this.graph[nod].length;
            })
        }else if (this.hasNode(a)){
            return this.graph[a].length;
        }else{
            return null;
        }
    }

    degreeList(){
      return this.nodes().map((n) => {
        return { node: n, degree : this.graph[n].length}
      });
    }


    static random(n, d) {
        let g = new Graph([0]);
        for (let i = 1; i < n; i++){
            g.addNodeUnsafe(i);
            for (let j=0; j<i; j++){
                if (Math.random() < d ) { g.addEdgeUnsafe(i,j); }
            }
        }
        return g;
    }

    static fromGraphJSON(){
      //to do
    }



}
