// Compiled by ClojureScript 0.0-3126 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4406__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4406__auto__)){
var ns = temp__4406__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18950_18962 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18951_18963 = null;
var count__18952_18964 = (0);
var i__18953_18965 = (0);
while(true){
if((i__18953_18965 < count__18952_18964)){
var f_18966 = cljs.core._nth.call(null,chunk__18951_18963,i__18953_18965);
cljs.core.println.call(null,"  ",f_18966);

var G__18967 = seq__18950_18962;
var G__18968 = chunk__18951_18963;
var G__18969 = count__18952_18964;
var G__18970 = (i__18953_18965 + (1));
seq__18950_18962 = G__18967;
chunk__18951_18963 = G__18968;
count__18952_18964 = G__18969;
i__18953_18965 = G__18970;
continue;
} else {
var temp__4406__auto___18971 = cljs.core.seq.call(null,seq__18950_18962);
if(temp__4406__auto___18971){
var seq__18950_18972__$1 = temp__4406__auto___18971;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18950_18972__$1)){
var c__4851__auto___18973 = cljs.core.chunk_first.call(null,seq__18950_18972__$1);
var G__18974 = cljs.core.chunk_rest.call(null,seq__18950_18972__$1);
var G__18975 = c__4851__auto___18973;
var G__18976 = cljs.core.count.call(null,c__4851__auto___18973);
var G__18977 = (0);
seq__18950_18962 = G__18974;
chunk__18951_18963 = G__18975;
count__18952_18964 = G__18976;
i__18953_18965 = G__18977;
continue;
} else {
var f_18978 = cljs.core.first.call(null,seq__18950_18972__$1);
cljs.core.println.call(null,"  ",f_18978);

var G__18979 = cljs.core.next.call(null,seq__18950_18972__$1);
var G__18980 = null;
var G__18981 = (0);
var G__18982 = (0);
seq__18950_18962 = G__18979;
chunk__18951_18963 = G__18980;
count__18952_18964 = G__18981;
i__18953_18965 = G__18982;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__4066__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4066__auto__)){
return or__4066__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18954 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18955 = null;
var count__18956 = (0);
var i__18957 = (0);
while(true){
if((i__18957 < count__18956)){
var vec__18958 = cljs.core._nth.call(null,chunk__18955,i__18957);
var name = cljs.core.nth.call(null,vec__18958,(0),null);
var map__18959 = cljs.core.nth.call(null,vec__18958,(1),null);
var map__18959__$1 = ((cljs.core.seq_QMARK_.call(null,map__18959))?cljs.core.apply.call(null,cljs.core.hash_map,map__18959):map__18959);
var arglists = cljs.core.get.call(null,map__18959__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__18959__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__18983 = seq__18954;
var G__18984 = chunk__18955;
var G__18985 = count__18956;
var G__18986 = (i__18957 + (1));
seq__18954 = G__18983;
chunk__18955 = G__18984;
count__18956 = G__18985;
i__18957 = G__18986;
continue;
} else {
var temp__4406__auto__ = cljs.core.seq.call(null,seq__18954);
if(temp__4406__auto__){
var seq__18954__$1 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18954__$1)){
var c__4851__auto__ = cljs.core.chunk_first.call(null,seq__18954__$1);
var G__18987 = cljs.core.chunk_rest.call(null,seq__18954__$1);
var G__18988 = c__4851__auto__;
var G__18989 = cljs.core.count.call(null,c__4851__auto__);
var G__18990 = (0);
seq__18954 = G__18987;
chunk__18955 = G__18988;
count__18956 = G__18989;
i__18957 = G__18990;
continue;
} else {
var vec__18960 = cljs.core.first.call(null,seq__18954__$1);
var name = cljs.core.nth.call(null,vec__18960,(0),null);
var map__18961 = cljs.core.nth.call(null,vec__18960,(1),null);
var map__18961__$1 = ((cljs.core.seq_QMARK_.call(null,map__18961))?cljs.core.apply.call(null,cljs.core.hash_map,map__18961):map__18961);
var arglists = cljs.core.get.call(null,map__18961__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__18961__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__18991 = cljs.core.next.call(null,seq__18954__$1);
var G__18992 = null;
var G__18993 = (0);
var G__18994 = (0);
seq__18954 = G__18991;
chunk__18955 = G__18992;
count__18956 = G__18993;
i__18957 = G__18994;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1426863545080