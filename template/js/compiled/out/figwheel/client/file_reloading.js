// Compiled by ClojureScript 0.0-3126 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__19009_SHARP_,p2__19010_SHARP_){
var and__4054__auto__ = p1__19009_SHARP_;
if(cljs.core.truth_(and__4054__auto__)){
return p2__19010_SHARP_;
} else {
return and__4054__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4066__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__4066__auto__){
return or__4066__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__19012_SHARP_,p2__19011_SHARP_){
return [cljs.core.str(p2__19011_SHARP_)].join('');
}))),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided_ = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__4066__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__4066__auto__){
return or__4066__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__4066__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__4066__auto__)){
return or__4066__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
figwheel.client.file_reloading.resolve_url = (function (){var method_table__4961__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4962__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4963__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4964__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4965__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4965__auto__,method_table__4961__auto__,prefer_table__4962__auto__,method_cache__4963__auto__,cached_hierarchy__4964__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__19013){
var map__19014 = p__19013;
var map__19014__$1 = ((cljs.core.seq_QMARK_.call(null,map__19014))?cljs.core.apply.call(null,cljs.core.hash_map,map__19014):map__19014);
var file = cljs.core.get.call(null,map__19014__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__19015){
var map__19016 = p__19015;
var map__19016__$1 = ((cljs.core.seq_QMARK_.call(null,map__19016))?cljs.core.apply.call(null,cljs.core.hash_map,map__19016):map__19016);
var namespace = cljs.core.get.call(null,map__19016__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
figwheel.client.file_reloading.reload_base = (function (){var method_table__4961__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4962__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4963__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4964__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4965__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4965__auto__,method_table__4961__auto__,prefer_table__4962__auto__,method_cache__4963__auto__,cached_hierarchy__4964__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e19017){if((e19017 instanceof Error)){
var e = e19017;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e19017;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function() {
var figwheel$client$file_reloading$reload_file_STAR_ = null;
var figwheel$client$file_reloading$reload_file_STAR___1 = (function (request_url){
return figwheel$client$file_reloading$reload_file_STAR_.call(null,request_url,cljs.core.identity);
});
var figwheel$client$file_reloading$reload_file_STAR___2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});
figwheel$client$file_reloading$reload_file_STAR_ = function(request_url,callback){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$reload_file_STAR___1.call(this,request_url);
case 2:
return figwheel$client$file_reloading$reload_file_STAR___2.call(this,request_url,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_file_STAR___1;
figwheel$client$file_reloading$reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = figwheel$client$file_reloading$reload_file_STAR___2;
return figwheel$client$file_reloading$reload_file_STAR_;
})()
;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__19018,callback){
var map__19020 = p__19018;
var map__19020__$1 = ((cljs.core.seq_QMARK_.call(null,map__19020))?cljs.core.apply.call(null,cljs.core.hash_map,map__19020):map__19020);
var file_msg = map__19020__$1;
var request_url = cljs.core.get.call(null,map__19020__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__19020,map__19020__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__19020,map__19020__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__19021){
var map__19023 = p__19021;
var map__19023__$1 = ((cljs.core.seq_QMARK_.call(null,map__19023))?cljs.core.apply.call(null,cljs.core.hash_map,map__19023):map__19023);
var file_msg = map__19023__$1;
var meta_data = cljs.core.get.call(null,map__19023__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__19023__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__4066__auto__ = meta_data;
if(cljs.core.truth_(or__4066__auto__)){
return or__4066__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__4054__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__4054__auto__){
var or__4066__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__4066__auto__)){
return or__4066__auto__;
} else {
var or__4066__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__4066__auto____$1)){
return or__4066__auto____$1;
} else {
var and__4054__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__4054__auto____$1){
var or__4066__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__4066__auto____$2){
return or__4066__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__4054__auto____$1;
}
}
}
} else {
return and__4054__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__19024,callback){
var map__19026 = p__19024;
var map__19026__$1 = ((cljs.core.seq_QMARK_.call(null,map__19026))?cljs.core.apply.call(null,cljs.core.hash_map,map__19026):map__19026);
var file_msg = map__19026__$1;
var namespace = cljs.core.get.call(null,map__19026__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__19026__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__6351__auto___19113 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6351__auto___19113,out){
return (function (){
var f__6352__auto__ = (function (){var switch__6295__auto__ = ((function (c__6351__auto___19113,out){
return (function (state_19095){
var state_val_19096 = (state_19095[(1)]);
if((state_val_19096 === (7))){
var inst_19079 = (state_19095[(7)]);
var inst_19085 = (state_19095[(2)]);
var inst_19086 = cljs.core.async.put_BANG_.call(null,out,inst_19085);
var inst_19075 = inst_19079;
var state_19095__$1 = (function (){var statearr_19097 = state_19095;
(statearr_19097[(8)] = inst_19075);

(statearr_19097[(9)] = inst_19086);

return statearr_19097;
})();
var statearr_19098_19114 = state_19095__$1;
(statearr_19098_19114[(2)] = null);

(statearr_19098_19114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (6))){
var inst_19091 = (state_19095[(2)]);
var state_19095__$1 = state_19095;
var statearr_19099_19115 = state_19095__$1;
(statearr_19099_19115[(2)] = inst_19091);

(statearr_19099_19115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (5))){
var inst_19089 = cljs.core.async.close_BANG_.call(null,out);
var state_19095__$1 = state_19095;
var statearr_19100_19116 = state_19095__$1;
(statearr_19100_19116[(2)] = inst_19089);

(statearr_19100_19116[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (4))){
var inst_19078 = (state_19095[(10)]);
var inst_19083 = figwheel.client.file_reloading.reload_js_file.call(null,inst_19078);
var state_19095__$1 = state_19095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19095__$1,(7),inst_19083);
} else {
if((state_val_19096 === (3))){
var inst_19093 = (state_19095[(2)]);
var state_19095__$1 = state_19095;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19095__$1,inst_19093);
} else {
if((state_val_19096 === (2))){
var inst_19075 = (state_19095[(8)]);
var inst_19078 = (state_19095[(10)]);
var inst_19078__$1 = cljs.core.nth.call(null,inst_19075,(0),null);
var inst_19079 = cljs.core.nthnext.call(null,inst_19075,(1));
var inst_19080 = (inst_19078__$1 == null);
var inst_19081 = cljs.core.not.call(null,inst_19080);
var state_19095__$1 = (function (){var statearr_19101 = state_19095;
(statearr_19101[(7)] = inst_19079);

(statearr_19101[(10)] = inst_19078__$1);

return statearr_19101;
})();
if(inst_19081){
var statearr_19102_19117 = state_19095__$1;
(statearr_19102_19117[(1)] = (4));

} else {
var statearr_19103_19118 = state_19095__$1;
(statearr_19103_19118[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (1))){
var inst_19073 = cljs.core.nth.call(null,files,(0),null);
var inst_19074 = cljs.core.nthnext.call(null,files,(1));
var inst_19075 = files;
var state_19095__$1 = (function (){var statearr_19104 = state_19095;
(statearr_19104[(8)] = inst_19075);

(statearr_19104[(11)] = inst_19073);

(statearr_19104[(12)] = inst_19074);

return statearr_19104;
})();
var statearr_19105_19119 = state_19095__$1;
(statearr_19105_19119[(2)] = null);

(statearr_19105_19119[(1)] = (2));


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
});})(c__6351__auto___19113,out))
;
return ((function (switch__6295__auto__,c__6351__auto___19113,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__6296__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__6296__auto____0 = (function (){
var statearr_19109 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19109[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__6296__auto__);

(statearr_19109[(1)] = (1));

return statearr_19109;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__6296__auto____1 = (function (state_19095){
while(true){
var ret_value__6297__auto__ = (function (){try{while(true){
var result__6298__auto__ = switch__6295__auto__.call(null,state_19095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6298__auto__;
}
break;
}
}catch (e19110){if((e19110 instanceof Object)){
var ex__6299__auto__ = e19110;
var statearr_19111_19120 = state_19095;
(statearr_19111_19120[(5)] = ex__6299__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19121 = state_19095;
state_19095 = G__19121;
continue;
} else {
return ret_value__6297__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__6296__auto__ = function(state_19095){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__6296__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__6296__auto____1.call(this,state_19095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__6296__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__6296__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__6296__auto__;
})()
;})(switch__6295__auto__,c__6351__auto___19113,out))
})();
var state__6353__auto__ = (function (){var statearr_19112 = f__6352__auto__.call(null);
(statearr_19112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6351__auto___19113);

return statearr_19112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6353__auto__);
});})(c__6351__auto___19113,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__19122,p__19123){
var map__19126 = p__19122;
var map__19126__$1 = ((cljs.core.seq_QMARK_.call(null,map__19126))?cljs.core.apply.call(null,cljs.core.hash_map,map__19126):map__19126);
var opts = map__19126__$1;
var url_rewriter = cljs.core.get.call(null,map__19126__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__19127 = p__19123;
var map__19127__$1 = ((cljs.core.seq_QMARK_.call(null,map__19127))?cljs.core.apply.call(null,cljs.core.hash_map,map__19127):map__19127);
var file_msg = map__19127__$1;
var file = cljs.core.get.call(null,map__19127__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__19128){
var map__19131 = p__19128;
var map__19131__$1 = ((cljs.core.seq_QMARK_.call(null,map__19131))?cljs.core.apply.call(null,cljs.core.hash_map,map__19131):map__19131);
var file = cljs.core.get.call(null,map__19131__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__19131__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__4054__auto__ = eval_body__$1;
if(cljs.core.truth_(and__4054__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__4054__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e19132){var e = e19132;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__19137,p__19138){
var map__19339 = p__19137;
var map__19339__$1 = ((cljs.core.seq_QMARK_.call(null,map__19339))?cljs.core.apply.call(null,cljs.core.hash_map,map__19339):map__19339);
var opts = map__19339__$1;
var load_unchanged_files = cljs.core.get.call(null,map__19339__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__19339__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__19339__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__19340 = p__19138;
var map__19340__$1 = ((cljs.core.seq_QMARK_.call(null,map__19340))?cljs.core.apply.call(null,cljs.core.hash_map,map__19340):map__19340);
var msg = map__19340__$1;
var files = cljs.core.get.call(null,map__19340__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__6351__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6351__auto__,map__19339,map__19339__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__19340,map__19340__$1,msg,files){
return (function (){
var f__6352__auto__ = (function (){var switch__6295__auto__ = ((function (c__6351__auto__,map__19339,map__19339__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__19340,map__19340__$1,msg,files){
return (function (state_19464){
var state_val_19465 = (state_19464[(1)]);
if((state_val_19465 === (7))){
var inst_19353 = (state_19464[(7)]);
var inst_19354 = (state_19464[(8)]);
var inst_19352 = (state_19464[(9)]);
var inst_19351 = (state_19464[(10)]);
var inst_19359 = cljs.core._nth.call(null,inst_19352,inst_19354);
var inst_19360 = figwheel.client.file_reloading.eval_body.call(null,inst_19359);
var inst_19361 = (inst_19354 + (1));
var tmp19466 = inst_19353;
var tmp19467 = inst_19352;
var tmp19468 = inst_19351;
var inst_19351__$1 = tmp19468;
var inst_19352__$1 = tmp19467;
var inst_19353__$1 = tmp19466;
var inst_19354__$1 = inst_19361;
var state_19464__$1 = (function (){var statearr_19469 = state_19464;
(statearr_19469[(7)] = inst_19353__$1);

(statearr_19469[(8)] = inst_19354__$1);

(statearr_19469[(9)] = inst_19352__$1);

(statearr_19469[(11)] = inst_19360);

(statearr_19469[(10)] = inst_19351__$1);

return statearr_19469;
})();
var statearr_19470_19539 = state_19464__$1;
(statearr_19470_19539[(2)] = null);

(statearr_19470_19539[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19465 === (20))){
var inst_19400 = (state_19464[(12)]);
var inst_19403 = (state_19464[(13)]);
var inst_19397 = (state_19464[(14)]);
var inst_19401 = (state_19464[(15)]);
var inst_19396 = (state_19464[(16)]);
var inst_19406 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_19408 = (function (){var files_not_loaded = inst_19403;
var res = inst_19401;
var res_SINGLEQUOTE_ = inst_19400;
var files_SINGLEQUOTE_ = inst_19397;
var all_files = inst_19396;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_19400,inst_19403,inst_19397,inst_19401,inst_19396,inst_19406,state_val_19465,c__6351__auto__,map__19339,map__19339__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__19340,map__19340__$1,msg,files){
return (function (p__19407){
var map__19471 = p__19407;
var map__19471__$1 = ((cljs.core.seq_QMARK_.call(null,map__19471))?cljs.core.apply.call(null,cljs.core.hash_map,map__19471):map__19471);
var file = cljs.core.get.call(null,map__19471__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__19471__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_19400,inst_19403,inst_19397,inst_19401,inst_19396,inst_19406,state_val_19465,c__6351__auto__,map__19339,map__19339__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__19340,map__19340__$1,msg,files))
})();
var inst_19409 = cljs.core.map.call(null,inst_19408,inst_19401);
var inst_19410 = cljs.core.pr_str.call(null,inst_19409);
var inst_19411 = figwheel.client.utils.log.call(null,inst_19410);
var inst_19412 = (function (){var files_not_loaded = inst_19403;
var res = inst_19401;
var res_SINGLEQUOTE_ = inst_19400;
var files_SINGLEQUOTE_ = inst_19397;
var all_files = inst_19396;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_19400,inst_19403,inst_19397,inst_19401,inst_19396,inst_19406,inst_19408,inst_19409,inst_19410,inst_19411,state_val_19465,c__6351__auto__,map__19339,map__19339__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__19340,map__19340__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_19400,inst_19403,inst_19397,inst_19401,inst_19396,inst_19406,inst_19408,inst_19409,inst_19410,inst_19411,state_val_19465,c__6351__auto__,map__19339,map__19339__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__19340,map__19340__$1,msg,files))
})();
var inst_19413 = setTimeout(inst_19412,(10));
var state_19464__$1 = (function (){var statearr_19472 = state_19464;
(statearr_19472[(17)] = inst_19406);

(statearr_19472[(18)] = inst_19411);

return statearr_19472;
})();
var statearr_19473_19540 = state_19464__$1;
(statearr_19473_19540[(2)] = inst_19413);

(statearr_19473_19540[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19465 === (27))){
var inst_19423 = (state_19464[(19)]);
var state_19464__$1 = state_19464;
var statearr_19474_19541 = state_19464__$1;
(statearr_19474_19541[(2)] = inst_19423);

(statearr_19474_19541[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19465 === (1))){
var inst_19343 = (state_19464[(20)]);
var inst_19341 = before_jsload.call(null,files);
var inst_19342 = (function (){return ((function (inst_19343,inst_19341,state_val_19465,c__6351__auto__,map__19339,map__19339__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__19340,map__19340__$1,msg,files){
return (function (p1__19133_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__19133_SHARP_);
});
;})(inst_19343,inst_19341,state_val_19465,c__6351__auto__,map__19339,map__19339__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__19340,map__19340__$1,msg,files))
})();
var inst_19343__$1 = cljs.core.filter.call(null,inst_19342,files);
var inst_19344 = cljs.core.not_empty.call(null,inst_19343__$1);
var state_19464__$1 = (function (){var statearr_19475 = state_19464;
(statearr_19475[(21)] = inst_19341);

(statearr_19475[(20)] = inst_19343__$1);

return statearr_19475;
})();
if(cljs.core.truth_(inst_19344)){
var statearr_19476_19542 = state_19464__$1;
(statearr_19476_19542[(1)] = (2));

} else {
var statearr_19477_19543 = state_19464__$1;
(statearr_19477_19543[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19465 === (24))){
var state_19464__$1 = state_19464;
var statearr_19478_19544 = state_19464__$1;
(statearr_19478_19544[(2)] = null);

(statearr_19478_19544[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19465 === (4))){
var inst_19388 = (state_19464[(2)]);
var inst_19389 = (function (){return ((function (inst_19388,state_val_19465,c__6351__auto__,map__19339,map__19339__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__19340,map__19340__$1,msg,files){
return (function (p1__19134_SHARP_){
var and__4054__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__19134_SHARP_);
if(cljs.core.truth_(and__4054__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__19134_SHARP_));
} else {
return and__4054__auto__;
}
});
;})(inst_19388,state_val_19465,c__6351__auto__,map__19339,map__19339__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__19340,map__19340__$1,msg,files))
})();
var inst_19390 = cljs.core.filter.call(null,inst_19389,files);
var state_19464__$1 = (function (){var statearr_19479 = state_19464;
(statearr_19479[(22)] = inst_19388);

(statearr_19479[(23)] = inst_19390);

return statearr_19479;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_19480_19545 = state_19464__$1;
(statearr_19480_19545[(1)] = (16));

} else {
var statearr_19481_19546 = state_19464__$1;
(statearr_19481_19546[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19465 === (15))){
var inst_19378 = (state_19464[(2)]);
var state_19464__$1 = state_19464;
var statearr_19482_19547 = state_19464__$1;
(statearr_19482_19547[(2)] = inst_19378);

(statearr_19482_19547[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19465 === (21))){
var state_19464__$1 = state_19464;
var statearr_19483_19548 = state_19464__$1;
(statearr_19483_19548[(2)] = null);

(statearr_19483_19548[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19465 === (31))){
var inst_19431 = (state_19464[(24)]);
var inst_19441 = (state_19464[(2)]);
var inst_19442 = cljs.core.not_empty.call(null,inst_19431);
var state_19464__$1 = (function (){var statearr_19484 = state_19464;
(statearr_19484[(25)] = inst_19441);

return statearr_19484;
})();
if(cljs.core.truth_(inst_19442)){
var statearr_19485_19549 = state_19464__$1;
(statearr_19485_19549[(1)] = (32));

} else {
var statearr_19486_19550 = state_19464__$1;
(statearr_19486_19550[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19465 === (32))){
var inst_19431 = (state_19464[(24)]);
var inst_19444 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_19431);
var inst_19445 = cljs.core.pr_str.call(null,inst_19444);
var inst_19446 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_19445)].join('');
var inst_19447 = figwheel.client.utils.log.call(null,inst_19446);
var state_19464__$1 = state_19464;
var statearr_19487_19551 = state_19464__$1;
(statearr_19487_19551[(2)] = inst_19447);

(statearr_19487_19551[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19465 === (33))){
var state_19464__$1 = state_19464;
var statearr_19488_19552 = state_19464__$1;
(statearr_19488_19552[(2)] = null);

(statearr_19488_19552[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19465 === (13))){
var inst_19364 = (state_19464[(26)]);
var inst_19368 = cljs.core.chunk_first.call(null,inst_19364);
var inst_19369 = cljs.core.chunk_rest.call(null,inst_19364);
var inst_19370 = cljs.core.count.call(null,inst_19368);
var inst_19351 = inst_19369;
var inst_19352 = inst_19368;
var inst_19353 = inst_19370;
var inst_19354 = (0);
var state_19464__$1 = (function (){var statearr_19489 = state_19464;
(statearr_19489[(7)] = inst_19353);

(statearr_19489[(8)] = inst_19354);

(statearr_19489[(9)] = inst_19352);

(statearr_19489[(10)] = inst_19351);

return statearr_19489;
})();
var statearr_19490_19553 = state_19464__$1;
(statearr_19490_19553[(2)] = null);

(statearr_19490_19553[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19465 === (22))){
var inst_19403 = (state_19464[(13)]);
var inst_19416 = (state_19464[(2)]);
var inst_19417 = cljs.core.not_empty.call(null,inst_19403);
var state_19464__$1 = (function (){var statearr_19491 = state_19464;
(statearr_19491[(27)] = inst_19416);

return statearr_19491;
})();
if(cljs.core.truth_(inst_19417)){
var statearr_19492_19554 = state_19464__$1;
(statearr_19492_19554[(1)] = (23));

} else {
var statearr_19493_19555 = state_19464__$1;
(statearr_19493_19555[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19465 === (36))){
var state_19464__$1 = state_19464;
var statearr_19494_19556 = state_19464__$1;
(statearr_19494_19556[(2)] = null);

(statearr_19494_19556[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19465 === (29))){
var inst_19432 = (state_19464[(28)]);
var inst_19435 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_19432);
var inst_19436 = cljs.core.pr_str.call(null,inst_19435);
var inst_19437 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_19436)].join('');
var inst_19438 = figwheel.client.utils.log.call(null,inst_19437);
var state_19464__$1 = state_19464;
var statearr_19495_19557 = state_19464__$1;
(statearr_19495_19557[(2)] = inst_19438);

(statearr_19495_19557[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19465 === (6))){
var inst_19385 = (state_19464[(2)]);
var state_19464__$1 = state_19464;
var statearr_19496_19558 = state_19464__$1;
(statearr_19496_19558[(2)] = inst_19385);

(statearr_19496_19558[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19465 === (28))){
var inst_19432 = (state_19464[(28)]);
var inst_19429 = (state_19464[(2)]);
var inst_19430 = cljs.core.get.call(null,inst_19429,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_19431 = cljs.core.get.call(null,inst_19429,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_19432__$1 = cljs.core.get.call(null,inst_19429,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_19433 = cljs.core.not_empty.call(null,inst_19432__$1);
var state_19464__$1 = (function (){var statearr_19497 = state_19464;
(statearr_19497[(29)] = inst_19430);

(statearr_19497[(28)] = inst_19432__$1);

(statearr_19497[(24)] = inst_19431);

return statearr_19497;
})();
if(cljs.core.truth_(inst_19433)){
var statearr_19498_19559 = state_19464__$1;
(statearr_19498_19559[(1)] = (29));

} else {
var statearr_19499_19560 = state_19464__$1;
(statearr_19499_19560[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19465 === (25))){
var inst_19462 = (state_19464[(2)]);
var state_19464__$1 = state_19464;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19464__$1,inst_19462);
} else {
if((state_val_19465 === (34))){
var inst_19430 = (state_19464[(29)]);
var inst_19450 = (state_19464[(2)]);
var inst_19451 = cljs.core.not_empty.call(null,inst_19430);
var state_19464__$1 = (function (){var statearr_19500 = state_19464;
(statearr_19500[(30)] = inst_19450);

return statearr_19500;
})();
if(cljs.core.truth_(inst_19451)){
var statearr_19501_19561 = state_19464__$1;
(statearr_19501_19561[(1)] = (35));

} else {
var statearr_19502_19562 = state_19464__$1;
(statearr_19502_19562[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19465 === (17))){
var inst_19390 = (state_19464[(23)]);
var state_19464__$1 = state_19464;
var statearr_19503_19563 = state_19464__$1;
(statearr_19503_19563[(2)] = inst_19390);

(statearr_19503_19563[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19465 === (3))){
var state_19464__$1 = state_19464;
var statearr_19504_19564 = state_19464__$1;
(statearr_19504_19564[(2)] = null);

(statearr_19504_19564[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19465 === (12))){
var inst_19381 = (state_19464[(2)]);
var state_19464__$1 = state_19464;
var statearr_19505_19565 = state_19464__$1;
(statearr_19505_19565[(2)] = inst_19381);

(statearr_19505_19565[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19465 === (2))){
var inst_19343 = (state_19464[(20)]);
var inst_19350 = cljs.core.seq.call(null,inst_19343);
var inst_19351 = inst_19350;
var inst_19352 = null;
var inst_19353 = (0);
var inst_19354 = (0);
var state_19464__$1 = (function (){var statearr_19506 = state_19464;
(statearr_19506[(7)] = inst_19353);

(statearr_19506[(8)] = inst_19354);

(statearr_19506[(9)] = inst_19352);

(statearr_19506[(10)] = inst_19351);

return statearr_19506;
})();
var statearr_19507_19566 = state_19464__$1;
(statearr_19507_19566[(2)] = null);

(statearr_19507_19566[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19465 === (23))){
var inst_19400 = (state_19464[(12)]);
var inst_19403 = (state_19464[(13)]);
var inst_19397 = (state_19464[(14)]);
var inst_19401 = (state_19464[(15)]);
var inst_19423 = (state_19464[(19)]);
var inst_19396 = (state_19464[(16)]);
var inst_19419 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_19422 = (function (){var files_not_loaded = inst_19403;
var res = inst_19401;
var res_SINGLEQUOTE_ = inst_19400;
var files_SINGLEQUOTE_ = inst_19397;
var all_files = inst_19396;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_19400,inst_19403,inst_19397,inst_19401,inst_19423,inst_19396,inst_19419,state_val_19465,c__6351__auto__,map__19339,map__19339__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__19340,map__19340__$1,msg,files){
return (function (p__19421){
var map__19508 = p__19421;
var map__19508__$1 = ((cljs.core.seq_QMARK_.call(null,map__19508))?cljs.core.apply.call(null,cljs.core.hash_map,map__19508):map__19508);
var meta_data = cljs.core.get.call(null,map__19508__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_19400,inst_19403,inst_19397,inst_19401,inst_19423,inst_19396,inst_19419,state_val_19465,c__6351__auto__,map__19339,map__19339__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__19340,map__19340__$1,msg,files))
})();
var inst_19423__$1 = cljs.core.group_by.call(null,inst_19422,inst_19403);
var inst_19424 = cljs.core.seq_QMARK_.call(null,inst_19423__$1);
var state_19464__$1 = (function (){var statearr_19509 = state_19464;
(statearr_19509[(31)] = inst_19419);

(statearr_19509[(19)] = inst_19423__$1);

return statearr_19509;
})();
if(inst_19424){
var statearr_19510_19567 = state_19464__$1;
(statearr_19510_19567[(1)] = (26));

} else {
var statearr_19511_19568 = state_19464__$1;
(statearr_19511_19568[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19465 === (35))){
var inst_19430 = (state_19464[(29)]);
var inst_19453 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_19430);
var inst_19454 = cljs.core.pr_str.call(null,inst_19453);
var inst_19455 = [cljs.core.str("not required: "),cljs.core.str(inst_19454)].join('');
var inst_19456 = figwheel.client.utils.log.call(null,inst_19455);
var state_19464__$1 = state_19464;
var statearr_19512_19569 = state_19464__$1;
(statearr_19512_19569[(2)] = inst_19456);

(statearr_19512_19569[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19465 === (19))){
var inst_19400 = (state_19464[(12)]);
var inst_19397 = (state_19464[(14)]);
var inst_19401 = (state_19464[(15)]);
var inst_19396 = (state_19464[(16)]);
var inst_19400__$1 = (state_19464[(2)]);
var inst_19401__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_19400__$1);
var inst_19402 = (function (){var res = inst_19401__$1;
var res_SINGLEQUOTE_ = inst_19400__$1;
var files_SINGLEQUOTE_ = inst_19397;
var all_files = inst_19396;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_19400,inst_19397,inst_19401,inst_19396,inst_19400__$1,inst_19401__$1,state_val_19465,c__6351__auto__,map__19339,map__19339__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__19340,map__19340__$1,msg,files){
return (function (p1__19136_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__19136_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_19400,inst_19397,inst_19401,inst_19396,inst_19400__$1,inst_19401__$1,state_val_19465,c__6351__auto__,map__19339,map__19339__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__19340,map__19340__$1,msg,files))
})();
var inst_19403 = cljs.core.filter.call(null,inst_19402,inst_19400__$1);
var inst_19404 = cljs.core.not_empty.call(null,inst_19401__$1);
var state_19464__$1 = (function (){var statearr_19513 = state_19464;
(statearr_19513[(12)] = inst_19400__$1);

(statearr_19513[(13)] = inst_19403);

(statearr_19513[(15)] = inst_19401__$1);

return statearr_19513;
})();
if(cljs.core.truth_(inst_19404)){
var statearr_19514_19570 = state_19464__$1;
(statearr_19514_19570[(1)] = (20));

} else {
var statearr_19515_19571 = state_19464__$1;
(statearr_19515_19571[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19465 === (11))){
var state_19464__$1 = state_19464;
var statearr_19516_19572 = state_19464__$1;
(statearr_19516_19572[(2)] = null);

(statearr_19516_19572[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19465 === (9))){
var inst_19383 = (state_19464[(2)]);
var state_19464__$1 = state_19464;
var statearr_19517_19573 = state_19464__$1;
(statearr_19517_19573[(2)] = inst_19383);

(statearr_19517_19573[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19465 === (5))){
var inst_19353 = (state_19464[(7)]);
var inst_19354 = (state_19464[(8)]);
var inst_19356 = (inst_19354 < inst_19353);
var inst_19357 = inst_19356;
var state_19464__$1 = state_19464;
if(cljs.core.truth_(inst_19357)){
var statearr_19518_19574 = state_19464__$1;
(statearr_19518_19574[(1)] = (7));

} else {
var statearr_19519_19575 = state_19464__$1;
(statearr_19519_19575[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19465 === (14))){
var inst_19364 = (state_19464[(26)]);
var inst_19373 = cljs.core.first.call(null,inst_19364);
var inst_19374 = figwheel.client.file_reloading.eval_body.call(null,inst_19373);
var inst_19375 = cljs.core.next.call(null,inst_19364);
var inst_19351 = inst_19375;
var inst_19352 = null;
var inst_19353 = (0);
var inst_19354 = (0);
var state_19464__$1 = (function (){var statearr_19520 = state_19464;
(statearr_19520[(7)] = inst_19353);

(statearr_19520[(32)] = inst_19374);

(statearr_19520[(8)] = inst_19354);

(statearr_19520[(9)] = inst_19352);

(statearr_19520[(10)] = inst_19351);

return statearr_19520;
})();
var statearr_19521_19576 = state_19464__$1;
(statearr_19521_19576[(2)] = null);

(statearr_19521_19576[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19465 === (26))){
var inst_19423 = (state_19464[(19)]);
var inst_19426 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19423);
var state_19464__$1 = state_19464;
var statearr_19522_19577 = state_19464__$1;
(statearr_19522_19577[(2)] = inst_19426);

(statearr_19522_19577[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19465 === (16))){
var inst_19390 = (state_19464[(23)]);
var inst_19392 = (function (){var all_files = inst_19390;
return ((function (all_files,inst_19390,state_val_19465,c__6351__auto__,map__19339,map__19339__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__19340,map__19340__$1,msg,files){
return (function (p1__19135_SHARP_){
return cljs.core.update_in.call(null,p1__19135_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_19390,state_val_19465,c__6351__auto__,map__19339,map__19339__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__19340,map__19340__$1,msg,files))
})();
var inst_19393 = cljs.core.map.call(null,inst_19392,inst_19390);
var state_19464__$1 = state_19464;
var statearr_19523_19578 = state_19464__$1;
(statearr_19523_19578[(2)] = inst_19393);

(statearr_19523_19578[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19465 === (30))){
var state_19464__$1 = state_19464;
var statearr_19524_19579 = state_19464__$1;
(statearr_19524_19579[(2)] = null);

(statearr_19524_19579[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19465 === (10))){
var inst_19364 = (state_19464[(26)]);
var inst_19366 = cljs.core.chunked_seq_QMARK_.call(null,inst_19364);
var state_19464__$1 = state_19464;
if(inst_19366){
var statearr_19525_19580 = state_19464__$1;
(statearr_19525_19580[(1)] = (13));

} else {
var statearr_19526_19581 = state_19464__$1;
(statearr_19526_19581[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19465 === (18))){
var inst_19397 = (state_19464[(14)]);
var inst_19396 = (state_19464[(16)]);
var inst_19396__$1 = (state_19464[(2)]);
var inst_19397__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_19396__$1);
var inst_19398 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_19397__$1);
var state_19464__$1 = (function (){var statearr_19527 = state_19464;
(statearr_19527[(14)] = inst_19397__$1);

(statearr_19527[(16)] = inst_19396__$1);

return statearr_19527;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19464__$1,(19),inst_19398);
} else {
if((state_val_19465 === (37))){
var inst_19459 = (state_19464[(2)]);
var state_19464__$1 = state_19464;
var statearr_19528_19582 = state_19464__$1;
(statearr_19528_19582[(2)] = inst_19459);

(statearr_19528_19582[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19465 === (8))){
var inst_19364 = (state_19464[(26)]);
var inst_19351 = (state_19464[(10)]);
var inst_19364__$1 = cljs.core.seq.call(null,inst_19351);
var state_19464__$1 = (function (){var statearr_19529 = state_19464;
(statearr_19529[(26)] = inst_19364__$1);

return statearr_19529;
})();
if(inst_19364__$1){
var statearr_19530_19583 = state_19464__$1;
(statearr_19530_19583[(1)] = (10));

} else {
var statearr_19531_19584 = state_19464__$1;
(statearr_19531_19584[(1)] = (11));

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
});})(c__6351__auto__,map__19339,map__19339__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__19340,map__19340__$1,msg,files))
;
return ((function (switch__6295__auto__,c__6351__auto__,map__19339,map__19339__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__19340,map__19340__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__6296__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__6296__auto____0 = (function (){
var statearr_19535 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19535[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__6296__auto__);

(statearr_19535[(1)] = (1));

return statearr_19535;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__6296__auto____1 = (function (state_19464){
while(true){
var ret_value__6297__auto__ = (function (){try{while(true){
var result__6298__auto__ = switch__6295__auto__.call(null,state_19464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6298__auto__;
}
break;
}
}catch (e19536){if((e19536 instanceof Object)){
var ex__6299__auto__ = e19536;
var statearr_19537_19585 = state_19464;
(statearr_19537_19585[(5)] = ex__6299__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19536;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19586 = state_19464;
state_19464 = G__19586;
continue;
} else {
return ret_value__6297__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__6296__auto__ = function(state_19464){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__6296__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__6296__auto____1.call(this,state_19464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__6296__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__6296__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__6296__auto__;
})()
;})(switch__6295__auto__,c__6351__auto__,map__19339,map__19339__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__19340,map__19340__$1,msg,files))
})();
var state__6353__auto__ = (function (){var statearr_19538 = f__6352__auto__.call(null);
(statearr_19538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6351__auto__);

return statearr_19538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6353__auto__);
});})(c__6351__auto__,map__19339,map__19339__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__19340,map__19340__$1,msg,files))
);

return c__6351__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__19589,link){
var map__19591 = p__19589;
var map__19591__$1 = ((cljs.core.seq_QMARK_.call(null,map__19591))?cljs.core.apply.call(null,cljs.core.hash_map,map__19591):map__19591);
var file = cljs.core.get.call(null,map__19591__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4406__auto__ = link.href;
if(cljs.core.truth_(temp__4406__auto__)){
var link_href = temp__4406__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4406__auto__,map__19591,map__19591__$1,file){
return (function (p1__19587_SHARP_,p2__19588_SHARP_){
if(cljs.core._EQ_.call(null,p1__19587_SHARP_,p2__19588_SHARP_)){
return p1__19587_SHARP_;
} else {
return false;
}
});})(link_href,temp__4406__auto__,map__19591,map__19591__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4406__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__19595){
var map__19596 = p__19595;
var map__19596__$1 = ((cljs.core.seq_QMARK_.call(null,map__19596))?cljs.core.apply.call(null,cljs.core.hash_map,map__19596):map__19596);
var current_url_length = cljs.core.get.call(null,map__19596__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__19596__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__19592_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__19592_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4406__auto__)){
var res = temp__4406__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function() {
var figwheel$client$file_reloading$add_link_to_doc = null;
var figwheel$client$file_reloading$add_link_to_doc__1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var figwheel$client$file_reloading$add_link_to_doc__2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});
figwheel$client$file_reloading$add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$add_link_to_doc__1.call(this,orig_link);
case 2:
return figwheel$client$file_reloading$add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$add_link_to_doc__1;
figwheel$client$file_reloading$add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = figwheel$client$file_reloading$add_link_to_doc__2;
return figwheel$client$file_reloading$add_link_to_doc;
})()
;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__19597){
var map__19599 = p__19597;
var map__19599__$1 = ((cljs.core.seq_QMARK_.call(null,map__19599))?cljs.core.apply.call(null,cljs.core.hash_map,map__19599):map__19599);
var f_data = map__19599__$1;
var request_url = cljs.core.get.call(null,map__19599__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__19599__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4404__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4404__auto__)){
var link = temp__4404__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__4066__auto__ = request_url;
if(cljs.core.truth_(or__4066__auto__)){
return or__4066__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__19600,files_msg){
var map__19622 = p__19600;
var map__19622__$1 = ((cljs.core.seq_QMARK_.call(null,map__19622))?cljs.core.apply.call(null,cljs.core.hash_map,map__19622):map__19622);
var opts = map__19622__$1;
var on_cssload = cljs.core.get.call(null,map__19622__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__19623_19643 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__19624_19644 = null;
var count__19625_19645 = (0);
var i__19626_19646 = (0);
while(true){
if((i__19626_19646 < count__19625_19645)){
var f_19647 = cljs.core._nth.call(null,chunk__19624_19644,i__19626_19646);
figwheel.client.file_reloading.reload_css_file.call(null,f_19647);

var G__19648 = seq__19623_19643;
var G__19649 = chunk__19624_19644;
var G__19650 = count__19625_19645;
var G__19651 = (i__19626_19646 + (1));
seq__19623_19643 = G__19648;
chunk__19624_19644 = G__19649;
count__19625_19645 = G__19650;
i__19626_19646 = G__19651;
continue;
} else {
var temp__4406__auto___19652 = cljs.core.seq.call(null,seq__19623_19643);
if(temp__4406__auto___19652){
var seq__19623_19653__$1 = temp__4406__auto___19652;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19623_19653__$1)){
var c__4851__auto___19654 = cljs.core.chunk_first.call(null,seq__19623_19653__$1);
var G__19655 = cljs.core.chunk_rest.call(null,seq__19623_19653__$1);
var G__19656 = c__4851__auto___19654;
var G__19657 = cljs.core.count.call(null,c__4851__auto___19654);
var G__19658 = (0);
seq__19623_19643 = G__19655;
chunk__19624_19644 = G__19656;
count__19625_19645 = G__19657;
i__19626_19646 = G__19658;
continue;
} else {
var f_19659 = cljs.core.first.call(null,seq__19623_19653__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_19659);

var G__19660 = cljs.core.next.call(null,seq__19623_19653__$1);
var G__19661 = null;
var G__19662 = (0);
var G__19663 = (0);
seq__19623_19643 = G__19660;
chunk__19624_19644 = G__19661;
count__19625_19645 = G__19662;
i__19626_19646 = G__19663;
continue;
}
} else {
}
}
break;
}

var c__6351__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6351__auto__,map__19622,map__19622__$1,opts,on_cssload){
return (function (){
var f__6352__auto__ = (function (){var switch__6295__auto__ = ((function (c__6351__auto__,map__19622,map__19622__$1,opts,on_cssload){
return (function (state_19633){
var state_val_19634 = (state_19633[(1)]);
if((state_val_19634 === (2))){
var inst_19629 = (state_19633[(2)]);
var inst_19630 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_19631 = on_cssload.call(null,inst_19630);
var state_19633__$1 = (function (){var statearr_19635 = state_19633;
(statearr_19635[(7)] = inst_19629);

return statearr_19635;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19633__$1,inst_19631);
} else {
if((state_val_19634 === (1))){
var inst_19627 = cljs.core.async.timeout.call(null,(100));
var state_19633__$1 = state_19633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19633__$1,(2),inst_19627);
} else {
return null;
}
}
});})(c__6351__auto__,map__19622,map__19622__$1,opts,on_cssload))
;
return ((function (switch__6295__auto__,c__6351__auto__,map__19622,map__19622__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__6296__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__6296__auto____0 = (function (){
var statearr_19639 = [null,null,null,null,null,null,null,null];
(statearr_19639[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__6296__auto__);

(statearr_19639[(1)] = (1));

return statearr_19639;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__6296__auto____1 = (function (state_19633){
while(true){
var ret_value__6297__auto__ = (function (){try{while(true){
var result__6298__auto__ = switch__6295__auto__.call(null,state_19633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6298__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6298__auto__;
}
break;
}
}catch (e19640){if((e19640 instanceof Object)){
var ex__6299__auto__ = e19640;
var statearr_19641_19664 = state_19633;
(statearr_19641_19664[(5)] = ex__6299__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19665 = state_19633;
state_19633 = G__19665;
continue;
} else {
return ret_value__6297__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__6296__auto__ = function(state_19633){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__6296__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__6296__auto____1.call(this,state_19633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__6296__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__6296__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__6296__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__6296__auto__;
})()
;})(switch__6295__auto__,c__6351__auto__,map__19622,map__19622__$1,opts,on_cssload))
})();
var state__6353__auto__ = (function (){var statearr_19642 = f__6352__auto__.call(null);
(statearr_19642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6351__auto__);

return statearr_19642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6353__auto__);
});})(c__6351__auto__,map__19622,map__19622__$1,opts,on_cssload))
);

return c__6351__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1426863545303