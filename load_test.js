meteorDown.init(function (Meteor) {
  Meteor.subscribe('posts', function() {
    Meteor.kill();
    console.log(Meteor.collections['posts']);
  });
});

meteorDown.run({
  concurrency: 5,
  url: 'http://104.236.243.101'
});
