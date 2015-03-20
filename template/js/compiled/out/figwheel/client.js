// Compiled by ClojureScript 0.0-3126 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17935__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__17935 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17936__i = 0, G__17936__a = new Array(arguments.length -  0);
while (G__17936__i < G__17936__a.length) {G__17936__a[G__17936__i] = arguments[G__17936__i + 0]; ++G__17936__i;}
  args = new cljs.core.IndexedSeq(G__17936__a,0);
} 
return G__17935__delegate.call(this,args);};
G__17935.cljs$lang$maxFixedArity = 0;
G__17935.cljs$lang$applyTo = (function (arglist__17937){
var args = cljs.core.seq(arglist__17937);
return G__17935__delegate(args);
});
G__17935.cljs$core$IFn$_invoke$arity$variadic = G__17935__delegate;
return G__17935;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__17938){
var map__17940 = p__17938;
var map__17940__$1 = ((cljs.core.seq_QMARK_.call(null,map__17940))?cljs.core.apply.call(null,cljs.core.hash_map,map__17940):map__17940);
var class$ = cljs.core.get.call(null,map__17940__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__17940__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4066__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4066__auto__)){
return or__4066__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4054__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4054__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4054__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__6351__auto___18069 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6351__auto___18069,ch){
return (function (){
var f__6352__auto__ = (function (){var switch__6295__auto__ = ((function (c__6351__auto___18069,ch){
return (function (state_18043){
var state_val_18044 = (state_18043[(1)]);
if((state_val_18044 === (7))){
var inst_18039 = (state_18043[(2)]);
var state_18043__$1 = state_18043;
var statearr_18045_18070 = state_18043__$1;
(statearr_18045_18070[(2)] = inst_18039);

(statearr_18045_18070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18044 === (1))){
var state_18043__$1 = state_18043;
var statearr_18046_18071 = state_18043__$1;
(statearr_18046_18071[(2)] = null);

(statearr_18046_18071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18044 === (4))){
var inst_18007 = (state_18043[(7)]);
var inst_18007__$1 = (state_18043[(2)]);
var state_18043__$1 = (function (){var statearr_18047 = state_18043;
(statearr_18047[(7)] = inst_18007__$1);

return statearr_18047;
})();
if(cljs.core.truth_(inst_18007__$1)){
var statearr_18048_18072 = state_18043__$1;
(statearr_18048_18072[(1)] = (5));

} else {
var statearr_18049_18073 = state_18043__$1;
(statearr_18049_18073[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18044 === (13))){
var state_18043__$1 = state_18043;
var statearr_18050_18074 = state_18043__$1;
(statearr_18050_18074[(2)] = null);

(statearr_18050_18074[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18044 === (6))){
var state_18043__$1 = state_18043;
var statearr_18051_18075 = state_18043__$1;
(statearr_18051_18075[(2)] = null);

(statearr_18051_18075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18044 === (3))){
var inst_18041 = (state_18043[(2)]);
var state_18043__$1 = state_18043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18043__$1,inst_18041);
} else {
if((state_val_18044 === (12))){
var inst_18014 = (state_18043[(8)]);
var inst_18027 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_18014);
var inst_18028 = cljs.core.first.call(null,inst_18027);
var inst_18029 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_18028);
var inst_18030 = console.warn("Figwheel: Not loading code with warnings - ",inst_18029);
var state_18043__$1 = state_18043;
var statearr_18052_18076 = state_18043__$1;
(statearr_18052_18076[(2)] = inst_18030);

(statearr_18052_18076[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18044 === (2))){
var state_18043__$1 = state_18043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18043__$1,(4),ch);
} else {
if((state_val_18044 === (11))){
var inst_18023 = (state_18043[(2)]);
var state_18043__$1 = state_18043;
var statearr_18053_18077 = state_18043__$1;
(statearr_18053_18077[(2)] = inst_18023);

(statearr_18053_18077[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18044 === (9))){
var inst_18013 = (state_18043[(9)]);
var inst_18025 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_18013,opts);
var state_18043__$1 = state_18043;
if(inst_18025){
var statearr_18054_18078 = state_18043__$1;
(statearr_18054_18078[(1)] = (12));

} else {
var statearr_18055_18079 = state_18043__$1;
(statearr_18055_18079[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18044 === (5))){
var inst_18013 = (state_18043[(9)]);
var inst_18007 = (state_18043[(7)]);
var inst_18009 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_18010 = (new cljs.core.PersistentArrayMap(null,2,inst_18009,null));
var inst_18011 = (new cljs.core.PersistentHashSet(null,inst_18010,null));
var inst_18012 = figwheel.client.focus_msgs.call(null,inst_18011,inst_18007);
var inst_18013__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_18012);
var inst_18014 = cljs.core.first.call(null,inst_18012);
var inst_18015 = figwheel.client.reload_file_state_QMARK_.call(null,inst_18013__$1,opts);
var state_18043__$1 = (function (){var statearr_18056 = state_18043;
(statearr_18056[(9)] = inst_18013__$1);

(statearr_18056[(8)] = inst_18014);

return statearr_18056;
})();
if(cljs.core.truth_(inst_18015)){
var statearr_18057_18080 = state_18043__$1;
(statearr_18057_18080[(1)] = (8));

} else {
var statearr_18058_18081 = state_18043__$1;
(statearr_18058_18081[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18044 === (14))){
var inst_18033 = (state_18043[(2)]);
var state_18043__$1 = state_18043;
var statearr_18059_18082 = state_18043__$1;
(statearr_18059_18082[(2)] = inst_18033);

(statearr_18059_18082[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18044 === (10))){
var inst_18035 = (state_18043[(2)]);
var state_18043__$1 = (function (){var statearr_18060 = state_18043;
(statearr_18060[(10)] = inst_18035);

return statearr_18060;
})();
var statearr_18061_18083 = state_18043__$1;
(statearr_18061_18083[(2)] = null);

(statearr_18061_18083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18044 === (8))){
var inst_18014 = (state_18043[(8)]);
var inst_18017 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18018 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_18014);
var inst_18019 = cljs.core.async.timeout.call(null,(1000));
var inst_18020 = [inst_18018,inst_18019];
var inst_18021 = (new cljs.core.PersistentVector(null,2,(5),inst_18017,inst_18020,null));
var state_18043__$1 = state_18043;
return cljs.core.async.ioc_alts_BANG_.call(null,state_18043__$1,(11),inst_18021);
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
});})(c__6351__auto___18069,ch))
;
return ((function (switch__6295__auto__,c__6351__auto___18069,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__6296__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__6296__auto____0 = (function (){
var statearr_18065 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18065[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__6296__auto__);

(statearr_18065[(1)] = (1));

return statearr_18065;
});
var figwheel$client$file_reloader_plugin_$_state_machine__6296__auto____1 = (function (state_18043){
while(true){
var ret_value__6297__auto__ = (function (){try{while(true){
var result__6298__auto__ = switch__6295__auto__.call(null,state_18043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6298__auto__;
}
break;
}
}catch (e18066){if((e18066 instanceof Object)){
var ex__6299__auto__ = e18066;
var statearr_18067_18084 = state_18043;
(statearr_18067_18084[(5)] = ex__6299__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18085 = state_18043;
state_18043 = G__18085;
continue;
} else {
return ret_value__6297__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__6296__auto__ = function(state_18043){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__6296__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__6296__auto____1.call(this,state_18043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__6296__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__6296__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__6296__auto__;
})()
;})(switch__6295__auto__,c__6351__auto___18069,ch))
})();
var state__6353__auto__ = (function (){var statearr_18068 = f__6352__auto__.call(null);
(statearr_18068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6351__auto___18069);

return statearr_18068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6353__auto__);
});})(c__6351__auto___18069,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__18086_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__18086_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_18095 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__18088_SHARP_,p2__18087_SHARP_){
return [cljs.core.str(p2__18087_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_18095){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_18093 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_18094 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_18093,_STAR_print_newline_STAR_18094,base_path_18095){
return (function() { 
var G__18096__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__18096 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18097__i = 0, G__18097__a = new Array(arguments.length -  0);
while (G__18097__i < G__18097__a.length) {G__18097__a[G__18097__i] = arguments[G__18097__i + 0]; ++G__18097__i;}
  args = new cljs.core.IndexedSeq(G__18097__a,0);
} 
return G__18096__delegate.call(this,args);};
G__18096.cljs$lang$maxFixedArity = 0;
G__18096.cljs$lang$applyTo = (function (arglist__18098){
var args = cljs.core.seq(arglist__18098);
return G__18096__delegate(args);
});
G__18096.cljs$core$IFn$_invoke$arity$variadic = G__18096__delegate;
return G__18096;
})()
;})(_STAR_print_fn_STAR_18093,_STAR_print_newline_STAR_18094,base_path_18095))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_18094;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_18093;
}}catch (e18092){if((e18092 instanceof Error)){
var e = e18092;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_18095], null));
} else {
var e = e18092;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_18095))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__18099){
var map__18104 = p__18099;
var map__18104__$1 = ((cljs.core.seq_QMARK_.call(null,map__18104))?cljs.core.apply.call(null,cljs.core.hash_map,map__18104):map__18104);
var opts = map__18104__$1;
var build_id = cljs.core.get.call(null,map__18104__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__18104,map__18104__$1,opts,build_id){
return (function (p__18105){
var vec__18106 = p__18105;
var map__18107 = cljs.core.nth.call(null,vec__18106,(0),null);
var map__18107__$1 = ((cljs.core.seq_QMARK_.call(null,map__18107))?cljs.core.apply.call(null,cljs.core.hash_map,map__18107):map__18107);
var msg = map__18107__$1;
var msg_name = cljs.core.get.call(null,map__18107__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__18106,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__18106,map__18107,map__18107__$1,msg,msg_name,_,map__18104,map__18104__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__18106,map__18107,map__18107__$1,msg,msg_name,_,map__18104,map__18104__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__18104,map__18104__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__18111){
var vec__18112 = p__18111;
var map__18113 = cljs.core.nth.call(null,vec__18112,(0),null);
var map__18113__$1 = ((cljs.core.seq_QMARK_.call(null,map__18113))?cljs.core.apply.call(null,cljs.core.hash_map,map__18113):map__18113);
var msg = map__18113__$1;
var msg_name = cljs.core.get.call(null,map__18113__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__18112,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__18114){
var map__18122 = p__18114;
var map__18122__$1 = ((cljs.core.seq_QMARK_.call(null,map__18122))?cljs.core.apply.call(null,cljs.core.hash_map,map__18122):map__18122);
var on_compile_fail = cljs.core.get.call(null,map__18122__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__18122__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__18122,map__18122__$1,on_compile_fail,on_compile_warning){
return (function (p__18123){
var vec__18124 = p__18123;
var map__18125 = cljs.core.nth.call(null,vec__18124,(0),null);
var map__18125__$1 = ((cljs.core.seq_QMARK_.call(null,map__18125))?cljs.core.apply.call(null,cljs.core.hash_map,map__18125):map__18125);
var msg = map__18125__$1;
var msg_name = cljs.core.get.call(null,map__18125__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__18124,(1));
var pred__18126 = cljs.core._EQ_;
var expr__18127 = msg_name;
if(cljs.core.truth_(pred__18126.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__18127))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__18126.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__18127))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__18122,map__18122__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__6351__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6351__auto__,msg_hist,msg_names,msg){
return (function (){
var f__6352__auto__ = (function (){var switch__6295__auto__ = ((function (c__6351__auto__,msg_hist,msg_names,msg){
return (function (state_18324){
var state_val_18325 = (state_18324[(1)]);
if((state_val_18325 === (7))){
var inst_18260 = (state_18324[(2)]);
var state_18324__$1 = state_18324;
var statearr_18326_18367 = state_18324__$1;
(statearr_18326_18367[(2)] = inst_18260);

(statearr_18326_18367[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (20))){
var inst_18286 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_18324__$1 = state_18324;
if(inst_18286){
var statearr_18327_18368 = state_18324__$1;
(statearr_18327_18368[(1)] = (22));

} else {
var statearr_18328_18369 = state_18324__$1;
(statearr_18328_18369[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (27))){
var inst_18298 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_18299 = figwheel.client.heads_up.display_warning.call(null,inst_18298);
var state_18324__$1 = state_18324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18324__$1,(30),inst_18299);
} else {
if((state_val_18325 === (1))){
var inst_18248 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_18324__$1 = state_18324;
if(cljs.core.truth_(inst_18248)){
var statearr_18329_18370 = state_18324__$1;
(statearr_18329_18370[(1)] = (2));

} else {
var statearr_18330_18371 = state_18324__$1;
(statearr_18330_18371[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (24))){
var inst_18314 = (state_18324[(2)]);
var state_18324__$1 = state_18324;
var statearr_18331_18372 = state_18324__$1;
(statearr_18331_18372[(2)] = inst_18314);

(statearr_18331_18372[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (4))){
var inst_18322 = (state_18324[(2)]);
var state_18324__$1 = state_18324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18324__$1,inst_18322);
} else {
if((state_val_18325 === (15))){
var inst_18275 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_18276 = figwheel.client.format_messages.call(null,inst_18275);
var inst_18277 = figwheel.client.heads_up.display_error.call(null,inst_18276);
var state_18324__$1 = state_18324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18324__$1,(18),inst_18277);
} else {
if((state_val_18325 === (21))){
var inst_18316 = (state_18324[(2)]);
var state_18324__$1 = state_18324;
var statearr_18332_18373 = state_18324__$1;
(statearr_18332_18373[(2)] = inst_18316);

(statearr_18332_18373[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (31))){
var inst_18305 = figwheel.client.heads_up.flash_loaded.call(null);
var state_18324__$1 = state_18324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18324__$1,(34),inst_18305);
} else {
if((state_val_18325 === (32))){
var state_18324__$1 = state_18324;
var statearr_18333_18374 = state_18324__$1;
(statearr_18333_18374[(2)] = null);

(statearr_18333_18374[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (33))){
var inst_18310 = (state_18324[(2)]);
var state_18324__$1 = state_18324;
var statearr_18334_18375 = state_18324__$1;
(statearr_18334_18375[(2)] = inst_18310);

(statearr_18334_18375[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (13))){
var inst_18266 = (state_18324[(2)]);
var inst_18267 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_18268 = figwheel.client.format_messages.call(null,inst_18267);
var inst_18269 = figwheel.client.heads_up.display_error.call(null,inst_18268);
var state_18324__$1 = (function (){var statearr_18335 = state_18324;
(statearr_18335[(7)] = inst_18266);

return statearr_18335;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18324__$1,(14),inst_18269);
} else {
if((state_val_18325 === (22))){
var inst_18288 = figwheel.client.heads_up.clear.call(null);
var state_18324__$1 = state_18324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18324__$1,(25),inst_18288);
} else {
if((state_val_18325 === (29))){
var inst_18312 = (state_18324[(2)]);
var state_18324__$1 = state_18324;
var statearr_18336_18376 = state_18324__$1;
(statearr_18336_18376[(2)] = inst_18312);

(statearr_18336_18376[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (6))){
var inst_18256 = figwheel.client.heads_up.clear.call(null);
var state_18324__$1 = state_18324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18324__$1,(9),inst_18256);
} else {
if((state_val_18325 === (28))){
var inst_18303 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_18324__$1 = state_18324;
if(inst_18303){
var statearr_18337_18377 = state_18324__$1;
(statearr_18337_18377[(1)] = (31));

} else {
var statearr_18338_18378 = state_18324__$1;
(statearr_18338_18378[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (25))){
var inst_18290 = (state_18324[(2)]);
var inst_18291 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_18292 = figwheel.client.heads_up.display_warning.call(null,inst_18291);
var state_18324__$1 = (function (){var statearr_18339 = state_18324;
(statearr_18339[(8)] = inst_18290);

return statearr_18339;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18324__$1,(26),inst_18292);
} else {
if((state_val_18325 === (34))){
var inst_18307 = (state_18324[(2)]);
var state_18324__$1 = state_18324;
var statearr_18340_18379 = state_18324__$1;
(statearr_18340_18379[(2)] = inst_18307);

(statearr_18340_18379[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (17))){
var inst_18318 = (state_18324[(2)]);
var state_18324__$1 = state_18324;
var statearr_18341_18380 = state_18324__$1;
(statearr_18341_18380[(2)] = inst_18318);

(statearr_18341_18380[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (3))){
var inst_18262 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_18324__$1 = state_18324;
if(inst_18262){
var statearr_18342_18381 = state_18324__$1;
(statearr_18342_18381[(1)] = (10));

} else {
var statearr_18343_18382 = state_18324__$1;
(statearr_18343_18382[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (12))){
var inst_18320 = (state_18324[(2)]);
var state_18324__$1 = state_18324;
var statearr_18344_18383 = state_18324__$1;
(statearr_18344_18383[(2)] = inst_18320);

(statearr_18344_18383[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (2))){
var inst_18250 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_18324__$1 = state_18324;
if(cljs.core.truth_(inst_18250)){
var statearr_18345_18384 = state_18324__$1;
(statearr_18345_18384[(1)] = (5));

} else {
var statearr_18346_18385 = state_18324__$1;
(statearr_18346_18385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (23))){
var inst_18296 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_18324__$1 = state_18324;
if(inst_18296){
var statearr_18347_18386 = state_18324__$1;
(statearr_18347_18386[(1)] = (27));

} else {
var statearr_18348_18387 = state_18324__$1;
(statearr_18348_18387[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (19))){
var inst_18283 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_18284 = figwheel.client.heads_up.append_message.call(null,inst_18283);
var state_18324__$1 = state_18324;
var statearr_18349_18388 = state_18324__$1;
(statearr_18349_18388[(2)] = inst_18284);

(statearr_18349_18388[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (11))){
var inst_18273 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_18324__$1 = state_18324;
if(inst_18273){
var statearr_18350_18389 = state_18324__$1;
(statearr_18350_18389[(1)] = (15));

} else {
var statearr_18351_18390 = state_18324__$1;
(statearr_18351_18390[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (9))){
var inst_18258 = (state_18324[(2)]);
var state_18324__$1 = state_18324;
var statearr_18352_18391 = state_18324__$1;
(statearr_18352_18391[(2)] = inst_18258);

(statearr_18352_18391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (5))){
var inst_18252 = figwheel.client.heads_up.flash_loaded.call(null);
var state_18324__$1 = state_18324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18324__$1,(8),inst_18252);
} else {
if((state_val_18325 === (14))){
var inst_18271 = (state_18324[(2)]);
var state_18324__$1 = state_18324;
var statearr_18353_18392 = state_18324__$1;
(statearr_18353_18392[(2)] = inst_18271);

(statearr_18353_18392[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (26))){
var inst_18294 = (state_18324[(2)]);
var state_18324__$1 = state_18324;
var statearr_18354_18393 = state_18324__$1;
(statearr_18354_18393[(2)] = inst_18294);

(statearr_18354_18393[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (16))){
var inst_18281 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_18324__$1 = state_18324;
if(inst_18281){
var statearr_18355_18394 = state_18324__$1;
(statearr_18355_18394[(1)] = (19));

} else {
var statearr_18356_18395 = state_18324__$1;
(statearr_18356_18395[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (30))){
var inst_18301 = (state_18324[(2)]);
var state_18324__$1 = state_18324;
var statearr_18357_18396 = state_18324__$1;
(statearr_18357_18396[(2)] = inst_18301);

(statearr_18357_18396[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (10))){
var inst_18264 = figwheel.client.heads_up.clear.call(null);
var state_18324__$1 = state_18324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18324__$1,(13),inst_18264);
} else {
if((state_val_18325 === (18))){
var inst_18279 = (state_18324[(2)]);
var state_18324__$1 = state_18324;
var statearr_18358_18397 = state_18324__$1;
(statearr_18358_18397[(2)] = inst_18279);

(statearr_18358_18397[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18325 === (8))){
var inst_18254 = (state_18324[(2)]);
var state_18324__$1 = state_18324;
var statearr_18359_18398 = state_18324__$1;
(statearr_18359_18398[(2)] = inst_18254);

(statearr_18359_18398[(1)] = (7));


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
});})(c__6351__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__6295__auto__,c__6351__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6296__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6296__auto____0 = (function (){
var statearr_18363 = [null,null,null,null,null,null,null,null,null];
(statearr_18363[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6296__auto__);

(statearr_18363[(1)] = (1));

return statearr_18363;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6296__auto____1 = (function (state_18324){
while(true){
var ret_value__6297__auto__ = (function (){try{while(true){
var result__6298__auto__ = switch__6295__auto__.call(null,state_18324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6298__auto__;
}
break;
}
}catch (e18364){if((e18364 instanceof Object)){
var ex__6299__auto__ = e18364;
var statearr_18365_18399 = state_18324;
(statearr_18365_18399[(5)] = ex__6299__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18400 = state_18324;
state_18324 = G__18400;
continue;
} else {
return ret_value__6297__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6296__auto__ = function(state_18324){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6296__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6296__auto____1.call(this,state_18324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6296__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6296__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6296__auto__;
})()
;})(switch__6295__auto__,c__6351__auto__,msg_hist,msg_names,msg))
})();
var state__6353__auto__ = (function (){var statearr_18366 = f__6352__auto__.call(null);
(statearr_18366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6351__auto__);

return statearr_18366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6353__auto__);
});})(c__6351__auto__,msg_hist,msg_names,msg))
);

return c__6351__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__6351__auto___18463 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6351__auto___18463,ch){
return (function (){
var f__6352__auto__ = (function (){var switch__6295__auto__ = ((function (c__6351__auto___18463,ch){
return (function (state_18446){
var state_val_18447 = (state_18446[(1)]);
if((state_val_18447 === (8))){
var inst_18438 = (state_18446[(2)]);
var state_18446__$1 = (function (){var statearr_18448 = state_18446;
(statearr_18448[(7)] = inst_18438);

return statearr_18448;
})();
var statearr_18449_18464 = state_18446__$1;
(statearr_18449_18464[(2)] = null);

(statearr_18449_18464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18447 === (7))){
var inst_18442 = (state_18446[(2)]);
var state_18446__$1 = state_18446;
var statearr_18450_18465 = state_18446__$1;
(statearr_18450_18465[(2)] = inst_18442);

(statearr_18450_18465[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18447 === (6))){
var state_18446__$1 = state_18446;
var statearr_18451_18466 = state_18446__$1;
(statearr_18451_18466[(2)] = null);

(statearr_18451_18466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18447 === (5))){
var inst_18434 = (state_18446[(8)]);
var inst_18436 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_18434);
var state_18446__$1 = state_18446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18446__$1,(8),inst_18436);
} else {
if((state_val_18447 === (4))){
var inst_18434 = (state_18446[(8)]);
var inst_18434__$1 = (state_18446[(2)]);
var state_18446__$1 = (function (){var statearr_18452 = state_18446;
(statearr_18452[(8)] = inst_18434__$1);

return statearr_18452;
})();
if(cljs.core.truth_(inst_18434__$1)){
var statearr_18453_18467 = state_18446__$1;
(statearr_18453_18467[(1)] = (5));

} else {
var statearr_18454_18468 = state_18446__$1;
(statearr_18454_18468[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18447 === (3))){
var inst_18444 = (state_18446[(2)]);
var state_18446__$1 = state_18446;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18446__$1,inst_18444);
} else {
if((state_val_18447 === (2))){
var state_18446__$1 = state_18446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18446__$1,(4),ch);
} else {
if((state_val_18447 === (1))){
var state_18446__$1 = state_18446;
var statearr_18455_18469 = state_18446__$1;
(statearr_18455_18469[(2)] = null);

(statearr_18455_18469[(1)] = (2));


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
});})(c__6351__auto___18463,ch))
;
return ((function (switch__6295__auto__,c__6351__auto___18463,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__6296__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__6296__auto____0 = (function (){
var statearr_18459 = [null,null,null,null,null,null,null,null,null];
(statearr_18459[(0)] = figwheel$client$heads_up_plugin_$_state_machine__6296__auto__);

(statearr_18459[(1)] = (1));

return statearr_18459;
});
var figwheel$client$heads_up_plugin_$_state_machine__6296__auto____1 = (function (state_18446){
while(true){
var ret_value__6297__auto__ = (function (){try{while(true){
var result__6298__auto__ = switch__6295__auto__.call(null,state_18446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6298__auto__;
}
break;
}
}catch (e18460){if((e18460 instanceof Object)){
var ex__6299__auto__ = e18460;
var statearr_18461_18470 = state_18446;
(statearr_18461_18470[(5)] = ex__6299__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18471 = state_18446;
state_18446 = G__18471;
continue;
} else {
return ret_value__6297__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__6296__auto__ = function(state_18446){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__6296__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__6296__auto____1.call(this,state_18446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__6296__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__6296__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__6296__auto__;
})()
;})(switch__6295__auto__,c__6351__auto___18463,ch))
})();
var state__6353__auto__ = (function (){var statearr_18462 = f__6352__auto__.call(null);
(statearr_18462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6351__auto___18463);

return statearr_18462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6353__auto__);
});})(c__6351__auto___18463,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__6351__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6351__auto__){
return (function (){
var f__6352__auto__ = (function (){var switch__6295__auto__ = ((function (c__6351__auto__){
return (function (state_18492){
var state_val_18493 = (state_18492[(1)]);
if((state_val_18493 === (2))){
var inst_18489 = (state_18492[(2)]);
var inst_18490 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_18492__$1 = (function (){var statearr_18494 = state_18492;
(statearr_18494[(7)] = inst_18489);

return statearr_18494;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18492__$1,inst_18490);
} else {
if((state_val_18493 === (1))){
var inst_18487 = cljs.core.async.timeout.call(null,(3000));
var state_18492__$1 = state_18492;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18492__$1,(2),inst_18487);
} else {
return null;
}
}
});})(c__6351__auto__))
;
return ((function (switch__6295__auto__,c__6351__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__6296__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__6296__auto____0 = (function (){
var statearr_18498 = [null,null,null,null,null,null,null,null];
(statearr_18498[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__6296__auto__);

(statearr_18498[(1)] = (1));

return statearr_18498;
});
var figwheel$client$enforce_project_plugin_$_state_machine__6296__auto____1 = (function (state_18492){
while(true){
var ret_value__6297__auto__ = (function (){try{while(true){
var result__6298__auto__ = switch__6295__auto__.call(null,state_18492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6298__auto__;
}
break;
}
}catch (e18499){if((e18499 instanceof Object)){
var ex__6299__auto__ = e18499;
var statearr_18500_18502 = state_18492;
(statearr_18500_18502[(5)] = ex__6299__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18503 = state_18492;
state_18492 = G__18503;
continue;
} else {
return ret_value__6297__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__6296__auto__ = function(state_18492){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__6296__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__6296__auto____1.call(this,state_18492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__6296__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__6296__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__6296__auto__;
})()
;})(switch__6295__auto__,c__6351__auto__))
})();
var state__6353__auto__ = (function (){var statearr_18501 = f__6352__auto__.call(null);
(statearr_18501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6351__auto__);

return statearr_18501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6353__auto__);
});})(c__6351__auto__))
);

return c__6351__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function figwheel$client$default_on_jsload(url){
if(cljs.core.truth_((function (){var and__4054__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__4054__auto__)){
return ("CustomEvent" in window);
} else {
return and__4054__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj18507 = {"detail":url};
return obj18507;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__18508){
var map__18514 = p__18508;
var map__18514__$1 = ((cljs.core.seq_QMARK_.call(null,map__18514))?cljs.core.apply.call(null,cljs.core.hash_map,map__18514):map__18514);
var ed = map__18514__$1;
var exception_data = cljs.core.get.call(null,map__18514__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__18514__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__18515_18519 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__18516_18520 = null;
var count__18517_18521 = (0);
var i__18518_18522 = (0);
while(true){
if((i__18518_18522 < count__18517_18521)){
var msg_18523 = cljs.core._nth.call(null,chunk__18516_18520,i__18518_18522);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_18523);

var G__18524 = seq__18515_18519;
var G__18525 = chunk__18516_18520;
var G__18526 = count__18517_18521;
var G__18527 = (i__18518_18522 + (1));
seq__18515_18519 = G__18524;
chunk__18516_18520 = G__18525;
count__18517_18521 = G__18526;
i__18518_18522 = G__18527;
continue;
} else {
var temp__4406__auto___18528 = cljs.core.seq.call(null,seq__18515_18519);
if(temp__4406__auto___18528){
var seq__18515_18529__$1 = temp__4406__auto___18528;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18515_18529__$1)){
var c__4851__auto___18530 = cljs.core.chunk_first.call(null,seq__18515_18529__$1);
var G__18531 = cljs.core.chunk_rest.call(null,seq__18515_18529__$1);
var G__18532 = c__4851__auto___18530;
var G__18533 = cljs.core.count.call(null,c__4851__auto___18530);
var G__18534 = (0);
seq__18515_18519 = G__18531;
chunk__18516_18520 = G__18532;
count__18517_18521 = G__18533;
i__18518_18522 = G__18534;
continue;
} else {
var msg_18535 = cljs.core.first.call(null,seq__18515_18529__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_18535);

var G__18536 = cljs.core.next.call(null,seq__18515_18529__$1);
var G__18537 = null;
var G__18538 = (0);
var G__18539 = (0);
seq__18515_18519 = G__18536;
chunk__18516_18520 = G__18537;
count__18517_18521 = G__18538;
i__18518_18522 = G__18539;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__18540){
var map__18542 = p__18540;
var map__18542__$1 = ((cljs.core.seq_QMARK_.call(null,map__18542))?cljs.core.apply.call(null,cljs.core.hash_map,map__18542):map__18542);
var w = map__18542__$1;
var message = cljs.core.get.call(null,map__18542__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,goog.inHtmlDocument_()))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4054__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4054__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4054__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__18549 = cljs.core.seq.call(null,plugins);
var chunk__18550 = null;
var count__18551 = (0);
var i__18552 = (0);
while(true){
if((i__18552 < count__18551)){
var vec__18553 = cljs.core._nth.call(null,chunk__18550,i__18552);
var k = cljs.core.nth.call(null,vec__18553,(0),null);
var plugin = cljs.core.nth.call(null,vec__18553,(1),null);
if(cljs.core.truth_(plugin)){
var pl_18555 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__18549,chunk__18550,count__18551,i__18552,pl_18555,vec__18553,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_18555.call(null,msg_hist);
});})(seq__18549,chunk__18550,count__18551,i__18552,pl_18555,vec__18553,k,plugin))
);
} else {
}

var G__18556 = seq__18549;
var G__18557 = chunk__18550;
var G__18558 = count__18551;
var G__18559 = (i__18552 + (1));
seq__18549 = G__18556;
chunk__18550 = G__18557;
count__18551 = G__18558;
i__18552 = G__18559;
continue;
} else {
var temp__4406__auto__ = cljs.core.seq.call(null,seq__18549);
if(temp__4406__auto__){
var seq__18549__$1 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18549__$1)){
var c__4851__auto__ = cljs.core.chunk_first.call(null,seq__18549__$1);
var G__18560 = cljs.core.chunk_rest.call(null,seq__18549__$1);
var G__18561 = c__4851__auto__;
var G__18562 = cljs.core.count.call(null,c__4851__auto__);
var G__18563 = (0);
seq__18549 = G__18560;
chunk__18550 = G__18561;
count__18551 = G__18562;
i__18552 = G__18563;
continue;
} else {
var vec__18554 = cljs.core.first.call(null,seq__18549__$1);
var k = cljs.core.nth.call(null,vec__18554,(0),null);
var plugin = cljs.core.nth.call(null,vec__18554,(1),null);
if(cljs.core.truth_(plugin)){
var pl_18564 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__18549,chunk__18550,count__18551,i__18552,pl_18564,vec__18554,k,plugin,seq__18549__$1,temp__4406__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_18564.call(null,msg_hist);
});})(seq__18549,chunk__18550,count__18551,i__18552,pl_18564,vec__18554,k,plugin,seq__18549__$1,temp__4406__auto__))
);
} else {
}

var G__18565 = cljs.core.next.call(null,seq__18549__$1);
var G__18566 = null;
var G__18567 = (0);
var G__18568 = (0);
seq__18549 = G__18565;
chunk__18550 = G__18566;
count__18551 = G__18567;
i__18552 = G__18568;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function() {
var figwheel$client$start = null;
var figwheel$client$start__0 = (function (){
return figwheel$client$start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var figwheel$client$start__1 = (function (opts){
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
});
figwheel$client$start = function(opts){
switch(arguments.length){
case 0:
return figwheel$client$start__0.call(this);
case 1:
return figwheel$client$start__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$start.cljs$core$IFn$_invoke$arity$0 = figwheel$client$start__0;
figwheel$client$start.cljs$core$IFn$_invoke$arity$1 = figwheel$client$start__1;
return figwheel$client$start;
})()
;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
/**
 * @param {...*} var_args
 */
figwheel.client.watch_and_reload = (function() { 
var figwheel$client$watch_and_reload__delegate = function (p__18569){
var map__18571 = p__18569;
var map__18571__$1 = ((cljs.core.seq_QMARK_.call(null,map__18571))?cljs.core.apply.call(null,cljs.core.hash_map,map__18571):map__18571);
var opts = map__18571__$1;
return figwheel.client.start.call(null,opts);
};
var figwheel$client$watch_and_reload = function (var_args){
var p__18569 = null;
if (arguments.length > 0) {
var G__18572__i = 0, G__18572__a = new Array(arguments.length -  0);
while (G__18572__i < G__18572__a.length) {G__18572__a[G__18572__i] = arguments[G__18572__i + 0]; ++G__18572__i;}
  p__18569 = new cljs.core.IndexedSeq(G__18572__a,0);
} 
return figwheel$client$watch_and_reload__delegate.call(this,p__18569);};
figwheel$client$watch_and_reload.cljs$lang$maxFixedArity = 0;
figwheel$client$watch_and_reload.cljs$lang$applyTo = (function (arglist__18573){
var p__18569 = cljs.core.seq(arglist__18573);
return figwheel$client$watch_and_reload__delegate(p__18569);
});
figwheel$client$watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = figwheel$client$watch_and_reload__delegate;
return figwheel$client$watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map?rel=1426863544706