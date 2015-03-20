// Compiled by ClojureScript 0.0-3126 {}
goog.provide('wrongtangular.views');
goog.require('cljs.core');
goog.require('wrongtangular.input');
goog.require('wrongtangular.data');
goog.require('sablono.core');
goog.require('clojure.string');
goog.require('om.core');
/**
 * @param {...*} var_args
 */
wrongtangular.views.classes = (function() { 
var wrongtangular$views$classes__delegate = function (cs){
return clojure.string.join.call(null," ",cljs.core.remove.call(null,cljs.core.nil_QMARK_,cs));
};
var wrongtangular$views$classes = function (var_args){
var cs = null;
if (arguments.length > 0) {
var G__21027__i = 0, G__21027__a = new Array(arguments.length -  0);
while (G__21027__i < G__21027__a.length) {G__21027__a[G__21027__i] = arguments[G__21027__i + 0]; ++G__21027__i;}
  cs = new cljs.core.IndexedSeq(G__21027__a,0);
} 
return wrongtangular$views$classes__delegate.call(this,cs);};
wrongtangular$views$classes.cljs$lang$maxFixedArity = 0;
wrongtangular$views$classes.cljs$lang$applyTo = (function (arglist__21028){
var cs = cljs.core.seq(arglist__21028);
return wrongtangular$views$classes__delegate(cs);
});
wrongtangular$views$classes.cljs$core$IFn$_invoke$arity$variadic = wrongtangular$views$classes__delegate;
return wrongtangular$views$classes;
})()
;
wrongtangular.views.tinder = (function wrongtangular$views$tinder(p__21029,owner){
var map__21038 = p__21029;
var map__21038__$1 = ((cljs.core.seq_QMARK_.call(null,map__21038))?cljs.core.apply.call(null,cljs.core.hash_map,map__21038):map__21038);
var direction = cljs.core.get.call(null,map__21038__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var last_action = cljs.core.get.call(null,map__21038__$1,new cljs.core.Keyword(null,"last-action","last-action",1526677844));
var image_set = cljs.core.get.call(null,map__21038__$1,new cljs.core.Keyword(null,"image-set","image-set",1881189723));
if(typeof wrongtangular.views.t21039 !== 'undefined'){
} else {

/**
* @constructor
*/
wrongtangular.views.t21039 = (function (image_set,last_action,direction,map__21038,owner,p__21029,tinder,meta21040){
this.image_set = image_set;
this.last_action = last_action;
this.direction = direction;
this.map__21038 = map__21038;
this.owner = owner;
this.p__21029 = p__21029;
this.tinder = tinder;
this.meta21040 = meta21040;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
wrongtangular.views.t21039.prototype.om$core$IRender$ = true;

wrongtangular.views.t21039.prototype.om$core$IRender$render$arity$1 = ((function (map__21038,map__21038__$1,direction,last_action,image_set){
return (function (_){
var self__ = this;
var ___$1 = this;
var vec__21042 = self__.image_set;
var previous_image = cljs.core.nth.call(null,vec__21042,(0),null);
var current_image = cljs.core.nth.call(null,vec__21042,(1),null);
var next_image = cljs.core.nth.call(null,vec__21042,(2),null);
var image_div = ((function (vec__21042,previous_image,current_image,next_image,___$1,map__21038,map__21038__$1,direction,last_action,image_set){
return (function (image,class_name){
return React.createElement("div",{"className": class_name},React.createElement("p",{"className": "image-title"},sablono.interpreter.interpret.call(null,[cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(image)),cljs.core.str(": "),cljs.core.str(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(image))].join(''))),React.createElement("img",{"src": new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(image)}));
});})(vec__21042,previous_image,current_image,next_image,___$1,map__21038,map__21038__$1,direction,last_action,image_set))
;
return React.createElement("div",{"className": "tinder"},sablono.interpreter.interpret.call(null,(cljs.core.truth_(previous_image)?(function (){var previous_class = (function (){var G__21043 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.direction,self__.last_action], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"forward","forward",-557345303),new cljs.core.Keyword(null,"rejected","rejected",231052999)], null),G__21043)){
return "previous animated fadeOutLeft";
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"forward","forward",-557345303),new cljs.core.Keyword(null,"approved","approved",-803187124)], null),G__21043)){
return "previous animated fadeOutRight";
} else {
return "hidden";

}
}
})();
return image_div.call(null,previous_image,wrongtangular.views.classes.call(null,"previous",previous_class));
})():null)),sablono.interpreter.interpret.call(null,image_div.call(null,current_image,wrongtangular.views.classes.call(null,"current",(function (){var G__21044 = (((self__.direction instanceof cljs.core.Keyword))?self__.direction.fqn:null);
switch (G__21044) {
case "backward":
return "animated fadeInDown";

break;
case "forward":
return "animated fadeInUp";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(self__.direction)].join('')));

}
})()))),sablono.interpreter.interpret.call(null,(cljs.core.truth_(next_image)?(function (){var G__21045 = (((self__.direction instanceof cljs.core.Keyword))?self__.direction.fqn:null);
switch (G__21045) {
case "backward":
return image_div.call(null,next_image,"next animated fadeOutDown");

break;
case "forward":
var bg_url = [cljs.core.str("url("),cljs.core.str(next_image.call(null,"url")),cljs.core.str(") no-repeat -9999px -9999px")].join('');
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),bg_url], null)], null),""], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(self__.direction)].join('')));

}
})():null)));
});})(map__21038,map__21038__$1,direction,last_action,image_set))
;

