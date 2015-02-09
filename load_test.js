meteorDown.init(function (Meteor) {
  Meteor.subscribe('posts', function() {
    Meteor.kill();
  });
});

meteorDown.run({
  concurrency: 10,
  // url: 'http://localhost:8080'
  url: 'http://104.236.243.101'
});
