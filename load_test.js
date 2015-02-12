meteorDown.init(function (Meteor) {
  Meteor.subscribe('posts', function() {
    Meteor.kill();
  });
});

var entryPoints = [
  'http://104.236.246.62',
  'http://104.236.216.226',
  'http://104.131.182.168'
];

var pointIndex = Math.floor(Math.random() * 3);
var entryPoint = entryPoints[pointIndex];

meteorDown.run({
  concurrency: 10,
  // url: 'http://localhost:8080'
  url: entryPoint
});
