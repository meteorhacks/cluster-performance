MONGO_URL=mongodb://localhost/test-test \
CLUSTER_DISCOVERY_URL=mongodb://localhost/discovery10 \
CLUSTER_ENDPOINT_URL=http://localhost:$PORT \
CLUSTER_BALANCER_URL=http://localhost:$PORT \
CLUSTER_SERVICE=web \
meteor --port $PORT