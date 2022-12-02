/*
    * Javascript Canvas Basics
    additional information:
    -Canvas tutorial:
    https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial
    -Canvas API:
    https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
    -HTML5 Canvas Cheat Sheet
    https://simon.html5.org/dump/html5-canvas-cheat-sheet.html
*/

// * <canvas> tag
// attributes: width & height, which are dimensions in pixels (id is usually also recommended)
// this tag is not closed in Safari, should be closed in other browsers with </canvas>
// data inside of canvas tags <canvas>like this</canvas> it will be shown, if browser doesn't support canvas

const definingDrawingPaths = {
    "beginPath()" : "start a new path to draw a new shape",
    "closePath()" : "draw a line between current point and start of path (never needed for filled shaped)",
    "stroke()" : "draw the path",
    "fill()" : "fill the area limited by the path",
    "moveTo(x,y)" : "make (x,y) a new starting point",
    "lineTo(x,y)" : "draw a line from current location to (x,y). You must call moveTo() at least once before lineTo()",
    // otherwise firefox wont show anything
    "arc(x, y, radius, StartAngle, EndAngle, anticlockwise)" : "draw a circular arc. (x,y) is the center point of the circle.",
    // StartAngle and EndAngle are in radians and true draws anti-clockwise, otherwise clockwise
    "arcTo(x1, y1, x2, y2, radius)" : "draws a circular arc from (x1, y1) to (x2, y2) with radius",
    "quadraticCurveTo(cp1x, cp1y, x, y)" : "draws a quadratic Bézier curve, where (cp1x, cp1y) is the control point",
    "bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)" : "draws a cubic Bézier curve, where (cp1x, cp1y) and (cp2x, cp2y) are in control",
    "rect(x, y, width, height)" : "adds a rectangle path",
}

const drawingText = {
    // attributes
    "ctx.font" : "fontsize font",
    "ctx.align" : "left | right | center | start | end",
    // methods
    "fillText(textToDraw, x, y, [maxWidth])" : "fill the text string to coordinates (x,y)",
    "strokeText(textToDraw, x, y, [maxWidth]" : "draw out of text string to coordinates (x,y)"
}

const canvasStyles = {
    fillStyle : "the color/pattern/gradient used for filling paths",
    globalAlpha : "opacity of the canvas 0.0-1.0 (0 = fully transparent, 1 = no transparency, default)",
    lineCap : "butt | round | square (default is butt)",
    lineJoin : "round | bevel | miter (default is miter)",
    lineWidth : "line width in pixels (default is 1.0)",
    miterLimit : "how long the miter can be (default is 10)",
    shadowBlur, shadowColor, shadowOffsetX, shadowOffsetY : "for setting up shadows",
    // default values are 0 and default color is black
    strokeStyle : "color/pattern/gradient used for stroking paths"
    // colors can be used with any hexadecimal- or rgb values
}

const gradientsAndPatterns = {
    // ! Gradients are a bit heavy on the performance, so using bitmap images might be a better idea
    createLinearGradient(x1, y1, x2, y2) {"creates a linear CanvasGradient. (x1,y1) is the start point, and (x2,y2) the end point"},
    createRadialGradient(x1, y1, r1, x2, y2, r2) {"returns a radial CanvasGradient"},
    // the first three arguments represent the start circle and the last three, the end of the circle
    createPattern(image, type) {"image is any image and type can be: repeat, repeat-x, repeat-y and no-repeat (default is repeat)"}
    // to use gradient you must use the ctx.fillShape
}

// * Canvas Transformations and Animations

const canvasTransformations = {
    save() {"save the current styles, clipping path and transformations onto a stack"},
    restore() {"restore the last saved state from the stack"},
    translate(x,y) {"move origin (0,0) to coordinates (x,y)"},
    rotate(angle) {"rotate the canvas angle (radians) around the current origin"},
    scale(xScale, yScale) {"scale the horizontal direction by xScale amount and vertical by yScale amount"},
    // values < 1 reduce the unit size and values > 1 increase the unit size
    transform(m11, m12, m21, m22, dx, dy) {"multiply the current transformation matrix with the current values"},
    setTransform(m11, m12, m21, m22, dx, dy) {"reset the current transformation matrix the above values"},
}

// ! Transformations are cumulative e.g.
let ctx, canvas

ctx.rotate(Math.PI/2)
ctx.rotate(Math.PI/2) // total rotation is ready
// Math.PI = 180deg

// To rotate an object around it's center:
ctx.save()
ctx.translate(xMidPoint, yMidPoint)
ctx.rotate(angle) // angle in radians
    // draw the object with origin (0,0)
    // in the center point of object
ctx.restore()

function draw() {
    window.requestAnimationFrame(draw)
    canvas = document.getElementById("canvas")
    ctx = canvas.getContext("2d")
    ctx.clearRect(0,0,canvas.width,canvas.heigth)
    // do your drawing here
        // remember to use .save() and .restore()
}