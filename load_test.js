require('http').globalAgent.maxSockets = 999999;

mdown.init(function (Meteor) {
  Meteor.subscribe('posts', function() {
    Meteor.kill();
  });
});

mdown.run({
  concurrency: 5,
  url: 'http://104.236.216.226'
});