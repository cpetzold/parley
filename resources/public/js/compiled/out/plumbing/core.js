// Compiled by ClojureScript 0.0-2311
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('plumbing.fnk.schema');
goog.require('plumbing.fnk.schema');
goog.require('schema.utils');
goog.require('schema.utils');
/**
* A sentinel value representing missing portions of the input data.
*/
plumbing.core._PLUS_none_PLUS_ = new cljs.core.Keyword("plumbing.core","missing","plumbing.core/missing",1721767298);
/**
* Updates the value in map m at k with the function f.
* 
* Like update-in, but for updating a single top-level key.
* Any additional args will be passed to f after the value.
* @param {...*} var_args
*/
plumbing.core.update = (function() {
var update = null;
var update__3 = (function (m,k,f){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
});
var update__4 = (function (m,k,f,x1){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1));
});
var update__5 = (function (m,k,f,x1,x2){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1,x2));
});
var update__6 = (function() { 
var G__19277__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__19277 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__19277__delegate.call(this,m,k,f,x1,x2,xs);};
G__19277.cljs$lang$maxFixedArity = 5;
G__19277.cljs$lang$applyTo = (function (arglist__19278){
var m = cljs.core.first(arglist__19278);
arglist__19278 = cljs.core.next(arglist__19278);
var k = cljs.core.first(arglist__19278);
arglist__19278 = cljs.core.next(arglist__19278);
var f = cljs.core.first(arglist__19278);
arglist__19278 = cljs.core.next(arglist__19278);
var x1 = cljs.core.first(arglist__19278);
arglist__19278 = cljs.core.next(arglist__19278);
var x2 = cljs.core.first(arglist__19278);
var xs = cljs.core.rest(arglist__19278);
return G__19277__delegate(m,k,f,x1,x2,xs);
});
G__19277.cljs$core$IFn$_invoke$arity$variadic = G__19277__delegate;
return G__19277;
})()
;
update = function(m,k,f,x1,x2,var_args){
var xs = var_args;
switch(arguments.length){
case 3:
return update__3.call(this,m,k,f);
case 4:
return update__4.call(this,m,k,f,x1);
case 5:
return update__5.call(this,m,k,f,x1,x2);
default:
return update__6.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x1,x2, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update.cljs$lang$maxFixedArity = 5;
update.cljs$lang$applyTo = update__6.cljs$lang$applyTo;
update.cljs$core$IFn$_invoke$arity$3 = update__3;
update.cljs$core$IFn$_invoke$arity$4 = update__4;
update.cljs$core$IFn$_invoke$arity$5 = update__5;
update.cljs$core$IFn$_invoke$arity$variadic = update__6.cljs$core$IFn$_invoke$arity$variadic;
return update;
})()
;
/**
* Build map k -> (f v) for [k v] in map, preserving the initial type
*/
plumbing.core.map_vals = (function map_vals(f,m){if(cljs.core.sorted_QMARK_.call(null,m))
{return cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc.call(null,out_m,k,f.call(null,v));
}),cljs.core.sorted_map.call(null),m);
} else
{if(cljs.core.map_QMARK_.call(null,m))
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc_BANG_.call(null,out_m,k,f.call(null,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__17783__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__19287_19293 = cljs.core.seq.call(null,m);var chunk__19288_19294 = null;var count__19289_19295 = (0);var i__19290_19296 = (0);while(true){
if((i__19290_19296 < count__19289_19295))
{var vec__19291_19297 = cljs.core._nth.call(null,chunk__19288_19294,i__19290_19296);var k_19298 = cljs.core.nth.call(null,vec__19291_19297,(0),null);var v_19299 = cljs.core.nth.call(null,vec__19291_19297,(1),null);var m19286_19300 = cljs.core.deref.call(null,m_atom__17783__auto__);cljs.core.reset_BANG_.call(null,m_atom__17783__auto__,cljs.core.assoc_BANG_.call(null,m19286_19300,k_19298,f.call(null,v_19299)));
{
var G__19301 = seq__19287_19293;
var G__19302 = chunk__19288_19294;
var G__19303 = count__19289_19295;
var G__19304 = (i__19290_19296 + (1));
seq__19287_19293 = G__19301;
chunk__19288_19294 = G__19302;
count__19289_19295 = G__19303;
i__19290_19296 = G__19304;
continue;
}
} else
{var temp__4126__auto___19305 = cljs.core.seq.call(null,seq__19287_19293);if(temp__4126__auto___19305)
{var seq__19287_19306__$1 = temp__4126__auto___19305;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19287_19306__$1))
{var c__8653__auto___19307 = cljs.core.chunk_first.call(null,seq__19287_19306__$1);{
var G__19308 = cljs.core.chunk_rest.call(null,seq__19287_19306__$1);
var G__19309 = c__8653__auto___19307;
var G__19310 = cljs.core.count.call(null,c__8653__auto___19307);
var G__19311 = (0);
seq__19287_19293 = G__19308;
chunk__19288_19294 = G__19309;
count__19289_19295 = G__19310;
i__19290_19296 = G__19311;
continue;
}
} else
{var vec__19292_19312 = cljs.core.first.call(null,seq__19287_19306__$1);var k_19313 = cljs.core.nth.call(null,vec__19292_19312,(0),null);var v_19314 = cljs.core.nth.call(null,vec__19292_19312,(1),null);var m19286_19315 = cljs.core.deref.call(null,m_atom__17783__auto__);cljs.core.reset_BANG_.call(null,m_atom__17783__auto__,cljs.core.assoc_BANG_.call(null,m19286_19315,k_19313,f.call(null,v_19314)));
{
var G__19316 = cljs.core.next.call(null,seq__19287_19306__$1);
var G__19317 = null;
var G__19318 = (0);
var G__19319 = (0);
seq__19287_19293 = G__19316;
chunk__19288_19294 = G__19317;
count__19289_19295 = G__19318;
i__19290_19296 = G__19319;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__17783__auto__));

}
}
});
/**
* Build map (f k) -> v for [k v] in map m
*/
plumbing.core.map_keys = (function map_keys(f,m){if(cljs.core.map_QMARK_.call(null,m))
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc_BANG_.call(null,out_m,f.call(null,k),v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__17783__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__19328_19334 = cljs.core.seq.call(null,m);var chunk__19329_19335 = null;var count__19330_19336 = (0);var i__19331_19337 = (0);while(true){
if((i__19331_19337 < count__19330_19336))
{var vec__19332_19338 = cljs.core._nth.call(null,chunk__19329_19335,i__19331_19337);var k_19339 = cljs.core.nth.call(null,vec__19332_19338,(0),null);var v_19340 = cljs.core.nth.call(null,vec__19332_19338,(1),null);var m19327_19341 = cljs.core.deref.call(null,m_atom__17783__auto__);cljs.core.reset_BANG_.call(null,m_atom__17783__auto__,cljs.core.assoc_BANG_.call(null,m19327_19341,f.call(null,k_19339),v_19340));
{
var G__19342 = seq__19328_19334;
var G__19343 = chunk__19329_19335;
var G__19344 = count__19330_19336;
var G__19345 = (i__19331_19337 + (1));
seq__19328_19334 = G__19342;
chunk__19329_19335 = G__19343;
count__19330_19336 = G__19344;
i__19331_19337 = G__19345;
continue;
}
} else
{var temp__4126__auto___19346 = cljs.core.seq.call(null,seq__19328_19334);if(temp__4126__auto___19346)
{var seq__19328_19347__$1 = temp__4126__auto___19346;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19328_19347__$1))
{var c__8653__auto___19348 = cljs.core.chunk_first.call(null,seq__19328_19347__$1);{
var G__19349 = cljs.core.chunk_rest.call(null,seq__19328_19347__$1);
var G__19350 = c__8653__auto___19348;
var G__19351 = cljs.core.count.call(null,c__8653__auto___19348);
var G__19352 = (0);
seq__19328_19334 = G__19349;
chunk__19329_19335 = G__19350;
count__19330_19336 = G__19351;
i__19331_19337 = G__19352;
continue;
}
} else
{var vec__19333_19353 = cljs.core.first.call(null,seq__19328_19347__$1);var k_19354 = cljs.core.nth.call(null,vec__19333_19353,(0),null);var v_19355 = cljs.core.nth.call(null,vec__19333_19353,(1),null);var m19327_19356 = cljs.core.deref.call(null,m_atom__17783__auto__);cljs.core.reset_BANG_.call(null,m_atom__17783__auto__,cljs.core.assoc_BANG_.call(null,m19327_19356,f.call(null,k_19354),v_19355));
{
var G__19357 = cljs.core.next.call(null,seq__19328_19347__$1);
var G__19358 = null;
var G__19359 = (0);
var G__19360 = (0);
seq__19328_19334 = G__19357;
chunk__19329_19335 = G__19358;
count__19330_19336 = G__19359;
i__19331_19337 = G__19360;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__17783__auto__));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__17783__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__19367_19371 = cljs.core.seq.call(null,ks);var chunk__19368_19372 = null;var count__19369_19373 = (0);var i__19370_19374 = (0);while(true){
if((i__19370_19374 < count__19369_19373))
{var k_19375 = cljs.core._nth.call(null,chunk__19368_19372,i__19370_19374);var m19366_19376 = cljs.core.deref.call(null,m_atom__17783__auto__);cljs.core.reset_BANG_.call(null,m_atom__17783__auto__,cljs.core.assoc_BANG_.call(null,m19366_19376,k_19375,f.call(null,k_19375)));
{
var G__19377 = seq__19367_19371;
var G__19378 = chunk__19368_19372;
var G__19379 = count__19369_19373;
var G__19380 = (i__19370_19374 + (1));
seq__19367_19371 = G__19377;
chunk__19368_19372 = G__19378;
count__19369_19373 = G__19379;
i__19370_19374 = G__19380;
continue;
}
} else
{var temp__4126__auto___19381 = cljs.core.seq.call(null,seq__19367_19371);if(temp__4126__auto___19381)
{var seq__19367_19382__$1 = temp__4126__auto___19381;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19367_19382__$1))
{var c__8653__auto___19383 = cljs.core.chunk_first.call(null,seq__19367_19382__$1);{
var G__19384 = cljs.core.chunk_rest.call(null,seq__19367_19382__$1);
var G__19385 = c__8653__auto___19383;
var G__19386 = cljs.core.count.call(null,c__8653__auto___19383);
var G__19387 = (0);
seq__19367_19371 = G__19384;
chunk__19368_19372 = G__19385;
count__19369_19373 = G__19386;
i__19370_19374 = G__19387;
continue;
}
} else
{var k_19388 = cljs.core.first.call(null,seq__19367_19382__$1);var m19366_19389 = cljs.core.deref.call(null,m_atom__17783__auto__);cljs.core.reset_BANG_.call(null,m_atom__17783__auto__,cljs.core.assoc_BANG_.call(null,m19366_19389,k_19388,f.call(null,k_19388)));
{
var G__19390 = cljs.core.next.call(null,seq__19367_19382__$1);
var G__19391 = null;
var G__19392 = (0);
var G__19393 = (0);
seq__19367_19371 = G__19390;
chunk__19368_19372 = G__19391;
count__19369_19373 = G__19392;
i__19370_19374 = G__19393;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__17783__auto__));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__17783__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__19400_19404 = cljs.core.seq.call(null,vs);var chunk__19401_19405 = null;var count__19402_19406 = (0);var i__19403_19407 = (0);while(true){
if((i__19403_19407 < count__19402_19406))
{var v_19408 = cljs.core._nth.call(null,chunk__19401_19405,i__19403_19407);var m19399_19409 = cljs.core.deref.call(null,m_atom__17783__auto__);cljs.core.reset_BANG_.call(null,m_atom__17783__auto__,cljs.core.assoc_BANG_.call(null,m19399_19409,f.call(null,v_19408),v_19408));
{
var G__19410 = seq__19400_19404;
var G__19411 = chunk__19401_19405;
var G__19412 = count__19402_19406;
var G__19413 = (i__19403_19407 + (1));
seq__19400_19404 = G__19410;
chunk__19401_19405 = G__19411;
count__19402_19406 = G__19412;
i__19403_19407 = G__19413;
continue;
}
} else
{var temp__4126__auto___19414 = cljs.core.seq.call(null,seq__19400_19404);if(temp__4126__auto___19414)
{var seq__19400_19415__$1 = temp__4126__auto___19414;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19400_19415__$1))
{var c__8653__auto___19416 = cljs.core.chunk_first.call(null,seq__19400_19415__$1);{
var G__19417 = cljs.core.chunk_rest.call(null,seq__19400_19415__$1);
var G__19418 = c__8653__auto___19416;
var G__19419 = cljs.core.count.call(null,c__8653__auto___19416);
var G__19420 = (0);
seq__19400_19404 = G__19417;
chunk__19401_19405 = G__19418;
count__19402_19406 = G__19419;
i__19403_19407 = G__19420;
continue;
}
} else
{var v_19421 = cljs.core.first.call(null,seq__19400_19415__$1);var m19399_19422 = cljs.core.deref.call(null,m_atom__17783__auto__);cljs.core.reset_BANG_.call(null,m_atom__17783__auto__,cljs.core.assoc_BANG_.call(null,m19399_19422,f.call(null,v_19421),v_19421));
{
var G__19423 = cljs.core.next.call(null,seq__19400_19415__$1);
var G__19424 = null;
var G__19425 = (0);
var G__19426 = (0);
seq__19400_19404 = G__19423;
chunk__19401_19405 = G__19424;
count__19402_19406 = G__19425;
i__19403_19407 = G__19426;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__17783__auto__));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__19427){var vec__19429 = p__19427;var k = cljs.core.nth.call(null,vec__19429,(0),null);var ks = cljs.core.nthnext.call(null,vec__19429,(1));if(cljs.core.truth_(m))
{var temp__4124__auto__ = (function (){var and__7885__auto__ = ks;if(and__7885__auto__)
{return dissoc_in.call(null,m.call(null,k),ks);
} else
{return and__7885__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var res = temp__4124__auto__;return cljs.core.assoc.call(null,m,k,res);
} else
{var res = cljs.core.dissoc.call(null,m,k);if(cljs.core.empty_QMARK_.call(null,res))
{return null;
} else
{return res;
}
}
} else
{return null;
}
});
/**
* Recursively convert maps in m (including itself)
* to have keyword keys instead of string
*/
plumbing.core.keywordize_map = (function keywordize_map(x){if(cljs.core.map_QMARK_.call(null,x))
{var m_atom__17783__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__19438_19444 = cljs.core.seq.call(null,x);var chunk__19439_19445 = null;var count__19440_19446 = (0);var i__19441_19447 = (0);while(true){
if((i__19441_19447 < count__19440_19446))
{var vec__19442_19448 = cljs.core._nth.call(null,chunk__19439_19445,i__19441_19447);var k_19449 = cljs.core.nth.call(null,vec__19442_19448,(0),null);var v_19450 = cljs.core.nth.call(null,vec__19442_19448,(1),null);var m19437_19451 = cljs.core.deref.call(null,m_atom__17783__auto__);cljs.core.reset_BANG_.call(null,m_atom__17783__auto__,cljs.core.assoc_BANG_.call(null,m19437_19451,((typeof k_19449 === 'string')?cljs.core.keyword.call(null,k_19449):k_19449),keywordize_map.call(null,v_19450)));
{
var G__19452 = seq__19438_19444;
var G__19453 = chunk__19439_19445;
var G__19454 = count__19440_19446;
var G__19455 = (i__19441_19447 + (1));
seq__19438_19444 = G__19452;
chunk__19439_19445 = G__19453;
count__19440_19446 = G__19454;
i__19441_19447 = G__19455;
continue;
}
} else
{var temp__4126__auto___19456 = cljs.core.seq.call(null,seq__19438_19444);if(temp__4126__auto___19456)
{var seq__19438_19457__$1 = temp__4126__auto___19456;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19438_19457__$1))
{var c__8653__auto___19458 = cljs.core.chunk_first.call(null,seq__19438_19457__$1);{
var G__19459 = cljs.core.chunk_rest.call(null,seq__19438_19457__$1);
var G__19460 = c__8653__auto___19458;
var G__19461 = cljs.core.count.call(null,c__8653__auto___19458);
var G__19462 = (0);
seq__19438_19444 = G__19459;
chunk__19439_19445 = G__19460;
count__19440_19446 = G__19461;
i__19441_19447 = G__19462;
continue;
}
} else
{var vec__19443_19463 = cljs.core.first.call(null,seq__19438_19457__$1);var k_19464 = cljs.core.nth.call(null,vec__19443_19463,(0),null);var v_19465 = cljs.core.nth.call(null,vec__19443_19463,(1),null);var m19437_19466 = cljs.core.deref.call(null,m_atom__17783__auto__);cljs.core.reset_BANG_.call(null,m_atom__17783__auto__,cljs.core.assoc_BANG_.call(null,m19437_19466,((typeof k_19464 === 'string')?cljs.core.keyword.call(null,k_19464):k_19464),keywordize_map.call(null,v_19465)));
{
var G__19467 = cljs.core.next.call(null,seq__19438_19457__$1);
var G__19468 = null;
var G__19469 = (0);
var G__19470 = (0);
seq__19438_19444 = G__19467;
chunk__19439_19445 = G__19468;
count__19440_19446 = G__19469;
i__19441_19447 = G__19470;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__17783__auto__));
} else
{if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.map.call(null,keywordize_map,x);
} else
{if(cljs.core.vector_QMARK_.call(null,x))
{return cljs.core.mapv.call(null,keywordize_map,x);
} else
{return x;

}
}
}
});
/**
* Like get but throw an exception if not found
*/
plumbing.core.safe_get = (function safe_get(m,k){var temp__4124__auto__ = cljs.core.find.call(null,m,k);if(cljs.core.truth_(temp__4124__auto__))
{var pair__17852__auto__ = temp__4124__auto__;return cljs.core.val.call(null,pair__17852__auto__);
} else
{var e = schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.mapv.call(null,cljs.core.key,m));throw (new Error(e));
}
});
/**
* Like get-in but throws exception if not found
*/
plumbing.core.safe_get_in = (function safe_get_in(m,ks){while(true){
if(cljs.core.seq.call(null,ks))
{{
var G__19471 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__19472 = cljs.core.next.call(null,ks);
m = G__19471;
ks = G__19472;
continue;
}
} else
{return m;
}
break;
}
});
/**
* Like assoc but only assocs when value is truthy
* @param {...*} var_args
*/
plumbing.core.assoc_when = (function() { 
var assoc_when__delegate = function (m,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
return cljs.core.into.call(null,(function (){var or__7897__auto__ = m;if(cljs.core.truth_(or__7897__auto__))
{return or__7897__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__8622__auto__ = (function iter__19481(s__19482){return (new cljs.core.LazySeq(null,(function (){var s__19482__$1 = s__19482;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19482__$1);if(temp__4126__auto__)
{var s__19482__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19482__$2))
{var c__8620__auto__ = cljs.core.chunk_first.call(null,s__19482__$2);var size__8621__auto__ = cljs.core.count.call(null,c__8620__auto__);var b__19484 = cljs.core.chunk_buffer.call(null,size__8621__auto__);if((function (){var i__19483 = (0);while(true){
if((i__19483 < size__8621__auto__))
{var vec__19487 = cljs.core._nth.call(null,c__8620__auto__,i__19483);var k = cljs.core.nth.call(null,vec__19487,(0),null);var v = cljs.core.nth.call(null,vec__19487,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__19484,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__19489 = (i__19483 + (1));
i__19483 = G__19489;
continue;
}
} else
{{
var G__19490 = (i__19483 + (1));
i__19483 = G__19490;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19484),iter__19481.call(null,cljs.core.chunk_rest.call(null,s__19482__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19484),null);
}
} else
{var vec__19488 = cljs.core.first.call(null,s__19482__$2);var k = cljs.core.nth.call(null,vec__19488,(0),null);var v = cljs.core.nth.call(null,vec__19488,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__19481.call(null,cljs.core.rest.call(null,s__19482__$2)));
} else
{{
var G__19491 = cljs.core.rest.call(null,s__19482__$2);
s__19482__$1 = G__19491;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8622__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__19492){
var m = cljs.core.first(arglist__19492);
var kvs = cljs.core.rest(arglist__19492);
return assoc_when__delegate(m,kvs);
});
assoc_when.cljs$core$IFn$_invoke$arity$variadic = assoc_when__delegate;
return assoc_when;
})()
;
/**
* Like update-in but returns m unchanged if key-seq is not present.
* @param {...*} var_args
*/
plumbing.core.update_in_when = (function() { 
var update_in_when__delegate = function (m,key_seq,f,args){var found = cljs.core.get_in.call(null,m,key_seq,plumbing.core._PLUS_none_PLUS_);if(!((plumbing.core._PLUS_none_PLUS_ === found)))
{return cljs.core.assoc_in.call(null,m,key_seq,cljs.core.apply.call(null,f,found,args));
} else
{return m;
}
};
var update_in_when = function (m,key_seq,f,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return update_in_when__delegate.call(this,m,key_seq,f,args);};
update_in_when.cljs$lang$maxFixedArity = 3;
update_in_when.cljs$lang$applyTo = (function (arglist__19493){
var m = cljs.core.first(arglist__19493);
arglist__19493 = cljs.core.next(arglist__19493);
var key_seq = cljs.core.first(arglist__19493);
arglist__19493 = cljs.core.next(arglist__19493);
var f = cljs.core.first(arglist__19493);
var args = cljs.core.rest(arglist__19493);
return update_in_when__delegate(m,key_seq,f,args);
});
update_in_when.cljs$core$IFn$_invoke$arity$variadic = update_in_when__delegate;
return update_in_when;
})()
;
/**
* Like group-by, but accepts a map-fn that is applied to values before
* collected.
*/
plumbing.core.grouped_map = (function grouped_map(key_fn,map_fn,coll){return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (ret,x){var k = key_fn.call(null,x);return cljs.core.assoc_BANG_.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),map_fn.call(null,x)));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Like (apply concat s) but lazier (and shorter)
*/
plumbing.core.aconcat = (function aconcat(s){return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){return cljs.core.first.call(null,s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.next.call(null,s);if(temp__4126__auto__)
{var n = temp__4126__auto__;return aconcat.call(null,n);
} else
{return null;
}
}),null,null)));
});
/**
* Takes a seqable and returns a lazy sequence that
* is maximally lazy and doesn't realize elements due to either
* chunking or apply.
* 
* Useful when you don't want chunking, for instance,
* (first awesome-website? (map slurp +a-bunch-of-urls+))
* may slurp up to 31 unneed webpages, wherease
* (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
* is guaranteed to stop slurping after the first awesome website.
* 
* Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
*/
plumbing.core.unchunk = (function unchunk(s){if(cljs.core.seq.call(null,s))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s),(new cljs.core.LazySeq(null,(function (){return unchunk.call(null,cljs.core.rest.call(null,s));
}),null,null)));
} else
{return null;
}
});
/**
* Return sum of (f x) for each x in xs
*/
plumbing.core.sum = (function() {
var sum = null;
var sum__1 = (function (xs){return cljs.core.reduce.call(null,cljs.core._PLUS_,xs);
});
var sum__2 = (function (f,xs){return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,xs));
});
sum = function(f,xs){
switch(arguments.length){
case 1:
return sum__1.call(this,f);
case 2:
return sum__2.call(this,f,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sum.cljs$core$IFn$_invoke$arity$1 = sum__1;
sum.cljs$core$IFn$_invoke$arity$2 = sum__2;
return sum;
})()
;
/**
* returns (first xs) when xs has only 1 element
*/
plumbing.core.singleton = (function singleton(xs){var temp__4126__auto__ = cljs.core.seq.call(null,xs);if(temp__4126__auto__)
{var xs__$1 = temp__4126__auto__;if(cljs.core.next.call(null,xs__$1))
{return null;
} else
{return cljs.core.first.call(null,xs__$1);
}
} else
{return null;
}
});
/**
* Returns [idx x] for x in seqable s
*/
plumbing.core.indexed = (function indexed(s){return cljs.core.map_indexed.call(null,cljs.core.vector,s);
});
/**
* Returns indices idx of sequence s where (f (nth s idx))
*/
plumbing.core.positions = (function positions(f,s){return cljs.core.keep_indexed.call(null,(function (i,x){if(cljs.core.truth_(f.call(null,x)))
{return i;
} else
{return null;
}
}),s);
});
/**
* Returns elements of xs which return unique
* values according to f. If multiple elements of xs return the same
* value under f, the first is returned
*/
plumbing.core.distinct_by = (function distinct_by(f,xs){var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);var iter__8622__auto__ = ((function (s){
return (function iter__19498(s__19499){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__19499__$1 = s__19499;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19499__$1);if(temp__4126__auto__)
{var s__19499__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19499__$2))
{var c__8620__auto__ = cljs.core.chunk_first.call(null,s__19499__$2);var size__8621__auto__ = cljs.core.count.call(null,c__8620__auto__);var b__19501 = cljs.core.chunk_buffer.call(null,size__8621__auto__);if((function (){var i__19500 = (0);while(true){
if((i__19500 < size__8621__auto__))
{var x = cljs.core._nth.call(null,c__8620__auto__,i__19500);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__19501,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__19502 = (i__19500 + (1));
i__19500 = G__19502;
continue;
}
} else
{{
var G__19503 = (i__19500 + (1));
i__19500 = G__19503;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19501),iter__19498.call(null,cljs.core.chunk_rest.call(null,s__19499__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19501),null);
}
} else
{var x = cljs.core.first.call(null,s__19499__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__19498.call(null,cljs.core.rest.call(null,s__19499__$2)));
} else
{{
var G__19504 = cljs.core.rest.call(null,s__19499__$2);
s__19499__$1 = G__19504;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;return iter__8622__auto__.call(null,xs);
});
/**
* Analogy: partition:partition-all :: interleave:interleave-all
* @param {...*} var_args
*/
plumbing.core.interleave_all = (function() { 
var interleave_all__delegate = function (colls){return (new cljs.core.LazySeq(null,(function (){return (function helper(seqs){if(cljs.core.seq.call(null,seqs))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){return helper.call(null,cljs.core.keep.call(null,cljs.core.next,seqs));
}),null,null)));
} else
{return null;
}
}).call(null,cljs.core.keep.call(null,cljs.core.seq,colls));
}),null,null));
};
var interleave_all = function (var_args){
var colls = null;if (arguments.length > 0) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return interleave_all__delegate.call(this,colls);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__19505){
var colls = cljs.core.seq(arglist__19505);
return interleave_all__delegate(colls);
});
interleave_all.cljs$core$IFn$_invoke$arity$variadic = interleave_all__delegate;
return interleave_all;
})()
;
/**
* Returns # of elements of xs where pred holds
*/
plumbing.core.count_when = (function count_when(pred,xs){return cljs.core.count.call(null,cljs.core.filter.call(null,pred,xs));
});
/**
* Like conj but ignores non-truthy values
* @param {...*} var_args
*/
plumbing.core.conj_when = (function() {
var conj_when = null;
var conj_when__2 = (function (coll,x){if(cljs.core.truth_(x))
{return cljs.core.conj.call(null,coll,x);
} else
{return coll;
}
});
var conj_when__3 = (function() { 
var G__19506__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__19507 = conj_when.call(null,coll,x);
var G__19508 = cljs.core.first.call(null,xs);
var G__19509 = cljs.core.next.call(null,xs);
coll = G__19507;
x = G__19508;
xs = G__19509;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__19506 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__19506__delegate.call(this,coll,x,xs);};
G__19506.cljs$lang$maxFixedArity = 2;
G__19506.cljs$lang$applyTo = (function (arglist__19510){
var coll = cljs.core.first(arglist__19510);
arglist__19510 = cljs.core.next(arglist__19510);
var x = cljs.core.first(arglist__19510);
var xs = cljs.core.rest(arglist__19510);
return G__19506__delegate(coll,x,xs);
});
G__19506.cljs$core$IFn$_invoke$arity$variadic = G__19506__delegate;
return G__19506;
})()
;
conj_when = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj_when__2.call(this,coll,x);
default:
return conj_when__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj_when.cljs$lang$maxFixedArity = 2;
conj_when.cljs$lang$applyTo = conj_when__3.cljs$lang$applyTo;
conj_when.cljs$core$IFn$_invoke$arity$2 = conj_when__2;
conj_when.cljs$core$IFn$_invoke$arity$variadic = conj_when__3.cljs$core$IFn$_invoke$arity$variadic;
return conj_when;
})()
;
/**
* Like cons but does nothing if x is non-truthy.
*/
plumbing.core.cons_when = (function cons_when(x,s){if(cljs.core.truth_(x))
{return cljs.core.cons.call(null,x,s);
} else
{return s;
}
});
/**
* Like sort-by, but prefers higher values rather than lower ones.
*/
plumbing.core.rsort_by = cljs.core.comp.call(null,cljs.core.reverse,cljs.core.sort_by);
/**
* Like swap! but returns a pair [old-val new-val]
* @param {...*} var_args
*/
plumbing.core.swap_pair_BANG_ = (function() {
var swap_pair_BANG_ = null;
var swap_pair_BANG___2 = (function (a,f){while(true){
var old_val = cljs.core.deref.call(null,a);var new_val = f.call(null,old_val);if(cljs.core.compare_and_set_BANG_.call(null,a,old_val,new_val))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else
{{
continue;
}
}
break;
}
});
var swap_pair_BANG___3 = (function() { 
var G__19512__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__19511_SHARP_){return cljs.core.apply.call(null,f,p1__19511_SHARP_,args);
}));
};
var G__19512 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__19512__delegate.call(this,a,f,args);};
G__19512.cljs$lang$maxFixedArity = 2;
G__19512.cljs$lang$applyTo = (function (arglist__19513){
var a = cljs.core.first(arglist__19513);
arglist__19513 = cljs.core.next(arglist__19513);
var f = cljs.core.first(arglist__19513);
var args = cljs.core.rest(arglist__19513);
return G__19512__delegate(a,f,args);
});
G__19512.cljs$core$IFn$_invoke$arity$variadic = G__19512__delegate;
return G__19512;
})()
;
swap_pair_BANG_ = function(a,f,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return swap_pair_BANG___2.call(this,a,f);
default:
return swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic(a,f, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_pair_BANG_.cljs$lang$maxFixedArity = 2;
swap_pair_BANG_.cljs$lang$applyTo = swap_pair_BANG___3.cljs$lang$applyTo;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = swap_pair_BANG___2;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return swap_pair_BANG_;
})()
;
/**
* Like reset! but returns old-val
*/
plumbing.core.get_and_set_BANG_ = (function get_and_set_BANG_(a,new_val){return cljs.core.first.call(null,plumbing.core.swap_pair_BANG_.call(null,a,cljs.core.constantly.call(null,new_val)));
});
plumbing.core.millis = (function millis(){return (new Date()).getTime();
});
/**
* Like apply, but applies a map to a function with positional map
* arguments. Can take optional initial args just like apply.
* @param {...*} var_args
*/
plumbing.core.mapply = (function() {
var mapply = null;
var mapply__2 = (function (f,m){return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});
var mapply__3 = (function() { 
var G__19514__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__19514 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__19514__delegate.call(this,f,arg,args);};
G__19514.cljs$lang$maxFixedArity = 2;
G__19514.cljs$lang$applyTo = (function (arglist__19515){
var f = cljs.core.first(arglist__19515);
arglist__19515 = cljs.core.next(arglist__19515);
var arg = cljs.core.first(arglist__19515);
var args = cljs.core.rest(arglist__19515);
return G__19514__delegate(f,arg,args);
});
G__19514.cljs$core$IFn$_invoke$arity$variadic = G__19514__delegate;
return G__19514;
})()
;
mapply = function(f,arg,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return mapply__2.call(this,f,arg);
default:
return mapply__3.cljs$core$IFn$_invoke$arity$variadic(f,arg, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapply.cljs$lang$maxFixedArity = 2;
mapply.cljs$lang$applyTo = mapply__3.cljs$lang$applyTo;
mapply.cljs$core$IFn$_invoke$arity$2 = mapply__2;
mapply.cljs$core$IFn$_invoke$arity$variadic = mapply__3.cljs$core$IFn$_invoke$arity$variadic;
return mapply;
})()
;

//# sourceMappingURL=core.js.map