wrongtangular.views.t21039.prototype.om$core$IDisplayName$ = true;

wrongtangular.views.t21039.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__21038,map__21038__$1,direction,last_action,image_set){
return (function (_){
var self__ = this;
var ___$1 = this;
return "Tinder";
});})(map__21038,map__21038__$1,direction,last_action,image_set))
;

wrongtangular.views.t21039.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__21038,map__21038__$1,direction,last_action,image_set){
return (function (_21041){
var self__ = this;
var _21041__$1 = this;
return self__.meta21040;
});})(map__21038,map__21038__$1,direction,last_action,image_set))
;

wrongtangular.views.t21039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__21038,map__21038__$1,direction,last_action,image_set){
return (function (_21041,meta21040__$1){
var self__ = this;
var _21041__$1 = this;
return (new wrongtangular.views.t21039(self__.image_set,self__.last_action,self__.direction,self__.map__21038,self__.owner,self__.p__21029,self__.tinder,meta21040__$1));
});})(map__21038,map__21038__$1,direction,last_action,image_set))
;

wrongtangular.views.t21039.cljs$lang$type = true;

wrongtangular.views.t21039.cljs$lang$ctorStr = "wrongtangular.views/t21039";

wrongtangular.views.t21039.cljs$lang$ctorPrWriter = ((function (map__21038,map__21038__$1,direction,last_action,image_set){
return (function (this__17184__auto__,writer__17185__auto__,opt__17186__auto__){
return cljs.core._write.call(null,writer__17185__auto__,"wrongtangular.views/t21039");
});})(map__21038,map__21038__$1,direction,last_action,image_set))
;

wrongtangular.views.__GT_t21039 = ((function (map__21038,map__21038__$1,direction,last_action,image_set){
return (function wrongtangular$views$tinder_$___GT_t21039(image_set__$1,last_action__$1,direction__$1,map__21038__$2,owner__$1,p__21029__$1,tinder__$1,meta21040){
return (new wrongtangular.views.t21039(image_set__$1,last_action__$1,direction__$1,map__21038__$2,owner__$1,p__21029__$1,tinder__$1,meta21040));
});})(map__21038,map__21038__$1,direction,last_action,image_set))
;

}

