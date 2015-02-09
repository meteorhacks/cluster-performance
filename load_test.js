meteorDown.init(function (Meteor) {
  Meteor.subscribe('posts', function() {
    Meteor.kill();
  });
});

meteorDown.run({
  concurrency: 5,
  url: 'http://104.236.243.101'
});
