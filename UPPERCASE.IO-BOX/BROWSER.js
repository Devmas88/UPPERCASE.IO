FOR_BOX(function(n){"use strict";n.STORE=CLASS({init:function(t,i,e){var o,u,r,E=STORE(n.boxName+"."+e);i.save=o=E.save,i.get=u=E.get,i.remove=r=E.remove}})}),FOR_BOX(function(n){"use strict";n.DELETE=METHOD({run:function(t,i){n.REQUEST(COMBINE_DATA({origin:t,extend:{method:"DELETE"}}),i)}})}),FOR_BOX(function(n){"use strict";n.GET=METHOD({run:function(t,i){n.REQUEST(COMBINE_DATA({origin:t,extend:{method:"GET"}}),i)}})}),FOR_BOX(function(n){"use strict";n.POST=METHOD({run:function(t,i){n.REQUEST(COMBINE_DATA({origin:t,extend:{method:"POST"}}),i)}})}),FOR_BOX(function(n){"use strict";n.PUT=METHOD({run:function(t,i){n.REQUEST(COMBINE_DATA({origin:t,extend:{method:"PUT"}}),i)}})}),FOR_BOX(function(n){"use strict";n.REQUEST=METHOD({run:function(t,i){REQUEST(COMBINE_DATA({origin:t,extend:{uri:n.boxName+"/"+t.uri}}),i)}})}),FOR_BOX(function(n){"use strict";n.GO=METHOD({run:function(t){location.href=n.HREF(t)}})}),FOR_BOX(function(n){"use strict";n.GO_NEW_WIN=METHOD({run:function(t){global.open(n.HREF(t))}})}),FOR_BOX(function(n){"use strict";n.HREF=METHOD({run:function(t){return HREF((n.boxName===CONFIG.defaultBoxName?"":n.boxName+"/")+t)}})}),FOR_BOX(function(n){"use strict";n.MATCH_VIEW=METHOD({run:function(t){var i,e,o=t.uris,u=t.target;EVENT({name:"hashchange"},RAR(function(){var t,r;t=location.hash.substring(1).split("/"),r="#__REFRESING"===location.hash?!0:EACH(o,function(o){var r,E,a=o.split("/"),c={};return E=function(){var i=EACH(t,function(i,e){var o=a[e];if(0===e&&n.boxName!==i&&void 0!==BOX.getBoxes()[i])return r=!1,!1;if("**"===o)return r=!0,!1;if(void 0===o)return!1;if("{"===o.charAt(0)&&"}"===o.charAt(o.length-1))c[o.substring(1,o.length-1)]=i;else if(a[e]!==i&&"*"!==o)return!1;return t.length-1===e&&a.length-1>e&&""!==a[a.length-1]?!1:void 0});void 0===r&&(r=i)},n.boxName===CONFIG.defaultBoxName&&E(),r!==!0&&(a.unshift(n.boxName),E()),r===!0?(DELAY(function(){void 0===i?(i=u(),i.onChangeParams(c),u.lastView=i,e=c):CHECK_ARE_SAME_DATA_SET({data1:e,data2:c})!==!0&&(i.onChangeParams(c),e=c)}),!1):void 0}),r===!0&&void 0!==i&&(i.close(),i=void 0,u.lastView=void 0)}))}})}),FOR_BOX(function(n){"use strict";n.REFRESH=METHOD({run:function(t){var i=EVENT({name:"hashchange"},function(){n.GO(t),i.remove()});location.href="#__REFRESING"}})});