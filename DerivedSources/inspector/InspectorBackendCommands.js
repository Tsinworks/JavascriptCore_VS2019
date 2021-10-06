InspectorBackend.registerDomain("Animation", ["page"]);
InspectorBackend.registerEnum("Animation.AnimationState", {Ready: "ready", Delayed: "delayed", Active: "active", Canceled: "canceled", Done: "done"});
InspectorBackend.registerEnum("Animation.PlaybackDirection", {Normal: "normal", Reverse: "reverse", Alternate: "alternate", AlternateReverse: "alternate-reverse"});
InspectorBackend.registerEnum("Animation.FillMode", {None: "none", Forwards: "forwards", Backwards: "backwards", Both: "both", Auto: "auto"});
InspectorBackend.registerCommand("Animation.enable", null, [], []);
InspectorBackend.registerCommand("Animation.disable", null, [], []);
InspectorBackend.registerCommand("Animation.requestEffectTarget", null, [{"name": "animationId", "type": "string"}], ["nodeId"]);
InspectorBackend.registerCommand("Animation.resolveAnimation", null, [{"name": "animationId", "type": "string"}, {"name": "objectGroup", "type": "string", "optional": true}], ["object"]);
InspectorBackend.registerCommand("Animation.startTracking", null, [], []);
InspectorBackend.registerCommand("Animation.stopTracking", null, [], []);
InspectorBackend.registerEvent("Animation.animationCreated", null, ["animation"]);
InspectorBackend.registerEvent("Animation.nameChanged", null, ["animationId", "name"]);
InspectorBackend.registerEvent("Animation.effectChanged", null, ["animationId", "effect"]);
InspectorBackend.registerEvent("Animation.targetChanged", null, ["animationId"]);
InspectorBackend.registerEvent("Animation.animationDestroyed", null, ["animationId"]);
InspectorBackend.registerEvent("Animation.trackingStart", null, ["timestamp"]);
InspectorBackend.registerEvent("Animation.trackingUpdate", null, ["timestamp", "event"]);
InspectorBackend.registerEvent("Animation.trackingComplete", null, ["timestamp"]);
InspectorBackend.registerAnimationDispatcher = InspectorBackend.registerDispatcher.bind(InspectorBackend, "Animation");
InspectorBackend.activateDomain("Animation", ["page", "web-page"]);
InspectorBackend.registerDomain("ApplicationCache", ["page"]);
InspectorBackend.registerCommand("ApplicationCache.getFramesWithManifests", null, [], ["frameIds"]);
InspectorBackend.registerCommand("ApplicationCache.enable", null, [], []);
InspectorBackend.registerCommand("ApplicationCache.disable", null, [], []);
InspectorBackend.registerCommand("ApplicationCache.getManifestForFrame", null, [{"name": "frameId", "type": "string"}], ["manifestURL"]);
InspectorBackend.registerCommand("ApplicationCache.getApplicationCacheForFrame", null, [{"name": "frameId", "type": "string"}], ["applicationCache"]);
InspectorBackend.registerEvent("ApplicationCache.applicationCacheStatusUpdated", null, ["frameId", "manifestURL", "status"]);
InspectorBackend.registerEvent("ApplicationCache.networkStateUpdated", null, ["isNowOnline"]);
InspectorBackend.registerApplicationCacheDispatcher = InspectorBackend.registerDispatcher.bind(InspectorBackend, "ApplicationCache");
InspectorBackend.activateDomain("ApplicationCache", ["page", "web-page"]);
InspectorBackend.registerDomain("Audit", ["itml", "javascript", "page", "service-worker", "worker"]);
InspectorBackend.registerVersion("Audit", 3);
InspectorBackend.registerCommand("Audit.setup", null, [{"name": "contextId", "type": "number", "optional": true}], []);
InspectorBackend.registerCommand("Audit.run", null, [{"name": "test", "type": "string"}, {"name": "contextId", "type": "number", "optional": true}], ["result", "wasThrown"]);
InspectorBackend.registerCommand("Audit.teardown", null, [], []);
InspectorBackend.activateDomain("Audit", ["itml", "javascript", "page", "service-worker", "web-page"]);
InspectorBackend.registerDomain("Browser", ["web-page"]);
InspectorBackend.registerCommand("Browser.enable", null, [], []);
InspectorBackend.registerCommand("Browser.disable", null, [], []);
InspectorBackend.registerEvent("Browser.extensionsEnabled", null, ["extensions"]);
InspectorBackend.registerEvent("Browser.extensionsDisabled", null, ["extensionIds"]);
InspectorBackend.registerBrowserDispatcher = InspectorBackend.registerDispatcher.bind(InspectorBackend, "Browser");
InspectorBackend.activateDomain("Browser", ["web-page"]);
InspectorBackend.registerDomain("CSS", ["itml", "page"]);
InspectorBackend.registerEnum("CSS.StyleSheetOrigin", {User: "user", UserAgent: "user-agent", Author: "author", Inspector: "inspector"});
InspectorBackend.registerEnum("CSS.PseudoId", {FirstLine: "first-line", FirstLetter: "first-letter", Highlight: "highlight", Marker: "marker", Before: "before", After: "after", Selection: "selection", Backdrop: "backdrop", Scrollbar: "scrollbar", ScrollbarThumb: "scrollbar-thumb", ScrollbarButton: "scrollbar-button", ScrollbarTrack: "scrollbar-track", ScrollbarTrackPiece: "scrollbar-track-piece", ScrollbarCorner: "scrollbar-corner", Resizer: "resizer"});
InspectorBackend.registerEnum("CSS.CSSPropertyStatus", {Active: "active", Inactive: "inactive", Disabled: "disabled", Style: "style"});
InspectorBackend.registerEnum("CSS.GroupingType", {MediaRule: "media-rule", MediaImportRule: "media-import-rule", MediaLinkNode: "media-link-node", MediaStyleNode: "media-style-node", SupportsRule: "supports-rule"});
InspectorBackend.registerEnum("CSS.LayoutContextType", {Grid: "grid"});
InspectorBackend.registerEnum("CSS.LayoutContextTypeChangedMode", {Observed: "observed", All: "all"});
InspectorBackend.registerCommand("CSS.enable", null, [], []);
InspectorBackend.registerCommand("CSS.disable", null, [], []);
InspectorBackend.registerCommand("CSS.getMatchedStylesForNode", null, [{"name": "nodeId", "type": "number"}, {"name": "includePseudo", "type": "boolean", "optional": true}, {"name": "includeInherited", "type": "boolean", "optional": true}], ["matchedCSSRules", "pseudoElements", "inherited"]);
InspectorBackend.registerCommand("CSS.getInlineStylesForNode", null, [{"name": "nodeId", "type": "number"}], ["inlineStyle", "attributesStyle"]);
InspectorBackend.registerCommand("CSS.getComputedStyleForNode", null, [{"name": "nodeId", "type": "number"}], ["computedStyle"]);
InspectorBackend.registerCommand("CSS.getFontDataForNode", ["page"], [{"name": "nodeId", "type": "number"}], ["primaryFont"]);
InspectorBackend.registerCommand("CSS.getAllStyleSheets", null, [], ["headers"]);
InspectorBackend.registerCommand("CSS.getStyleSheet", null, [{"name": "styleSheetId", "type": "string"}], ["styleSheet"]);
InspectorBackend.registerCommand("CSS.getStyleSheetText", null, [{"name": "styleSheetId", "type": "string"}], ["text"]);
InspectorBackend.registerCommand("CSS.setStyleSheetText", null, [{"name": "styleSheetId", "type": "string"}, {"name": "text", "type": "string"}], []);
InspectorBackend.registerCommand("CSS.setStyleText", null, [{"name": "styleId", "type": "object"}, {"name": "text", "type": "string"}], ["style"]);
InspectorBackend.registerCommand("CSS.setRuleSelector", ["page"], [{"name": "ruleId", "type": "object"}, {"name": "selector", "type": "string"}], ["rule"]);
InspectorBackend.registerCommand("CSS.createStyleSheet", ["page"], [{"name": "frameId", "type": "string"}], ["styleSheetId"]);
InspectorBackend.registerCommand("CSS.addRule", ["page"], [{"name": "styleSheetId", "type": "string"}, {"name": "selector", "type": "string"}], ["rule"]);
InspectorBackend.registerCommand("CSS.getSupportedCSSProperties", null, [], ["cssProperties"]);
InspectorBackend.registerCommand("CSS.getSupportedSystemFontFamilyNames", ["page"], [], ["fontFamilyNames"]);
InspectorBackend.registerCommand("CSS.forcePseudoState", ["page"], [{"name": "nodeId", "type": "number"}, {"name": "forcedPseudoClasses", "type": "object"}], []);
InspectorBackend.registerCommand("CSS.setLayoutContextTypeChangedMode", ["page"], [{"name": "mode", "type": "string"}], []);
InspectorBackend.registerEvent("CSS.mediaQueryResultChanged", null, []);
InspectorBackend.registerEvent("CSS.styleSheetChanged", null, ["styleSheetId"]);
InspectorBackend.registerEvent("CSS.styleSheetAdded", ["page"], ["header"]);
InspectorBackend.registerEvent("CSS.styleSheetRemoved", ["page"], ["styleSheetId"]);
InspectorBackend.registerEvent("CSS.nodeLayoutContextTypeChanged", ["page"], ["nodeId", "layoutContextType"]);
InspectorBackend.registerCSSDispatcher = InspectorBackend.registerDispatcher.bind(InspectorBackend, "CSS");
InspectorBackend.activateDomain("CSS", ["itml", "page", "web-page"]);
InspectorBackend.registerDomain("Canvas", ["page"]);
InspectorBackend.registerEnum("Canvas.ColorSpace", {SRGB: "srgb", DisplayP3: "display-p3"});
InspectorBackend.registerEnum("Canvas.ContextType", {Canvas2D: "canvas-2d", BitmapRenderer: "bitmaprenderer", WebGL: "webgl", WebGL2: "webgl2"});
InspectorBackend.registerEnum("Canvas.ProgramType", {Compute: "compute", Render: "render"});
InspectorBackend.registerEnum("Canvas.ShaderType", {Compute: "compute", Fragment: "fragment", Vertex: "vertex"});
InspectorBackend.registerCommand("Canvas.enable", null, [], []);
InspectorBackend.registerCommand("Canvas.disable", null, [], []);
InspectorBackend.registerCommand("Canvas.requestNode", null, [{"name": "canvasId", "type": "string"}], ["nodeId"]);
InspectorBackend.registerCommand("Canvas.requestContent", null, [{"name": "canvasId", "type": "string"}], ["content"]);
InspectorBackend.registerCommand("Canvas.requestClientNodes", null, [{"name": "canvasId", "type": "string"}], ["clientNodeIds"]);
InspectorBackend.registerCommand("Canvas.resolveContext", null, [{"name": "canvasId", "type": "string"}, {"name": "objectGroup", "type": "string", "optional": true}], ["object"]);
InspectorBackend.registerCommand("Canvas.setRecordingAutoCaptureFrameCount", null, [{"name": "count", "type": "number"}], []);
InspectorBackend.registerCommand("Canvas.startRecording", null, [{"name": "canvasId", "type": "string"}, {"name": "frameCount", "type": "number", "optional": true}, {"name": "memoryLimit", "type": "number", "optional": true}], []);
InspectorBackend.registerCommand("Canvas.stopRecording", null, [{"name": "canvasId", "type": "string"}], []);
InspectorBackend.registerCommand("Canvas.requestShaderSource", null, [{"name": "programId", "type": "string"}, {"name": "shaderType", "type": "string"}], ["source"]);
InspectorBackend.registerCommand("Canvas.updateShader", null, [{"name": "programId", "type": "string"}, {"name": "shaderType", "type": "string"}, {"name": "source", "type": "string"}], []);
InspectorBackend.registerCommand("Canvas.setShaderProgramDisabled", null, [{"name": "programId", "type": "string"}, {"name": "disabled", "type": "boolean"}], []);
InspectorBackend.registerCommand("Canvas.setShaderProgramHighlighted", null, [{"name": "programId", "type": "string"}, {"name": "highlighted", "type": "boolean"}], []);
InspectorBackend.registerEvent("Canvas.canvasAdded", null, ["canvas"]);
InspectorBackend.registerEvent("Canvas.canvasRemoved", null, ["canvasId"]);
InspectorBackend.registerEvent("Canvas.canvasMemoryChanged", null, ["canvasId", "memoryCost"]);
InspectorBackend.registerEvent("Canvas.extensionEnabled", null, ["canvasId", "extension"]);
InspectorBackend.registerEvent("Canvas.clientNodesChanged", null, ["canvasId"]);
InspectorBackend.registerEvent("Canvas.recordingStarted", null, ["canvasId", "initiator"]);
InspectorBackend.registerEvent("Canvas.recordingProgress", null, ["canvasId", "frames", "bufferUsed"]);
InspectorBackend.registerEvent("Canvas.recordingFinished", null, ["canvasId", "recording"]);
InspectorBackend.registerEvent("Canvas.programCreated", null, ["shaderProgram"]);
InspectorBackend.registerEvent("Canvas.programDeleted", null, ["programId"]);
InspectorBackend.registerCanvasDispatcher = InspectorBackend.registerDispatcher.bind(InspectorBackend, "Canvas");
InspectorBackend.activateDomain("Canvas", ["page", "web-page"]);
InspectorBackend.registerDomain("Console", ["itml", "javascript", "page", "service-worker", "worker"]);
InspectorBackend.registerEnum("Console.ChannelSource", {XML: "xml", JavaScript: "javascript", Network: "network", ConsoleAPI: "console-api", Storage: "storage", Appcache: "appcache", Rendering: "rendering", CSS: "css", Security: "security", ContentBlocker: "content-blocker", Media: "media", MediaSource: "mediasource", WebRTC: "webrtc", ITPDebug: "itp-debug", PrivateClickMeasurement: "private-click-measurement", PaymentRequest: "payment-request", Other: "other"});
InspectorBackend.registerEnum("Console.ChannelLevel", {Off: "off", Basic: "basic", Verbose: "verbose"});
InspectorBackend.registerEnum("Console.ConsoleMessageLevel", {Log: "log", Info: "info", Warning: "warning", Error: "error", Debug: "debug"});
InspectorBackend.registerEnum("Console.ConsoleMessageType", {Log: "log", Dir: "dir", DirXML: "dirxml", Table: "table", Trace: "trace", Clear: "clear", StartGroup: "startGroup", StartGroupCollapsed: "startGroupCollapsed", EndGroup: "endGroup", Assert: "assert", Timing: "timing", Profile: "profile", ProfileEnd: "profileEnd", Image: "image"});
InspectorBackend.registerCommand("Console.enable", null, [], []);
InspectorBackend.registerCommand("Console.disable", null, [], []);
InspectorBackend.registerCommand("Console.clearMessages", null, [], []);
InspectorBackend.registerCommand("Console.getLoggingChannels", null, [], ["channels"]);
InspectorBackend.registerCommand("Console.setLoggingChannelLevel", null, [{"name": "source", "type": "string"}, {"name": "level", "type": "string"}], []);
InspectorBackend.registerEvent("Console.messageAdded", null, ["message"]);
InspectorBackend.registerEvent("Console.messageRepeatCountUpdated", null, ["count"]);
InspectorBackend.registerEvent("Console.messagesCleared", null, []);
InspectorBackend.registerEvent("Console.heapSnapshot", null, ["timestamp", "snapshotData", "title"]);
InspectorBackend.registerConsoleDispatcher = InspectorBackend.registerDispatcher.bind(InspectorBackend, "Console");
InspectorBackend.activateDomain("Console", ["itml", "javascript", "page", "service-worker", "web-page"]);
InspectorBackend.registerDomain("DOM", ["itml", "page"]);
InspectorBackend.registerEnum("DOM.PseudoType", {Before: "before", After: "after"});
InspectorBackend.registerEnum("DOM.ShadowRootType", {UserAgent: "user-agent", Open: "open", Closed: "closed"});
InspectorBackend.registerEnum("DOM.CustomElementState", {Builtin: "builtin", Custom: "custom", Waiting: "waiting", Failed: "failed"});
InspectorBackend.registerEnum("DOM.LiveRegionRelevant", {Additions: "additions", Removals: "removals", Text: "text"});
InspectorBackend.registerEnum("DOM.AccessibilityPropertiesChecked", {True: "true", False: "false", Mixed: "mixed"});
InspectorBackend.registerEnum("DOM.AccessibilityPropertiesCurrent", {True: "true", False: "false", Page: "page", Step: "step", Location: "location", Date: "date", Time: "time"});
InspectorBackend.registerEnum("DOM.AccessibilityPropertiesInvalid", {True: "true", False: "false", Grammar: "grammar", Spelling: "spelling"});
InspectorBackend.registerEnum("DOM.AccessibilityPropertiesLiveRegionStatus", {Assertive: "assertive", Polite: "polite", Off: "off"});
InspectorBackend.registerCommand("DOM.getDocument", null, [], ["root"]);
InspectorBackend.registerCommand("DOM.requestChildNodes", null, [{"name": "nodeId", "type": "number"}, {"name": "depth", "type": "number", "optional": true}], []);
InspectorBackend.registerCommand("DOM.querySelector", ["page"], [{"name": "nodeId", "type": "number"}, {"name": "selector", "type": "string"}], ["nodeId"]);
InspectorBackend.registerCommand("DOM.querySelectorAll", ["page"], [{"name": "nodeId", "type": "number"}, {"name": "selector", "type": "string"}], ["nodeIds"]);
InspectorBackend.registerCommand("DOM.setNodeName", ["page"], [{"name": "nodeId", "type": "number"}, {"name": "name", "type": "string"}], ["nodeId"]);
InspectorBackend.registerCommand("DOM.setNodeValue", null, [{"name": "nodeId", "type": "number"}, {"name": "value", "type": "string"}], []);
InspectorBackend.registerCommand("DOM.removeNode", null, [{"name": "nodeId", "type": "number"}], []);
InspectorBackend.registerCommand("DOM.setAttributeValue", null, [{"name": "nodeId", "type": "number"}, {"name": "name", "type": "string"}, {"name": "value", "type": "string"}], []);
InspectorBackend.registerCommand("DOM.setAttributesAsText", null, [{"name": "nodeId", "type": "number"}, {"name": "text", "type": "string"}, {"name": "name", "type": "string", "optional": true}], []);
InspectorBackend.registerCommand("DOM.removeAttribute", null, [{"name": "nodeId", "type": "number"}, {"name": "name", "type": "string"}], []);
InspectorBackend.registerCommand("DOM.getSupportedEventNames", null, [], ["eventNames"]);
InspectorBackend.registerCommand("DOM.getEventListenersForNode", null, [{"name": "nodeId", "type": "number"}], ["listeners"]);
InspectorBackend.registerCommand("DOM.setEventListenerDisabled", null, [{"name": "eventListenerId", "type": "number"}, {"name": "disabled", "type": "boolean"}], []);
InspectorBackend.registerCommand("DOM.setBreakpointForEventListener", ["page"], [{"name": "eventListenerId", "type": "number"}, {"name": "options", "type": "object", "optional": true}], []);
InspectorBackend.registerCommand("DOM.removeBreakpointForEventListener", ["page"], [{"name": "eventListenerId", "type": "number"}], []);
InspectorBackend.registerCommand("DOM.getAccessibilityPropertiesForNode", null, [{"name": "nodeId", "type": "number"}], ["properties"]);
InspectorBackend.registerCommand("DOM.getOuterHTML", null, [{"name": "nodeId", "type": "number"}], ["outerHTML"]);
InspectorBackend.registerCommand("DOM.setOuterHTML", null, [{"name": "nodeId", "type": "number"}, {"name": "outerHTML", "type": "string"}], []);
InspectorBackend.registerCommand("DOM.insertAdjacentHTML", ["page"], [{"name": "nodeId", "type": "number"}, {"name": "position", "type": "string"}, {"name": "html", "type": "string"}], []);
InspectorBackend.registerCommand("DOM.performSearch", null, [{"name": "query", "type": "string"}, {"name": "nodeIds", "type": "object", "optional": true}, {"name": "caseSensitive", "type": "boolean", "optional": true}], ["searchId", "resultCount"]);
InspectorBackend.registerCommand("DOM.getSearchResults", null, [{"name": "searchId", "type": "string"}, {"name": "fromIndex", "type": "number"}, {"name": "toIndex", "type": "number"}], ["nodeIds"]);
InspectorBackend.registerCommand("DOM.discardSearchResults", null, [{"name": "searchId", "type": "string"}], []);
InspectorBackend.registerCommand("DOM.requestNode", ["page"], [{"name": "objectId", "type": "string"}], ["nodeId"]);
InspectorBackend.registerCommand("DOM.setInspectModeEnabled", null, [{"name": "enabled", "type": "boolean"}, {"name": "highlightConfig", "type": "object", "optional": true}, {"name": "showRulers", "type": "boolean", "optional": true}], []);
InspectorBackend.registerCommand("DOM.highlightRect", ["page"], [{"name": "x", "type": "number"}, {"name": "y", "type": "number"}, {"name": "width", "type": "number"}, {"name": "height", "type": "number"}, {"name": "color", "type": "object", "optional": true}, {"name": "outlineColor", "type": "object", "optional": true}, {"name": "usePageCoordinates", "type": "boolean", "optional": true}], []);
InspectorBackend.registerCommand("DOM.highlightQuad", ["page"], [{"name": "quad", "type": "object"}, {"name": "color", "type": "object", "optional": true}, {"name": "outlineColor", "type": "object", "optional": true}, {"name": "usePageCoordinates", "type": "boolean", "optional": true}], []);
InspectorBackend.registerCommand("DOM.highlightSelector", ["page"], [{"name": "highlightConfig", "type": "object"}, {"name": "selectorString", "type": "string"}, {"name": "frameId", "type": "string", "optional": true}], []);
InspectorBackend.registerCommand("DOM.highlightNode", null, [{"name": "highlightConfig", "type": "object"}, {"name": "nodeId", "type": "number", "optional": true}, {"name": "objectId", "type": "string", "optional": true}], []);
InspectorBackend.registerCommand("DOM.highlightNodeList", null, [{"name": "nodeIds", "type": "object"}, {"name": "highlightConfig", "type": "object"}], []);
InspectorBackend.registerCommand("DOM.hideHighlight", null, [], []);
InspectorBackend.registerCommand("DOM.highlightFrame", ["page"], [{"name": "frameId", "type": "string"}, {"name": "contentColor", "type": "object", "optional": true}, {"name": "contentOutlineColor", "type": "object", "optional": true}], []);
InspectorBackend.registerCommand("DOM.showGridOverlay", ["page"], [{"name": "nodeId", "type": "number"}, {"name": "gridColor", "type": "object"}, {"name": "showLineNames", "type": "boolean", "optional": true}, {"name": "showLineNumbers", "type": "boolean", "optional": true}, {"name": "showExtendedGridLines", "type": "boolean", "optional": true}, {"name": "showTrackSizes", "type": "boolean", "optional": true}, {"name": "showAreaNames", "type": "boolean", "optional": true}], []);
InspectorBackend.registerCommand("DOM.hideGridOverlay", ["page"], [{"name": "nodeId", "type": "number", "optional": true}], []);
InspectorBackend.registerCommand("DOM.pushNodeByPathToFrontend", ["page"], [{"name": "path", "type": "string"}], ["nodeId"]);
InspectorBackend.registerCommand("DOM.resolveNode", ["page"], [{"name": "nodeId", "type": "number"}, {"name": "objectGroup", "type": "string", "optional": true}], ["object"]);
InspectorBackend.registerCommand("DOM.getAttributes", null, [{"name": "nodeId", "type": "number"}], ["attributes"]);
InspectorBackend.registerCommand("DOM.moveTo", null, [{"name": "nodeId", "type": "number"}, {"name": "targetNodeId", "type": "number"}, {"name": "insertBeforeNodeId", "type": "number", "optional": true}], ["nodeId"]);
InspectorBackend.registerCommand("DOM.undo", ["page"], [], []);
InspectorBackend.registerCommand("DOM.redo", ["page"], [], []);
InspectorBackend.registerCommand("DOM.markUndoableState", ["page"], [], []);
InspectorBackend.registerCommand("DOM.focus", ["page"], [{"name": "nodeId", "type": "number"}], []);
InspectorBackend.registerCommand("DOM.setInspectedNode", ["page"], [{"name": "nodeId", "type": "number"}], []);
InspectorBackend.registerCommand("DOM.setAllowEditingUserAgentShadowTrees", ["page"], [{"name": "allow", "type": "boolean"}], []);
InspectorBackend.registerEvent("DOM.documentUpdated", null, []);
InspectorBackend.registerEvent("DOM.inspect", null, ["nodeId"]);
InspectorBackend.registerEvent("DOM.setChildNodes", null, ["parentId", "nodes"]);
InspectorBackend.registerEvent("DOM.attributeModified", null, ["nodeId", "name", "value"]);
InspectorBackend.registerEvent("DOM.attributeRemoved", null, ["nodeId", "name"]);
InspectorBackend.registerEvent("DOM.inlineStyleInvalidated", null, ["nodeIds"]);
InspectorBackend.registerEvent("DOM.characterDataModified", null, ["nodeId", "characterData"]);
InspectorBackend.registerEvent("DOM.childNodeCountUpdated", null, ["nodeId", "childNodeCount"]);
InspectorBackend.registerEvent("DOM.childNodeInserted", null, ["parentNodeId", "previousNodeId", "node"]);
InspectorBackend.registerEvent("DOM.childNodeRemoved", null, ["parentNodeId", "nodeId"]);
InspectorBackend.registerEvent("DOM.willDestroyDOMNode", null, ["nodeId"]);
InspectorBackend.registerEvent("DOM.shadowRootPushed", ["page"], ["hostId", "root"]);
InspectorBackend.registerEvent("DOM.shadowRootPopped", ["page"], ["hostId", "rootId"]);
InspectorBackend.registerEvent("DOM.customElementStateChanged", ["page"], ["nodeId", "customElementState"]);
InspectorBackend.registerEvent("DOM.pseudoElementAdded", ["page"], ["parentId", "pseudoElement"]);
InspectorBackend.registerEvent("DOM.pseudoElementRemoved", ["page"], ["parentId", "pseudoElementId"]);
InspectorBackend.registerEvent("DOM.didAddEventListener", null, ["nodeId"]);
InspectorBackend.registerEvent("DOM.willRemoveEventListener", null, ["nodeId"]);
InspectorBackend.registerEvent("DOM.didFireEvent", ["page"], ["nodeId", "eventName", "timestamp", "data"]);
InspectorBackend.registerEvent("DOM.powerEfficientPlaybackStateChanged", ["page"], ["nodeId", "timestamp", "isPowerEfficient"]);
InspectorBackend.registerDOMDispatcher = InspectorBackend.registerDispatcher.bind(InspectorBackend, "DOM");
InspectorBackend.activateDomain("DOM", ["itml", "page", "web-page"]);
InspectorBackend.registerDomain("DOMDebugger", ["page", "worker"]);
InspectorBackend.registerEnum("DOMDebugger.DOMBreakpointType", {SubtreeModified: "subtree-modified", AttributeModified: "attribute-modified", NodeRemoved: "node-removed"});
InspectorBackend.registerEnum("DOMDebugger.EventBreakpointType", {AnimationFrame: "animation-frame", Interval: "interval", Listener: "listener", Timeout: "timeout"});
InspectorBackend.registerCommand("DOMDebugger.setDOMBreakpoint", null, [{"name": "nodeId", "type": "number"}, {"name": "type", "type": "string"}, {"name": "options", "type": "object", "optional": true}], []);
InspectorBackend.registerCommand("DOMDebugger.removeDOMBreakpoint", null, [{"name": "nodeId", "type": "number"}, {"name": "type", "type": "string"}], []);
InspectorBackend.registerCommand("DOMDebugger.setEventBreakpoint", null, [{"name": "breakpointType", "type": "string"}, {"name": "eventName", "type": "string", "optional": true}, {"name": "options", "type": "object", "optional": true}], []);
InspectorBackend.registerCommand("DOMDebugger.removeEventBreakpoint", null, [{"name": "breakpointType", "type": "string"}, {"name": "eventName", "type": "string", "optional": true}], []);
InspectorBackend.registerCommand("DOMDebugger.setURLBreakpoint", null, [{"name": "url", "type": "string"}, {"name": "isRegex", "type": "boolean", "optional": true}, {"name": "options", "type": "object", "optional": true}], []);
InspectorBackend.registerCommand("DOMDebugger.removeURLBreakpoint", null, [{"name": "url", "type": "string"}, {"name": "isRegex", "type": "boolean", "optional": true}], []);
InspectorBackend.activateDomain("DOMDebugger", ["page", "web-page"]);
InspectorBackend.registerDomain("DOMStorage", ["itml", "page"]);
InspectorBackend.registerCommand("DOMStorage.enable", null, [], []);
InspectorBackend.registerCommand("DOMStorage.disable", null, [], []);
InspectorBackend.registerCommand("DOMStorage.getDOMStorageItems", null, [{"name": "storageId", "type": "object"}], ["entries"]);
InspectorBackend.registerCommand("DOMStorage.setDOMStorageItem", null, [{"name": "storageId", "type": "object"}, {"name": "key", "type": "string"}, {"name": "value", "type": "string"}], []);
InspectorBackend.registerCommand("DOMStorage.removeDOMStorageItem", null, [{"name": "storageId", "type": "object"}, {"name": "key", "type": "string"}], []);
InspectorBackend.registerCommand("DOMStorage.clearDOMStorageItems", ["page"], [{"name": "storageId", "type": "object"}], []);
InspectorBackend.registerEvent("DOMStorage.domStorageItemsCleared", null, ["storageId"]);
InspectorBackend.registerEvent("DOMStorage.domStorageItemRemoved", null, ["storageId", "key"]);
InspectorBackend.registerEvent("DOMStorage.domStorageItemAdded", null, ["storageId", "key", "newValue"]);
InspectorBackend.registerEvent("DOMStorage.domStorageItemUpdated", null, ["storageId", "key", "oldValue", "newValue"]);
InspectorBackend.registerDOMStorageDispatcher = InspectorBackend.registerDispatcher.bind(InspectorBackend, "DOMStorage");
InspectorBackend.activateDomain("DOMStorage", ["itml", "page", "web-page"]);
InspectorBackend.registerDomain("Database", ["page"]);
InspectorBackend.registerCommand("Database.enable", null, [], []);
InspectorBackend.registerCommand("Database.disable", null, [], []);
InspectorBackend.registerCommand("Database.getDatabaseTableNames", null, [{"name": "databaseId", "type": "string"}], ["tableNames"]);
InspectorBackend.registerCommand("Database.executeSQL", null, [{"name": "databaseId", "type": "string"}, {"name": "query", "type": "string"}], ["columnNames", "values", "sqlError"]);
InspectorBackend.registerEvent("Database.addDatabase", null, ["database"]);
InspectorBackend.registerDatabaseDispatcher = InspectorBackend.registerDispatcher.bind(InspectorBackend, "Database");
InspectorBackend.activateDomain("Database", ["page", "web-page"]);
InspectorBackend.registerDomain("Debugger", ["itml", "javascript", "page", "service-worker", "worker"]);
InspectorBackend.registerEnum("Debugger.BreakpointActionType", {Log: "log", Evaluate: "evaluate", Sound: "sound", Probe: "probe"});
InspectorBackend.registerEnum("Debugger.ScopeType", {Global: "global", With: "with", Closure: "closure", Catch: "catch", FunctionName: "functionName", GlobalLexicalEnvironment: "globalLexicalEnvironment", NestedLexical: "nestedLexical"});
InspectorBackend.registerCommand("Debugger.enable", null, [], []);
InspectorBackend.registerCommand("Debugger.disable", null, [], []);
InspectorBackend.registerCommand("Debugger.setAsyncStackTraceDepth", null, [{"name": "depth", "type": "number"}], []);
InspectorBackend.registerCommand("Debugger.setBreakpointsActive", null, [{"name": "active", "type": "boolean"}], []);
InspectorBackend.registerCommand("Debugger.setBreakpointByUrl", null, [{"name": "lineNumber", "type": "number"}, {"name": "url", "type": "string", "optional": true}, {"name": "urlRegex", "type": "string", "optional": true}, {"name": "columnNumber", "type": "number", "optional": true}, {"name": "options", "type": "object", "optional": true}], ["breakpointId", "locations"]);
InspectorBackend.registerCommand("Debugger.setBreakpoint", null, [{"name": "location", "type": "object"}, {"name": "options", "type": "object", "optional": true}], ["breakpointId", "actualLocation"]);
InspectorBackend.registerCommand("Debugger.removeBreakpoint", null, [{"name": "breakpointId", "type": "string"}], []);
InspectorBackend.registerCommand("Debugger.continueUntilNextRunLoop", null, [], []);
InspectorBackend.registerCommand("Debugger.continueToLocation", null, [{"name": "location", "type": "object"}], []);
InspectorBackend.registerCommand("Debugger.stepNext", null, [], []);
InspectorBackend.registerCommand("Debugger.stepOver", null, [], []);
InspectorBackend.registerCommand("Debugger.stepInto", null, [], []);
InspectorBackend.registerCommand("Debugger.stepOut", null, [], []);
InspectorBackend.registerCommand("Debugger.pause", null, [], []);
InspectorBackend.registerCommand("Debugger.resume", null, [], []);
InspectorBackend.registerCommand("Debugger.searchInContent", null, [{"name": "scriptId", "type": "string"}, {"name": "query", "type": "string"}, {"name": "caseSensitive", "type": "boolean", "optional": true}, {"name": "isRegex", "type": "boolean", "optional": true}], ["result"]);
InspectorBackend.registerCommand("Debugger.getScriptSource", null, [{"name": "scriptId", "type": "string"}], ["scriptSource"]);
InspectorBackend.registerCommand("Debugger.getFunctionDetails", null, [{"name": "functionId", "type": "string"}], ["details"]);
InspectorBackend.registerCommand("Debugger.setPauseOnDebuggerStatements", null, [{"name": "enabled", "type": "boolean"}, {"name": "options", "type": "object", "optional": true}], []);
InspectorBackend.registerCommand("Debugger.setPauseOnExceptions", null, [{"name": "state", "type": "string"}, {"name": "options", "type": "object", "optional": true}], []);
InspectorBackend.registerCommand("Debugger.setPauseOnAssertions", null, [{"name": "enabled", "type": "boolean"}, {"name": "options", "type": "object", "optional": true}], []);
InspectorBackend.registerCommand("Debugger.setPauseOnMicrotasks", null, [{"name": "enabled", "type": "boolean"}, {"name": "options", "type": "object", "optional": true}], []);
InspectorBackend.registerCommand("Debugger.setPauseForInternalScripts", null, [{"name": "shouldPause", "type": "boolean"}], []);
InspectorBackend.registerCommand("Debugger.evaluateOnCallFrame", null, [{"name": "callFrameId", "type": "string"}, {"name": "expression", "type": "string"}, {"name": "objectGroup", "type": "string", "optional": true}, {"name": "includeCommandLineAPI", "type": "boolean", "optional": true}, {"name": "doNotPauseOnExceptionsAndMuteConsole", "type": "boolean", "optional": true}, {"name": "returnByValue", "type": "boolean", "optional": true}, {"name": "generatePreview", "type": "boolean", "optional": true}, {"name": "saveResult", "type": "boolean", "optional": true}, {"name": "emulateUserGesture", "type": "boolean", "optional": true}], ["result", "wasThrown", "savedResultIndex"]);
InspectorBackend.registerCommand("Debugger.setShouldBlackboxURL", null, [{"name": "url", "type": "string"}, {"name": "shouldBlackbox", "type": "boolean"}, {"name": "caseSensitive", "type": "boolean", "optional": true}, {"name": "isRegex", "type": "boolean", "optional": true}], []);
InspectorBackend.registerEvent("Debugger.globalObjectCleared", null, []);
InspectorBackend.registerEvent("Debugger.scriptParsed", null, ["scriptId", "url", "startLine", "startColumn", "endLine", "endColumn", "isContentScript", "sourceURL", "sourceMapURL", "module"]);
InspectorBackend.registerEvent("Debugger.scriptFailedToParse", null, ["url", "scriptSource", "startLine", "errorLine", "errorMessage"]);
InspectorBackend.registerEvent("Debugger.breakpointResolved", null, ["breakpointId", "location"]);
InspectorBackend.registerEnum("Debugger.PausedReason", {XHR: "XHR", Fetch: "Fetch", DOM: "DOM", AnimationFrame: "AnimationFrame", Interval: "Interval", Listener: "Listener", Timeout: "Timeout", Exception: "exception", Assert: "assert", CSPViolation: "CSPViolation", DebuggerStatement: "DebuggerStatement", Breakpoint: "Breakpoint", PauseOnNextStatement: "PauseOnNextStatement", Microtask: "Microtask", BlackboxedScript: "BlackboxedScript", Other: "other"});
InspectorBackend.registerEvent("Debugger.paused", null, ["callFrames", "reason", "data", "asyncStackTrace"]);
InspectorBackend.registerEvent("Debugger.resumed", null, []);
InspectorBackend.registerEvent("Debugger.didSampleProbe", null, ["sample"]);
InspectorBackend.registerEvent("Debugger.playBreakpointActionSound", null, ["breakpointActionId"]);
InspectorBackend.registerDebuggerDispatcher = InspectorBackend.registerDispatcher.bind(InspectorBackend, "Debugger");
InspectorBackend.activateDomain("Debugger", ["itml", "javascript", "page", "service-worker", "web-page"]);
InspectorBackend.registerDomain("Heap", ["itml", "javascript", "page", "service-worker", "worker"]);
InspectorBackend.registerEnum("Heap.GarbageCollectionType", {Full: "full", Partial: "partial"});
InspectorBackend.registerCommand("Heap.enable", null, [], []);
InspectorBackend.registerCommand("Heap.disable", null, [], []);
InspectorBackend.registerCommand("Heap.gc", null, [], []);
InspectorBackend.registerCommand("Heap.snapshot", null, [], ["timestamp", "snapshotData"]);
InspectorBackend.registerCommand("Heap.startTracking", null, [], []);
InspectorBackend.registerCommand("Heap.stopTracking", null, [], []);
InspectorBackend.registerCommand("Heap.getPreview", null, [{"name": "heapObjectId", "type": "number"}], ["string", "functionDetails", "preview"]);
InspectorBackend.registerCommand("Heap.getRemoteObject", null, [{"name": "heapObjectId", "type": "number"}, {"name": "objectGroup", "type": "string", "optional": true}], ["result"]);
InspectorBackend.registerEvent("Heap.garbageCollected", null, ["collection"]);
InspectorBackend.registerEvent("Heap.trackingStart", null, ["timestamp", "snapshotData"]);
InspectorBackend.registerEvent("Heap.trackingComplete", null, ["timestamp", "snapshotData"]);
InspectorBackend.registerHeapDispatcher = InspectorBackend.registerDispatcher.bind(InspectorBackend, "Heap");
InspectorBackend.activateDomain("Heap", ["itml", "javascript", "page", "service-worker", "web-page"]);
InspectorBackend.registerDomain("IndexedDB", ["page"]);
InspectorBackend.registerEnum("IndexedDB.KeyType", {Number: "number", String: "string", Date: "date", Array: "array"});
InspectorBackend.registerEnum("IndexedDB.KeyPathType", {Null: "null", String: "string", Array: "array"});
InspectorBackend.registerCommand("IndexedDB.enable", null, [], []);
InspectorBackend.registerCommand("IndexedDB.disable", null, [], []);
InspectorBackend.registerCommand("IndexedDB.requestDatabaseNames", null, [{"name": "securityOrigin", "type": "string"}], ["databaseNames"]);
InspectorBackend.registerCommand("IndexedDB.requestDatabase", null, [{"name": "securityOrigin", "type": "string"}, {"name": "databaseName", "type": "string"}], ["databaseWithObjectStores"]);
InspectorBackend.registerCommand("IndexedDB.requestData", null, [{"name": "securityOrigin", "type": "string"}, {"name": "databaseName", "type": "string"}, {"name": "objectStoreName", "type": "string"}, {"name": "indexName", "type": "string"}, {"name": "skipCount", "type": "number"}, {"name": "pageSize", "type": "number"}, {"name": "keyRange", "type": "object", "optional": true}], ["objectStoreDataEntries", "hasMore"]);
InspectorBackend.registerCommand("IndexedDB.clearObjectStore", null, [{"name": "securityOrigin", "type": "string"}, {"name": "databaseName", "type": "string"}, {"name": "objectStoreName", "type": "string"}], []);
InspectorBackend.registerIndexedDBDispatcher = InspectorBackend.registerDispatcher.bind(InspectorBackend, "IndexedDB");
InspectorBackend.activateDomain("IndexedDB", ["page", "web-page"]);
InspectorBackend.registerDomain("Inspector", ["itml", "javascript", "page"]);
InspectorBackend.registerCommand("Inspector.enable", null, [], []);
InspectorBackend.registerCommand("Inspector.disable", null, [], []);
InspectorBackend.registerCommand("Inspector.initialized", null, [], []);
InspectorBackend.registerEvent("Inspector.evaluateForTestInFrontend", null, ["script"]);
InspectorBackend.registerEvent("Inspector.inspect", null, ["object", "hints"]);
InspectorBackend.registerInspectorDispatcher = InspectorBackend.registerDispatcher.bind(InspectorBackend, "Inspector");
InspectorBackend.activateDomain("Inspector", ["itml", "javascript", "page", "web-page"]);
InspectorBackend.registerDomain("LayerTree", ["page"]);
InspectorBackend.registerCommand("LayerTree.enable", null, [], []);
InspectorBackend.registerCommand("LayerTree.disable", null, [], []);
InspectorBackend.registerCommand("LayerTree.layersForNode", null, [{"name": "nodeId", "type": "number"}], ["layers"]);
InspectorBackend.registerCommand("LayerTree.reasonsForCompositingLayer", null, [{"name": "layerId", "type": "string"}], ["compositingReasons"]);
InspectorBackend.registerEvent("LayerTree.layerTreeDidChange", null, []);
InspectorBackend.registerLayerTreeDispatcher = InspectorBackend.registerDispatcher.bind(InspectorBackend, "LayerTree");
InspectorBackend.activateDomain("LayerTree", ["page", "web-page"]);
InspectorBackend.registerDomain("Network", ["itml", "page", "service-worker"]);
InspectorBackend.registerEnum("Network.ResponseSource", {Unknown: "unknown", Network: "network", MemoryCache: "memory-cache", DiskCache: "disk-cache", ServiceWorker: "service-worker", InspectorOverride: "inspector-override"});
InspectorBackend.registerEnum("Network.MetricsPriority", {Low: "low", Medium: "medium", High: "high"});
InspectorBackend.registerEnum("Network.InitiatorType", {Parser: "parser", Script: "script", Other: "other"});
InspectorBackend.registerEnum("Network.NetworkStage", {Request: "request", Response: "response"});
InspectorBackend.registerEnum("Network.ResourceErrorType", {General: "General", AccessControl: "AccessControl", Cancellation: "Cancellation", Timeout: "Timeout"});
InspectorBackend.registerCommand("Network.enable", null, [], []);
InspectorBackend.registerCommand("Network.disable", null, [], []);
InspectorBackend.registerCommand("Network.setExtraHTTPHeaders", ["page"], [{"name": "headers", "type": "object"}], []);
InspectorBackend.registerCommand("Network.getResponseBody", null, [{"name": "requestId", "type": "string"}], ["body", "base64Encoded"]);
InspectorBackend.registerCommand("Network.setResourceCachingDisabled", null, [{"name": "disabled", "type": "boolean"}], []);
InspectorBackend.registerCommand("Network.loadResource", ["page"], [{"name": "frameId", "type": "string"}, {"name": "url", "type": "string"}], ["content", "mimeType", "status"]);
InspectorBackend.registerCommand("Network.getSerializedCertificate", ["page"], [{"name": "requestId", "type": "string"}], ["serializedCertificate"]);
InspectorBackend.registerCommand("Network.resolveWebSocket", ["page"], [{"name": "requestId", "type": "string"}, {"name": "objectGroup", "type": "string", "optional": true}], ["object"]);
InspectorBackend.registerCommand("Network.setInterceptionEnabled", ["page"], [{"name": "enabled", "type": "boolean"}], []);
InspectorBackend.registerCommand("Network.addInterception", ["page"], [{"name": "url", "type": "string"}, {"name": "stage", "type": "string"}, {"name": "caseSensitive", "type": "boolean", "optional": true}, {"name": "isRegex", "type": "boolean", "optional": true}], []);
InspectorBackend.registerCommand("Network.removeInterception", ["page"], [{"name": "url", "type": "string"}, {"name": "stage", "type": "string"}, {"name": "caseSensitive", "type": "boolean", "optional": true}, {"name": "isRegex", "type": "boolean", "optional": true}], []);
InspectorBackend.registerCommand("Network.interceptContinue", ["page"], [{"name": "requestId", "type": "string"}, {"name": "stage", "type": "string"}], []);
InspectorBackend.registerCommand("Network.interceptWithRequest", ["page"], [{"name": "requestId", "type": "string"}, {"name": "url", "type": "string", "optional": true}, {"name": "method", "type": "string", "optional": true}, {"name": "headers", "type": "object", "optional": true}, {"name": "postData", "type": "string", "optional": true}], []);
InspectorBackend.registerCommand("Network.interceptWithResponse", ["page"], [{"name": "requestId", "type": "string"}, {"name": "content", "type": "string"}, {"name": "base64Encoded", "type": "boolean"}, {"name": "mimeType", "type": "string", "optional": true}, {"name": "status", "type": "number", "optional": true}, {"name": "statusText", "type": "string", "optional": true}, {"name": "headers", "type": "object", "optional": true}], []);
InspectorBackend.registerCommand("Network.interceptRequestWithResponse", ["page"], [{"name": "requestId", "type": "string"}, {"name": "content", "type": "string"}, {"name": "base64Encoded", "type": "boolean"}, {"name": "mimeType", "type": "string"}, {"name": "status", "type": "number"}, {"name": "statusText", "type": "string"}, {"name": "headers", "type": "object"}], []);
InspectorBackend.registerCommand("Network.interceptRequestWithError", ["page"], [{"name": "requestId", "type": "string"}, {"name": "errorType", "type": "string"}], []);
InspectorBackend.registerEvent("Network.requestWillBeSent", null, ["requestId", "frameId", "loaderId", "documentURL", "request", "timestamp", "walltime", "initiator", "redirectResponse", "type", "targetId"]);
InspectorBackend.registerEvent("Network.responseReceived", null, ["requestId", "frameId", "loaderId", "timestamp", "type", "response"]);
InspectorBackend.registerEvent("Network.dataReceived", null, ["requestId", "timestamp", "dataLength", "encodedDataLength"]);
InspectorBackend.registerEvent("Network.loadingFinished", null, ["requestId", "timestamp", "sourceMapURL", "metrics"]);
InspectorBackend.registerEvent("Network.loadingFailed", null, ["requestId", "timestamp", "errorText", "canceled"]);
InspectorBackend.registerEvent("Network.requestServedFromMemoryCache", null, ["requestId", "frameId", "loaderId", "documentURL", "timestamp", "initiator", "resource"]);
InspectorBackend.registerEvent("Network.requestIntercepted", ["page"], ["requestId", "request"]);
InspectorBackend.registerEvent("Network.responseIntercepted", ["page"], ["requestId", "response"]);
InspectorBackend.registerEvent("Network.webSocketWillSendHandshakeRequest", ["page"], ["requestId", "timestamp", "walltime", "request"]);
InspectorBackend.registerEvent("Network.webSocketHandshakeResponseReceived", ["page"], ["requestId", "timestamp", "response"]);
InspectorBackend.registerEvent("Network.webSocketCreated", ["page"], ["requestId", "url"]);
InspectorBackend.registerEvent("Network.webSocketClosed", ["page"], ["requestId", "timestamp"]);
InspectorBackend.registerEvent("Network.webSocketFrameReceived", ["page"], ["requestId", "timestamp", "response"]);
InspectorBackend.registerEvent("Network.webSocketFrameError", ["page"], ["requestId", "timestamp", "errorMessage"]);
InspectorBackend.registerEvent("Network.webSocketFrameSent", ["page"], ["requestId", "timestamp", "response"]);
InspectorBackend.registerNetworkDispatcher = InspectorBackend.registerDispatcher.bind(InspectorBackend, "Network");
InspectorBackend.activateDomain("Network", ["itml", "page", "service-worker", "web-page"]);
InspectorBackend.registerDomain("Page", ["itml", "page"]);
InspectorBackend.registerEnum("Page.Setting", {PrivateClickMeasurementDebugModeEnabled: "PrivateClickMeasurementDebugModeEnabled", AuthorAndUserStylesEnabled: "AuthorAndUserStylesEnabled", ICECandidateFilteringEnabled: "ICECandidateFilteringEnabled", ITPDebugModeEnabled: "ITPDebugModeEnabled", ImagesEnabled: "ImagesEnabled", MediaCaptureRequiresSecureConnection: "MediaCaptureRequiresSecureConnection", MockCaptureDevicesEnabled: "MockCaptureDevicesEnabled", NeedsSiteSpecificQuirks: "NeedsSiteSpecificQuirks", ScriptEnabled: "ScriptEnabled", ShowDebugBorders: "ShowDebugBorders", ShowRepaintCounter: "ShowRepaintCounter", WebRTCEncryptionEnabled: "WebRTCEncryptionEnabled", WebSecurityEnabled: "WebSecurityEnabled"});
InspectorBackend.registerEnum("Page.ResourceType", {Document: "Document", StyleSheet: "StyleSheet", Image: "Image", Font: "Font", Script: "Script", XHR: "XHR", Fetch: "Fetch", Ping: "Ping", Beacon: "Beacon", WebSocket: "WebSocket", Other: "Other"});
InspectorBackend.registerEnum("Page.CoordinateSystem", {Viewport: "Viewport", Page: "Page"});
InspectorBackend.registerEnum("Page.CookieSameSitePolicy", {None: "None", Lax: "Lax", Strict: "Strict"});
InspectorBackend.registerCommand("Page.enable", null, [], []);
InspectorBackend.registerCommand("Page.disable", null, [], []);
InspectorBackend.registerCommand("Page.reload", null, [{"name": "ignoreCache", "type": "boolean", "optional": true}, {"name": "revalidateAllResources", "type": "boolean", "optional": true}], []);
InspectorBackend.registerCommand("Page.navigate", ["page"], [{"name": "url", "type": "string"}], []);
InspectorBackend.registerCommand("Page.overrideUserAgent", ["page"], [{"name": "value", "type": "string", "optional": true}], []);
InspectorBackend.registerCommand("Page.overrideSetting", ["page"], [{"name": "setting", "type": "string"}, {"name": "value", "type": "boolean", "optional": true}], []);
InspectorBackend.registerCommand("Page.getCookies", ["page"], [], ["cookies"]);
InspectorBackend.registerCommand("Page.setCookie", ["page"], [{"name": "cookie", "type": "object"}], []);
InspectorBackend.registerCommand("Page.deleteCookie", ["page"], [{"name": "cookieName", "type": "string"}, {"name": "url", "type": "string"}], []);
InspectorBackend.registerCommand("Page.getResourceTree", null, [], ["frameTree"]);
InspectorBackend.registerCommand("Page.getResourceContent", null, [{"name": "frameId", "type": "string"}, {"name": "url", "type": "string"}], ["content", "base64Encoded"]);
InspectorBackend.registerCommand("Page.setBootstrapScript", ["page"], [{"name": "source", "type": "string", "optional": true}], []);
InspectorBackend.registerCommand("Page.searchInResource", ["page"], [{"name": "frameId", "type": "string"}, {"name": "url", "type": "string"}, {"name": "query", "type": "string"}, {"name": "caseSensitive", "type": "boolean", "optional": true}, {"name": "isRegex", "type": "boolean", "optional": true}, {"name": "requestId", "type": "string", "optional": true}], ["result"]);
InspectorBackend.registerCommand("Page.searchInResources", ["page"], [{"name": "text", "type": "string"}, {"name": "caseSensitive", "type": "boolean", "optional": true}, {"name": "isRegex", "type": "boolean", "optional": true}], ["result"]);
InspectorBackend.registerCommand("Page.setShowRulers", ["page"], [{"name": "result", "type": "boolean"}], []);
InspectorBackend.registerCommand("Page.setShowPaintRects", ["page"], [{"name": "result", "type": "boolean"}], []);
InspectorBackend.registerCommand("Page.setEmulatedMedia", ["page"], [{"name": "media", "type": "string"}], []);
InspectorBackend.registerCommand("Page.snapshotNode", ["page"], [{"name": "nodeId", "type": "number"}], ["dataURL"]);
InspectorBackend.registerCommand("Page.snapshotRect", ["page"], [{"name": "x", "type": "number"}, {"name": "y", "type": "number"}, {"name": "width", "type": "number"}, {"name": "height", "type": "number"}, {"name": "coordinateSystem", "type": "string"}], ["dataURL"]);
InspectorBackend.registerCommand("Page.setScreenSizeOverride", ["page"], [{"name": "width", "type": "number", "optional": true}, {"name": "height", "type": "number", "optional": true}], []);
InspectorBackend.registerEvent("Page.domContentEventFired", ["page"], ["timestamp"]);
InspectorBackend.registerEvent("Page.loadEventFired", ["page"], ["timestamp"]);
InspectorBackend.registerEvent("Page.frameNavigated", null, ["frame"]);
InspectorBackend.registerEvent("Page.frameDetached", ["page"], ["frameId"]);
InspectorBackend.registerEvent("Page.frameStartedLoading", null, ["frameId"]);
InspectorBackend.registerEvent("Page.frameStoppedLoading", null, ["frameId"]);
InspectorBackend.registerEvent("Page.frameScheduledNavigation", ["page"], ["frameId", "delay"]);
InspectorBackend.registerEvent("Page.frameClearedScheduledNavigation", ["page"], ["frameId"]);
InspectorBackend.registerPageDispatcher = InspectorBackend.registerDispatcher.bind(InspectorBackend, "Page");
InspectorBackend.activateDomain("Page", ["itml", "page", "web-page"]);
InspectorBackend.registerDomain("Recording", ["page"]);
InspectorBackend.registerVersion("Recording", 1);
InspectorBackend.registerEnum("Recording.Type", {Canvas2D: "canvas-2d", CanvasBitmapRenderer: "canvas-bitmaprenderer", CanvasWebGL: "canvas-webgl", CanvasWebGL2: "canvas-webgl2"});
InspectorBackend.registerEnum("Recording.Initiator", {Frontend: "frontend", Console: "console", AutoCapture: "auto-capture"});
InspectorBackend.activateDomain("Recording", ["page", "web-page"]);
InspectorBackend.registerDomain("Runtime", ["itml", "javascript", "page", "service-worker", "worker"]);
InspectorBackend.registerEnum("Runtime.RemoteObjectType", {Object: "object", Function: "function", Undefined: "undefined", String: "string", Number: "number", Boolean: "boolean", Symbol: "symbol", Bigint: "bigint"});
InspectorBackend.registerEnum("Runtime.RemoteObjectSubtype", {Array: "array", Null: "null", Node: "node", Regexp: "regexp", Date: "date", Error: "error", Map: "map", Set: "set", Weakmap: "weakmap", Weakset: "weakset", Iterator: "iterator", Class: "class", Proxy: "proxy"});
InspectorBackend.registerEnum("Runtime.ObjectPreviewType", {Object: "object", Function: "function", Undefined: "undefined", String: "string", Number: "number", Boolean: "boolean", Symbol: "symbol", Bigint: "bigint"});
InspectorBackend.registerEnum("Runtime.ObjectPreviewSubtype", {Array: "array", Null: "null", Node: "node", Regexp: "regexp", Date: "date", Error: "error", Map: "map", Set: "set", Weakmap: "weakmap", Weakset: "weakset", Iterator: "iterator", Class: "class", Proxy: "proxy"});
InspectorBackend.registerEnum("Runtime.PropertyPreviewType", {Object: "object", Function: "function", Undefined: "undefined", String: "string", Number: "number", Boolean: "boolean", Symbol: "symbol", Bigint: "bigint", Accessor: "accessor"});
InspectorBackend.registerEnum("Runtime.PropertyPreviewSubtype", {Array: "array", Null: "null", Node: "node", Regexp: "regexp", Date: "date", Error: "error", Map: "map", Set: "set", Weakmap: "weakmap", Weakset: "weakset", Iterator: "iterator", Class: "class", Proxy: "proxy"});
InspectorBackend.registerEnum("Runtime.ExecutionContextType", {Normal: "normal", User: "user", Internal: "internal"});
InspectorBackend.registerEnum("Runtime.SyntaxErrorType", {None: "none", Irrecoverable: "irrecoverable", UnterminatedLiteral: "unterminated-literal", Recoverable: "recoverable"});
InspectorBackend.registerCommand("Runtime.parse", null, [{"name": "source", "type": "string"}], ["result", "message", "range"]);
InspectorBackend.registerCommand("Runtime.evaluate", null, [{"name": "expression", "type": "string"}, {"name": "objectGroup", "type": "string", "optional": true}, {"name": "includeCommandLineAPI", "type": "boolean", "optional": true}, {"name": "doNotPauseOnExceptionsAndMuteConsole", "type": "boolean", "optional": true}, {"name": "contextId", "type": "number", "optional": true}, {"name": "returnByValue", "type": "boolean", "optional": true}, {"name": "generatePreview", "type": "boolean", "optional": true}, {"name": "saveResult", "type": "boolean", "optional": true}, {"name": "emulateUserGesture", "type": "boolean", "optional": true}], ["result", "wasThrown", "savedResultIndex"]);
InspectorBackend.registerCommand("Runtime.awaitPromise", null, [{"name": "promiseObjectId", "type": "string"}, {"name": "returnByValue", "type": "boolean", "optional": true}, {"name": "generatePreview", "type": "boolean", "optional": true}, {"name": "saveResult", "type": "boolean", "optional": true}], ["result", "wasThrown", "savedResultIndex"]);
InspectorBackend.registerCommand("Runtime.callFunctionOn", null, [{"name": "objectId", "type": "string"}, {"name": "functionDeclaration", "type": "string"}, {"name": "arguments", "type": "object", "optional": true}, {"name": "doNotPauseOnExceptionsAndMuteConsole", "type": "boolean", "optional": true}, {"name": "returnByValue", "type": "boolean", "optional": true}, {"name": "generatePreview", "type": "boolean", "optional": true}, {"name": "emulateUserGesture", "type": "boolean", "optional": true}], ["result", "wasThrown"]);
InspectorBackend.registerCommand("Runtime.getPreview", null, [{"name": "objectId", "type": "string"}], ["preview"]);
InspectorBackend.registerCommand("Runtime.getProperties", null, [{"name": "objectId", "type": "string"}, {"name": "ownProperties", "type": "boolean", "optional": true}, {"name": "fetchStart", "type": "number", "optional": true}, {"name": "fetchCount", "type": "number", "optional": true}, {"name": "generatePreview", "type": "boolean", "optional": true}], ["properties", "internalProperties"]);
InspectorBackend.registerCommand("Runtime.getDisplayableProperties", null, [{"name": "objectId", "type": "string"}, {"name": "fetchStart", "type": "number", "optional": true}, {"name": "fetchCount", "type": "number", "optional": true}, {"name": "generatePreview", "type": "boolean", "optional": true}], ["properties", "internalProperties"]);
InspectorBackend.registerCommand("Runtime.getCollectionEntries", null, [{"name": "objectId", "type": "string"}, {"name": "objectGroup", "type": "string", "optional": true}, {"name": "fetchStart", "type": "number", "optional": true}, {"name": "fetchCount", "type": "number", "optional": true}], ["entries"]);
InspectorBackend.registerCommand("Runtime.saveResult", null, [{"name": "value", "type": "object"}, {"name": "contextId", "type": "number", "optional": true}], ["savedResultIndex"]);
InspectorBackend.registerCommand("Runtime.setSavedResultAlias", null, [{"name": "alias", "type": "string", "optional": true}], []);
InspectorBackend.registerCommand("Runtime.releaseObject", null, [{"name": "objectId", "type": "string"}], []);
InspectorBackend.registerCommand("Runtime.releaseObjectGroup", null, [{"name": "objectGroup", "type": "string"}], []);
InspectorBackend.registerCommand("Runtime.enable", null, [], []);
InspectorBackend.registerCommand("Runtime.disable", null, [], []);
InspectorBackend.registerCommand("Runtime.getRuntimeTypesForVariablesAtOffsets", null, [{"name": "locations", "type": "object"}], ["types"]);
InspectorBackend.registerCommand("Runtime.enableTypeProfiler", null, [], []);
InspectorBackend.registerCommand("Runtime.disableTypeProfiler", null, [], []);
InspectorBackend.registerCommand("Runtime.enableControlFlowProfiler", null, [], []);
InspectorBackend.registerCommand("Runtime.disableControlFlowProfiler", null, [], []);
InspectorBackend.registerCommand("Runtime.getBasicBlocks", null, [{"name": "sourceID", "type": "string"}], ["basicBlocks"]);
InspectorBackend.registerEvent("Runtime.executionContextCreated", null, ["context"]);
InspectorBackend.registerRuntimeDispatcher = InspectorBackend.registerDispatcher.bind(InspectorBackend, "Runtime");
InspectorBackend.activateDomain("Runtime", ["itml", "javascript", "page", "service-worker", "web-page"]);
InspectorBackend.registerDomain("ScriptProfiler", ["itml", "javascript", "page"]);
InspectorBackend.registerEnum("ScriptProfiler.EventType", {API: "API", Microtask: "Microtask", Other: "Other"});
InspectorBackend.registerCommand("ScriptProfiler.startTracking", null, [{"name": "includeSamples", "type": "boolean", "optional": true}], []);
InspectorBackend.registerCommand("ScriptProfiler.stopTracking", null, [], []);
InspectorBackend.registerEvent("ScriptProfiler.trackingStart", null, ["timestamp"]);
InspectorBackend.registerEvent("ScriptProfiler.trackingUpdate", null, ["event"]);
InspectorBackend.registerEvent("ScriptProfiler.trackingComplete", null, ["timestamp", "samples"]);
InspectorBackend.registerScriptProfilerDispatcher = InspectorBackend.registerDispatcher.bind(InspectorBackend, "ScriptProfiler");
InspectorBackend.activateDomain("ScriptProfiler", ["itml", "javascript", "page", "web-page"]);
InspectorBackend.registerDomain("Target", ["web-page"]);
InspectorBackend.registerEnum("Target.TargetInfoType", {Page: "page", ServiceWorker: "service-worker", Worker: "worker"});
InspectorBackend.registerCommand("Target.setPauseOnStart", null, [{"name": "pauseOnStart", "type": "boolean"}], []);
InspectorBackend.registerCommand("Target.resume", null, [{"name": "targetId", "type": "string"}], []);
InspectorBackend.registerCommand("Target.sendMessageToTarget", null, [{"name": "targetId", "type": "string"}, {"name": "message", "type": "string"}], []);
InspectorBackend.registerEvent("Target.targetCreated", null, ["targetInfo"]);
InspectorBackend.registerEvent("Target.targetDestroyed", null, ["targetId"]);
InspectorBackend.registerEvent("Target.didCommitProvisionalTarget", null, ["oldTargetId", "newTargetId"]);
InspectorBackend.registerEvent("Target.dispatchMessageFromTarget", null, ["targetId", "message"]);
InspectorBackend.registerTargetDispatcher = InspectorBackend.registerDispatcher.bind(InspectorBackend, "Target");
InspectorBackend.activateDomain("Target", ["web-page"]);
InspectorBackend.registerDomain("Timeline", ["page"]);
InspectorBackend.registerEnum("Timeline.EventType", {EventDispatch: "EventDispatch", ScheduleStyleRecalculation: "ScheduleStyleRecalculation", RecalculateStyles: "RecalculateStyles", InvalidateLayout: "InvalidateLayout", Layout: "Layout", Paint: "Paint", Composite: "Composite", RenderingFrame: "RenderingFrame", TimerInstall: "TimerInstall", TimerRemove: "TimerRemove", TimerFire: "TimerFire", EvaluateScript: "EvaluateScript", TimeStamp: "TimeStamp", Time: "Time", TimeEnd: "TimeEnd", FunctionCall: "FunctionCall", ProbeSample: "ProbeSample", ConsoleProfile: "ConsoleProfile", RequestAnimationFrame: "RequestAnimationFrame", CancelAnimationFrame: "CancelAnimationFrame", FireAnimationFrame: "FireAnimationFrame", ObserverCallback: "ObserverCallback"});
InspectorBackend.registerEnum("Timeline.Instrument", {ScriptProfiler: "ScriptProfiler", Timeline: "Timeline", CPU: "CPU", Memory: "Memory", Heap: "Heap", Animation: "Animation"});
InspectorBackend.registerCommand("Timeline.enable", null, [], []);
InspectorBackend.registerCommand("Timeline.disable", null, [], []);
InspectorBackend.registerCommand("Timeline.start", null, [{"name": "maxCallStackDepth", "type": "number", "optional": true}], []);
InspectorBackend.registerCommand("Timeline.stop", null, [], []);
InspectorBackend.registerCommand("Timeline.setAutoCaptureEnabled", null, [{"name": "enabled", "type": "boolean"}], []);
InspectorBackend.registerCommand("Timeline.setInstruments", null, [{"name": "instruments", "type": "object"}], []);
InspectorBackend.registerEvent("Timeline.eventRecorded", null, ["record"]);
InspectorBackend.registerEvent("Timeline.recordingStarted", null, ["startTime"]);
InspectorBackend.registerEvent("Timeline.recordingStopped", null, ["endTime"]);
InspectorBackend.registerEvent("Timeline.autoCaptureStarted", null, []);
InspectorBackend.registerTimelineDispatcher = InspectorBackend.registerDispatcher.bind(InspectorBackend, "Timeline");
InspectorBackend.activateDomain("Timeline", ["page", "web-page"]);
InspectorBackend.registerDomain("Worker", ["page"]);
InspectorBackend.registerCommand("Worker.enable", null, [], []);
InspectorBackend.registerCommand("Worker.disable", null, [], []);
InspectorBackend.registerCommand("Worker.initialized", null, [{"name": "workerId", "type": "string"}], []);
InspectorBackend.registerCommand("Worker.sendMessageToWorker", null, [{"name": "workerId", "type": "string"}, {"name": "message", "type": "string"}], []);
InspectorBackend.registerEvent("Worker.workerCreated", null, ["workerId", "url", "name"]);
InspectorBackend.registerEvent("Worker.workerTerminated", null, ["workerId"]);
InspectorBackend.registerEvent("Worker.dispatchMessageFromWorker", null, ["workerId", "message"]);
InspectorBackend.registerWorkerDispatcher = InspectorBackend.registerDispatcher.bind(InspectorBackend, "Worker");
InspectorBackend.activateDomain("Worker", ["page", "web-page"]);
