- path algorightm are used in google map
-
- There are n network nodes labelled 1 to N. Given a times array, containing edges represented by arrays [u,v,w] where u is the source code, v is the target node, w is the time taken to travel from the source code to the target node. Send a signal from node k, return how long it takes for all nodes to receive the signal. Return -1 if it's impossible

- Graph can be unconencted. if it is connected, return -1.

## Dijkstra's Algorithm

It can be applied to graphs that directed and weighted. What is the shortest posiible path that we can tkae to reach of those each different nodes.

**Greedy Method**
It only applies when we are working with optimization problems and optimization problems are problems that you are looking for minimum possible or maximum possible value. in the case of graph, if we choose the min time to reach from A to N, for each other node from A to Other, we calculate the min time for each case. But this has flaw. It does not work everytime. The reason for this is because we are making those decisions in the moments at every single step that we can make decision. We are not thinking about what the future steps can be. Dickstra'a Algortihm solves this weakness

In Dijksta's Algorithm we calculate next possible moves too.
