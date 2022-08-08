const find = require('find-process');

// Make sure oprintware isn't running
find('name', 'OPrint', true).then(function (list) {
	console.log(list)

	// If running kill
	if(list.length !== 0){
		console.log("Killing oprintware")
		let PID = list[0].pid;

		process.kill(PID, "SIGKILL");
	};

	console.log("after")

	// Reg edit 
	

});