return (new wrongtangular.views.t21039(image_set,last_action,direction,map__21038__$1,owner,p__21029,wrongtangular$views$tinder,cljs.core.PersistentArrayMap.EMPTY));
});
wrongtangular.views.progress_text = (function wrongtangular$views$progress_text(p__21048,owner){
var map__21056 = p__21048;
var map__21056__$1 = ((cljs.core.seq_QMARK_.call(null,map__21056))?cljs.core.apply.call(null,cljs.core.hash_map,map__21056):map__21056);
var rejected_count = cljs.core.get.call(null,map__21056__$1,new cljs.core.Keyword(null,"rejected-count","rejected-count",-1444772852));
var approved_count = cljs.core.get.call(null,map__21056__$1,new cljs.core.Keyword(null,"approved-count","approved-count",1444842616));
var app = cljs.core.get.call(null,map__21056__$1,new cljs.core.Keyword(null,"app","app",-560961707));
if(typeof wrongtangular.views.t21057 !== 'undefined'){
} else {

/**
* @constructor
*/
wrongtangular.views.t21057 = (function (app,approved_count,rejected_count,map__21056,owner,p__21048,progress_text,meta21058){
this.app = app;
this.approved_count = approved_count;
this.rejected_count = rejected_count;
this.map__21056 = map__21056;
this.owner = owner;
this.p__21048 = p__21048;
this.progress_text = progress_text;
this.meta21058 = meta21058;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
wrongtangular.views.t21057.prototype.om$core$IRender$ = true;

wrongtangular.views.t21057.prototype.om$core$IRender$render$arity$1 = ((function (map__21056,map__21056__$1,rejected_count,approved_count,app){
return (function (_){
var self__ = this;
var ___$1 = this;
var index = cljs.core.count.call(null,new cljs.core.Keyword(null,"complete","complete",-500388775).cljs$core$IFn$_invoke$arity$1(self__.app));
var total = cljs.core.count.call(null,cljs.core.mapcat.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Keyword(null,"complete","complete",-500388775)], null)));
return React.createElement("div",{"className": "progress-text"},(function (){var attrs21060 = [cljs.core.str(index),cljs.core.str("/"),cljs.core.str(total)].join('');
return cljs.core.apply.call(null,React.createElement,"p",((cljs.core.map_QMARK_.call(null,attrs21060))?sablono.interpreter.attributes.call(null,attrs21060):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs21060))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21060)], null))));
})(),(function (){var attrs21061 = [cljs.core.str(self__.approved_count),cljs.core.str(" approved")].join('');
return cljs.core.apply.call(null,React.createElement,"p",((cljs.core.map_QMARK_.call(null,attrs21061))?sablono.interpreter.attributes.call(null,attrs21061):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs21061))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21061)], null))));
})(),(function (){var attrs21062 = [cljs.core.str(self__.rejected_count),cljs.core.str(" rejected")].join('');
return cljs.core.apply.call(null,React.createElement,"p",((cljs.core.map_QMARK_.call(null,attrs21062))?sablono.interpreter.attributes.call(null,attrs21062):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs21062))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21062)], null))));
})());
});})(map__21056,map__21056__$1,rejected_count,approved_count,app))
;

wrongtangular.views.t21057.prototype.om$core$IDisplayName$ = true;

wrongtangular.views.t21057.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__21056,map__21056__$1,rejected_count,approved_count,app){
return (function (_){
var self__ = this;
var ___$1 = this;
return "ProgressText";
});})(map__21056,map__21056__$1,rejected_count,approved_count,app))
;

wrongtangular.views.t21057.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__21056,map__21056__$1,rejected_count,approved_count,app){
return (function (_21059){
var self__ = this;
var _21059__$1 = this;
return self__.meta21058;
});})(map__21056,map__21056__$1,rejected_count,approved_count,app))
;

wrongtangular.views.t21057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__21056,map__21056__$1,rejected_count,approved_count,app){
return (function (_21059,meta21058__$1){
var self__ = this;
var _21059__$1 = this;
return (new wrongtangular.views.t21057(self__.app,self__.approved_count,self__.rejected_count,self__.map__21056,self__.owner,self__.p__21048,self__.progress_text,meta21058__$1));
});})(map__21056,map__21056__$1,rejected_count,approved_count,app))
;

