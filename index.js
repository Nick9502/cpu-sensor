"use strict";
const os = require("os"); // Load OS module.
const delaySeconds = 1;
const decimals = 3;

/* loop() necessary to invoke if IIFE not present
function loop() {
	console.log("CPU load is " + cpuLoad() );
	setTimeout(loop, delaySeconds * 1000);
}
* / 

/* Immeditately Invoked Function Expression (IIFE) */
(function loop() {
	console.log('CPU load is ' + cpuLoad());
	setTimeout(loop, delaySeconds * 1000);
  })();

/* Retreive CPU performance as percentage */
function cpuLoad() {
	let cpuLoad = os.loadavg()[0] * 100;
	return cpuLoad.toFixed(decimals);
}


