# Canvas AntiDetect

This script prevents the client sending `page_focused`, `page_blurred`, and `visibilitychange` events to canvas.

# Install

1. First you need a userscript manager such as: **Tampermonkey**
       - [Chrome](https://chrome.google.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo) 
       - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
    or **Violentmonkey**
       - [Chrome](https://chrome.google.com/webstore/detail/violent-monkey/jinjaccalgkegednnccohejagnlnfdag) 
       - [Firefox](https://addons.mozilla.org/firefox/addon/violentmonkey/)
3.  Install the script by clicking [Here](https://github.com/CRD716/canvas-antidetect/raw/master/ad.user.js)!

## How it works

Canvas has an `event_manager` which track user interactions.

The `page_focused`, `page_blurred`, and `visibilitychange` events are registered with jquery in `event_tracker.js`:

By overriding the `Window.prototype.addEventListener` with a custom function we can filter these event.

This, in theory, prevents the website from being able to detect a change in tabs or windows.

### The `event_tracker` payload:

![Exist](https://raw.githubusercontent.com/imdonix/canvas-antidetect/master/doc/logger.png)