wrongtangular.views.t21057.cljs$lang$type = true;

wrongtangular.views.t21057.cljs$lang$ctorStr = "wrongtangular.views/t21057";

wrongtangular.views.t21057.cljs$lang$ctorPrWriter = ((function (map__21056,map__21056__$1,rejected_count,approved_count,app){
return (function (this__17184__auto__,writer__17185__auto__,opt__17186__auto__){
return cljs.core._write.call(null,writer__17185__auto__,"wrongtangular.views/t21057");
});})(map__21056,map__21056__$1,rejected_count,approved_count,app))
;

wrongtangular.views.__GT_t21057 = ((function (map__21056,map__21056__$1,rejected_count,approved_count,app){
return (function wrongtangular$views$progress_text_$___GT_t21057(app__$1,approved_count__$1,rejected_count__$1,map__21056__$2,owner__$1,p__21048__$1,progress_text__$1,meta21058){
return (new wrongtangular.views.t21057(app__$1,approved_count__$1,rejected_count__$1,map__21056__$2,owner__$1,p__21048__$1,progress_text__$1,meta21058));
});})(map__21056,map__21056__$1,rejected_count,approved_count,app))
;

}

return (new wrongtangular.views.t21057(app,approved_count,rejected_count,map__21056__$1,owner,p__21048,wrongtangular$views$progress_text,cljs.core.PersistentArrayMap.EMPTY));
});
wrongtangular.views.progress_bar = (function wrongtangular$views$progress_bar(p__21063,owner){
var map__21070 = p__21063;
var map__21070__$1 = ((cljs.core.seq_QMARK_.call(null,map__21070))?cljs.core.apply.call(null,cljs.core.hash_map,map__21070):map__21070);
var rejected_count = cljs.core.get.call(null,map__21070__$1,new cljs.core.Keyword(null,"rejected-count","rejected-count",-1444772852));
var approved_count = cljs.core.get.call(null,map__21070__$1,new cljs.core.Keyword(null,"approved-count","approved-count",1444842616));
var app = cljs.core.get.call(null,map__21070__$1,new cljs.core.Keyword(null,"app","app",-560961707));
if(typeof wrongtangular.views.t21071 !== 'undefined'){
} else {

/**
* @constructor
*/
wrongtangular.views.t21071 = (function (app,approved_count,rejected_count,map__21070,owner,p__21063,progress_bar,meta21072){
this.app = app;
this.approved_count = approved_count;
this.rejected_count = rejected_count;
this.map__21070 = map__21070;
this.owner = owner;
this.p__21063 = p__21063;
this.progress_bar = progress_bar;
this.meta21072 = meta21072;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
wrongtangular.views.t21071.prototype.om$core$IRender$ = true;

wrongtangular.views.t21071.prototype.om$core$IRender$render$arity$1 = ((function (map__21070,map__21070__$1,rejected_count,approved_count,app){
return (function (_){
var self__ = this;
var ___$1 = this;
var index = cljs.core.count.call(null,new cljs.core.Keyword(null,"complete","complete",-500388775).cljs$core$IFn$_invoke$arity$1(self__.app));
var total = cljs.core.count.call(null,cljs.core.mapcat.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Keyword(null,"complete","complete",-500388775)], null)));
var percentage = [cljs.core.str(Math.round.call(null,((index / total) * (100)))),cljs.core.str("%")].join('');
return React.createElement("div",{"className": "progress-bar"},React.createElement("div",{"className": "total"},""),React.createElement("div",{"className": "complete", "style": {"width": percentage}},""));
});})(map__21070,map__21070__$1,rejected_count,approved_count,app))
;

wrongtangular.views.t21071.prototype.om$core$IDisplayName$ = true;

wrongtangular.views.t21071.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__21070,map__21070__$1,rejected_count,approved_count,app){
return (function (_){
var self__ = this;
var ___$1 = this;
return "ProgressBar";
});})(map__21070,map__21070__$1,rejected_count,approved_count,app))
;

