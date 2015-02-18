Posts = new Mongo.Collection('posts');

if(!Posts.findOne()) {
  for(var lc=0; lc<100; lc++) {
    Posts.insert({text: Random.id(1000)});
  }
}

Meteor.publish("posts", function() {
  this.unblock();
  return Posts.find();
});

Meteor.methods({
  getWorkerId: function() {
    return process.env['CLUSTER_WORKER_ID'];
  }
});