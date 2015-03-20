// Compiled by ClojureScript 0.0-3126 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__17745__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__17744 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__17744,(0),null);
var body = cljs.core.nthnext.call(null,vec__17744,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__17745 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17746__i = 0, G__17746__a = new Array(arguments.length -  0);
while (G__17746__i < G__17746__a.length) {G__17746__a[G__17746__i] = arguments[G__17746__i + 0]; ++G__17746__i;}
  args = new cljs.core.IndexedSeq(G__17746__a,0);
} 
return G__17745__delegate.call(this,args);};
G__17745.cljs$lang$maxFixedArity = 0;
G__17745.cljs$lang$applyTo = (function (arglist__17747){
var args = cljs.core.seq(arglist__17747);
return G__17745__delegate(args);
});
G__17745.cljs$core$IFn$_invoke$arity$variadic = G__17745__delegate;
return G__17745;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4820__auto__ = (function sablono$core$update_arglists_$_iter__17752(s__17753){
return (new cljs.core.LazySeq(null,(function (){
var s__17753__$1 = s__17753;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__17753__$1);
if(temp__4406__auto__){
var s__17753__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17753__$2)){
var c__4818__auto__ = cljs.core.chunk_first.call(null,s__17753__$2);
var size__4819__auto__ = cljs.core.count.call(null,c__4818__auto__);
var b__17755 = cljs.core.chunk_buffer.call(null,size__4819__auto__);
if((function (){var i__17754 = (0);
while(true){
if((i__17754 < size__4819__auto__)){
var args = cljs.core._nth.call(null,c__4818__auto__,i__17754);
cljs.core.chunk_append.call(null,b__17755,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__17756 = (i__17754 + (1));
i__17754 = G__17756;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17755),sablono$core$update_arglists_$_iter__17752.call(null,cljs.core.chunk_rest.call(null,s__17753__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17755),null);
}
} else {
var args = cljs.core.first.call(null,s__17753__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__17752.call(null,cljs.core.rest.call(null,s__17753__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4820__auto__.call(null,arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return React.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return React.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 * @param {...*} var_args
 */
sablono.core.include_css = (function() { 
var sablono$core$include_css__delegate = function (styles){
var iter__4820__auto__ = (function sablono$core$include_css_$_iter__17761(s__17762){
return (new cljs.core.LazySeq(null,(function (){
var s__17762__$1 = s__17762;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__17762__$1);
if(temp__4406__auto__){
var s__17762__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17762__$2)){
var c__4818__auto__ = cljs.core.chunk_first.call(null,s__17762__$2);
var size__4819__auto__ = cljs.core.count.call(null,c__4818__auto__);
var b__17764 = cljs.core.chunk_buffer.call(null,size__4819__auto__);
if((function (){var i__17763 = (0);
while(true){
if((i__17763 < size__4819__auto__)){
var style = cljs.core._nth.call(null,c__4818__auto__,i__17763);
cljs.core.chunk_append.call(null,b__17764,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__17765 = (i__17763 + (1));
i__17763 = G__17765;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17764),sablono$core$include_css_$_iter__17761.call(null,cljs.core.chunk_rest.call(null,s__17762__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17764),null);
}
} else {
var style = cljs.core.first.call(null,s__17762__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$include_css_$_iter__17761.call(null,cljs.core.rest.call(null,s__17762__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4820__auto__.call(null,styles);
};
var sablono$core$include_css = function (var_args){
var styles = null;
if (arguments.length > 0) {
var G__17766__i = 0, G__17766__a = new Array(arguments.length -  0);
while (G__17766__i < G__17766__a.length) {G__17766__a[G__17766__i] = arguments[G__17766__i + 0]; ++G__17766__i;}
  styles = new cljs.core.IndexedSeq(G__17766__a,0);
} 
return sablono$core$include_css__delegate.call(this,styles);};
sablono$core$include_css.cljs$lang$maxFixedArity = 0;
sablono$core$include_css.cljs$lang$applyTo = (function (arglist__17767){
var styles = cljs.core.seq(arglist__17767);
return sablono$core$include_css__delegate(styles);
});
sablono$core$include_css.cljs$core$IFn$_invoke$arity$variadic = sablono$core$include_css__delegate;
return sablono$core$include_css;
})()
;
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 * @param {...*} var_args
 */
sablono.core.link_to17768 = (function() { 
var sablono$core$link_to17768__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var sablono$core$link_to17768 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
var G__17769__i = 0, G__17769__a = new Array(arguments.length -  1);
while (G__17769__i < G__17769__a.length) {G__17769__a[G__17769__i] = arguments[G__17769__i + 1]; ++G__17769__i;}
  content = new cljs.core.IndexedSeq(G__17769__a,0);
} 
return sablono$core$link_to17768__delegate.call(this,url,content);};
sablono$core$link_to17768.cljs$lang$maxFixedArity = 1;
sablono$core$link_to17768.cljs$lang$applyTo = (function (arglist__17770){
var url = cljs.core.first(arglist__17770);
var content = cljs.core.rest(arglist__17770);
return sablono$core$link_to17768__delegate(url,content);
});
sablono$core$link_to17768.cljs$core$IFn$_invoke$arity$variadic = sablono$core$link_to17768__delegate;
return sablono$core$link_to17768;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to17768);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 * address. If no content provided use the e-mail address as content.
 * @param {...*} var_args
 */
sablono.core.mail_to17771 = (function() { 
var sablono$core$mail_to17771__delegate = function (e_mail,p__17772){
var vec__17774 = p__17772;
var content = cljs.core.nth.call(null,vec__17774,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__4066__auto__ = content;
if(cljs.core.truth_(or__4066__auto__)){
return or__4066__auto__;
} else {
return e_mail;
}
})()], null);
};
var sablono$core$mail_to17771 = function (e_mail,var_args){
var p__17772 = null;
if (arguments.length > 1) {
var G__17775__i = 0, G__17775__a = new Array(arguments.length -  1);
while (G__17775__i < G__17775__a.length) {G__17775__a[G__17775__i] = arguments[G__17775__i + 1]; ++G__17775__i;}
  p__17772 = new cljs.core.IndexedSeq(G__17775__a,0);
} 
return sablono$core$mail_to17771__delegate.call(this,e_mail,p__17772);};
sablono$core$mail_to17771.cljs$lang$maxFixedArity = 1;
sablono$core$mail_to17771.cljs$lang$applyTo = (function (arglist__17776){
var e_mail = cljs.core.first(arglist__17776);
var p__17772 = cljs.core.rest(arglist__17776);
return sablono$core$mail_to17771__delegate(e_mail,p__17772);
});
sablono$core$mail_to17771.cljs$core$IFn$_invoke$arity$variadic = sablono$core$mail_to17771__delegate;
return sablono$core$mail_to17771;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to17771);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list17777 = (function sablono$core$unordered_list17777(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4820__auto__ = (function sablono$core$unordered_list17777_$_iter__17782(s__17783){
return (new cljs.core.LazySeq(null,(function (){
var s__17783__$1 = s__17783;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__17783__$1);
if(temp__4406__auto__){
var s__17783__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17783__$2)){
var c__4818__auto__ = cljs.core.chunk_first.call(null,s__17783__$2);
var size__4819__auto__ = cljs.core.count.call(null,c__4818__auto__);
var b__17785 = cljs.core.chunk_buffer.call(null,size__4819__auto__);
if((function (){var i__17784 = (0);
while(true){
if((i__17784 < size__4819__auto__)){
var x = cljs.core._nth.call(null,c__4818__auto__,i__17784);
cljs.core.chunk_append.call(null,b__17785,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__17786 = (i__17784 + (1));
i__17784 = G__17786;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17785),sablono$core$unordered_list17777_$_iter__17782.call(null,cljs.core.chunk_rest.call(null,s__17783__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17785),null);
}
} else {
var x = cljs.core.first.call(null,s__17783__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list17777_$_iter__17782.call(null,cljs.core.rest.call(null,s__17783__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4820__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list17777);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list17787 = (function sablono$core$ordered_list17787(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4820__auto__ = (function sablono$core$ordered_list17787_$_iter__17792(s__17793){
return (new cljs.core.LazySeq(null,(function (){
var s__17793__$1 = s__17793;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__17793__$1);
if(temp__4406__auto__){
var s__17793__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17793__$2)){
var c__4818__auto__ = cljs.core.chunk_first.call(null,s__17793__$2);
var size__4819__auto__ = cljs.core.count.call(null,c__4818__auto__);
var b__17795 = cljs.core.chunk_buffer.call(null,size__4819__auto__);
if((function (){var i__17794 = (0);
while(true){
if((i__17794 < size__4819__auto__)){
var x = cljs.core._nth.call(null,c__4818__auto__,i__17794);
cljs.core.chunk_append.call(null,b__17795,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__17796 = (i__17794 + (1));
i__17794 = G__17796;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17795),sablono$core$ordered_list17787_$_iter__17792.call(null,cljs.core.chunk_rest.call(null,s__17793__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17795),null);
}
} else {
var x = cljs.core.first.call(null,s__17793__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list17787_$_iter__17792.call(null,cljs.core.rest.call(null,s__17793__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4820__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list17787);
/**
 * Create an image element.
 */
sablono.core.image17797 = (function() {
var sablono$core$image17797 = null;
var sablono$core$image17797__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var sablono$core$image17797__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
sablono$core$image17797 = function(src,alt){
switch(arguments.length){
case 1:
return sablono$core$image17797__1.call(this,src);
case 2:
return sablono$core$image17797__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$image17797.cljs$core$IFn$_invoke$arity$1 = sablono$core$image17797__1;
sablono$core$image17797.cljs$core$IFn$_invoke$arity$2 = sablono$core$image17797__2;
return sablono$core$image17797;
})()
;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image17797);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__17798_SHARP_,p2__17799_SHARP_){
return [cljs.core.str(p1__17798_SHARP_),cljs.core.str("["),cljs.core.str(p2__17799_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__17800_SHARP_,p2__17801_SHARP_){
return [cljs.core.str(p1__17800_SHARP_),cljs.core.str("-"),cljs.core.str(p2__17801_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field17802 = (function() {
var sablono$core$color_field17802 = null;
var sablono$core$color_field17802__1 = (function (name__10757__auto__){
return sablono$core$color_field17802.call(null,name__10757__auto__,null);
});
var sablono$core$color_field17802__2 = (function (name__10757__auto__,value__10758__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__10757__auto__,value__10758__auto__);
});
sablono$core$color_field17802 = function(name__10757__auto__,value__10758__auto__){
switch(arguments.length){
case 1:
return sablono$core$color_field17802__1.call(this,name__10757__auto__);
case 2:
return sablono$core$color_field17802__2.call(this,name__10757__auto__,value__10758__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$color_field17802.cljs$core$IFn$_invoke$arity$1 = sablono$core$color_field17802__1;
sablono$core$color_field17802.cljs$core$IFn$_invoke$arity$2 = sablono$core$color_field17802__2;
return sablono$core$color_field17802;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field17802);

/**
 * Creates a date input field.
 */
sablono.core.date_field17803 = (function() {
var sablono$core$date_field17803 = null;
var sablono$core$date_field17803__1 = (function (name__10757__auto__){
return sablono$core$date_field17803.call(null,name__10757__auto__,null);
});
var sablono$core$date_field17803__2 = (function (name__10757__auto__,value__10758__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__10757__auto__,value__10758__auto__);
});
sablono$core$date_field17803 = function(name__10757__auto__,value__10758__auto__){
switch(arguments.length){
case 1:
return sablono$core$date_field17803__1.call(this,name__10757__auto__);
case 2:
return sablono$core$date_field17803__2.call(this,name__10757__auto__,value__10758__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$date_field17803.cljs$core$IFn$_invoke$arity$1 = sablono$core$date_field17803__1;
sablono$core$date_field17803.cljs$core$IFn$_invoke$arity$2 = sablono$core$date_field17803__2;
return sablono$core$date_field17803;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field17803);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field17804 = (function() {
var sablono$core$datetime_field17804 = null;
var sablono$core$datetime_field17804__1 = (function (name__10757__auto__){
return sablono$core$datetime_field17804.call(null,name__10757__auto__,null);
});
var sablono$core$datetime_field17804__2 = (function (name__10757__auto__,value__10758__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__10757__auto__,value__10758__auto__);
});
sablono$core$datetime_field17804 = function(name__10757__auto__,value__10758__auto__){
switch(arguments.length){
case 1:
return sablono$core$datetime_field17804__1.call(this,name__10757__auto__);
case 2:
return sablono$core$datetime_field17804__2.call(this,name__10757__auto__,value__10758__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$datetime_field17804.cljs$core$IFn$_invoke$arity$1 = sablono$core$datetime_field17804__1;
sablono$core$datetime_field17804.cljs$core$IFn$_invoke$arity$2 = sablono$core$datetime_field17804__2;
return sablono$core$datetime_field17804;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field17804);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field17805 = (function() {
var sablono$core$datetime_local_field17805 = null;
var sablono$core$datetime_local_field17805__1 = (function (name__10757__auto__){
return sablono$core$datetime_local_field17805.call(null,name__10757__auto__,null);
});
var sablono$core$datetime_local_field17805__2 = (function (name__10757__auto__,value__10758__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__10757__auto__,value__10758__auto__);
});
sablono$core$datetime_local_field17805 = function(name__10757__auto__,value__10758__auto__){
switch(arguments.length){
case 1:
return sablono$core$datetime_local_field17805__1.call(this,name__10757__auto__);
case 2:
return sablono$core$datetime_local_field17805__2.call(this,name__10757__auto__,value__10758__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$datetime_local_field17805.cljs$core$IFn$_invoke$arity$1 = sablono$core$datetime_local_field17805__1;
sablono$core$datetime_local_field17805.cljs$core$IFn$_invoke$arity$2 = sablono$core$datetime_local_field17805__2;
return sablono$core$datetime_local_field17805;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field17805);

/**
 * Creates a email input field.
 */
sablono.core.email_field17806 = (function() {
var sablono$core$email_field17806 = null;
var sablono$core$email_field17806__1 = (function (name__10757__auto__){
return sablono$core$email_field17806.call(null,name__10757__auto__,null);
});
var sablono$core$email_field17806__2 = (function (name__10757__auto__,value__10758__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__10757__auto__,value__10758__auto__);
});
sablono$core$email_field17806 = function(name__10757__auto__,value__10758__auto__){
switch(arguments.length){
case 1:
return sablono$core$email_field17806__1.call(this,name__10757__auto__);
case 2:
return sablono$core$email_field17806__2.call(this,name__10757__auto__,value__10758__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$email_field17806.cljs$core$IFn$_invoke$arity$1 = sablono$core$email_field17806__1;
sablono$core$email_field17806.cljs$core$IFn$_invoke$arity$2 = sablono$core$email_field17806__2;
return sablono$core$email_field17806;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field17806);

/**
 * Creates a file input field.
 */
sablono.core.file_field17807 = (function() {
var sablono$core$file_field17807 = null;
var sablono$core$file_field17807__1 = (function (name__10757__auto__){
return sablono$core$file_field17807.call(null,name__10757__auto__,null);
});
var sablono$core$file_field17807__2 = (function (name__10757__auto__,value__10758__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__10757__auto__,value__10758__auto__);
});
sablono$core$file_field17807 = function(name__10757__auto__,value__10758__auto__){
switch(arguments.length){
case 1:
return sablono$core$file_field17807__1.call(this,name__10757__auto__);
case 2:
return sablono$core$file_field17807__2.call(this,name__10757__auto__,value__10758__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$file_field17807.cljs$core$IFn$_invoke$arity$1 = sablono$core$file_field17807__1;
sablono$core$file_field17807.cljs$core$IFn$_invoke$arity$2 = sablono$core$file_field17807__2;
return sablono$core$file_field17807;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field17807);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field17808 = (function() {
var sablono$core$hidden_field17808 = null;
var sablono$core$hidden_field17808__1 = (function (name__10757__auto__){
return sablono$core$hidden_field17808.call(null,name__10757__auto__,null);
});
var sablono$core$hidden_field17808__2 = (function (name__10757__auto__,value__10758__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__10757__auto__,value__10758__auto__);
});
sablono$core$hidden_field17808 = function(name__10757__auto__,value__10758__auto__){
switch(arguments.length){
case 1:
return sablono$core$hidden_field17808__1.call(this,name__10757__auto__);
case 2:
return sablono$core$hidden_field17808__2.call(this,name__10757__auto__,value__10758__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$hidden_field17808.cljs$core$IFn$_invoke$arity$1 = sablono$core$hidden_field17808__1;
sablono$core$hidden_field17808.cljs$core$IFn$_invoke$arity$2 = sablono$core$hidden_field17808__2;
return sablono$core$hidden_field17808;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field17808);

/**
 * Creates a month input field.
 */
sablono.core.month_field17809 = (function() {
var sablono$core$month_field17809 = null;
var sablono$core$month_field17809__1 = (function (name__10757__auto__){
return sablono$core$month_field17809.call(null,name__10757__auto__,null);
});
var sablono$core$month_field17809__2 = (function (name__10757__auto__,value__10758__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__10757__auto__,value__10758__auto__);
});
sablono$core$month_field17809 = function(name__10757__auto__,value__10758__auto__){
switch(arguments.length){
case 1:
return sablono$core$month_field17809__1.call(this,name__10757__auto__);
case 2:
return sablono$core$month_field17809__2.call(this,name__10757__auto__,value__10758__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$month_field17809.cljs$core$IFn$_invoke$arity$1 = sablono$core$month_field17809__1;
sablono$core$month_field17809.cljs$core$IFn$_invoke$arity$2 = sablono$core$month_field17809__2;
return sablono$core$month_field17809;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field17809);

/**
 * Creates a number input field.
 */
sablono.core.number_field17810 = (function() {
var sablono$core$number_field17810 = null;
var sablono$core$number_field17810__1 = (function (name__10757__auto__){
return sablono$core$number_field17810.call(null,name__10757__auto__,null);
});
var sablono$core$number_field17810__2 = (function (name__10757__auto__,value__10758__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__10757__auto__,value__10758__auto__);
});
sablono$core$number_field17810 = function(name__10757__auto__,value__10758__auto__){
switch(arguments.length){
case 1:
return sablono$core$number_field17810__1.call(this,name__10757__auto__);
case 2:
return sablono$core$number_field17810__2.call(this,name__10757__auto__,value__10758__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$number_field17810.cljs$core$IFn$_invoke$arity$1 = sablono$core$number_field17810__1;
sablono$core$number_field17810.cljs$core$IFn$_invoke$arity$2 = sablono$core$number_field17810__2;
return sablono$core$number_field17810;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field17810);

/**
 * Creates a password input field.
 */
sablono.core.password_field17811 = (function() {
var sablono$core$password_field17811 = null;
var sablono$core$password_field17811__1 = (function (name__10757__auto__){
return sablono$core$password_field17811.call(null,name__10757__auto__,null);
});
var sablono$core$password_field17811__2 = (function (name__10757__auto__,value__10758__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__10757__auto__,value__10758__auto__);
});
sablono$core$password_field17811 = function(name__10757__auto__,value__10758__auto__){
switch(arguments.length){
case 1:
return sablono$core$password_field17811__1.call(this,name__10757__auto__);
case 2:
return sablono$core$password_field17811__2.call(this,name__10757__auto__,value__10758__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$password_field17811.cljs$core$IFn$_invoke$arity$1 = sablono$core$password_field17811__1;
sablono$core$password_field17811.cljs$core$IFn$_invoke$arity$2 = sablono$core$password_field17811__2;
return sablono$core$password_field17811;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field17811);

/**
 * Creates a range input field.
 */
sablono.core.range_field17812 = (function() {
var sablono$core$range_field17812 = null;
var sablono$core$range_field17812__1 = (function (name__10757__auto__){
return sablono$core$range_field17812.call(null,name__10757__auto__,null);
});
var sablono$core$range_field17812__2 = (function (name__10757__auto__,value__10758__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__10757__auto__,value__10758__auto__);
});
sablono$core$range_field17812 = function(name__10757__auto__,value__10758__auto__){
switch(arguments.length){
case 1:
return sablono$core$range_field17812__1.call(this,name__10757__auto__);
case 2:
return sablono$core$range_field17812__2.call(this,name__10757__auto__,value__10758__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$range_field17812.cljs$core$IFn$_invoke$arity$1 = sablono$core$range_field17812__1;
sablono$core$range_field17812.cljs$core$IFn$_invoke$arity$2 = sablono$core$range_field17812__2;
return sablono$core$range_field17812;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field17812);

/**
 * Creates a search input field.
 */
sablono.core.search_field17813 = (function() {
var sablono$core$search_field17813 = null;
var sablono$core$search_field17813__1 = (function (name__10757__auto__){
return sablono$core$search_field17813.call(null,name__10757__auto__,null);
});
var sablono$core$search_field17813__2 = (function (name__10757__auto__,value__10758__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__10757__auto__,value__10758__auto__);
});
sablono$core$search_field17813 = function(name__10757__auto__,value__10758__auto__){
switch(arguments.length){
case 1:
return sablono$core$search_field17813__1.call(this,name__10757__auto__);
case 2:
return sablono$core$search_field17813__2.call(this,name__10757__auto__,value__10758__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$search_field17813.cljs$core$IFn$_invoke$arity$1 = sablono$core$search_field17813__1;
sablono$core$search_field17813.cljs$core$IFn$_invoke$arity$2 = sablono$core$search_field17813__2;
return sablono$core$search_field17813;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field17813);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field17814 = (function() {
var sablono$core$tel_field17814 = null;
var sablono$core$tel_field17814__1 = (function (name__10757__auto__){
return sablono$core$tel_field17814.call(null,name__10757__auto__,null);
});
var sablono$core$tel_field17814__2 = (function (name__10757__auto__,value__10758__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__10757__auto__,value__10758__auto__);
});
sablono$core$tel_field17814 = function(name__10757__auto__,value__10758__auto__){
switch(arguments.length){
case 1:
return sablono$core$tel_field17814__1.call(this,name__10757__auto__);
case 2:
return sablono$core$tel_field17814__2.call(this,name__10757__auto__,value__10758__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$tel_field17814.cljs$core$IFn$_invoke$arity$1 = sablono$core$tel_field17814__1;
sablono$core$tel_field17814.cljs$core$IFn$_invoke$arity$2 = sablono$core$tel_field17814__2;
return sablono$core$tel_field17814;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field17814);

/**
 * Creates a text input field.
 */
sablono.core.text_field17815 = (function() {
var sablono$core$text_field17815 = null;
var sablono$core$text_field17815__1 = (function (name__10757__auto__){
return sablono$core$text_field17815.call(null,name__10757__auto__,null);
});
var sablono$core$text_field17815__2 = (function (name__10757__auto__,value__10758__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__10757__auto__,value__10758__auto__);
});
sablono$core$text_field17815 = function(name__10757__auto__,value__10758__auto__){
switch(arguments.length){
case 1:
return sablono$core$text_field17815__1.call(this,name__10757__auto__);
case 2:
return sablono$core$text_field17815__2.call(this,name__10757__auto__,value__10758__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$text_field17815.cljs$core$IFn$_invoke$arity$1 = sablono$core$text_field17815__1;
sablono$core$text_field17815.cljs$core$IFn$_invoke$arity$2 = sablono$core$text_field17815__2;
return sablono$core$text_field17815;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field17815);

/**
 * Creates a time input field.
 */
sablono.core.time_field17816 = (function() {
var sablono$core$time_field17816 = null;
var sablono$core$time_field17816__1 = (function (name__10757__auto__){
return sablono$core$time_field17816.call(null,name__10757__auto__,null);
});
var sablono$core$time_field17816__2 = (function (name__10757__auto__,value__10758__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__10757__auto__,value__10758__auto__);
});
sablono$core$time_field17816 = function(name__10757__auto__,value__10758__auto__){
switch(arguments.length){
case 1:
return sablono$core$time_field17816__1.call(this,name__10757__auto__);
case 2:
return sablono$core$time_field17816__2.call(this,name__10757__auto__,value__10758__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$time_field17816.cljs$core$IFn$_invoke$arity$1 = sablono$core$time_field17816__1;
sablono$core$time_field17816.cljs$core$IFn$_invoke$arity$2 = sablono$core$time_field17816__2;
return sablono$core$time_field17816;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field17816);

/**
 * Creates a url input field.
 */
sablono.core.url_field17817 = (function() {
var sablono$core$url_field17817 = null;
var sablono$core$url_field17817__1 = (function (name__10757__auto__){
return sablono$core$url_field17817.call(null,name__10757__auto__,null);
});
var sablono$core$url_field17817__2 = (function (name__10757__auto__,value__10758__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__10757__auto__,value__10758__auto__);
});
sablono$core$url_field17817 = function(name__10757__auto__,value__10758__auto__){
switch(arguments.length){
case 1:
return sablono$core$url_field17817__1.call(this,name__10757__auto__);
case 2:
return sablono$core$url_field17817__2.call(this,name__10757__auto__,value__10758__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$url_field17817.cljs$core$IFn$_invoke$arity$1 = sablono$core$url_field17817__1;
sablono$core$url_field17817.cljs$core$IFn$_invoke$arity$2 = sablono$core$url_field17817__2;
return sablono$core$url_field17817;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field17817);

/**
 * Creates a week input field.
 */
sablono.core.week_field17818 = (function() {
var sablono$core$week_field17818 = null;
var sablono$core$week_field17818__1 = (function (name__10757__auto__){
return sablono$core$week_field17818.call(null,name__10757__auto__,null);
});
var sablono$core$week_field17818__2 = (function (name__10757__auto__,value__10758__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__10757__auto__,value__10758__auto__);
});
sablono$core$week_field17818 = function(name__10757__auto__,value__10758__auto__){
switch(arguments.length){
case 1:
return sablono$core$week_field17818__1.call(this,name__10757__auto__);
case 2:
return sablono$core$week_field17818__2.call(this,name__10757__auto__,value__10758__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$week_field17818.cljs$core$IFn$_invoke$arity$1 = sablono$core$week_field17818__1;
sablono$core$week_field17818.cljs$core$IFn$_invoke$arity$2 = sablono$core$week_field17818__2;
return sablono$core$week_field17818;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field17818);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box17819 = (function() {
var sablono$core$check_box17819 = null;
var sablono$core$check_box17819__1 = (function (name){
return sablono$core$check_box17819.call(null,name,null);
});
var sablono$core$check_box17819__2 = (function (name,checked_QMARK_){
return sablono$core$check_box17819.call(null,name,checked_QMARK_,"true");
});
var sablono$core$check_box17819__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
sablono$core$check_box17819 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return sablono$core$check_box17819__1.call(this,name);
case 2:
return sablono$core$check_box17819__2.call(this,name,checked_QMARK_);
case 3:
return sablono$core$check_box17819__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$check_box17819.cljs$core$IFn$_invoke$arity$1 = sablono$core$check_box17819__1;
sablono$core$check_box17819.cljs$core$IFn$_invoke$arity$2 = sablono$core$check_box17819__2;
sablono$core$check_box17819.cljs$core$IFn$_invoke$arity$3 = sablono$core$check_box17819__3;
return sablono$core$check_box17819;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box17819);
/**
 * Creates a radio button.
 */
sablono.core.radio_button17820 = (function() {
var sablono$core$radio_button17820 = null;
var sablono$core$radio_button17820__1 = (function (group){
return sablono$core$radio_button17820.call(null,group,null);
});
var sablono$core$radio_button17820__2 = (function (group,checked_QMARK_){
return sablono$core$radio_button17820.call(null,group,checked_QMARK_,"true");
});
var sablono$core$radio_button17820__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
sablono$core$radio_button17820 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return sablono$core$radio_button17820__1.call(this,group);
case 2:
return sablono$core$radio_button17820__2.call(this,group,checked_QMARK_);
case 3:
return sablono$core$radio_button17820__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$radio_button17820.cljs$core$IFn$_invoke$arity$1 = sablono$core$radio_button17820__1;
sablono$core$radio_button17820.cljs$core$IFn$_invoke$arity$2 = sablono$core$radio_button17820__2;
sablono$core$radio_button17820.cljs$core$IFn$_invoke$arity$3 = sablono$core$radio_button17820__3;
return sablono$core$radio_button17820;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button17820);
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options17821 = (function() {
var sablono$core$select_options17821 = null;
var sablono$core$select_options17821__1 = (function (coll){
return sablono$core$select_options17821.call(null,coll,null);
});
var sablono$core$select_options17821__2 = (function (coll,selected){
var iter__4820__auto__ = (function sablono$core$select_options17821_$_iter__17830(s__17831){
return (new cljs.core.LazySeq(null,(function (){
var s__17831__$1 = s__17831;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__17831__$1);
if(temp__4406__auto__){
var s__17831__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17831__$2)){
var c__4818__auto__ = cljs.core.chunk_first.call(null,s__17831__$2);
var size__4819__auto__ = cljs.core.count.call(null,c__4818__auto__);
var b__17833 = cljs.core.chunk_buffer.call(null,size__4819__auto__);
if((function (){var i__17832 = (0);
while(true){
if((i__17832 < size__4819__auto__)){
var x = cljs.core._nth.call(null,c__4818__auto__,i__17832);
cljs.core.chunk_append.call(null,b__17833,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17836 = x;
var text = cljs.core.nth.call(null,vec__17836,(0),null);
var val = cljs.core.nth.call(null,vec__17836,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__17836,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options17821.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__17838 = (i__17832 + (1));
i__17832 = G__17838;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17833),sablono$core$select_options17821_$_iter__17830.call(null,cljs.core.chunk_rest.call(null,s__17831__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17833),null);
}
} else {
var x = cljs.core.first.call(null,s__17831__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17837 = x;
var text = cljs.core.nth.call(null,vec__17837,(0),null);
var val = cljs.core.nth.call(null,vec__17837,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__17837,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options17821.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),sablono$core$select_options17821_$_iter__17830.call(null,cljs.core.rest.call(null,s__17831__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4820__auto__.call(null,coll);
});
sablono$core$select_options17821 = function(coll,selected){
switch(arguments.length){
case 1:
return sablono$core$select_options17821__1.call(this,coll);
case 2:
return sablono$core$select_options17821__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$select_options17821.cljs$core$IFn$_invoke$arity$1 = sablono$core$select_options17821__1;
sablono$core$select_options17821.cljs$core$IFn$_invoke$arity$2 = sablono$core$select_options17821__2;
return sablono$core$select_options17821;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options17821);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down17839 = (function() {
var sablono$core$drop_down17839 = null;
var sablono$core$drop_down17839__2 = (function (name,options){
return sablono$core$drop_down17839.call(null,name,options,null);
});
var sablono$core$drop_down17839__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
sablono$core$drop_down17839 = function(name,options,selected){
switch(arguments.length){
case 2:
return sablono$core$drop_down17839__2.call(this,name,options);
case 3:
return sablono$core$drop_down17839__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$drop_down17839.cljs$core$IFn$_invoke$arity$2 = sablono$core$drop_down17839__2;
sablono$core$drop_down17839.cljs$core$IFn$_invoke$arity$3 = sablono$core$drop_down17839__3;
return sablono$core$drop_down17839;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down17839);
/**
 * Creates a text area element.
 */
sablono.core.text_area17840 = (function() {
var sablono$core$text_area17840 = null;
var sablono$core$text_area17840__1 = (function (name){
return sablono$core$text_area17840.call(null,name,null);
});
var sablono$core$text_area17840__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
sablono$core$text_area17840 = function(name,value){
switch(arguments.length){
case 1:
return sablono$core$text_area17840__1.call(this,name);
case 2:
return sablono$core$text_area17840__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$text_area17840.cljs$core$IFn$_invoke$arity$1 = sablono$core$text_area17840__1;
sablono$core$text_area17840.cljs$core$IFn$_invoke$arity$2 = sablono$core$text_area17840__2;
return sablono$core$text_area17840;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area17840);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label17841 = (function sablono$core$label17841(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label17841);
/**
 * Creates a submit button.
 */
sablono.core.submit_button17842 = (function sablono$core$submit_button17842(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button17842);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button17843 = (function sablono$core$reset_button17843(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button17843);
/**
 * Create a form that points to a particular method and route.
 * e.g. (form-to [:put "/post"]
 * ...)
 * @param {...*} var_args
 */
sablono.core.form_to17844 = (function() { 
var sablono$core$form_to17844__delegate = function (p__17845,body){
var vec__17847 = p__17845;
var method = cljs.core.nth.call(null,vec__17847,(0),null);
var action = cljs.core.nth.call(null,vec__17847,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var sablono$core$form_to17844 = function (p__17845,var_args){
var body = null;
if (arguments.length > 1) {
var G__17848__i = 0, G__17848__a = new Array(arguments.length -  1);
while (G__17848__i < G__17848__a.length) {G__17848__a[G__17848__i] = arguments[G__17848__i + 1]; ++G__17848__i;}
  body = new cljs.core.IndexedSeq(G__17848__a,0);
} 
return sablono$core$form_to17844__delegate.call(this,p__17845,body);};
sablono$core$form_to17844.cljs$lang$maxFixedArity = 1;
sablono$core$form_to17844.cljs$lang$applyTo = (function (arglist__17849){
var p__17845 = cljs.core.first(arglist__17849);
var body = cljs.core.rest(arglist__17849);
return sablono$core$form_to17844__delegate(p__17845,body);
});
sablono$core$form_to17844.cljs$core$IFn$_invoke$arity$variadic = sablono$core$form_to17844__delegate;
return sablono$core$form_to17844;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to17844);

//# sourceMappingURL=core.js.map?rel=1426863544332