wrongtangular.views.t21071.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__21070,map__21070__$1,rejected_count,approved_count,app){
return (function (_21073){
var self__ = this;
var _21073__$1 = this;
return self__.meta21072;
});})(map__21070,map__21070__$1,rejected_count,approved_count,app))
;

wrongtangular.views.t21071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__21070,map__21070__$1,rejected_count,approved_count,app){
return (function (_21073,meta21072__$1){
var self__ = this;
var _21073__$1 = this;
return (new wrongtangular.views.t21071(self__.app,self__.approved_count,self__.rejected_count,self__.map__21070,self__.owner,self__.p__21063,self__.progress_bar,meta21072__$1));
});})(map__21070,map__21070__$1,rejected_count,approved_count,app))
;

wrongtangular.views.t21071.cljs$lang$type = true;

wrongtangular.views.t21071.cljs$lang$ctorStr = "wrongtangular.views/t21071";

wrongtangular.views.t21071.cljs$lang$ctorPrWriter = ((function (map__21070,map__21070__$1,rejected_count,approved_count,app){
return (function (this__17184__auto__,writer__17185__auto__,opt__17186__auto__){
return cljs.core._write.call(null,writer__17185__auto__,"wrongtangular.views/t21071");
});})(map__21070,map__21070__$1,rejected_count,approved_count,app))
;

wrongtangular.views.__GT_t21071 = ((function (map__21070,map__21070__$1,rejected_count,approved_count,app){
return (function wrongtangular$views$progress_bar_$___GT_t21071(app__$1,approved_count__$1,rejected_count__$1,map__21070__$2,owner__$1,p__21063__$1,progress_bar__$1,meta21072){
return (new wrongtangular.views.t21071(app__$1,approved_count__$1,rejected_count__$1,map__21070__$2,owner__$1,p__21063__$1,progress_bar__$1,meta21072));
});})(map__21070,map__21070__$1,rejected_count,approved_count,app))
;

}

return (new wrongtangular.views.t21071(app,approved_count,rejected_count,map__21070__$1,owner,p__21063,wrongtangular$views$progress_bar,cljs.core.PersistentArrayMap.EMPTY));
});
wrongtangular.views.loading = (function wrongtangular$views$loading(owner){
if(typeof wrongtangular.views.t21081 !== 'undefined'){
} else {

/**
* @constructor
*/
wrongtangular.views.t21081 = (function (owner,loading,meta21082){
this.owner = owner;
this.loading = loading;
this.meta21082 = meta21082;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
wrongtangular.views.t21081.prototype.om$core$IRender$ = true;

wrongtangular.views.t21081.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.createElement("div",null,null,"loading...");
});

wrongtangular.views.t21081.prototype.om$core$IDisplayName$ = true;

wrongtangular.views.t21081.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "Loading";
});

wrongtangular.views.t21081.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21083){
var self__ = this;
var _21083__$1 = this;
return self__.meta21082;
});

wrongtangular.views.t21081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21083,meta21082__$1){
var self__ = this;
var _21083__$1 = this;
return (new wrongtangular.views.t21081(self__.owner,self__.loading,meta21082__$1));
});

wrongtangular.views.t21081.cljs$lang$type = true;

wrongtangular.views.t21081.cljs$lang$ctorStr = "wrongtangular.views/t21081";

wrongtangular.views.t21081.cljs$lang$ctorPrWriter = (function (this__17184__auto__,writer__17185__auto__,opt__17186__auto__){
return cljs.core._write.call(null,writer__17185__auto__,"wrongtangular.views/t21081");
});

wrongtangular.views.__GT_t21081 = (function wrongtangular$views$loading_$___GT_t21081(owner__$1,loading__$1,meta21082){
return (new wrongtangular.views.t21081(owner__$1,loading__$1,meta21082));
});

}

