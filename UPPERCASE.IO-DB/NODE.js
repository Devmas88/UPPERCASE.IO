global.CONNECT_TO_DB_SERVER=CONNECT_TO_DB_SERVER=METHOD(function(t){var o,i,n=[];return t.addInitDBFunc=i=function(t){void 0===o?n.push(t):t(o)},{run:function(t,i){"use strict";var r=t.username,e=t.password,d=void 0===t.host?"127.0.0.1":t.host,a=void 0===t.port?27017:t.port,c=t.name;require("mongodb").MongoClient.connect("mongodb://"+(void 0!==r&&void 0!==e?r+":"+e+"@":"")+d+":"+a+"/"+c,function(t,r){t!==TO_DELETE?console.log(CONSOLE_RED("[UPPERCASE.IO-DB] CONNECT TO DB SERVER FAILED: "+t.toString())):(o=r,EACH(n,function(t){t(o)}),n=void 0,void 0!==i&&i())})}}}),FOR_BOX(function(t){"use strict";var o=require("mongodb").ObjectID,i=function(t){return new o(t)},n=function(t){return void 0!==t._id&&(t.id=t._id.toString()),delete t._id,delete t.__IS_ENABLED,delete t.__RANDOM_KEY,t},r=function(t){EACH(t,function(o,i){o===TO_DELETE?REMOVE({data:t,key:i}):(CHECK_IS_DATA(o)===!0||CHECK_IS_ARRAY(o)===!0)&&r(o)})},e=function(t){var o=function(t){void 0!==t.id&&(CHECK_IS_DATA(t.id)===!0?(EACH(t.id,function(o,n){CHECK_IS_DATA(o)===!0||CHECK_IS_ARRAY(o)===!0?EACH(o,function(t,n){o[n]=i(t)}):t.id[n]=i(o)}),t._id=t.id):t._id=i(id),delete t.id),t.__IS_ENABLED=!0,EACH(t,function(o,i){void 0===o&&delete t[i]})};void 0!==t.$and?EACH(t.$and,function(t){o(t)}):void 0!==t.$or?EACH(t.$or,function(t){o(t)}):o(t)};t.DB=CLASS({init:function(o,d,a){var c,E,s,u,_,f,v,l=[],O=[],D=[],C=[],A=[],m=[],T=[];d.create=c=function(t,o){l.push({data:t,callbackOrHandlers:o})},d.get=E=function(t,o){O.push({idOrParams:t,callbackOrHandlers:o})},d.update=s=function(t,o){D.push({data:t,callbackOrHandlers:o})},d.remove=u=function(t,o){C.push({id:t,callbackOrHandlers:o})},d.find=_=function(t,o){A.push({params:t,callbackOrHandlers:o})},d.count=f=function(t,o){m.push({filter:t,callbackOrHandlers:o})},d.checkIsExists=v=function(t,o){T.push({filter:t,callbackOrHandlers:o})},CONNECT_TO_DB_SERVER.addInitDBFunc(function(o){var g,S=o.collection(t.boxName+"."+a),N=o.collection(t.boxName+"."+a+"__BACKUP"),h=o.collection(t.boxName+"."+a+"__ERROR"),H=function(o){var i=o.method,n=o.data,r=new Date,e={method:i,time:r,data:n};N.save(e,function(){}),NODE_CONFIG.isDBLogMode===!0&&console.log("[UPPERCASE.IO-DB] `"+t.boxName+"."+a+"` DATA SAVED:",e)},I=function(o){o.time=new Date,h.save(o,function(){}),console.log("[UPPERCASE.IO-DB] `"+t.boxName+"."+a+"` ERROR:",o)};d.create=c=function(t,o){var i,e,d;try{t.__IS_ENABLED=!0,t.__RANDOM_KEY=Math.random(),t.createTime=new Date,r(t),void 0!==o&&(CHECK_IS_DATA(o)!==!0?i=o:(i=o.success,e=o.error)),S.save(t,function(o,r){o===TO_DELETE?(H({method:"create",data:r}),n(r),void 0!==i&&i(r)):(d=o.toString(),I({method:"create",data:t,errorMsg:d}),void 0!==e&&e(d))})}catch(a){d=a.toString(),I({method:"create",data:t,errorMsg:d}),void 0!==e&&e(d)}},g=function(t,o){var i,r,d,a,c=t.filter,E=t.sort;try{e(c),CHECK_IS_DATA(o)!==!0?i=o:(i=o.success,r=o.notExists,d=o.error),S.find(c).sort(E).limit(1).toArray(function(o,e){var c;o===TO_DELETE?e!==TO_DELETE&&e.length>0?(c=e[0],n(c),i(c)):void 0!==r&&r():(a=o.toString(),I({method:"get",params:t,errorMsg:a}),void 0!==d&&d(a))})}catch(s){a=s.toString(),I({method:"get",params:t,errorMsg:a}),void 0!==d&&d(a)}},d.get=E=function(t,o){var n,r,e,d,a,c,E,s;void 0===o&&(o=t,t=void 0),CHECK_IS_DATA(o)!==!0?d=o:(d=o.success,a=o.notExists,c=o.error);try{CHECK_IS_DATA(t)===!0?(n=t.filter,r=t.sort,e=t.isRandom):n=void 0!==t?{_id:i(t)}:{},void 0===n&&(n={}),void 0===r&&(r={createTime:-1}),e===!0?(n.__RANDOM_KEY={$gte:E=Math.random()},r.__RANDOM_KEY=1,g({filter:n,sort:r},{error:c,notExists:function(){n.__RANDOM_KEY={$lte:E},g({filter:n,sort:r},o)},success:d})):g({filter:n,sort:r},o)}catch(u){s=u.toString(),I({method:"get",idOrParams:t,errorMsg:s}),void 0!==c&&c(s)}},d.update=s=function(t,o){var e,d,a,c,E,s=t.id,u=t.$inc;try{e={_id:i(s),__IS_ENABLED:!0},void 0!==o&&(CHECK_IS_DATA(o)!==!0?d=o:(d=o.success,a=o.notExists,c=o.error)),NEXT([function(t){S.findOne(e,t)},function(o){return function(i,n){i===TO_DELETE?n===TO_DELETE?a():(EACH(t,function(t,o){"id"!==o&&"_id"!==o&&"__IS_ENABLED"!==o&&"createTime"!==o&&"$inc"!==o&&(n[o]=t)}),r(n),n.lastUpdateTime=new Date,void 0!==u?S.save(n,function(t){o(n,t)}):S.save(n,function(t){o.next(n,t)})):(E=i.toString(),I({method:"update",data:t,errorMsg:E}),void 0!==c&&c(E))}},function(t){return function(o){S.update(e,{$inc:u},function(i){EACH(u,function(t,i){o[i]+=t}),t(o,i)})}},function(){return function(o,i){i===TO_DELETE?(H({method:"update",data:o}),n(o),void 0!==d&&d(o)):(E=i.toString(),I({method:"update",data:t,errorMsg:E}),void 0!==c&&c(E))}}])}catch(_){E=_.toString(),I({method:"update",data:t,errorMsg:E}),void 0!==c&&c(E)}},d.remove=u=function(t,o){var r,e,d,a,c;try{r={_id:i(t),__IS_ENABLED:!0},void 0!==o&&(CHECK_IS_DATA(o)!==!0?e=o:(e=o.success,d=o.notExists,a=o.error)),S.findOne(r,function(o,i){o===TO_DELETE?i===TO_DELETE?d():(i.__IS_ENABLED=!1,i.removeTime=new Date,S.save(i,function(o){o===TO_DELETE?(H({method:"remove",data:i}),n(i),void 0!==e&&e(i)):(c=o.toString(),I({method:"remove",id:t,errorMsg:c}),void 0!==a&&a(c))})):(c=o.toString(),I({method:"remove",id:t,errorMsg:c}),void 0!==a&&a(c))})}catch(E){c=E.toString(),I({method:"remove",id:t,errorMsg:c}),void 0!==a&&a(c)}},d.find=_=function(t,o){var i,r,d,a,c,E,s,u,_;try{void 0===o&&(o=t,t=void 0),void 0!==t&&(i=t.filter,r=t.sort,d=INTEGER(t.start),a=INTEGER(t.count),c=t.isFindAll),CHECK_IS_DATA(o)!==!0?E=o:(E=o.success,s=o.error),void 0===i&&(i={}),void 0===r&&(r={createTime:-1}),void 0===d&&(d=0),c!==!0&&(void 0===a||a>NODE_CONFIG.maxDataCount||isNaN(a)===!0?a=NODE_CONFIG.maxDataCount:1>a&&(a=1)),e(i),_=function(o,i){o===TO_DELETE?(i!==TO_DELETE&&EACH(i,function(t){n(t)}),E(i)):(u=o.toString(),I({method:"find",params:t,errorMsg:u}),void 0!==s&&s(u))},c===!0?S.find(i).sort(r).skip(d).toArray(_):S.find(i).sort(r).skip(d).limit(a).toArray(_)}catch(f){u=f.toString(),I({method:"find",params:t,errorMsg:u}),void 0!==s&&s(u)}},d.count=f=function(t,o){var i,n,r;try{void 0===o&&(o=t,t=void 0),void 0===t&&(t={}),CHECK_IS_DATA(o)!==!0?i=o:(i=o.success,n=o.error),e(t),S.find(t).count(function(o,e){o===TO_DELETE?i(e):(r=o.toString(),I({method:"count",filter:t,errorMsg:r}),void 0!==n&&n(r))})}catch(d){r=d.toString(),I({method:"count",filter:t,errorMsg:r}),void 0!==n&&n(r)}},d.checkIsExists=v=function(t,o){var n,r,d;try{void 0===o&&(o=t,t=void 0),void 0===t?t={}:CHECK_IS_DATA(t)!==!0&&(t={_id:i(t)}),CHECK_IS_DATA(o)!==!0?n=o:(n=o.success,r=o.error),e(t),S.find(t).count(function(o,i){o===TO_DELETE?n(void 0!==i&&i>0):(d=o.toString(),I({method:"checkIsExists",filter:t,errorMsg:d}),void 0!==r&&r(d))})}catch(a){d=a.toString(),I({method:"checkIsExists",filter:t,errorMsg:d}),void 0!==r&&r(d)}},EACH(l,function(t){c(t.data,t.callbackOrHandlers)}),l=void 0,EACH(O,function(t){E(t.idOrParams,t.callbackOrHandlers)}),O=void 0,EACH(D,function(t){s(t.data,t.callbackOrHandlers)}),D=void 0,EACH(C,function(t){u(t.id,t.callbackOrHandlers)}),C=void 0,EACH(A,function(t){_(t.params,t.callbackOrHandlers)}),A=void 0,EACH(m,function(t){f(t.filter,t.callbackOrHandlers)}),m=void 0,EACH(T,function(t){v(t.filter,t.callbackOrHandlers)}),T=void 0})}})}),FOR_BOX(function(t){"use strict";t.LOG_DB=CLASS({init:function(o,i,n){var r,e=CONNECT_TO_DB_SERVER.getNativeDB(),d=e.collection(t.boxName+"."+n);i.log=r=function(t){t.time=new Date,d.save(t,function(){})}}})}),OVERRIDE(NODE_CONFIG,function(t){global.NODE_CONFIG=NODE_CONFIG=COMBINE([t,{isDBLogMode:!1,maxDataCount:1e3}])});