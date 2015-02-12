meteorDown.init(function (Meteor) {
  Meteor.subscribe('posts', function() {
    Meteor.kill();
  });
});

// This is a URL of a single server
var entryPoint = "http://104.236.246.62";

meteorDown.run({
  concurrency: 10,
  url: entryPoint
});