return (new wrongtangular.views.t21081(owner,wrongtangular$views$loading,cljs.core.PersistentArrayMap.EMPTY));
});
wrongtangular.views.main = (function wrongtangular$views$main(p__21086,owner){
var map__21100 = p__21086;
var map__21100__$1 = ((cljs.core.seq_QMARK_.call(null,map__21100))?cljs.core.apply.call(null,cljs.core.hash_map,map__21100):map__21100);
var current_id = cljs.core.get.call(null,map__21100__$1,new cljs.core.Keyword(null,"current-id","current-id",210783650));
var app = cljs.core.get.call(null,map__21100__$1,new cljs.core.Keyword(null,"app","app",-560961707));
if(typeof wrongtangular.views.t21101 !== 'undefined'){
} else {

/**
* @constructor
*/
wrongtangular.views.t21101 = (function (app,current_id,map__21100,owner,p__21086,main,meta21102){
this.app = app;
this.current_id = current_id;
this.map__21100 = map__21100;
this.owner = owner;
this.p__21086 = p__21086;
this.main = main;
this.meta21102 = meta21102;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
wrongtangular.views.t21101.prototype.om$core$IRender$ = true;

wrongtangular.views.t21101.prototype.om$core$IRender$render$arity$1 = ((function (map__21100,map__21100__$1,current_id,app){
return (function (_){
var self__ = this;
var ___$1 = this;
var attrs21104 = om.core.build.call(null,wrongtangular.views.progress_bar,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"app","app",-560961707),self__.app,new cljs.core.Keyword(null,"approved-count","approved-count",1444842616),cljs.core.count.call(null,wrongtangular.data.approved_ids.call(null,self__.app)),new cljs.core.Keyword(null,"rejected-count","rejected-count",-1444772852),cljs.core.count.call(null,wrongtangular.data.rejected_ids.call(null,self__.app))], null));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs21104))?sablono.interpreter.attributes.call(null,attrs21104):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs21104))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("div",{"className": "panels"},React.createElement("div",{"className": "left-panel"},React.createElement("h1",null,"Wrongtangular!"),React.createElement("div",{"className": "instructions"},React.createElement("p",null,"asdf to reject!"),React.createElement("p",null,"jkl; to approve!"),React.createElement("p",null,"u to undo!"),React.createElement("p",null,"localStorage.clear() to reset!")),sablono.interpreter.interpret.call(null,om.core.build.call(null,wrongtangular.views.progress_text,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"app","app",-560961707),self__.app,new cljs.core.Keyword(null,"approved-count","approved-count",1444842616),cljs.core.count.call(null,wrongtangular.data.approved_ids.call(null,self__.app)),new cljs.core.Keyword(null,"rejected-count","rejected-count",-1444772852),cljs.core.count.call(null,wrongtangular.data.rejected_ids.call(null,self__.app))], null)))),React.createElement("div",{"className": "right-panel"},sablono.interpreter.interpret.call(null,om.core.build.call(null,wrongtangular.views.tinder,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"image-set","image-set",1881189723),wrongtangular.data.image_set.call(null,self__.app),new cljs.core.Keyword(null,"last-action","last-action",1526677844),wrongtangular.data.last_action.call(null,self__.app),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(self__.app)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"react-key","react-key",1337881348),self__.current_id], null)))))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21104),React.createElement("div",{"className": "panels"},React.createElement("div",{"className": "left-panel"},React.createElement("h1",null,"Wrongtangular!"),React.createElement("div",{"className": "instructions"},React.createElement("p",null,"asdf to reject!"),React.createElement("p",null,"jkl; to approve!"),React.createElement("p",null,"u to undo!"),React.createElement("p",null,"localStorage.clear() to reset!")),sablono.interpreter.interpret.call(null,om.core.build.call(null,wrongtangular.views.progress_text,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"app","app",-560961707),self__.app,new cljs.core.Keyword(null,"approved-count","approved-count",1444842616),cljs.core.count.call(null,wrongtangular.data.approved_ids.call(null,self__.app)),new cljs.core.Keyword(null,"rejected-count","rejected-count",-1444772852),cljs.core.count.call(null,wrongtangular.data.rejected_ids.call(null,self__.app))], null)))),React.createElement("div",{"className": "right-panel"},sablono.interpreter.interpret.call(null,om.core.build.call(null,wrongtangular.views.tinder,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"image-set","image-set",1881189723),wrongtangular.data.image_set.call(null,self__.app),new cljs.core.Keyword(null,"last-action","last-action",1526677844),wrongtangular.data.last_action.call(null,self__.app),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(self__.app)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"react-key","react-key",1337881348),self__.current_id], null)))))], null))));
});})(map__21100,map__21100__$1,current_id,app))
;

