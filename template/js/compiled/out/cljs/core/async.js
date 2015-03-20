// Compiled by ClojureScript 0.0-3126 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t14531 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14531 = (function (f,fn_handler,meta14532){
this.f = f;
this.fn_handler = fn_handler;
this.meta14532 = meta14532;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14531.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t14531.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t14531.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t14531.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14533){
var self__ = this;
var _14533__$1 = this;
return self__.meta14532;
});

cljs.core.async.t14531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14533,meta14532__$1){
var self__ = this;
var _14533__$1 = this;
return (new cljs.core.async.t14531(self__.f,self__.fn_handler,meta14532__$1));
});

cljs.core.async.t14531.cljs$lang$type = true;

cljs.core.async.t14531.cljs$lang$ctorStr = "cljs.core.async/t14531";

cljs.core.async.t14531.cljs$lang$ctorPrWriter = (function (this__4645__auto__,writer__4646__auto__,opt__4647__auto__){
return cljs.core._write.call(null,writer__4646__auto__,"cljs.core.async/t14531");
});

cljs.core.async.__GT_t14531 = (function cljs$core$async$fn_handler_$___GT_t14531(f__$1,fn_handler__$1,meta14532){
return (new cljs.core.async.t14531(f__$1,fn_handler__$1,meta14532));
});

}

return (new cljs.core.async.t14531(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__14535 = buff;
if(G__14535){
var bit__4740__auto__ = null;
if(cljs.core.truth_((function (){var or__4066__auto__ = bit__4740__auto__;
if(cljs.core.truth_(or__4066__auto__)){
return or__4066__auto__;
} else {
return G__14535.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__14535.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14535);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14535);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function() {
var cljs$core$async$chan = null;
var cljs$core$async$chan__0 = (function (){
return cljs$core$async$chan.call(null,null);
});
var cljs$core$async$chan__1 = (function (buf_or_n){
return cljs$core$async$chan.call(null,buf_or_n,null,null);
});
var cljs$core$async$chan__2 = (function (buf_or_n,xform){
return cljs$core$async$chan.call(null,buf_or_n,xform,null);
});
var cljs$core$async$chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
cljs$core$async$chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return cljs$core$async$chan__0.call(this);
case 1:
return cljs$core$async$chan__1.call(this,buf_or_n);
case 2:
return cljs$core$async$chan__2.call(this,buf_or_n,xform);
case 3:
return cljs$core$async$chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$chan__0;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$chan__1;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$chan__2;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$chan__3;
return cljs$core$async$chan;
})()
;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function() {
var cljs$core$async$take_BANG_ = null;
var cljs$core$async$take_BANG___2 = (function (port,fn1){
return cljs$core$async$take_BANG_.call(null,port,fn1,true);
});
var cljs$core$async$take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_14536 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_14536);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_14536,ret){
return (function (){
return fn1.call(null,val_14536);
});})(val_14536,ret))
);
}
} else {
}

return null;
});
cljs$core$async$take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$take_BANG___2.call(this,port,fn1);
case 3:
return cljs$core$async$take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_BANG_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$take_BANG___2;
cljs$core$async$take_BANG_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$take_BANG___3;
return cljs$core$async$take_BANG_;
})()
;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function() {
var cljs$core$async$put_BANG_ = null;
var cljs$core$async$put_BANG___2 = (function (port,val){
var temp__4404__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4404__auto__)){
var ret = temp__4404__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var cljs$core$async$put_BANG___3 = (function (port,val,fn1){
return cljs$core$async$put_BANG_.call(null,port,val,fn1,true);
});
var cljs$core$async$put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4404__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4404__auto__)){
var retb = temp__4404__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4404__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4404__auto__))
);
}

return ret;
} else {
return true;
}
});
cljs$core$async$put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$put_BANG___2.call(this,port,val);
case 3:
return cljs$core$async$put_BANG___3.call(this,port,val,fn1);
case 4:
return cljs$core$async$put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$put_BANG___2;
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$put_BANG___3;
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$put_BANG___4;
return cljs$core$async$put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4951__auto___14537 = n;
var x_14538 = (0);
while(true){
if((x_14538 < n__4951__auto___14537)){
(a[x_14538] = (0));

var G__14539 = (x_14538 + (1));
x_14538 = G__14539;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__14540 = (i + (1));
i = G__14540;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t14544 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14544 = (function (flag,alt_flag,meta14545){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta14545 = meta14545;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14544.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t14544.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t14544.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t14544.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_14546){
var self__ = this;
var _14546__$1 = this;
return self__.meta14545;
});})(flag))
;

cljs.core.async.t14544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_14546,meta14545__$1){
var self__ = this;
var _14546__$1 = this;
return (new cljs.core.async.t14544(self__.flag,self__.alt_flag,meta14545__$1));
});})(flag))
;

cljs.core.async.t14544.cljs$lang$type = true;

cljs.core.async.t14544.cljs$lang$ctorStr = "cljs.core.async/t14544";

cljs.core.async.t14544.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4645__auto__,writer__4646__auto__,opt__4647__auto__){
return cljs.core._write.call(null,writer__4646__auto__,"cljs.core.async/t14544");
});})(flag))
;

cljs.core.async.__GT_t14544 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t14544(flag__$1,alt_flag__$1,meta14545){
return (new cljs.core.async.t14544(flag__$1,alt_flag__$1,meta14545));
});})(flag))
;

}

return (new cljs.core.async.t14544(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t14550 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14550 = (function (cb,flag,alt_handler,meta14551){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta14551 = meta14551;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14550.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t14550.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t14550.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t14550.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14552){
var self__ = this;
var _14552__$1 = this;
return self__.meta14551;
});

cljs.core.async.t14550.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14552,meta14551__$1){
var self__ = this;
var _14552__$1 = this;
return (new cljs.core.async.t14550(self__.cb,self__.flag,self__.alt_handler,meta14551__$1));
});

cljs.core.async.t14550.cljs$lang$type = true;

cljs.core.async.t14550.cljs$lang$ctorStr = "cljs.core.async/t14550";

cljs.core.async.t14550.cljs$lang$ctorPrWriter = (function (this__4645__auto__,writer__4646__auto__,opt__4647__auto__){
return cljs.core._write.call(null,writer__4646__auto__,"cljs.core.async/t14550");
});

cljs.core.async.__GT_t14550 = (function cljs$core$async$alt_handler_$___GT_t14550(cb__$1,flag__$1,alt_handler__$1,meta14551){
return (new cljs.core.async.t14550(cb__$1,flag__$1,alt_handler__$1,meta14551));
});

}

