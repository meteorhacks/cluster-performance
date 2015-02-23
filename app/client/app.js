Meteor.call('getWorkerId', function(err, port) {
  if(err) throw err;
  console.log("MY Worker Id is:", port);
});