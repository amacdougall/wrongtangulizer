// Compiled by ClojureScript 0.0-3126 {}
goog.provide('sablono.interpreter');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('goog.object');
goog.require('sablono.util');
goog.require('clojure.string');

sablono.interpreter.IInterpreter = (function (){var obj17863 = {};
return obj17863;
})();

/**
 * Interpret a Clojure data structure as a React fn call.
 */
sablono.interpreter.interpret = (function sablono$interpreter$interpret(this$){
if((function (){var and__4054__auto__ = this$;
if(and__4054__auto__){
return this$.sablono$interpreter$IInterpreter$interpret$arity$1;
} else {
return and__4054__auto__;
}
})()){
return this$.sablono$interpreter$IInterpreter$interpret$arity$1(this$);
} else {
var x__4702__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4066__auto__ = (sablono.interpreter.interpret[goog.typeOf(x__4702__auto__)]);
if(or__4066__auto__){
return or__4066__auto__;
} else {
var or__4066__auto____$1 = (sablono.interpreter.interpret["_"]);
if(or__4066__auto____$1){
return or__4066__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IInterpreter.interpret",this$);
}
}
})().call(null,this$);
}
});

sablono.interpreter.wrap_form_element = (function sablono$interpreter$wrap_form_element(ctor,display_name){
return React.createFactory(React.createClass({"render": (function (){
var this$ = this;
var props = {};
goog.object.extend(props,this$.props,{"children": (this$.props["children"]), "onChange": (this$["onChange"]), "value": (this$.state["value"])});

return ctor.call(null,props);
}), "componentWillReceiveProps": (function (new_props){
var this$ = this;
return this$.setState({"value": (new_props["value"])});
}), "onChange": (function (e){
var this$ = this;
var handler = (this$.props["onChange"]);
if((handler == null)){
return null;
} else {
handler.call(null,e);

return this$.setState({"value": e.target.value});
}
}), "getInitialState": (function (){
var this$ = this;
return {"value": (this$.props["value"])};
}), "getDisplayName": (function (){
return cljs.core.name.call(null,display_name);
})}));
});
sablono.interpreter.input = sablono.interpreter.wrap_form_element.call(null,React.DOM.input,"input");
sablono.interpreter.option = sablono.interpreter.wrap_form_element.call(null,React.DOM.option,"option");
sablono.interpreter.textarea = sablono.interpreter.wrap_form_element.call(null,React.DOM.textarea,"textarea");
/**
 * @param {...*} var_args
 */
sablono.interpreter.create_element = (function() { 
var sablono$interpreter$create_element__delegate = function (type,props,children){
return ((sablono.util.wrapped_type_QMARK_.call(null,type))?cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"input","input",556931961),sablono.interpreter.input,new cljs.core.Keyword(null,"option","option",65132272),sablono.interpreter.option,new cljs.core.Keyword(null,"textarea","textarea",-650375824),sablono.interpreter.textarea], null),cljs.core.keyword.call(null,type)):cljs.core.partial.call(null,React.createElement,cljs.core.name.call(null,type))).call(null,props,(((cljs.core.sequential_QMARK_.call(null,children)) && (cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,children))))?cljs.core.first.call(null,children):children));
};
var sablono$interpreter$create_element = function (type,props,var_args){
var children = null;
if (arguments.length > 2) {
var G__17864__i = 0, G__17864__a = new Array(arguments.length -  2);
while (G__17864__i < G__17864__a.length) {G__17864__a[G__17864__i] = arguments[G__17864__i + 2]; ++G__17864__i;}
  children = new cljs.core.IndexedSeq(G__17864__a,0);
} 
return sablono$interpreter$create_element__delegate.call(this,type,props,children);};
sablono$interpreter$create_element.cljs$lang$maxFixedArity = 2;
sablono$interpreter$create_element.cljs$lang$applyTo = (function (arglist__17865){
var type = cljs.core.first(arglist__17865);
arglist__17865 = cljs.core.next(arglist__17865);
var props = cljs.core.first(arglist__17865);
var children = cljs.core.rest(arglist__17865);
return sablono$interpreter$create_element__delegate(type,props,children);
});
sablono$interpreter$create_element.cljs$core$IFn$_invoke$arity$variadic = sablono$interpreter$create_element__delegate;
return sablono$interpreter$create_element;
})()
;
sablono.interpreter.attributes = (function sablono$interpreter$attributes(attrs){
var attrs__$1 = cljs.core.clj__GT_js.call(null,sablono.util.html_to_dom_attrs.call(null,attrs));
var class$ = attrs__$1.className;
var class$__$1 = ((cljs.core.array_QMARK_.call(null,class$))?clojure.string.join.call(null," ",class$):class$);
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,class$__$1))){
delete attrs__$1["className"];
} else {
attrs__$1.className = class$__$1;
}

return attrs__$1;
});
/**
 * Render an element vector as a HTML element.
 */
sablono.interpreter.element = (function sablono$interpreter$element(element__$1){
var vec__17867 = sablono.util.normalize_element.call(null,element__$1);
var type = cljs.core.nth.call(null,vec__17867,(0),null);
var attrs = cljs.core.nth.call(null,vec__17867,(1),null);
var content = cljs.core.nth.call(null,vec__17867,(2),null);
var js_attrs = sablono.interpreter.attributes.call(null,attrs);
if((cljs.core.sequential_QMARK_.call(null,content)) && (cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,content)))){
return sablono.interpreter.create_element.call(null,type,js_attrs,sablono.interpreter.interpret.call(null,cljs.core.first.call(null,content)));
} else {
if(cljs.core.truth_(content)){
return sablono.interpreter.create_element.call(null,type,js_attrs,sablono.interpreter.interpret.call(null,content));
} else {
return sablono.interpreter.create_element.call(null,type,js_attrs,null);

}
}
});
sablono.interpreter.interpret_seq = (function sablono$interpreter$interpret_seq(s){
return cljs.core.into_array.call(null,cljs.core.map.call(null,sablono.interpreter.interpret,s));
});
(sablono.interpreter.IInterpreter["null"] = true);

(sablono.interpreter.interpret["null"] = (function (this$){
return null;
}));

(sablono.interpreter.IInterpreter["_"] = true);

(sablono.interpreter.interpret["_"] = (function (this$){
return this$;
}));

cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.element.call(null,this$__$1);
});

cljs.core.Subvec.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.Subvec.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.element.call(null,this$__$1);
});

cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq.call(null,this$__$1);
});

cljs.core.List.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.List.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq.call(null,this$__$1);
});

cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq.call(null,this$__$1);
});

cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq.call(null,this$__$1);
});

cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq.call(null,this$__$1);
});

//# sourceMappingURL=interpreter.js.map?rel=1426863544396