# Cluster Performance Testing Setup

This is the performance testing setup used to load test [Cluster](https://github.com/meteorhacks/cluster) and measure it's peroformance. You can read this blog post to get a high level overview of what going on here.

In this repo, we've two components.

1. A Meteor application (which is going to be load tested)
2. Load testing suite

Let's look at each individually.

## Meteor App

This app resides on the `app` directory. It's very basic app sending 200kB amount of data when a client subscribed. We've added `meteorhacks:cluster` package into that as well. You can deploy it as an usual Meteor app. 

> We are using Meteor Up to deploy this. Sample Meteor Up configuration is in the  `app/.deploy` directory. But it's okay to deploy in way you like.
> If you are trying to deploy this app with Docker. Try [MeteorD](https://github.com/meteorhacks/meteord).
> 

There are few modes we can run cluster. Here are they:

#### Control Test

Just run the app normally. Then, cluste is turned off.

#### With One Balancer and "n" nodes

Let's run multiple instances of this app. In this app, it's okay to use multiple MongoDB servers for each app. 

> We are not looking at MongoDB performance. Anyway, meteor will cache the data since we are suing the same query. So, MongoDB load is minimal.

When you are running the app export following env. vars for each app.

* CLUSTER_DISCOVERY_URL=mongodb://a_common_mongo_db_server
* CLUSTER_ENDPOINT_URL=http://ip_address_of_this_server
* CLUSTER_SERVICE=web

After each instance is running, send traffic to one of the instances.

#### All Servers are Balancers

With this mode, each server in the cluster is a balancer. For that, simply deploy multiple instance of this app with following env variables.

* CLUSTER_DISCOVERY_URL=mongodb://a_common_mongo_db_server
* CLUSTER_ENDPOINT_URL=http://ip_address_of_this_server
* CLUSTER_SERVICE=web
* CLUSTER_BALANCER_URL=http://ip_address_of_this_server

After each instance is running, send traffic to one of the instances.

In any of the above cases, simply add more instances with similar configurations to increase the capacity of the cluster.

## Load Testing 

In order to load test our app, sending Websocket traffic directly does not utilize the cluster. For that, we need to move into the SockJS protocol. It's current protocol used by the Meteor client in the browser. 

Node DDP client also has [that mode](https://github.com/oortcloud/node-ddp-client#sockjs-mode). If you are invoking a load test using it, use the SockJs mode.

For this setup, we are using [MeteorDown](https://github.com/meteorhacks/meteor-down) for load testing. It works pretty well with the cluster.

Our current load test script is the `load_test.js`. Which invokes a subscription on our app. After it gets the data, it'll kill that client. There will be 10 concurrent clients doing that always. You can change that too.

To start the load test, you need to give an URL. That's one of the URL of app instance. Check `entryPoint` variable in the `load_test.js`.

### Run the load test manually

Install MeteorDown with: `npm i -g meteor-down`

Then run `meteor-down load_test.js` to invoke the test.

### Run the load test as a node app

There is another mode we can run the load test. In this repo, we've configured our load test as a node app. Check the `package.json` file. 

First install node dependancies with: `npm i`

Then run `npm start` to invoke the load test.

### Scale the load test with Heroku

Since this is a node app, we can scale the load test pretty easily. For that, we need to deploy this as a background worker. We've already configured that in the `Procfile`. 

Just deploy this repo into heroku. Follow these steps:

* Create an app with: `heroku apps:create <some-name>`
* Then deploy it with: `git push heroku master`
* Then scale the workers with: `heroku ps:scale worker=n`
* Replace n with any amount you like and you can have the load.

If you need more information or having an issue. Submit in issue.