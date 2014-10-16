// Compiled by ClojureScript 0.0-2311
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__16312__16313__auto__){var G__18705 = p1__16312__16313__auto__;if(G__18705)
{var bit__8547__auto__ = null;if(cljs.core.truth_((function (){var or__7897__auto__ = bit__8547__auto__;if(cljs.core.truth_(or__7897__auto__))
{return or__7897__auto__;
} else
{return G__18705.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__18705.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__18705);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__18705);
}
})], null));
plumbing.fnk.schema.InputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.eq.call(null,schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
* Like (assert (distinct? things)) but with a more helpful error message.
*/
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__18706_SHARP_){return (cljs.core.val.call(null,p1__18706_SHARP_) > (1));
}),cljs.core.frequencies.call(null,things)));if(cljs.core.empty_QMARK_.call(null,repeated_things))
{return null;
} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Got repeated items (expected distinct): %s",repeated_things)));
}
});
/**
* Like (get m k), but throws if k is not present in m.
*/
plumbing.fnk.schema.safe_get = (function safe_get(m,k,key_path){if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Expected a map at key-path %s, got type %s",key_path,schema.utils.type_of.call(null,m))));
}
var vec__18708 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__18708,(0),null);var v = cljs.core.nth.call(null,vec__18708,(1),null);var p = vec__18708;if(cljs.core.truth_(p))
{} else
{throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.keys.call(null,m)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"missing-key","missing-key",1259209562),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"map","map",1371690461),m], null));
}
return v;
});
plumbing.fnk.schema.non_map_union = (function non_map_union(s1,s2){if(cljs.core._EQ_.call(null,s1,s2))
{return s1;
} else
{if(cljs.core._EQ_.call(null,s1,schema.core.Any))
{return s2;
} else
{if(cljs.core._EQ_.call(null,s2,schema.core.Any))
{return s1;
} else
{return schema.core.both.call(null,s1,s2);

}
}
}
});
/**
* Return a difference of schmas s1 and s2, where one is not a map.
* Punt for now, assuming s2 always satisfies s1.
*/
plumbing.fnk.schema.non_map_diff = (function non_map_diff(s1,s2){return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function map_schema_QMARK_(m){return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___18714 = schema.utils.use_fn_validation;var output_schema18709_18715 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema18710_18716 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker18711_18717 = schema.core.checker.call(null,input_schema18710_18716);var output_checker18712_18718 = schema.core.checker.call(null,output_schema18709_18715);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___18714,output_schema18709_18715,input_schema18710_18716,input_checker18711_18717,output_checker18712_18718){
return (function unwrap_schema_form_key(G__18713){var validate__16282__auto__ = ufv___18714.get_cell();if(cljs.core.truth_(validate__16282__auto__))
{var args__16283__auto___18719 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__18713], null);var temp__4126__auto___18720 = input_checker18711_18717.call(null,args__16283__auto___18719);if(cljs.core.truth_(temp__4126__auto___18720))
{var error__16284__auto___18721 = temp__4126__auto___18720;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__16284__auto___18721)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema18710_18716,new cljs.core.Keyword(null,"value","value",305978217),args__16283__auto___18719,new cljs.core.Keyword(null,"error","error",-978969032),error__16284__auto___18721], null));
} else
{}
} else
{}
var o__16285__auto__ = (function (){var k = G__18713;while(true){
if(schema.core.specific_key_QMARK_.call(null,k))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.required_key_QMARK_.call(null,k)], null);
} else
{if((cljs.core.sequential_QMARK_.call(null,k)) && (!(cljs.core.vector_QMARK_.call(null,k))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,k),(2))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,k),false], null);
} else
{return null;
}
}
break;
}
})();if(cljs.core.truth_(validate__16282__auto__))
{var temp__4126__auto___18722 = output_checker18712_18718.call(null,o__16285__auto__);if(cljs.core.truth_(temp__4126__auto___18722))
{var error__16284__auto___18723 = temp__4126__auto___18722;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__16284__auto___18723)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema18709_18715,new cljs.core.Keyword(null,"value","value",305978217),o__16285__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16284__auto___18723], null));
} else
{}
} else
{}
return o__16285__auto__;
});})(ufv___18714,output_schema18709_18715,input_schema18710_18716,input_checker18711_18717,output_checker18712_18718))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema18709_18715,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18710_18716], null)));
var ufv___18729 = schema.utils.use_fn_validation;var output_schema18724_18730 = schema.core.Any;var input_schema18725_18731 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker18726_18732 = schema.core.checker.call(null,input_schema18725_18731);var output_checker18727_18733 = schema.core.checker.call(null,output_schema18724_18730);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___18729,output_schema18724_18730,input_schema18725_18731,input_checker18726_18732,output_checker18727_18733){
return (function explicit_schema_key_map(G__18728){var validate__16282__auto__ = ufv___18729.get_cell();if(cljs.core.truth_(validate__16282__auto__))
{var args__16283__auto___18734 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__18728], null);var temp__4126__auto___18735 = input_checker18726_18732.call(null,args__16283__auto___18734);if(cljs.core.truth_(temp__4126__auto___18735))
{var error__16284__auto___18736 = temp__4126__auto___18735;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__16284__auto___18736)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema18725_18731,new cljs.core.Keyword(null,"value","value",305978217),args__16283__auto___18734,new cljs.core.Keyword(null,"error","error",-978969032),error__16284__auto___18736], null));
} else
{}
} else
{}
var o__16285__auto__ = (function (){var s = G__18728;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__16282__auto__))
{var temp__4126__auto___18737 = output_checker18727_18733.call(null,o__16285__auto__);if(cljs.core.truth_(temp__4126__auto___18737))
{var error__16284__auto___18738 = temp__4126__auto___18737;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__16284__auto___18738)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema18724_18730,new cljs.core.Keyword(null,"value","value",305978217),o__16285__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16284__auto___18738], null));
} else
{}
} else
{}
return o__16285__auto__;
});})(ufv___18729,output_schema18724_18730,input_schema18725_18731,input_checker18726_18732,output_checker18727_18733))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema18724_18730,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18725_18731], null)));
var ufv___18744 = schema.utils.use_fn_validation;var output_schema18739_18745 = schema.core.Any;var input_schema18740_18746 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker18741_18747 = schema.core.checker.call(null,input_schema18740_18746);var output_checker18742_18748 = schema.core.checker.call(null,output_schema18739_18745);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___18744,output_schema18739_18745,input_schema18740_18746,input_checker18741_18747,output_checker18742_18748){
return (function split_schema_keys(G__18743){var validate__16282__auto__ = ufv___18744.get_cell();if(cljs.core.truth_(validate__16282__auto__))
{var args__16283__auto___18749 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__18743], null);var temp__4126__auto___18750 = input_checker18741_18747.call(null,args__16283__auto___18749);if(cljs.core.truth_(temp__4126__auto___18750))
{var error__16284__auto___18751 = temp__4126__auto___18750;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__16284__auto___18751)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema18740_18746,new cljs.core.Keyword(null,"value","value",305978217),args__16283__auto___18749,new cljs.core.Keyword(null,"error","error",-978969032),error__16284__auto___18751], null));
} else
{}
} else
{}
var o__16285__auto__ = (function (){var s = G__18743;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__16282__auto__))
{var temp__4126__auto___18752 = output_checker18742_18748.call(null,o__16285__auto__);if(cljs.core.truth_(temp__4126__auto___18752))
{var error__16284__auto___18753 = temp__4126__auto___18752;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__16284__auto___18753)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema18739_18745,new cljs.core.Keyword(null,"value","value",305978217),o__16285__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16284__auto___18753], null));
} else
{}
} else
{}
return o__16285__auto__;
});})(ufv___18744,output_schema18739_18745,input_schema18740_18746,input_checker18741_18747,output_checker18742_18748))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema18739_18745,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18740_18746], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__18757){var vec__18758 = p__18757;var k = cljs.core.nth.call(null,vec__18758,(0),null);var v = cljs.core.nth.call(null,vec__18758,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__18759 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__18759,(0),null);var ov = cljs.core.nth.call(null,vec__18759,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else
{return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;if (arguments.length > 3) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__18760){
var key_project = cljs.core.first(arglist__18760);
arglist__18760 = cljs.core.next(arglist__18760);
var key_combine = cljs.core.first(arglist__18760);
arglist__18760 = cljs.core.next(arglist__18760);
var val_combine = cljs.core.first(arglist__18760);
var maps = cljs.core.rest(arglist__18760);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___18768 = schema.utils.use_fn_validation;var output_schema18762_18769 = plumbing.fnk.schema.InputSchema;var input_schema18763_18770 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker18764_18771 = schema.core.checker.call(null,input_schema18763_18770);var output_checker18765_18772 = schema.core.checker.call(null,output_schema18762_18769);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___18768,output_schema18762_18769,input_schema18763_18770,input_checker18764_18771,output_checker18765_18772){
return (function union_input_schemata(G__18766,G__18767){var validate__16282__auto__ = ufv___18768.get_cell();if(cljs.core.truth_(validate__16282__auto__))
{var args__16283__auto___18773 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__18766,G__18767], null);var temp__4126__auto___18774 = input_checker18764_18771.call(null,args__16283__auto___18773);if(cljs.core.truth_(temp__4126__auto___18774))
{var error__16284__auto___18775 = temp__4126__auto___18774;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__16284__auto___18775)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema18763_18770,new cljs.core.Keyword(null,"value","value",305978217),args__16283__auto___18773,new cljs.core.Keyword(null,"error","error",-978969032),error__16284__auto___18775], null));
} else
{}
} else
{}
var o__16285__auto__ = (function (){var i1 = G__18766;var i2 = G__18767;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__16282__auto__,ufv___18768,output_schema18762_18769,input_schema18763_18770,input_checker18764_18771,output_checker18765_18772){
return (function (p1__18761_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__18761_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__18761_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__16282__auto__,ufv___18768,output_schema18762_18769,input_schema18763_18770,input_checker18764_18771,output_checker18765_18772))
,((function (validate__16282__auto__,ufv___18768,output_schema18762_18769,input_schema18763_18770,input_checker18764_18771,output_checker18765_18772){
return (function (k1,k2){if(schema.core.required_key_QMARK_.call(null,k1))
{return k1;
} else
{if(schema.core.required_key_QMARK_.call(null,k2))
{return k2;
} else
{if(schema.core.optional_key_QMARK_.call(null,k1))
{if(cljs.core._EQ_.call(null,k1,k2))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null)))))));
}
return k1;
} else
{if(cljs.core._EQ_.call(null,k1,k2))
{return k1;
} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Only one extra schema allowed")));


}
}
}
}
});})(validate__16282__auto__,ufv___18768,output_schema18762_18769,input_schema18763_18770,input_checker18764_18771,output_checker18765_18772))
,((function (validate__16282__auto__,ufv___18768,output_schema18762_18769,input_schema18763_18770,input_checker18764_18771,output_checker18765_18772){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__16282__auto__,ufv___18768,output_schema18762_18769,input_schema18763_18770,input_checker18764_18771,output_checker18765_18772))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__16282__auto__))
{var temp__4126__auto___18776 = output_checker18765_18772.call(null,o__16285__auto__);if(cljs.core.truth_(temp__4126__auto___18776))
{var error__16284__auto___18777 = temp__4126__auto___18776;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__16284__auto___18777)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema18762_18769,new cljs.core.Keyword(null,"value","value",305978217),o__16285__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16284__auto___18777], null));
} else
{}
} else
{}
return o__16285__auto__;
});})(ufv___18768,output_schema18762_18769,input_schema18763_18770,input_checker18764_18771,output_checker18765_18772))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema18762_18769,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18763_18770], null)));
var ufv___18783 = schema.utils.use_fn_validation;var output_schema18778_18784 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema18779_18785 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker18780_18786 = schema.core.checker.call(null,input_schema18779_18785);var output_checker18781_18787 = schema.core.checker.call(null,output_schema18778_18784);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___18783,output_schema18778_18784,input_schema18779_18785,input_checker18780_18786,output_checker18781_18787){
return (function required_toplevel_keys(G__18782){var validate__16282__auto__ = ufv___18783.get_cell();if(cljs.core.truth_(validate__16282__auto__))
{var args__16283__auto___18788 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__18782], null);var temp__4126__auto___18789 = input_checker18780_18786.call(null,args__16283__auto___18788);if(cljs.core.truth_(temp__4126__auto___18789))
{var error__16284__auto___18790 = temp__4126__auto___18789;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__16284__auto___18790)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema18779_18785,new cljs.core.Keyword(null,"value","value",305978217),args__16283__auto___18788,new cljs.core.Keyword(null,"error","error",-978969032),error__16284__auto___18790], null));
} else
{}
} else
{}
var o__16285__auto__ = (function (){var input_schema = G__18782;while(true){
return cljs.core.keep.call(null,((function (validate__16282__auto__,ufv___18783,output_schema18778_18784,input_schema18779_18785,input_checker18780_18786,output_checker18781_18787){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__16282__auto__,ufv___18783,output_schema18778_18784,input_schema18779_18785,input_checker18780_18786,output_checker18781_18787))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__16282__auto__))
{var temp__4126__auto___18791 = output_checker18781_18787.call(null,o__16285__auto__);if(cljs.core.truth_(temp__4126__auto___18791))
{var error__16284__auto___18792 = temp__4126__auto___18791;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__16284__auto___18792)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema18778_18784,new cljs.core.Keyword(null,"value","value",305978217),o__16285__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16284__auto___18792], null));
} else
{}
} else
{}
return o__16285__auto__;
});})(ufv___18783,output_schema18778_18784,input_schema18779_18785,input_checker18780_18786,output_checker18781_18787))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema18778_18784,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18779_18785], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8622__auto__ = (function iter__18801(s__18802){return (new cljs.core.LazySeq(null,(function (){var s__18802__$1 = s__18802;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18802__$1);if(temp__4126__auto__)
{var s__18802__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18802__$2))
{var c__8620__auto__ = cljs.core.chunk_first.call(null,s__18802__$2);var size__8621__auto__ = cljs.core.count.call(null,c__8620__auto__);var b__18804 = cljs.core.chunk_buffer.call(null,size__8621__auto__);if((function (){var i__18803 = (0);while(true){
if((i__18803 < size__8621__auto__))
{var vec__18807 = cljs.core._nth.call(null,c__8620__auto__,i__18803);var k = cljs.core.nth.call(null,vec__18807,(0),null);var v = cljs.core.nth.call(null,vec__18807,(1),null);cljs.core.chunk_append.call(null,b__18804,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__18809 = (i__18803 + (1));
i__18803 = G__18809;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18804),iter__18801.call(null,cljs.core.chunk_rest.call(null,s__18802__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18804),null);
}
} else
{var vec__18808 = cljs.core.first.call(null,s__18802__$2);var k = cljs.core.nth.call(null,vec__18808,(0),null);var v = cljs.core.nth.call(null,vec__18808,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__18801.call(null,cljs.core.rest.call(null,s__18802__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8622__auto__.call(null,expr);
})());
} else
{return new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null);
}
});
/**
* Subtract output-schema from input-schema, returning nil if it's possible that an object
* satisfying the output-schema satisfies the input-schema, or otherwise a description
* of the part(s) of input-schema not met by output-schema.  Strict about the map structure
* of output-schema matching input-schema, but loose about everything else (only looks at
* required keys of output-schema.
*/
plumbing.fnk.schema.schema_diff = (function schema_diff(input_schema,output_schema){if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,input_schema)))
{return plumbing.fnk.schema.non_map_diff.call(null,input_schema,output_schema);
} else
{if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,output_schema)))
{return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,input_schema,output_schema,(new cljs.core.Delay((function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8622__auto__ = (function iter__18818(s__18819){return (new cljs.core.LazySeq(null,(function (){var s__18819__$1 = s__18819;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18819__$1);if(temp__4126__auto__)
{var s__18819__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18819__$2))
{var c__8620__auto__ = cljs.core.chunk_first.call(null,s__18819__$2);var size__8621__auto__ = cljs.core.count.call(null,c__8620__auto__);var b__18821 = cljs.core.chunk_buffer.call(null,size__8621__auto__);if((function (){var i__18820 = (0);while(true){
if((i__18820 < size__8621__auto__))
{var vec__18824 = cljs.core._nth.call(null,c__8620__auto__,i__18820);var k = cljs.core.nth.call(null,vec__18824,(0),null);var v = cljs.core.nth.call(null,vec__18824,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__18821,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__18826 = (i__18820 + (1));
i__18820 = G__18826;
continue;
}
} else
{{
var G__18827 = (i__18820 + (1));
i__18820 = G__18827;
continue;
}
}
} else
{{
var G__18828 = (i__18820 + (1));
i__18820 = G__18828;
continue;
}
}
} else
{{
var G__18829 = (i__18820 + (1));
i__18820 = G__18829;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18821),iter__18818.call(null,cljs.core.chunk_rest.call(null,s__18819__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18821),null);
}
} else
{var vec__18825 = cljs.core.first.call(null,s__18819__$2);var k = cljs.core.nth.call(null,vec__18825,(0),null);var v = cljs.core.nth.call(null,vec__18825,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__18818.call(null,cljs.core.rest.call(null,s__18819__$2)));
} else
{{
var G__18830 = cljs.core.rest.call(null,s__18819__$2);
s__18819__$1 = G__18830;
continue;
}
}
} else
{{
var G__18831 = cljs.core.rest.call(null,s__18819__$2);
s__18819__$1 = G__18831;
continue;
}
}
} else
{{
var G__18832 = cljs.core.rest.call(null,s__18819__$2);
s__18819__$1 = G__18832;
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
});return iter__8622__auto__.call(null,input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function assert_satisfies_schema(input_schema,output_schema){var fails = plumbing.fnk.schema.schema_diff.call(null,input_schema,output_schema);if(cljs.core.truth_(fails))
{throw cljs.core.ex_info.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fails)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",-1543152824),new cljs.core.Keyword(null,"failures","failures",-912916356),fails], null));
} else
{return null;
}
});
var ufv___18855 = schema.utils.use_fn_validation;var output_schema18833_18856 = schema.core.Any;var input_schema18834_18857 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker18835_18858 = schema.core.checker.call(null,input_schema18834_18857);var output_checker18836_18859 = schema.core.checker.call(null,output_schema18833_18856);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___18855,output_schema18833_18856,input_schema18834_18857,input_checker18835_18858,output_checker18836_18859){
return (function compose_schemata(G__18837,G__18838){var validate__16282__auto__ = true;if(validate__16282__auto__)
{var args__16283__auto___18860 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__18837,G__18838], null);var temp__4126__auto___18861 = input_checker18835_18858.call(null,args__16283__auto___18860);if(cljs.core.truth_(temp__4126__auto___18861))
{var error__16284__auto___18862 = temp__4126__auto___18861;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__16284__auto___18862)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema18834_18857,new cljs.core.Keyword(null,"value","value",305978217),args__16283__auto___18860,new cljs.core.Keyword(null,"error","error",-978969032),error__16284__auto___18862], null));
} else
{}
} else
{}
var o__16285__auto__ = (function (){var G__18849 = G__18837;var vec__18851 = G__18849;var i2 = cljs.core.nth.call(null,vec__18851,(0),null);var o2 = cljs.core.nth.call(null,vec__18851,(1),null);var G__18850 = G__18838;var vec__18852 = G__18850;var i1 = cljs.core.nth.call(null,vec__18852,(0),null);var o1 = cljs.core.nth.call(null,vec__18852,(1),null);var G__18849__$1 = G__18849;var G__18850__$1 = G__18850;while(true){
var vec__18853 = G__18849__$1;var i2__$1 = cljs.core.nth.call(null,vec__18853,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__18853,(1),null);var vec__18854 = G__18850__$1;var i1__$1 = cljs.core.nth.call(null,vec__18854,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__18854,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__16282__auto__)
{var temp__4126__auto___18863 = output_checker18836_18859.call(null,o__16285__auto__);if(cljs.core.truth_(temp__4126__auto___18863))
{var error__16284__auto___18864 = temp__4126__auto___18863;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__16284__auto___18864)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema18833_18856,new cljs.core.Keyword(null,"value","value",305978217),o__16285__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16284__auto___18864], null));
} else
{}
} else
{}
return o__16285__auto__;
});})(ufv___18855,output_schema18833_18856,input_schema18834_18857,input_checker18835_18858,output_checker18836_18859))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema18833_18856,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18834_18857], null)));
plumbing.fnk.schema.schema_key = (function schema_key(m,k){if(cljs.core.contains_QMARK_.call(null,m,k))
{return k;
} else
{if(cljs.core.contains_QMARK_.call(null,m,schema.core.optional_key.call(null,k)))
{return schema.core.optional_key.call(null,k);
} else
{return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function possibly_contains_QMARK_(m,k){return cljs.core.boolean$.call(null,plumbing.fnk.schema.schema_key.call(null,m,k));
});
var ufv___18943 = schema.utils.use_fn_validation;var output_schema18865_18944 = schema.core.Any;var input_schema18866_18945 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker18867_18946 = schema.core.checker.call(null,input_schema18866_18945);var output_checker18868_18947 = schema.core.checker.call(null,output_schema18865_18944);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___18943,output_schema18865_18944,input_schema18866_18945,input_checker18867_18946,output_checker18868_18947){
return (function split_schema(G__18869,G__18870){var validate__16282__auto__ = ufv___18943.get_cell();if(cljs.core.truth_(validate__16282__auto__))
{var args__16283__auto___18948 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__18869,G__18870], null);var temp__4126__auto___18949 = input_checker18867_18946.call(null,args__16283__auto___18948);if(cljs.core.truth_(temp__4126__auto___18949))
{var error__16284__auto___18950 = temp__4126__auto___18949;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__16284__auto___18950)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema18866_18945,new cljs.core.Keyword(null,"value","value",305978217),args__16283__auto___18948,new cljs.core.Keyword(null,"error","error",-978969032),error__16284__auto___18950], null));
} else
{}
} else
{}
var o__16285__auto__ = (function (){var s = G__18869;var ks = G__18870;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__8622__auto__ = ((function (ks__$1,validate__16282__auto__,ufv___18943,output_schema18865_18944,input_schema18866_18945,input_checker18867_18946,output_checker18868_18947){
return (function iter__18907(s__18908){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__16282__auto__,ufv___18943,output_schema18865_18944,input_schema18866_18945,input_checker18867_18946,output_checker18868_18947){
return (function (){var s__18908__$1 = s__18908;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18908__$1);if(temp__4126__auto__)
{var s__18908__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18908__$2))
{var c__8620__auto__ = cljs.core.chunk_first.call(null,s__18908__$2);var size__8621__auto__ = cljs.core.count.call(null,c__8620__auto__);var b__18910 = cljs.core.chunk_buffer.call(null,size__8621__auto__);if((function (){var i__18909 = (0);while(true){
if((i__18909 < size__8621__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__8620__auto__,i__18909);cljs.core.chunk_append.call(null,b__18910,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8622__auto__ = ((function (i__18909,in_QMARK_,c__8620__auto__,size__8621__auto__,b__18910,s__18908__$2,temp__4126__auto__,ks__$1,validate__16282__auto__,ufv___18943,output_schema18865_18944,input_schema18866_18945,input_checker18867_18946,output_checker18868_18947){
return (function iter__18927(s__18928){return (new cljs.core.LazySeq(null,((function (i__18909,in_QMARK_,c__8620__auto__,size__8621__auto__,b__18910,s__18908__$2,temp__4126__auto__,ks__$1,validate__16282__auto__,ufv___18943,output_schema18865_18944,input_schema18866_18945,input_checker18867_18946,output_checker18868_18947){
return (function (){var s__18928__$1 = s__18928;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__18928__$1);if(temp__4126__auto____$1)
{var s__18928__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__18928__$2))
{var c__8620__auto____$1 = cljs.core.chunk_first.call(null,s__18928__$2);var size__8621__auto____$1 = cljs.core.count.call(null,c__8620__auto____$1);var b__18930 = cljs.core.chunk_buffer.call(null,size__8621__auto____$1);if((function (){var i__18929 = (0);while(true){
if((i__18929 < size__8621__auto____$1))
{var vec__18933 = cljs.core._nth.call(null,c__8620__auto____$1,i__18929);var k = cljs.core.nth.call(null,vec__18933,(0),null);var v = cljs.core.nth.call(null,vec__18933,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__18930,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__18951 = (i__18929 + (1));
i__18929 = G__18951;
continue;
}
} else
{{
var G__18952 = (i__18929 + (1));
i__18929 = G__18952;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18930),iter__18927.call(null,cljs.core.chunk_rest.call(null,s__18928__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18930),null);
}
} else
{var vec__18934 = cljs.core.first.call(null,s__18928__$2);var k = cljs.core.nth.call(null,vec__18934,(0),null);var v = cljs.core.nth.call(null,vec__18934,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__18927.call(null,cljs.core.rest.call(null,s__18928__$2)));
} else
{{
var G__18953 = cljs.core.rest.call(null,s__18928__$2);
s__18928__$1 = G__18953;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__18909,in_QMARK_,c__8620__auto__,size__8621__auto__,b__18910,s__18908__$2,temp__4126__auto__,ks__$1,validate__16282__auto__,ufv___18943,output_schema18865_18944,input_schema18866_18945,input_checker18867_18946,output_checker18868_18947))
,null,null));
});})(i__18909,in_QMARK_,c__8620__auto__,size__8621__auto__,b__18910,s__18908__$2,temp__4126__auto__,ks__$1,validate__16282__auto__,ufv___18943,output_schema18865_18944,input_schema18866_18945,input_checker18867_18946,output_checker18868_18947))
;return iter__8622__auto__.call(null,s);
})()));
{
var G__18954 = (i__18909 + (1));
i__18909 = G__18954;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18910),iter__18907.call(null,cljs.core.chunk_rest.call(null,s__18908__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18910),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__18908__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8622__auto__ = ((function (in_QMARK_,s__18908__$2,temp__4126__auto__,ks__$1,validate__16282__auto__,ufv___18943,output_schema18865_18944,input_schema18866_18945,input_checker18867_18946,output_checker18868_18947){
return (function iter__18935(s__18936){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__18908__$2,temp__4126__auto__,ks__$1,validate__16282__auto__,ufv___18943,output_schema18865_18944,input_schema18866_18945,input_checker18867_18946,output_checker18868_18947){
return (function (){var s__18936__$1 = s__18936;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__18936__$1);if(temp__4126__auto____$1)
{var s__18936__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__18936__$2))
{var c__8620__auto__ = cljs.core.chunk_first.call(null,s__18936__$2);var size__8621__auto__ = cljs.core.count.call(null,c__8620__auto__);var b__18938 = cljs.core.chunk_buffer.call(null,size__8621__auto__);if((function (){var i__18937 = (0);while(true){
if((i__18937 < size__8621__auto__))
{var vec__18941 = cljs.core._nth.call(null,c__8620__auto__,i__18937);var k = cljs.core.nth.call(null,vec__18941,(0),null);var v = cljs.core.nth.call(null,vec__18941,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__18938,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__18955 = (i__18937 + (1));
i__18937 = G__18955;
continue;
}
} else
{{
var G__18956 = (i__18937 + (1));
i__18937 = G__18956;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18938),iter__18935.call(null,cljs.core.chunk_rest.call(null,s__18936__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18938),null);
}
} else
{var vec__18942 = cljs.core.first.call(null,s__18936__$2);var k = cljs.core.nth.call(null,vec__18942,(0),null);var v = cljs.core.nth.call(null,vec__18942,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__18935.call(null,cljs.core.rest.call(null,s__18936__$2)));
} else
{{
var G__18957 = cljs.core.rest.call(null,s__18936__$2);
s__18936__$1 = G__18957;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__18908__$2,temp__4126__auto__,ks__$1,validate__16282__auto__,ufv___18943,output_schema18865_18944,input_schema18866_18945,input_checker18867_18946,output_checker18868_18947))
,null,null));
});})(in_QMARK_,s__18908__$2,temp__4126__auto__,ks__$1,validate__16282__auto__,ufv___18943,output_schema18865_18944,input_schema18866_18945,input_checker18867_18946,output_checker18868_18947))
;return iter__8622__auto__.call(null,s);
})()),iter__18907.call(null,cljs.core.rest.call(null,s__18908__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__16282__auto__,ufv___18943,output_schema18865_18944,input_schema18866_18945,input_checker18867_18946,output_checker18868_18947))
,null,null));
});})(ks__$1,validate__16282__auto__,ufv___18943,output_schema18865_18944,input_schema18866_18945,input_checker18867_18946,output_checker18868_18947))
;return iter__8622__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__16282__auto__))
{var temp__4126__auto___18958 = output_checker18868_18947.call(null,o__16285__auto__);if(cljs.core.truth_(temp__4126__auto___18958))
{var error__16284__auto___18959 = temp__4126__auto___18958;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__16284__auto___18959)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema18865_18944,new cljs.core.Keyword(null,"value","value",305978217),o__16285__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16284__auto___18959], null));
} else
{}
} else
{}
return o__16285__auto__;
});})(ufv___18943,output_schema18865_18944,input_schema18866_18945,input_checker18867_18946,output_checker18868_18947))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema18865_18944,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18866_18945], null)));
var ufv___18990 = schema.utils.use_fn_validation;var output_schema18960_18991 = plumbing.fnk.schema.GraphIOSchemata;var input_schema18961_18992 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker18962_18993 = schema.core.checker.call(null,input_schema18961_18992);var output_checker18963_18994 = schema.core.checker.call(null,output_schema18960_18991);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___18990,output_schema18960_18991,input_schema18961_18992,input_checker18962_18993,output_checker18963_18994){
return (function sequence_schemata(G__18964,G__18965){var validate__16282__auto__ = ufv___18990.get_cell();if(cljs.core.truth_(validate__16282__auto__))
{var args__16283__auto___18995 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__18964,G__18965], null);var temp__4126__auto___18996 = input_checker18962_18993.call(null,args__16283__auto___18995);if(cljs.core.truth_(temp__4126__auto___18996))
{var error__16284__auto___18997 = temp__4126__auto___18996;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__16284__auto___18997)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema18961_18992,new cljs.core.Keyword(null,"value","value",305978217),args__16283__auto___18995,new cljs.core.Keyword(null,"error","error",-978969032),error__16284__auto___18997], null));
} else
{}
} else
{}
var o__16285__auto__ = (function (){var G__18981 = G__18964;var vec__18983 = G__18981;var i1 = cljs.core.nth.call(null,vec__18983,(0),null);var o1 = cljs.core.nth.call(null,vec__18983,(1),null);var G__18982 = G__18965;var vec__18984 = G__18982;var k = cljs.core.nth.call(null,vec__18984,(0),null);var vec__18985 = cljs.core.nth.call(null,vec__18984,(1),null);var i2 = cljs.core.nth.call(null,vec__18985,(0),null);var o2 = cljs.core.nth.call(null,vec__18985,(1),null);var G__18981__$1 = G__18981;var G__18982__$1 = G__18982;while(true){
var vec__18986 = G__18981__$1;var i1__$1 = cljs.core.nth.call(null,vec__18986,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__18986,(1),null);var vec__18987 = G__18982__$1;var k__$1 = cljs.core.nth.call(null,vec__18987,(0),null);var vec__18988 = cljs.core.nth.call(null,vec__18987,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__18988,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__18988,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",k__$1,schema.core.explain.call(null,i2__$1),schema.core.explain.call(null,i1__$1))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i2__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Node outputs a key %s in its inputs %s",k__$1,schema.core.explain.call(null,i2__$1))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,o1__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Node outputs a duplicate key %s given inputs %s",k__$1,schema.core.explain.call(null,i1__$1))));
}
var vec__18989 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__18989,(0),null);var unused = cljs.core.nth.call(null,vec__18989,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__16282__auto__))
{var temp__4126__auto___18998 = output_checker18963_18994.call(null,o__16285__auto__);if(cljs.core.truth_(temp__4126__auto___18998))
{var error__16284__auto___18999 = temp__4126__auto___18998;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__16284__auto___18999)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema18960_18991,new cljs.core.Keyword(null,"value","value",305978217),o__16285__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__16284__auto___18999], null));
} else
{}
} else
{}
return o__16285__auto__;
});})(ufv___18990,output_schema18960_18991,input_schema18961_18992,input_checker18962_18993,output_checker18963_18994))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema18960_18991,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18961_18992], null)));

//# sourceMappingURL=schema.js.map