return (new cljs.core.async.t14550(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14553_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14553_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14554_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14554_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4066__auto__ = wport;
if(cljs.core.truth_(or__4066__auto__)){
return or__4066__auto__;
} else {
return port;
}
})()], null));
} else {
var G__14555 = (i + (1));
i = G__14555;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4066__auto__ = ret;
if(cljs.core.truth_(or__4066__auto__)){
return or__4066__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4406__auto__ = (function (){var and__4054__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4054__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4054__auto__;
}
})();
if(cljs.core.truth_(temp__4406__auto__)){
var got = temp__4406__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 * @param {...*} var_args
 */
cljs.core.async.alts_BANG_ = (function() { 
var cljs$core$async$alts_BANG___delegate = function (ports,p__14556){
var map__14558 = p__14556;
var map__14558__$1 = ((cljs.core.seq_QMARK_.call(null,map__14558))?cljs.core.apply.call(null,cljs.core.hash_map,map__14558):map__14558);
var opts = map__14558__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var cljs$core$async$alts_BANG_ = function (ports,var_args){
var p__14556 = null;
if (arguments.length > 1) {
var G__14559__i = 0, G__14559__a = new Array(arguments.length -  1);
while (G__14559__i < G__14559__a.length) {G__14559__a[G__14559__i] = arguments[G__14559__i + 1]; ++G__14559__i;}
  p__14556 = new cljs.core.IndexedSeq(G__14559__a,0);
} 
return cljs$core$async$alts_BANG___delegate.call(this,ports,p__14556);};
cljs$core$async$alts_BANG_.cljs$lang$maxFixedArity = 1;
cljs$core$async$alts_BANG_.cljs$lang$applyTo = (function (arglist__14560){
var ports = cljs.core.first(arglist__14560);
var p__14556 = cljs.core.rest(arglist__14560);
return cljs$core$async$alts_BANG___delegate(ports,p__14556);
});
cljs$core$async$alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$async$alts_BANG___delegate;
return cljs$core$async$alts_BANG_;
})()
;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function() {
var cljs$core$async$pipe = null;
var cljs$core$async$pipe__2 = (function (from,to){
return cljs$core$async$pipe.call(null,from,to,true);
});
var cljs$core$async$pipe__3 = (function (from,to,close_QMARK_){
var c__6351__auto___14655 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6351__auto___14655){
return (function (){
var f__6352__auto__ = (function (){var switch__6295__auto__ = ((function (c__6351__auto___14655){
return (function (state_14631){
var state_val_14632 = (state_14631[(1)]);
if((state_val_14632 === (7))){
var inst_14627 = (state_14631[(2)]);
var state_14631__$1 = state_14631;
var statearr_14633_14656 = state_14631__$1;
(statearr_14633_14656[(2)] = inst_14627);

(statearr_14633_14656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14632 === (1))){
var state_14631__$1 = state_14631;
var statearr_14634_14657 = state_14631__$1;
(statearr_14634_14657[(2)] = null);

(statearr_14634_14657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14632 === (4))){
var inst_14610 = (state_14631[(7)]);
var inst_14610__$1 = (state_14631[(2)]);
var inst_14611 = (inst_14610__$1 == null);
var state_14631__$1 = (function (){var statearr_14635 = state_14631;
(statearr_14635[(7)] = inst_14610__$1);

return statearr_14635;
})();
if(cljs.core.truth_(inst_14611)){
var statearr_14636_14658 = state_14631__$1;
(statearr_14636_14658[(1)] = (5));

} else {
var statearr_14637_14659 = state_14631__$1;
(statearr_14637_14659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14632 === (13))){
var state_14631__$1 = state_14631;
var statearr_14638_14660 = state_14631__$1;
(statearr_14638_14660[(2)] = null);

(statearr_14638_14660[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14632 === (6))){
var inst_14610 = (state_14631[(7)]);
var state_14631__$1 = state_14631;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14631__$1,(11),to,inst_14610);
} else {
if((state_val_14632 === (3))){
var inst_14629 = (state_14631[(2)]);
var state_14631__$1 = state_14631;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14631__$1,inst_14629);
} else {
if((state_val_14632 === (12))){
var state_14631__$1 = state_14631;
var statearr_14639_14661 = state_14631__$1;
(statearr_14639_14661[(2)] = null);

(statearr_14639_14661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14632 === (2))){
var state_14631__$1 = state_14631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14631__$1,(4),from);
} else {
if((state_val_14632 === (11))){
var inst_14620 = (state_14631[(2)]);
var state_14631__$1 = state_14631;
if(cljs.core.truth_(inst_14620)){
var statearr_14640_14662 = state_14631__$1;
(statearr_14640_14662[(1)] = (12));

} else {
var statearr_14641_14663 = state_14631__$1;
(statearr_14641_14663[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14632 === (9))){
var state_14631__$1 = state_14631;
var statearr_14642_14664 = state_14631__$1;
(statearr_14642_14664[(2)] = null);

(statearr_14642_14664[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14632 === (5))){
var state_14631__$1 = state_14631;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14643_14665 = state_14631__$1;
(statearr_14643_14665[(1)] = (8));

} else {
var statearr_14644_14666 = state_14631__$1;
(statearr_14644_14666[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14632 === (14))){
var inst_14625 = (state_14631[(2)]);
var state_14631__$1 = state_14631;
var statearr_14645_14667 = state_14631__$1;
(statearr_14645_14667[(2)] = inst_14625);

(statearr_14645_14667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14632 === (10))){
var inst_14617 = (state_14631[(2)]);
var state_14631__$1 = state_14631;
var statearr_14646_14668 = state_14631__$1;
(statearr_14646_14668[(2)] = inst_14617);

(statearr_14646_14668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14632 === (8))){
var inst_14614 = cljs.core.async.close_BANG_.call(null,to);
var state_14631__$1 = state_14631;
var statearr_14647_14669 = state_14631__$1;
(statearr_14647_14669[(2)] = inst_14614);

(statearr_14647_14669[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6351__auto___14655))
;
return ((function (switch__6295__auto__,c__6351__auto___14655){
return (function() {
var cljs$core$async$pipe_$_state_machine__6296__auto__ = null;
var cljs$core$async$pipe_$_state_machine__6296__auto____0 = (function (){
var statearr_14651 = [null,null,null,null,null,null,null,null];
(statearr_14651[(0)] = cljs$core$async$pipe_$_state_machine__6296__auto__);

(statearr_14651[(1)] = (1));

return statearr_14651;
});
var cljs$core$async$pipe_$_state_machine__6296__auto____1 = (function (state_14631){
while(true){
var ret_value__6297__auto__ = (function (){try{while(true){
var result__6298__auto__ = switch__6295__auto__.call(null,state_14631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6298__auto__;
}
break;
}
}catch (e14652){if((e14652 instanceof Object)){
var ex__6299__auto__ = e14652;
var statearr_14653_14670 = state_14631;
(statearr_14653_14670[(5)] = ex__6299__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14671 = state_14631;
state_14631 = G__14671;
continue;
} else {
return ret_value__6297__auto__;
}
break;
}
});
cljs$core$async$pipe_$_state_machine__6296__auto__ = function(state_14631){
switch(arguments.length){
case 0:
return cljs$core$async$pipe_$_state_machine__6296__auto____0.call(this);
case 1:
return cljs$core$async$pipe_$_state_machine__6296__auto____1.call(this,state_14631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe_$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipe_$_state_machine__6296__auto____0;
cljs$core$async$pipe_$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipe_$_state_machine__6296__auto____1;
return cljs$core$async$pipe_$_state_machine__6296__auto__;
})()
;})(switch__6295__auto__,c__6351__auto___14655))
})();
var state__6353__auto__ = (function (){var statearr_14654 = f__6352__auto__.call(null);
(statearr_14654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6351__auto___14655);

return statearr_14654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6353__auto__);
});})(c__6351__auto___14655))
);


return to;
});
cljs$core$async$pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$pipe__2.call(this,from,to);
case 3:
return cljs$core$async$pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$pipe__2;
cljs$core$async$pipe.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$pipe__3;
return cljs$core$async$pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__14855){
var vec__14856 = p__14855;
var v = cljs.core.nth.call(null,vec__14856,(0),null);
var p = cljs.core.nth.call(null,vec__14856,(1),null);
var job = vec__14856;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6351__auto___15038 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6351__auto___15038,res,vec__14856,v,p,job,jobs,results){
return (function (){
var f__6352__auto__ = (function (){var switch__6295__auto__ = ((function (c__6351__auto___15038,res,vec__14856,v,p,job,jobs,results){
return (function (state_14861){
var state_val_14862 = (state_14861[(1)]);
if((state_val_14862 === (2))){
var inst_14858 = (state_14861[(2)]);
var inst_14859 = cljs.core.async.close_BANG_.call(null,res);
var state_14861__$1 = (function (){var statearr_14863 = state_14861;
(statearr_14863[(7)] = inst_14858);

return statearr_14863;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14861__$1,inst_14859);
} else {
if((state_val_14862 === (1))){
var state_14861__$1 = state_14861;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14861__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6351__auto___15038,res,vec__14856,v,p,job,jobs,results))
;
return ((function (switch__6295__auto__,c__6351__auto___15038,res,vec__14856,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6296__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6296__auto____0 = (function (){
var statearr_14867 = [null,null,null,null,null,null,null,null];
(statearr_14867[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6296__auto__);

(statearr_14867[(1)] = (1));

return statearr_14867;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6296__auto____1 = (function (state_14861){
while(true){
var ret_value__6297__auto__ = (function (){try{while(true){
var result__6298__auto__ = switch__6295__auto__.call(null,state_14861);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6298__auto__;
}
break;
}
}catch (e14868){if((e14868 instanceof Object)){
var ex__6299__auto__ = e14868;
var statearr_14869_15039 = state_14861;
(statearr_14869_15039[(5)] = ex__6299__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15040 = state_14861;
state_14861 = G__15040;
continue;
} else {
return ret_value__6297__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6296__auto__ = function(state_14861){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6296__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6296__auto____1.call(this,state_14861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6296__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6296__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6296__auto__;
})()
;})(switch__6295__auto__,c__6351__auto___15038,res,vec__14856,v,p,job,jobs,results))
})();
var state__6353__auto__ = (function (){var statearr_14870 = f__6352__auto__.call(null);
(statearr_14870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6351__auto___15038);

return statearr_14870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6353__auto__);
});})(c__6351__auto___15038,res,vec__14856,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__14871){
var vec__14872 = p__14871;
var v = cljs.core.nth.call(null,vec__14872,(0),null);
var p = cljs.core.nth.call(null,vec__14872,(1),null);
var job = vec__14872;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4951__auto___15041 = n;
var __15042 = (0);
while(true){
if((__15042 < n__4951__auto___15041)){
var G__14873_15043 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__14873_15043) {
case "async":
var c__6351__auto___15045 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15042,c__6351__auto___15045,G__14873_15043,n__4951__auto___15041,jobs,results,process,async){
return (function (){
var f__6352__auto__ = (function (){var switch__6295__auto__ = ((function (__15042,c__6351__auto___15045,G__14873_15043,n__4951__auto___15041,jobs,results,process,async){
return (function (state_14886){
var state_val_14887 = (state_14886[(1)]);
if((state_val_14887 === (7))){
var inst_14882 = (state_14886[(2)]);
var state_14886__$1 = state_14886;
var statearr_14888_15046 = state_14886__$1;
(statearr_14888_15046[(2)] = inst_14882);

(statearr_14888_15046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14887 === (6))){
var state_14886__$1 = state_14886;
var statearr_14889_15047 = state_14886__$1;
(statearr_14889_15047[(2)] = null);

(statearr_14889_15047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14887 === (5))){
var state_14886__$1 = state_14886;
var statearr_14890_15048 = state_14886__$1;
(statearr_14890_15048[(2)] = null);

(statearr_14890_15048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14887 === (4))){
var inst_14876 = (state_14886[(2)]);
var inst_14877 = async.call(null,inst_14876);
var state_14886__$1 = state_14886;
if(cljs.core.truth_(inst_14877)){
var statearr_14891_15049 = state_14886__$1;
(statearr_14891_15049[(1)] = (5));

} else {
var statearr_14892_15050 = state_14886__$1;
(statearr_14892_15050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14887 === (3))){
var inst_14884 = (state_14886[(2)]);
var state_14886__$1 = state_14886;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14886__$1,inst_14884);
} else {
if((state_val_14887 === (2))){
var state_14886__$1 = state_14886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14886__$1,(4),jobs);
} else {
if((state_val_14887 === (1))){
var state_14886__$1 = state_14886;
var statearr_14893_15051 = state_14886__$1;
(statearr_14893_15051[(2)] = null);

(statearr_14893_15051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__15042,c__6351__auto___15045,G__14873_15043,n__4951__auto___15041,jobs,results,process,async))
;
return ((function (__15042,switch__6295__auto__,c__6351__auto___15045,G__14873_15043,n__4951__auto___15041,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6296__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6296__auto____0 = (function (){
var statearr_14897 = [null,null,null,null,null,null,null];
(statearr_14897[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6296__auto__);

(statearr_14897[(1)] = (1));

return statearr_14897;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6296__auto____1 = (function (state_14886){
while(true){
var ret_value__6297__auto__ = (function (){try{while(true){
var result__6298__auto__ = switch__6295__auto__.call(null,state_14886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6298__auto__;
}
break;
}
}catch (e14898){if((e14898 instanceof Object)){
var ex__6299__auto__ = e14898;
var statearr_14899_15052 = state_14886;
(statearr_14899_15052[(5)] = ex__6299__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15053 = state_14886;
state_14886 = G__15053;
continue;
} else {
return ret_value__6297__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6296__auto__ = function(state_14886){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6296__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6296__auto____1.call(this,state_14886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6296__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6296__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6296__auto__;
})()
;})(__15042,switch__6295__auto__,c__6351__auto___15045,G__14873_15043,n__4951__auto___15041,jobs,results,process,async))
})();
var state__6353__auto__ = (function (){var statearr_14900 = f__6352__auto__.call(null);
(statearr_14900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6351__auto___15045);

return statearr_14900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6353__auto__);
});})(__15042,c__6351__auto___15045,G__14873_15043,n__4951__auto___15041,jobs,results,process,async))
);


break;
case "compute":
var c__6351__auto___15054 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15042,c__6351__auto___15054,G__14873_15043,n__4951__auto___15041,jobs,results,process,async){
return (function (){
var f__6352__auto__ = (function (){var switch__6295__auto__ = ((function (__15042,c__6351__auto___15054,G__14873_15043,n__4951__auto___15041,jobs,results,process,async){
return (function (state_14913){
var state_val_14914 = (state_14913[(1)]);
if((state_val_14914 === (7))){
var inst_14909 = (state_14913[(2)]);
var state_14913__$1 = state_14913;
var statearr_14915_15055 = state_14913__$1;
(statearr_14915_15055[(2)] = inst_14909);

(statearr_14915_15055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14914 === (6))){
var state_14913__$1 = state_14913;
var statearr_14916_15056 = state_14913__$1;
(statearr_14916_15056[(2)] = null);

(statearr_14916_15056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14914 === (5))){
var state_14913__$1 = state_14913;
var statearr_14917_15057 = state_14913__$1;
(statearr_14917_15057[(2)] = null);

(statearr_14917_15057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14914 === (4))){
var inst_14903 = (state_14913[(2)]);
var inst_14904 = process.call(null,inst_14903);
var state_14913__$1 = state_14913;
if(cljs.core.truth_(inst_14904)){
var statearr_14918_15058 = state_14913__$1;
(statearr_14918_15058[(1)] = (5));

} else {
var statearr_14919_15059 = state_14913__$1;
(statearr_14919_15059[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14914 === (3))){
var inst_14911 = (state_14913[(2)]);
var state_14913__$1 = state_14913;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14913__$1,inst_14911);
} else {
if((state_val_14914 === (2))){
var state_14913__$1 = state_14913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14913__$1,(4),jobs);
} else {
if((state_val_14914 === (1))){
var state_14913__$1 = state_14913;
var statearr_14920_15060 = state_14913__$1;
(statearr_14920_15060[(2)] = null);

(statearr_14920_15060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__15042,c__6351__auto___15054,G__14873_15043,n__4951__auto___15041,jobs,results,process,async))
;
return ((function (__15042,switch__6295__auto__,c__6351__auto___15054,G__14873_15043,n__4951__auto___15041,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6296__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6296__auto____0 = (function (){
var statearr_14924 = [null,null,null,null,null,null,null];
(statearr_14924[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6296__auto__);

(statearr_14924[(1)] = (1));

return statearr_14924;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6296__auto____1 = (function (state_14913){
while(true){
var ret_value__6297__auto__ = (function (){try{while(true){
var result__6298__auto__ = switch__6295__auto__.call(null,state_14913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6298__auto__;
}
break;
}
}catch (e14925){if((e14925 instanceof Object)){
var ex__6299__auto__ = e14925;
var statearr_14926_15061 = state_14913;
(statearr_14926_15061[(5)] = ex__6299__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15062 = state_14913;
state_14913 = G__15062;
continue;
} else {
return ret_value__6297__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6296__auto__ = function(state_14913){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6296__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6296__auto____1.call(this,state_14913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6296__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6296__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6296__auto__;
})()
;})(__15042,switch__6295__auto__,c__6351__auto___15054,G__14873_15043,n__4951__auto___15041,jobs,results,process,async))
})();
var state__6353__auto__ = (function (){var statearr_14927 = f__6352__auto__.call(null);
(statearr_14927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6351__auto___15054);

return statearr_14927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6353__auto__);
});})(__15042,c__6351__auto___15054,G__14873_15043,n__4951__auto___15041,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__15063 = (__15042 + (1));
__15042 = G__15063;
continue;
} else {
}
break;
}

var c__6351__auto___15064 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6351__auto___15064,jobs,results,process,async){
return (function (){
var f__6352__auto__ = (function (){var switch__6295__auto__ = ((function (c__6351__auto___15064,jobs,results,process,async){
return (function (state_14949){
var state_val_14950 = (state_14949[(1)]);
if((state_val_14950 === (9))){
var inst_14942 = (state_14949[(2)]);
var state_14949__$1 = (function (){var statearr_14951 = state_14949;
(statearr_14951[(7)] = inst_14942);

return statearr_14951;
})();
var statearr_14952_15065 = state_14949__$1;
(statearr_14952_15065[(2)] = null);

(statearr_14952_15065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14950 === (8))){
var inst_14935 = (state_14949[(8)]);
var inst_14940 = (state_14949[(2)]);
var state_14949__$1 = (function (){var statearr_14953 = state_14949;
(statearr_14953[(9)] = inst_14940);

return statearr_14953;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14949__$1,(9),results,inst_14935);
} else {
if((state_val_14950 === (7))){
var inst_14945 = (state_14949[(2)]);
var state_14949__$1 = state_14949;
var statearr_14954_15066 = state_14949__$1;
(statearr_14954_15066[(2)] = inst_14945);

(statearr_14954_15066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14950 === (6))){
var inst_14935 = (state_14949[(8)]);
var inst_14930 = (state_14949[(10)]);
var inst_14935__$1 = cljs.core.async.chan.call(null,(1));
var inst_14936 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14937 = [inst_14930,inst_14935__$1];
var inst_14938 = (new cljs.core.PersistentVector(null,2,(5),inst_14936,inst_14937,null));
var state_14949__$1 = (function (){var statearr_14955 = state_14949;
(statearr_14955[(8)] = inst_14935__$1);

return statearr_14955;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14949__$1,(8),jobs,inst_14938);
} else {
if((state_val_14950 === (5))){
var inst_14933 = cljs.core.async.close_BANG_.call(null,jobs);
var state_14949__$1 = state_14949;
var statearr_14956_15067 = state_14949__$1;
(statearr_14956_15067[(2)] = inst_14933);

(statearr_14956_15067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14950 === (4))){
var inst_14930 = (state_14949[(10)]);
var inst_14930__$1 = (state_14949[(2)]);
var inst_14931 = (inst_14930__$1 == null);
var state_14949__$1 = (function (){var statearr_14957 = state_14949;
(statearr_14957[(10)] = inst_14930__$1);

return statearr_14957;
})();
if(cljs.core.truth_(inst_14931)){
var statearr_14958_15068 = state_14949__$1;
(statearr_14958_15068[(1)] = (5));

} else {
var statearr_14959_15069 = state_14949__$1;
(statearr_14959_15069[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14950 === (3))){
var inst_14947 = (state_14949[(2)]);
var state_14949__$1 = state_14949;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14949__$1,inst_14947);
} else {
if((state_val_14950 === (2))){
var state_14949__$1 = state_14949;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14949__$1,(4),from);
} else {
if((state_val_14950 === (1))){
var state_14949__$1 = state_14949;
var statearr_14960_15070 = state_14949__$1;
(statearr_14960_15070[(2)] = null);

(statearr_14960_15070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__6351__auto___15064,jobs,results,process,async))
;
return ((function (switch__6295__auto__,c__6351__auto___15064,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6296__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6296__auto____0 = (function (){
var statearr_14964 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14964[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6296__auto__);

(statearr_14964[(1)] = (1));

return statearr_14964;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6296__auto____1 = (function (state_14949){
while(true){
var ret_value__6297__auto__ = (function (){try{while(true){
var result__6298__auto__ = switch__6295__auto__.call(null,state_14949);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6298__auto__;
}
break;
}
}catch (e14965){if((e14965 instanceof Object)){
var ex__6299__auto__ = e14965;
var statearr_14966_15071 = state_14949;
(statearr_14966_15071[(5)] = ex__6299__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15072 = state_14949;
state_14949 = G__15072;
continue;
} else {
return ret_value__6297__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6296__auto__ = function(state_14949){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6296__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6296__auto____1.call(this,state_14949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6296__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6296__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6296__auto__;
})()
;})(switch__6295__auto__,c__6351__auto___15064,jobs,results,process,async))
})();
var state__6353__auto__ = (function (){var statearr_14967 = f__6352__auto__.call(null);
(statearr_14967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6351__auto___15064);

return statearr_14967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6353__auto__);
});})(c__6351__auto___15064,jobs,results,process,async))
);


var c__6351__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6351__auto__,jobs,results,process,async){
return (function (){
var f__6352__auto__ = (function (){var switch__6295__auto__ = ((function (c__6351__auto__,jobs,results,process,async){
return (function (state_15005){
var state_val_15006 = (state_15005[(1)]);
if((state_val_15006 === (7))){
var inst_15001 = (state_15005[(2)]);
var state_15005__$1 = state_15005;
var statearr_15007_15073 = state_15005__$1;
(statearr_15007_15073[(2)] = inst_15001);

(statearr_15007_15073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15006 === (20))){
var state_15005__$1 = state_15005;
var statearr_15008_15074 = state_15005__$1;
(statearr_15008_15074[(2)] = null);

(statearr_15008_15074[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15006 === (1))){
var state_15005__$1 = state_15005;
var statearr_15009_15075 = state_15005__$1;
(statearr_15009_15075[(2)] = null);

(statearr_15009_15075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15006 === (4))){
var inst_14970 = (state_15005[(7)]);
var inst_14970__$1 = (state_15005[(2)]);
var inst_14971 = (inst_14970__$1 == null);
var state_15005__$1 = (function (){var statearr_15010 = state_15005;
(statearr_15010[(7)] = inst_14970__$1);

return statearr_15010;
})();
if(cljs.core.truth_(inst_14971)){
var statearr_15011_15076 = state_15005__$1;
(statearr_15011_15076[(1)] = (5));

} else {
var statearr_15012_15077 = state_15005__$1;
(statearr_15012_15077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15006 === (15))){
var inst_14983 = (state_15005[(8)]);
var state_15005__$1 = state_15005;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15005__$1,(18),to,inst_14983);
} else {
if((state_val_15006 === (21))){
var inst_14996 = (state_15005[(2)]);
var state_15005__$1 = state_15005;
var statearr_15013_15078 = state_15005__$1;
(statearr_15013_15078[(2)] = inst_14996);

(statearr_15013_15078[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15006 === (13))){
var inst_14998 = (state_15005[(2)]);
var state_15005__$1 = (function (){var statearr_15014 = state_15005;
(statearr_15014[(9)] = inst_14998);

return statearr_15014;
})();
var statearr_15015_15079 = state_15005__$1;
(statearr_15015_15079[(2)] = null);

(statearr_15015_15079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15006 === (6))){
var inst_14970 = (state_15005[(7)]);
var state_15005__$1 = state_15005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15005__$1,(11),inst_14970);
} else {
if((state_val_15006 === (17))){
var inst_14991 = (state_15005[(2)]);
var state_15005__$1 = state_15005;
if(cljs.core.truth_(inst_14991)){
var statearr_15016_15080 = state_15005__$1;
(statearr_15016_15080[(1)] = (19));

} else {
var statearr_15017_15081 = state_15005__$1;
(statearr_15017_15081[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15006 === (3))){
var inst_15003 = (state_15005[(2)]);
var state_15005__$1 = state_15005;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15005__$1,inst_15003);
} else {
if((state_val_15006 === (12))){
var inst_14980 = (state_15005[(10)]);
var state_15005__$1 = state_15005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15005__$1,(14),inst_14980);
} else {
if((state_val_15006 === (2))){
var state_15005__$1 = state_15005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15005__$1,(4),results);
} else {
if((state_val_15006 === (19))){
var state_15005__$1 = state_15005;
var statearr_15018_15082 = state_15005__$1;
(statearr_15018_15082[(2)] = null);

(statearr_15018_15082[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15006 === (11))){
var inst_14980 = (state_15005[(2)]);
var state_15005__$1 = (function (){var statearr_15019 = state_15005;
(statearr_15019[(10)] = inst_14980);

return statearr_15019;
})();
var statearr_15020_15083 = state_15005__$1;
(statearr_15020_15083[(2)] = null);

(statearr_15020_15083[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15006 === (9))){
var state_15005__$1 = state_15005;
var statearr_15021_15084 = state_15005__$1;
(statearr_15021_15084[(2)] = null);

(statearr_15021_15084[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15006 === (5))){
var state_15005__$1 = state_15005;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15022_15085 = state_15005__$1;
(statearr_15022_15085[(1)] = (8));

} else {
var statearr_15023_15086 = state_15005__$1;
(statearr_15023_15086[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15006 === (14))){
var inst_14983 = (state_15005[(8)]);
var inst_14985 = (state_15005[(11)]);
var inst_14983__$1 = (state_15005[(2)]);
var inst_14984 = (inst_14983__$1 == null);
var inst_14985__$1 = cljs.core.not.call(null,inst_14984);
var state_15005__$1 = (function (){var statearr_15024 = state_15005;
(statearr_15024[(8)] = inst_14983__$1);

(statearr_15024[(11)] = inst_14985__$1);

return statearr_15024;
})();
if(inst_14985__$1){
var statearr_15025_15087 = state_15005__$1;
(statearr_15025_15087[(1)] = (15));

} else {
var statearr_15026_15088 = state_15005__$1;
(statearr_15026_15088[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15006 === (16))){
var inst_14985 = (state_15005[(11)]);
var state_15005__$1 = state_15005;
var statearr_15027_15089 = state_15005__$1;
(statearr_15027_15089[(2)] = inst_14985);

(statearr_15027_15089[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15006 === (10))){
var inst_14977 = (state_15005[(2)]);
var state_15005__$1 = state_15005;
var statearr_15028_15090 = state_15005__$1;
(statearr_15028_15090[(2)] = inst_14977);

(statearr_15028_15090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15006 === (18))){
var inst_14988 = (state_15005[(2)]);
var state_15005__$1 = state_15005;
var statearr_15029_15091 = state_15005__$1;
(statearr_15029_15091[(2)] = inst_14988);

(statearr_15029_15091[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15006 === (8))){
var inst_14974 = cljs.core.async.close_BANG_.call(null,to);
var state_15005__$1 = state_15005;
var statearr_15030_15092 = state_15005__$1;
(statearr_15030_15092[(2)] = inst_14974);

(statearr_15030_15092[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6351__auto__,jobs,results,process,async))
;
return ((function (switch__6295__auto__,c__6351__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6296__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6296__auto____0 = (function (){
var statearr_15034 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15034[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6296__auto__);

(statearr_15034[(1)] = (1));

return statearr_15034;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6296__auto____1 = (function (state_15005){
while(true){
var ret_value__6297__auto__ = (function (){try{while(true){
var result__6298__auto__ = switch__6295__auto__.call(null,state_15005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6298__auto__;
}
break;
}
}catch (e15035){if((e15035 instanceof Object)){
var ex__6299__auto__ = e15035;
var statearr_15036_15093 = state_15005;
(statearr_15036_15093[(5)] = ex__6299__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15094 = state_15005;
state_15005 = G__15094;
continue;
} else {
return ret_value__6297__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6296__auto__ = function(state_15005){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6296__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6296__auto____1.call(this,state_15005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6296__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6296__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6296__auto__;
})()
;})(switch__6295__auto__,c__6351__auto__,jobs,results,process,async))
})();
var state__6353__auto__ = (function (){var statearr_15037 = f__6352__auto__.call(null);
(statearr_15037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6351__auto__);

return statearr_15037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6353__auto__);
});})(c__6351__auto__,jobs,results,process,async))
);

return c__6351__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function() {
var cljs$core$async$pipeline_async = null;
var cljs$core$async$pipeline_async__4 = (function (n,to,af,from){
return cljs$core$async$pipeline_async.call(null,n,to,af,from,true);
});
var cljs$core$async$pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
cljs$core$async$pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return cljs$core$async$pipeline_async__4.call(this,n,to,af,from);
case 5:
return cljs$core$async$pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_async.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$pipeline_async__4;
cljs$core$async$pipeline_async.cljs$core$IFn$_invoke$arity$5 = cljs$core$async$pipeline_async__5;
return cljs$core$async$pipeline_async;
})()
;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function() {
var cljs$core$async$pipeline = null;
var cljs$core$async$pipeline__4 = (function (n,to,xf,from){
return cljs$core$async$pipeline.call(null,n,to,xf,from,true);
});
var cljs$core$async$pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return cljs$core$async$pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var cljs$core$async$pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
cljs$core$async$pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return cljs$core$async$pipeline__4.call(this,n,to,xf,from);
case 5:
return cljs$core$async$pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return cljs$core$async$pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$pipeline__4;
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$5 = cljs$core$async$pipeline__5;
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$6 = cljs$core$async$pipeline__6;
return cljs$core$async$pipeline;
})()
;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function() {
var cljs$core$async$split = null;
var cljs$core$async$split__2 = (function (p,ch){
return cljs$core$async$split.call(null,p,ch,null,null);
});
var cljs$core$async$split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__6351__auto___15195 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6351__auto___15195,tc,fc){
return (function (){
var f__6352__auto__ = (function (){var switch__6295__auto__ = ((function (c__6351__auto___15195,tc,fc){
return (function (state_15170){
var state_val_15171 = (state_15170[(1)]);
if((state_val_15171 === (7))){
var inst_15166 = (state_15170[(2)]);
var state_15170__$1 = state_15170;
var statearr_15172_15196 = state_15170__$1;
(statearr_15172_15196[(2)] = inst_15166);

(statearr_15172_15196[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15171 === (1))){
var state_15170__$1 = state_15170;
var statearr_15173_15197 = state_15170__$1;
(statearr_15173_15197[(2)] = null);

(statearr_15173_15197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15171 === (4))){
var inst_15147 = (state_15170[(7)]);
var inst_15147__$1 = (state_15170[(2)]);
var inst_15148 = (inst_15147__$1 == null);
var state_15170__$1 = (function (){var statearr_15174 = state_15170;
(statearr_15174[(7)] = inst_15147__$1);

return statearr_15174;
})();
if(cljs.core.truth_(inst_15148)){
var statearr_15175_15198 = state_15170__$1;
(statearr_15175_15198[(1)] = (5));

} else {
var statearr_15176_15199 = state_15170__$1;
(statearr_15176_15199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15171 === (13))){
var state_15170__$1 = state_15170;
var statearr_15177_15200 = state_15170__$1;
(statearr_15177_15200[(2)] = null);

(statearr_15177_15200[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15171 === (6))){
var inst_15147 = (state_15170[(7)]);
var inst_15153 = p.call(null,inst_15147);
var state_15170__$1 = state_15170;
if(cljs.core.truth_(inst_15153)){
var statearr_15178_15201 = state_15170__$1;
(statearr_15178_15201[(1)] = (9));

} else {
var statearr_15179_15202 = state_15170__$1;
(statearr_15179_15202[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15171 === (3))){
var inst_15168 = (state_15170[(2)]);
var state_15170__$1 = state_15170;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15170__$1,inst_15168);
} else {
if((state_val_15171 === (12))){
var state_15170__$1 = state_15170;
var statearr_15180_15203 = state_15170__$1;
(statearr_15180_15203[(2)] = null);

(statearr_15180_15203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15171 === (2))){
var state_15170__$1 = state_15170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15170__$1,(4),ch);
} else {
if((state_val_15171 === (11))){
var inst_15147 = (state_15170[(7)]);
var inst_15157 = (state_15170[(2)]);
var state_15170__$1 = state_15170;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15170__$1,(8),inst_15157,inst_15147);
} else {
if((state_val_15171 === (9))){
var state_15170__$1 = state_15170;
var statearr_15181_15204 = state_15170__$1;
(statearr_15181_15204[(2)] = tc);

(statearr_15181_15204[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15171 === (5))){
var inst_15150 = cljs.core.async.close_BANG_.call(null,tc);
var inst_15151 = cljs.core.async.close_BANG_.call(null,fc);
var state_15170__$1 = (function (){var statearr_15182 = state_15170;
(statearr_15182[(8)] = inst_15150);

return statearr_15182;
})();
var statearr_15183_15205 = state_15170__$1;
(statearr_15183_15205[(2)] = inst_15151);

(statearr_15183_15205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15171 === (14))){
var inst_15164 = (state_15170[(2)]);
var state_15170__$1 = state_15170;
var statearr_15184_15206 = state_15170__$1;
(statearr_15184_15206[(2)] = inst_15164);

(statearr_15184_15206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15171 === (10))){
var state_15170__$1 = state_15170;
var statearr_15185_15207 = state_15170__$1;
(statearr_15185_15207[(2)] = fc);

(statearr_15185_15207[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15171 === (8))){
var inst_15159 = (state_15170[(2)]);
var state_15170__$1 = state_15170;
if(cljs.core.truth_(inst_15159)){
var statearr_15186_15208 = state_15170__$1;
(statearr_15186_15208[(1)] = (12));

} else {
var statearr_15187_15209 = state_15170__$1;
(statearr_15187_15209[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6351__auto___15195,tc,fc))
;
return ((function (switch__6295__auto__,c__6351__auto___15195,tc,fc){
return (function() {
var cljs$core$async$split_$_state_machine__6296__auto__ = null;
var cljs$core$async$split_$_state_machine__6296__auto____0 = (function (){
var statearr_15191 = [null,null,null,null,null,null,null,null,null];
(statearr_15191[(0)] = cljs$core$async$split_$_state_machine__6296__auto__);

(statearr_15191[(1)] = (1));

return statearr_15191;
});
var cljs$core$async$split_$_state_machine__6296__auto____1 = (function (state_15170){
while(true){
var ret_value__6297__auto__ = (function (){try{while(true){
var result__6298__auto__ = switch__6295__auto__.call(null,state_15170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6298__auto__;
}
break;
}
}catch (e15192){if((e15192 instanceof Object)){
var ex__6299__auto__ = e15192;
var statearr_15193_15210 = state_15170;
(statearr_15193_15210[(5)] = ex__6299__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15192;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15211 = state_15170;
state_15170 = G__15211;
continue;
} else {
return ret_value__6297__auto__;
}
break;
}
});
cljs$core$async$split_$_state_machine__6296__auto__ = function(state_15170){
switch(arguments.length){
case 0:
return cljs$core$async$split_$_state_machine__6296__auto____0.call(this);
case 1:
return cljs$core$async$split_$_state_machine__6296__auto____1.call(this,state_15170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split_$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$split_$_state_machine__6296__auto____0;
cljs$core$async$split_$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$split_$_state_machine__6296__auto____1;
return cljs$core$async$split_$_state_machine__6296__auto__;
})()
;})(switch__6295__auto__,c__6351__auto___15195,tc,fc))
})();
var state__6353__auto__ = (function (){var statearr_15194 = f__6352__auto__.call(null);
(statearr_15194[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6351__auto___15195);

return statearr_15194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6353__auto__);
});})(c__6351__auto___15195,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
cljs$core$async$split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$split__2.call(this,p,ch);
case 4:
return cljs$core$async$split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$split__2;
cljs$core$async$split.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$split__4;
return cljs$core$async$split;
})()
;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__6351__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6351__auto__){
return (function (){
var f__6352__auto__ = (function (){var switch__6295__auto__ = ((function (c__6351__auto__){
return (function (state_15258){
var state_val_15259 = (state_15258[(1)]);
if((state_val_15259 === (7))){
var inst_15254 = (state_15258[(2)]);
var state_15258__$1 = state_15258;
var statearr_15260_15276 = state_15258__$1;
(statearr_15260_15276[(2)] = inst_15254);

(statearr_15260_15276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15259 === (6))){
var inst_15244 = (state_15258[(7)]);
var inst_15247 = (state_15258[(8)]);
var inst_15251 = f.call(null,inst_15244,inst_15247);
var inst_15244__$1 = inst_15251;
var state_15258__$1 = (function (){var statearr_15261 = state_15258;
(statearr_15261[(7)] = inst_15244__$1);

return statearr_15261;
})();
var statearr_15262_15277 = state_15258__$1;
(statearr_15262_15277[(2)] = null);

(statearr_15262_15277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15259 === (5))){
var inst_15244 = (state_15258[(7)]);
var state_15258__$1 = state_15258;
var statearr_15263_15278 = state_15258__$1;
(statearr_15263_15278[(2)] = inst_15244);

(statearr_15263_15278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15259 === (4))){
var inst_15247 = (state_15258[(8)]);
var inst_15247__$1 = (state_15258[(2)]);
var inst_15248 = (inst_15247__$1 == null);
var state_15258__$1 = (function (){var statearr_15264 = state_15258;
(statearr_15264[(8)] = inst_15247__$1);

return statearr_15264;
})();
if(cljs.core.truth_(inst_15248)){
var statearr_15265_15279 = state_15258__$1;
(statearr_15265_15279[(1)] = (5));

} else {
var statearr_15266_15280 = state_15258__$1;
(statearr_15266_15280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15259 === (3))){
var inst_15256 = (state_15258[(2)]);
var state_15258__$1 = state_15258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15258__$1,inst_15256);
} else {
if((state_val_15259 === (2))){
var state_15258__$1 = state_15258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15258__$1,(4),ch);
} else {
if((state_val_15259 === (1))){
var inst_15244 = init;
var state_15258__$1 = (function (){var statearr_15267 = state_15258;
(statearr_15267[(7)] = inst_15244);

return statearr_15267;
})();
var statearr_15268_15281 = state_15258__$1;
(statearr_15268_15281[(2)] = null);

(statearr_15268_15281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__6351__auto__))
;
return ((function (switch__6295__auto__,c__6351__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__6296__auto__ = null;
var cljs$core$async$reduce_$_state_machine__6296__auto____0 = (function (){
var statearr_15272 = [null,null,null,null,null,null,null,null,null];
(statearr_15272[(0)] = cljs$core$async$reduce_$_state_machine__6296__auto__);

(statearr_15272[(1)] = (1));

return statearr_15272;
});
var cljs$core$async$reduce_$_state_machine__6296__auto____1 = (function (state_15258){
while(true){
var ret_value__6297__auto__ = (function (){try{while(true){
var result__6298__auto__ = switch__6295__auto__.call(null,state_15258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6298__auto__;
}
break;
}
}catch (e15273){if((e15273 instanceof Object)){
var ex__6299__auto__ = e15273;
var statearr_15274_15282 = state_15258;
(statearr_15274_15282[(5)] = ex__6299__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15273;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15283 = state_15258;
state_15258 = G__15283;
continue;
} else {
return ret_value__6297__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__6296__auto__ = function(state_15258){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__6296__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__6296__auto____1.call(this,state_15258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__6296__auto____0;
cljs$core$async$reduce_$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__6296__auto____1;
return cljs$core$async$reduce_$_state_machine__6296__auto__;
})()
;})(switch__6295__auto__,c__6351__auto__))
})();
var state__6353__auto__ = (function (){var statearr_15275 = f__6352__auto__.call(null);
(statearr_15275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6351__auto__);

return statearr_15275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6353__auto__);
});})(c__6351__auto__))
);

return c__6351__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function() {
var cljs$core$async$onto_chan = null;
var cljs$core$async$onto_chan__2 = (function (ch,coll){
return cljs$core$async$onto_chan.call(null,ch,coll,true);
});
var cljs$core$async$onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__6351__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6351__auto__){
return (function (){
var f__6352__auto__ = (function (){var switch__6295__auto__ = ((function (c__6351__auto__){
return (function (state_15357){
var state_val_15358 = (state_15357[(1)]);
if((state_val_15358 === (7))){
var inst_15339 = (state_15357[(2)]);
var state_15357__$1 = state_15357;
var statearr_15359_15382 = state_15357__$1;
(statearr_15359_15382[(2)] = inst_15339);

(statearr_15359_15382[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15358 === (1))){
var inst_15333 = cljs.core.seq.call(null,coll);
var inst_15334 = inst_15333;
var state_15357__$1 = (function (){var statearr_15360 = state_15357;
(statearr_15360[(7)] = inst_15334);

return statearr_15360;
})();
var statearr_15361_15383 = state_15357__$1;
(statearr_15361_15383[(2)] = null);

(statearr_15361_15383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15358 === (4))){
var inst_15334 = (state_15357[(7)]);
var inst_15337 = cljs.core.first.call(null,inst_15334);
var state_15357__$1 = state_15357;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15357__$1,(7),ch,inst_15337);
} else {
if((state_val_15358 === (13))){
var inst_15351 = (state_15357[(2)]);
var state_15357__$1 = state_15357;
var statearr_15362_15384 = state_15357__$1;
(statearr_15362_15384[(2)] = inst_15351);

(statearr_15362_15384[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15358 === (6))){
var inst_15342 = (state_15357[(2)]);
var state_15357__$1 = state_15357;
if(cljs.core.truth_(inst_15342)){
var statearr_15363_15385 = state_15357__$1;
(statearr_15363_15385[(1)] = (8));

} else {
var statearr_15364_15386 = state_15357__$1;
(statearr_15364_15386[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15358 === (3))){
var inst_15355 = (state_15357[(2)]);
var state_15357__$1 = state_15357;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15357__$1,inst_15355);
} else {
if((state_val_15358 === (12))){
var state_15357__$1 = state_15357;
var statearr_15365_15387 = state_15357__$1;
(statearr_15365_15387[(2)] = null);

(statearr_15365_15387[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15358 === (2))){
var inst_15334 = (state_15357[(7)]);
var state_15357__$1 = state_15357;
if(cljs.core.truth_(inst_15334)){
var statearr_15366_15388 = state_15357__$1;
(statearr_15366_15388[(1)] = (4));

} else {
var statearr_15367_15389 = state_15357__$1;
(statearr_15367_15389[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15358 === (11))){
var inst_15348 = cljs.core.async.close_BANG_.call(null,ch);
var state_15357__$1 = state_15357;
var statearr_15368_15390 = state_15357__$1;
(statearr_15368_15390[(2)] = inst_15348);

(statearr_15368_15390[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15358 === (9))){
var state_15357__$1 = state_15357;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15369_15391 = state_15357__$1;
(statearr_15369_15391[(1)] = (11));

} else {
var statearr_15370_15392 = state_15357__$1;
(statearr_15370_15392[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15358 === (5))){
var inst_15334 = (state_15357[(7)]);
var state_15357__$1 = state_15357;
var statearr_15371_15393 = state_15357__$1;
(statearr_15371_15393[(2)] = inst_15334);

(statearr_15371_15393[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15358 === (10))){
var inst_15353 = (state_15357[(2)]);
var state_15357__$1 = state_15357;
var statearr_15372_15394 = state_15357__$1;
(statearr_15372_15394[(2)] = inst_15353);

(statearr_15372_15394[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15358 === (8))){
var inst_15334 = (state_15357[(7)]);
var inst_15344 = cljs.core.next.call(null,inst_15334);
var inst_15334__$1 = inst_15344;
var state_15357__$1 = (function (){var statearr_15373 = state_15357;
(statearr_15373[(7)] = inst_15334__$1);

return statearr_15373;
})();
var statearr_15374_15395 = state_15357__$1;
(statearr_15374_15395[(2)] = null);

(statearr_15374_15395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6351__auto__))
;
return ((function (switch__6295__auto__,c__6351__auto__){
return (function() {
var cljs$core$async$onto_chan_$_state_machine__6296__auto__ = null;
var cljs$core$async$onto_chan_$_state_machine__6296__auto____0 = (function (){
var statearr_15378 = [null,null,null,null,null,null,null,null];
(statearr_15378[(0)] = cljs$core$async$onto_chan_$_state_machine__6296__auto__);

(statearr_15378[(1)] = (1));

return statearr_15378;
});
var cljs$core$async$onto_chan_$_state_machine__6296__auto____1 = (function (state_15357){
while(true){
var ret_value__6297__auto__ = (function (){try{while(true){
var result__6298__auto__ = switch__6295__auto__.call(null,state_15357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6298__auto__;
}
break;
}
}catch (e15379){if((e15379 instanceof Object)){
var ex__6299__auto__ = e15379;
var statearr_15380_15396 = state_15357;
(statearr_15380_15396[(5)] = ex__6299__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15379;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15397 = state_15357;
state_15357 = G__15397;
continue;
} else {
return ret_value__6297__auto__;
}
break;
}
});
cljs$core$async$onto_chan_$_state_machine__6296__auto__ = function(state_15357){
switch(arguments.length){
case 0:
return cljs$core$async$onto_chan_$_state_machine__6296__auto____0.call(this);
case 1:
return cljs$core$async$onto_chan_$_state_machine__6296__auto____1.call(this,state_15357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan_$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$onto_chan_$_state_machine__6296__auto____0;
cljs$core$async$onto_chan_$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$onto_chan_$_state_machine__6296__auto____1;
return cljs$core$async$onto_chan_$_state_machine__6296__auto__;
})()
;})(switch__6295__auto__,c__6351__auto__))
})();
var state__6353__auto__ = (function (){var statearr_15381 = f__6352__auto__.call(null);
(statearr_15381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6351__auto__);

return statearr_15381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6353__auto__);
});})(c__6351__auto__))
);

return c__6351__auto__;
});
cljs$core$async$onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$onto_chan__2.call(this,ch,coll);
case 3:
return cljs$core$async$onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$onto_chan__2;
cljs$core$async$onto_chan.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$onto_chan__3;
return cljs$core$async$onto_chan;
})()
;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj15399 = {};
return obj15399;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__4054__auto__ = _;
if(and__4054__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__4054__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4702__auto__ = (((_ == null))?null:_);
return (function (){var or__4066__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4702__auto__)]);
if(or__4066__auto__){
return or__4066__auto__;
} else {
var or__4066__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__4066__auto____$1){
return or__4066__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj15401 = {};
return obj15401;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__4054__auto__ = m;
if(and__4054__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__4054__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4702__auto__ = (((m == null))?null:m);
return (function (){var or__4066__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4702__auto__)]);
if(or__4066__auto__){
return or__4066__auto__;
} else {
var or__4066__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__4066__auto____$1){
return or__4066__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__4054__auto__ = m;
if(and__4054__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__4054__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4702__auto__ = (((m == null))?null:m);
return (function (){var or__4066__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4702__auto__)]);
if(or__4066__auto__){
return or__4066__auto__;
} else {
var or__4066__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__4066__auto____$1){
return or__4066__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__4054__auto__ = m;
if(and__4054__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__4054__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4702__auto__ = (((m == null))?null:m);
return (function (){var or__4066__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4702__auto__)]);
if(or__4066__auto__){
return or__4066__auto__;
} else {
var or__4066__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__4066__auto____$1){
return or__4066__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t15623 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15623 = (function (cs,ch,mult,meta15624){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta15624 = meta15624;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15623.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t15623.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t15623.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t15623.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t15623.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t15623.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t15623.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15625){
var self__ = this;
var _15625__$1 = this;
return self__.meta15624;
});})(cs))
;

cljs.core.async.t15623.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15625,meta15624__$1){
var self__ = this;
var _15625__$1 = this;
return (new cljs.core.async.t15623(self__.cs,self__.ch,self__.mult,meta15624__$1));
});})(cs))
;

cljs.core.async.t15623.cljs$lang$type = true;

cljs.core.async.t15623.cljs$lang$ctorStr = "cljs.core.async/t15623";

cljs.core.async.t15623.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4645__auto__,writer__4646__auto__,opt__4647__auto__){
return cljs.core._write.call(null,writer__4646__auto__,"cljs.core.async/t15623");
});})(cs))
;

cljs.core.async.__GT_t15623 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t15623(cs__$1,ch__$1,mult__$1,meta15624){
return (new cljs.core.async.t15623(cs__$1,ch__$1,mult__$1,meta15624));
});})(cs))
;

}

return (new cljs.core.async.t15623(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__6351__auto___15844 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6351__auto___15844,cs,m,dchan,dctr,done){
return (function (){
var f__6352__auto__ = (function (){var switch__6295__auto__ = ((function (c__6351__auto___15844,cs,m,dchan,dctr,done){
return (function (state_15756){
var state_val_15757 = (state_15756[(1)]);
if((state_val_15757 === (7))){
var inst_15752 = (state_15756[(2)]);
var state_15756__$1 = state_15756;
var statearr_15758_15845 = state_15756__$1;
(statearr_15758_15845[(2)] = inst_15752);

(statearr_15758_15845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (20))){
var inst_15657 = (state_15756[(7)]);
var inst_15667 = cljs.core.first.call(null,inst_15657);
var inst_15668 = cljs.core.nth.call(null,inst_15667,(0),null);
var inst_15669 = cljs.core.nth.call(null,inst_15667,(1),null);
var state_15756__$1 = (function (){var statearr_15759 = state_15756;
(statearr_15759[(8)] = inst_15668);

return statearr_15759;
})();
if(cljs.core.truth_(inst_15669)){
var statearr_15760_15846 = state_15756__$1;
(statearr_15760_15846[(1)] = (22));

} else {
var statearr_15761_15847 = state_15756__$1;
(statearr_15761_15847[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (27))){
var inst_15628 = (state_15756[(9)]);
var inst_15699 = (state_15756[(10)]);
var inst_15704 = (state_15756[(11)]);
var inst_15697 = (state_15756[(12)]);
var inst_15704__$1 = cljs.core._nth.call(null,inst_15697,inst_15699);
var inst_15705 = cljs.core.async.put_BANG_.call(null,inst_15704__$1,inst_15628,done);
var state_15756__$1 = (function (){var statearr_15762 = state_15756;
(statearr_15762[(11)] = inst_15704__$1);

return statearr_15762;
})();
if(cljs.core.truth_(inst_15705)){
var statearr_15763_15848 = state_15756__$1;
(statearr_15763_15848[(1)] = (30));

} else {
var statearr_15764_15849 = state_15756__$1;
(statearr_15764_15849[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (1))){
var state_15756__$1 = state_15756;
var statearr_15765_15850 = state_15756__$1;
(statearr_15765_15850[(2)] = null);

(statearr_15765_15850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (24))){
var inst_15657 = (state_15756[(7)]);
var inst_15674 = (state_15756[(2)]);
var inst_15675 = cljs.core.next.call(null,inst_15657);
var inst_15637 = inst_15675;
var inst_15638 = null;
var inst_15639 = (0);
var inst_15640 = (0);
var state_15756__$1 = (function (){var statearr_15766 = state_15756;
(statearr_15766[(13)] = inst_15637);

(statearr_15766[(14)] = inst_15639);

(statearr_15766[(15)] = inst_15640);

(statearr_15766[(16)] = inst_15638);

(statearr_15766[(17)] = inst_15674);

return statearr_15766;
})();
var statearr_15767_15851 = state_15756__$1;
(statearr_15767_15851[(2)] = null);

(statearr_15767_15851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (39))){
var state_15756__$1 = state_15756;
var statearr_15771_15852 = state_15756__$1;
(statearr_15771_15852[(2)] = null);

(statearr_15771_15852[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (4))){
var inst_15628 = (state_15756[(9)]);
var inst_15628__$1 = (state_15756[(2)]);
var inst_15629 = (inst_15628__$1 == null);
var state_15756__$1 = (function (){var statearr_15772 = state_15756;
(statearr_15772[(9)] = inst_15628__$1);

return statearr_15772;
})();
if(cljs.core.truth_(inst_15629)){
var statearr_15773_15853 = state_15756__$1;
(statearr_15773_15853[(1)] = (5));

} else {
var statearr_15774_15854 = state_15756__$1;
(statearr_15774_15854[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (15))){
var inst_15637 = (state_15756[(13)]);
var inst_15639 = (state_15756[(14)]);
var inst_15640 = (state_15756[(15)]);
var inst_15638 = (state_15756[(16)]);
var inst_15653 = (state_15756[(2)]);
var inst_15654 = (inst_15640 + (1));
var tmp15768 = inst_15637;
var tmp15769 = inst_15639;
var tmp15770 = inst_15638;
var inst_15637__$1 = tmp15768;
var inst_15638__$1 = tmp15770;
var inst_15639__$1 = tmp15769;
var inst_15640__$1 = inst_15654;
var state_15756__$1 = (function (){var statearr_15775 = state_15756;
(statearr_15775[(13)] = inst_15637__$1);

(statearr_15775[(14)] = inst_15639__$1);

(statearr_15775[(18)] = inst_15653);

(statearr_15775[(15)] = inst_15640__$1);

(statearr_15775[(16)] = inst_15638__$1);

return statearr_15775;
})();
var statearr_15776_15855 = state_15756__$1;
(statearr_15776_15855[(2)] = null);

(statearr_15776_15855[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (21))){
var inst_15678 = (state_15756[(2)]);
var state_15756__$1 = state_15756;
var statearr_15780_15856 = state_15756__$1;
(statearr_15780_15856[(2)] = inst_15678);

(statearr_15780_15856[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (31))){
var inst_15704 = (state_15756[(11)]);
var inst_15708 = done.call(null,null);
var inst_15709 = cljs.core.async.untap_STAR_.call(null,m,inst_15704);
var state_15756__$1 = (function (){var statearr_15781 = state_15756;
(statearr_15781[(19)] = inst_15708);

return statearr_15781;
})();
var statearr_15782_15857 = state_15756__$1;
(statearr_15782_15857[(2)] = inst_15709);

(statearr_15782_15857[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (32))){
var inst_15699 = (state_15756[(10)]);
var inst_15697 = (state_15756[(12)]);
var inst_15696 = (state_15756[(20)]);
var inst_15698 = (state_15756[(21)]);
var inst_15711 = (state_15756[(2)]);
var inst_15712 = (inst_15699 + (1));
var tmp15777 = inst_15697;
var tmp15778 = inst_15696;
var tmp15779 = inst_15698;
var inst_15696__$1 = tmp15778;
var inst_15697__$1 = tmp15777;
var inst_15698__$1 = tmp15779;
var inst_15699__$1 = inst_15712;
var state_15756__$1 = (function (){var statearr_15783 = state_15756;
(statearr_15783[(10)] = inst_15699__$1);

(statearr_15783[(12)] = inst_15697__$1);

(statearr_15783[(20)] = inst_15696__$1);

(statearr_15783[(22)] = inst_15711);

(statearr_15783[(21)] = inst_15698__$1);

return statearr_15783;
})();
var statearr_15784_15858 = state_15756__$1;
(statearr_15784_15858[(2)] = null);

(statearr_15784_15858[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (40))){
var inst_15724 = (state_15756[(23)]);
var inst_15728 = done.call(null,null);
var inst_15729 = cljs.core.async.untap_STAR_.call(null,m,inst_15724);
var state_15756__$1 = (function (){var statearr_15785 = state_15756;
(statearr_15785[(24)] = inst_15728);

return statearr_15785;
})();
var statearr_15786_15859 = state_15756__$1;
(statearr_15786_15859[(2)] = inst_15729);

(statearr_15786_15859[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (33))){
var inst_15715 = (state_15756[(25)]);
var inst_15717 = cljs.core.chunked_seq_QMARK_.call(null,inst_15715);
var state_15756__$1 = state_15756;
if(inst_15717){
var statearr_15787_15860 = state_15756__$1;
(statearr_15787_15860[(1)] = (36));

} else {
var statearr_15788_15861 = state_15756__$1;
(statearr_15788_15861[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (13))){
var inst_15647 = (state_15756[(26)]);
var inst_15650 = cljs.core.async.close_BANG_.call(null,inst_15647);
var state_15756__$1 = state_15756;
var statearr_15789_15862 = state_15756__$1;
(statearr_15789_15862[(2)] = inst_15650);

(statearr_15789_15862[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (22))){
var inst_15668 = (state_15756[(8)]);
var inst_15671 = cljs.core.async.close_BANG_.call(null,inst_15668);
var state_15756__$1 = state_15756;
var statearr_15790_15863 = state_15756__$1;
(statearr_15790_15863[(2)] = inst_15671);

(statearr_15790_15863[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (36))){
var inst_15715 = (state_15756[(25)]);
var inst_15719 = cljs.core.chunk_first.call(null,inst_15715);
var inst_15720 = cljs.core.chunk_rest.call(null,inst_15715);
var inst_15721 = cljs.core.count.call(null,inst_15719);
var inst_15696 = inst_15720;
var inst_15697 = inst_15719;
var inst_15698 = inst_15721;
var inst_15699 = (0);
var state_15756__$1 = (function (){var statearr_15791 = state_15756;
(statearr_15791[(10)] = inst_15699);

(statearr_15791[(12)] = inst_15697);

(statearr_15791[(20)] = inst_15696);

(statearr_15791[(21)] = inst_15698);

return statearr_15791;
})();
var statearr_15792_15864 = state_15756__$1;
(statearr_15792_15864[(2)] = null);

(statearr_15792_15864[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (41))){
var inst_15715 = (state_15756[(25)]);
var inst_15731 = (state_15756[(2)]);
var inst_15732 = cljs.core.next.call(null,inst_15715);
var inst_15696 = inst_15732;
var inst_15697 = null;
var inst_15698 = (0);
var inst_15699 = (0);
var state_15756__$1 = (function (){var statearr_15793 = state_15756;
(statearr_15793[(10)] = inst_15699);

(statearr_15793[(12)] = inst_15697);

(statearr_15793[(27)] = inst_15731);

(statearr_15793[(20)] = inst_15696);

(statearr_15793[(21)] = inst_15698);

return statearr_15793;
})();
var statearr_15794_15865 = state_15756__$1;
(statearr_15794_15865[(2)] = null);

(statearr_15794_15865[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (43))){
var state_15756__$1 = state_15756;
var statearr_15795_15866 = state_15756__$1;
(statearr_15795_15866[(2)] = null);

(statearr_15795_15866[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (29))){
var inst_15740 = (state_15756[(2)]);
var state_15756__$1 = state_15756;
var statearr_15796_15867 = state_15756__$1;
(statearr_15796_15867[(2)] = inst_15740);

(statearr_15796_15867[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (44))){
var inst_15749 = (state_15756[(2)]);
var state_15756__$1 = (function (){var statearr_15797 = state_15756;
(statearr_15797[(28)] = inst_15749);

return statearr_15797;
})();
var statearr_15798_15868 = state_15756__$1;
(statearr_15798_15868[(2)] = null);

(statearr_15798_15868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (6))){
var inst_15688 = (state_15756[(29)]);
var inst_15687 = cljs.core.deref.call(null,cs);
var inst_15688__$1 = cljs.core.keys.call(null,inst_15687);
var inst_15689 = cljs.core.count.call(null,inst_15688__$1);
var inst_15690 = cljs.core.reset_BANG_.call(null,dctr,inst_15689);
var inst_15695 = cljs.core.seq.call(null,inst_15688__$1);
var inst_15696 = inst_15695;
var inst_15697 = null;
var inst_15698 = (0);
var inst_15699 = (0);
var state_15756__$1 = (function (){var statearr_15799 = state_15756;
(statearr_15799[(10)] = inst_15699);

(statearr_15799[(29)] = inst_15688__$1);

(statearr_15799[(12)] = inst_15697);

(statearr_15799[(20)] = inst_15696);

(statearr_15799[(30)] = inst_15690);

(statearr_15799[(21)] = inst_15698);

return statearr_15799;
})();
var statearr_15800_15869 = state_15756__$1;
(statearr_15800_15869[(2)] = null);

(statearr_15800_15869[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (28))){
var inst_15715 = (state_15756[(25)]);
var inst_15696 = (state_15756[(20)]);
var inst_15715__$1 = cljs.core.seq.call(null,inst_15696);
var state_15756__$1 = (function (){var statearr_15801 = state_15756;
(statearr_15801[(25)] = inst_15715__$1);

return statearr_15801;
})();
if(inst_15715__$1){
var statearr_15802_15870 = state_15756__$1;
(statearr_15802_15870[(1)] = (33));

} else {
var statearr_15803_15871 = state_15756__$1;
(statearr_15803_15871[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (25))){
var inst_15699 = (state_15756[(10)]);
var inst_15698 = (state_15756[(21)]);
var inst_15701 = (inst_15699 < inst_15698);
var inst_15702 = inst_15701;
var state_15756__$1 = state_15756;
if(cljs.core.truth_(inst_15702)){
var statearr_15804_15872 = state_15756__$1;
(statearr_15804_15872[(1)] = (27));

} else {
var statearr_15805_15873 = state_15756__$1;
(statearr_15805_15873[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (34))){
var state_15756__$1 = state_15756;
var statearr_15806_15874 = state_15756__$1;
(statearr_15806_15874[(2)] = null);

(statearr_15806_15874[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (17))){
var state_15756__$1 = state_15756;
var statearr_15807_15875 = state_15756__$1;
(statearr_15807_15875[(2)] = null);

(statearr_15807_15875[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (3))){
var inst_15754 = (state_15756[(2)]);
var state_15756__$1 = state_15756;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15756__$1,inst_15754);
} else {
if((state_val_15757 === (12))){
var inst_15683 = (state_15756[(2)]);
var state_15756__$1 = state_15756;
var statearr_15808_15876 = state_15756__$1;
(statearr_15808_15876[(2)] = inst_15683);

(statearr_15808_15876[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (2))){
var state_15756__$1 = state_15756;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15756__$1,(4),ch);
} else {
if((state_val_15757 === (23))){
var state_15756__$1 = state_15756;
var statearr_15809_15877 = state_15756__$1;
(statearr_15809_15877[(2)] = null);

(statearr_15809_15877[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (35))){
var inst_15738 = (state_15756[(2)]);
var state_15756__$1 = state_15756;
var statearr_15810_15878 = state_15756__$1;
(statearr_15810_15878[(2)] = inst_15738);

(statearr_15810_15878[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (19))){
var inst_15657 = (state_15756[(7)]);
var inst_15661 = cljs.core.chunk_first.call(null,inst_15657);
var inst_15662 = cljs.core.chunk_rest.call(null,inst_15657);
var inst_15663 = cljs.core.count.call(null,inst_15661);
var inst_15637 = inst_15662;
var inst_15638 = inst_15661;
var inst_15639 = inst_15663;
var inst_15640 = (0);
var state_15756__$1 = (function (){var statearr_15811 = state_15756;
(statearr_15811[(13)] = inst_15637);

(statearr_15811[(14)] = inst_15639);

(statearr_15811[(15)] = inst_15640);

(statearr_15811[(16)] = inst_15638);

return statearr_15811;
})();
var statearr_15812_15879 = state_15756__$1;
(statearr_15812_15879[(2)] = null);

(statearr_15812_15879[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (11))){
var inst_15637 = (state_15756[(13)]);
var inst_15657 = (state_15756[(7)]);
var inst_15657__$1 = cljs.core.seq.call(null,inst_15637);
var state_15756__$1 = (function (){var statearr_15813 = state_15756;
(statearr_15813[(7)] = inst_15657__$1);

return statearr_15813;
})();
if(inst_15657__$1){
var statearr_15814_15880 = state_15756__$1;
(statearr_15814_15880[(1)] = (16));

} else {
var statearr_15815_15881 = state_15756__$1;
(statearr_15815_15881[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (9))){
var inst_15685 = (state_15756[(2)]);
var state_15756__$1 = state_15756;
var statearr_15816_15882 = state_15756__$1;
(statearr_15816_15882[(2)] = inst_15685);

(statearr_15816_15882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (5))){
var inst_15635 = cljs.core.deref.call(null,cs);
var inst_15636 = cljs.core.seq.call(null,inst_15635);
var inst_15637 = inst_15636;
var inst_15638 = null;
var inst_15639 = (0);
var inst_15640 = (0);
var state_15756__$1 = (function (){var statearr_15817 = state_15756;
(statearr_15817[(13)] = inst_15637);

(statearr_15817[(14)] = inst_15639);

(statearr_15817[(15)] = inst_15640);

(statearr_15817[(16)] = inst_15638);

return statearr_15817;
})();
var statearr_15818_15883 = state_15756__$1;
(statearr_15818_15883[(2)] = null);

(statearr_15818_15883[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (14))){
var state_15756__$1 = state_15756;
var statearr_15819_15884 = state_15756__$1;
(statearr_15819_15884[(2)] = null);

(statearr_15819_15884[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (45))){
var inst_15746 = (state_15756[(2)]);
var state_15756__$1 = state_15756;
var statearr_15820_15885 = state_15756__$1;
(statearr_15820_15885[(2)] = inst_15746);

(statearr_15820_15885[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (26))){
var inst_15688 = (state_15756[(29)]);
var inst_15742 = (state_15756[(2)]);
var inst_15743 = cljs.core.seq.call(null,inst_15688);
var state_15756__$1 = (function (){var statearr_15821 = state_15756;
(statearr_15821[(31)] = inst_15742);

return statearr_15821;
})();
if(inst_15743){
var statearr_15822_15886 = state_15756__$1;
(statearr_15822_15886[(1)] = (42));

} else {
var statearr_15823_15887 = state_15756__$1;
(statearr_15823_15887[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (16))){
var inst_15657 = (state_15756[(7)]);
var inst_15659 = cljs.core.chunked_seq_QMARK_.call(null,inst_15657);
var state_15756__$1 = state_15756;
if(inst_15659){
var statearr_15824_15888 = state_15756__$1;
(statearr_15824_15888[(1)] = (19));

} else {
var statearr_15825_15889 = state_15756__$1;
(statearr_15825_15889[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (38))){
var inst_15735 = (state_15756[(2)]);
var state_15756__$1 = state_15756;
var statearr_15826_15890 = state_15756__$1;
(statearr_15826_15890[(2)] = inst_15735);

(statearr_15826_15890[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (30))){
var state_15756__$1 = state_15756;
var statearr_15827_15891 = state_15756__$1;
(statearr_15827_15891[(2)] = null);

(statearr_15827_15891[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (10))){
var inst_15640 = (state_15756[(15)]);
var inst_15638 = (state_15756[(16)]);
var inst_15646 = cljs.core._nth.call(null,inst_15638,inst_15640);
var inst_15647 = cljs.core.nth.call(null,inst_15646,(0),null);
var inst_15648 = cljs.core.nth.call(null,inst_15646,(1),null);
var state_15756__$1 = (function (){var statearr_15828 = state_15756;
(statearr_15828[(26)] = inst_15647);

return statearr_15828;
})();
if(cljs.core.truth_(inst_15648)){
var statearr_15829_15892 = state_15756__$1;
(statearr_15829_15892[(1)] = (13));

} else {
var statearr_15830_15893 = state_15756__$1;
(statearr_15830_15893[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (18))){
var inst_15681 = (state_15756[(2)]);
var state_15756__$1 = state_15756;
var statearr_15831_15894 = state_15756__$1;
(statearr_15831_15894[(2)] = inst_15681);

(statearr_15831_15894[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (42))){
var state_15756__$1 = state_15756;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15756__$1,(45),dchan);
} else {
if((state_val_15757 === (37))){
var inst_15715 = (state_15756[(25)]);
var inst_15724 = (state_15756[(23)]);
var inst_15628 = (state_15756[(9)]);
var inst_15724__$1 = cljs.core.first.call(null,inst_15715);
var inst_15725 = cljs.core.async.put_BANG_.call(null,inst_15724__$1,inst_15628,done);
var state_15756__$1 = (function (){var statearr_15832 = state_15756;
(statearr_15832[(23)] = inst_15724__$1);

return statearr_15832;
})();
if(cljs.core.truth_(inst_15725)){
var statearr_15833_15895 = state_15756__$1;
(statearr_15833_15895[(1)] = (39));

} else {
var statearr_15834_15896 = state_15756__$1;
(statearr_15834_15896[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15757 === (8))){
var inst_15639 = (state_15756[(14)]);
var inst_15640 = (state_15756[(15)]);
var inst_15642 = (inst_15640 < inst_15639);
var inst_15643 = inst_15642;
var state_15756__$1 = state_15756;
if(cljs.core.truth_(inst_15643)){
var statearr_15835_15897 = state_15756__$1;
(statearr_15835_15897[(1)] = (10));

} else {
var statearr_15836_15898 = state_15756__$1;
(statearr_15836_15898[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6351__auto___15844,cs,m,dchan,dctr,done))
;
return ((function (switch__6295__auto__,c__6351__auto___15844,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__6296__auto__ = null;
var cljs$core$async$mult_$_state_machine__6296__auto____0 = (function (){
var statearr_15840 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15840[(0)] = cljs$core$async$mult_$_state_machine__6296__auto__);

(statearr_15840[(1)] = (1));

return statearr_15840;
});
var cljs$core$async$mult_$_state_machine__6296__auto____1 = (function (state_15756){
while(true){
var ret_value__6297__auto__ = (function (){try{while(true){
var result__6298__auto__ = switch__6295__auto__.call(null,state_15756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6298__auto__;
}
break;
}
}catch (e15841){if((e15841 instanceof Object)){
var ex__6299__auto__ = e15841;
var statearr_15842_15899 = state_15756;
(statearr_15842_15899[(5)] = ex__6299__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15900 = state_15756;
state_15756 = G__15900;
continue;
} else {
return ret_value__6297__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__6296__auto__ = function(state_15756){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__6296__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__6296__auto____1.call(this,state_15756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__6296__auto____0;
cljs$core$async$mult_$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__6296__auto____1;
return cljs$core$async$mult_$_state_machine__6296__auto__;
})()
;})(switch__6295__auto__,c__6351__auto___15844,cs,m,dchan,dctr,done))
})();
var state__6353__auto__ = (function (){var statearr_15843 = f__6352__auto__.call(null);
(statearr_15843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6351__auto___15844);

return statearr_15843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6353__auto__);
});})(c__6351__auto___15844,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function() {
var cljs$core$async$tap = null;
var cljs$core$async$tap__2 = (function (mult,ch){
return cljs$core$async$tap.call(null,mult,ch,true);
});
var cljs$core$async$tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
cljs$core$async$tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$tap__2.call(this,mult,ch);
case 3:
return cljs$core$async$tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$tap.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$tap__2;
cljs$core$async$tap.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$tap__3;
return cljs$core$async$tap;
})()
;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj15902 = {};
return obj15902;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__4054__auto__ = m;
if(and__4054__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__4054__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4702__auto__ = (((m == null))?null:m);
return (function (){var or__4066__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4702__auto__)]);
if(or__4066__auto__){
return or__4066__auto__;
} else {
var or__4066__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__4066__auto____$1){
return or__4066__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__4054__auto__ = m;
if(and__4054__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__4054__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4702__auto__ = (((m == null))?null:m);
return (function (){var or__4066__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4702__auto__)]);
if(or__4066__auto__){
return or__4066__auto__;
} else {
var or__4066__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__4066__auto____$1){
return or__4066__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__4054__auto__ = m;
if(and__4054__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__4054__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4702__auto__ = (((m == null))?null:m);
return (function (){var or__4066__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4702__auto__)]);
if(or__4066__auto__){
return or__4066__auto__;
} else {
var or__4066__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__4066__auto____$1){
return or__4066__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__4054__auto__ = m;
if(and__4054__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__4054__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4702__auto__ = (((m == null))?null:m);
return (function (){var or__4066__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4702__auto__)]);
if(or__4066__auto__){
return or__4066__auto__;
} else {
var or__4066__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__4066__auto____$1){
return or__4066__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__4054__auto__ = m;
if(and__4054__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__4054__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4702__auto__ = (((m == null))?null:m);
return (function (){var or__4066__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4702__auto__)]);
if(or__4066__auto__){
return or__4066__auto__;
} else {
var or__4066__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__4066__auto____$1){
return or__4066__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
 * @param {...*} var_args
 */
cljs.core.async.ioc_alts_BANG_ = (function() { 
var cljs$core$async$ioc_alts_BANG___delegate = function (state,cont_block,ports,p__15903){
var map__15908 = p__15903;
var map__15908__$1 = ((cljs.core.seq_QMARK_.call(null,map__15908))?cljs.core.apply.call(null,cljs.core.hash_map,map__15908):map__15908);
var opts = map__15908__$1;
var statearr_15909_15912 = state;
(statearr_15909_15912[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4406__auto__ = cljs.core.async.do_alts.call(null,((function (map__15908,map__15908__$1,opts){
return (function (val){
var statearr_15910_15913 = state;
(statearr_15910_15913[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__15908,map__15908__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4406__auto__)){
var cb = temp__4406__auto__;
var statearr_15911_15914 = state;
(statearr_15911_15914[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var cljs$core$async$ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__15903 = null;
if (arguments.length > 3) {
var G__15915__i = 0, G__15915__a = new Array(arguments.length -  3);
while (G__15915__i < G__15915__a.length) {G__15915__a[G__15915__i] = arguments[G__15915__i + 3]; ++G__15915__i;}
  p__15903 = new cljs.core.IndexedSeq(G__15915__a,0);
} 
return cljs$core$async$ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__15903);};
cljs$core$async$ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
cljs$core$async$ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__15916){
var state = cljs.core.first(arglist__15916);
arglist__15916 = cljs.core.next(arglist__15916);
var cont_block = cljs.core.first(arglist__15916);
arglist__15916 = cljs.core.next(arglist__15916);
var ports = cljs.core.first(arglist__15916);
var p__15903 = cljs.core.rest(arglist__15916);
return cljs$core$async$ioc_alts_BANG___delegate(state,cont_block,ports,p__15903);
});
cljs$core$async$ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$async$ioc_alts_BANG___delegate;
return cljs$core$async$ioc_alts_BANG_;
})()
;
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t16036 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16036 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16037){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16037 = meta16037;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16036.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t16036.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16036.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16036.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16036.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16036.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16036.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t16036.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16036.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16038){
var self__ = this;
var _16038__$1 = this;
return self__.meta16037;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16038,meta16037__$1){
var self__ = this;
var _16038__$1 = this;
return (new cljs.core.async.t16036(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16037__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16036.cljs$lang$type = true;

cljs.core.async.t16036.cljs$lang$ctorStr = "cljs.core.async/t16036";

cljs.core.async.t16036.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4645__auto__,writer__4646__auto__,opt__4647__auto__){
return cljs.core._write.call(null,writer__4646__auto__,"cljs.core.async/t16036");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t16036 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t16036(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16037){
return (new cljs.core.async.t16036(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16037));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t16036(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6351__auto___16155 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6351__auto___16155,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6352__auto__ = (function (){var switch__6295__auto__ = ((function (c__6351__auto___16155,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16108){
var state_val_16109 = (state_16108[(1)]);
if((state_val_16109 === (7))){
var inst_16052 = (state_16108[(7)]);
var inst_16057 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16052);
var state_16108__$1 = state_16108;
var statearr_16110_16156 = state_16108__$1;
(statearr_16110_16156[(2)] = inst_16057);

(statearr_16110_16156[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16109 === (20))){
var inst_16067 = (state_16108[(8)]);
var state_16108__$1 = state_16108;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16108__$1,(23),out,inst_16067);
} else {
if((state_val_16109 === (1))){
var inst_16042 = (state_16108[(9)]);
var inst_16042__$1 = calc_state.call(null);
var inst_16043 = cljs.core.seq_QMARK_.call(null,inst_16042__$1);
var state_16108__$1 = (function (){var statearr_16111 = state_16108;
(statearr_16111[(9)] = inst_16042__$1);

return statearr_16111;
})();
if(inst_16043){
var statearr_16112_16157 = state_16108__$1;
(statearr_16112_16157[(1)] = (2));

} else {
var statearr_16113_16158 = state_16108__$1;
(statearr_16113_16158[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16109 === (24))){
var inst_16060 = (state_16108[(10)]);
var inst_16052 = inst_16060;
var state_16108__$1 = (function (){var statearr_16114 = state_16108;
(statearr_16114[(7)] = inst_16052);

return statearr_16114;
})();
var statearr_16115_16159 = state_16108__$1;
(statearr_16115_16159[(2)] = null);

(statearr_16115_16159[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16109 === (4))){
var inst_16042 = (state_16108[(9)]);
var inst_16048 = (state_16108[(2)]);
var inst_16049 = cljs.core.get.call(null,inst_16048,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16050 = cljs.core.get.call(null,inst_16048,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16051 = cljs.core.get.call(null,inst_16048,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16052 = inst_16042;
var state_16108__$1 = (function (){var statearr_16116 = state_16108;
(statearr_16116[(11)] = inst_16050);

(statearr_16116[(7)] = inst_16052);

(statearr_16116[(12)] = inst_16049);

(statearr_16116[(13)] = inst_16051);

return statearr_16116;
})();
var statearr_16117_16160 = state_16108__$1;
(statearr_16117_16160[(2)] = null);

(statearr_16117_16160[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16109 === (15))){
var state_16108__$1 = state_16108;
var statearr_16118_16161 = state_16108__$1;
(statearr_16118_16161[(2)] = null);

(statearr_16118_16161[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16109 === (21))){
var inst_16060 = (state_16108[(10)]);
var inst_16052 = inst_16060;
var state_16108__$1 = (function (){var statearr_16119 = state_16108;
(statearr_16119[(7)] = inst_16052);

return statearr_16119;
})();
var statearr_16120_16162 = state_16108__$1;
(statearr_16120_16162[(2)] = null);

(statearr_16120_16162[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16109 === (13))){
var inst_16104 = (state_16108[(2)]);
var state_16108__$1 = state_16108;
var statearr_16121_16163 = state_16108__$1;
(statearr_16121_16163[(2)] = inst_16104);

(statearr_16121_16163[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16109 === (22))){
var inst_16102 = (state_16108[(2)]);
var state_16108__$1 = state_16108;
var statearr_16122_16164 = state_16108__$1;
(statearr_16122_16164[(2)] = inst_16102);

(statearr_16122_16164[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16109 === (6))){
var inst_16106 = (state_16108[(2)]);
var state_16108__$1 = state_16108;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16108__$1,inst_16106);
} else {
if((state_val_16109 === (25))){
var state_16108__$1 = state_16108;
var statearr_16123_16165 = state_16108__$1;
(statearr_16123_16165[(2)] = null);

(statearr_16123_16165[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16109 === (17))){
var inst_16082 = (state_16108[(14)]);
var state_16108__$1 = state_16108;
var statearr_16124_16166 = state_16108__$1;
(statearr_16124_16166[(2)] = inst_16082);

(statearr_16124_16166[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16109 === (3))){
var inst_16042 = (state_16108[(9)]);
var state_16108__$1 = state_16108;
var statearr_16125_16167 = state_16108__$1;
(statearr_16125_16167[(2)] = inst_16042);

(statearr_16125_16167[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16109 === (12))){
var inst_16068 = (state_16108[(15)]);
var inst_16082 = (state_16108[(14)]);
var inst_16063 = (state_16108[(16)]);
var inst_16082__$1 = inst_16063.call(null,inst_16068);
var state_16108__$1 = (function (){var statearr_16126 = state_16108;
(statearr_16126[(14)] = inst_16082__$1);

return statearr_16126;
})();
if(cljs.core.truth_(inst_16082__$1)){
var statearr_16127_16168 = state_16108__$1;
(statearr_16127_16168[(1)] = (17));

} else {
var statearr_16128_16169 = state_16108__$1;
(statearr_16128_16169[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16109 === (2))){
var inst_16042 = (state_16108[(9)]);
var inst_16045 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16042);
var state_16108__$1 = state_16108;
var statearr_16129_16170 = state_16108__$1;
(statearr_16129_16170[(2)] = inst_16045);

(statearr_16129_16170[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16109 === (23))){
var inst_16093 = (state_16108[(2)]);
var state_16108__$1 = state_16108;
if(cljs.core.truth_(inst_16093)){
var statearr_16130_16171 = state_16108__$1;
(statearr_16130_16171[(1)] = (24));

} else {
var statearr_16131_16172 = state_16108__$1;
(statearr_16131_16172[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16109 === (19))){
var inst_16090 = (state_16108[(2)]);
var state_16108__$1 = state_16108;
if(cljs.core.truth_(inst_16090)){
var statearr_16132_16173 = state_16108__$1;
(statearr_16132_16173[(1)] = (20));

} else {
var statearr_16133_16174 = state_16108__$1;
(statearr_16133_16174[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16109 === (11))){
var inst_16067 = (state_16108[(8)]);
var inst_16073 = (inst_16067 == null);
var state_16108__$1 = state_16108;
if(cljs.core.truth_(inst_16073)){
var statearr_16134_16175 = state_16108__$1;
(statearr_16134_16175[(1)] = (14));

} else {
var statearr_16135_16176 = state_16108__$1;
(statearr_16135_16176[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16109 === (9))){
var inst_16060 = (state_16108[(10)]);
var inst_16060__$1 = (state_16108[(2)]);
var inst_16061 = cljs.core.get.call(null,inst_16060__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16062 = cljs.core.get.call(null,inst_16060__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16063 = cljs.core.get.call(null,inst_16060__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_16108__$1 = (function (){var statearr_16136 = state_16108;
(statearr_16136[(17)] = inst_16062);

(statearr_16136[(16)] = inst_16063);

(statearr_16136[(10)] = inst_16060__$1);

return statearr_16136;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_16108__$1,(10),inst_16061);
} else {
if((state_val_16109 === (5))){
var inst_16052 = (state_16108[(7)]);
var inst_16055 = cljs.core.seq_QMARK_.call(null,inst_16052);
var state_16108__$1 = state_16108;
if(inst_16055){
var statearr_16137_16177 = state_16108__$1;
(statearr_16137_16177[(1)] = (7));

} else {
var statearr_16138_16178 = state_16108__$1;
(statearr_16138_16178[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16109 === (14))){
var inst_16068 = (state_16108[(15)]);
var inst_16075 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16068);
var state_16108__$1 = state_16108;
var statearr_16139_16179 = state_16108__$1;
(statearr_16139_16179[(2)] = inst_16075);

(statearr_16139_16179[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16109 === (26))){
var inst_16098 = (state_16108[(2)]);
var state_16108__$1 = state_16108;
var statearr_16140_16180 = state_16108__$1;
(statearr_16140_16180[(2)] = inst_16098);

(statearr_16140_16180[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16109 === (16))){
var inst_16078 = (state_16108[(2)]);
var inst_16079 = calc_state.call(null);
var inst_16052 = inst_16079;
var state_16108__$1 = (function (){var statearr_16141 = state_16108;
(statearr_16141[(18)] = inst_16078);

(statearr_16141[(7)] = inst_16052);

return statearr_16141;
})();
var statearr_16142_16181 = state_16108__$1;
(statearr_16142_16181[(2)] = null);

(statearr_16142_16181[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16109 === (10))){
var inst_16068 = (state_16108[(15)]);
var inst_16067 = (state_16108[(8)]);
var inst_16066 = (state_16108[(2)]);
var inst_16067__$1 = cljs.core.nth.call(null,inst_16066,(0),null);
var inst_16068__$1 = cljs.core.nth.call(null,inst_16066,(1),null);
var inst_16069 = (inst_16067__$1 == null);
var inst_16070 = cljs.core._EQ_.call(null,inst_16068__$1,change);
var inst_16071 = (inst_16069) || (inst_16070);
var state_16108__$1 = (function (){var statearr_16143 = state_16108;
(statearr_16143[(15)] = inst_16068__$1);

(statearr_16143[(8)] = inst_16067__$1);

return statearr_16143;
})();
if(cljs.core.truth_(inst_16071)){
var statearr_16144_16182 = state_16108__$1;
(statearr_16144_16182[(1)] = (11));

} else {
var statearr_16145_16183 = state_16108__$1;
(statearr_16145_16183[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16109 === (18))){
var inst_16062 = (state_16108[(17)]);
var inst_16068 = (state_16108[(15)]);
var inst_16063 = (state_16108[(16)]);
var inst_16085 = cljs.core.empty_QMARK_.call(null,inst_16063);
var inst_16086 = inst_16062.call(null,inst_16068);
var inst_16087 = cljs.core.not.call(null,inst_16086);
var inst_16088 = (inst_16085) && (inst_16087);
var state_16108__$1 = state_16108;
var statearr_16146_16184 = state_16108__$1;
(statearr_16146_16184[(2)] = inst_16088);

(statearr_16146_16184[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16109 === (8))){
var inst_16052 = (state_16108[(7)]);
var state_16108__$1 = state_16108;
var statearr_16147_16185 = state_16108__$1;
(statearr_16147_16185[(2)] = inst_16052);

(statearr_16147_16185[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6351__auto___16155,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6295__auto__,c__6351__auto___16155,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__6296__auto__ = null;
var cljs$core$async$mix_$_state_machine__6296__auto____0 = (function (){
var statearr_16151 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16151[(0)] = cljs$core$async$mix_$_state_machine__6296__auto__);

(statearr_16151[(1)] = (1));

return statearr_16151;
});
var cljs$core$async$mix_$_state_machine__6296__auto____1 = (function (state_16108){
while(true){
var ret_value__6297__auto__ = (function (){try{while(true){
var result__6298__auto__ = switch__6295__auto__.call(null,state_16108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6298__auto__;
}
break;
}
}catch (e16152){if((e16152 instanceof Object)){
var ex__6299__auto__ = e16152;
var statearr_16153_16186 = state_16108;
(statearr_16153_16186[(5)] = ex__6299__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16187 = state_16108;
state_16108 = G__16187;
continue;
} else {
return ret_value__6297__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__6296__auto__ = function(state_16108){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__6296__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__6296__auto____1.call(this,state_16108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__6296__auto____0;
cljs$core$async$mix_$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__6296__auto____1;
return cljs$core$async$mix_$_state_machine__6296__auto__;
})()
;})(switch__6295__auto__,c__6351__auto___16155,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6353__auto__ = (function (){var statearr_16154 = f__6352__auto__.call(null);
(statearr_16154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6351__auto___16155);

return statearr_16154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6353__auto__);
});})(c__6351__auto___16155,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj16189 = {};
return obj16189;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__4054__auto__ = p;
if(and__4054__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__4054__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4702__auto__ = (((p == null))?null:p);
return (function (){var or__4066__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4702__auto__)]);
if(or__4066__auto__){
return or__4066__auto__;
} else {
var or__4066__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__4066__auto____$1){
return or__4066__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__4054__auto__ = p;
if(and__4054__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__4054__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4702__auto__ = (((p == null))?null:p);
return (function (){var or__4066__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4702__auto__)]);
if(or__4066__auto__){
return or__4066__auto__;
} else {
var or__4066__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__4066__auto____$1){
return or__4066__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var cljs$core$async$unsub_all_STAR_ = null;
var cljs$core$async$unsub_all_STAR___1 = (function (p){
if((function (){var and__4054__auto__ = p;
if(and__4054__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__4054__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4702__auto__ = (((p == null))?null:p);
return (function (){var or__4066__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4702__auto__)]);
if(or__4066__auto__){
return or__4066__auto__;
} else {
var or__4066__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4066__auto____$1){
return or__4066__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var cljs$core$async$unsub_all_STAR___2 = (function (p,v){
if((function (){var and__4054__auto__ = p;
if(and__4054__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__4054__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4702__auto__ = (((p == null))?null:p);
return (function (){var or__4066__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4702__auto__)]);
if(or__4066__auto__){
return or__4066__auto__;
} else {
var or__4066__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4066__auto____$1){
return or__4066__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
cljs$core$async$unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return cljs$core$async$unsub_all_STAR___1.call(this,p);
case 2:
return cljs$core$async$unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unsub_all_STAR___1;
cljs$core$async$unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unsub_all_STAR___2;
return cljs$core$async$unsub_all_STAR_;
})()
;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function() {
var cljs$core$async$pub = null;
var cljs$core$async$pub__2 = (function (ch,topic_fn){
return cljs$core$async$pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var cljs$core$async$pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4066__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4066__auto__)){
return or__4066__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4066__auto__,mults){
return (function (p1__16190_SHARP_){
if(cljs.core.truth_(p1__16190_SHARP_.call(null,topic))){
return p1__16190_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__16190_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4066__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t16313 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16313 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta16314){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta16314 = meta16314;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16313.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t16313.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t16313.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4406__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4406__auto__)){
var m = temp__4406__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t16313.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t16313.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t16313.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t16313.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t16313.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16315){
var self__ = this;
var _16315__$1 = this;
return self__.meta16314;
});})(mults,ensure_mult))
;

cljs.core.async.t16313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16315,meta16314__$1){
var self__ = this;
var _16315__$1 = this;
return (new cljs.core.async.t16313(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta16314__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t16313.cljs$lang$type = true;

cljs.core.async.t16313.cljs$lang$ctorStr = "cljs.core.async/t16313";

cljs.core.async.t16313.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4645__auto__,writer__4646__auto__,opt__4647__auto__){
return cljs.core._write.call(null,writer__4646__auto__,"cljs.core.async/t16313");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t16313 = ((function (mults,ensure_mult){
return (function cljs$core$async$pub_$___GT_t16313(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16314){
return (new cljs.core.async.t16313(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16314));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t16313(ensure_mult,mults,buf_fn,topic_fn,ch,cljs$core$async$pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6351__auto___16435 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6351__auto___16435,mults,ensure_mult,p){
return (function (){
var f__6352__auto__ = (function (){var switch__6295__auto__ = ((function (c__6351__auto___16435,mults,ensure_mult,p){
return (function (state_16387){
var state_val_16388 = (state_16387[(1)]);
if((state_val_16388 === (7))){
var inst_16383 = (state_16387[(2)]);
var state_16387__$1 = state_16387;
var statearr_16389_16436 = state_16387__$1;
(statearr_16389_16436[(2)] = inst_16383);

(statearr_16389_16436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16388 === (20))){
var state_16387__$1 = state_16387;
var statearr_16390_16437 = state_16387__$1;
(statearr_16390_16437[(2)] = null);

(statearr_16390_16437[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16388 === (1))){
var state_16387__$1 = state_16387;
var statearr_16391_16438 = state_16387__$1;
(statearr_16391_16438[(2)] = null);

(statearr_16391_16438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16388 === (24))){
var inst_16366 = (state_16387[(7)]);
var inst_16375 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16366);
var state_16387__$1 = state_16387;
var statearr_16392_16439 = state_16387__$1;
(statearr_16392_16439[(2)] = inst_16375);

(statearr_16392_16439[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16388 === (4))){
var inst_16318 = (state_16387[(8)]);
var inst_16318__$1 = (state_16387[(2)]);
var inst_16319 = (inst_16318__$1 == null);
var state_16387__$1 = (function (){var statearr_16393 = state_16387;
(statearr_16393[(8)] = inst_16318__$1);

return statearr_16393;
})();
if(cljs.core.truth_(inst_16319)){
var statearr_16394_16440 = state_16387__$1;
(statearr_16394_16440[(1)] = (5));

} else {
var statearr_16395_16441 = state_16387__$1;
(statearr_16395_16441[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16388 === (15))){
var inst_16360 = (state_16387[(2)]);
var state_16387__$1 = state_16387;
var statearr_16396_16442 = state_16387__$1;
(statearr_16396_16442[(2)] = inst_16360);

(statearr_16396_16442[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16388 === (21))){
var inst_16380 = (state_16387[(2)]);
var state_16387__$1 = (function (){var statearr_16397 = state_16387;
(statearr_16397[(9)] = inst_16380);

return statearr_16397;
})();
var statearr_16398_16443 = state_16387__$1;
(statearr_16398_16443[(2)] = null);

(statearr_16398_16443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16388 === (13))){
var inst_16342 = (state_16387[(10)]);
var inst_16344 = cljs.core.chunked_seq_QMARK_.call(null,inst_16342);
var state_16387__$1 = state_16387;
if(inst_16344){
var statearr_16399_16444 = state_16387__$1;
(statearr_16399_16444[(1)] = (16));

} else {
var statearr_16400_16445 = state_16387__$1;
(statearr_16400_16445[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16388 === (22))){
var inst_16372 = (state_16387[(2)]);
var state_16387__$1 = state_16387;
if(cljs.core.truth_(inst_16372)){
var statearr_16401_16446 = state_16387__$1;
(statearr_16401_16446[(1)] = (23));

} else {
var statearr_16402_16447 = state_16387__$1;
(statearr_16402_16447[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16388 === (6))){
var inst_16366 = (state_16387[(7)]);
var inst_16368 = (state_16387[(11)]);
var inst_16318 = (state_16387[(8)]);
var inst_16366__$1 = topic_fn.call(null,inst_16318);
var inst_16367 = cljs.core.deref.call(null,mults);
var inst_16368__$1 = cljs.core.get.call(null,inst_16367,inst_16366__$1);
var state_16387__$1 = (function (){var statearr_16403 = state_16387;
(statearr_16403[(7)] = inst_16366__$1);

(statearr_16403[(11)] = inst_16368__$1);

return statearr_16403;
})();
if(cljs.core.truth_(inst_16368__$1)){
var statearr_16404_16448 = state_16387__$1;
(statearr_16404_16448[(1)] = (19));

} else {
var statearr_16405_16449 = state_16387__$1;
(statearr_16405_16449[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16388 === (25))){
var inst_16377 = (state_16387[(2)]);
var state_16387__$1 = state_16387;
var statearr_16406_16450 = state_16387__$1;
(statearr_16406_16450[(2)] = inst_16377);

(statearr_16406_16450[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16388 === (17))){
var inst_16342 = (state_16387[(10)]);
var inst_16351 = cljs.core.first.call(null,inst_16342);
var inst_16352 = cljs.core.async.muxch_STAR_.call(null,inst_16351);
var inst_16353 = cljs.core.async.close_BANG_.call(null,inst_16352);
var inst_16354 = cljs.core.next.call(null,inst_16342);
var inst_16328 = inst_16354;
var inst_16329 = null;
var inst_16330 = (0);
var inst_16331 = (0);
var state_16387__$1 = (function (){var statearr_16407 = state_16387;
(statearr_16407[(12)] = inst_16330);

(statearr_16407[(13)] = inst_16331);

(statearr_16407[(14)] = inst_16328);

(statearr_16407[(15)] = inst_16329);

(statearr_16407[(16)] = inst_16353);

return statearr_16407;
})();
var statearr_16408_16451 = state_16387__$1;
(statearr_16408_16451[(2)] = null);

(statearr_16408_16451[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16388 === (3))){
var inst_16385 = (state_16387[(2)]);
var state_16387__$1 = state_16387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16387__$1,inst_16385);
} else {
if((state_val_16388 === (12))){
var inst_16362 = (state_16387[(2)]);
var state_16387__$1 = state_16387;
var statearr_16409_16452 = state_16387__$1;
(statearr_16409_16452[(2)] = inst_16362);

(statearr_16409_16452[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16388 === (2))){
var state_16387__$1 = state_16387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16387__$1,(4),ch);
} else {
if((state_val_16388 === (23))){
var state_16387__$1 = state_16387;
var statearr_16410_16453 = state_16387__$1;
(statearr_16410_16453[(2)] = null);

(statearr_16410_16453[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16388 === (19))){
var inst_16368 = (state_16387[(11)]);
var inst_16318 = (state_16387[(8)]);
var inst_16370 = cljs.core.async.muxch_STAR_.call(null,inst_16368);
var state_16387__$1 = state_16387;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16387__$1,(22),inst_16370,inst_16318);
} else {
if((state_val_16388 === (11))){
var inst_16342 = (state_16387[(10)]);
var inst_16328 = (state_16387[(14)]);
var inst_16342__$1 = cljs.core.seq.call(null,inst_16328);
var state_16387__$1 = (function (){var statearr_16411 = state_16387;
(statearr_16411[(10)] = inst_16342__$1);

return statearr_16411;
})();
if(inst_16342__$1){
var statearr_16412_16454 = state_16387__$1;
(statearr_16412_16454[(1)] = (13));

} else {
var statearr_16413_16455 = state_16387__$1;
(statearr_16413_16455[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16388 === (9))){
var inst_16364 = (state_16387[(2)]);
var state_16387__$1 = state_16387;
var statearr_16414_16456 = state_16387__$1;
(statearr_16414_16456[(2)] = inst_16364);

(statearr_16414_16456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16388 === (5))){
var inst_16325 = cljs.core.deref.call(null,mults);
var inst_16326 = cljs.core.vals.call(null,inst_16325);
var inst_16327 = cljs.core.seq.call(null,inst_16326);
var inst_16328 = inst_16327;
var inst_16329 = null;
var inst_16330 = (0);
var inst_16331 = (0);
var state_16387__$1 = (function (){var statearr_16415 = state_16387;
(statearr_16415[(12)] = inst_16330);

(statearr_16415[(13)] = inst_16331);

(statearr_16415[(14)] = inst_16328);

(statearr_16415[(15)] = inst_16329);

return statearr_16415;
})();
var statearr_16416_16457 = state_16387__$1;
(statearr_16416_16457[(2)] = null);

(statearr_16416_16457[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16388 === (14))){
var state_16387__$1 = state_16387;
var statearr_16420_16458 = state_16387__$1;
(statearr_16420_16458[(2)] = null);

(statearr_16420_16458[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16388 === (16))){
var inst_16342 = (state_16387[(10)]);
var inst_16346 = cljs.core.chunk_first.call(null,inst_16342);
var inst_16347 = cljs.core.chunk_rest.call(null,inst_16342);
var inst_16348 = cljs.core.count.call(null,inst_16346);
var inst_16328 = inst_16347;
var inst_16329 = inst_16346;
var inst_16330 = inst_16348;
var inst_16331 = (0);
var state_16387__$1 = (function (){var statearr_16421 = state_16387;
(statearr_16421[(12)] = inst_16330);

(statearr_16421[(13)] = inst_16331);

(statearr_16421[(14)] = inst_16328);

(statearr_16421[(15)] = inst_16329);

return statearr_16421;
})();
var statearr_16422_16459 = state_16387__$1;
(statearr_16422_16459[(2)] = null);

(statearr_16422_16459[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16388 === (10))){
var inst_16330 = (state_16387[(12)]);
var inst_16331 = (state_16387[(13)]);
var inst_16328 = (state_16387[(14)]);
var inst_16329 = (state_16387[(15)]);
var inst_16336 = cljs.core._nth.call(null,inst_16329,inst_16331);
var inst_16337 = cljs.core.async.muxch_STAR_.call(null,inst_16336);
var inst_16338 = cljs.core.async.close_BANG_.call(null,inst_16337);
var inst_16339 = (inst_16331 + (1));
var tmp16417 = inst_16330;
var tmp16418 = inst_16328;
var tmp16419 = inst_16329;
var inst_16328__$1 = tmp16418;
var inst_16329__$1 = tmp16419;
var inst_16330__$1 = tmp16417;
var inst_16331__$1 = inst_16339;
var state_16387__$1 = (function (){var statearr_16423 = state_16387;
(statearr_16423[(12)] = inst_16330__$1);

(statearr_16423[(17)] = inst_16338);

(statearr_16423[(13)] = inst_16331__$1);

(statearr_16423[(14)] = inst_16328__$1);

(statearr_16423[(15)] = inst_16329__$1);

return statearr_16423;
})();
var statearr_16424_16460 = state_16387__$1;
(statearr_16424_16460[(2)] = null);

(statearr_16424_16460[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16388 === (18))){
var inst_16357 = (state_16387[(2)]);
var state_16387__$1 = state_16387;
var statearr_16425_16461 = state_16387__$1;
(statearr_16425_16461[(2)] = inst_16357);

(statearr_16425_16461[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16388 === (8))){
var inst_16330 = (state_16387[(12)]);
var inst_16331 = (state_16387[(13)]);
var inst_16333 = (inst_16331 < inst_16330);
var inst_16334 = inst_16333;
var state_16387__$1 = state_16387;
if(cljs.core.truth_(inst_16334)){
var statearr_16426_16462 = state_16387__$1;
(statearr_16426_16462[(1)] = (10));

} else {
var statearr_16427_16463 = state_16387__$1;
(statearr_16427_16463[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6351__auto___16435,mults,ensure_mult,p))
;
return ((function (switch__6295__auto__,c__6351__auto___16435,mults,ensure_mult,p){
return (function() {
var cljs$core$async$pub_$_state_machine__6296__auto__ = null;
var cljs$core$async$pub_$_state_machine__6296__auto____0 = (function (){
var statearr_16431 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16431[(0)] = cljs$core$async$pub_$_state_machine__6296__auto__);

(statearr_16431[(1)] = (1));

return statearr_16431;
});
var cljs$core$async$pub_$_state_machine__6296__auto____1 = (function (state_16387){
while(true){
var ret_value__6297__auto__ = (function (){try{while(true){
var result__6298__auto__ = switch__6295__auto__.call(null,state_16387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6298__auto__;
}
break;
}
}catch (e16432){if((e16432 instanceof Object)){
var ex__6299__auto__ = e16432;
var statearr_16433_16464 = state_16387;
(statearr_16433_16464[(5)] = ex__6299__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16465 = state_16387;
state_16387 = G__16465;
continue;
} else {
return ret_value__6297__auto__;
}
break;
}
});
cljs$core$async$pub_$_state_machine__6296__auto__ = function(state_16387){
switch(arguments.length){
case 0:
return cljs$core$async$pub_$_state_machine__6296__auto____0.call(this);
case 1:
return cljs$core$async$pub_$_state_machine__6296__auto____1.call(this,state_16387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub_$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pub_$_state_machine__6296__auto____0;
cljs$core$async$pub_$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pub_$_state_machine__6296__auto____1;
return cljs$core$async$pub_$_state_machine__6296__auto__;
})()
;})(switch__6295__auto__,c__6351__auto___16435,mults,ensure_mult,p))
})();
var state__6353__auto__ = (function (){var statearr_16434 = f__6352__auto__.call(null);
(statearr_16434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6351__auto___16435);

return statearr_16434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6353__auto__);
});})(c__6351__auto___16435,mults,ensure_mult,p))
);


return p;
});
cljs$core$async$pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return cljs$core$async$pub__2.call(this,ch,topic_fn);
case 3:
return cljs$core$async$pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$pub__2;
cljs$core$async$pub.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$pub__3;
return cljs$core$async$pub;
})()
;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function() {
var cljs$core$async$sub = null;
var cljs$core$async$sub__3 = (function (p,topic,ch){
return cljs$core$async$sub.call(null,p,topic,ch,true);
});
var cljs$core$async$sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
cljs$core$async$sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return cljs$core$async$sub__3.call(this,p,topic,ch);
case 4:
return cljs$core$async$sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$sub.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$sub__3;
cljs$core$async$sub.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$sub__4;
return cljs$core$async$sub;
})()
;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function() {
var cljs$core$async$unsub_all = null;
var cljs$core$async$unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var cljs$core$async$unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
cljs$core$async$unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return cljs$core$async$unsub_all__1.call(this,p);
case 2:
return cljs$core$async$unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unsub_all.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unsub_all__1;
cljs$core$async$unsub_all.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unsub_all__2;
return cljs$core$async$unsub_all;
})()
;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function() {
var cljs$core$async$map = null;
var cljs$core$async$map__2 = (function (f,chs){
return cljs$core$async$map.call(null,f,chs,null);
});
var cljs$core$async$map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__6351__auto___16602 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6351__auto___16602,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6352__auto__ = (function (){var switch__6295__auto__ = ((function (c__6351__auto___16602,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16572){
var state_val_16573 = (state_16572[(1)]);
if((state_val_16573 === (7))){
var state_16572__$1 = state_16572;
var statearr_16574_16603 = state_16572__$1;
(statearr_16574_16603[(2)] = null);

(statearr_16574_16603[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16573 === (1))){
var state_16572__$1 = state_16572;
var statearr_16575_16604 = state_16572__$1;
(statearr_16575_16604[(2)] = null);

(statearr_16575_16604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16573 === (4))){
var inst_16536 = (state_16572[(7)]);
var inst_16538 = (inst_16536 < cnt);
var state_16572__$1 = state_16572;
if(cljs.core.truth_(inst_16538)){
var statearr_16576_16605 = state_16572__$1;
(statearr_16576_16605[(1)] = (6));

} else {
var statearr_16577_16606 = state_16572__$1;
(statearr_16577_16606[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16573 === (15))){
var inst_16568 = (state_16572[(2)]);
var state_16572__$1 = state_16572;
var statearr_16578_16607 = state_16572__$1;
(statearr_16578_16607[(2)] = inst_16568);

(statearr_16578_16607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16573 === (13))){
var inst_16561 = cljs.core.async.close_BANG_.call(null,out);
var state_16572__$1 = state_16572;
var statearr_16579_16608 = state_16572__$1;
(statearr_16579_16608[(2)] = inst_16561);

(statearr_16579_16608[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16573 === (6))){
var state_16572__$1 = state_16572;
var statearr_16580_16609 = state_16572__$1;
(statearr_16580_16609[(2)] = null);

(statearr_16580_16609[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16573 === (3))){
var inst_16570 = (state_16572[(2)]);
var state_16572__$1 = state_16572;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16572__$1,inst_16570);
} else {
if((state_val_16573 === (12))){
var inst_16558 = (state_16572[(8)]);
var inst_16558__$1 = (state_16572[(2)]);
var inst_16559 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_16558__$1);
var state_16572__$1 = (function (){var statearr_16581 = state_16572;
(statearr_16581[(8)] = inst_16558__$1);

return statearr_16581;
})();
if(cljs.core.truth_(inst_16559)){
var statearr_16582_16610 = state_16572__$1;
(statearr_16582_16610[(1)] = (13));

} else {
var statearr_16583_16611 = state_16572__$1;
(statearr_16583_16611[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16573 === (2))){
var inst_16535 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_16536 = (0);
var state_16572__$1 = (function (){var statearr_16584 = state_16572;
(statearr_16584[(9)] = inst_16535);

(statearr_16584[(7)] = inst_16536);

return statearr_16584;
})();
var statearr_16585_16612 = state_16572__$1;
(statearr_16585_16612[(2)] = null);

(statearr_16585_16612[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16573 === (11))){
var inst_16536 = (state_16572[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16572,(10),Object,null,(9));
var inst_16545 = chs__$1.call(null,inst_16536);
var inst_16546 = done.call(null,inst_16536);
var inst_16547 = cljs.core.async.take_BANG_.call(null,inst_16545,inst_16546);
var state_16572__$1 = state_16572;
var statearr_16586_16613 = state_16572__$1;
(statearr_16586_16613[(2)] = inst_16547);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16572__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16573 === (9))){
var inst_16536 = (state_16572[(7)]);
var inst_16549 = (state_16572[(2)]);
var inst_16550 = (inst_16536 + (1));
var inst_16536__$1 = inst_16550;
var state_16572__$1 = (function (){var statearr_16587 = state_16572;
(statearr_16587[(10)] = inst_16549);

(statearr_16587[(7)] = inst_16536__$1);

return statearr_16587;
})();
var statearr_16588_16614 = state_16572__$1;
(statearr_16588_16614[(2)] = null);

(statearr_16588_16614[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16573 === (5))){
var inst_16556 = (state_16572[(2)]);
var state_16572__$1 = (function (){var statearr_16589 = state_16572;
(statearr_16589[(11)] = inst_16556);

return statearr_16589;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16572__$1,(12),dchan);
} else {
if((state_val_16573 === (14))){
var inst_16558 = (state_16572[(8)]);
var inst_16563 = cljs.core.apply.call(null,f,inst_16558);
var state_16572__$1 = state_16572;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16572__$1,(16),out,inst_16563);
} else {
if((state_val_16573 === (16))){
var inst_16565 = (state_16572[(2)]);
var state_16572__$1 = (function (){var statearr_16590 = state_16572;
(statearr_16590[(12)] = inst_16565);

return statearr_16590;
})();
var statearr_16591_16615 = state_16572__$1;
(statearr_16591_16615[(2)] = null);

(statearr_16591_16615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16573 === (10))){
var inst_16540 = (state_16572[(2)]);
var inst_16541 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_16572__$1 = (function (){var statearr_16592 = state_16572;
(statearr_16592[(13)] = inst_16540);

return statearr_16592;
})();
var statearr_16593_16616 = state_16572__$1;
(statearr_16593_16616[(2)] = inst_16541);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16572__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16573 === (8))){
var inst_16554 = (state_16572[(2)]);
var state_16572__$1 = state_16572;
var statearr_16594_16617 = state_16572__$1;
(statearr_16594_16617[(2)] = inst_16554);

(statearr_16594_16617[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6351__auto___16602,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6295__auto__,c__6351__auto___16602,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$map_$_state_machine__6296__auto__ = null;
var cljs$core$async$map_$_state_machine__6296__auto____0 = (function (){
var statearr_16598 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16598[(0)] = cljs$core$async$map_$_state_machine__6296__auto__);

(statearr_16598[(1)] = (1));

return statearr_16598;
});
var cljs$core$async$map_$_state_machine__6296__auto____1 = (function (state_16572){
while(true){
var ret_value__6297__auto__ = (function (){try{while(true){
var result__6298__auto__ = switch__6295__auto__.call(null,state_16572);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6298__auto__;
}
break;
}
}catch (e16599){if((e16599 instanceof Object)){
var ex__6299__auto__ = e16599;
var statearr_16600_16618 = state_16572;
(statearr_16600_16618[(5)] = ex__6299__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16619 = state_16572;
state_16572 = G__16619;
continue;
} else {
return ret_value__6297__auto__;
}
break;
}
});
cljs$core$async$map_$_state_machine__6296__auto__ = function(state_16572){
switch(arguments.length){
case 0:
return cljs$core$async$map_$_state_machine__6296__auto____0.call(this);
case 1:
return cljs$core$async$map_$_state_machine__6296__auto____1.call(this,state_16572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map_$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$map_$_state_machine__6296__auto____0;
cljs$core$async$map_$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$map_$_state_machine__6296__auto____1;
return cljs$core$async$map_$_state_machine__6296__auto__;
})()
;})(switch__6295__auto__,c__6351__auto___16602,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6353__auto__ = (function (){var statearr_16601 = f__6352__auto__.call(null);
(statearr_16601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6351__auto___16602);

return statearr_16601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6353__auto__);
});})(c__6351__auto___16602,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
cljs$core$async$map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$map__2.call(this,f,chs);
case 3:
return cljs$core$async$map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$map__2;
cljs$core$async$map.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$map__3;
return cljs$core$async$map;
})()
;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function() {
var cljs$core$async$merge = null;
var cljs$core$async$merge__1 = (function (chs){
return cljs$core$async$merge.call(null,chs,null);
});
var cljs$core$async$merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6351__auto___16727 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6351__auto___16727,out){
return (function (){
var f__6352__auto__ = (function (){var switch__6295__auto__ = ((function (c__6351__auto___16727,out){
return (function (state_16703){
var state_val_16704 = (state_16703[(1)]);
if((state_val_16704 === (7))){
var inst_16682 = (state_16703[(7)]);
var inst_16683 = (state_16703[(8)]);
var inst_16682__$1 = (state_16703[(2)]);
var inst_16683__$1 = cljs.core.nth.call(null,inst_16682__$1,(0),null);
var inst_16684 = cljs.core.nth.call(null,inst_16682__$1,(1),null);
var inst_16685 = (inst_16683__$1 == null);
var state_16703__$1 = (function (){var statearr_16705 = state_16703;
(statearr_16705[(7)] = inst_16682__$1);

(statearr_16705[(9)] = inst_16684);

(statearr_16705[(8)] = inst_16683__$1);

return statearr_16705;
})();
if(cljs.core.truth_(inst_16685)){
var statearr_16706_16728 = state_16703__$1;
(statearr_16706_16728[(1)] = (8));

} else {
var statearr_16707_16729 = state_16703__$1;
(statearr_16707_16729[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16704 === (1))){
var inst_16674 = cljs.core.vec.call(null,chs);
var inst_16675 = inst_16674;
var state_16703__$1 = (function (){var statearr_16708 = state_16703;
(statearr_16708[(10)] = inst_16675);

return statearr_16708;
})();
var statearr_16709_16730 = state_16703__$1;
(statearr_16709_16730[(2)] = null);

(statearr_16709_16730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16704 === (4))){
var inst_16675 = (state_16703[(10)]);
var state_16703__$1 = state_16703;
return cljs.core.async.ioc_alts_BANG_.call(null,state_16703__$1,(7),inst_16675);
} else {
if((state_val_16704 === (6))){
var inst_16699 = (state_16703[(2)]);
var state_16703__$1 = state_16703;
var statearr_16710_16731 = state_16703__$1;
(statearr_16710_16731[(2)] = inst_16699);

(statearr_16710_16731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16704 === (3))){
var inst_16701 = (state_16703[(2)]);
var state_16703__$1 = state_16703;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16703__$1,inst_16701);
} else {
if((state_val_16704 === (2))){
var inst_16675 = (state_16703[(10)]);
var inst_16677 = cljs.core.count.call(null,inst_16675);
var inst_16678 = (inst_16677 > (0));
var state_16703__$1 = state_16703;
if(cljs.core.truth_(inst_16678)){
var statearr_16712_16732 = state_16703__$1;
(statearr_16712_16732[(1)] = (4));

} else {
var statearr_16713_16733 = state_16703__$1;
(statearr_16713_16733[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16704 === (11))){
var inst_16675 = (state_16703[(10)]);
var inst_16692 = (state_16703[(2)]);
var tmp16711 = inst_16675;
var inst_16675__$1 = tmp16711;
var state_16703__$1 = (function (){var statearr_16714 = state_16703;
(statearr_16714[(11)] = inst_16692);

(statearr_16714[(10)] = inst_16675__$1);

return statearr_16714;
})();
var statearr_16715_16734 = state_16703__$1;
(statearr_16715_16734[(2)] = null);

(statearr_16715_16734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16704 === (9))){
var inst_16683 = (state_16703[(8)]);
var state_16703__$1 = state_16703;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16703__$1,(11),out,inst_16683);
} else {
if((state_val_16704 === (5))){
var inst_16697 = cljs.core.async.close_BANG_.call(null,out);
var state_16703__$1 = state_16703;
var statearr_16716_16735 = state_16703__$1;
(statearr_16716_16735[(2)] = inst_16697);

(statearr_16716_16735[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16704 === (10))){
var inst_16695 = (state_16703[(2)]);
var state_16703__$1 = state_16703;
var statearr_16717_16736 = state_16703__$1;
(statearr_16717_16736[(2)] = inst_16695);

(statearr_16717_16736[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16704 === (8))){
var inst_16682 = (state_16703[(7)]);
var inst_16684 = (state_16703[(9)]);
var inst_16675 = (state_16703[(10)]);
var inst_16683 = (state_16703[(8)]);
var inst_16687 = (function (){var c = inst_16684;
var v = inst_16683;
var vec__16680 = inst_16682;
var cs = inst_16675;
return ((function (c,v,vec__16680,cs,inst_16682,inst_16684,inst_16675,inst_16683,state_val_16704,c__6351__auto___16727,out){
return (function (p1__16620_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__16620_SHARP_);
});
;})(c,v,vec__16680,cs,inst_16682,inst_16684,inst_16675,inst_16683,state_val_16704,c__6351__auto___16727,out))
})();
var inst_16688 = cljs.core.filterv.call(null,inst_16687,inst_16675);
var inst_16675__$1 = inst_16688;
var state_16703__$1 = (function (){var statearr_16718 = state_16703;
(statearr_16718[(10)] = inst_16675__$1);

return statearr_16718;
})();
var statearr_16719_16737 = state_16703__$1;
(statearr_16719_16737[(2)] = null);

(statearr_16719_16737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6351__auto___16727,out))
;
return ((function (switch__6295__auto__,c__6351__auto___16727,out){
return (function() {
var cljs$core$async$merge_$_state_machine__6296__auto__ = null;
var cljs$core$async$merge_$_state_machine__6296__auto____0 = (function (){
var statearr_16723 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16723[(0)] = cljs$core$async$merge_$_state_machine__6296__auto__);

(statearr_16723[(1)] = (1));

return statearr_16723;
});
var cljs$core$async$merge_$_state_machine__6296__auto____1 = (function (state_16703){
while(true){
var ret_value__6297__auto__ = (function (){try{while(true){
var result__6298__auto__ = switch__6295__auto__.call(null,state_16703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6298__auto__;
}
break;
}
}catch (e16724){if((e16724 instanceof Object)){
var ex__6299__auto__ = e16724;
var statearr_16725_16738 = state_16703;
(statearr_16725_16738[(5)] = ex__6299__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16739 = state_16703;
state_16703 = G__16739;
continue;
} else {
return ret_value__6297__auto__;
}
break;
}
});
cljs$core$async$merge_$_state_machine__6296__auto__ = function(state_16703){
switch(arguments.length){
case 0:
return cljs$core$async$merge_$_state_machine__6296__auto____0.call(this);
case 1:
return cljs$core$async$merge_$_state_machine__6296__auto____1.call(this,state_16703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge_$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$merge_$_state_machine__6296__auto____0;
cljs$core$async$merge_$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge_$_state_machine__6296__auto____1;
return cljs$core$async$merge_$_state_machine__6296__auto__;
})()
;})(switch__6295__auto__,c__6351__auto___16727,out))
})();
var state__6353__auto__ = (function (){var statearr_16726 = f__6352__auto__.call(null);
(statearr_16726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6351__auto___16727);

return statearr_16726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6353__auto__);
});})(c__6351__auto___16727,out))
);


return out;
});
cljs$core$async$merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return cljs$core$async$merge__1.call(this,chs);
case 2:
return cljs$core$async$merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge__1;
cljs$core$async$merge.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$merge__2;
return cljs$core$async$merge;
})()
;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function() {
var cljs$core$async$take = null;
var cljs$core$async$take__2 = (function (n,ch){
return cljs$core$async$take.call(null,n,ch,null);
});
var cljs$core$async$take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6351__auto___16832 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6351__auto___16832,out){
return (function (){
var f__6352__auto__ = (function (){var switch__6295__auto__ = ((function (c__6351__auto___16832,out){
return (function (state_16809){
var state_val_16810 = (state_16809[(1)]);
if((state_val_16810 === (7))){
var inst_16791 = (state_16809[(7)]);
var inst_16791__$1 = (state_16809[(2)]);
var inst_16792 = (inst_16791__$1 == null);
var inst_16793 = cljs.core.not.call(null,inst_16792);
var state_16809__$1 = (function (){var statearr_16811 = state_16809;
(statearr_16811[(7)] = inst_16791__$1);

return statearr_16811;
})();
if(inst_16793){
var statearr_16812_16833 = state_16809__$1;
(statearr_16812_16833[(1)] = (8));

} else {
var statearr_16813_16834 = state_16809__$1;
(statearr_16813_16834[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16810 === (1))){
var inst_16786 = (0);
var state_16809__$1 = (function (){var statearr_16814 = state_16809;
(statearr_16814[(8)] = inst_16786);

return statearr_16814;
})();
var statearr_16815_16835 = state_16809__$1;
(statearr_16815_16835[(2)] = null);

(statearr_16815_16835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16810 === (4))){
var state_16809__$1 = state_16809;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16809__$1,(7),ch);
} else {
if((state_val_16810 === (6))){
var inst_16804 = (state_16809[(2)]);
var state_16809__$1 = state_16809;
var statearr_16816_16836 = state_16809__$1;
(statearr_16816_16836[(2)] = inst_16804);

(statearr_16816_16836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16810 === (3))){
var inst_16806 = (state_16809[(2)]);
var inst_16807 = cljs.core.async.close_BANG_.call(null,out);
var state_16809__$1 = (function (){var statearr_16817 = state_16809;
(statearr_16817[(9)] = inst_16806);

return statearr_16817;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16809__$1,inst_16807);
} else {
if((state_val_16810 === (2))){
var inst_16786 = (state_16809[(8)]);
var inst_16788 = (inst_16786 < n);
var state_16809__$1 = state_16809;
if(cljs.core.truth_(inst_16788)){
var statearr_16818_16837 = state_16809__$1;
(statearr_16818_16837[(1)] = (4));

} else {
var statearr_16819_16838 = state_16809__$1;
(statearr_16819_16838[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16810 === (11))){
var inst_16786 = (state_16809[(8)]);
var inst_16796 = (state_16809[(2)]);
var inst_16797 = (inst_16786 + (1));
var inst_16786__$1 = inst_16797;
var state_16809__$1 = (function (){var statearr_16820 = state_16809;
(statearr_16820[(10)] = inst_16796);

(statearr_16820[(8)] = inst_16786__$1);

return statearr_16820;
})();
var statearr_16821_16839 = state_16809__$1;
(statearr_16821_16839[(2)] = null);

(statearr_16821_16839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16810 === (9))){
var state_16809__$1 = state_16809;
var statearr_16822_16840 = state_16809__$1;
(statearr_16822_16840[(2)] = null);

(statearr_16822_16840[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16810 === (5))){
var state_16809__$1 = state_16809;
var statearr_16823_16841 = state_16809__$1;
(statearr_16823_16841[(2)] = null);

(statearr_16823_16841[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16810 === (10))){
var inst_16801 = (state_16809[(2)]);
var state_16809__$1 = state_16809;
var statearr_16824_16842 = state_16809__$1;
(statearr_16824_16842[(2)] = inst_16801);

(statearr_16824_16842[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16810 === (8))){
var inst_16791 = (state_16809[(7)]);
var state_16809__$1 = state_16809;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16809__$1,(11),out,inst_16791);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6351__auto___16832,out))
;
return ((function (switch__6295__auto__,c__6351__auto___16832,out){
return (function() {
var cljs$core$async$take_$_state_machine__6296__auto__ = null;
var cljs$core$async$take_$_state_machine__6296__auto____0 = (function (){
var statearr_16828 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16828[(0)] = cljs$core$async$take_$_state_machine__6296__auto__);

(statearr_16828[(1)] = (1));

return statearr_16828;
});
var cljs$core$async$take_$_state_machine__6296__auto____1 = (function (state_16809){
while(true){
var ret_value__6297__auto__ = (function (){try{while(true){
var result__6298__auto__ = switch__6295__auto__.call(null,state_16809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6298__auto__;
}
break;
}
}catch (e16829){if((e16829 instanceof Object)){
var ex__6299__auto__ = e16829;
var statearr_16830_16843 = state_16809;
(statearr_16830_16843[(5)] = ex__6299__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16844 = state_16809;
state_16809 = G__16844;
continue;
} else {
return ret_value__6297__auto__;
}
break;
}
});
cljs$core$async$take_$_state_machine__6296__auto__ = function(state_16809){
switch(arguments.length){
case 0:
return cljs$core$async$take_$_state_machine__6296__auto____0.call(this);
case 1:
return cljs$core$async$take_$_state_machine__6296__auto____1.call(this,state_16809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$take_$_state_machine__6296__auto____0;
cljs$core$async$take_$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$take_$_state_machine__6296__auto____1;
return cljs$core$async$take_$_state_machine__6296__auto__;
})()
;})(switch__6295__auto__,c__6351__auto___16832,out))
})();
var state__6353__auto__ = (function (){var statearr_16831 = f__6352__auto__.call(null);
(statearr_16831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6351__auto___16832);

return statearr_16831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6353__auto__);
});})(c__6351__auto___16832,out))
);


return out;
});
cljs$core$async$take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$take__2.call(this,n,ch);
case 3:
return cljs$core$async$take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$take__2;
cljs$core$async$take.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$take__3;
return cljs$core$async$take;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t16852 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16852 = (function (ch,f,map_LT_,meta16853){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta16853 = meta16853;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16852.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t16852.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t16852.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t16852.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t16855 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16855 = (function (fn1,_,meta16853,map_LT_,f,ch,meta16856){
this.fn1 = fn1;
this._ = _;
this.meta16853 = meta16853;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta16856 = meta16856;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16855.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16855.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t16855.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__16845_SHARP_){
return f1.call(null,(((p1__16845_SHARP_ == null))?null:self__.f.call(null,p1__16845_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t16855.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_16857){
var self__ = this;
var _16857__$1 = this;
return self__.meta16856;
});})(___$1))
;

cljs.core.async.t16855.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_16857,meta16856__$1){
var self__ = this;
var _16857__$1 = this;
return (new cljs.core.async.t16855(self__.fn1,self__._,self__.meta16853,self__.map_LT_,self__.f,self__.ch,meta16856__$1));
});})(___$1))
;

cljs.core.async.t16855.cljs$lang$type = true;

cljs.core.async.t16855.cljs$lang$ctorStr = "cljs.core.async/t16855";

cljs.core.async.t16855.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4645__auto__,writer__4646__auto__,opt__4647__auto__){
return cljs.core._write.call(null,writer__4646__auto__,"cljs.core.async/t16855");
});})(___$1))
;

cljs.core.async.__GT_t16855 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t16855(fn1__$1,___$2,meta16853__$1,map_LT___$1,f__$1,ch__$1,meta16856){
return (new cljs.core.async.t16855(fn1__$1,___$2,meta16853__$1,map_LT___$1,f__$1,ch__$1,meta16856));
});})(___$1))
;

}

return (new cljs.core.async.t16855(fn1,___$1,self__.meta16853,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4054__auto__ = ret;
if(cljs.core.truth_(and__4054__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4054__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t16852.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t16852.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t16852.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t16852.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16854){
var self__ = this;
var _16854__$1 = this;
return self__.meta16853;
});

cljs.core.async.t16852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16854,meta16853__$1){
var self__ = this;
var _16854__$1 = this;
return (new cljs.core.async.t16852(self__.ch,self__.f,self__.map_LT_,meta16853__$1));
});

cljs.core.async.t16852.cljs$lang$type = true;

cljs.core.async.t16852.cljs$lang$ctorStr = "cljs.core.async/t16852";

cljs.core.async.t16852.cljs$lang$ctorPrWriter = (function (this__4645__auto__,writer__4646__auto__,opt__4647__auto__){
return cljs.core._write.call(null,writer__4646__auto__,"cljs.core.async/t16852");
});

cljs.core.async.__GT_t16852 = (function cljs$core$async$map_LT__$___GT_t16852(ch__$1,f__$1,map_LT___$1,meta16853){
return (new cljs.core.async.t16852(ch__$1,f__$1,map_LT___$1,meta16853));
});

}

return (new cljs.core.async.t16852(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t16861 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16861 = (function (ch,f,map_GT_,meta16862){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta16862 = meta16862;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16861.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t16861.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t16861.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t16861.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t16861.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t16861.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t16861.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16863){
var self__ = this;
var _16863__$1 = this;
return self__.meta16862;
});

cljs.core.async.t16861.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16863,meta16862__$1){
var self__ = this;
var _16863__$1 = this;
return (new cljs.core.async.t16861(self__.ch,self__.f,self__.map_GT_,meta16862__$1));
});

cljs.core.async.t16861.cljs$lang$type = true;

cljs.core.async.t16861.cljs$lang$ctorStr = "cljs.core.async/t16861";

cljs.core.async.t16861.cljs$lang$ctorPrWriter = (function (this__4645__auto__,writer__4646__auto__,opt__4647__auto__){
return cljs.core._write.call(null,writer__4646__auto__,"cljs.core.async/t16861");
});

cljs.core.async.__GT_t16861 = (function cljs$core$async$map_GT__$___GT_t16861(ch__$1,f__$1,map_GT___$1,meta16862){
return (new cljs.core.async.t16861(ch__$1,f__$1,map_GT___$1,meta16862));
});

}

return (new cljs.core.async.t16861(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t16867 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16867 = (function (ch,p,filter_GT_,meta16868){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta16868 = meta16868;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16867.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t16867.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t16867.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t16867.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t16867.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t16867.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t16867.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t16867.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16869){
var self__ = this;
var _16869__$1 = this;
return self__.meta16868;
});

cljs.core.async.t16867.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16869,meta16868__$1){
var self__ = this;
var _16869__$1 = this;
return (new cljs.core.async.t16867(self__.ch,self__.p,self__.filter_GT_,meta16868__$1));
});

cljs.core.async.t16867.cljs$lang$type = true;

cljs.core.async.t16867.cljs$lang$ctorStr = "cljs.core.async/t16867";

cljs.core.async.t16867.cljs$lang$ctorPrWriter = (function (this__4645__auto__,writer__4646__auto__,opt__4647__auto__){
return cljs.core._write.call(null,writer__4646__auto__,"cljs.core.async/t16867");
});

cljs.core.async.__GT_t16867 = (function cljs$core$async$filter_GT__$___GT_t16867(ch__$1,p__$1,filter_GT___$1,meta16868){
return (new cljs.core.async.t16867(ch__$1,p__$1,filter_GT___$1,meta16868));
});

}

return (new cljs.core.async.t16867(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function() {
var cljs$core$async$filter_LT_ = null;
var cljs$core$async$filter_LT___2 = (function (p,ch){
return cljs$core$async$filter_LT_.call(null,p,ch,null);
});
var cljs$core$async$filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6351__auto___16952 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6351__auto___16952,out){
return (function (){
var f__6352__auto__ = (function (){var switch__6295__auto__ = ((function (c__6351__auto___16952,out){
return (function (state_16931){
var state_val_16932 = (state_16931[(1)]);
if((state_val_16932 === (7))){
var inst_16927 = (state_16931[(2)]);
var state_16931__$1 = state_16931;
var statearr_16933_16953 = state_16931__$1;
(statearr_16933_16953[(2)] = inst_16927);

(statearr_16933_16953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16932 === (1))){
var state_16931__$1 = state_16931;
var statearr_16934_16954 = state_16931__$1;
(statearr_16934_16954[(2)] = null);

(statearr_16934_16954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16932 === (4))){
var inst_16913 = (state_16931[(7)]);
var inst_16913__$1 = (state_16931[(2)]);
var inst_16914 = (inst_16913__$1 == null);
var state_16931__$1 = (function (){var statearr_16935 = state_16931;
(statearr_16935[(7)] = inst_16913__$1);

return statearr_16935;
})();
if(cljs.core.truth_(inst_16914)){
var statearr_16936_16955 = state_16931__$1;
(statearr_16936_16955[(1)] = (5));

} else {
var statearr_16937_16956 = state_16931__$1;
(statearr_16937_16956[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16932 === (6))){
var inst_16913 = (state_16931[(7)]);
var inst_16918 = p.call(null,inst_16913);
var state_16931__$1 = state_16931;
if(cljs.core.truth_(inst_16918)){
var statearr_16938_16957 = state_16931__$1;
(statearr_16938_16957[(1)] = (8));

} else {
var statearr_16939_16958 = state_16931__$1;
(statearr_16939_16958[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16932 === (3))){
var inst_16929 = (state_16931[(2)]);
var state_16931__$1 = state_16931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16931__$1,inst_16929);
} else {
if((state_val_16932 === (2))){
var state_16931__$1 = state_16931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16931__$1,(4),ch);
} else {
if((state_val_16932 === (11))){
var inst_16921 = (state_16931[(2)]);
var state_16931__$1 = state_16931;
var statearr_16940_16959 = state_16931__$1;
(statearr_16940_16959[(2)] = inst_16921);

(statearr_16940_16959[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16932 === (9))){
var state_16931__$1 = state_16931;
var statearr_16941_16960 = state_16931__$1;
(statearr_16941_16960[(2)] = null);

(statearr_16941_16960[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16932 === (5))){
var inst_16916 = cljs.core.async.close_BANG_.call(null,out);
var state_16931__$1 = state_16931;
var statearr_16942_16961 = state_16931__$1;
(statearr_16942_16961[(2)] = inst_16916);

(statearr_16942_16961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16932 === (10))){
var inst_16924 = (state_16931[(2)]);
var state_16931__$1 = (function (){var statearr_16943 = state_16931;
(statearr_16943[(8)] = inst_16924);

return statearr_16943;
})();
var statearr_16944_16962 = state_16931__$1;
(statearr_16944_16962[(2)] = null);

(statearr_16944_16962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16932 === (8))){
var inst_16913 = (state_16931[(7)]);
var state_16931__$1 = state_16931;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16931__$1,(11),out,inst_16913);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6351__auto___16952,out))
;
return ((function (switch__6295__auto__,c__6351__auto___16952,out){
return (function() {
var cljs$core$async$filter_LT__$_state_machine__6296__auto__ = null;
var cljs$core$async$filter_LT__$_state_machine__6296__auto____0 = (function (){
var statearr_16948 = [null,null,null,null,null,null,null,null,null];
(statearr_16948[(0)] = cljs$core$async$filter_LT__$_state_machine__6296__auto__);

(statearr_16948[(1)] = (1));

return statearr_16948;
});
var cljs$core$async$filter_LT__$_state_machine__6296__auto____1 = (function (state_16931){
while(true){
var ret_value__6297__auto__ = (function (){try{while(true){
var result__6298__auto__ = switch__6295__auto__.call(null,state_16931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6298__auto__;
}
break;
}
}catch (e16949){if((e16949 instanceof Object)){
var ex__6299__auto__ = e16949;
var statearr_16950_16963 = state_16931;
(statearr_16950_16963[(5)] = ex__6299__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16949;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16964 = state_16931;
state_16931 = G__16964;
continue;
} else {
return ret_value__6297__auto__;
}
break;
}
});
cljs$core$async$filter_LT__$_state_machine__6296__auto__ = function(state_16931){
switch(arguments.length){
case 0:
return cljs$core$async$filter_LT__$_state_machine__6296__auto____0.call(this);
case 1:
return cljs$core$async$filter_LT__$_state_machine__6296__auto____1.call(this,state_16931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT__$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$filter_LT__$_state_machine__6296__auto____0;
cljs$core$async$filter_LT__$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$filter_LT__$_state_machine__6296__auto____1;
return cljs$core$async$filter_LT__$_state_machine__6296__auto__;
})()
;})(switch__6295__auto__,c__6351__auto___16952,out))
})();
var state__6353__auto__ = (function (){var statearr_16951 = f__6352__auto__.call(null);
(statearr_16951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6351__auto___16952);

return statearr_16951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6353__auto__);
});})(c__6351__auto___16952,out))
);


return out;
});
cljs$core$async$filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$filter_LT___2.call(this,p,ch);
case 3:
return cljs$core$async$filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$filter_LT___2;
cljs$core$async$filter_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$filter_LT___3;
return cljs$core$async$filter_LT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function() {
var cljs$core$async$remove_LT_ = null;
var cljs$core$async$remove_LT___2 = (function (p,ch){
return cljs$core$async$remove_LT_.call(null,p,ch,null);
});
var cljs$core$async$remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
cljs$core$async$remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$remove_LT___2.call(this,p,ch);
case 3:
return cljs$core$async$remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$remove_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$remove_LT___2;
cljs$core$async$remove_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$remove_LT___3;
return cljs$core$async$remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__6351__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6351__auto__){
return (function (){
var f__6352__auto__ = (function (){var switch__6295__auto__ = ((function (c__6351__auto__){
return (function (state_17130){
var state_val_17131 = (state_17130[(1)]);
if((state_val_17131 === (7))){
var inst_17126 = (state_17130[(2)]);
var state_17130__$1 = state_17130;
var statearr_17132_17173 = state_17130__$1;
(statearr_17132_17173[(2)] = inst_17126);

(statearr_17132_17173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17131 === (20))){
var inst_17096 = (state_17130[(7)]);
var inst_17107 = (state_17130[(2)]);
var inst_17108 = cljs.core.next.call(null,inst_17096);
var inst_17082 = inst_17108;
var inst_17083 = null;
var inst_17084 = (0);
var inst_17085 = (0);
var state_17130__$1 = (function (){var statearr_17133 = state_17130;
(statearr_17133[(8)] = inst_17083);

(statearr_17133[(9)] = inst_17082);

(statearr_17133[(10)] = inst_17085);

(statearr_17133[(11)] = inst_17107);

(statearr_17133[(12)] = inst_17084);

return statearr_17133;
})();
var statearr_17134_17174 = state_17130__$1;
(statearr_17134_17174[(2)] = null);

(statearr_17134_17174[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17131 === (1))){
var state_17130__$1 = state_17130;
var statearr_17135_17175 = state_17130__$1;
(statearr_17135_17175[(2)] = null);

(statearr_17135_17175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17131 === (4))){
var inst_17071 = (state_17130[(13)]);
var inst_17071__$1 = (state_17130[(2)]);
var inst_17072 = (inst_17071__$1 == null);
var state_17130__$1 = (function (){var statearr_17136 = state_17130;
(statearr_17136[(13)] = inst_17071__$1);

return statearr_17136;
})();
if(cljs.core.truth_(inst_17072)){
var statearr_17137_17176 = state_17130__$1;
(statearr_17137_17176[(1)] = (5));

} else {
var statearr_17138_17177 = state_17130__$1;
(statearr_17138_17177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17131 === (15))){
var state_17130__$1 = state_17130;
var statearr_17142_17178 = state_17130__$1;
(statearr_17142_17178[(2)] = null);

(statearr_17142_17178[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17131 === (21))){
var state_17130__$1 = state_17130;
var statearr_17143_17179 = state_17130__$1;
(statearr_17143_17179[(2)] = null);

(statearr_17143_17179[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17131 === (13))){
var inst_17083 = (state_17130[(8)]);
var inst_17082 = (state_17130[(9)]);
var inst_17085 = (state_17130[(10)]);
var inst_17084 = (state_17130[(12)]);
var inst_17092 = (state_17130[(2)]);
var inst_17093 = (inst_17085 + (1));
var tmp17139 = inst_17083;
var tmp17140 = inst_17082;
var tmp17141 = inst_17084;
var inst_17082__$1 = tmp17140;
var inst_17083__$1 = tmp17139;
var inst_17084__$1 = tmp17141;
var inst_17085__$1 = inst_17093;
var state_17130__$1 = (function (){var statearr_17144 = state_17130;
(statearr_17144[(8)] = inst_17083__$1);

(statearr_17144[(9)] = inst_17082__$1);

(statearr_17144[(10)] = inst_17085__$1);

(statearr_17144[(14)] = inst_17092);

(statearr_17144[(12)] = inst_17084__$1);

return statearr_17144;
})();
var statearr_17145_17180 = state_17130__$1;
(statearr_17145_17180[(2)] = null);

(statearr_17145_17180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17131 === (22))){
var state_17130__$1 = state_17130;
var statearr_17146_17181 = state_17130__$1;
(statearr_17146_17181[(2)] = null);

(statearr_17146_17181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17131 === (6))){
var inst_17071 = (state_17130[(13)]);
var inst_17080 = f.call(null,inst_17071);
var inst_17081 = cljs.core.seq.call(null,inst_17080);
var inst_17082 = inst_17081;
var inst_17083 = null;
var inst_17084 = (0);
var inst_17085 = (0);
var state_17130__$1 = (function (){var statearr_17147 = state_17130;
(statearr_17147[(8)] = inst_17083);

(statearr_17147[(9)] = inst_17082);

(statearr_17147[(10)] = inst_17085);

(statearr_17147[(12)] = inst_17084);

return statearr_17147;
})();
var statearr_17148_17182 = state_17130__$1;
(statearr_17148_17182[(2)] = null);

(statearr_17148_17182[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17131 === (17))){
var inst_17096 = (state_17130[(7)]);
var inst_17100 = cljs.core.chunk_first.call(null,inst_17096);
var inst_17101 = cljs.core.chunk_rest.call(null,inst_17096);
var inst_17102 = cljs.core.count.call(null,inst_17100);
var inst_17082 = inst_17101;
var inst_17083 = inst_17100;
var inst_17084 = inst_17102;
var inst_17085 = (0);
var state_17130__$1 = (function (){var statearr_17149 = state_17130;
(statearr_17149[(8)] = inst_17083);

(statearr_17149[(9)] = inst_17082);

(statearr_17149[(10)] = inst_17085);

(statearr_17149[(12)] = inst_17084);

return statearr_17149;
})();
var statearr_17150_17183 = state_17130__$1;
(statearr_17150_17183[(2)] = null);

(statearr_17150_17183[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17131 === (3))){
var inst_17128 = (state_17130[(2)]);
var state_17130__$1 = state_17130;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17130__$1,inst_17128);
} else {
if((state_val_17131 === (12))){
var inst_17116 = (state_17130[(2)]);
var state_17130__$1 = state_17130;
var statearr_17151_17184 = state_17130__$1;
(statearr_17151_17184[(2)] = inst_17116);

(statearr_17151_17184[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17131 === (2))){
var state_17130__$1 = state_17130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17130__$1,(4),in$);
} else {
if((state_val_17131 === (23))){
var inst_17124 = (state_17130[(2)]);
var state_17130__$1 = state_17130;
var statearr_17152_17185 = state_17130__$1;
(statearr_17152_17185[(2)] = inst_17124);

(statearr_17152_17185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17131 === (19))){
var inst_17111 = (state_17130[(2)]);
var state_17130__$1 = state_17130;
var statearr_17153_17186 = state_17130__$1;
(statearr_17153_17186[(2)] = inst_17111);

(statearr_17153_17186[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17131 === (11))){
var inst_17082 = (state_17130[(9)]);
var inst_17096 = (state_17130[(7)]);
var inst_17096__$1 = cljs.core.seq.call(null,inst_17082);
var state_17130__$1 = (function (){var statearr_17154 = state_17130;
(statearr_17154[(7)] = inst_17096__$1);

return statearr_17154;
})();
if(inst_17096__$1){
var statearr_17155_17187 = state_17130__$1;
(statearr_17155_17187[(1)] = (14));

} else {
var statearr_17156_17188 = state_17130__$1;
(statearr_17156_17188[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17131 === (9))){
var inst_17118 = (state_17130[(2)]);
var inst_17119 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_17130__$1 = (function (){var statearr_17157 = state_17130;
(statearr_17157[(15)] = inst_17118);

return statearr_17157;
})();
if(cljs.core.truth_(inst_17119)){
var statearr_17158_17189 = state_17130__$1;
(statearr_17158_17189[(1)] = (21));

} else {
var statearr_17159_17190 = state_17130__$1;
(statearr_17159_17190[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17131 === (5))){
var inst_17074 = cljs.core.async.close_BANG_.call(null,out);
var state_17130__$1 = state_17130;
var statearr_17160_17191 = state_17130__$1;
(statearr_17160_17191[(2)] = inst_17074);

(statearr_17160_17191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17131 === (14))){
var inst_17096 = (state_17130[(7)]);
var inst_17098 = cljs.core.chunked_seq_QMARK_.call(null,inst_17096);
var state_17130__$1 = state_17130;
if(inst_17098){
var statearr_17161_17192 = state_17130__$1;
(statearr_17161_17192[(1)] = (17));

} else {
var statearr_17162_17193 = state_17130__$1;
(statearr_17162_17193[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17131 === (16))){
var inst_17114 = (state_17130[(2)]);
var state_17130__$1 = state_17130;
var statearr_17163_17194 = state_17130__$1;
(statearr_17163_17194[(2)] = inst_17114);

(statearr_17163_17194[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17131 === (10))){
var inst_17083 = (state_17130[(8)]);
var inst_17085 = (state_17130[(10)]);
var inst_17090 = cljs.core._nth.call(null,inst_17083,inst_17085);
var state_17130__$1 = state_17130;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17130__$1,(13),out,inst_17090);
} else {
if((state_val_17131 === (18))){
var inst_17096 = (state_17130[(7)]);
var inst_17105 = cljs.core.first.call(null,inst_17096);
var state_17130__$1 = state_17130;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17130__$1,(20),out,inst_17105);
} else {
if((state_val_17131 === (8))){
var inst_17085 = (state_17130[(10)]);
var inst_17084 = (state_17130[(12)]);
var inst_17087 = (inst_17085 < inst_17084);
var inst_17088 = inst_17087;
var state_17130__$1 = state_17130;
if(cljs.core.truth_(inst_17088)){
var statearr_17164_17195 = state_17130__$1;
(statearr_17164_17195[(1)] = (10));

} else {
var statearr_17165_17196 = state_17130__$1;
(statearr_17165_17196[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6351__auto__))
;
return ((function (switch__6295__auto__,c__6351__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__6296__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__6296__auto____0 = (function (){
var statearr_17169 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17169[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__6296__auto__);

(statearr_17169[(1)] = (1));

return statearr_17169;
});
var cljs$core$async$mapcat_STAR__$_state_machine__6296__auto____1 = (function (state_17130){
while(true){
var ret_value__6297__auto__ = (function (){try{while(true){
var result__6298__auto__ = switch__6295__auto__.call(null,state_17130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6298__auto__;
}
break;
}
}catch (e17170){if((e17170 instanceof Object)){
var ex__6299__auto__ = e17170;
var statearr_17171_17197 = state_17130;
(statearr_17171_17197[(5)] = ex__6299__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17198 = state_17130;
state_17130 = G__17198;
continue;
} else {
return ret_value__6297__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__6296__auto__ = function(state_17130){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__6296__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__6296__auto____1.call(this,state_17130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__6296__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__6296__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__6296__auto__;
})()
;})(switch__6295__auto__,c__6351__auto__))
})();
var state__6353__auto__ = (function (){var statearr_17172 = f__6352__auto__.call(null);
(statearr_17172[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6351__auto__);

return statearr_17172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6353__auto__);
});})(c__6351__auto__))
);

return c__6351__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function() {
var cljs$core$async$mapcat_LT_ = null;
var cljs$core$async$mapcat_LT___2 = (function (f,in$){
return cljs$core$async$mapcat_LT_.call(null,f,in$,null);
});
var cljs$core$async$mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
cljs$core$async$mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$mapcat_LT___2.call(this,f,in$);
case 3:
return cljs$core$async$mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$mapcat_LT___2;
cljs$core$async$mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$mapcat_LT___3;
return cljs$core$async$mapcat_LT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function() {
var cljs$core$async$mapcat_GT_ = null;
var cljs$core$async$mapcat_GT___2 = (function (f,out){
return cljs$core$async$mapcat_GT_.call(null,f,out,null);
});
var cljs$core$async$mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
cljs$core$async$mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$mapcat_GT___2.call(this,f,out);
case 3:
return cljs$core$async$mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$mapcat_GT___2;
cljs$core$async$mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$mapcat_GT___3;
return cljs$core$async$mapcat_GT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function() {
var cljs$core$async$unique = null;
var cljs$core$async$unique__1 = (function (ch){
return cljs$core$async$unique.call(null,ch,null);
});
var cljs$core$async$unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6351__auto___17295 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6351__auto___17295,out){
return (function (){
var f__6352__auto__ = (function (){var switch__6295__auto__ = ((function (c__6351__auto___17295,out){
return (function (state_17270){
var state_val_17271 = (state_17270[(1)]);
if((state_val_17271 === (7))){
var inst_17265 = (state_17270[(2)]);
var state_17270__$1 = state_17270;
var statearr_17272_17296 = state_17270__$1;
(statearr_17272_17296[(2)] = inst_17265);

(statearr_17272_17296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17271 === (1))){
var inst_17247 = null;
var state_17270__$1 = (function (){var statearr_17273 = state_17270;
(statearr_17273[(7)] = inst_17247);

return statearr_17273;
})();
var statearr_17274_17297 = state_17270__$1;
(statearr_17274_17297[(2)] = null);

(statearr_17274_17297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17271 === (4))){
var inst_17250 = (state_17270[(8)]);
var inst_17250__$1 = (state_17270[(2)]);
var inst_17251 = (inst_17250__$1 == null);
var inst_17252 = cljs.core.not.call(null,inst_17251);
var state_17270__$1 = (function (){var statearr_17275 = state_17270;
(statearr_17275[(8)] = inst_17250__$1);

return statearr_17275;
})();
if(inst_17252){
var statearr_17276_17298 = state_17270__$1;
(statearr_17276_17298[(1)] = (5));

} else {
var statearr_17277_17299 = state_17270__$1;
(statearr_17277_17299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17271 === (6))){
var state_17270__$1 = state_17270;
var statearr_17278_17300 = state_17270__$1;
(statearr_17278_17300[(2)] = null);

(statearr_17278_17300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17271 === (3))){
var inst_17267 = (state_17270[(2)]);
var inst_17268 = cljs.core.async.close_BANG_.call(null,out);
var state_17270__$1 = (function (){var statearr_17279 = state_17270;
(statearr_17279[(9)] = inst_17267);

return statearr_17279;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17270__$1,inst_17268);
} else {
if((state_val_17271 === (2))){
var state_17270__$1 = state_17270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17270__$1,(4),ch);
} else {
if((state_val_17271 === (11))){
var inst_17250 = (state_17270[(8)]);
var inst_17259 = (state_17270[(2)]);
var inst_17247 = inst_17250;
var state_17270__$1 = (function (){var statearr_17280 = state_17270;
(statearr_17280[(10)] = inst_17259);

(statearr_17280[(7)] = inst_17247);

return statearr_17280;
})();
var statearr_17281_17301 = state_17270__$1;
(statearr_17281_17301[(2)] = null);

(statearr_17281_17301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17271 === (9))){
var inst_17250 = (state_17270[(8)]);
var state_17270__$1 = state_17270;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17270__$1,(11),out,inst_17250);
} else {
if((state_val_17271 === (5))){
var inst_17247 = (state_17270[(7)]);
var inst_17250 = (state_17270[(8)]);
var inst_17254 = cljs.core._EQ_.call(null,inst_17250,inst_17247);
var state_17270__$1 = state_17270;
if(inst_17254){
var statearr_17283_17302 = state_17270__$1;
(statearr_17283_17302[(1)] = (8));

} else {
var statearr_17284_17303 = state_17270__$1;
(statearr_17284_17303[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17271 === (10))){
var inst_17262 = (state_17270[(2)]);
var state_17270__$1 = state_17270;
var statearr_17285_17304 = state_17270__$1;
(statearr_17285_17304[(2)] = inst_17262);

(statearr_17285_17304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17271 === (8))){
var inst_17247 = (state_17270[(7)]);
var tmp17282 = inst_17247;
var inst_17247__$1 = tmp17282;
var state_17270__$1 = (function (){var statearr_17286 = state_17270;
(statearr_17286[(7)] = inst_17247__$1);

return statearr_17286;
})();
var statearr_17287_17305 = state_17270__$1;
(statearr_17287_17305[(2)] = null);

(statearr_17287_17305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6351__auto___17295,out))
;
return ((function (switch__6295__auto__,c__6351__auto___17295,out){
return (function() {
var cljs$core$async$unique_$_state_machine__6296__auto__ = null;
var cljs$core$async$unique_$_state_machine__6296__auto____0 = (function (){
var statearr_17291 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17291[(0)] = cljs$core$async$unique_$_state_machine__6296__auto__);

(statearr_17291[(1)] = (1));

return statearr_17291;
});
var cljs$core$async$unique_$_state_machine__6296__auto____1 = (function (state_17270){
while(true){
var ret_value__6297__auto__ = (function (){try{while(true){
var result__6298__auto__ = switch__6295__auto__.call(null,state_17270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6298__auto__;
}
break;
}
}catch (e17292){if((e17292 instanceof Object)){
var ex__6299__auto__ = e17292;
var statearr_17293_17306 = state_17270;
(statearr_17293_17306[(5)] = ex__6299__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17292;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17307 = state_17270;
state_17270 = G__17307;
continue;
} else {
return ret_value__6297__auto__;
}
break;
}
});
cljs$core$async$unique_$_state_machine__6296__auto__ = function(state_17270){
switch(arguments.length){
case 0:
return cljs$core$async$unique_$_state_machine__6296__auto____0.call(this);
case 1:
return cljs$core$async$unique_$_state_machine__6296__auto____1.call(this,state_17270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique_$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$unique_$_state_machine__6296__auto____0;
cljs$core$async$unique_$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique_$_state_machine__6296__auto____1;
return cljs$core$async$unique_$_state_machine__6296__auto__;
})()
;})(switch__6295__auto__,c__6351__auto___17295,out))
})();
var state__6353__auto__ = (function (){var statearr_17294 = f__6352__auto__.call(null);
(statearr_17294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6351__auto___17295);

return statearr_17294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6353__auto__);
});})(c__6351__auto___17295,out))
);


return out;
});
cljs$core$async$unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return cljs$core$async$unique__1.call(this,ch);
case 2:
return cljs$core$async$unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique__1;
cljs$core$async$unique.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unique__2;
return cljs$core$async$unique;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function() {
var cljs$core$async$partition = null;
var cljs$core$async$partition__2 = (function (n,ch){
return cljs$core$async$partition.call(null,n,ch,null);
});
var cljs$core$async$partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6351__auto___17442 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6351__auto___17442,out){
return (function (){
var f__6352__auto__ = (function (){var switch__6295__auto__ = ((function (c__6351__auto___17442,out){
return (function (state_17412){
var state_val_17413 = (state_17412[(1)]);
if((state_val_17413 === (7))){
var inst_17408 = (state_17412[(2)]);
var state_17412__$1 = state_17412;
var statearr_17414_17443 = state_17412__$1;
(statearr_17414_17443[(2)] = inst_17408);

(statearr_17414_17443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17413 === (1))){
var inst_17375 = (new Array(n));
var inst_17376 = inst_17375;
var inst_17377 = (0);
var state_17412__$1 = (function (){var statearr_17415 = state_17412;
(statearr_17415[(7)] = inst_17377);

(statearr_17415[(8)] = inst_17376);

return statearr_17415;
})();
var statearr_17416_17444 = state_17412__$1;
(statearr_17416_17444[(2)] = null);

(statearr_17416_17444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17413 === (4))){
var inst_17380 = (state_17412[(9)]);
var inst_17380__$1 = (state_17412[(2)]);
var inst_17381 = (inst_17380__$1 == null);
var inst_17382 = cljs.core.not.call(null,inst_17381);
var state_17412__$1 = (function (){var statearr_17417 = state_17412;
(statearr_17417[(9)] = inst_17380__$1);

return statearr_17417;
})();
if(inst_17382){
var statearr_17418_17445 = state_17412__$1;
(statearr_17418_17445[(1)] = (5));

} else {
var statearr_17419_17446 = state_17412__$1;
(statearr_17419_17446[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17413 === (15))){
var inst_17402 = (state_17412[(2)]);
var state_17412__$1 = state_17412;
var statearr_17420_17447 = state_17412__$1;
(statearr_17420_17447[(2)] = inst_17402);

(statearr_17420_17447[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17413 === (13))){
var state_17412__$1 = state_17412;
var statearr_17421_17448 = state_17412__$1;
(statearr_17421_17448[(2)] = null);

(statearr_17421_17448[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17413 === (6))){
var inst_17377 = (state_17412[(7)]);
var inst_17398 = (inst_17377 > (0));
var state_17412__$1 = state_17412;
if(cljs.core.truth_(inst_17398)){
var statearr_17422_17449 = state_17412__$1;
(statearr_17422_17449[(1)] = (12));

} else {
var statearr_17423_17450 = state_17412__$1;
(statearr_17423_17450[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17413 === (3))){
var inst_17410 = (state_17412[(2)]);
var state_17412__$1 = state_17412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17412__$1,inst_17410);
} else {
if((state_val_17413 === (12))){
var inst_17376 = (state_17412[(8)]);
var inst_17400 = cljs.core.vec.call(null,inst_17376);
var state_17412__$1 = state_17412;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17412__$1,(15),out,inst_17400);
} else {
if((state_val_17413 === (2))){
var state_17412__$1 = state_17412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17412__$1,(4),ch);
} else {
if((state_val_17413 === (11))){
var inst_17392 = (state_17412[(2)]);
var inst_17393 = (new Array(n));
var inst_17376 = inst_17393;
var inst_17377 = (0);
var state_17412__$1 = (function (){var statearr_17424 = state_17412;
(statearr_17424[(7)] = inst_17377);

(statearr_17424[(10)] = inst_17392);

(statearr_17424[(8)] = inst_17376);

return statearr_17424;
})();
var statearr_17425_17451 = state_17412__$1;
(statearr_17425_17451[(2)] = null);

(statearr_17425_17451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17413 === (9))){
var inst_17376 = (state_17412[(8)]);
var inst_17390 = cljs.core.vec.call(null,inst_17376);
var state_17412__$1 = state_17412;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17412__$1,(11),out,inst_17390);
} else {
if((state_val_17413 === (5))){
var inst_17385 = (state_17412[(11)]);
var inst_17377 = (state_17412[(7)]);
var inst_17376 = (state_17412[(8)]);
var inst_17380 = (state_17412[(9)]);
var inst_17384 = (inst_17376[inst_17377] = inst_17380);
var inst_17385__$1 = (inst_17377 + (1));
var inst_17386 = (inst_17385__$1 < n);
var state_17412__$1 = (function (){var statearr_17426 = state_17412;
(statearr_17426[(12)] = inst_17384);

(statearr_17426[(11)] = inst_17385__$1);

return statearr_17426;
})();
if(cljs.core.truth_(inst_17386)){
var statearr_17427_17452 = state_17412__$1;
(statearr_17427_17452[(1)] = (8));

} else {
var statearr_17428_17453 = state_17412__$1;
(statearr_17428_17453[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17413 === (14))){
var inst_17405 = (state_17412[(2)]);
var inst_17406 = cljs.core.async.close_BANG_.call(null,out);
var state_17412__$1 = (function (){var statearr_17430 = state_17412;
(statearr_17430[(13)] = inst_17405);

return statearr_17430;
})();
var statearr_17431_17454 = state_17412__$1;
(statearr_17431_17454[(2)] = inst_17406);

(statearr_17431_17454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17413 === (10))){
var inst_17396 = (state_17412[(2)]);
var state_17412__$1 = state_17412;
var statearr_17432_17455 = state_17412__$1;
(statearr_17432_17455[(2)] = inst_17396);

(statearr_17432_17455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17413 === (8))){
var inst_17385 = (state_17412[(11)]);
var inst_17376 = (state_17412[(8)]);
var tmp17429 = inst_17376;
var inst_17376__$1 = tmp17429;
var inst_17377 = inst_17385;
var state_17412__$1 = (function (){var statearr_17433 = state_17412;
(statearr_17433[(7)] = inst_17377);

(statearr_17433[(8)] = inst_17376__$1);

return statearr_17433;
})();
var statearr_17434_17456 = state_17412__$1;
(statearr_17434_17456[(2)] = null);

(statearr_17434_17456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6351__auto___17442,out))
;
return ((function (switch__6295__auto__,c__6351__auto___17442,out){
return (function() {
var cljs$core$async$partition_$_state_machine__6296__auto__ = null;
var cljs$core$async$partition_$_state_machine__6296__auto____0 = (function (){
var statearr_17438 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17438[(0)] = cljs$core$async$partition_$_state_machine__6296__auto__);

(statearr_17438[(1)] = (1));

return statearr_17438;
});
var cljs$core$async$partition_$_state_machine__6296__auto____1 = (function (state_17412){
while(true){
var ret_value__6297__auto__ = (function (){try{while(true){
var result__6298__auto__ = switch__6295__auto__.call(null,state_17412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6298__auto__;
}
break;
}
}catch (e17439){if((e17439 instanceof Object)){
var ex__6299__auto__ = e17439;
var statearr_17440_17457 = state_17412;
(statearr_17440_17457[(5)] = ex__6299__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17458 = state_17412;
state_17412 = G__17458;
continue;
} else {
return ret_value__6297__auto__;
}
break;
}
});
cljs$core$async$partition_$_state_machine__6296__auto__ = function(state_17412){
switch(arguments.length){
case 0:
return cljs$core$async$partition_$_state_machine__6296__auto____0.call(this);
case 1:
return cljs$core$async$partition_$_state_machine__6296__auto____1.call(this,state_17412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_$_state_machine__6296__auto____0;
cljs$core$async$partition_$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_$_state_machine__6296__auto____1;
return cljs$core$async$partition_$_state_machine__6296__auto__;
})()
;})(switch__6295__auto__,c__6351__auto___17442,out))
})();
var state__6353__auto__ = (function (){var statearr_17441 = f__6352__auto__.call(null);
(statearr_17441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6351__auto___17442);

return statearr_17441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6353__auto__);
});})(c__6351__auto___17442,out))
);


return out;
});
cljs$core$async$partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$partition__2.call(this,n,ch);
case 3:
return cljs$core$async$partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$partition__2;
cljs$core$async$partition.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$partition__3;
return cljs$core$async$partition;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function() {
var cljs$core$async$partition_by = null;
var cljs$core$async$partition_by__2 = (function (f,ch){
return cljs$core$async$partition_by.call(null,f,ch,null);
});
var cljs$core$async$partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6351__auto___17601 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6351__auto___17601,out){
return (function (){
var f__6352__auto__ = (function (){var switch__6295__auto__ = ((function (c__6351__auto___17601,out){
return (function (state_17571){
var state_val_17572 = (state_17571[(1)]);
if((state_val_17572 === (7))){
var inst_17567 = (state_17571[(2)]);
var state_17571__$1 = state_17571;
var statearr_17573_17602 = state_17571__$1;
(statearr_17573_17602[(2)] = inst_17567);

(statearr_17573_17602[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17572 === (1))){
var inst_17530 = [];
var inst_17531 = inst_17530;
var inst_17532 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17571__$1 = (function (){var statearr_17574 = state_17571;
(statearr_17574[(7)] = inst_17532);

(statearr_17574[(8)] = inst_17531);

return statearr_17574;
})();
var statearr_17575_17603 = state_17571__$1;
(statearr_17575_17603[(2)] = null);

(statearr_17575_17603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17572 === (4))){
var inst_17535 = (state_17571[(9)]);
var inst_17535__$1 = (state_17571[(2)]);
var inst_17536 = (inst_17535__$1 == null);
var inst_17537 = cljs.core.not.call(null,inst_17536);
var state_17571__$1 = (function (){var statearr_17576 = state_17571;
(statearr_17576[(9)] = inst_17535__$1);

return statearr_17576;
})();
if(inst_17537){
var statearr_17577_17604 = state_17571__$1;
(statearr_17577_17604[(1)] = (5));

} else {
var statearr_17578_17605 = state_17571__$1;
(statearr_17578_17605[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17572 === (15))){
var inst_17561 = (state_17571[(2)]);
var state_17571__$1 = state_17571;
var statearr_17579_17606 = state_17571__$1;
(statearr_17579_17606[(2)] = inst_17561);

(statearr_17579_17606[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17572 === (13))){
var state_17571__$1 = state_17571;
var statearr_17580_17607 = state_17571__$1;
(statearr_17580_17607[(2)] = null);

(statearr_17580_17607[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17572 === (6))){
var inst_17531 = (state_17571[(8)]);
var inst_17556 = inst_17531.length;
var inst_17557 = (inst_17556 > (0));
var state_17571__$1 = state_17571;
if(cljs.core.truth_(inst_17557)){
var statearr_17581_17608 = state_17571__$1;
(statearr_17581_17608[(1)] = (12));

} else {
var statearr_17582_17609 = state_17571__$1;
(statearr_17582_17609[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17572 === (3))){
var inst_17569 = (state_17571[(2)]);
var state_17571__$1 = state_17571;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17571__$1,inst_17569);
} else {
if((state_val_17572 === (12))){
var inst_17531 = (state_17571[(8)]);
var inst_17559 = cljs.core.vec.call(null,inst_17531);
var state_17571__$1 = state_17571;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17571__$1,(15),out,inst_17559);
} else {
if((state_val_17572 === (2))){
var state_17571__$1 = state_17571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17571__$1,(4),ch);
} else {
if((state_val_17572 === (11))){
var inst_17539 = (state_17571[(10)]);
var inst_17535 = (state_17571[(9)]);
var inst_17549 = (state_17571[(2)]);
var inst_17550 = [];
var inst_17551 = inst_17550.push(inst_17535);
var inst_17531 = inst_17550;
var inst_17532 = inst_17539;
var state_17571__$1 = (function (){var statearr_17583 = state_17571;
(statearr_17583[(11)] = inst_17549);

(statearr_17583[(7)] = inst_17532);

(statearr_17583[(8)] = inst_17531);

(statearr_17583[(12)] = inst_17551);

return statearr_17583;
})();
var statearr_17584_17610 = state_17571__$1;
(statearr_17584_17610[(2)] = null);

(statearr_17584_17610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17572 === (9))){
var inst_17531 = (state_17571[(8)]);
var inst_17547 = cljs.core.vec.call(null,inst_17531);
var state_17571__$1 = state_17571;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17571__$1,(11),out,inst_17547);
} else {
if((state_val_17572 === (5))){
var inst_17539 = (state_17571[(10)]);
var inst_17532 = (state_17571[(7)]);
var inst_17535 = (state_17571[(9)]);
var inst_17539__$1 = f.call(null,inst_17535);
var inst_17540 = cljs.core._EQ_.call(null,inst_17539__$1,inst_17532);
var inst_17541 = cljs.core.keyword_identical_QMARK_.call(null,inst_17532,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_17542 = (inst_17540) || (inst_17541);
var state_17571__$1 = (function (){var statearr_17585 = state_17571;
(statearr_17585[(10)] = inst_17539__$1);

return statearr_17585;
})();
if(cljs.core.truth_(inst_17542)){
var statearr_17586_17611 = state_17571__$1;
(statearr_17586_17611[(1)] = (8));

} else {
var statearr_17587_17612 = state_17571__$1;
(statearr_17587_17612[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17572 === (14))){
var inst_17564 = (state_17571[(2)]);
var inst_17565 = cljs.core.async.close_BANG_.call(null,out);
var state_17571__$1 = (function (){var statearr_17589 = state_17571;
(statearr_17589[(13)] = inst_17564);

return statearr_17589;
})();
var statearr_17590_17613 = state_17571__$1;
(statearr_17590_17613[(2)] = inst_17565);

(statearr_17590_17613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17572 === (10))){
var inst_17554 = (state_17571[(2)]);
var state_17571__$1 = state_17571;
var statearr_17591_17614 = state_17571__$1;
(statearr_17591_17614[(2)] = inst_17554);

(statearr_17591_17614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17572 === (8))){
var inst_17539 = (state_17571[(10)]);
var inst_17531 = (state_17571[(8)]);
var inst_17535 = (state_17571[(9)]);
var inst_17544 = inst_17531.push(inst_17535);
var tmp17588 = inst_17531;
var inst_17531__$1 = tmp17588;
var inst_17532 = inst_17539;
var state_17571__$1 = (function (){var statearr_17592 = state_17571;
(statearr_17592[(7)] = inst_17532);

(statearr_17592[(8)] = inst_17531__$1);

(statearr_17592[(14)] = inst_17544);

return statearr_17592;
})();
var statearr_17593_17615 = state_17571__$1;
(statearr_17593_17615[(2)] = null);

(statearr_17593_17615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6351__auto___17601,out))
;
return ((function (switch__6295__auto__,c__6351__auto___17601,out){
return (function() {
var cljs$core$async$partition_by_$_state_machine__6296__auto__ = null;
var cljs$core$async$partition_by_$_state_machine__6296__auto____0 = (function (){
var statearr_17597 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17597[(0)] = cljs$core$async$partition_by_$_state_machine__6296__auto__);

(statearr_17597[(1)] = (1));

return statearr_17597;
});
var cljs$core$async$partition_by_$_state_machine__6296__auto____1 = (function (state_17571){
while(true){
var ret_value__6297__auto__ = (function (){try{while(true){
var result__6298__auto__ = switch__6295__auto__.call(null,state_17571);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6298__auto__;
}
break;
}
}catch (e17598){if((e17598 instanceof Object)){
var ex__6299__auto__ = e17598;
var statearr_17599_17616 = state_17571;
(statearr_17599_17616[(5)] = ex__6299__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17617 = state_17571;
state_17571 = G__17617;
continue;
} else {
return ret_value__6297__auto__;
}
break;
}
});
cljs$core$async$partition_by_$_state_machine__6296__auto__ = function(state_17571){
switch(arguments.length){
case 0:
return cljs$core$async$partition_by_$_state_machine__6296__auto____0.call(this);
case 1:
return cljs$core$async$partition_by_$_state_machine__6296__auto____1.call(this,state_17571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by_$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_by_$_state_machine__6296__auto____0;
cljs$core$async$partition_by_$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_by_$_state_machine__6296__auto____1;
return cljs$core$async$partition_by_$_state_machine__6296__auto__;
})()
;})(switch__6295__auto__,c__6351__auto___17601,out))
})();
var state__6353__auto__ = (function (){var statearr_17600 = f__6352__auto__.call(null);
(statearr_17600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6351__auto___17601);

return statearr_17600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6353__auto__);
});})(c__6351__auto___17601,out))
);


return out;
});
cljs$core$async$partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$partition_by__2.call(this,f,ch);
case 3:
return cljs$core$async$partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$partition_by__2;
cljs$core$async$partition_by.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$partition_by__3;
return cljs$core$async$partition_by;
})()
;

//# sourceMappingURL=async.js.map?rel=1426863543658