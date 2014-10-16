// Compiled by ClojureScript 0.0-2311
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__24214,args){var map__24216 = p__24214;var map__24216__$1 = ((cljs.core.seq_QMARK_.call(null,map__24216))?cljs.core.apply.call(null,cljs.core.hash_map,map__24216):map__24216);var debug = cljs.core.get.call(null,map__24216__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__24214,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__24214,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__24217){
var p__24214 = cljs.core.first(arglist__24217);
var args = cljs.core.rest(arglist__24217);
return log__delegate(p__24214,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__24218){var map__24220 = p__24218;var map__24220__$1 = ((cljs.core.seq_QMARK_.call(null,map__24220))?cljs.core.apply.call(null,cljs.core.hash_map,map__24220):map__24220);var websocket_url = cljs.core.get.call(null,map__24220__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__24221,callback){var map__24223 = p__24221;var map__24223__$1 = ((cljs.core.seq_QMARK_.call(null,map__24223))?cljs.core.apply.call(null,cljs.core.hash_map,map__24223):map__24223);var msg = map__24223__$1;var dependency_file = cljs.core.get.call(null,map__24223__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__24223__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__24223__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__7894__auto__ = dependency_file;if(cljs.core.truth_(or__7894__auto__))
{return or__7894__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__24223,map__24223__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__24223,map__24223__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__24224,p__24225){var map__24228 = p__24224;var map__24228__$1 = ((cljs.core.seq_QMARK_.call(null,map__24228))?cljs.core.apply.call(null,cljs.core.hash_map,map__24228):map__24228);var opts = map__24228__$1;var url_rewriter = cljs.core.get.call(null,map__24228__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__24229 = p__24225;var map__24229__$1 = ((cljs.core.seq_QMARK_.call(null,map__24229))?cljs.core.apply.call(null,cljs.core.hash_map,map__24229):map__24229);var d = map__24229__$1;var file = cljs.core.get.call(null,map__24229__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__24230,p__24231){var map__24273 = p__24230;var map__24273__$1 = ((cljs.core.seq_QMARK_.call(null,map__24273))?cljs.core.apply.call(null,cljs.core.hash_map,map__24273):map__24273);var opts = map__24273__$1;var on_jsload = cljs.core.get.call(null,map__24273__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__24273__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__24274 = p__24231;var map__24274__$1 = ((cljs.core.seq_QMARK_.call(null,map__24274))?cljs.core.apply.call(null,cljs.core.hash_map,map__24274):map__24274);var files = cljs.core.get.call(null,map__24274__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__10959__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10959__auto__,map__24273,map__24273__$1,opts,on_jsload,before_jsload,map__24274,map__24274__$1,files){
return (function (){var f__10960__auto__ = (function (){var switch__10894__auto__ = ((function (c__10959__auto__,map__24273,map__24273__$1,opts,on_jsload,before_jsload,map__24274,map__24274__$1,files){
return (function (state_24297){var state_val_24298 = (state_24297[(1)]);if((state_val_24298 === (6)))
{var inst_24279 = (state_24297[(7)]);var inst_24288 = (state_24297[(2)]);var inst_24289 = cljs.core.PersistentVector.EMPTY_NODE;var inst_24290 = [inst_24279];var inst_24291 = (new cljs.core.PersistentVector(null,1,(5),inst_24289,inst_24290,null));var inst_24292 = cljs.core.apply.call(null,on_jsload,inst_24291);var state_24297__$1 = (function (){var statearr_24299 = state_24297;(statearr_24299[(8)] = inst_24288);
return statearr_24299;
})();var statearr_24300_24314 = state_24297__$1;(statearr_24300_24314[(2)] = inst_24292);
(statearr_24300_24314[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24298 === (5)))
{var inst_24295 = (state_24297[(2)]);var state_24297__$1 = state_24297;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24297__$1,inst_24295);
} else
{if((state_val_24298 === (4)))
{var state_24297__$1 = state_24297;var statearr_24301_24315 = state_24297__$1;(statearr_24301_24315[(2)] = null);
(statearr_24301_24315[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24298 === (3)))
{var inst_24279 = (state_24297[(7)]);var inst_24282 = console.debug("Figwheel: loaded these files");var inst_24283 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24279);var inst_24284 = cljs.core.prn_str.call(null,inst_24283);var inst_24285 = console.log(inst_24284);var inst_24286 = cljs.core.async.timeout.call(null,(10));var state_24297__$1 = (function (){var statearr_24302 = state_24297;(statearr_24302[(9)] = inst_24285);
(statearr_24302[(10)] = inst_24282);
return statearr_24302;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24297__$1,(6),inst_24286);
} else
{if((state_val_24298 === (2)))
{var inst_24279 = (state_24297[(7)]);var inst_24279__$1 = (state_24297[(2)]);var inst_24280 = cljs.core.not_empty.call(null,inst_24279__$1);var state_24297__$1 = (function (){var statearr_24303 = state_24297;(statearr_24303[(7)] = inst_24279__$1);
return statearr_24303;
})();if(cljs.core.truth_(inst_24280))
{var statearr_24304_24316 = state_24297__$1;(statearr_24304_24316[(1)] = (3));
} else
{var statearr_24305_24317 = state_24297__$1;(statearr_24305_24317[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24298 === (1)))
{var inst_24275 = before_jsload.call(null,files);var inst_24276 = figwheel.client.add_request_urls.call(null,opts,files);var inst_24277 = figwheel.client.load_all_js_files.call(null,inst_24276);var state_24297__$1 = (function (){var statearr_24306 = state_24297;(statearr_24306[(11)] = inst_24275);
return statearr_24306;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24297__$1,(2),inst_24277);
} else
{return null;
}
}
}
}
}
}
});})(c__10959__auto__,map__24273,map__24273__$1,opts,on_jsload,before_jsload,map__24274,map__24274__$1,files))
;return ((function (switch__10894__auto__,c__10959__auto__,map__24273,map__24273__$1,opts,on_jsload,before_jsload,map__24274,map__24274__$1,files){
return (function() {
var state_machine__10895__auto__ = null;
var state_machine__10895__auto____0 = (function (){var statearr_24310 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24310[(0)] = state_machine__10895__auto__);
(statearr_24310[(1)] = (1));
return statearr_24310;
});
var state_machine__10895__auto____1 = (function (state_24297){while(true){
var ret_value__10896__auto__ = (function (){try{while(true){
var result__10897__auto__ = switch__10894__auto__.call(null,state_24297);if(cljs.core.keyword_identical_QMARK_.call(null,result__10897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10897__auto__;
}
break;
}
}catch (e24311){if((e24311 instanceof Object))
{var ex__10898__auto__ = e24311;var statearr_24312_24318 = state_24297;(statearr_24312_24318[(5)] = ex__10898__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24297);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24311;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24319 = state_24297;
state_24297 = G__24319;
continue;
}
} else
{return ret_value__10896__auto__;
}
break;
}
});
state_machine__10895__auto__ = function(state_24297){
switch(arguments.length){
case 0:
return state_machine__10895__auto____0.call(this);
case 1:
return state_machine__10895__auto____1.call(this,state_24297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10895__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10895__auto____0;
state_machine__10895__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10895__auto____1;
return state_machine__10895__auto__;
})()
;})(switch__10894__auto__,c__10959__auto__,map__24273,map__24273__$1,opts,on_jsload,before_jsload,map__24274,map__24274__$1,files))
})();var state__10961__auto__ = (function (){var statearr_24313 = f__10960__auto__.call(null);(statearr_24313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10959__auto__);
return statearr_24313;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10961__auto__);
});})(c__10959__auto__,map__24273,map__24273__$1,opts,on_jsload,before_jsload,map__24274,map__24274__$1,files))
);
return c__10959__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__24320,link_href){var map__24322 = p__24320;var map__24322__$1 = ((cljs.core.seq_QMARK_.call(null,map__24322))?cljs.core.apply.call(null,cljs.core.hash_map,map__24322):map__24322);var request_url = cljs.core.get.call(null,map__24322__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__24322__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__10959__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10959__auto__,parent){
return (function (){var f__10960__auto__ = (function (){var switch__10894__auto__ = ((function (c__10959__auto__,parent){
return (function (state_24343){var state_val_24344 = (state_24343[(1)]);if((state_val_24344 === (2)))
{var inst_24340 = (state_24343[(2)]);var inst_24341 = parent.removeChild(orig_link);var state_24343__$1 = (function (){var statearr_24345 = state_24343;(statearr_24345[(7)] = inst_24340);
return statearr_24345;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24343__$1,inst_24341);
} else
{if((state_val_24344 === (1)))
{var inst_24338 = cljs.core.async.timeout.call(null,(200));var state_24343__$1 = state_24343;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24343__$1,(2),inst_24338);
} else
{return null;
}
}
});})(c__10959__auto__,parent))
;return ((function (switch__10894__auto__,c__10959__auto__,parent){
return (function() {
var state_machine__10895__auto__ = null;
var state_machine__10895__auto____0 = (function (){var statearr_24349 = [null,null,null,null,null,null,null,null];(statearr_24349[(0)] = state_machine__10895__auto__);
(statearr_24349[(1)] = (1));
return statearr_24349;
});
var state_machine__10895__auto____1 = (function (state_24343){while(true){
var ret_value__10896__auto__ = (function (){try{while(true){
var result__10897__auto__ = switch__10894__auto__.call(null,state_24343);if(cljs.core.keyword_identical_QMARK_.call(null,result__10897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10897__auto__;
}
break;
}
}catch (e24350){if((e24350 instanceof Object))
{var ex__10898__auto__ = e24350;var statearr_24351_24353 = state_24343;(statearr_24351_24353[(5)] = ex__10898__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24343);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24350;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24354 = state_24343;
state_24343 = G__24354;
continue;
}
} else
{return ret_value__10896__auto__;
}
break;
}
});
state_machine__10895__auto__ = function(state_24343){
switch(arguments.length){
case 0:
return state_machine__10895__auto____0.call(this);
case 1:
return state_machine__10895__auto____1.call(this,state_24343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10895__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10895__auto____0;
state_machine__10895__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10895__auto____1;
return state_machine__10895__auto__;
})()
;})(switch__10894__auto__,c__10959__auto__,parent))
})();var state__10961__auto__ = (function (){var statearr_24352 = f__10960__auto__.call(null);(statearr_24352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10959__auto__);
return statearr_24352;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10961__auto__);
});})(c__10959__auto__,parent))
);
return c__10959__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__24355){var map__24357 = p__24355;var map__24357__$1 = ((cljs.core.seq_QMARK_.call(null,map__24357))?cljs.core.apply.call(null,cljs.core.hash_map,map__24357):map__24357);var f_data = map__24357__$1;var request_url = cljs.core.get.call(null,map__24357__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__24357__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__24358,files_msg){var map__24380 = p__24358;var map__24380__$1 = ((cljs.core.seq_QMARK_.call(null,map__24380))?cljs.core.apply.call(null,cljs.core.hash_map,map__24380):map__24380);var opts = map__24380__$1;var on_cssload = cljs.core.get.call(null,map__24380__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__24381_24401 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__24382_24402 = null;var count__24383_24403 = (0);var i__24384_24404 = (0);while(true){
if((i__24384_24404 < count__24383_24403))
{var f_24405 = cljs.core._nth.call(null,chunk__24382_24402,i__24384_24404);figwheel.client.reload_css_file.call(null,f_24405);
{
var G__24406 = seq__24381_24401;
var G__24407 = chunk__24382_24402;
var G__24408 = count__24383_24403;
var G__24409 = (i__24384_24404 + (1));
seq__24381_24401 = G__24406;
chunk__24382_24402 = G__24407;
count__24383_24403 = G__24408;
i__24384_24404 = G__24409;
continue;
}
} else
{var temp__4126__auto___24410 = cljs.core.seq.call(null,seq__24381_24401);if(temp__4126__auto___24410)
{var seq__24381_24411__$1 = temp__4126__auto___24410;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24381_24411__$1))
{var c__8650__auto___24412 = cljs.core.chunk_first.call(null,seq__24381_24411__$1);{
var G__24413 = cljs.core.chunk_rest.call(null,seq__24381_24411__$1);
var G__24414 = c__8650__auto___24412;
var G__24415 = cljs.core.count.call(null,c__8650__auto___24412);
var G__24416 = (0);
seq__24381_24401 = G__24413;
chunk__24382_24402 = G__24414;
count__24383_24403 = G__24415;
i__24384_24404 = G__24416;
continue;
}
} else
{var f_24417 = cljs.core.first.call(null,seq__24381_24411__$1);figwheel.client.reload_css_file.call(null,f_24417);
{
var G__24418 = cljs.core.next.call(null,seq__24381_24411__$1);
var G__24419 = null;
var G__24420 = (0);
var G__24421 = (0);
seq__24381_24401 = G__24418;
chunk__24382_24402 = G__24419;
count__24383_24403 = G__24420;
i__24384_24404 = G__24421;
continue;
}
}
} else
{}
}
break;
}
var c__10959__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10959__auto__,map__24380,map__24380__$1,opts,on_cssload){
return (function (){var f__10960__auto__ = (function (){var switch__10894__auto__ = ((function (c__10959__auto__,map__24380,map__24380__$1,opts,on_cssload){
return (function (state_24391){var state_val_24392 = (state_24391[(1)]);if((state_val_24392 === (2)))
{var inst_24387 = (state_24391[(2)]);var inst_24388 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_24389 = on_cssload.call(null,inst_24388);var state_24391__$1 = (function (){var statearr_24393 = state_24391;(statearr_24393[(7)] = inst_24387);
return statearr_24393;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24391__$1,inst_24389);
} else
{if((state_val_24392 === (1)))
{var inst_24385 = cljs.core.async.timeout.call(null,(100));var state_24391__$1 = state_24391;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24391__$1,(2),inst_24385);
} else
{return null;
}
}
});})(c__10959__auto__,map__24380,map__24380__$1,opts,on_cssload))
;return ((function (switch__10894__auto__,c__10959__auto__,map__24380,map__24380__$1,opts,on_cssload){
return (function() {
var state_machine__10895__auto__ = null;
var state_machine__10895__auto____0 = (function (){var statearr_24397 = [null,null,null,null,null,null,null,null];(statearr_24397[(0)] = state_machine__10895__auto__);
(statearr_24397[(1)] = (1));
return statearr_24397;
});
var state_machine__10895__auto____1 = (function (state_24391){while(true){
var ret_value__10896__auto__ = (function (){try{while(true){
var result__10897__auto__ = switch__10894__auto__.call(null,state_24391);if(cljs.core.keyword_identical_QMARK_.call(null,result__10897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10897__auto__;
}
break;
}
}catch (e24398){if((e24398 instanceof Object))
{var ex__10898__auto__ = e24398;var statearr_24399_24422 = state_24391;(statearr_24399_24422[(5)] = ex__10898__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24391);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24398;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24423 = state_24391;
state_24391 = G__24423;
continue;
}
} else
{return ret_value__10896__auto__;
}
break;
}
});
state_machine__10895__auto__ = function(state_24391){
switch(arguments.length){
case 0:
return state_machine__10895__auto____0.call(this);
case 1:
return state_machine__10895__auto____1.call(this,state_24391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10895__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10895__auto____0;
state_machine__10895__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10895__auto____1;
return state_machine__10895__auto__;
})()
;})(switch__10894__auto__,c__10959__auto__,map__24380,map__24380__$1,opts,on_cssload))
})();var state__10961__auto__ = (function (){var statearr_24400 = f__10960__auto__.call(null);(statearr_24400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10959__auto__);
return statearr_24400;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10961__auto__);
});})(c__10959__auto__,map__24380,map__24380__$1,opts,on_cssload))
);
return c__10959__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__24424){var map__24429 = p__24424;var map__24429__$1 = ((cljs.core.seq_QMARK_.call(null,map__24429))?cljs.core.apply.call(null,cljs.core.hash_map,map__24429):map__24429);var opts = map__24429__$1;var on_compile_fail = cljs.core.get.call(null,map__24429__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__24429__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__24429__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__24429__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__24429,map__24429__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__24430 = cljs.core._EQ_;var expr__24431 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__24430.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__24431)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__24430.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__24431)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__24430.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__24431)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__24429,map__24429__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__24429,map__24429__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__24429,map__24429__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__24429,map__24429__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__24429,map__24429__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__24429,map__24429__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__24429,map__24429__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__24429,map__24429__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__24429,map__24429__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj24436 = {"detail":url};return obj24436;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__24437){var map__24439 = p__24437;var map__24439__$1 = ((cljs.core.seq_QMARK_.call(null,map__24439))?cljs.core.apply.call(null,cljs.core.hash_map,map__24439):map__24439);var class$ = cljs.core.get.call(null,map__24439__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__24439__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__24440){var map__24446 = p__24440;var map__24446__$1 = ((cljs.core.seq_QMARK_.call(null,map__24446))?cljs.core.apply.call(null,cljs.core.hash_map,map__24446):map__24446);var ed = map__24446__$1;var exception_data = cljs.core.get.call(null,map__24446__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__24446__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__24447_24451 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__24448_24452 = null;var count__24449_24453 = (0);var i__24450_24454 = (0);while(true){
if((i__24450_24454 < count__24449_24453))
{var msg_24455 = cljs.core._nth.call(null,chunk__24448_24452,i__24450_24454);console.log(msg_24455);
{
var G__24456 = seq__24447_24451;
var G__24457 = chunk__24448_24452;
var G__24458 = count__24449_24453;
var G__24459 = (i__24450_24454 + (1));
seq__24447_24451 = G__24456;
chunk__24448_24452 = G__24457;
count__24449_24453 = G__24458;
i__24450_24454 = G__24459;
continue;
}
} else
{var temp__4126__auto___24460 = cljs.core.seq.call(null,seq__24447_24451);if(temp__4126__auto___24460)
{var seq__24447_24461__$1 = temp__4126__auto___24460;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24447_24461__$1))
{var c__8650__auto___24462 = cljs.core.chunk_first.call(null,seq__24447_24461__$1);{
var G__24463 = cljs.core.chunk_rest.call(null,seq__24447_24461__$1);
var G__24464 = c__8650__auto___24462;
var G__24465 = cljs.core.count.call(null,c__8650__auto___24462);
var G__24466 = (0);
seq__24447_24451 = G__24463;
chunk__24448_24452 = G__24464;
count__24449_24453 = G__24465;
i__24450_24454 = G__24466;
continue;
}
} else
{var msg_24467 = cljs.core.first.call(null,seq__24447_24461__$1);console.log(msg_24467);
{
var G__24468 = cljs.core.next.call(null,seq__24447_24461__$1);
var G__24469 = null;
var G__24470 = (0);
var G__24471 = (0);
seq__24447_24451 = G__24468;
chunk__24448_24452 = G__24469;
count__24449_24453 = G__24470;
i__24450_24454 = G__24471;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.debug("Figwheel: loading files");
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.debug("Figwheel: loaded CSS files");
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__7894__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__7894__auto__))
{return or__7894__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__24472){var map__24474 = p__24472;var map__24474__$1 = ((cljs.core.seq_QMARK_.call(null,map__24474))?cljs.core.apply.call(null,cljs.core.hash_map,map__24474):map__24474);var opts = map__24474__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__24472 = null;if (arguments.length > 0) {
  p__24472 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__24472);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__24475){
var p__24472 = cljs.core.seq(arglist__24475);
return watch_and_reload__delegate(p__24472);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map