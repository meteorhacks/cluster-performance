meteorDown.init(function (Meteor) {
  Meteor.subscribe('posts', function() {
    Meteor.kill();
  });
});

// This is a URL of a single server
var entryPoint = "http://104.236.243.100:80";
// var entryPoint = "http://localhost:3000";

meteorDown.run({
  concurrency: 10,
  url: entryPoint
});
