var dataSizeInKb = process.env.DATA_SIZE_IN_KB || 200;
Posts = new Mongo.Collection('posts');

if(!Posts.findOne()) {
  for(var lc=0; lc<200; lc++) {
    Posts.insert({text: Random.id(500)});
  }
}

Meteor.publish("posts", function() {
  this.unblock();
  return Posts.find({}, {limit: dataSizeInKb});
});

Meteor.methods({
  getWorkerId: function() {
    return process.env['CLUSTER_WORKER_ID'];
  }
});