wrongtangular.views.t21101.prototype.om$core$IDisplayName$ = true;

wrongtangular.views.t21101.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__21100,map__21100__$1,current_id,app){
return (function (_){
var self__ = this;
var ___$1 = this;
return "Main";
});})(map__21100,map__21100__$1,current_id,app))
;

wrongtangular.views.t21101.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__21100,map__21100__$1,current_id,app){
return (function (_21103){
var self__ = this;
var _21103__$1 = this;
return self__.meta21102;
});})(map__21100,map__21100__$1,current_id,app))
;

wrongtangular.views.t21101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__21100,map__21100__$1,current_id,app){
return (function (_21103,meta21102__$1){
var self__ = this;
var _21103__$1 = this;
return (new wrongtangular.views.t21101(self__.app,self__.current_id,self__.map__21100,self__.owner,self__.p__21086,self__.main,meta21102__$1));
});})(map__21100,map__21100__$1,current_id,app))
;

wrongtangular.views.t21101.cljs$lang$type = true;

wrongtangular.views.t21101.cljs$lang$ctorStr = "wrongtangular.views/t21101";

wrongtangular.views.t21101.cljs$lang$ctorPrWriter = ((function (map__21100,map__21100__$1,current_id,app){
return (function (this__17184__auto__,writer__17185__auto__,opt__17186__auto__){
return cljs.core._write.call(null,writer__17185__auto__,"wrongtangular.views/t21101");
});})(map__21100,map__21100__$1,current_id,app))
;

wrongtangular.views.__GT_t21101 = ((function (map__21100,map__21100__$1,current_id,app){
return (function wrongtangular$views$main_$___GT_t21101(app__$1,current_id__$1,map__21100__$2,owner__$1,p__21086__$1,main__$1,meta21102){
return (new wrongtangular.views.t21101(app__$1,current_id__$1,map__21100__$2,owner__$1,p__21086__$1,main__$1,meta21102));
});})(map__21100,map__21100__$1,current_id,app))
;

}

return (new wrongtangular.views.t21101(app,current_id,map__21100__$1,owner,p__21086,wrongtangular$views$main,cljs.core.PersistentArrayMap.EMPTY));
});
wrongtangular.views.results = (function wrongtangular$views$results(app,owner){
if(typeof wrongtangular.views.t21124 !== 'undefined'){
} else {

/**
* @constructor
*/
wrongtangular.views.t21124 = (function (owner,app,results,meta21125){
this.owner = owner;
this.app = app;
this.results = results;
this.meta21125 = meta21125;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
wrongtangular.views.t21124.prototype.om$core$IRender$ = true;

wrongtangular.views.t21124.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.createElement("div",null,React.createElement("h1",null,"Processing complete!"),React.createElement("p",null,"(to start over, run `localStorage.clear()` in the console and refresh."),React.createElement("h2",null,"Approved ids:"),sablono.interpreter.create_element.call(null,"textarea",{"rows": (20), "cols": (60), "value": clojure.string.join.call(null,", ",wrongtangular.data.approved_ids.call(null,self__.app))}),React.createElement("h2",null,null,"Rejected ids:"),sablono.interpreter.create_element.call(null,"textarea",{"rows": (20), "cols": (60), "value": clojure.string.join.call(null,", ",wrongtangular.data.rejected_ids.call(null,self__.app))}));
});

wrongtangular.views.t21124.prototype.om$core$IDisplayName$ = true;

wrongtangular.views.t21124.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "Results";
});

wrongtangular.views.t21124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21126){
var self__ = this;
var _21126__$1 = this;
return self__.meta21125;
});

