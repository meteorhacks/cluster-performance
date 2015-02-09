

## Without Cluster (Control)



## With Cluster - But not configured (Control)

CPU: 90%, Mem: 110 MB
PubSub : average: 2500/min 225ms
         posts: 2500/min 225ms


## With Cluster - Configured for Self
CPU: 90%, Mem: 110 MB
PubSub : average: 2376/min 212ms
         posts: 2376/min 225ms


## With Cluster - Configured with Two Instance (Single Balancer)

Server 1 - CPU: 80%, Mem: 100 MB (this is the load balancer)
Server 1 - CPU: 70%, Mem: 100 MB

PubSub : average: 2600/min 148ms
         posts: 2600/min 148ms

## With Cluster - Configured with Two Balancers

Server 1 - CPU: 90%, Mem: 100 MB (this is the load balancer)
Server 1 - CPU: 90%, Mem: 100 MB

PubSub : average: 4200/min 200ms
         posts: 4200/min 200ms

## With Cluster - Configured with Three Balancers

Server 1 - CPU: 90%, Mem: 100 MB (this is the load balancer)
Server 1 - CPU: 90%, Mem: 100 MB

PubSub : average: 6000/min 200ms
         posts: 6000/min 200ms




