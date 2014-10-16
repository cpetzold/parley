// Compiled by ClojureScript 0.0-2311
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t24604 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24604 = (function (f,fn_handler,meta24605){
this.f = f;
this.fn_handler = fn_handler;
this.meta24605 = meta24605;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24604.cljs$lang$type = true;
cljs.core.async.t24604.cljs$lang$ctorStr = "cljs.core.async/t24604";
cljs.core.async.t24604.cljs$lang$ctorPrWriter = (function (this__8461__auto__,writer__8462__auto__,opt__8463__auto__){return cljs.core._write.call(null,writer__8462__auto__,"cljs.core.async/t24604");
});
cljs.core.async.t24604.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24604.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t24604.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t24604.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24606){var self__ = this;
var _24606__$1 = this;return self__.meta24605;
});
cljs.core.async.t24604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24606,meta24605__$1){var self__ = this;
var _24606__$1 = this;return (new cljs.core.async.t24604(self__.f,self__.fn_handler,meta24605__$1));
});
cljs.core.async.__GT_t24604 = (function __GT_t24604(f__$1,fn_handler__$1,meta24605){return (new cljs.core.async.t24604(f__$1,fn_handler__$1,meta24605));
});
}
return (new cljs.core.async.t24604(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__24608 = buff;if(G__24608)
{var bit__8544__auto__ = null;if(cljs.core.truth_((function (){var or__7894__auto__ = bit__8544__auto__;if(cljs.core.truth_(or__7894__auto__))
{return or__7894__auto__;
} else
{return G__24608.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__24608.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24608);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24608);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_24609 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_24609);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_24609,ret){
return (function (){return fn1.call(null,val_24609);
});})(val_24609,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__7882__auto__ = ret;if(cljs.core.truth_(and__7882__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__7882__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8750__auto___24610 = n;var x_24611 = (0);while(true){
if((x_24611 < n__8750__auto___24610))
{(a[x_24611] = (0));
{
var G__24612 = (x_24611 + (1));
x_24611 = G__24612;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__24613 = (i + (1));
i = G__24613;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t24617 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24617 = (function (flag,alt_flag,meta24618){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24618 = meta24618;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24617.cljs$lang$type = true;
cljs.core.async.t24617.cljs$lang$ctorStr = "cljs.core.async/t24617";
cljs.core.async.t24617.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8461__auto__,writer__8462__auto__,opt__8463__auto__){return cljs.core._write.call(null,writer__8462__auto__,"cljs.core.async/t24617");
});})(flag))
;
cljs.core.async.t24617.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24617.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t24617.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t24617.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24619){var self__ = this;
var _24619__$1 = this;return self__.meta24618;
});})(flag))
;
cljs.core.async.t24617.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24619,meta24618__$1){var self__ = this;
var _24619__$1 = this;return (new cljs.core.async.t24617(self__.flag,self__.alt_flag,meta24618__$1));
});})(flag))
;
cljs.core.async.__GT_t24617 = ((function (flag){
return (function __GT_t24617(flag__$1,alt_flag__$1,meta24618){return (new cljs.core.async.t24617(flag__$1,alt_flag__$1,meta24618));
});})(flag))
;
}
return (new cljs.core.async.t24617(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t24623 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24623 = (function (cb,flag,alt_handler,meta24624){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24624 = meta24624;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24623.cljs$lang$type = true;
cljs.core.async.t24623.cljs$lang$ctorStr = "cljs.core.async/t24623";
cljs.core.async.t24623.cljs$lang$ctorPrWriter = (function (this__8461__auto__,writer__8462__auto__,opt__8463__auto__){return cljs.core._write.call(null,writer__8462__auto__,"cljs.core.async/t24623");
});
cljs.core.async.t24623.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24623.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t24623.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t24623.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24625){var self__ = this;
var _24625__$1 = this;return self__.meta24624;
});
cljs.core.async.t24623.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24625,meta24624__$1){var self__ = this;
var _24625__$1 = this;return (new cljs.core.async.t24623(self__.cb,self__.flag,self__.alt_handler,meta24624__$1));
});
cljs.core.async.__GT_t24623 = (function __GT_t24623(cb__$1,flag__$1,alt_handler__$1,meta24624){return (new cljs.core.async.t24623(cb__$1,flag__$1,alt_handler__$1,meta24624));
});
}
return (new cljs.core.async.t24623(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24626_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24626_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__7894__auto__ = wport;if(cljs.core.truth_(or__7894__auto__))
{return or__7894__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__24627 = (i + (1));
i = G__24627;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__7894__auto__ = ret;if(cljs.core.truth_(or__7894__auto__))
{return or__7894__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__7882__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__7882__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__7882__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
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
var alts_BANG___delegate = function (ports,p__24628){var map__24630 = p__24628;var map__24630__$1 = ((cljs.core.seq_QMARK_.call(null,map__24630))?cljs.core.apply.call(null,cljs.core.hash_map,map__24630):map__24630);var opts = map__24630__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__24628 = null;if (arguments.length > 1) {
  p__24628 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__24628);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__24631){
var ports = cljs.core.first(arglist__24631);
var p__24628 = cljs.core.rest(arglist__24631);
return alts_BANG___delegate(ports,p__24628);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t24639 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24639 = (function (ch,f,map_LT_,meta24640){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24640 = meta24640;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24639.cljs$lang$type = true;
cljs.core.async.t24639.cljs$lang$ctorStr = "cljs.core.async/t24639";
cljs.core.async.t24639.cljs$lang$ctorPrWriter = (function (this__8461__auto__,writer__8462__auto__,opt__8463__auto__){return cljs.core._write.call(null,writer__8462__auto__,"cljs.core.async/t24639");
});
cljs.core.async.t24639.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24639.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t24639.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24639.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t24642 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24642 = (function (fn1,_,meta24640,ch,f,map_LT_,meta24643){
this.fn1 = fn1;
this._ = _;
this.meta24640 = meta24640;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24643 = meta24643;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24642.cljs$lang$type = true;
cljs.core.async.t24642.cljs$lang$ctorStr = "cljs.core.async/t24642";
cljs.core.async.t24642.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8461__auto__,writer__8462__auto__,opt__8463__auto__){return cljs.core._write.call(null,writer__8462__auto__,"cljs.core.async/t24642");
});})(___$1))
;
cljs.core.async.t24642.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24642.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t24642.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t24642.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__24632_SHARP_){return f1.call(null,(((p1__24632_SHARP_ == null))?null:self__.f.call(null,p1__24632_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t24642.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24644){var self__ = this;
var _24644__$1 = this;return self__.meta24643;
});})(___$1))
;
cljs.core.async.t24642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24644,meta24643__$1){var self__ = this;
var _24644__$1 = this;return (new cljs.core.async.t24642(self__.fn1,self__._,self__.meta24640,self__.ch,self__.f,self__.map_LT_,meta24643__$1));
});})(___$1))
;
cljs.core.async.__GT_t24642 = ((function (___$1){
return (function __GT_t24642(fn1__$1,___$2,meta24640__$1,ch__$2,f__$2,map_LT___$2,meta24643){return (new cljs.core.async.t24642(fn1__$1,___$2,meta24640__$1,ch__$2,f__$2,map_LT___$2,meta24643));
});})(___$1))
;
}
return (new cljs.core.async.t24642(fn1,___$1,self__.meta24640,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__7882__auto__ = ret;if(cljs.core.truth_(and__7882__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__7882__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t24639.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24639.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t24639.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24641){var self__ = this;
var _24641__$1 = this;return self__.meta24640;
});
cljs.core.async.t24639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24641,meta24640__$1){var self__ = this;
var _24641__$1 = this;return (new cljs.core.async.t24639(self__.ch,self__.f,self__.map_LT_,meta24640__$1));
});
cljs.core.async.__GT_t24639 = (function __GT_t24639(ch__$1,f__$1,map_LT___$1,meta24640){return (new cljs.core.async.t24639(ch__$1,f__$1,map_LT___$1,meta24640));
});
}
return (new cljs.core.async.t24639(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t24648 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24648 = (function (ch,f,map_GT_,meta24649){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta24649 = meta24649;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24648.cljs$lang$type = true;
cljs.core.async.t24648.cljs$lang$ctorStr = "cljs.core.async/t24648";
cljs.core.async.t24648.cljs$lang$ctorPrWriter = (function (this__8461__auto__,writer__8462__auto__,opt__8463__auto__){return cljs.core._write.call(null,writer__8462__auto__,"cljs.core.async/t24648");
});
cljs.core.async.t24648.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24648.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t24648.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24648.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t24648.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24648.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t24648.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24650){var self__ = this;
var _24650__$1 = this;return self__.meta24649;
});
cljs.core.async.t24648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24650,meta24649__$1){var self__ = this;
var _24650__$1 = this;return (new cljs.core.async.t24648(self__.ch,self__.f,self__.map_GT_,meta24649__$1));
});
cljs.core.async.__GT_t24648 = (function __GT_t24648(ch__$1,f__$1,map_GT___$1,meta24649){return (new cljs.core.async.t24648(ch__$1,f__$1,map_GT___$1,meta24649));
});
}
return (new cljs.core.async.t24648(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t24654 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24654 = (function (ch,p,filter_GT_,meta24655){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta24655 = meta24655;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24654.cljs$lang$type = true;
cljs.core.async.t24654.cljs$lang$ctorStr = "cljs.core.async/t24654";
cljs.core.async.t24654.cljs$lang$ctorPrWriter = (function (this__8461__auto__,writer__8462__auto__,opt__8463__auto__){return cljs.core._write.call(null,writer__8462__auto__,"cljs.core.async/t24654");
});
cljs.core.async.t24654.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24654.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t24654.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24654.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t24654.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24654.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t24654.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24656){var self__ = this;
var _24656__$1 = this;return self__.meta24655;
});
cljs.core.async.t24654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24656,meta24655__$1){var self__ = this;
var _24656__$1 = this;return (new cljs.core.async.t24654(self__.ch,self__.p,self__.filter_GT_,meta24655__$1));
});
cljs.core.async.__GT_t24654 = (function __GT_t24654(ch__$1,p__$1,filter_GT___$1,meta24655){return (new cljs.core.async.t24654(ch__$1,p__$1,filter_GT___$1,meta24655));
});
}
return (new cljs.core.async.t24654(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10959__auto___24739 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10959__auto___24739,out){
return (function (){var f__10960__auto__ = (function (){var switch__10894__auto__ = ((function (c__10959__auto___24739,out){
return (function (state_24718){var state_val_24719 = (state_24718[(1)]);if((state_val_24719 === (7)))
{var inst_24714 = (state_24718[(2)]);var state_24718__$1 = state_24718;var statearr_24720_24740 = state_24718__$1;(statearr_24720_24740[(2)] = inst_24714);
(statearr_24720_24740[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24719 === (1)))
{var state_24718__$1 = state_24718;var statearr_24721_24741 = state_24718__$1;(statearr_24721_24741[(2)] = null);
(statearr_24721_24741[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24719 === (4)))
{var inst_24700 = (state_24718[(7)]);var inst_24700__$1 = (state_24718[(2)]);var inst_24701 = (inst_24700__$1 == null);var state_24718__$1 = (function (){var statearr_24722 = state_24718;(statearr_24722[(7)] = inst_24700__$1);
return statearr_24722;
})();if(cljs.core.truth_(inst_24701))
{var statearr_24723_24742 = state_24718__$1;(statearr_24723_24742[(1)] = (5));
} else
{var statearr_24724_24743 = state_24718__$1;(statearr_24724_24743[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24719 === (6)))
{var inst_24700 = (state_24718[(7)]);var inst_24705 = p.call(null,inst_24700);var state_24718__$1 = state_24718;if(cljs.core.truth_(inst_24705))
{var statearr_24725_24744 = state_24718__$1;(statearr_24725_24744[(1)] = (8));
} else
{var statearr_24726_24745 = state_24718__$1;(statearr_24726_24745[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24719 === (3)))
{var inst_24716 = (state_24718[(2)]);var state_24718__$1 = state_24718;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24718__$1,inst_24716);
} else
{if((state_val_24719 === (2)))
{var state_24718__$1 = state_24718;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24718__$1,(4),ch);
} else
{if((state_val_24719 === (11)))
{var inst_24708 = (state_24718[(2)]);var state_24718__$1 = state_24718;var statearr_24727_24746 = state_24718__$1;(statearr_24727_24746[(2)] = inst_24708);
(statearr_24727_24746[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24719 === (9)))
{var state_24718__$1 = state_24718;var statearr_24728_24747 = state_24718__$1;(statearr_24728_24747[(2)] = null);
(statearr_24728_24747[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24719 === (5)))
{var inst_24703 = cljs.core.async.close_BANG_.call(null,out);var state_24718__$1 = state_24718;var statearr_24729_24748 = state_24718__$1;(statearr_24729_24748[(2)] = inst_24703);
(statearr_24729_24748[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24719 === (10)))
{var inst_24711 = (state_24718[(2)]);var state_24718__$1 = (function (){var statearr_24730 = state_24718;(statearr_24730[(8)] = inst_24711);
return statearr_24730;
})();var statearr_24731_24749 = state_24718__$1;(statearr_24731_24749[(2)] = null);
(statearr_24731_24749[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24719 === (8)))
{var inst_24700 = (state_24718[(7)]);var state_24718__$1 = state_24718;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24718__$1,(11),out,inst_24700);
} else
{return null;
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
});})(c__10959__auto___24739,out))
;return ((function (switch__10894__auto__,c__10959__auto___24739,out){
return (function() {
var state_machine__10895__auto__ = null;
var state_machine__10895__auto____0 = (function (){var statearr_24735 = [null,null,null,null,null,null,null,null,null];(statearr_24735[(0)] = state_machine__10895__auto__);
(statearr_24735[(1)] = (1));
return statearr_24735;
});
var state_machine__10895__auto____1 = (function (state_24718){while(true){
var ret_value__10896__auto__ = (function (){try{while(true){
var result__10897__auto__ = switch__10894__auto__.call(null,state_24718);if(cljs.core.keyword_identical_QMARK_.call(null,result__10897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10897__auto__;
}
break;
}
}catch (e24736){if((e24736 instanceof Object))
{var ex__10898__auto__ = e24736;var statearr_24737_24750 = state_24718;(statearr_24737_24750[(5)] = ex__10898__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24718);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24736;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24751 = state_24718;
state_24718 = G__24751;
continue;
}
} else
{return ret_value__10896__auto__;
}
break;
}
});
state_machine__10895__auto__ = function(state_24718){
switch(arguments.length){
case 0:
return state_machine__10895__auto____0.call(this);
case 1:
return state_machine__10895__auto____1.call(this,state_24718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10895__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10895__auto____0;
state_machine__10895__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10895__auto____1;
return state_machine__10895__auto__;
})()
;})(switch__10894__auto__,c__10959__auto___24739,out))
})();var state__10961__auto__ = (function (){var statearr_24738 = f__10960__auto__.call(null);(statearr_24738[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10959__auto___24739);
return statearr_24738;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10961__auto__);
});})(c__10959__auto___24739,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__10959__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10959__auto__){
return (function (){var f__10960__auto__ = (function (){var switch__10894__auto__ = ((function (c__10959__auto__){
return (function (state_24903){var state_val_24904 = (state_24903[(1)]);if((state_val_24904 === (7)))
{var inst_24899 = (state_24903[(2)]);var state_24903__$1 = state_24903;var statearr_24905_24942 = state_24903__$1;(statearr_24905_24942[(2)] = inst_24899);
(statearr_24905_24942[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24904 === (20)))
{var inst_24874 = (state_24903[(7)]);var inst_24885 = (state_24903[(2)]);var inst_24886 = cljs.core.next.call(null,inst_24874);var inst_24860 = inst_24886;var inst_24861 = null;var inst_24862 = (0);var inst_24863 = (0);var state_24903__$1 = (function (){var statearr_24906 = state_24903;(statearr_24906[(8)] = inst_24885);
(statearr_24906[(9)] = inst_24863);
(statearr_24906[(10)] = inst_24860);
(statearr_24906[(11)] = inst_24861);
(statearr_24906[(12)] = inst_24862);
return statearr_24906;
})();var statearr_24907_24943 = state_24903__$1;(statearr_24907_24943[(2)] = null);
(statearr_24907_24943[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24904 === (1)))
{var state_24903__$1 = state_24903;var statearr_24908_24944 = state_24903__$1;(statearr_24908_24944[(2)] = null);
(statearr_24908_24944[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24904 === (4)))
{var inst_24849 = (state_24903[(13)]);var inst_24849__$1 = (state_24903[(2)]);var inst_24850 = (inst_24849__$1 == null);var state_24903__$1 = (function (){var statearr_24912 = state_24903;(statearr_24912[(13)] = inst_24849__$1);
return statearr_24912;
})();if(cljs.core.truth_(inst_24850))
{var statearr_24913_24945 = state_24903__$1;(statearr_24913_24945[(1)] = (5));
} else
{var statearr_24914_24946 = state_24903__$1;(statearr_24914_24946[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24904 === (15)))
{var state_24903__$1 = state_24903;var statearr_24915_24947 = state_24903__$1;(statearr_24915_24947[(2)] = null);
(statearr_24915_24947[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24904 === (13)))
{var inst_24863 = (state_24903[(9)]);var inst_24860 = (state_24903[(10)]);var inst_24861 = (state_24903[(11)]);var inst_24862 = (state_24903[(12)]);var inst_24870 = (state_24903[(2)]);var inst_24871 = (inst_24863 + (1));var tmp24909 = inst_24860;var tmp24910 = inst_24861;var tmp24911 = inst_24862;var inst_24860__$1 = tmp24909;var inst_24861__$1 = tmp24910;var inst_24862__$1 = tmp24911;var inst_24863__$1 = inst_24871;var state_24903__$1 = (function (){var statearr_24916 = state_24903;(statearr_24916[(14)] = inst_24870);
(statearr_24916[(9)] = inst_24863__$1);
(statearr_24916[(10)] = inst_24860__$1);
(statearr_24916[(11)] = inst_24861__$1);
(statearr_24916[(12)] = inst_24862__$1);
return statearr_24916;
})();var statearr_24917_24948 = state_24903__$1;(statearr_24917_24948[(2)] = null);
(statearr_24917_24948[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24904 === (6)))
{var inst_24849 = (state_24903[(13)]);var inst_24854 = f.call(null,inst_24849);var inst_24859 = cljs.core.seq.call(null,inst_24854);var inst_24860 = inst_24859;var inst_24861 = null;var inst_24862 = (0);var inst_24863 = (0);var state_24903__$1 = (function (){var statearr_24918 = state_24903;(statearr_24918[(9)] = inst_24863);
(statearr_24918[(10)] = inst_24860);
(statearr_24918[(11)] = inst_24861);
(statearr_24918[(12)] = inst_24862);
return statearr_24918;
})();var statearr_24919_24949 = state_24903__$1;(statearr_24919_24949[(2)] = null);
(statearr_24919_24949[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24904 === (17)))
{var inst_24874 = (state_24903[(7)]);var inst_24878 = cljs.core.chunk_first.call(null,inst_24874);var inst_24879 = cljs.core.chunk_rest.call(null,inst_24874);var inst_24880 = cljs.core.count.call(null,inst_24878);var inst_24860 = inst_24879;var inst_24861 = inst_24878;var inst_24862 = inst_24880;var inst_24863 = (0);var state_24903__$1 = (function (){var statearr_24920 = state_24903;(statearr_24920[(9)] = inst_24863);
(statearr_24920[(10)] = inst_24860);
(statearr_24920[(11)] = inst_24861);
(statearr_24920[(12)] = inst_24862);
return statearr_24920;
})();var statearr_24921_24950 = state_24903__$1;(statearr_24921_24950[(2)] = null);
(statearr_24921_24950[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24904 === (3)))
{var inst_24901 = (state_24903[(2)]);var state_24903__$1 = state_24903;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24903__$1,inst_24901);
} else
{if((state_val_24904 === (12)))
{var inst_24894 = (state_24903[(2)]);var state_24903__$1 = state_24903;var statearr_24922_24951 = state_24903__$1;(statearr_24922_24951[(2)] = inst_24894);
(statearr_24922_24951[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24904 === (2)))
{var state_24903__$1 = state_24903;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24903__$1,(4),in$);
} else
{if((state_val_24904 === (19)))
{var inst_24889 = (state_24903[(2)]);var state_24903__$1 = state_24903;var statearr_24923_24952 = state_24903__$1;(statearr_24923_24952[(2)] = inst_24889);
(statearr_24923_24952[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24904 === (11)))
{var inst_24874 = (state_24903[(7)]);var inst_24860 = (state_24903[(10)]);var inst_24874__$1 = cljs.core.seq.call(null,inst_24860);var state_24903__$1 = (function (){var statearr_24924 = state_24903;(statearr_24924[(7)] = inst_24874__$1);
return statearr_24924;
})();if(inst_24874__$1)
{var statearr_24925_24953 = state_24903__$1;(statearr_24925_24953[(1)] = (14));
} else
{var statearr_24926_24954 = state_24903__$1;(statearr_24926_24954[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24904 === (9)))
{var inst_24896 = (state_24903[(2)]);var state_24903__$1 = (function (){var statearr_24927 = state_24903;(statearr_24927[(15)] = inst_24896);
return statearr_24927;
})();var statearr_24928_24955 = state_24903__$1;(statearr_24928_24955[(2)] = null);
(statearr_24928_24955[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24904 === (5)))
{var inst_24852 = cljs.core.async.close_BANG_.call(null,out);var state_24903__$1 = state_24903;var statearr_24929_24956 = state_24903__$1;(statearr_24929_24956[(2)] = inst_24852);
(statearr_24929_24956[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24904 === (14)))
{var inst_24874 = (state_24903[(7)]);var inst_24876 = cljs.core.chunked_seq_QMARK_.call(null,inst_24874);var state_24903__$1 = state_24903;if(inst_24876)
{var statearr_24930_24957 = state_24903__$1;(statearr_24930_24957[(1)] = (17));
} else
{var statearr_24931_24958 = state_24903__$1;(statearr_24931_24958[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24904 === (16)))
{var inst_24892 = (state_24903[(2)]);var state_24903__$1 = state_24903;var statearr_24932_24959 = state_24903__$1;(statearr_24932_24959[(2)] = inst_24892);
(statearr_24932_24959[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24904 === (10)))
{var inst_24863 = (state_24903[(9)]);var inst_24861 = (state_24903[(11)]);var inst_24868 = cljs.core._nth.call(null,inst_24861,inst_24863);var state_24903__$1 = state_24903;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24903__$1,(13),out,inst_24868);
} else
{if((state_val_24904 === (18)))
{var inst_24874 = (state_24903[(7)]);var inst_24883 = cljs.core.first.call(null,inst_24874);var state_24903__$1 = state_24903;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24903__$1,(20),out,inst_24883);
} else
{if((state_val_24904 === (8)))
{var inst_24863 = (state_24903[(9)]);var inst_24862 = (state_24903[(12)]);var inst_24865 = (inst_24863 < inst_24862);var inst_24866 = inst_24865;var state_24903__$1 = state_24903;if(cljs.core.truth_(inst_24866))
{var statearr_24933_24960 = state_24903__$1;(statearr_24933_24960[(1)] = (10));
} else
{var statearr_24934_24961 = state_24903__$1;(statearr_24934_24961[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__10959__auto__))
;return ((function (switch__10894__auto__,c__10959__auto__){
return (function() {
var state_machine__10895__auto__ = null;
var state_machine__10895__auto____0 = (function (){var statearr_24938 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24938[(0)] = state_machine__10895__auto__);
(statearr_24938[(1)] = (1));
return statearr_24938;
});
var state_machine__10895__auto____1 = (function (state_24903){while(true){
var ret_value__10896__auto__ = (function (){try{while(true){
var result__10897__auto__ = switch__10894__auto__.call(null,state_24903);if(cljs.core.keyword_identical_QMARK_.call(null,result__10897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10897__auto__;
}
break;
}
}catch (e24939){if((e24939 instanceof Object))
{var ex__10898__auto__ = e24939;var statearr_24940_24962 = state_24903;(statearr_24940_24962[(5)] = ex__10898__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24903);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24939;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24963 = state_24903;
state_24903 = G__24963;
continue;
}
} else
{return ret_value__10896__auto__;
}
break;
}
});
state_machine__10895__auto__ = function(state_24903){
switch(arguments.length){
case 0:
return state_machine__10895__auto____0.call(this);
case 1:
return state_machine__10895__auto____1.call(this,state_24903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10895__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10895__auto____0;
state_machine__10895__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10895__auto____1;
return state_machine__10895__auto__;
})()
;})(switch__10894__auto__,c__10959__auto__))
})();var state__10961__auto__ = (function (){var statearr_24941 = f__10960__auto__.call(null);(statearr_24941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10959__auto__);
return statearr_24941;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10961__auto__);
});})(c__10959__auto__))
);
return c__10959__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__10959__auto___25044 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10959__auto___25044){
return (function (){var f__10960__auto__ = (function (){var switch__10894__auto__ = ((function (c__10959__auto___25044){
return (function (state_25023){var state_val_25024 = (state_25023[(1)]);if((state_val_25024 === (7)))
{var inst_25019 = (state_25023[(2)]);var state_25023__$1 = state_25023;var statearr_25025_25045 = state_25023__$1;(statearr_25025_25045[(2)] = inst_25019);
(statearr_25025_25045[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25024 === (1)))
{var state_25023__$1 = state_25023;var statearr_25026_25046 = state_25023__$1;(statearr_25026_25046[(2)] = null);
(statearr_25026_25046[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25024 === (4)))
{var inst_25006 = (state_25023[(7)]);var inst_25006__$1 = (state_25023[(2)]);var inst_25007 = (inst_25006__$1 == null);var state_25023__$1 = (function (){var statearr_25027 = state_25023;(statearr_25027[(7)] = inst_25006__$1);
return statearr_25027;
})();if(cljs.core.truth_(inst_25007))
{var statearr_25028_25047 = state_25023__$1;(statearr_25028_25047[(1)] = (5));
} else
{var statearr_25029_25048 = state_25023__$1;(statearr_25029_25048[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25024 === (6)))
{var inst_25006 = (state_25023[(7)]);var state_25023__$1 = state_25023;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25023__$1,(11),to,inst_25006);
} else
{if((state_val_25024 === (3)))
{var inst_25021 = (state_25023[(2)]);var state_25023__$1 = state_25023;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25023__$1,inst_25021);
} else
{if((state_val_25024 === (2)))
{var state_25023__$1 = state_25023;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25023__$1,(4),from);
} else
{if((state_val_25024 === (11)))
{var inst_25016 = (state_25023[(2)]);var state_25023__$1 = (function (){var statearr_25030 = state_25023;(statearr_25030[(8)] = inst_25016);
return statearr_25030;
})();var statearr_25031_25049 = state_25023__$1;(statearr_25031_25049[(2)] = null);
(statearr_25031_25049[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25024 === (9)))
{var state_25023__$1 = state_25023;var statearr_25032_25050 = state_25023__$1;(statearr_25032_25050[(2)] = null);
(statearr_25032_25050[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25024 === (5)))
{var state_25023__$1 = state_25023;if(cljs.core.truth_(close_QMARK_))
{var statearr_25033_25051 = state_25023__$1;(statearr_25033_25051[(1)] = (8));
} else
{var statearr_25034_25052 = state_25023__$1;(statearr_25034_25052[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25024 === (10)))
{var inst_25013 = (state_25023[(2)]);var state_25023__$1 = state_25023;var statearr_25035_25053 = state_25023__$1;(statearr_25035_25053[(2)] = inst_25013);
(statearr_25035_25053[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25024 === (8)))
{var inst_25010 = cljs.core.async.close_BANG_.call(null,to);var state_25023__$1 = state_25023;var statearr_25036_25054 = state_25023__$1;(statearr_25036_25054[(2)] = inst_25010);
(statearr_25036_25054[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__10959__auto___25044))
;return ((function (switch__10894__auto__,c__10959__auto___25044){
return (function() {
var state_machine__10895__auto__ = null;
var state_machine__10895__auto____0 = (function (){var statearr_25040 = [null,null,null,null,null,null,null,null,null];(statearr_25040[(0)] = state_machine__10895__auto__);
(statearr_25040[(1)] = (1));
return statearr_25040;
});
var state_machine__10895__auto____1 = (function (state_25023){while(true){
var ret_value__10896__auto__ = (function (){try{while(true){
var result__10897__auto__ = switch__10894__auto__.call(null,state_25023);if(cljs.core.keyword_identical_QMARK_.call(null,result__10897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10897__auto__;
}
break;
}
}catch (e25041){if((e25041 instanceof Object))
{var ex__10898__auto__ = e25041;var statearr_25042_25055 = state_25023;(statearr_25042_25055[(5)] = ex__10898__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25023);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25041;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25056 = state_25023;
state_25023 = G__25056;
continue;
}
} else
{return ret_value__10896__auto__;
}
break;
}
});
state_machine__10895__auto__ = function(state_25023){
switch(arguments.length){
case 0:
return state_machine__10895__auto____0.call(this);
case 1:
return state_machine__10895__auto____1.call(this,state_25023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10895__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10895__auto____0;
state_machine__10895__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10895__auto____1;
return state_machine__10895__auto__;
})()
;})(switch__10894__auto__,c__10959__auto___25044))
})();var state__10961__auto__ = (function (){var statearr_25043 = f__10960__auto__.call(null);(statearr_25043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10959__auto___25044);
return statearr_25043;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10961__auto__);
});})(c__10959__auto___25044))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
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
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__10959__auto___25143 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10959__auto___25143,tc,fc){
return (function (){var f__10960__auto__ = (function (){var switch__10894__auto__ = ((function (c__10959__auto___25143,tc,fc){
return (function (state_25121){var state_val_25122 = (state_25121[(1)]);if((state_val_25122 === (7)))
{var inst_25117 = (state_25121[(2)]);var state_25121__$1 = state_25121;var statearr_25123_25144 = state_25121__$1;(statearr_25123_25144[(2)] = inst_25117);
(statearr_25123_25144[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25122 === (1)))
{var state_25121__$1 = state_25121;var statearr_25124_25145 = state_25121__$1;(statearr_25124_25145[(2)] = null);
(statearr_25124_25145[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25122 === (4)))
{var inst_25102 = (state_25121[(7)]);var inst_25102__$1 = (state_25121[(2)]);var inst_25103 = (inst_25102__$1 == null);var state_25121__$1 = (function (){var statearr_25125 = state_25121;(statearr_25125[(7)] = inst_25102__$1);
return statearr_25125;
})();if(cljs.core.truth_(inst_25103))
{var statearr_25126_25146 = state_25121__$1;(statearr_25126_25146[(1)] = (5));
} else
{var statearr_25127_25147 = state_25121__$1;(statearr_25127_25147[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25122 === (6)))
{var inst_25102 = (state_25121[(7)]);var inst_25108 = p.call(null,inst_25102);var state_25121__$1 = state_25121;if(cljs.core.truth_(inst_25108))
{var statearr_25128_25148 = state_25121__$1;(statearr_25128_25148[(1)] = (9));
} else
{var statearr_25129_25149 = state_25121__$1;(statearr_25129_25149[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25122 === (3)))
{var inst_25119 = (state_25121[(2)]);var state_25121__$1 = state_25121;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25121__$1,inst_25119);
} else
{if((state_val_25122 === (2)))
{var state_25121__$1 = state_25121;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25121__$1,(4),ch);
} else
{if((state_val_25122 === (11)))
{var inst_25102 = (state_25121[(7)]);var inst_25112 = (state_25121[(2)]);var state_25121__$1 = state_25121;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25121__$1,(8),inst_25112,inst_25102);
} else
{if((state_val_25122 === (9)))
{var state_25121__$1 = state_25121;var statearr_25130_25150 = state_25121__$1;(statearr_25130_25150[(2)] = tc);
(statearr_25130_25150[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25122 === (5)))
{var inst_25105 = cljs.core.async.close_BANG_.call(null,tc);var inst_25106 = cljs.core.async.close_BANG_.call(null,fc);var state_25121__$1 = (function (){var statearr_25131 = state_25121;(statearr_25131[(8)] = inst_25105);
return statearr_25131;
})();var statearr_25132_25151 = state_25121__$1;(statearr_25132_25151[(2)] = inst_25106);
(statearr_25132_25151[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25122 === (10)))
{var state_25121__$1 = state_25121;var statearr_25133_25152 = state_25121__$1;(statearr_25133_25152[(2)] = fc);
(statearr_25133_25152[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25122 === (8)))
{var inst_25114 = (state_25121[(2)]);var state_25121__$1 = (function (){var statearr_25134 = state_25121;(statearr_25134[(9)] = inst_25114);
return statearr_25134;
})();var statearr_25135_25153 = state_25121__$1;(statearr_25135_25153[(2)] = null);
(statearr_25135_25153[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__10959__auto___25143,tc,fc))
;return ((function (switch__10894__auto__,c__10959__auto___25143,tc,fc){
return (function() {
var state_machine__10895__auto__ = null;
var state_machine__10895__auto____0 = (function (){var statearr_25139 = [null,null,null,null,null,null,null,null,null,null];(statearr_25139[(0)] = state_machine__10895__auto__);
(statearr_25139[(1)] = (1));
return statearr_25139;
});
var state_machine__10895__auto____1 = (function (state_25121){while(true){
var ret_value__10896__auto__ = (function (){try{while(true){
var result__10897__auto__ = switch__10894__auto__.call(null,state_25121);if(cljs.core.keyword_identical_QMARK_.call(null,result__10897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10897__auto__;
}
break;
}
}catch (e25140){if((e25140 instanceof Object))
{var ex__10898__auto__ = e25140;var statearr_25141_25154 = state_25121;(statearr_25141_25154[(5)] = ex__10898__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25121);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25140;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25155 = state_25121;
state_25121 = G__25155;
continue;
}
} else
{return ret_value__10896__auto__;
}
break;
}
});
state_machine__10895__auto__ = function(state_25121){
switch(arguments.length){
case 0:
return state_machine__10895__auto____0.call(this);
case 1:
return state_machine__10895__auto____1.call(this,state_25121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10895__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10895__auto____0;
state_machine__10895__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10895__auto____1;
return state_machine__10895__auto__;
})()
;})(switch__10894__auto__,c__10959__auto___25143,tc,fc))
})();var state__10961__auto__ = (function (){var statearr_25142 = f__10960__auto__.call(null);(statearr_25142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10959__auto___25143);
return statearr_25142;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10961__auto__);
});})(c__10959__auto___25143,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__10959__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10959__auto__){
return (function (){var f__10960__auto__ = (function (){var switch__10894__auto__ = ((function (c__10959__auto__){
return (function (state_25202){var state_val_25203 = (state_25202[(1)]);if((state_val_25203 === (7)))
{var inst_25198 = (state_25202[(2)]);var state_25202__$1 = state_25202;var statearr_25204_25220 = state_25202__$1;(statearr_25204_25220[(2)] = inst_25198);
(statearr_25204_25220[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25203 === (6)))
{var inst_25188 = (state_25202[(7)]);var inst_25191 = (state_25202[(8)]);var inst_25195 = f.call(null,inst_25188,inst_25191);var inst_25188__$1 = inst_25195;var state_25202__$1 = (function (){var statearr_25205 = state_25202;(statearr_25205[(7)] = inst_25188__$1);
return statearr_25205;
})();var statearr_25206_25221 = state_25202__$1;(statearr_25206_25221[(2)] = null);
(statearr_25206_25221[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25203 === (5)))
{var inst_25188 = (state_25202[(7)]);var state_25202__$1 = state_25202;var statearr_25207_25222 = state_25202__$1;(statearr_25207_25222[(2)] = inst_25188);
(statearr_25207_25222[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25203 === (4)))
{var inst_25191 = (state_25202[(8)]);var inst_25191__$1 = (state_25202[(2)]);var inst_25192 = (inst_25191__$1 == null);var state_25202__$1 = (function (){var statearr_25208 = state_25202;(statearr_25208[(8)] = inst_25191__$1);
return statearr_25208;
})();if(cljs.core.truth_(inst_25192))
{var statearr_25209_25223 = state_25202__$1;(statearr_25209_25223[(1)] = (5));
} else
{var statearr_25210_25224 = state_25202__$1;(statearr_25210_25224[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25203 === (3)))
{var inst_25200 = (state_25202[(2)]);var state_25202__$1 = state_25202;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25202__$1,inst_25200);
} else
{if((state_val_25203 === (2)))
{var state_25202__$1 = state_25202;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25202__$1,(4),ch);
} else
{if((state_val_25203 === (1)))
{var inst_25188 = init;var state_25202__$1 = (function (){var statearr_25211 = state_25202;(statearr_25211[(7)] = inst_25188);
return statearr_25211;
})();var statearr_25212_25225 = state_25202__$1;(statearr_25212_25225[(2)] = null);
(statearr_25212_25225[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__10959__auto__))
;return ((function (switch__10894__auto__,c__10959__auto__){
return (function() {
var state_machine__10895__auto__ = null;
var state_machine__10895__auto____0 = (function (){var statearr_25216 = [null,null,null,null,null,null,null,null,null];(statearr_25216[(0)] = state_machine__10895__auto__);
(statearr_25216[(1)] = (1));
return statearr_25216;
});
var state_machine__10895__auto____1 = (function (state_25202){while(true){
var ret_value__10896__auto__ = (function (){try{while(true){
var result__10897__auto__ = switch__10894__auto__.call(null,state_25202);if(cljs.core.keyword_identical_QMARK_.call(null,result__10897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10897__auto__;
}
break;
}
}catch (e25217){if((e25217 instanceof Object))
{var ex__10898__auto__ = e25217;var statearr_25218_25226 = state_25202;(statearr_25218_25226[(5)] = ex__10898__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25202);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25217;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25227 = state_25202;
state_25202 = G__25227;
continue;
}
} else
{return ret_value__10896__auto__;
}
break;
}
});
state_machine__10895__auto__ = function(state_25202){
switch(arguments.length){
case 0:
return state_machine__10895__auto____0.call(this);
case 1:
return state_machine__10895__auto____1.call(this,state_25202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10895__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10895__auto____0;
state_machine__10895__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10895__auto____1;
return state_machine__10895__auto__;
})()
;})(switch__10894__auto__,c__10959__auto__))
})();var state__10961__auto__ = (function (){var statearr_25219 = f__10960__auto__.call(null);(statearr_25219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10959__auto__);
return statearr_25219;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10961__auto__);
});})(c__10959__auto__))
);
return c__10959__auto__;
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
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__10959__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10959__auto__){
return (function (){var f__10960__auto__ = (function (){var switch__10894__auto__ = ((function (c__10959__auto__){
return (function (state_25289){var state_val_25290 = (state_25289[(1)]);if((state_val_25290 === (7)))
{var inst_25270 = (state_25289[(7)]);var inst_25275 = (state_25289[(2)]);var inst_25276 = cljs.core.next.call(null,inst_25270);var inst_25270__$1 = inst_25276;var state_25289__$1 = (function (){var statearr_25291 = state_25289;(statearr_25291[(7)] = inst_25270__$1);
(statearr_25291[(8)] = inst_25275);
return statearr_25291;
})();var statearr_25292_25310 = state_25289__$1;(statearr_25292_25310[(2)] = null);
(statearr_25292_25310[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25290 === (1)))
{var inst_25269 = cljs.core.seq.call(null,coll);var inst_25270 = inst_25269;var state_25289__$1 = (function (){var statearr_25293 = state_25289;(statearr_25293[(7)] = inst_25270);
return statearr_25293;
})();var statearr_25294_25311 = state_25289__$1;(statearr_25294_25311[(2)] = null);
(statearr_25294_25311[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25290 === (4)))
{var inst_25270 = (state_25289[(7)]);var inst_25273 = cljs.core.first.call(null,inst_25270);var state_25289__$1 = state_25289;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25289__$1,(7),ch,inst_25273);
} else
{if((state_val_25290 === (6)))
{var inst_25285 = (state_25289[(2)]);var state_25289__$1 = state_25289;var statearr_25295_25312 = state_25289__$1;(statearr_25295_25312[(2)] = inst_25285);
(statearr_25295_25312[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25290 === (3)))
{var inst_25287 = (state_25289[(2)]);var state_25289__$1 = state_25289;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25289__$1,inst_25287);
} else
{if((state_val_25290 === (2)))
{var inst_25270 = (state_25289[(7)]);var state_25289__$1 = state_25289;if(cljs.core.truth_(inst_25270))
{var statearr_25296_25313 = state_25289__$1;(statearr_25296_25313[(1)] = (4));
} else
{var statearr_25297_25314 = state_25289__$1;(statearr_25297_25314[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25290 === (9)))
{var state_25289__$1 = state_25289;var statearr_25298_25315 = state_25289__$1;(statearr_25298_25315[(2)] = null);
(statearr_25298_25315[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25290 === (5)))
{var state_25289__$1 = state_25289;if(cljs.core.truth_(close_QMARK_))
{var statearr_25299_25316 = state_25289__$1;(statearr_25299_25316[(1)] = (8));
} else
{var statearr_25300_25317 = state_25289__$1;(statearr_25300_25317[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25290 === (10)))
{var inst_25283 = (state_25289[(2)]);var state_25289__$1 = state_25289;var statearr_25301_25318 = state_25289__$1;(statearr_25301_25318[(2)] = inst_25283);
(statearr_25301_25318[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25290 === (8)))
{var inst_25280 = cljs.core.async.close_BANG_.call(null,ch);var state_25289__$1 = state_25289;var statearr_25302_25319 = state_25289__$1;(statearr_25302_25319[(2)] = inst_25280);
(statearr_25302_25319[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__10959__auto__))
;return ((function (switch__10894__auto__,c__10959__auto__){
return (function() {
var state_machine__10895__auto__ = null;
var state_machine__10895__auto____0 = (function (){var statearr_25306 = [null,null,null,null,null,null,null,null,null];(statearr_25306[(0)] = state_machine__10895__auto__);
(statearr_25306[(1)] = (1));
return statearr_25306;
});
var state_machine__10895__auto____1 = (function (state_25289){while(true){
var ret_value__10896__auto__ = (function (){try{while(true){
var result__10897__auto__ = switch__10894__auto__.call(null,state_25289);if(cljs.core.keyword_identical_QMARK_.call(null,result__10897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10897__auto__;
}
break;
}
}catch (e25307){if((e25307 instanceof Object))
{var ex__10898__auto__ = e25307;var statearr_25308_25320 = state_25289;(statearr_25308_25320[(5)] = ex__10898__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25289);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25307;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25321 = state_25289;
state_25289 = G__25321;
continue;
}
} else
{return ret_value__10896__auto__;
}
break;
}
});
state_machine__10895__auto__ = function(state_25289){
switch(arguments.length){
case 0:
return state_machine__10895__auto____0.call(this);
case 1:
return state_machine__10895__auto____1.call(this,state_25289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10895__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10895__auto____0;
state_machine__10895__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10895__auto____1;
return state_machine__10895__auto__;
})()
;})(switch__10894__auto__,c__10959__auto__))
})();var state__10961__auto__ = (function (){var statearr_25309 = f__10960__auto__.call(null);(statearr_25309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10959__auto__);
return statearr_25309;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10961__auto__);
});})(c__10959__auto__))
);
return c__10959__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj25323 = {};return obj25323;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__7882__auto__ = _;if(and__7882__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__7882__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__8521__auto__ = (((_ == null))?null:_);return (function (){var or__7894__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8521__auto__)]);if(or__7894__auto__)
{return or__7894__auto__;
} else
{var or__7894__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__7894__auto____$1)
{return or__7894__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj25325 = {};return obj25325;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__7882__auto__ = m;if(and__7882__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__7882__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__8521__auto__ = (((m == null))?null:m);return (function (){var or__7894__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8521__auto__)]);if(or__7894__auto__)
{return or__7894__auto__;
} else
{var or__7894__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__7894__auto____$1)
{return or__7894__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__7882__auto__ = m;if(and__7882__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__7882__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__8521__auto__ = (((m == null))?null:m);return (function (){var or__7894__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8521__auto__)]);if(or__7894__auto__)
{return or__7894__auto__;
} else
{var or__7894__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__7894__auto____$1)
{return or__7894__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__7882__auto__ = m;if(and__7882__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__7882__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__8521__auto__ = (((m == null))?null:m);return (function (){var or__7894__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8521__auto__)]);if(or__7894__auto__)
{return or__7894__auto__;
} else
{var or__7894__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__7894__auto____$1)
{return or__7894__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t25549 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25549 = (function (cs,ch,mult,meta25550){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25550 = meta25550;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25549.cljs$lang$type = true;
cljs.core.async.t25549.cljs$lang$ctorStr = "cljs.core.async/t25549";
cljs.core.async.t25549.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8461__auto__,writer__8462__auto__,opt__8463__auto__){return cljs.core._write.call(null,writer__8462__auto__,"cljs.core.async/t25549");
});})(cs))
;
cljs.core.async.t25549.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t25549.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t25549.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t25549.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t25549.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25549.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t25549.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25551){var self__ = this;
var _25551__$1 = this;return self__.meta25550;
});})(cs))
;
cljs.core.async.t25549.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25551,meta25550__$1){var self__ = this;
var _25551__$1 = this;return (new cljs.core.async.t25549(self__.cs,self__.ch,self__.mult,meta25550__$1));
});})(cs))
;
cljs.core.async.__GT_t25549 = ((function (cs){
return (function __GT_t25549(cs__$1,ch__$1,mult__$1,meta25550){return (new cljs.core.async.t25549(cs__$1,ch__$1,mult__$1,meta25550));
});})(cs))
;
}
return (new cljs.core.async.t25549(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__10959__auto___25772 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10959__auto___25772,cs,m,dchan,dctr,done){
return (function (){var f__10960__auto__ = (function (){var switch__10894__auto__ = ((function (c__10959__auto___25772,cs,m,dchan,dctr,done){
return (function (state_25686){var state_val_25687 = (state_25686[(1)]);if((state_val_25687 === (7)))
{var inst_25682 = (state_25686[(2)]);var state_25686__$1 = state_25686;var statearr_25688_25773 = state_25686__$1;(statearr_25688_25773[(2)] = inst_25682);
(statearr_25688_25773[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25687 === (20)))
{var inst_25583 = (state_25686[(7)]);var inst_25593 = cljs.core.first.call(null,inst_25583);var inst_25594 = cljs.core.nth.call(null,inst_25593,(0),null);var inst_25595 = cljs.core.nth.call(null,inst_25593,(1),null);var state_25686__$1 = (function (){var statearr_25689 = state_25686;(statearr_25689[(8)] = inst_25594);
return statearr_25689;
})();if(cljs.core.truth_(inst_25595))
{var statearr_25690_25774 = state_25686__$1;(statearr_25690_25774[(1)] = (22));
} else
{var statearr_25691_25775 = state_25686__$1;(statearr_25691_25775[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25687 === (27)))
{var inst_25623 = (state_25686[(9)]);var inst_25625 = (state_25686[(10)]);var inst_25630 = cljs.core._nth.call(null,inst_25623,inst_25625);var state_25686__$1 = (function (){var statearr_25692 = state_25686;(statearr_25692[(11)] = inst_25630);
return statearr_25692;
})();var statearr_25693_25776 = state_25686__$1;(statearr_25693_25776[(2)] = null);
(statearr_25693_25776[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25687 === (1)))
{var state_25686__$1 = state_25686;var statearr_25694_25777 = state_25686__$1;(statearr_25694_25777[(2)] = null);
(statearr_25694_25777[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25687 === (24)))
{var inst_25583 = (state_25686[(7)]);var inst_25600 = (state_25686[(2)]);var inst_25601 = cljs.core.next.call(null,inst_25583);var inst_25563 = inst_25601;var inst_25564 = null;var inst_25565 = (0);var inst_25566 = (0);var state_25686__$1 = (function (){var statearr_25695 = state_25686;(statearr_25695[(12)] = inst_25600);
(statearr_25695[(13)] = inst_25564);
(statearr_25695[(14)] = inst_25566);
(statearr_25695[(15)] = inst_25565);
(statearr_25695[(16)] = inst_25563);
return statearr_25695;
})();var statearr_25696_25778 = state_25686__$1;(statearr_25696_25778[(2)] = null);
(statearr_25696_25778[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25687 === (39)))
{var inst_25643 = (state_25686[(17)]);var inst_25661 = (state_25686[(2)]);var inst_25662 = cljs.core.next.call(null,inst_25643);var inst_25622 = inst_25662;var inst_25623 = null;var inst_25624 = (0);var inst_25625 = (0);var state_25686__$1 = (function (){var statearr_25700 = state_25686;(statearr_25700[(18)] = inst_25622);
(statearr_25700[(19)] = inst_25624);
(statearr_25700[(20)] = inst_25661);
(statearr_25700[(9)] = inst_25623);
(statearr_25700[(10)] = inst_25625);
return statearr_25700;
})();var statearr_25701_25779 = state_25686__$1;(statearr_25701_25779[(2)] = null);
(statearr_25701_25779[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25687 === (4)))
{var inst_25554 = (state_25686[(21)]);var inst_25554__$1 = (state_25686[(2)]);var inst_25555 = (inst_25554__$1 == null);var state_25686__$1 = (function (){var statearr_25702 = state_25686;(statearr_25702[(21)] = inst_25554__$1);
return statearr_25702;
})();if(cljs.core.truth_(inst_25555))
{var statearr_25703_25780 = state_25686__$1;(statearr_25703_25780[(1)] = (5));
} else
{var statearr_25704_25781 = state_25686__$1;(statearr_25704_25781[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25687 === (15)))
{var inst_25564 = (state_25686[(13)]);var inst_25566 = (state_25686[(14)]);var inst_25565 = (state_25686[(15)]);var inst_25563 = (state_25686[(16)]);var inst_25579 = (state_25686[(2)]);var inst_25580 = (inst_25566 + (1));var tmp25697 = inst_25564;var tmp25698 = inst_25565;var tmp25699 = inst_25563;var inst_25563__$1 = tmp25699;var inst_25564__$1 = tmp25697;var inst_25565__$1 = tmp25698;var inst_25566__$1 = inst_25580;var state_25686__$1 = (function (){var statearr_25705 = state_25686;(statearr_25705[(13)] = inst_25564__$1);
(statearr_25705[(22)] = inst_25579);
(statearr_25705[(14)] = inst_25566__$1);
(statearr_25705[(15)] = inst_25565__$1);
(statearr_25705[(16)] = inst_25563__$1);
return statearr_25705;
})();var statearr_25706_25782 = state_25686__$1;(statearr_25706_25782[(2)] = null);
(statearr_25706_25782[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25687 === (21)))
{var inst_25604 = (state_25686[(2)]);var state_25686__$1 = state_25686;var statearr_25707_25783 = state_25686__$1;(statearr_25707_25783[(2)] = inst_25604);
(statearr_25707_25783[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25687 === (31)))
{var inst_25630 = (state_25686[(11)]);var inst_25631 = (state_25686[(2)]);var inst_25632 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_25633 = cljs.core.async.untap_STAR_.call(null,m,inst_25630);var state_25686__$1 = (function (){var statearr_25708 = state_25686;(statearr_25708[(23)] = inst_25631);
(statearr_25708[(24)] = inst_25632);
return statearr_25708;
})();var statearr_25709_25784 = state_25686__$1;(statearr_25709_25784[(2)] = inst_25633);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25686__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25687 === (32)))
{var inst_25554 = (state_25686[(21)]);var inst_25630 = (state_25686[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25686,(31),Object,null,(30));var inst_25637 = cljs.core.async.put_BANG_.call(null,inst_25630,inst_25554,done);var state_25686__$1 = state_25686;var statearr_25710_25785 = state_25686__$1;(statearr_25710_25785[(2)] = inst_25637);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25686__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25687 === (40)))
{var inst_25652 = (state_25686[(25)]);var inst_25653 = (state_25686[(2)]);var inst_25654 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_25655 = cljs.core.async.untap_STAR_.call(null,m,inst_25652);var state_25686__$1 = (function (){var statearr_25711 = state_25686;(statearr_25711[(26)] = inst_25653);
(statearr_25711[(27)] = inst_25654);
return statearr_25711;
})();var statearr_25712_25786 = state_25686__$1;(statearr_25712_25786[(2)] = inst_25655);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25686__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25687 === (33)))
{var inst_25643 = (state_25686[(17)]);var inst_25645 = cljs.core.chunked_seq_QMARK_.call(null,inst_25643);var state_25686__$1 = state_25686;if(inst_25645)
{var statearr_25713_25787 = state_25686__$1;(statearr_25713_25787[(1)] = (36));
} else
{var statearr_25714_25788 = state_25686__$1;(statearr_25714_25788[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25687 === (13)))
{var inst_25573 = (state_25686[(28)]);var inst_25576 = cljs.core.async.close_BANG_.call(null,inst_25573);var state_25686__$1 = state_25686;var statearr_25715_25789 = state_25686__$1;(statearr_25715_25789[(2)] = inst_25576);
(statearr_25715_25789[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25687 === (22)))
{var inst_25594 = (state_25686[(8)]);var inst_25597 = cljs.core.async.close_BANG_.call(null,inst_25594);var state_25686__$1 = state_25686;var statearr_25716_25790 = state_25686__$1;(statearr_25716_25790[(2)] = inst_25597);
(statearr_25716_25790[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25687 === (36)))
{var inst_25643 = (state_25686[(17)]);var inst_25647 = cljs.core.chunk_first.call(null,inst_25643);var inst_25648 = cljs.core.chunk_rest.call(null,inst_25643);var inst_25649 = cljs.core.count.call(null,inst_25647);var inst_25622 = inst_25648;var inst_25623 = inst_25647;var inst_25624 = inst_25649;var inst_25625 = (0);var state_25686__$1 = (function (){var statearr_25717 = state_25686;(statearr_25717[(18)] = inst_25622);
(statearr_25717[(19)] = inst_25624);
(statearr_25717[(9)] = inst_25623);
(statearr_25717[(10)] = inst_25625);
return statearr_25717;
})();var statearr_25718_25791 = state_25686__$1;(statearr_25718_25791[(2)] = null);
(statearr_25718_25791[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25687 === (41)))
{var inst_25652 = (state_25686[(25)]);var inst_25554 = (state_25686[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25686,(40),Object,null,(39));var inst_25659 = cljs.core.async.put_BANG_.call(null,inst_25652,inst_25554,done);var state_25686__$1 = state_25686;var statearr_25719_25792 = state_25686__$1;(statearr_25719_25792[(2)] = inst_25659);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25686__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25687 === (43)))
{var state_25686__$1 = state_25686;var statearr_25720_25793 = state_25686__$1;(statearr_25720_25793[(2)] = null);
(statearr_25720_25793[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25687 === (29)))
{var inst_25670 = (state_25686[(2)]);var state_25686__$1 = state_25686;var statearr_25721_25794 = state_25686__$1;(statearr_25721_25794[(2)] = inst_25670);
(statearr_25721_25794[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25687 === (44)))
{var inst_25679 = (state_25686[(2)]);var state_25686__$1 = (function (){var statearr_25722 = state_25686;(statearr_25722[(29)] = inst_25679);
return statearr_25722;
})();var statearr_25723_25795 = state_25686__$1;(statearr_25723_25795[(2)] = null);
(statearr_25723_25795[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25687 === (6)))
{var inst_25614 = (state_25686[(30)]);var inst_25613 = cljs.core.deref.call(null,cs);var inst_25614__$1 = cljs.core.keys.call(null,inst_25613);var inst_25615 = cljs.core.count.call(null,inst_25614__$1);var inst_25616 = cljs.core.reset_BANG_.call(null,dctr,inst_25615);var inst_25621 = cljs.core.seq.call(null,inst_25614__$1);var inst_25622 = inst_25621;var inst_25623 = null;var inst_25624 = (0);var inst_25625 = (0);var state_25686__$1 = (function (){var statearr_25724 = state_25686;(statearr_25724[(18)] = inst_25622);
(statearr_25724[(31)] = inst_25616);
(statearr_25724[(19)] = inst_25624);
(statearr_25724[(30)] = inst_25614__$1);
(statearr_25724[(9)] = inst_25623);
(statearr_25724[(10)] = inst_25625);
return statearr_25724;
})();var statearr_25725_25796 = state_25686__$1;(statearr_25725_25796[(2)] = null);
(statearr_25725_25796[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25687 === (28)))
{var inst_25622 = (state_25686[(18)]);var inst_25643 = (state_25686[(17)]);var inst_25643__$1 = cljs.core.seq.call(null,inst_25622);var state_25686__$1 = (function (){var statearr_25726 = state_25686;(statearr_25726[(17)] = inst_25643__$1);
return statearr_25726;
})();if(inst_25643__$1)
{var statearr_25727_25797 = state_25686__$1;(statearr_25727_25797[(1)] = (33));
} else
{var statearr_25728_25798 = state_25686__$1;(statearr_25728_25798[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25687 === (25)))
{var inst_25624 = (state_25686[(19)]);var inst_25625 = (state_25686[(10)]);var inst_25627 = (inst_25625 < inst_25624);var inst_25628 = inst_25627;var state_25686__$1 = state_25686;if(cljs.core.truth_(inst_25628))
{var statearr_25729_25799 = state_25686__$1;(statearr_25729_25799[(1)] = (27));
} else
{var statearr_25730_25800 = state_25686__$1;(statearr_25730_25800[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25687 === (34)))
{var state_25686__$1 = state_25686;var statearr_25731_25801 = state_25686__$1;(statearr_25731_25801[(2)] = null);
(statearr_25731_25801[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25687 === (17)))
{var state_25686__$1 = state_25686;var statearr_25732_25802 = state_25686__$1;(statearr_25732_25802[(2)] = null);
(statearr_25732_25802[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25687 === (3)))
{var inst_25684 = (state_25686[(2)]);var state_25686__$1 = state_25686;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25686__$1,inst_25684);
} else
{if((state_val_25687 === (12)))
{var inst_25609 = (state_25686[(2)]);var state_25686__$1 = state_25686;var statearr_25733_25803 = state_25686__$1;(statearr_25733_25803[(2)] = inst_25609);
(statearr_25733_25803[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25687 === (2)))
{var state_25686__$1 = state_25686;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25686__$1,(4),ch);
} else
{if((state_val_25687 === (23)))
{var state_25686__$1 = state_25686;var statearr_25734_25804 = state_25686__$1;(statearr_25734_25804[(2)] = null);
(statearr_25734_25804[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25687 === (35)))
{var inst_25668 = (state_25686[(2)]);var state_25686__$1 = state_25686;var statearr_25735_25805 = state_25686__$1;(statearr_25735_25805[(2)] = inst_25668);
(statearr_25735_25805[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25687 === (19)))
{var inst_25583 = (state_25686[(7)]);var inst_25587 = cljs.core.chunk_first.call(null,inst_25583);var inst_25588 = cljs.core.chunk_rest.call(null,inst_25583);var inst_25589 = cljs.core.count.call(null,inst_25587);var inst_25563 = inst_25588;var inst_25564 = inst_25587;var inst_25565 = inst_25589;var inst_25566 = (0);var state_25686__$1 = (function (){var statearr_25736 = state_25686;(statearr_25736[(13)] = inst_25564);
(statearr_25736[(14)] = inst_25566);
(statearr_25736[(15)] = inst_25565);
(statearr_25736[(16)] = inst_25563);
return statearr_25736;
})();var statearr_25737_25806 = state_25686__$1;(statearr_25737_25806[(2)] = null);
(statearr_25737_25806[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25687 === (11)))
{var inst_25583 = (state_25686[(7)]);var inst_25563 = (state_25686[(16)]);var inst_25583__$1 = cljs.core.seq.call(null,inst_25563);var state_25686__$1 = (function (){var statearr_25738 = state_25686;(statearr_25738[(7)] = inst_25583__$1);
return statearr_25738;
})();if(inst_25583__$1)
{var statearr_25739_25807 = state_25686__$1;(statearr_25739_25807[(1)] = (16));
} else
{var statearr_25740_25808 = state_25686__$1;(statearr_25740_25808[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25687 === (9)))
{var inst_25611 = (state_25686[(2)]);var state_25686__$1 = state_25686;var statearr_25741_25809 = state_25686__$1;(statearr_25741_25809[(2)] = inst_25611);
(statearr_25741_25809[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25687 === (5)))
{var inst_25561 = cljs.core.deref.call(null,cs);var inst_25562 = cljs.core.seq.call(null,inst_25561);var inst_25563 = inst_25562;var inst_25564 = null;var inst_25565 = (0);var inst_25566 = (0);var state_25686__$1 = (function (){var statearr_25742 = state_25686;(statearr_25742[(13)] = inst_25564);
(statearr_25742[(14)] = inst_25566);
(statearr_25742[(15)] = inst_25565);
(statearr_25742[(16)] = inst_25563);
return statearr_25742;
})();var statearr_25743_25810 = state_25686__$1;(statearr_25743_25810[(2)] = null);
(statearr_25743_25810[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25687 === (14)))
{var state_25686__$1 = state_25686;var statearr_25744_25811 = state_25686__$1;(statearr_25744_25811[(2)] = null);
(statearr_25744_25811[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25687 === (45)))
{var inst_25676 = (state_25686[(2)]);var state_25686__$1 = state_25686;var statearr_25745_25812 = state_25686__$1;(statearr_25745_25812[(2)] = inst_25676);
(statearr_25745_25812[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25687 === (26)))
{var inst_25614 = (state_25686[(30)]);var inst_25672 = (state_25686[(2)]);var inst_25673 = cljs.core.seq.call(null,inst_25614);var state_25686__$1 = (function (){var statearr_25746 = state_25686;(statearr_25746[(32)] = inst_25672);
return statearr_25746;
})();if(inst_25673)
{var statearr_25747_25813 = state_25686__$1;(statearr_25747_25813[(1)] = (42));
} else
{var statearr_25748_25814 = state_25686__$1;(statearr_25748_25814[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25687 === (16)))
{var inst_25583 = (state_25686[(7)]);var inst_25585 = cljs.core.chunked_seq_QMARK_.call(null,inst_25583);var state_25686__$1 = state_25686;if(inst_25585)
{var statearr_25752_25815 = state_25686__$1;(statearr_25752_25815[(1)] = (19));
} else
{var statearr_25753_25816 = state_25686__$1;(statearr_25753_25816[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25687 === (38)))
{var inst_25665 = (state_25686[(2)]);var state_25686__$1 = state_25686;var statearr_25754_25817 = state_25686__$1;(statearr_25754_25817[(2)] = inst_25665);
(statearr_25754_25817[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25687 === (30)))
{var inst_25622 = (state_25686[(18)]);var inst_25624 = (state_25686[(19)]);var inst_25623 = (state_25686[(9)]);var inst_25625 = (state_25686[(10)]);var inst_25639 = (state_25686[(2)]);var inst_25640 = (inst_25625 + (1));var tmp25749 = inst_25622;var tmp25750 = inst_25624;var tmp25751 = inst_25623;var inst_25622__$1 = tmp25749;var inst_25623__$1 = tmp25751;var inst_25624__$1 = tmp25750;var inst_25625__$1 = inst_25640;var state_25686__$1 = (function (){var statearr_25755 = state_25686;(statearr_25755[(18)] = inst_25622__$1);
(statearr_25755[(19)] = inst_25624__$1);
(statearr_25755[(33)] = inst_25639);
(statearr_25755[(9)] = inst_25623__$1);
(statearr_25755[(10)] = inst_25625__$1);
return statearr_25755;
})();var statearr_25756_25818 = state_25686__$1;(statearr_25756_25818[(2)] = null);
(statearr_25756_25818[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25687 === (10)))
{var inst_25564 = (state_25686[(13)]);var inst_25566 = (state_25686[(14)]);var inst_25572 = cljs.core._nth.call(null,inst_25564,inst_25566);var inst_25573 = cljs.core.nth.call(null,inst_25572,(0),null);var inst_25574 = cljs.core.nth.call(null,inst_25572,(1),null);var state_25686__$1 = (function (){var statearr_25757 = state_25686;(statearr_25757[(28)] = inst_25573);
return statearr_25757;
})();if(cljs.core.truth_(inst_25574))
{var statearr_25758_25819 = state_25686__$1;(statearr_25758_25819[(1)] = (13));
} else
{var statearr_25759_25820 = state_25686__$1;(statearr_25759_25820[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25687 === (18)))
{var inst_25607 = (state_25686[(2)]);var state_25686__$1 = state_25686;var statearr_25760_25821 = state_25686__$1;(statearr_25760_25821[(2)] = inst_25607);
(statearr_25760_25821[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25687 === (42)))
{var state_25686__$1 = state_25686;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25686__$1,(45),dchan);
} else
{if((state_val_25687 === (37)))
{var inst_25643 = (state_25686[(17)]);var inst_25652 = cljs.core.first.call(null,inst_25643);var state_25686__$1 = (function (){var statearr_25761 = state_25686;(statearr_25761[(25)] = inst_25652);
return statearr_25761;
})();var statearr_25762_25822 = state_25686__$1;(statearr_25762_25822[(2)] = null);
(statearr_25762_25822[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25687 === (8)))
{var inst_25566 = (state_25686[(14)]);var inst_25565 = (state_25686[(15)]);var inst_25568 = (inst_25566 < inst_25565);var inst_25569 = inst_25568;var state_25686__$1 = state_25686;if(cljs.core.truth_(inst_25569))
{var statearr_25763_25823 = state_25686__$1;(statearr_25763_25823[(1)] = (10));
} else
{var statearr_25764_25824 = state_25686__$1;(statearr_25764_25824[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__10959__auto___25772,cs,m,dchan,dctr,done))
;return ((function (switch__10894__auto__,c__10959__auto___25772,cs,m,dchan,dctr,done){
return (function() {
var state_machine__10895__auto__ = null;
var state_machine__10895__auto____0 = (function (){var statearr_25768 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25768[(0)] = state_machine__10895__auto__);
(statearr_25768[(1)] = (1));
return statearr_25768;
});
var state_machine__10895__auto____1 = (function (state_25686){while(true){
var ret_value__10896__auto__ = (function (){try{while(true){
var result__10897__auto__ = switch__10894__auto__.call(null,state_25686);if(cljs.core.keyword_identical_QMARK_.call(null,result__10897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10897__auto__;
}
break;
}
}catch (e25769){if((e25769 instanceof Object))
{var ex__10898__auto__ = e25769;var statearr_25770_25825 = state_25686;(statearr_25770_25825[(5)] = ex__10898__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25686);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25769;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25826 = state_25686;
state_25686 = G__25826;
continue;
}
} else
{return ret_value__10896__auto__;
}
break;
}
});
state_machine__10895__auto__ = function(state_25686){
switch(arguments.length){
case 0:
return state_machine__10895__auto____0.call(this);
case 1:
return state_machine__10895__auto____1.call(this,state_25686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10895__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10895__auto____0;
state_machine__10895__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10895__auto____1;
return state_machine__10895__auto__;
})()
;})(switch__10894__auto__,c__10959__auto___25772,cs,m,dchan,dctr,done))
})();var state__10961__auto__ = (function (){var statearr_25771 = f__10960__auto__.call(null);(statearr_25771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10959__auto___25772);
return statearr_25771;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10961__auto__);
});})(c__10959__auto___25772,cs,m,dchan,dctr,done))
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
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj25828 = {};return obj25828;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__7882__auto__ = m;if(and__7882__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__7882__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__8521__auto__ = (((m == null))?null:m);return (function (){var or__7894__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8521__auto__)]);if(or__7894__auto__)
{return or__7894__auto__;
} else
{var or__7894__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__7894__auto____$1)
{return or__7894__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__7882__auto__ = m;if(and__7882__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__7882__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__8521__auto__ = (((m == null))?null:m);return (function (){var or__7894__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8521__auto__)]);if(or__7894__auto__)
{return or__7894__auto__;
} else
{var or__7894__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__7894__auto____$1)
{return or__7894__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__7882__auto__ = m;if(and__7882__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__7882__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__8521__auto__ = (((m == null))?null:m);return (function (){var or__7894__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8521__auto__)]);if(or__7894__auto__)
{return or__7894__auto__;
} else
{var or__7894__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__7894__auto____$1)
{return or__7894__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__7882__auto__ = m;if(and__7882__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__7882__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__8521__auto__ = (((m == null))?null:m);return (function (){var or__7894__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8521__auto__)]);if(or__7894__auto__)
{return or__7894__auto__;
} else
{var or__7894__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__7894__auto____$1)
{return or__7894__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__7882__auto__ = m;if(and__7882__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__7882__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__8521__auto__ = (((m == null))?null:m);return (function (){var or__7894__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8521__auto__)]);if(or__7894__auto__)
{return or__7894__auto__;
} else
{var or__7894__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__7894__auto____$1)
{return or__7894__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t25938 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25938 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25939){
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
this.meta25939 = meta25939;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25938.cljs$lang$type = true;
cljs.core.async.t25938.cljs$lang$ctorStr = "cljs.core.async/t25938";
cljs.core.async.t25938.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8461__auto__,writer__8462__auto__,opt__8463__auto__){return cljs.core._write.call(null,writer__8462__auto__,"cljs.core.async/t25938");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25938.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t25938.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25938.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25938.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25938.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25938.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25938.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25938.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25938.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25940){var self__ = this;
var _25940__$1 = this;return self__.meta25939;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25940,meta25939__$1){var self__ = this;
var _25940__$1 = this;return (new cljs.core.async.t25938(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25939__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t25938 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25938(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25939){return (new cljs.core.async.t25938(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25939));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t25938(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__10959__auto___26047 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10959__auto___26047,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__10960__auto__ = (function (){var switch__10894__auto__ = ((function (c__10959__auto___26047,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26005){var state_val_26006 = (state_26005[(1)]);if((state_val_26006 === (7)))
{var inst_25954 = (state_26005[(7)]);var inst_25959 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25954);var state_26005__$1 = state_26005;var statearr_26007_26048 = state_26005__$1;(statearr_26007_26048[(2)] = inst_25959);
(statearr_26007_26048[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26006 === (20)))
{var inst_25969 = (state_26005[(8)]);var state_26005__$1 = state_26005;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26005__$1,(23),out,inst_25969);
} else
{if((state_val_26006 === (1)))
{var inst_25944 = (state_26005[(9)]);var inst_25944__$1 = calc_state.call(null);var inst_25945 = cljs.core.seq_QMARK_.call(null,inst_25944__$1);var state_26005__$1 = (function (){var statearr_26008 = state_26005;(statearr_26008[(9)] = inst_25944__$1);
return statearr_26008;
})();if(inst_25945)
{var statearr_26009_26049 = state_26005__$1;(statearr_26009_26049[(1)] = (2));
} else
{var statearr_26010_26050 = state_26005__$1;(statearr_26010_26050[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26006 === (4)))
{var inst_25944 = (state_26005[(9)]);var inst_25950 = (state_26005[(2)]);var inst_25951 = cljs.core.get.call(null,inst_25950,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_25952 = cljs.core.get.call(null,inst_25950,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_25953 = cljs.core.get.call(null,inst_25950,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_25954 = inst_25944;var state_26005__$1 = (function (){var statearr_26011 = state_26005;(statearr_26011[(7)] = inst_25954);
(statearr_26011[(10)] = inst_25951);
(statearr_26011[(11)] = inst_25952);
(statearr_26011[(12)] = inst_25953);
return statearr_26011;
})();var statearr_26012_26051 = state_26005__$1;(statearr_26012_26051[(2)] = null);
(statearr_26012_26051[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26006 === (15)))
{var state_26005__$1 = state_26005;var statearr_26013_26052 = state_26005__$1;(statearr_26013_26052[(2)] = null);
(statearr_26013_26052[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26006 === (21)))
{var state_26005__$1 = state_26005;var statearr_26014_26053 = state_26005__$1;(statearr_26014_26053[(2)] = null);
(statearr_26014_26053[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26006 === (13)))
{var inst_26001 = (state_26005[(2)]);var state_26005__$1 = state_26005;var statearr_26015_26054 = state_26005__$1;(statearr_26015_26054[(2)] = inst_26001);
(statearr_26015_26054[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26006 === (22)))
{var inst_25962 = (state_26005[(13)]);var inst_25998 = (state_26005[(2)]);var inst_25954 = inst_25962;var state_26005__$1 = (function (){var statearr_26016 = state_26005;(statearr_26016[(7)] = inst_25954);
(statearr_26016[(14)] = inst_25998);
return statearr_26016;
})();var statearr_26017_26055 = state_26005__$1;(statearr_26017_26055[(2)] = null);
(statearr_26017_26055[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26006 === (6)))
{var inst_26003 = (state_26005[(2)]);var state_26005__$1 = state_26005;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26005__$1,inst_26003);
} else
{if((state_val_26006 === (17)))
{var inst_25984 = (state_26005[(15)]);var state_26005__$1 = state_26005;var statearr_26018_26056 = state_26005__$1;(statearr_26018_26056[(2)] = inst_25984);
(statearr_26018_26056[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26006 === (3)))
{var inst_25944 = (state_26005[(9)]);var state_26005__$1 = state_26005;var statearr_26019_26057 = state_26005__$1;(statearr_26019_26057[(2)] = inst_25944);
(statearr_26019_26057[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26006 === (12)))
{var inst_25984 = (state_26005[(15)]);var inst_25970 = (state_26005[(16)]);var inst_25965 = (state_26005[(17)]);var inst_25984__$1 = inst_25965.call(null,inst_25970);var state_26005__$1 = (function (){var statearr_26020 = state_26005;(statearr_26020[(15)] = inst_25984__$1);
return statearr_26020;
})();if(cljs.core.truth_(inst_25984__$1))
{var statearr_26021_26058 = state_26005__$1;(statearr_26021_26058[(1)] = (17));
} else
{var statearr_26022_26059 = state_26005__$1;(statearr_26022_26059[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26006 === (2)))
{var inst_25944 = (state_26005[(9)]);var inst_25947 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25944);var state_26005__$1 = state_26005;var statearr_26023_26060 = state_26005__$1;(statearr_26023_26060[(2)] = inst_25947);
(statearr_26023_26060[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26006 === (23)))
{var inst_25995 = (state_26005[(2)]);var state_26005__$1 = state_26005;var statearr_26024_26061 = state_26005__$1;(statearr_26024_26061[(2)] = inst_25995);
(statearr_26024_26061[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26006 === (19)))
{var inst_25992 = (state_26005[(2)]);var state_26005__$1 = state_26005;if(cljs.core.truth_(inst_25992))
{var statearr_26025_26062 = state_26005__$1;(statearr_26025_26062[(1)] = (20));
} else
{var statearr_26026_26063 = state_26005__$1;(statearr_26026_26063[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26006 === (11)))
{var inst_25969 = (state_26005[(8)]);var inst_25975 = (inst_25969 == null);var state_26005__$1 = state_26005;if(cljs.core.truth_(inst_25975))
{var statearr_26027_26064 = state_26005__$1;(statearr_26027_26064[(1)] = (14));
} else
{var statearr_26028_26065 = state_26005__$1;(statearr_26028_26065[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26006 === (9)))
{var inst_25962 = (state_26005[(13)]);var inst_25962__$1 = (state_26005[(2)]);var inst_25963 = cljs.core.get.call(null,inst_25962__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_25964 = cljs.core.get.call(null,inst_25962__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_25965 = cljs.core.get.call(null,inst_25962__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_26005__$1 = (function (){var statearr_26029 = state_26005;(statearr_26029[(18)] = inst_25964);
(statearr_26029[(13)] = inst_25962__$1);
(statearr_26029[(17)] = inst_25965);
return statearr_26029;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_26005__$1,(10),inst_25963);
} else
{if((state_val_26006 === (5)))
{var inst_25954 = (state_26005[(7)]);var inst_25957 = cljs.core.seq_QMARK_.call(null,inst_25954);var state_26005__$1 = state_26005;if(inst_25957)
{var statearr_26030_26066 = state_26005__$1;(statearr_26030_26066[(1)] = (7));
} else
{var statearr_26031_26067 = state_26005__$1;(statearr_26031_26067[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26006 === (14)))
{var inst_25970 = (state_26005[(16)]);var inst_25977 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25970);var state_26005__$1 = state_26005;var statearr_26032_26068 = state_26005__$1;(statearr_26032_26068[(2)] = inst_25977);
(statearr_26032_26068[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26006 === (16)))
{var inst_25980 = (state_26005[(2)]);var inst_25981 = calc_state.call(null);var inst_25954 = inst_25981;var state_26005__$1 = (function (){var statearr_26033 = state_26005;(statearr_26033[(7)] = inst_25954);
(statearr_26033[(19)] = inst_25980);
return statearr_26033;
})();var statearr_26034_26069 = state_26005__$1;(statearr_26034_26069[(2)] = null);
(statearr_26034_26069[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26006 === (10)))
{var inst_25969 = (state_26005[(8)]);var inst_25970 = (state_26005[(16)]);var inst_25968 = (state_26005[(2)]);var inst_25969__$1 = cljs.core.nth.call(null,inst_25968,(0),null);var inst_25970__$1 = cljs.core.nth.call(null,inst_25968,(1),null);var inst_25971 = (inst_25969__$1 == null);var inst_25972 = cljs.core._EQ_.call(null,inst_25970__$1,change);var inst_25973 = (inst_25971) || (inst_25972);var state_26005__$1 = (function (){var statearr_26035 = state_26005;(statearr_26035[(8)] = inst_25969__$1);
(statearr_26035[(16)] = inst_25970__$1);
return statearr_26035;
})();if(cljs.core.truth_(inst_25973))
{var statearr_26036_26070 = state_26005__$1;(statearr_26036_26070[(1)] = (11));
} else
{var statearr_26037_26071 = state_26005__$1;(statearr_26037_26071[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26006 === (18)))
{var inst_25964 = (state_26005[(18)]);var inst_25970 = (state_26005[(16)]);var inst_25965 = (state_26005[(17)]);var inst_25987 = cljs.core.empty_QMARK_.call(null,inst_25965);var inst_25988 = inst_25964.call(null,inst_25970);var inst_25989 = cljs.core.not.call(null,inst_25988);var inst_25990 = (inst_25987) && (inst_25989);var state_26005__$1 = state_26005;var statearr_26038_26072 = state_26005__$1;(statearr_26038_26072[(2)] = inst_25990);
(statearr_26038_26072[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26006 === (8)))
{var inst_25954 = (state_26005[(7)]);var state_26005__$1 = state_26005;var statearr_26039_26073 = state_26005__$1;(statearr_26039_26073[(2)] = inst_25954);
(statearr_26039_26073[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__10959__auto___26047,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__10894__auto__,c__10959__auto___26047,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__10895__auto__ = null;
var state_machine__10895__auto____0 = (function (){var statearr_26043 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26043[(0)] = state_machine__10895__auto__);
(statearr_26043[(1)] = (1));
return statearr_26043;
});
var state_machine__10895__auto____1 = (function (state_26005){while(true){
var ret_value__10896__auto__ = (function (){try{while(true){
var result__10897__auto__ = switch__10894__auto__.call(null,state_26005);if(cljs.core.keyword_identical_QMARK_.call(null,result__10897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10897__auto__;
}
break;
}
}catch (e26044){if((e26044 instanceof Object))
{var ex__10898__auto__ = e26044;var statearr_26045_26074 = state_26005;(statearr_26045_26074[(5)] = ex__10898__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26005);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26044;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26075 = state_26005;
state_26005 = G__26075;
continue;
}
} else
{return ret_value__10896__auto__;
}
break;
}
});
state_machine__10895__auto__ = function(state_26005){
switch(arguments.length){
case 0:
return state_machine__10895__auto____0.call(this);
case 1:
return state_machine__10895__auto____1.call(this,state_26005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10895__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10895__auto____0;
state_machine__10895__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10895__auto____1;
return state_machine__10895__auto__;
})()
;})(switch__10894__auto__,c__10959__auto___26047,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__10961__auto__ = (function (){var statearr_26046 = f__10960__auto__.call(null);(statearr_26046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10959__auto___26047);
return statearr_26046;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10961__auto__);
});})(c__10959__auto___26047,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj26077 = {};return obj26077;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__7882__auto__ = p;if(and__7882__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__7882__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__8521__auto__ = (((p == null))?null:p);return (function (){var or__7894__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8521__auto__)]);if(or__7894__auto__)
{return or__7894__auto__;
} else
{var or__7894__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__7894__auto____$1)
{return or__7894__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__7882__auto__ = p;if(and__7882__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__7882__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__8521__auto__ = (((p == null))?null:p);return (function (){var or__7894__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8521__auto__)]);if(or__7894__auto__)
{return or__7894__auto__;
} else
{var or__7894__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__7894__auto____$1)
{return or__7894__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__7882__auto__ = p;if(and__7882__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__7882__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__8521__auto__ = (((p == null))?null:p);return (function (){var or__7894__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8521__auto__)]);if(or__7894__auto__)
{return or__7894__auto__;
} else
{var or__7894__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7894__auto____$1)
{return or__7894__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__7882__auto__ = p;if(and__7882__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__7882__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__8521__auto__ = (((p == null))?null:p);return (function (){var or__7894__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8521__auto__)]);if(or__7894__auto__)
{return or__7894__auto__;
} else
{var or__7894__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7894__auto____$1)
{return or__7894__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
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
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__7894__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__7894__auto__))
{return or__7894__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7894__auto__,mults){
return (function (p1__26078_SHARP_){if(cljs.core.truth_(p1__26078_SHARP_.call(null,topic)))
{return p1__26078_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__26078_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7894__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t26203 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26203 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta26204){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta26204 = meta26204;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26203.cljs$lang$type = true;
cljs.core.async.t26203.cljs$lang$ctorStr = "cljs.core.async/t26203";
cljs.core.async.t26203.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8461__auto__,writer__8462__auto__,opt__8463__auto__){return cljs.core._write.call(null,writer__8462__auto__,"cljs.core.async/t26203");
});})(mults,ensure_mult))
;
cljs.core.async.t26203.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t26203.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t26203.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t26203.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t26203.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t26203.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26203.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t26203.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26205){var self__ = this;
var _26205__$1 = this;return self__.meta26204;
});})(mults,ensure_mult))
;
cljs.core.async.t26203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26205,meta26204__$1){var self__ = this;
var _26205__$1 = this;return (new cljs.core.async.t26203(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta26204__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t26203 = ((function (mults,ensure_mult){
return (function __GT_t26203(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26204){return (new cljs.core.async.t26203(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26204));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t26203(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__10959__auto___26327 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10959__auto___26327,mults,ensure_mult,p){
return (function (){var f__10960__auto__ = (function (){var switch__10894__auto__ = ((function (c__10959__auto___26327,mults,ensure_mult,p){
return (function (state_26279){var state_val_26280 = (state_26279[(1)]);if((state_val_26280 === (7)))
{var inst_26275 = (state_26279[(2)]);var state_26279__$1 = state_26279;var statearr_26281_26328 = state_26279__$1;(statearr_26281_26328[(2)] = inst_26275);
(statearr_26281_26328[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26280 === (20)))
{var state_26279__$1 = state_26279;var statearr_26282_26329 = state_26279__$1;(statearr_26282_26329[(2)] = null);
(statearr_26282_26329[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26280 === (1)))
{var state_26279__$1 = state_26279;var statearr_26283_26330 = state_26279__$1;(statearr_26283_26330[(2)] = null);
(statearr_26283_26330[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26280 === (24)))
{var inst_26258 = (state_26279[(7)]);var inst_26208 = (state_26279[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26279,(23),Object,null,(22));var inst_26265 = cljs.core.async.muxch_STAR_.call(null,inst_26258);var state_26279__$1 = state_26279;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26279__$1,(25),inst_26265,inst_26208);
} else
{if((state_val_26280 === (4)))
{var inst_26208 = (state_26279[(8)]);var inst_26208__$1 = (state_26279[(2)]);var inst_26209 = (inst_26208__$1 == null);var state_26279__$1 = (function (){var statearr_26284 = state_26279;(statearr_26284[(8)] = inst_26208__$1);
return statearr_26284;
})();if(cljs.core.truth_(inst_26209))
{var statearr_26285_26331 = state_26279__$1;(statearr_26285_26331[(1)] = (5));
} else
{var statearr_26286_26332 = state_26279__$1;(statearr_26286_26332[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26280 === (15)))
{var inst_26250 = (state_26279[(2)]);var state_26279__$1 = state_26279;var statearr_26287_26333 = state_26279__$1;(statearr_26287_26333[(2)] = inst_26250);
(statearr_26287_26333[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26280 === (21)))
{var inst_26272 = (state_26279[(2)]);var state_26279__$1 = (function (){var statearr_26288 = state_26279;(statearr_26288[(9)] = inst_26272);
return statearr_26288;
})();var statearr_26289_26334 = state_26279__$1;(statearr_26289_26334[(2)] = null);
(statearr_26289_26334[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26280 === (13)))
{var inst_26232 = (state_26279[(10)]);var inst_26234 = cljs.core.chunked_seq_QMARK_.call(null,inst_26232);var state_26279__$1 = state_26279;if(inst_26234)
{var statearr_26290_26335 = state_26279__$1;(statearr_26290_26335[(1)] = (16));
} else
{var statearr_26291_26336 = state_26279__$1;(statearr_26291_26336[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26280 === (22)))
{var inst_26269 = (state_26279[(2)]);var state_26279__$1 = state_26279;var statearr_26292_26337 = state_26279__$1;(statearr_26292_26337[(2)] = inst_26269);
(statearr_26292_26337[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26280 === (6)))
{var inst_26256 = (state_26279[(11)]);var inst_26258 = (state_26279[(7)]);var inst_26208 = (state_26279[(8)]);var inst_26256__$1 = topic_fn.call(null,inst_26208);var inst_26257 = cljs.core.deref.call(null,mults);var inst_26258__$1 = cljs.core.get.call(null,inst_26257,inst_26256__$1);var state_26279__$1 = (function (){var statearr_26293 = state_26279;(statearr_26293[(11)] = inst_26256__$1);
(statearr_26293[(7)] = inst_26258__$1);
return statearr_26293;
})();if(cljs.core.truth_(inst_26258__$1))
{var statearr_26294_26338 = state_26279__$1;(statearr_26294_26338[(1)] = (19));
} else
{var statearr_26295_26339 = state_26279__$1;(statearr_26295_26339[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26280 === (25)))
{var inst_26267 = (state_26279[(2)]);var state_26279__$1 = state_26279;var statearr_26296_26340 = state_26279__$1;(statearr_26296_26340[(2)] = inst_26267);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26279__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26280 === (17)))
{var inst_26232 = (state_26279[(10)]);var inst_26241 = cljs.core.first.call(null,inst_26232);var inst_26242 = cljs.core.async.muxch_STAR_.call(null,inst_26241);var inst_26243 = cljs.core.async.close_BANG_.call(null,inst_26242);var inst_26244 = cljs.core.next.call(null,inst_26232);var inst_26218 = inst_26244;var inst_26219 = null;var inst_26220 = (0);var inst_26221 = (0);var state_26279__$1 = (function (){var statearr_26297 = state_26279;(statearr_26297[(12)] = inst_26218);
(statearr_26297[(13)] = inst_26219);
(statearr_26297[(14)] = inst_26243);
(statearr_26297[(15)] = inst_26220);
(statearr_26297[(16)] = inst_26221);
return statearr_26297;
})();var statearr_26298_26341 = state_26279__$1;(statearr_26298_26341[(2)] = null);
(statearr_26298_26341[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26280 === (3)))
{var inst_26277 = (state_26279[(2)]);var state_26279__$1 = state_26279;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26279__$1,inst_26277);
} else
{if((state_val_26280 === (12)))
{var inst_26252 = (state_26279[(2)]);var state_26279__$1 = state_26279;var statearr_26299_26342 = state_26279__$1;(statearr_26299_26342[(2)] = inst_26252);
(statearr_26299_26342[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26280 === (2)))
{var state_26279__$1 = state_26279;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26279__$1,(4),ch);
} else
{if((state_val_26280 === (23)))
{var inst_26256 = (state_26279[(11)]);var inst_26260 = (state_26279[(2)]);var inst_26261 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26256);var state_26279__$1 = (function (){var statearr_26300 = state_26279;(statearr_26300[(17)] = inst_26260);
return statearr_26300;
})();var statearr_26301_26343 = state_26279__$1;(statearr_26301_26343[(2)] = inst_26261);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26279__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26280 === (19)))
{var state_26279__$1 = state_26279;var statearr_26302_26344 = state_26279__$1;(statearr_26302_26344[(2)] = null);
(statearr_26302_26344[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26280 === (11)))
{var inst_26218 = (state_26279[(12)]);var inst_26232 = (state_26279[(10)]);var inst_26232__$1 = cljs.core.seq.call(null,inst_26218);var state_26279__$1 = (function (){var statearr_26303 = state_26279;(statearr_26303[(10)] = inst_26232__$1);
return statearr_26303;
})();if(inst_26232__$1)
{var statearr_26304_26345 = state_26279__$1;(statearr_26304_26345[(1)] = (13));
} else
{var statearr_26305_26346 = state_26279__$1;(statearr_26305_26346[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26280 === (9)))
{var inst_26254 = (state_26279[(2)]);var state_26279__$1 = state_26279;var statearr_26306_26347 = state_26279__$1;(statearr_26306_26347[(2)] = inst_26254);
(statearr_26306_26347[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26280 === (5)))
{var inst_26215 = cljs.core.deref.call(null,mults);var inst_26216 = cljs.core.vals.call(null,inst_26215);var inst_26217 = cljs.core.seq.call(null,inst_26216);var inst_26218 = inst_26217;var inst_26219 = null;var inst_26220 = (0);var inst_26221 = (0);var state_26279__$1 = (function (){var statearr_26307 = state_26279;(statearr_26307[(12)] = inst_26218);
(statearr_26307[(13)] = inst_26219);
(statearr_26307[(15)] = inst_26220);
(statearr_26307[(16)] = inst_26221);
return statearr_26307;
})();var statearr_26308_26348 = state_26279__$1;(statearr_26308_26348[(2)] = null);
(statearr_26308_26348[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26280 === (14)))
{var state_26279__$1 = state_26279;var statearr_26312_26349 = state_26279__$1;(statearr_26312_26349[(2)] = null);
(statearr_26312_26349[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26280 === (16)))
{var inst_26232 = (state_26279[(10)]);var inst_26236 = cljs.core.chunk_first.call(null,inst_26232);var inst_26237 = cljs.core.chunk_rest.call(null,inst_26232);var inst_26238 = cljs.core.count.call(null,inst_26236);var inst_26218 = inst_26237;var inst_26219 = inst_26236;var inst_26220 = inst_26238;var inst_26221 = (0);var state_26279__$1 = (function (){var statearr_26313 = state_26279;(statearr_26313[(12)] = inst_26218);
(statearr_26313[(13)] = inst_26219);
(statearr_26313[(15)] = inst_26220);
(statearr_26313[(16)] = inst_26221);
return statearr_26313;
})();var statearr_26314_26350 = state_26279__$1;(statearr_26314_26350[(2)] = null);
(statearr_26314_26350[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26280 === (10)))
{var inst_26218 = (state_26279[(12)]);var inst_26219 = (state_26279[(13)]);var inst_26220 = (state_26279[(15)]);var inst_26221 = (state_26279[(16)]);var inst_26226 = cljs.core._nth.call(null,inst_26219,inst_26221);var inst_26227 = cljs.core.async.muxch_STAR_.call(null,inst_26226);var inst_26228 = cljs.core.async.close_BANG_.call(null,inst_26227);var inst_26229 = (inst_26221 + (1));var tmp26309 = inst_26218;var tmp26310 = inst_26219;var tmp26311 = inst_26220;var inst_26218__$1 = tmp26309;var inst_26219__$1 = tmp26310;var inst_26220__$1 = tmp26311;var inst_26221__$1 = inst_26229;var state_26279__$1 = (function (){var statearr_26315 = state_26279;(statearr_26315[(12)] = inst_26218__$1);
(statearr_26315[(13)] = inst_26219__$1);
(statearr_26315[(18)] = inst_26228);
(statearr_26315[(15)] = inst_26220__$1);
(statearr_26315[(16)] = inst_26221__$1);
return statearr_26315;
})();var statearr_26316_26351 = state_26279__$1;(statearr_26316_26351[(2)] = null);
(statearr_26316_26351[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26280 === (18)))
{var inst_26247 = (state_26279[(2)]);var state_26279__$1 = state_26279;var statearr_26317_26352 = state_26279__$1;(statearr_26317_26352[(2)] = inst_26247);
(statearr_26317_26352[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26280 === (8)))
{var inst_26220 = (state_26279[(15)]);var inst_26221 = (state_26279[(16)]);var inst_26223 = (inst_26221 < inst_26220);var inst_26224 = inst_26223;var state_26279__$1 = state_26279;if(cljs.core.truth_(inst_26224))
{var statearr_26318_26353 = state_26279__$1;(statearr_26318_26353[(1)] = (10));
} else
{var statearr_26319_26354 = state_26279__$1;(statearr_26319_26354[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__10959__auto___26327,mults,ensure_mult,p))
;return ((function (switch__10894__auto__,c__10959__auto___26327,mults,ensure_mult,p){
return (function() {
var state_machine__10895__auto__ = null;
var state_machine__10895__auto____0 = (function (){var statearr_26323 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26323[(0)] = state_machine__10895__auto__);
(statearr_26323[(1)] = (1));
return statearr_26323;
});
var state_machine__10895__auto____1 = (function (state_26279){while(true){
var ret_value__10896__auto__ = (function (){try{while(true){
var result__10897__auto__ = switch__10894__auto__.call(null,state_26279);if(cljs.core.keyword_identical_QMARK_.call(null,result__10897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10897__auto__;
}
break;
}
}catch (e26324){if((e26324 instanceof Object))
{var ex__10898__auto__ = e26324;var statearr_26325_26355 = state_26279;(statearr_26325_26355[(5)] = ex__10898__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26279);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26324;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26356 = state_26279;
state_26279 = G__26356;
continue;
}
} else
{return ret_value__10896__auto__;
}
break;
}
});
state_machine__10895__auto__ = function(state_26279){
switch(arguments.length){
case 0:
return state_machine__10895__auto____0.call(this);
case 1:
return state_machine__10895__auto____1.call(this,state_26279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10895__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10895__auto____0;
state_machine__10895__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10895__auto____1;
return state_machine__10895__auto__;
})()
;})(switch__10894__auto__,c__10959__auto___26327,mults,ensure_mult,p))
})();var state__10961__auto__ = (function (){var statearr_26326 = f__10960__auto__.call(null);(statearr_26326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10959__auto___26327);
return statearr_26326;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10961__auto__);
});})(c__10959__auto___26327,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
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
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__10959__auto___26493 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10959__auto___26493,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__10960__auto__ = (function (){var switch__10894__auto__ = ((function (c__10959__auto___26493,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26463){var state_val_26464 = (state_26463[(1)]);if((state_val_26464 === (7)))
{var state_26463__$1 = state_26463;var statearr_26465_26494 = state_26463__$1;(statearr_26465_26494[(2)] = null);
(statearr_26465_26494[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26464 === (1)))
{var state_26463__$1 = state_26463;var statearr_26466_26495 = state_26463__$1;(statearr_26466_26495[(2)] = null);
(statearr_26466_26495[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26464 === (4)))
{var inst_26427 = (state_26463[(7)]);var inst_26429 = (inst_26427 < cnt);var state_26463__$1 = state_26463;if(cljs.core.truth_(inst_26429))
{var statearr_26467_26496 = state_26463__$1;(statearr_26467_26496[(1)] = (6));
} else
{var statearr_26468_26497 = state_26463__$1;(statearr_26468_26497[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26464 === (15)))
{var inst_26459 = (state_26463[(2)]);var state_26463__$1 = state_26463;var statearr_26469_26498 = state_26463__$1;(statearr_26469_26498[(2)] = inst_26459);
(statearr_26469_26498[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26464 === (13)))
{var inst_26452 = cljs.core.async.close_BANG_.call(null,out);var state_26463__$1 = state_26463;var statearr_26470_26499 = state_26463__$1;(statearr_26470_26499[(2)] = inst_26452);
(statearr_26470_26499[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26464 === (6)))
{var state_26463__$1 = state_26463;var statearr_26471_26500 = state_26463__$1;(statearr_26471_26500[(2)] = null);
(statearr_26471_26500[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26464 === (3)))
{var inst_26461 = (state_26463[(2)]);var state_26463__$1 = state_26463;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26463__$1,inst_26461);
} else
{if((state_val_26464 === (12)))
{var inst_26449 = (state_26463[(8)]);var inst_26449__$1 = (state_26463[(2)]);var inst_26450 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26449__$1);var state_26463__$1 = (function (){var statearr_26472 = state_26463;(statearr_26472[(8)] = inst_26449__$1);
return statearr_26472;
})();if(cljs.core.truth_(inst_26450))
{var statearr_26473_26501 = state_26463__$1;(statearr_26473_26501[(1)] = (13));
} else
{var statearr_26474_26502 = state_26463__$1;(statearr_26474_26502[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26464 === (2)))
{var inst_26426 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_26427 = (0);var state_26463__$1 = (function (){var statearr_26475 = state_26463;(statearr_26475[(9)] = inst_26426);
(statearr_26475[(7)] = inst_26427);
return statearr_26475;
})();var statearr_26476_26503 = state_26463__$1;(statearr_26476_26503[(2)] = null);
(statearr_26476_26503[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26464 === (11)))
{var inst_26427 = (state_26463[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26463,(10),Object,null,(9));var inst_26436 = chs__$1.call(null,inst_26427);var inst_26437 = done.call(null,inst_26427);var inst_26438 = cljs.core.async.take_BANG_.call(null,inst_26436,inst_26437);var state_26463__$1 = state_26463;var statearr_26477_26504 = state_26463__$1;(statearr_26477_26504[(2)] = inst_26438);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26463__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26464 === (9)))
{var inst_26427 = (state_26463[(7)]);var inst_26440 = (state_26463[(2)]);var inst_26441 = (inst_26427 + (1));var inst_26427__$1 = inst_26441;var state_26463__$1 = (function (){var statearr_26478 = state_26463;(statearr_26478[(10)] = inst_26440);
(statearr_26478[(7)] = inst_26427__$1);
return statearr_26478;
})();var statearr_26479_26505 = state_26463__$1;(statearr_26479_26505[(2)] = null);
(statearr_26479_26505[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26464 === (5)))
{var inst_26447 = (state_26463[(2)]);var state_26463__$1 = (function (){var statearr_26480 = state_26463;(statearr_26480[(11)] = inst_26447);
return statearr_26480;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26463__$1,(12),dchan);
} else
{if((state_val_26464 === (14)))
{var inst_26449 = (state_26463[(8)]);var inst_26454 = cljs.core.apply.call(null,f,inst_26449);var state_26463__$1 = state_26463;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26463__$1,(16),out,inst_26454);
} else
{if((state_val_26464 === (16)))
{var inst_26456 = (state_26463[(2)]);var state_26463__$1 = (function (){var statearr_26481 = state_26463;(statearr_26481[(12)] = inst_26456);
return statearr_26481;
})();var statearr_26482_26506 = state_26463__$1;(statearr_26482_26506[(2)] = null);
(statearr_26482_26506[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26464 === (10)))
{var inst_26431 = (state_26463[(2)]);var inst_26432 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_26463__$1 = (function (){var statearr_26483 = state_26463;(statearr_26483[(13)] = inst_26431);
return statearr_26483;
})();var statearr_26484_26507 = state_26463__$1;(statearr_26484_26507[(2)] = inst_26432);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26463__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26464 === (8)))
{var inst_26445 = (state_26463[(2)]);var state_26463__$1 = state_26463;var statearr_26485_26508 = state_26463__$1;(statearr_26485_26508[(2)] = inst_26445);
(statearr_26485_26508[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__10959__auto___26493,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__10894__auto__,c__10959__auto___26493,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__10895__auto__ = null;
var state_machine__10895__auto____0 = (function (){var statearr_26489 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26489[(0)] = state_machine__10895__auto__);
(statearr_26489[(1)] = (1));
return statearr_26489;
});
var state_machine__10895__auto____1 = (function (state_26463){while(true){
var ret_value__10896__auto__ = (function (){try{while(true){
var result__10897__auto__ = switch__10894__auto__.call(null,state_26463);if(cljs.core.keyword_identical_QMARK_.call(null,result__10897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10897__auto__;
}
break;
}
}catch (e26490){if((e26490 instanceof Object))
{var ex__10898__auto__ = e26490;var statearr_26491_26509 = state_26463;(statearr_26491_26509[(5)] = ex__10898__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26463);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26490;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26510 = state_26463;
state_26463 = G__26510;
continue;
}
} else
{return ret_value__10896__auto__;
}
break;
}
});
state_machine__10895__auto__ = function(state_26463){
switch(arguments.length){
case 0:
return state_machine__10895__auto____0.call(this);
case 1:
return state_machine__10895__auto____1.call(this,state_26463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10895__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10895__auto____0;
state_machine__10895__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10895__auto____1;
return state_machine__10895__auto__;
})()
;})(switch__10894__auto__,c__10959__auto___26493,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__10961__auto__ = (function (){var statearr_26492 = f__10960__auto__.call(null);(statearr_26492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10959__auto___26493);
return statearr_26492;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10961__auto__);
});})(c__10959__auto___26493,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10959__auto___26618 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10959__auto___26618,out){
return (function (){var f__10960__auto__ = (function (){var switch__10894__auto__ = ((function (c__10959__auto___26618,out){
return (function (state_26594){var state_val_26595 = (state_26594[(1)]);if((state_val_26595 === (7)))
{var inst_26573 = (state_26594[(7)]);var inst_26574 = (state_26594[(8)]);var inst_26573__$1 = (state_26594[(2)]);var inst_26574__$1 = cljs.core.nth.call(null,inst_26573__$1,(0),null);var inst_26575 = cljs.core.nth.call(null,inst_26573__$1,(1),null);var inst_26576 = (inst_26574__$1 == null);var state_26594__$1 = (function (){var statearr_26596 = state_26594;(statearr_26596[(7)] = inst_26573__$1);
(statearr_26596[(9)] = inst_26575);
(statearr_26596[(8)] = inst_26574__$1);
return statearr_26596;
})();if(cljs.core.truth_(inst_26576))
{var statearr_26597_26619 = state_26594__$1;(statearr_26597_26619[(1)] = (8));
} else
{var statearr_26598_26620 = state_26594__$1;(statearr_26598_26620[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26595 === (1)))
{var inst_26565 = cljs.core.vec.call(null,chs);var inst_26566 = inst_26565;var state_26594__$1 = (function (){var statearr_26599 = state_26594;(statearr_26599[(10)] = inst_26566);
return statearr_26599;
})();var statearr_26600_26621 = state_26594__$1;(statearr_26600_26621[(2)] = null);
(statearr_26600_26621[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26595 === (4)))
{var inst_26566 = (state_26594[(10)]);var state_26594__$1 = state_26594;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_26594__$1,(7),inst_26566);
} else
{if((state_val_26595 === (6)))
{var inst_26590 = (state_26594[(2)]);var state_26594__$1 = state_26594;var statearr_26601_26622 = state_26594__$1;(statearr_26601_26622[(2)] = inst_26590);
(statearr_26601_26622[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26595 === (3)))
{var inst_26592 = (state_26594[(2)]);var state_26594__$1 = state_26594;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26594__$1,inst_26592);
} else
{if((state_val_26595 === (2)))
{var inst_26566 = (state_26594[(10)]);var inst_26568 = cljs.core.count.call(null,inst_26566);var inst_26569 = (inst_26568 > (0));var state_26594__$1 = state_26594;if(cljs.core.truth_(inst_26569))
{var statearr_26603_26623 = state_26594__$1;(statearr_26603_26623[(1)] = (4));
} else
{var statearr_26604_26624 = state_26594__$1;(statearr_26604_26624[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26595 === (11)))
{var inst_26566 = (state_26594[(10)]);var inst_26583 = (state_26594[(2)]);var tmp26602 = inst_26566;var inst_26566__$1 = tmp26602;var state_26594__$1 = (function (){var statearr_26605 = state_26594;(statearr_26605[(10)] = inst_26566__$1);
(statearr_26605[(11)] = inst_26583);
return statearr_26605;
})();var statearr_26606_26625 = state_26594__$1;(statearr_26606_26625[(2)] = null);
(statearr_26606_26625[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26595 === (9)))
{var inst_26574 = (state_26594[(8)]);var state_26594__$1 = state_26594;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26594__$1,(11),out,inst_26574);
} else
{if((state_val_26595 === (5)))
{var inst_26588 = cljs.core.async.close_BANG_.call(null,out);var state_26594__$1 = state_26594;var statearr_26607_26626 = state_26594__$1;(statearr_26607_26626[(2)] = inst_26588);
(statearr_26607_26626[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26595 === (10)))
{var inst_26586 = (state_26594[(2)]);var state_26594__$1 = state_26594;var statearr_26608_26627 = state_26594__$1;(statearr_26608_26627[(2)] = inst_26586);
(statearr_26608_26627[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26595 === (8)))
{var inst_26566 = (state_26594[(10)]);var inst_26573 = (state_26594[(7)]);var inst_26575 = (state_26594[(9)]);var inst_26574 = (state_26594[(8)]);var inst_26578 = (function (){var c = inst_26575;var v = inst_26574;var vec__26571 = inst_26573;var cs = inst_26566;return ((function (c,v,vec__26571,cs,inst_26566,inst_26573,inst_26575,inst_26574,state_val_26595,c__10959__auto___26618,out){
return (function (p1__26511_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__26511_SHARP_);
});
;})(c,v,vec__26571,cs,inst_26566,inst_26573,inst_26575,inst_26574,state_val_26595,c__10959__auto___26618,out))
})();var inst_26579 = cljs.core.filterv.call(null,inst_26578,inst_26566);var inst_26566__$1 = inst_26579;var state_26594__$1 = (function (){var statearr_26609 = state_26594;(statearr_26609[(10)] = inst_26566__$1);
return statearr_26609;
})();var statearr_26610_26628 = state_26594__$1;(statearr_26610_26628[(2)] = null);
(statearr_26610_26628[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__10959__auto___26618,out))
;return ((function (switch__10894__auto__,c__10959__auto___26618,out){
return (function() {
var state_machine__10895__auto__ = null;
var state_machine__10895__auto____0 = (function (){var statearr_26614 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26614[(0)] = state_machine__10895__auto__);
(statearr_26614[(1)] = (1));
return statearr_26614;
});
var state_machine__10895__auto____1 = (function (state_26594){while(true){
var ret_value__10896__auto__ = (function (){try{while(true){
var result__10897__auto__ = switch__10894__auto__.call(null,state_26594);if(cljs.core.keyword_identical_QMARK_.call(null,result__10897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10897__auto__;
}
break;
}
}catch (e26615){if((e26615 instanceof Object))
{var ex__10898__auto__ = e26615;var statearr_26616_26629 = state_26594;(statearr_26616_26629[(5)] = ex__10898__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26594);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26615;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26630 = state_26594;
state_26594 = G__26630;
continue;
}
} else
{return ret_value__10896__auto__;
}
break;
}
});
state_machine__10895__auto__ = function(state_26594){
switch(arguments.length){
case 0:
return state_machine__10895__auto____0.call(this);
case 1:
return state_machine__10895__auto____1.call(this,state_26594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10895__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10895__auto____0;
state_machine__10895__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10895__auto____1;
return state_machine__10895__auto__;
})()
;})(switch__10894__auto__,c__10959__auto___26618,out))
})();var state__10961__auto__ = (function (){var statearr_26617 = f__10960__auto__.call(null);(statearr_26617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10959__auto___26618);
return statearr_26617;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10961__auto__);
});})(c__10959__auto___26618,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10959__auto___26723 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10959__auto___26723,out){
return (function (){var f__10960__auto__ = (function (){var switch__10894__auto__ = ((function (c__10959__auto___26723,out){
return (function (state_26700){var state_val_26701 = (state_26700[(1)]);if((state_val_26701 === (7)))
{var inst_26682 = (state_26700[(7)]);var inst_26682__$1 = (state_26700[(2)]);var inst_26683 = (inst_26682__$1 == null);var inst_26684 = cljs.core.not.call(null,inst_26683);var state_26700__$1 = (function (){var statearr_26702 = state_26700;(statearr_26702[(7)] = inst_26682__$1);
return statearr_26702;
})();if(inst_26684)
{var statearr_26703_26724 = state_26700__$1;(statearr_26703_26724[(1)] = (8));
} else
{var statearr_26704_26725 = state_26700__$1;(statearr_26704_26725[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26701 === (1)))
{var inst_26677 = (0);var state_26700__$1 = (function (){var statearr_26705 = state_26700;(statearr_26705[(8)] = inst_26677);
return statearr_26705;
})();var statearr_26706_26726 = state_26700__$1;(statearr_26706_26726[(2)] = null);
(statearr_26706_26726[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26701 === (4)))
{var state_26700__$1 = state_26700;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26700__$1,(7),ch);
} else
{if((state_val_26701 === (6)))
{var inst_26695 = (state_26700[(2)]);var state_26700__$1 = state_26700;var statearr_26707_26727 = state_26700__$1;(statearr_26707_26727[(2)] = inst_26695);
(statearr_26707_26727[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26701 === (3)))
{var inst_26697 = (state_26700[(2)]);var inst_26698 = cljs.core.async.close_BANG_.call(null,out);var state_26700__$1 = (function (){var statearr_26708 = state_26700;(statearr_26708[(9)] = inst_26697);
return statearr_26708;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26700__$1,inst_26698);
} else
{if((state_val_26701 === (2)))
{var inst_26677 = (state_26700[(8)]);var inst_26679 = (inst_26677 < n);var state_26700__$1 = state_26700;if(cljs.core.truth_(inst_26679))
{var statearr_26709_26728 = state_26700__$1;(statearr_26709_26728[(1)] = (4));
} else
{var statearr_26710_26729 = state_26700__$1;(statearr_26710_26729[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26701 === (11)))
{var inst_26677 = (state_26700[(8)]);var inst_26687 = (state_26700[(2)]);var inst_26688 = (inst_26677 + (1));var inst_26677__$1 = inst_26688;var state_26700__$1 = (function (){var statearr_26711 = state_26700;(statearr_26711[(8)] = inst_26677__$1);
(statearr_26711[(10)] = inst_26687);
return statearr_26711;
})();var statearr_26712_26730 = state_26700__$1;(statearr_26712_26730[(2)] = null);
(statearr_26712_26730[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26701 === (9)))
{var state_26700__$1 = state_26700;var statearr_26713_26731 = state_26700__$1;(statearr_26713_26731[(2)] = null);
(statearr_26713_26731[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26701 === (5)))
{var state_26700__$1 = state_26700;var statearr_26714_26732 = state_26700__$1;(statearr_26714_26732[(2)] = null);
(statearr_26714_26732[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26701 === (10)))
{var inst_26692 = (state_26700[(2)]);var state_26700__$1 = state_26700;var statearr_26715_26733 = state_26700__$1;(statearr_26715_26733[(2)] = inst_26692);
(statearr_26715_26733[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26701 === (8)))
{var inst_26682 = (state_26700[(7)]);var state_26700__$1 = state_26700;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26700__$1,(11),out,inst_26682);
} else
{return null;
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
});})(c__10959__auto___26723,out))
;return ((function (switch__10894__auto__,c__10959__auto___26723,out){
return (function() {
var state_machine__10895__auto__ = null;
var state_machine__10895__auto____0 = (function (){var statearr_26719 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26719[(0)] = state_machine__10895__auto__);
(statearr_26719[(1)] = (1));
return statearr_26719;
});
var state_machine__10895__auto____1 = (function (state_26700){while(true){
var ret_value__10896__auto__ = (function (){try{while(true){
var result__10897__auto__ = switch__10894__auto__.call(null,state_26700);if(cljs.core.keyword_identical_QMARK_.call(null,result__10897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10897__auto__;
}
break;
}
}catch (e26720){if((e26720 instanceof Object))
{var ex__10898__auto__ = e26720;var statearr_26721_26734 = state_26700;(statearr_26721_26734[(5)] = ex__10898__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26700);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26720;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26735 = state_26700;
state_26700 = G__26735;
continue;
}
} else
{return ret_value__10896__auto__;
}
break;
}
});
state_machine__10895__auto__ = function(state_26700){
switch(arguments.length){
case 0:
return state_machine__10895__auto____0.call(this);
case 1:
return state_machine__10895__auto____1.call(this,state_26700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10895__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10895__auto____0;
state_machine__10895__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10895__auto____1;
return state_machine__10895__auto__;
})()
;})(switch__10894__auto__,c__10959__auto___26723,out))
})();var state__10961__auto__ = (function (){var statearr_26722 = f__10960__auto__.call(null);(statearr_26722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10959__auto___26723);
return statearr_26722;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10961__auto__);
});})(c__10959__auto___26723,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10959__auto___26832 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10959__auto___26832,out){
return (function (){var f__10960__auto__ = (function (){var switch__10894__auto__ = ((function (c__10959__auto___26832,out){
return (function (state_26807){var state_val_26808 = (state_26807[(1)]);if((state_val_26808 === (7)))
{var inst_26802 = (state_26807[(2)]);var state_26807__$1 = state_26807;var statearr_26809_26833 = state_26807__$1;(statearr_26809_26833[(2)] = inst_26802);
(statearr_26809_26833[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26808 === (1)))
{var inst_26784 = null;var state_26807__$1 = (function (){var statearr_26810 = state_26807;(statearr_26810[(7)] = inst_26784);
return statearr_26810;
})();var statearr_26811_26834 = state_26807__$1;(statearr_26811_26834[(2)] = null);
(statearr_26811_26834[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26808 === (4)))
{var inst_26787 = (state_26807[(8)]);var inst_26787__$1 = (state_26807[(2)]);var inst_26788 = (inst_26787__$1 == null);var inst_26789 = cljs.core.not.call(null,inst_26788);var state_26807__$1 = (function (){var statearr_26812 = state_26807;(statearr_26812[(8)] = inst_26787__$1);
return statearr_26812;
})();if(inst_26789)
{var statearr_26813_26835 = state_26807__$1;(statearr_26813_26835[(1)] = (5));
} else
{var statearr_26814_26836 = state_26807__$1;(statearr_26814_26836[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26808 === (6)))
{var state_26807__$1 = state_26807;var statearr_26815_26837 = state_26807__$1;(statearr_26815_26837[(2)] = null);
(statearr_26815_26837[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26808 === (3)))
{var inst_26804 = (state_26807[(2)]);var inst_26805 = cljs.core.async.close_BANG_.call(null,out);var state_26807__$1 = (function (){var statearr_26816 = state_26807;(statearr_26816[(9)] = inst_26804);
return statearr_26816;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26807__$1,inst_26805);
} else
{if((state_val_26808 === (2)))
{var state_26807__$1 = state_26807;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26807__$1,(4),ch);
} else
{if((state_val_26808 === (11)))
{var inst_26787 = (state_26807[(8)]);var inst_26796 = (state_26807[(2)]);var inst_26784 = inst_26787;var state_26807__$1 = (function (){var statearr_26817 = state_26807;(statearr_26817[(7)] = inst_26784);
(statearr_26817[(10)] = inst_26796);
return statearr_26817;
})();var statearr_26818_26838 = state_26807__$1;(statearr_26818_26838[(2)] = null);
(statearr_26818_26838[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26808 === (9)))
{var inst_26787 = (state_26807[(8)]);var state_26807__$1 = state_26807;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26807__$1,(11),out,inst_26787);
} else
{if((state_val_26808 === (5)))
{var inst_26787 = (state_26807[(8)]);var inst_26784 = (state_26807[(7)]);var inst_26791 = cljs.core._EQ_.call(null,inst_26787,inst_26784);var state_26807__$1 = state_26807;if(inst_26791)
{var statearr_26820_26839 = state_26807__$1;(statearr_26820_26839[(1)] = (8));
} else
{var statearr_26821_26840 = state_26807__$1;(statearr_26821_26840[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26808 === (10)))
{var inst_26799 = (state_26807[(2)]);var state_26807__$1 = state_26807;var statearr_26822_26841 = state_26807__$1;(statearr_26822_26841[(2)] = inst_26799);
(statearr_26822_26841[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26808 === (8)))
{var inst_26784 = (state_26807[(7)]);var tmp26819 = inst_26784;var inst_26784__$1 = tmp26819;var state_26807__$1 = (function (){var statearr_26823 = state_26807;(statearr_26823[(7)] = inst_26784__$1);
return statearr_26823;
})();var statearr_26824_26842 = state_26807__$1;(statearr_26824_26842[(2)] = null);
(statearr_26824_26842[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__10959__auto___26832,out))
;return ((function (switch__10894__auto__,c__10959__auto___26832,out){
return (function() {
var state_machine__10895__auto__ = null;
var state_machine__10895__auto____0 = (function (){var statearr_26828 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26828[(0)] = state_machine__10895__auto__);
(statearr_26828[(1)] = (1));
return statearr_26828;
});
var state_machine__10895__auto____1 = (function (state_26807){while(true){
var ret_value__10896__auto__ = (function (){try{while(true){
var result__10897__auto__ = switch__10894__auto__.call(null,state_26807);if(cljs.core.keyword_identical_QMARK_.call(null,result__10897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10897__auto__;
}
break;
}
}catch (e26829){if((e26829 instanceof Object))
{var ex__10898__auto__ = e26829;var statearr_26830_26843 = state_26807;(statearr_26830_26843[(5)] = ex__10898__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26807);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26829;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26844 = state_26807;
state_26807 = G__26844;
continue;
}
} else
{return ret_value__10896__auto__;
}
break;
}
});
state_machine__10895__auto__ = function(state_26807){
switch(arguments.length){
case 0:
return state_machine__10895__auto____0.call(this);
case 1:
return state_machine__10895__auto____1.call(this,state_26807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10895__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10895__auto____0;
state_machine__10895__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10895__auto____1;
return state_machine__10895__auto__;
})()
;})(switch__10894__auto__,c__10959__auto___26832,out))
})();var state__10961__auto__ = (function (){var statearr_26831 = f__10960__auto__.call(null);(statearr_26831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10959__auto___26832);
return statearr_26831;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10961__auto__);
});})(c__10959__auto___26832,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10959__auto___26979 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10959__auto___26979,out){
return (function (){var f__10960__auto__ = (function (){var switch__10894__auto__ = ((function (c__10959__auto___26979,out){
return (function (state_26949){var state_val_26950 = (state_26949[(1)]);if((state_val_26950 === (7)))
{var inst_26945 = (state_26949[(2)]);var state_26949__$1 = state_26949;var statearr_26951_26980 = state_26949__$1;(statearr_26951_26980[(2)] = inst_26945);
(statearr_26951_26980[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26950 === (1)))
{var inst_26912 = (new Array(n));var inst_26913 = inst_26912;var inst_26914 = (0);var state_26949__$1 = (function (){var statearr_26952 = state_26949;(statearr_26952[(7)] = inst_26914);
(statearr_26952[(8)] = inst_26913);
return statearr_26952;
})();var statearr_26953_26981 = state_26949__$1;(statearr_26953_26981[(2)] = null);
(statearr_26953_26981[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26950 === (4)))
{var inst_26917 = (state_26949[(9)]);var inst_26917__$1 = (state_26949[(2)]);var inst_26918 = (inst_26917__$1 == null);var inst_26919 = cljs.core.not.call(null,inst_26918);var state_26949__$1 = (function (){var statearr_26954 = state_26949;(statearr_26954[(9)] = inst_26917__$1);
return statearr_26954;
})();if(inst_26919)
{var statearr_26955_26982 = state_26949__$1;(statearr_26955_26982[(1)] = (5));
} else
{var statearr_26956_26983 = state_26949__$1;(statearr_26956_26983[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26950 === (15)))
{var inst_26939 = (state_26949[(2)]);var state_26949__$1 = state_26949;var statearr_26957_26984 = state_26949__$1;(statearr_26957_26984[(2)] = inst_26939);
(statearr_26957_26984[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26950 === (13)))
{var state_26949__$1 = state_26949;var statearr_26958_26985 = state_26949__$1;(statearr_26958_26985[(2)] = null);
(statearr_26958_26985[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26950 === (6)))
{var inst_26914 = (state_26949[(7)]);var inst_26935 = (inst_26914 > (0));var state_26949__$1 = state_26949;if(cljs.core.truth_(inst_26935))
{var statearr_26959_26986 = state_26949__$1;(statearr_26959_26986[(1)] = (12));
} else
{var statearr_26960_26987 = state_26949__$1;(statearr_26960_26987[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26950 === (3)))
{var inst_26947 = (state_26949[(2)]);var state_26949__$1 = state_26949;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26949__$1,inst_26947);
} else
{if((state_val_26950 === (12)))
{var inst_26913 = (state_26949[(8)]);var inst_26937 = cljs.core.vec.call(null,inst_26913);var state_26949__$1 = state_26949;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26949__$1,(15),out,inst_26937);
} else
{if((state_val_26950 === (2)))
{var state_26949__$1 = state_26949;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26949__$1,(4),ch);
} else
{if((state_val_26950 === (11)))
{var inst_26929 = (state_26949[(2)]);var inst_26930 = (new Array(n));var inst_26913 = inst_26930;var inst_26914 = (0);var state_26949__$1 = (function (){var statearr_26961 = state_26949;(statearr_26961[(7)] = inst_26914);
(statearr_26961[(8)] = inst_26913);
(statearr_26961[(10)] = inst_26929);
return statearr_26961;
})();var statearr_26962_26988 = state_26949__$1;(statearr_26962_26988[(2)] = null);
(statearr_26962_26988[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26950 === (9)))
{var inst_26913 = (state_26949[(8)]);var inst_26927 = cljs.core.vec.call(null,inst_26913);var state_26949__$1 = state_26949;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26949__$1,(11),out,inst_26927);
} else
{if((state_val_26950 === (5)))
{var inst_26914 = (state_26949[(7)]);var inst_26917 = (state_26949[(9)]);var inst_26913 = (state_26949[(8)]);var inst_26922 = (state_26949[(11)]);var inst_26921 = (inst_26913[inst_26914] = inst_26917);var inst_26922__$1 = (inst_26914 + (1));var inst_26923 = (inst_26922__$1 < n);var state_26949__$1 = (function (){var statearr_26963 = state_26949;(statearr_26963[(11)] = inst_26922__$1);
(statearr_26963[(12)] = inst_26921);
return statearr_26963;
})();if(cljs.core.truth_(inst_26923))
{var statearr_26964_26989 = state_26949__$1;(statearr_26964_26989[(1)] = (8));
} else
{var statearr_26965_26990 = state_26949__$1;(statearr_26965_26990[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26950 === (14)))
{var inst_26942 = (state_26949[(2)]);var inst_26943 = cljs.core.async.close_BANG_.call(null,out);var state_26949__$1 = (function (){var statearr_26967 = state_26949;(statearr_26967[(13)] = inst_26942);
return statearr_26967;
})();var statearr_26968_26991 = state_26949__$1;(statearr_26968_26991[(2)] = inst_26943);
(statearr_26968_26991[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26950 === (10)))
{var inst_26933 = (state_26949[(2)]);var state_26949__$1 = state_26949;var statearr_26969_26992 = state_26949__$1;(statearr_26969_26992[(2)] = inst_26933);
(statearr_26969_26992[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26950 === (8)))
{var inst_26913 = (state_26949[(8)]);var inst_26922 = (state_26949[(11)]);var tmp26966 = inst_26913;var inst_26913__$1 = tmp26966;var inst_26914 = inst_26922;var state_26949__$1 = (function (){var statearr_26970 = state_26949;(statearr_26970[(7)] = inst_26914);
(statearr_26970[(8)] = inst_26913__$1);
return statearr_26970;
})();var statearr_26971_26993 = state_26949__$1;(statearr_26971_26993[(2)] = null);
(statearr_26971_26993[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__10959__auto___26979,out))
;return ((function (switch__10894__auto__,c__10959__auto___26979,out){
return (function() {
var state_machine__10895__auto__ = null;
var state_machine__10895__auto____0 = (function (){var statearr_26975 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26975[(0)] = state_machine__10895__auto__);
(statearr_26975[(1)] = (1));
return statearr_26975;
});
var state_machine__10895__auto____1 = (function (state_26949){while(true){
var ret_value__10896__auto__ = (function (){try{while(true){
var result__10897__auto__ = switch__10894__auto__.call(null,state_26949);if(cljs.core.keyword_identical_QMARK_.call(null,result__10897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10897__auto__;
}
break;
}
}catch (e26976){if((e26976 instanceof Object))
{var ex__10898__auto__ = e26976;var statearr_26977_26994 = state_26949;(statearr_26977_26994[(5)] = ex__10898__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26949);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26976;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26995 = state_26949;
state_26949 = G__26995;
continue;
}
} else
{return ret_value__10896__auto__;
}
break;
}
});
state_machine__10895__auto__ = function(state_26949){
switch(arguments.length){
case 0:
return state_machine__10895__auto____0.call(this);
case 1:
return state_machine__10895__auto____1.call(this,state_26949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10895__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10895__auto____0;
state_machine__10895__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10895__auto____1;
return state_machine__10895__auto__;
})()
;})(switch__10894__auto__,c__10959__auto___26979,out))
})();var state__10961__auto__ = (function (){var statearr_26978 = f__10960__auto__.call(null);(statearr_26978[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10959__auto___26979);
return statearr_26978;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10961__auto__);
});})(c__10959__auto___26979,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10959__auto___27138 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10959__auto___27138,out){
return (function (){var f__10960__auto__ = (function (){var switch__10894__auto__ = ((function (c__10959__auto___27138,out){
return (function (state_27108){var state_val_27109 = (state_27108[(1)]);if((state_val_27109 === (7)))
{var inst_27104 = (state_27108[(2)]);var state_27108__$1 = state_27108;var statearr_27110_27139 = state_27108__$1;(statearr_27110_27139[(2)] = inst_27104);
(statearr_27110_27139[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27109 === (1)))
{var inst_27067 = [];var inst_27068 = inst_27067;var inst_27069 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_27108__$1 = (function (){var statearr_27111 = state_27108;(statearr_27111[(7)] = inst_27068);
(statearr_27111[(8)] = inst_27069);
return statearr_27111;
})();var statearr_27112_27140 = state_27108__$1;(statearr_27112_27140[(2)] = null);
(statearr_27112_27140[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27109 === (4)))
{var inst_27072 = (state_27108[(9)]);var inst_27072__$1 = (state_27108[(2)]);var inst_27073 = (inst_27072__$1 == null);var inst_27074 = cljs.core.not.call(null,inst_27073);var state_27108__$1 = (function (){var statearr_27113 = state_27108;(statearr_27113[(9)] = inst_27072__$1);
return statearr_27113;
})();if(inst_27074)
{var statearr_27114_27141 = state_27108__$1;(statearr_27114_27141[(1)] = (5));
} else
{var statearr_27115_27142 = state_27108__$1;(statearr_27115_27142[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27109 === (15)))
{var inst_27098 = (state_27108[(2)]);var state_27108__$1 = state_27108;var statearr_27116_27143 = state_27108__$1;(statearr_27116_27143[(2)] = inst_27098);
(statearr_27116_27143[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27109 === (13)))
{var state_27108__$1 = state_27108;var statearr_27117_27144 = state_27108__$1;(statearr_27117_27144[(2)] = null);
(statearr_27117_27144[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27109 === (6)))
{var inst_27068 = (state_27108[(7)]);var inst_27093 = inst_27068.length;var inst_27094 = (inst_27093 > (0));var state_27108__$1 = state_27108;if(cljs.core.truth_(inst_27094))
{var statearr_27118_27145 = state_27108__$1;(statearr_27118_27145[(1)] = (12));
} else
{var statearr_27119_27146 = state_27108__$1;(statearr_27119_27146[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27109 === (3)))
{var inst_27106 = (state_27108[(2)]);var state_27108__$1 = state_27108;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27108__$1,inst_27106);
} else
{if((state_val_27109 === (12)))
{var inst_27068 = (state_27108[(7)]);var inst_27096 = cljs.core.vec.call(null,inst_27068);var state_27108__$1 = state_27108;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27108__$1,(15),out,inst_27096);
} else
{if((state_val_27109 === (2)))
{var state_27108__$1 = state_27108;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27108__$1,(4),ch);
} else
{if((state_val_27109 === (11)))
{var inst_27076 = (state_27108[(10)]);var inst_27072 = (state_27108[(9)]);var inst_27086 = (state_27108[(2)]);var inst_27087 = [];var inst_27088 = inst_27087.push(inst_27072);var inst_27068 = inst_27087;var inst_27069 = inst_27076;var state_27108__$1 = (function (){var statearr_27120 = state_27108;(statearr_27120[(11)] = inst_27088);
(statearr_27120[(12)] = inst_27086);
(statearr_27120[(7)] = inst_27068);
(statearr_27120[(8)] = inst_27069);
return statearr_27120;
})();var statearr_27121_27147 = state_27108__$1;(statearr_27121_27147[(2)] = null);
(statearr_27121_27147[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27109 === (9)))
{var inst_27068 = (state_27108[(7)]);var inst_27084 = cljs.core.vec.call(null,inst_27068);var state_27108__$1 = state_27108;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27108__$1,(11),out,inst_27084);
} else
{if((state_val_27109 === (5)))
{var inst_27076 = (state_27108[(10)]);var inst_27069 = (state_27108[(8)]);var inst_27072 = (state_27108[(9)]);var inst_27076__$1 = f.call(null,inst_27072);var inst_27077 = cljs.core._EQ_.call(null,inst_27076__$1,inst_27069);var inst_27078 = cljs.core.keyword_identical_QMARK_.call(null,inst_27069,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_27079 = (inst_27077) || (inst_27078);var state_27108__$1 = (function (){var statearr_27122 = state_27108;(statearr_27122[(10)] = inst_27076__$1);
return statearr_27122;
})();if(cljs.core.truth_(inst_27079))
{var statearr_27123_27148 = state_27108__$1;(statearr_27123_27148[(1)] = (8));
} else
{var statearr_27124_27149 = state_27108__$1;(statearr_27124_27149[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27109 === (14)))
{var inst_27101 = (state_27108[(2)]);var inst_27102 = cljs.core.async.close_BANG_.call(null,out);var state_27108__$1 = (function (){var statearr_27126 = state_27108;(statearr_27126[(13)] = inst_27101);
return statearr_27126;
})();var statearr_27127_27150 = state_27108__$1;(statearr_27127_27150[(2)] = inst_27102);
(statearr_27127_27150[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27109 === (10)))
{var inst_27091 = (state_27108[(2)]);var state_27108__$1 = state_27108;var statearr_27128_27151 = state_27108__$1;(statearr_27128_27151[(2)] = inst_27091);
(statearr_27128_27151[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27109 === (8)))
{var inst_27076 = (state_27108[(10)]);var inst_27068 = (state_27108[(7)]);var inst_27072 = (state_27108[(9)]);var inst_27081 = inst_27068.push(inst_27072);var tmp27125 = inst_27068;var inst_27068__$1 = tmp27125;var inst_27069 = inst_27076;var state_27108__$1 = (function (){var statearr_27129 = state_27108;(statearr_27129[(7)] = inst_27068__$1);
(statearr_27129[(14)] = inst_27081);
(statearr_27129[(8)] = inst_27069);
return statearr_27129;
})();var statearr_27130_27152 = state_27108__$1;(statearr_27130_27152[(2)] = null);
(statearr_27130_27152[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__10959__auto___27138,out))
;return ((function (switch__10894__auto__,c__10959__auto___27138,out){
return (function() {
var state_machine__10895__auto__ = null;
var state_machine__10895__auto____0 = (function (){var statearr_27134 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27134[(0)] = state_machine__10895__auto__);
(statearr_27134[(1)] = (1));
return statearr_27134;
});
var state_machine__10895__auto____1 = (function (state_27108){while(true){
var ret_value__10896__auto__ = (function (){try{while(true){
var result__10897__auto__ = switch__10894__auto__.call(null,state_27108);if(cljs.core.keyword_identical_QMARK_.call(null,result__10897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10897__auto__;
}
break;
}
}catch (e27135){if((e27135 instanceof Object))
{var ex__10898__auto__ = e27135;var statearr_27136_27153 = state_27108;(statearr_27136_27153[(5)] = ex__10898__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27108);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27135;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27154 = state_27108;
state_27108 = G__27154;
continue;
}
} else
{return ret_value__10896__auto__;
}
break;
}
});
state_machine__10895__auto__ = function(state_27108){
switch(arguments.length){
case 0:
return state_machine__10895__auto____0.call(this);
case 1:
return state_machine__10895__auto____1.call(this,state_27108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10895__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10895__auto____0;
state_machine__10895__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10895__auto____1;
return state_machine__10895__auto__;
})()
;})(switch__10894__auto__,c__10959__auto___27138,out))
})();var state__10961__auto__ = (function (){var statearr_27137 = f__10960__auto__.call(null);(statearr_27137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10959__auto___27138);
return statearr_27137;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10961__auto__);
});})(c__10959__auto___27138,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map