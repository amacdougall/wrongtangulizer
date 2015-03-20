// Compiled by ClojureScript 0.0-3126 {}
goog.provide('wrongtangular.util');
goog.require('cljs.core');
goog.require('goog.net.EventType');
goog.require('goog.net.XhrIo');
goog.require('cljs.core.async');
goog.require('goog.events');
wrongtangular.util.keywordify = (function wrongtangular$util$keywordify(m){
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__17359__auto__ = (function wrongtangular$util$keywordify_$_iter__21012(s__21013){
return (new cljs.core.LazySeq(null,(function (){
var s__21013__$1 = s__21013;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__21013__$1);
if(temp__4406__auto__){
var s__21013__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21013__$2)){
var c__17357__auto__ = cljs.core.chunk_first.call(null,s__21013__$2);
var size__17358__auto__ = cljs.core.count.call(null,c__17357__auto__);
var b__21015 = cljs.core.chunk_buffer.call(null,size__17358__auto__);
if((function (){var i__21014 = (0);
while(true){
if((i__21014 < size__17358__auto__)){
var vec__21018 = cljs.core._nth.call(null,c__17357__auto__,i__21014);
var k = cljs.core.nth.call(null,vec__21018,(0),null);
var v = cljs.core.nth.call(null,vec__21018,(1),null);
cljs.core.chunk_append.call(null,b__21015,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),wrongtangular$util$keywordify.call(null,v)], null));

var G__21020 = (i__21014 + (1));
i__21014 = G__21020;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21015),wrongtangular$util$keywordify_$_iter__21012.call(null,cljs.core.chunk_rest.call(null,s__21013__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21015),null);
}
} else {
var vec__21019 = cljs.core.first.call(null,s__21013__$2);
var k = cljs.core.nth.call(null,vec__21019,(0),null);
var v = cljs.core.nth.call(null,vec__21019,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),wrongtangular$util$keywordify.call(null,v)], null),wrongtangular$util$keywordify_$_iter__21012.call(null,cljs.core.rest.call(null,s__21013__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17359__auto__.call(null,m);
})());
} else {
if(cljs.core.coll_QMARK_.call(null,m)){
return cljs.core.vec.call(null,cljs.core.map.call(null,wrongtangular$util$keywordify,m));
} else {
return m;

}
}
});
wrongtangular.util.get_json = (function wrongtangular$util$get_json(url){
var xhr = (new goog.net.XhrIo());
var out = cljs.core.async.chan.call(null);
goog.events.listen(xhr,goog.net.EventType.COMPLETE,((function (xhr,out){
return (function (e){
return cljs.core.async.put_BANG_.call(null,out,wrongtangular.util.keywordify.call(null,cljs.core.js__GT_clj.call(null,JSON.parse(xhr.getResponseText()))));
});})(xhr,out))
);

xhr.send(url,"GET",{"Content-Type": "application/json"});

return out;
});
wrongtangular.util.store_BANG_ = (function wrongtangular$util$store_BANG_(k,v){
return localStorage.setItem(k,JSON.stringify(cljs.core.clj__GT_js.call(null,v)));
});
wrongtangular.util.fetch = (function() {
var wrongtangular$util$fetch = null;
var wrongtangular$util$fetch__1 = (function (k){
return wrongtangular$util$fetch.call(null,k,null);
});
var wrongtangular$util$fetch__2 = (function (k,default$){
var temp__4404__auto__ = localStorage.getItem(k);
if(cljs.core.truth_(temp__4404__auto__)){
var item = temp__4404__auto__;
return wrongtangular.util.keywordify.call(null,cljs.core.js__GT_clj.call(null,JSON.parse((function (){var or__16605__auto__ = item;
if(cljs.core.truth_(or__16605__auto__)){
return or__16605__auto__;
} else {
var obj21024 = {};
return obj21024;
}
})())));
} else {
var or__16605__auto__ = default$;
if(cljs.core.truth_(or__16605__auto__)){
return or__16605__auto__;
} else {
return null;
}
}
});
wrongtangular$util$fetch = function(k,default$){
switch(arguments.length){
case 1:
return wrongtangular$util$fetch__1.call(this,k);
case 2:
return wrongtangular$util$fetch__2.call(this,k,default$);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
wrongtangular$util$fetch.cljs$core$IFn$_invoke$arity$1 = wrongtangular$util$fetch__1;
wrongtangular$util$fetch.cljs$core$IFn$_invoke$arity$2 = wrongtangular$util$fetch__2;
return wrongtangular$util$fetch;
})()
;

//# sourceMappingURL=util.js.map?rel=1426867234508