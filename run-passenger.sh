cd /opt/meteor/app
ln -s main.js app.js
source ../config/env.sh
stop meteor || :

passenger start --port 80 --min-instances=4