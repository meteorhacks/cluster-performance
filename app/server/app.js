Posts = new Mongo.Collection('posts');

if(!Posts.findOne()) {
  for(var lc=0; lc<100; lc++) {
    Posts.insert({text: Random.id(1000)});
  }
}

Meteor.publish("posts", function() {
  this.unblock();
  if(!this.userId) throw new Error(401, "aiyppp");

  return Posts.find();
});

Meteor.methods({
  aa: function() {
    var sessionId = this.connection.id;
    var session = Meteor.server.sessions[sessionId];
    console.log(session);
    session.userId = 'coolio';
  }
});