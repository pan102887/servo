// DO NOT EDIT! This test has been generated by /offscreen-canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.gradient.interpolate.alpha
// Description:
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.fillStyle = '#ff0';
ctx.fillRect(0, 0, 100, 50);
var g = ctx.createLinearGradient(0, 0, 100, 0);
g.addColorStop(0, 'rgba(0,0,255, 0)');
g.addColorStop(1, 'rgba(0,0,255, 1)');
ctx.fillStyle = g;
ctx.fillRect(0, 0, 100, 50);
_assertPixelApprox(offscreenCanvas, 25,25, 191,191,63,255, "25,25", "191,191,63,255", 3);
_assertPixelApprox(offscreenCanvas, 50,25, 127,127,127,255, "50,25", "127,127,127,255", 3);
_assertPixelApprox(offscreenCanvas, 75,25, 63,63,191,255, "75,25", "63,63,191,255", 3);
t.done();

});
done();
