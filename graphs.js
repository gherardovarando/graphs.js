module.exports =  class Graph {
    constructor(nodes, edges){
        this.graph = {};
        nodes.map( (n) => {
            this.graph[n] = []
        });
        if (!Array.isArray(edges)){ return;}
        edges.map( (edg) => {
            this.addEdge(edg) 
        });

    }

    nodes(){
        return Object.keys(this.graph);
    }

    edges(){
        //to do 
    }


    hasNode(a){
        return (Array.isArray(this.graph[a])) ; 
    }


    addNodeUnsafe(a){
        this.graph[a]=[];
    }

    addNode(a){
        if (this.hasNode(a)){ return; }
        this.graph[a] = [];
    }

    removeNode(a){
        if (!this.hasNode(a)){ return ; }
        this.graph[a].map((n) => {
            this.graph[n].splice(this.graph[n].indexOf(a), 1);
        });
        delete this.graph[a]; 
    }

    hasEdge(a,b){
        return this.graph[a].includes(b);  
    }

    addEdgeUnsafe(a,b){
        this.graph[a].push(b);
        this.graph[b].push(a);
    }

    addEdge(a,b) {
        if (!this.hasNode(a)){ this.addNode(a); }
        if (!this.hasNode(b)){ this.addNode(b); }
        if (this.hasEdge(a,b)){ return }  
        this.graph[a].push(b);
        this.graph[b].push(a);
    }


    removeEdge(a,b){
        // to do 
    }


    toString(){
        // to do 
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

}
