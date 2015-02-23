cd /opt/meteor/app
ln -s main.js app.js
source ../config/env.sh
stop meteor || :

export CLUSTER_WORKERS_COUNT=0
passenger start --port 80 --min-instances=4