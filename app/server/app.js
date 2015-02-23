var id = 0;
var dataSizeInKb = parseInt(process.env.DATA_SIZE_IN_KB) || 200;
Posts = new Mongo.Collection('posts');

if(!Posts.findOne()) {
  for(var lc=0; lc<200; lc++) {
    Posts.insert({text: Random.id(500)});
  }
}

Meteor.publish("posts", function() {
  this.unblock();
  var query = {
    // make this query a new one every time
    _id: {$ne: ++id}
  };

  return Posts.find(query, {sort: {_id: 1}, limit: dataSizeInKb});
});

Meteor.methods({
  getWorkerId: function() {
    return process.env['CLUSTER_WORKER_ID'];
  }
});