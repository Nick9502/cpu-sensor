/* CPU Sensor Module for Raspberry Pi. 
 * Outputs CPU Load Percentage Every Second.
 */
"use strict";
const os = require("os"); // Load OS module.
const delaySeconds = 1;
const decimals = 3;


function loop() {
	console.log("CPU load is " + cpuLoad() );
	setTimeout(loop, delaySeconds * 1000);
}

function cpuLoad() {
	let cpuLoad = os.loadavg()[0] * 100;
	return cpuLoad.toFixed(decimals);
}

loop();

