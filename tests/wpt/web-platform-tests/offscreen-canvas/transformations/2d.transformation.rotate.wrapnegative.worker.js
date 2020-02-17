// DO NOT EDIT! This test has been generated by /offscreen-canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.transformation.rotate.wrapnegative
// Description:rotate() wraps large negative values correctly
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("rotate() wraps large negative values correctly");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.rotate(-Math.PI * (1 + 4096));
ctx.fillStyle = '#0f0';
ctx.fillRect(-100, -50, 100, 50);
_assertPixel(offscreenCanvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");
_assertPixel(offscreenCanvas, 98,2, 0,255,0,255, "98,2", "0,255,0,255");
_assertPixel(offscreenCanvas, 98,47, 0,255,0,255, "98,47", "0,255,0,255");
t.done();

});
done();
