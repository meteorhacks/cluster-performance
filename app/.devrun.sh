MONGO_URL=mongodb://localhost/test-test \
CLUSTER_DISCOVERY_URL=mongodb://localhost/discovery \
CLUSTER_ENDPOINT_URL=http://localhost:$PORT \
CLUSTER_BALANCER_URL=http://localhost:$PORT \
CLUSTER_SERVICE=web \
CLUSTER_PUBLIC_SERVICES=gobackend \
meteor --port $PORT