/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//==============================================================================

// How to load in modules
const Scene = require('Scene');
const Patches = require('Patches');

// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');

(async function() {
	var number = await Scene.root.findFirst('number');
	var score = await Patches.outputs.getScalar("score");
	var gameOver = await Patches.outputs.getPulse("gameOver");
	var gamePlay = await Patches.outputs.getPulse("gamePlay");

	// Display score number
	number.text = score.toString();

	//Set default
	await Patches.inputs.setBoolean("start",true);
	await Patches.inputs.setBoolean("reset",false);

	// Switch state
	gameOver.subscribe(function(){
		Patches.inputs.setBoolean("start",false);
		Patches.inputs.setBoolean("reset",true);	
	});
	gamePlay.subscribe(function(){
		Patches.inputs.setBoolean("start",true);
		Patches.inputs.setBoolean("reset",false);	
	});
})();

// To use variables and functions across files, use export/import keyword
// export const animationDuration = 10;

// Use import keyword to import a symbol from another file
// import { animationDuration } from './script.js'

// To access scene objects
// const directionalLight = Scene.root.find('directionalLight0');

// To access class properties
// const directionalLightIntensity = directionalLight.intensity;

// To log messages to the console
// Diagnostics.log('Console message logged from the script.');
