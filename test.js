var cp = require('child_process');
var n = cp.fork(__dirname + '/index.js');

n.on('message', function(data) {
    console.log('receive ' + JSON.stringify(data));
})

n.send({hello:'my name is main process'});
