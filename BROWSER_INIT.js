LOAD("/UPPERCASE.IO/UPPERCASE.JS-BROWSER-FIX/FIX.js"),LOAD("/UPPERCASE.IO/FIX.js"),global.onload=function(){"use strict";INIT_OBJECTS(),FOR_BOX(function(o){void 0!==o.MAIN&&o.MAIN()}),CONNECT_TO_ROOM_SERVER({port:CONFIG.webSocketServerPort,fixServerPort:CONFIG.webSocketFixServerPort},function(o){o("__DISCONNECTED",function(){var o=RAR(function(){GET("",{error:function(){DELAY(1,function(){o()})},success:function(){location.reload()}})})})})};