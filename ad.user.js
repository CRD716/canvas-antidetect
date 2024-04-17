// ==UserScript==
// @name         Canvas AntiDetect
// @namespace    https://github.com/CRD716/canvas-antidetect
// @version      0.5
// @downloadURL  https://github.com/CRD716/canvas-antidetect/raw/master/ad.user.js
// @description  Prevent canvas detecting blur and focus events.
// @author       donix
// @include      https://*/courses/*/quizzes/*/take*
// @grant        none
// @run-at       document-start
// ==/UserScript==

Object.defineProperty(document, 'visibilityState', {value: 'visible', writable: true});
Object.defineProperty(document, 'hidden', {value: false, writable: true});
Object.defineProperty(document, 'webkitVisibilityState', {value: 'visible', writable: true});
Object.defineProperty(document, 'webkitHidden', {value: false, writable: true});

Window.prototype.realEventListener = Window.prototype.addEventListener
Window.prototype.addEventListener = (a,b,c) =>
{
    if(a == 'focus' || a == 'blur' || a == 'visibilitychange')
        console.log(`[AD] '${a}' event subscription prevented.`)
    else
        realEventListener(a,b,c);
}
