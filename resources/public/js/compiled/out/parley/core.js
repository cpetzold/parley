// Compiled by ClojureScript 0.0-2311
goog.provide('parley.core');
goog.require('cljs.core');
goog.require('om_tools.dom');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('om.core');
goog.require('om.core');
goog.require('figwheel.client');
goog.require('figwheel.client');
parley.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"users","users",-713552705),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"conner","conner",561719309),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handle","handle",1538948854),"conner",new cljs.core.Keyword(null,"name","name",1843675177),"Conner",new cljs.core.Keyword(null,"bio","bio",-331851886),"Pwner Extraordinaire",new cljs.core.Keyword(null,"avatar","avatar",-1607499307),"https://pbs.twimg.com/profile_images/472114160130473984/Mn3hcq5I_400x400.jpeg"], null),new cljs.core.Keyword(null,"marco","marco",-842285153),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handle","handle",1538948854),"marco",new cljs.core.Keyword(null,"name","name",1843675177),"Marco",new cljs.core.Keyword(null,"bio","bio",-331851886),"Climbs all the rocks",new cljs.core.Keyword(null,"avatar","avatar",-1607499307),"https://avatars0.githubusercontent.com/u/594035?v=2&s=460"], null),new cljs.core.Keyword(null,"brad","brad",-1819457215),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handle","handle",1538948854),"brad",new cljs.core.Keyword(null,"name","name",1843675177),"Brad",new cljs.core.Keyword(null,"bio","bio",-331851886),"Weird city burn",new cljs.core.Keyword(null,"avatar","avatar",-1607499307),"http://primg.city/query-resize?url=http%3A%2F%2Fs3.amazonaws.com%2Fprismatic-profiles%2Fprimary-image-837232295.jpeg&width=176&height=176"], null)], null),new cljs.core.Keyword(null,"questions","questions",1226225380),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"is-there-an-omnipotent-god","is-there-an-omnipotent-god",1152008034),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Is there an omnipotent god?",new cljs.core.Keyword(null,"description","description",-1428560544),"Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.",new cljs.core.Keyword(null,"responses","responses",1257546453),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"brad","brad",-1819457215),new cljs.core.Keyword(null,"text","text",-1790561697),"Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"marco","marco",-842285153),new cljs.core.Keyword(null,"text","text",-1790561697),"Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"conner","conner",561719309),new cljs.core.Keyword(null,"text","text",-1790561697),"No, pwned!"], null)], null)], null)], null)], null));
/**
* @param {...*} var_args
*/
parley.core.user_PLUS_ = (function() { 
var user_PLUS___delegate = function (data__13895__auto__,owner20994,p__20996){var vec__21012 = p__20996;var opts__13896__auto__ = cljs.core.nth.call(null,vec__21012,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema21016 = schema.core.Any;var input_schema21017 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"avatar","avatar",-1607499307),schema.core.Any,new cljs.core.Keyword(null,"bio","bio",-331851886),schema.core.Any,new cljs.core.Keyword(null,"name","name",1843675177),schema.core.Any,new cljs.core.Keyword(null,"handle","handle",1538948854),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map21013","map21013",-760323512,null))], null);var input_checker21018 = schema.core.checker.call(null,input_schema21017);var output_checker21019 = schema.core.checker.call(null,output_schema21016);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema21016,input_schema21017,input_checker21018,output_checker21019,vec__21012,opts__13896__auto__){
return (function fnk21015(G__21020){var validate__12087__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__12087__auto__))
{var args__12088__auto___21027 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21020], null);var temp__4126__auto___21028 = input_checker21018.call(null,args__12088__auto___21027);if(cljs.core.truth_(temp__4126__auto___21028))
{var error__12089__auto___21029 = temp__4126__auto___21028;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"fnk21015","fnk21015",742561490,null),cljs.core.pr_str.call(null,error__12089__auto___21029)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21017,new cljs.core.Keyword(null,"value","value",305978217),args__12088__auto___21027,new cljs.core.Keyword(null,"error","error",-978969032),error__12089__auto___21029], null));
} else
{}
} else
{}
var o__12090__auto__ = (function (){var map21013 = G__21020;while(true){
if(cljs.core.map_QMARK_.call(null,map21013))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map21013)));
}
var map21014 = plumbing.fnk.schema.safe_get.call(null,map21013,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var handle = plumbing.fnk.schema.safe_get.call(null,map21014,new cljs.core.Keyword(null,"handle","handle",1538948854),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var name = plumbing.fnk.schema.safe_get.call(null,map21014,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var bio = plumbing.fnk.schema.safe_get.call(null,map21014,new cljs.core.Keyword(null,"bio","bio",-331851886),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var avatar = plumbing.fnk.schema.safe_get.call(null,map21014,new cljs.core.Keyword(null,"avatar","avatar",-1607499307),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));if(typeof parley.core.t21024 !== 'undefined')
{} else
{
/**
* @constructor
*/
parley.core.t21024 = (function (opts__13896__auto__,output_checker21019,input_schema21017,validate__12087__auto__,map21013,vec__21012,owner20994,name,user_PLUS_,fnk21015,input_checker21018,p__20996,data__13895__auto__,G__21020,bio,output_schema21016,avatar,handle,ufv__,map21014,meta21025){
this.opts__13896__auto__ = opts__13896__auto__;
this.output_checker21019 = output_checker21019;
this.input_schema21017 = input_schema21017;
this.validate__12087__auto__ = validate__12087__auto__;
this.map21013 = map21013;
this.vec__21012 = vec__21012;
this.owner20994 = owner20994;
this.name = name;
this.user_PLUS_ = user_PLUS_;
this.fnk21015 = fnk21015;
this.input_checker21018 = input_checker21018;
this.p__20996 = p__20996;
this.data__13895__auto__ = data__13895__auto__;
this.G__21020 = G__21020;
this.bio = bio;
this.output_schema21016 = output_schema21016;
this.avatar = avatar;
this.handle = handle;
this.ufv__ = ufv__;
this.map21014 = map21014;
this.meta21025 = meta21025;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
parley.core.t21024.cljs$lang$type = true;
parley.core.t21024.cljs$lang$ctorStr = "parley.core/t21024";
parley.core.t21024.cljs$lang$ctorPrWriter = ((function (avatar,bio,name,handle,map21014,validate__12087__auto__,ufv__,output_schema21016,input_schema21017,input_checker21018,output_checker21019,vec__21012,opts__13896__auto__){
return (function (this__8462__auto__,writer__8463__auto__,opt__8464__auto__){return cljs.core._write.call(null,writer__8463__auto__,"parley.core/t21024");
});})(avatar,bio,name,handle,map21014,validate__12087__auto__,ufv__,output_schema21016,input_schema21017,input_checker21018,output_checker21019,vec__21012,opts__13896__auto__))
;
parley.core.t21024.prototype.om$core$IDisplayName$ = true;
parley.core.t21024.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (avatar,bio,name,handle,map21014,validate__12087__auto__,ufv__,output_schema21016,input_schema21017,input_checker21018,output_checker21019,vec__21012,opts__13896__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "user+";
});})(avatar,bio,name,handle,map21014,validate__12087__auto__,ufv__,output_schema21016,input_schema21017,input_checker21018,output_checker21019,vec__21012,opts__13896__auto__))
;
parley.core.t21024.prototype.om$core$IRender$ = true;
parley.core.t21024.prototype.om$core$IRender$render$arity$1 = ((function (avatar,bio,name,handle,map21014,validate__12087__auto__,ufv__,output_schema21016,input_schema21017,input_checker21018,output_checker21019,vec__21012,opts__13896__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,React.DOM.div,{"className": "user"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.a({"href": "#", "style": {"backgroundImage": om_tools.dom.format_opts.call(null,("url("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.avatar)+")"))}, "className": "avatar"}),cljs.core.apply.call(null,React.DOM.a,{"href": "#", "className": "user-name"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[self__.name],null)))),cljs.core.apply.call(null,React.DOM.div,{"className": "user-bio"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[self__.bio],null))))],null))));
});})(avatar,bio,name,handle,map21014,validate__12087__auto__,ufv__,output_schema21016,input_schema21017,input_checker21018,output_checker21019,vec__21012,opts__13896__auto__))
;
parley.core.t21024.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (avatar,bio,name,handle,map21014,validate__12087__auto__,ufv__,output_schema21016,input_schema21017,input_checker21018,output_checker21019,vec__21012,opts__13896__auto__){
return (function (_21026){var self__ = this;
var _21026__$1 = this;return self__.meta21025;
});})(avatar,bio,name,handle,map21014,validate__12087__auto__,ufv__,output_schema21016,input_schema21017,input_checker21018,output_checker21019,vec__21012,opts__13896__auto__))
;
parley.core.t21024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (avatar,bio,name,handle,map21014,validate__12087__auto__,ufv__,output_schema21016,input_schema21017,input_checker21018,output_checker21019,vec__21012,opts__13896__auto__){
return (function (_21026,meta21025__$1){var self__ = this;
var _21026__$1 = this;return (new parley.core.t21024(self__.opts__13896__auto__,self__.output_checker21019,self__.input_schema21017,self__.validate__12087__auto__,self__.map21013,self__.vec__21012,self__.owner20994,self__.name,self__.user_PLUS_,self__.fnk21015,self__.input_checker21018,self__.p__20996,self__.data__13895__auto__,self__.G__21020,self__.bio,self__.output_schema21016,self__.avatar,self__.handle,self__.ufv__,self__.map21014,meta21025__$1));
});})(avatar,bio,name,handle,map21014,validate__12087__auto__,ufv__,output_schema21016,input_schema21017,input_checker21018,output_checker21019,vec__21012,opts__13896__auto__))
;
parley.core.__GT_t21024 = ((function (avatar,bio,name,handle,map21014,validate__12087__auto__,ufv__,output_schema21016,input_schema21017,input_checker21018,output_checker21019,vec__21012,opts__13896__auto__){
return (function __GT_t21024(opts__13896__auto____$1,output_checker21019__$1,input_schema21017__$1,validate__12087__auto____$1,map21013__$1,vec__21012__$1,owner20994__$1,name__$1,user_PLUS___$1,fnk21015__$1,input_checker21018__$1,p__20996__$1,data__13895__auto____$1,G__21020__$1,bio__$1,output_schema21016__$1,avatar__$1,handle__$1,ufv____$1,map21014__$1,meta21025){return (new parley.core.t21024(opts__13896__auto____$1,output_checker21019__$1,input_schema21017__$1,validate__12087__auto____$1,map21013__$1,vec__21012__$1,owner20994__$1,name__$1,user_PLUS___$1,fnk21015__$1,input_checker21018__$1,p__20996__$1,data__13895__auto____$1,G__21020__$1,bio__$1,output_schema21016__$1,avatar__$1,handle__$1,ufv____$1,map21014__$1,meta21025));
});})(avatar,bio,name,handle,map21014,validate__12087__auto__,ufv__,output_schema21016,input_schema21017,input_checker21018,output_checker21019,vec__21012,opts__13896__auto__))
;
}
return (new parley.core.t21024(opts__13896__auto__,output_checker21019,input_schema21017,validate__12087__auto__,map21013,vec__21012,owner20994,name,user_PLUS_,fnk21015,input_checker21018,p__20996,data__13895__auto__,G__21020,bio,output_schema21016,avatar,handle,ufv__,map21014,null));
break;
}
})();if(cljs.core.truth_(validate__12087__auto__))
{var temp__4126__auto___21030 = output_checker21019.call(null,o__12090__auto__);if(cljs.core.truth_(temp__4126__auto___21030))
{var error__12089__auto___21031 = temp__4126__auto___21030;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"fnk21015","fnk21015",742561490,null),cljs.core.pr_str.call(null,error__12089__auto___21031)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21016,new cljs.core.Keyword(null,"value","value",305978217),o__12090__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__12089__auto___21031], null));
} else
{}
} else
{}
return o__12090__auto__;
});})(ufv__,output_schema21016,input_schema21017,input_checker21018,output_checker21019,vec__21012,opts__13896__auto__))
,schema.core.make_fn_schema.call(null,output_schema21016,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21017], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__13896__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner20994,new cljs.core.Keyword(null,"data","data",-232669377),data__13895__auto__], null));
};
var user_PLUS_ = function (data__13895__auto__,owner20994,var_args){
var p__20996 = null;if (arguments.length > 2) {
  p__20996 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return user_PLUS___delegate.call(this,data__13895__auto__,owner20994,p__20996);};
user_PLUS_.cljs$lang$maxFixedArity = 2;
user_PLUS_.cljs$lang$applyTo = (function (arglist__21032){
var data__13895__auto__ = cljs.core.first(arglist__21032);
arglist__21032 = cljs.core.next(arglist__21032);
var owner20994 = cljs.core.first(arglist__21032);
var p__20996 = cljs.core.rest(arglist__21032);
return user_PLUS___delegate(data__13895__auto__,owner20994,p__20996);
});
user_PLUS_.cljs$core$IFn$_invoke$arity$variadic = user_PLUS___delegate;
return user_PLUS_;
})()
;
parley.core.__GT_user_PLUS_ = (function() {
var __GT_user_PLUS_ = null;
var __GT_user_PLUS___1 = (function (cursor__13864__auto__){return om.core.build.call(null,parley.core.user_PLUS_,cursor__13864__auto__);
});
var __GT_user_PLUS___2 = (function (cursor__13864__auto__,m20995){return om.core.build.call(null,parley.core.user_PLUS_,cursor__13864__auto__,m20995);
});
__GT_user_PLUS_ = function(cursor__13864__auto__,m20995){
switch(arguments.length){
case 1:
return __GT_user_PLUS___1.call(this,cursor__13864__auto__);
case 2:
return __GT_user_PLUS___2.call(this,cursor__13864__auto__,m20995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_user_PLUS_.cljs$core$IFn$_invoke$arity$1 = __GT_user_PLUS___1;
__GT_user_PLUS_.cljs$core$IFn$_invoke$arity$2 = __GT_user_PLUS___2;
return __GT_user_PLUS_;
})()
;
/**
* @param {...*} var_args
*/
parley.core.response_PLUS_ = (function() { 
var response_PLUS___delegate = function (data__13895__auto__,owner21033,p__21035){var vec__21051 = p__21035;var opts__13896__auto__ = cljs.core.nth.call(null,vec__21051,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema21055 = schema.core.Any;var input_schema21056 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"user","user",1532431356),schema.core.Any,new cljs.core.Keyword(null,"text","text",-1790561697),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map21052","map21052",-548778111,null))], null);var input_checker21057 = schema.core.checker.call(null,input_schema21056);var output_checker21058 = schema.core.checker.call(null,output_schema21055);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema21055,input_schema21056,input_checker21057,output_checker21058,vec__21051,opts__13896__auto__){
return (function fnk21054(G__21059){var validate__12087__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__12087__auto__))
{var args__12088__auto___21066 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21059], null);var temp__4126__auto___21067 = input_checker21057.call(null,args__12088__auto___21066);if(cljs.core.truth_(temp__4126__auto___21067))
{var error__12089__auto___21068 = temp__4126__auto___21067;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"fnk21054","fnk21054",1895286405,null),cljs.core.pr_str.call(null,error__12089__auto___21068)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21056,new cljs.core.Keyword(null,"value","value",305978217),args__12088__auto___21066,new cljs.core.Keyword(null,"error","error",-978969032),error__12089__auto___21068], null));
} else
{}
} else
{}
var o__12090__auto__ = (function (){var map21052 = G__21059;while(true){
if(cljs.core.map_QMARK_.call(null,map21052))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map21052)));
}
var map21053 = plumbing.fnk.schema.safe_get.call(null,map21052,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var text = plumbing.fnk.schema.safe_get.call(null,map21053,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var user = plumbing.fnk.schema.safe_get.call(null,map21053,new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));if(typeof parley.core.t21063 !== 'undefined')
{} else
{
/**
* @constructor
*/
parley.core.t21063 = (function (opts__13896__auto__,map21052,validate__12087__auto__,user,input_schema21056,map21053,fnk21054,text,G__21059,output_schema21055,owner21033,response_PLUS_,vec__21051,output_checker21058,data__13895__auto__,p__21035,input_checker21057,ufv__,meta21064){
this.opts__13896__auto__ = opts__13896__auto__;
this.map21052 = map21052;
this.validate__12087__auto__ = validate__12087__auto__;
this.user = user;
this.input_schema21056 = input_schema21056;
this.map21053 = map21053;
this.fnk21054 = fnk21054;
this.text = text;
this.G__21059 = G__21059;
this.output_schema21055 = output_schema21055;
this.owner21033 = owner21033;
this.response_PLUS_ = response_PLUS_;
this.vec__21051 = vec__21051;
this.output_checker21058 = output_checker21058;
this.data__13895__auto__ = data__13895__auto__;
this.p__21035 = p__21035;
this.input_checker21057 = input_checker21057;
this.ufv__ = ufv__;
this.meta21064 = meta21064;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
parley.core.t21063.cljs$lang$type = true;
parley.core.t21063.cljs$lang$ctorStr = "parley.core/t21063";
parley.core.t21063.cljs$lang$ctorPrWriter = ((function (user,text,map21053,validate__12087__auto__,ufv__,output_schema21055,input_schema21056,input_checker21057,output_checker21058,vec__21051,opts__13896__auto__){
return (function (this__8462__auto__,writer__8463__auto__,opt__8464__auto__){return cljs.core._write.call(null,writer__8463__auto__,"parley.core/t21063");
});})(user,text,map21053,validate__12087__auto__,ufv__,output_schema21055,input_schema21056,input_checker21057,output_checker21058,vec__21051,opts__13896__auto__))
;
parley.core.t21063.prototype.om$core$IDisplayName$ = true;
parley.core.t21063.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (user,text,map21053,validate__12087__auto__,ufv__,output_schema21055,input_schema21056,input_checker21057,output_checker21058,vec__21051,opts__13896__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "response+";
});})(user,text,map21053,validate__12087__auto__,ufv__,output_schema21055,input_schema21056,input_checker21057,output_checker21058,vec__21051,opts__13896__auto__))
;
parley.core.t21063.prototype.om$core$IRender$ = true;
parley.core.t21063.prototype.om$core$IRender$render$arity$1 = ((function (user,text,map21053,validate__12087__auto__,ufv__,output_schema21055,input_schema21056,input_checker21057,output_checker21058,vec__21051,opts__13896__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,React.DOM.li,{"className": "response"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.call(null,parley.core.user_PLUS_,self__.user),cljs.core.apply.call(null,React.DOM.div,{"className": "response-text"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[self__.text],null))))],null))));
});})(user,text,map21053,validate__12087__auto__,ufv__,output_schema21055,input_schema21056,input_checker21057,output_checker21058,vec__21051,opts__13896__auto__))
;
parley.core.t21063.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (user,text,map21053,validate__12087__auto__,ufv__,output_schema21055,input_schema21056,input_checker21057,output_checker21058,vec__21051,opts__13896__auto__){
return (function (_21065){var self__ = this;
var _21065__$1 = this;return self__.meta21064;
});})(user,text,map21053,validate__12087__auto__,ufv__,output_schema21055,input_schema21056,input_checker21057,output_checker21058,vec__21051,opts__13896__auto__))
;
parley.core.t21063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (user,text,map21053,validate__12087__auto__,ufv__,output_schema21055,input_schema21056,input_checker21057,output_checker21058,vec__21051,opts__13896__auto__){
return (function (_21065,meta21064__$1){var self__ = this;
var _21065__$1 = this;return (new parley.core.t21063(self__.opts__13896__auto__,self__.map21052,self__.validate__12087__auto__,self__.user,self__.input_schema21056,self__.map21053,self__.fnk21054,self__.text,self__.G__21059,self__.output_schema21055,self__.owner21033,self__.response_PLUS_,self__.vec__21051,self__.output_checker21058,self__.data__13895__auto__,self__.p__21035,self__.input_checker21057,self__.ufv__,meta21064__$1));
});})(user,text,map21053,validate__12087__auto__,ufv__,output_schema21055,input_schema21056,input_checker21057,output_checker21058,vec__21051,opts__13896__auto__))
;
parley.core.__GT_t21063 = ((function (user,text,map21053,validate__12087__auto__,ufv__,output_schema21055,input_schema21056,input_checker21057,output_checker21058,vec__21051,opts__13896__auto__){
return (function __GT_t21063(opts__13896__auto____$1,map21052__$1,validate__12087__auto____$1,user__$1,input_schema21056__$1,map21053__$1,fnk21054__$1,text__$1,G__21059__$1,output_schema21055__$1,owner21033__$1,response_PLUS___$1,vec__21051__$1,output_checker21058__$1,data__13895__auto____$1,p__21035__$1,input_checker21057__$1,ufv____$1,meta21064){return (new parley.core.t21063(opts__13896__auto____$1,map21052__$1,validate__12087__auto____$1,user__$1,input_schema21056__$1,map21053__$1,fnk21054__$1,text__$1,G__21059__$1,output_schema21055__$1,owner21033__$1,response_PLUS___$1,vec__21051__$1,output_checker21058__$1,data__13895__auto____$1,p__21035__$1,input_checker21057__$1,ufv____$1,meta21064));
});})(user,text,map21053,validate__12087__auto__,ufv__,output_schema21055,input_schema21056,input_checker21057,output_checker21058,vec__21051,opts__13896__auto__))
;
}
return (new parley.core.t21063(opts__13896__auto__,map21052,validate__12087__auto__,user,input_schema21056,map21053,fnk21054,text,G__21059,output_schema21055,owner21033,response_PLUS_,vec__21051,output_checker21058,data__13895__auto__,p__21035,input_checker21057,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__12087__auto__))
{var temp__4126__auto___21069 = output_checker21058.call(null,o__12090__auto__);if(cljs.core.truth_(temp__4126__auto___21069))
{var error__12089__auto___21070 = temp__4126__auto___21069;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"fnk21054","fnk21054",1895286405,null),cljs.core.pr_str.call(null,error__12089__auto___21070)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21055,new cljs.core.Keyword(null,"value","value",305978217),o__12090__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__12089__auto___21070], null));
} else
{}
} else
{}
return o__12090__auto__;
});})(ufv__,output_schema21055,input_schema21056,input_checker21057,output_checker21058,vec__21051,opts__13896__auto__))
,schema.core.make_fn_schema.call(null,output_schema21055,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21056], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__13896__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner21033,new cljs.core.Keyword(null,"data","data",-232669377),data__13895__auto__], null));
};
var response_PLUS_ = function (data__13895__auto__,owner21033,var_args){
var p__21035 = null;if (arguments.length > 2) {
  p__21035 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return response_PLUS___delegate.call(this,data__13895__auto__,owner21033,p__21035);};
response_PLUS_.cljs$lang$maxFixedArity = 2;
response_PLUS_.cljs$lang$applyTo = (function (arglist__21071){
var data__13895__auto__ = cljs.core.first(arglist__21071);
arglist__21071 = cljs.core.next(arglist__21071);
var owner21033 = cljs.core.first(arglist__21071);
var p__21035 = cljs.core.rest(arglist__21071);
return response_PLUS___delegate(data__13895__auto__,owner21033,p__21035);
});
response_PLUS_.cljs$core$IFn$_invoke$arity$variadic = response_PLUS___delegate;
return response_PLUS_;
})()
;
parley.core.__GT_response_PLUS_ = (function() {
var __GT_response_PLUS_ = null;
var __GT_response_PLUS___1 = (function (cursor__13864__auto__){return om.core.build.call(null,parley.core.response_PLUS_,cursor__13864__auto__);
});
var __GT_response_PLUS___2 = (function (cursor__13864__auto__,m21034){return om.core.build.call(null,parley.core.response_PLUS_,cursor__13864__auto__,m21034);
});
__GT_response_PLUS_ = function(cursor__13864__auto__,m21034){
switch(arguments.length){
case 1:
return __GT_response_PLUS___1.call(this,cursor__13864__auto__);
case 2:
return __GT_response_PLUS___2.call(this,cursor__13864__auto__,m21034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_response_PLUS_.cljs$core$IFn$_invoke$arity$1 = __GT_response_PLUS___1;
__GT_response_PLUS_.cljs$core$IFn$_invoke$arity$2 = __GT_response_PLUS___2;
return __GT_response_PLUS_;
})()
;
/**
* @param {...*} var_args
*/
parley.core.question_PLUS_ = (function() { 
var question_PLUS___delegate = function (data__13895__auto__,owner21072,p__21074){var vec__21090 = p__21074;var opts__13896__auto__ = cljs.core.nth.call(null,vec__21090,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema21094 = schema.core.Any;var input_schema21095 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"responses","responses",1257546453),schema.core.Any,new cljs.core.Keyword(null,"description","description",-1428560544),schema.core.Any,new cljs.core.Keyword(null,"text","text",-1790561697),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map21091","map21091",-892274522,null))], null);var input_checker21096 = schema.core.checker.call(null,input_schema21095);var output_checker21097 = schema.core.checker.call(null,output_schema21094);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema21094,input_schema21095,input_checker21096,output_checker21097,vec__21090,opts__13896__auto__){
return (function fnk21093(G__21098){var validate__12087__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__12087__auto__))
{var args__12088__auto___21105 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21098], null);var temp__4126__auto___21106 = input_checker21096.call(null,args__12088__auto___21105);if(cljs.core.truth_(temp__4126__auto___21106))
{var error__12089__auto___21107 = temp__4126__auto___21106;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"fnk21093","fnk21093",-433985091,null),cljs.core.pr_str.call(null,error__12089__auto___21107)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21095,new cljs.core.Keyword(null,"value","value",305978217),args__12088__auto___21105,new cljs.core.Keyword(null,"error","error",-978969032),error__12089__auto___21107], null));
} else
{}
} else
{}
var o__12090__auto__ = (function (){var map21091 = G__21098;while(true){
if(cljs.core.map_QMARK_.call(null,map21091))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map21091)));
}
var map21092 = plumbing.fnk.schema.safe_get.call(null,map21091,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var text = plumbing.fnk.schema.safe_get.call(null,map21092,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var description = plumbing.fnk.schema.safe_get.call(null,map21092,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var responses = plumbing.fnk.schema.safe_get.call(null,map21092,new cljs.core.Keyword(null,"responses","responses",1257546453),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));if(typeof parley.core.t21102 !== 'undefined')
{} else
{
/**
* @constructor
*/
parley.core.t21102 = (function (opts__13896__auto__,validate__12087__auto__,p__21074,text,map21091,output_checker21097,description,input_schema21095,G__21098,question_PLUS_,output_schema21094,owner21072,vec__21090,map21092,data__13895__auto__,responses,input_checker21096,fnk21093,ufv__,meta21103){
this.opts__13896__auto__ = opts__13896__auto__;
this.validate__12087__auto__ = validate__12087__auto__;
this.p__21074 = p__21074;
this.text = text;
this.map21091 = map21091;
this.output_checker21097 = output_checker21097;
this.description = description;
this.input_schema21095 = input_schema21095;
this.G__21098 = G__21098;
this.question_PLUS_ = question_PLUS_;
this.output_schema21094 = output_schema21094;
this.owner21072 = owner21072;
this.vec__21090 = vec__21090;
this.map21092 = map21092;
this.data__13895__auto__ = data__13895__auto__;
this.responses = responses;
this.input_checker21096 = input_checker21096;
this.fnk21093 = fnk21093;
this.ufv__ = ufv__;
this.meta21103 = meta21103;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
parley.core.t21102.cljs$lang$type = true;
parley.core.t21102.cljs$lang$ctorStr = "parley.core/t21102";
parley.core.t21102.cljs$lang$ctorPrWriter = ((function (responses,description,text,map21092,validate__12087__auto__,ufv__,output_schema21094,input_schema21095,input_checker21096,output_checker21097,vec__21090,opts__13896__auto__){
return (function (this__8462__auto__,writer__8463__auto__,opt__8464__auto__){return cljs.core._write.call(null,writer__8463__auto__,"parley.core/t21102");
});})(responses,description,text,map21092,validate__12087__auto__,ufv__,output_schema21094,input_schema21095,input_checker21096,output_checker21097,vec__21090,opts__13896__auto__))
;
parley.core.t21102.prototype.om$core$IDisplayName$ = true;
parley.core.t21102.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (responses,description,text,map21092,validate__12087__auto__,ufv__,output_schema21094,input_schema21095,input_checker21096,output_checker21097,vec__21090,opts__13896__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "question+";
});})(responses,description,text,map21092,validate__12087__auto__,ufv__,output_schema21094,input_schema21095,input_checker21096,output_checker21097,vec__21090,opts__13896__auto__))
;
parley.core.t21102.prototype.om$core$IRender$ = true;
parley.core.t21102.prototype.om$core$IRender$render$arity$1 = ((function (responses,description,text,map21092,validate__12087__auto__,ufv__,output_schema21094,input_schema21095,input_checker21096,output_checker21097,vec__21090,opts__13896__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,React.DOM.div,{"className": "question"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "question-header"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.h1,{"className": "question-text"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[self__.text],null)))),cljs.core.apply.call(null,React.DOM.p,{"className": "question-description"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[self__.description],null))))],null)))),cljs.core.apply.call(null,React.DOM.ol,{"className": "question-responses"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build_all.call(null,parley.core.response_PLUS_,self__.responses)],null))))],null))));
});})(responses,description,text,map21092,validate__12087__auto__,ufv__,output_schema21094,input_schema21095,input_checker21096,output_checker21097,vec__21090,opts__13896__auto__))
;
parley.core.t21102.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (responses,description,text,map21092,validate__12087__auto__,ufv__,output_schema21094,input_schema21095,input_checker21096,output_checker21097,vec__21090,opts__13896__auto__){
return (function (_21104){var self__ = this;
var _21104__$1 = this;return self__.meta21103;
});})(responses,description,text,map21092,validate__12087__auto__,ufv__,output_schema21094,input_schema21095,input_checker21096,output_checker21097,vec__21090,opts__13896__auto__))
;
parley.core.t21102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (responses,description,text,map21092,validate__12087__auto__,ufv__,output_schema21094,input_schema21095,input_checker21096,output_checker21097,vec__21090,opts__13896__auto__){
return (function (_21104,meta21103__$1){var self__ = this;
var _21104__$1 = this;return (new parley.core.t21102(self__.opts__13896__auto__,self__.validate__12087__auto__,self__.p__21074,self__.text,self__.map21091,self__.output_checker21097,self__.description,self__.input_schema21095,self__.G__21098,self__.question_PLUS_,self__.output_schema21094,self__.owner21072,self__.vec__21090,self__.map21092,self__.data__13895__auto__,self__.responses,self__.input_checker21096,self__.fnk21093,self__.ufv__,meta21103__$1));
});})(responses,description,text,map21092,validate__12087__auto__,ufv__,output_schema21094,input_schema21095,input_checker21096,output_checker21097,vec__21090,opts__13896__auto__))
;
parley.core.__GT_t21102 = ((function (responses,description,text,map21092,validate__12087__auto__,ufv__,output_schema21094,input_schema21095,input_checker21096,output_checker21097,vec__21090,opts__13896__auto__){
return (function __GT_t21102(opts__13896__auto____$1,validate__12087__auto____$1,p__21074__$1,text__$1,map21091__$1,output_checker21097__$1,description__$1,input_schema21095__$1,G__21098__$1,question_PLUS___$1,output_schema21094__$1,owner21072__$1,vec__21090__$1,map21092__$1,data__13895__auto____$1,responses__$1,input_checker21096__$1,fnk21093__$1,ufv____$1,meta21103){return (new parley.core.t21102(opts__13896__auto____$1,validate__12087__auto____$1,p__21074__$1,text__$1,map21091__$1,output_checker21097__$1,description__$1,input_schema21095__$1,G__21098__$1,question_PLUS___$1,output_schema21094__$1,owner21072__$1,vec__21090__$1,map21092__$1,data__13895__auto____$1,responses__$1,input_checker21096__$1,fnk21093__$1,ufv____$1,meta21103));
});})(responses,description,text,map21092,validate__12087__auto__,ufv__,output_schema21094,input_schema21095,input_checker21096,output_checker21097,vec__21090,opts__13896__auto__))
;
}
return (new parley.core.t21102(opts__13896__auto__,validate__12087__auto__,p__21074,text,map21091,output_checker21097,description,input_schema21095,G__21098,question_PLUS_,output_schema21094,owner21072,vec__21090,map21092,data__13895__auto__,responses,input_checker21096,fnk21093,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__12087__auto__))
{var temp__4126__auto___21108 = output_checker21097.call(null,o__12090__auto__);if(cljs.core.truth_(temp__4126__auto___21108))
{var error__12089__auto___21109 = temp__4126__auto___21108;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"fnk21093","fnk21093",-433985091,null),cljs.core.pr_str.call(null,error__12089__auto___21109)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21094,new cljs.core.Keyword(null,"value","value",305978217),o__12090__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__12089__auto___21109], null));
} else
{}
} else
{}
return o__12090__auto__;
});})(ufv__,output_schema21094,input_schema21095,input_checker21096,output_checker21097,vec__21090,opts__13896__auto__))
,schema.core.make_fn_schema.call(null,output_schema21094,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21095], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__13896__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner21072,new cljs.core.Keyword(null,"data","data",-232669377),data__13895__auto__], null));
};
var question_PLUS_ = function (data__13895__auto__,owner21072,var_args){
var p__21074 = null;if (arguments.length > 2) {
  p__21074 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return question_PLUS___delegate.call(this,data__13895__auto__,owner21072,p__21074);};
question_PLUS_.cljs$lang$maxFixedArity = 2;
question_PLUS_.cljs$lang$applyTo = (function (arglist__21110){
var data__13895__auto__ = cljs.core.first(arglist__21110);
arglist__21110 = cljs.core.next(arglist__21110);
var owner21072 = cljs.core.first(arglist__21110);
var p__21074 = cljs.core.rest(arglist__21110);
return question_PLUS___delegate(data__13895__auto__,owner21072,p__21074);
});
question_PLUS_.cljs$core$IFn$_invoke$arity$variadic = question_PLUS___delegate;
return question_PLUS_;
})()
;
parley.core.__GT_question_PLUS_ = (function() {
var __GT_question_PLUS_ = null;
var __GT_question_PLUS___1 = (function (cursor__13864__auto__){return om.core.build.call(null,parley.core.question_PLUS_,cursor__13864__auto__);
});
var __GT_question_PLUS___2 = (function (cursor__13864__auto__,m21073){return om.core.build.call(null,parley.core.question_PLUS_,cursor__13864__auto__,m21073);
});
__GT_question_PLUS_ = function(cursor__13864__auto__,m21073){
switch(arguments.length){
case 1:
return __GT_question_PLUS___1.call(this,cursor__13864__auto__);
case 2:
return __GT_question_PLUS___2.call(this,cursor__13864__auto__,m21073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_question_PLUS_.cljs$core$IFn$_invoke$arity$1 = __GT_question_PLUS___1;
__GT_question_PLUS_.cljs$core$IFn$_invoke$arity$2 = __GT_question_PLUS___2;
return __GT_question_PLUS_;
})()
;
parley.core.populate_user = (function populate_user(users,response){return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"user","user",1532431356),cljs.core.get.call(null,users,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(response)));
});
parley.core.populate_users = (function populate_users(users,question){return cljs.core.update_in.call(null,question,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"responses","responses",1257546453)], null),(function (p1__21111_SHARP_){return cljs.core.mapv.call(null,cljs.core.partial.call(null,parley.core.populate_user,users),p1__21111_SHARP_);
}));
});
/**
* @param {...*} var_args
*/
parley.core.app_PLUS_ = (function() { 
var app_PLUS___delegate = function (data__13895__auto__,owner21112,p__21114){var vec__21131 = p__21114;var opts__13896__auto__ = cljs.core.nth.call(null,vec__21131,(0),null);return (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema21136 = schema.core.Any;var input_schema21137 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"questions","questions",1226225380),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"is-there-an-omnipotent-god","is-there-an-omnipotent-god",1152008034),schema.core.Any], true, false),new cljs.core.Keyword(null,"users","users",-713552705),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map21132","map21132",1294433265,null))], null);var input_checker21138 = schema.core.checker.call(null,input_schema21137);var output_checker21139 = schema.core.checker.call(null,output_schema21136);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema21136,input_schema21137,input_checker21138,output_checker21139,vec__21131,opts__13896__auto__){
return (function fnk21135(G__21140){var validate__12087__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__12087__auto__))
{var args__12088__auto___21147 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21140], null);var temp__4126__auto___21148 = input_checker21138.call(null,args__12088__auto___21147);if(cljs.core.truth_(temp__4126__auto___21148))
{var error__12089__auto___21149 = temp__4126__auto___21148;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"fnk21135","fnk21135",-809434353,null),cljs.core.pr_str.call(null,error__12089__auto___21149)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21137,new cljs.core.Keyword(null,"value","value",305978217),args__12088__auto___21147,new cljs.core.Keyword(null,"error","error",-978969032),error__12089__auto___21149], null));
} else
{}
} else
{}
var o__12090__auto__ = (function (){var map21132 = G__21140;while(true){
if(cljs.core.map_QMARK_.call(null,map21132))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map21132)));
}
var map21133 = plumbing.fnk.schema.safe_get.call(null,map21132,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var users = plumbing.fnk.schema.safe_get.call(null,map21133,new cljs.core.Keyword(null,"users","users",-713552705),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map21134 = plumbing.fnk.schema.safe_get.call(null,map21133,new cljs.core.Keyword(null,"questions","questions",1226225380),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var is_there_an_omnipotent_god = plumbing.fnk.schema.safe_get.call(null,map21134,new cljs.core.Keyword(null,"is-there-an-omnipotent-god","is-there-an-omnipotent-god",1152008034),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"questions","questions",1226225380)], null));if(typeof parley.core.t21144 !== 'undefined')
{} else
{
/**
* @constructor
*/
parley.core.t21144 = (function (opts__13896__auto__,app_PLUS_,validate__12087__auto__,output_checker21139,G__21140,users,input_schema21137,input_checker21138,vec__21131,is_there_an_omnipotent_god,map21134,map21133,fnk21135,owner21112,map21132,data__13895__auto__,p__21114,ufv__,output_schema21136,meta21145){
this.opts__13896__auto__ = opts__13896__auto__;
this.app_PLUS_ = app_PLUS_;
this.validate__12087__auto__ = validate__12087__auto__;
this.output_checker21139 = output_checker21139;
this.G__21140 = G__21140;
this.users = users;
this.input_schema21137 = input_schema21137;
this.input_checker21138 = input_checker21138;
this.vec__21131 = vec__21131;
this.is_there_an_omnipotent_god = is_there_an_omnipotent_god;
this.map21134 = map21134;
this.map21133 = map21133;
this.fnk21135 = fnk21135;
this.owner21112 = owner21112;
this.map21132 = map21132;
this.data__13895__auto__ = data__13895__auto__;
this.p__21114 = p__21114;
this.ufv__ = ufv__;
this.output_schema21136 = output_schema21136;
this.meta21145 = meta21145;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
parley.core.t21144.cljs$lang$type = true;
parley.core.t21144.cljs$lang$ctorStr = "parley.core/t21144";
parley.core.t21144.cljs$lang$ctorPrWriter = ((function (is_there_an_omnipotent_god,map21134,users,map21133,validate__12087__auto__,ufv__,output_schema21136,input_schema21137,input_checker21138,output_checker21139,vec__21131,opts__13896__auto__){
return (function (this__8462__auto__,writer__8463__auto__,opt__8464__auto__){return cljs.core._write.call(null,writer__8463__auto__,"parley.core/t21144");
});})(is_there_an_omnipotent_god,map21134,users,map21133,validate__12087__auto__,ufv__,output_schema21136,input_schema21137,input_checker21138,output_checker21139,vec__21131,opts__13896__auto__))
;
parley.core.t21144.prototype.om$core$IDisplayName$ = true;
parley.core.t21144.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (is_there_an_omnipotent_god,map21134,users,map21133,validate__12087__auto__,ufv__,output_schema21136,input_schema21137,input_checker21138,output_checker21139,vec__21131,opts__13896__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return "app+";
});})(is_there_an_omnipotent_god,map21134,users,map21133,validate__12087__auto__,ufv__,output_schema21136,input_schema21137,input_checker21138,output_checker21139,vec__21131,opts__13896__auto__))
;
parley.core.t21144.prototype.om$core$IRender$ = true;
parley.core.t21144.prototype.om$core$IRender$render$arity$1 = ((function (is_there_an_omnipotent_god,map21134,users,map21133,validate__12087__auto__,ufv__,output_schema21136,input_schema21137,input_checker21138,output_checker21139,vec__21131,opts__13896__auto__){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,React.DOM.div,{"id": "container"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.call(null,parley.core.question_PLUS_,parley.core.populate_users.call(null,self__.users,self__.is_there_an_omnipotent_god))],null))));
});})(is_there_an_omnipotent_god,map21134,users,map21133,validate__12087__auto__,ufv__,output_schema21136,input_schema21137,input_checker21138,output_checker21139,vec__21131,opts__13896__auto__))
;
parley.core.t21144.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (is_there_an_omnipotent_god,map21134,users,map21133,validate__12087__auto__,ufv__,output_schema21136,input_schema21137,input_checker21138,output_checker21139,vec__21131,opts__13896__auto__){
return (function (_21146){var self__ = this;
var _21146__$1 = this;return self__.meta21145;
});})(is_there_an_omnipotent_god,map21134,users,map21133,validate__12087__auto__,ufv__,output_schema21136,input_schema21137,input_checker21138,output_checker21139,vec__21131,opts__13896__auto__))
;
parley.core.t21144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (is_there_an_omnipotent_god,map21134,users,map21133,validate__12087__auto__,ufv__,output_schema21136,input_schema21137,input_checker21138,output_checker21139,vec__21131,opts__13896__auto__){
return (function (_21146,meta21145__$1){var self__ = this;
var _21146__$1 = this;return (new parley.core.t21144(self__.opts__13896__auto__,self__.app_PLUS_,self__.validate__12087__auto__,self__.output_checker21139,self__.G__21140,self__.users,self__.input_schema21137,self__.input_checker21138,self__.vec__21131,self__.is_there_an_omnipotent_god,self__.map21134,self__.map21133,self__.fnk21135,self__.owner21112,self__.map21132,self__.data__13895__auto__,self__.p__21114,self__.ufv__,self__.output_schema21136,meta21145__$1));
});})(is_there_an_omnipotent_god,map21134,users,map21133,validate__12087__auto__,ufv__,output_schema21136,input_schema21137,input_checker21138,output_checker21139,vec__21131,opts__13896__auto__))
;
parley.core.__GT_t21144 = ((function (is_there_an_omnipotent_god,map21134,users,map21133,validate__12087__auto__,ufv__,output_schema21136,input_schema21137,input_checker21138,output_checker21139,vec__21131,opts__13896__auto__){
return (function __GT_t21144(opts__13896__auto____$1,app_PLUS___$1,validate__12087__auto____$1,output_checker21139__$1,G__21140__$1,users__$1,input_schema21137__$1,input_checker21138__$1,vec__21131__$1,is_there_an_omnipotent_god__$1,map21134__$1,map21133__$1,fnk21135__$1,owner21112__$1,map21132__$1,data__13895__auto____$1,p__21114__$1,ufv____$1,output_schema21136__$1,meta21145){return (new parley.core.t21144(opts__13896__auto____$1,app_PLUS___$1,validate__12087__auto____$1,output_checker21139__$1,G__21140__$1,users__$1,input_schema21137__$1,input_checker21138__$1,vec__21131__$1,is_there_an_omnipotent_god__$1,map21134__$1,map21133__$1,fnk21135__$1,owner21112__$1,map21132__$1,data__13895__auto____$1,p__21114__$1,ufv____$1,output_schema21136__$1,meta21145));
});})(is_there_an_omnipotent_god,map21134,users,map21133,validate__12087__auto__,ufv__,output_schema21136,input_schema21137,input_checker21138,output_checker21139,vec__21131,opts__13896__auto__))
;
}
return (new parley.core.t21144(opts__13896__auto__,app_PLUS_,validate__12087__auto__,output_checker21139,G__21140,users,input_schema21137,input_checker21138,vec__21131,is_there_an_omnipotent_god,map21134,map21133,fnk21135,owner21112,map21132,data__13895__auto__,p__21114,ufv__,output_schema21136,null));
break;
}
})();if(cljs.core.truth_(validate__12087__auto__))
{var temp__4126__auto___21150 = output_checker21139.call(null,o__12090__auto__);if(cljs.core.truth_(temp__4126__auto___21150))
{var error__12089__auto___21151 = temp__4126__auto___21150;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"fnk21135","fnk21135",-809434353,null),cljs.core.pr_str.call(null,error__12089__auto___21151)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21136,new cljs.core.Keyword(null,"value","value",305978217),o__12090__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__12089__auto___21151], null));
} else
{}
} else
{}
return o__12090__auto__;
});})(ufv__,output_schema21136,input_schema21137,input_checker21138,output_checker21139,vec__21131,opts__13896__auto__))
,schema.core.make_fn_schema.call(null,output_schema21136,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21137], null)));
})().call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__13896__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner21112,new cljs.core.Keyword(null,"data","data",-232669377),data__13895__auto__], null));
};
var app_PLUS_ = function (data__13895__auto__,owner21112,var_args){
var p__21114 = null;if (arguments.length > 2) {
  p__21114 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return app_PLUS___delegate.call(this,data__13895__auto__,owner21112,p__21114);};
app_PLUS_.cljs$lang$maxFixedArity = 2;
app_PLUS_.cljs$lang$applyTo = (function (arglist__21152){
var data__13895__auto__ = cljs.core.first(arglist__21152);
arglist__21152 = cljs.core.next(arglist__21152);
var owner21112 = cljs.core.first(arglist__21152);
var p__21114 = cljs.core.rest(arglist__21152);
return app_PLUS___delegate(data__13895__auto__,owner21112,p__21114);
});
app_PLUS_.cljs$core$IFn$_invoke$arity$variadic = app_PLUS___delegate;
return app_PLUS_;
})()
;
parley.core.__GT_app_PLUS_ = (function() {
var __GT_app_PLUS_ = null;
var __GT_app_PLUS___1 = (function (cursor__13864__auto__){return om.core.build.call(null,parley.core.app_PLUS_,cursor__13864__auto__);
});
var __GT_app_PLUS___2 = (function (cursor__13864__auto__,m21113){return om.core.build.call(null,parley.core.app_PLUS_,cursor__13864__auto__,m21113);
});
__GT_app_PLUS_ = function(cursor__13864__auto__,m21113){
switch(arguments.length){
case 1:
return __GT_app_PLUS___1.call(this,cursor__13864__auto__);
case 2:
return __GT_app_PLUS___2.call(this,cursor__13864__auto__,m21113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_app_PLUS_.cljs$core$IFn$_invoke$arity$1 = __GT_app_PLUS___1;
__GT_app_PLUS_.cljs$core$IFn$_invoke$arity$2 = __GT_app_PLUS___2;
return __GT_app_PLUS_;
})()
;
om.core.root.call(null,parley.core.app_PLUS_,parley.core.state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
figwheel.client.watch_and_reload.call(null);

//# sourceMappingURL=core.js.map