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
// By @bukanalie
//==============================================================================

// How to load in modules
const Scene = require('Scene');
const Patches = require('Patches');

(async function() {
    var randomCollider = await Patches.outputs.getScalar('randomCollider');
    var score = await Patches.outputs.getScalar('score');
    // Use export keyword to make a symbol available in scripting debug console
    
    // export const Diagnostics = require('Diagnostics');
    var switchCollider =  randomCollider.eq(1);

    // Diagnostics.watch('randomCollider',switchCollider);
    // Diagnostics.watch('switchCollider',switchCollider);

    await Patches.inputs.setBoolean('switchCollider', switchCollider);

    var scoreNumber = await Scene.root.findFirst('scoreNumber')
    scoreNumber.text = score.toString();
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