wrongtangular.views.t21124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21126,meta21125__$1){
var self__ = this;
var _21126__$1 = this;
return (new wrongtangular.views.t21124(self__.owner,self__.app,self__.results,meta21125__$1));
});

wrongtangular.views.t21124.cljs$lang$type = true;

wrongtangular.views.t21124.cljs$lang$ctorStr = "wrongtangular.views/t21124";

wrongtangular.views.t21124.cljs$lang$ctorPrWriter = (function (this__17184__auto__,writer__17185__auto__,opt__17186__auto__){
return cljs.core._write.call(null,writer__17185__auto__,"wrongtangular.views/t21124");
});

wrongtangular.views.__GT_t21124 = (function wrongtangular$views$results_$___GT_t21124(owner__$1,app__$1,results__$1,meta21125){
return (new wrongtangular.views.t21124(owner__$1,app__$1,results__$1,meta21125));
});

}

return (new wrongtangular.views.t21124(owner,app,wrongtangular$views$results,cljs.core.PersistentArrayMap.EMPTY));
});
wrongtangular.views.root = (function wrongtangular$views$root(app,owner){
if(typeof wrongtangular.views.t21138 !== 'undefined'){
} else {

/**
* @constructor
*/
wrongtangular.views.t21138 = (function (owner,app,root,meta21139){
this.owner = owner;
this.app = app;
this.root = root;
this.meta21139 = meta21139;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
wrongtangular.views.t21138.prototype.om$core$IWillUnmount$ = true;

wrongtangular.views.t21138.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return wrongtangular.input.stop_handling_inputs_BANG_.call(null);
});

wrongtangular.views.t21138.prototype.om$core$IWillMount$ = true;

wrongtangular.views.t21138.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
wrongtangular.data.load_initial_data_BANG_.call(null);

return wrongtangular.input.handle_inputs_BANG_.call(null);
});

wrongtangular.views.t21138.prototype.om$core$IRender$ = true;

wrongtangular.views.t21138.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"ready?","ready?",-105765697).cljs$core$IFn$_invoke$arity$1(self__.app))){
return om.core.build.call(null,wrongtangular.views.loading,self__.app);
} else {
var temp__4404__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.peek.call(null,new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(self__.app)));
if(cljs.core.truth_(temp__4404__auto__)){
var current_id = temp__4404__auto__;
return om.core.build.call(null,wrongtangular.views.main,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"app","app",-560961707),self__.app,new cljs.core.Keyword(null,"current-id","current-id",210783650),current_id], null));
} else {
return om.core.build.call(null,wrongtangular.views.results,self__.app);
}
}
});

wrongtangular.views.t21138.prototype.om$core$IDisplayName$ = true;

wrongtangular.views.t21138.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "Root";
});

wrongtangular.views.t21138.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21140){
var self__ = this;
var _21140__$1 = this;
return self__.meta21139;
});

wrongtangular.views.t21138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21140,meta21139__$1){
var self__ = this;
var _21140__$1 = this;
return (new wrongtangular.views.t21138(self__.owner,self__.app,self__.root,meta21139__$1));
});

wrongtangular.views.t21138.cljs$lang$type = true;

wrongtangular.views.t21138.cljs$lang$ctorStr = "wrongtangular.views/t21138";

wrongtangular.views.t21138.cljs$lang$ctorPrWriter = (function (this__17184__auto__,writer__17185__auto__,opt__17186__auto__){
return cljs.core._write.call(null,writer__17185__auto__,"wrongtangular.views/t21138");
});

wrongtangular.views.__GT_t21138 = (function wrongtangular$views$root_$___GT_t21138(owner__$1,app__$1,root__$1,meta21139){
return (new wrongtangular.views.t21138(owner__$1,app__$1,root__$1,meta21139));
});

}

return (new wrongtangular.views.t21138(owner,app,wrongtangular$views$root,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=views.js.map?rel=1426867234657