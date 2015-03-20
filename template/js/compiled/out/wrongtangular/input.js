// Compiled by ClojureScript 0.0-3126 {}
goog.provide('wrongtangular.input');
goog.require('cljs.core');
goog.require('goog.events.EventType');
goog.require('goog.events');
goog.require('cljs.core.async');
goog.require('wrongtangular.data');
wrongtangular.input.approve_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(74),null,(186),null,(75),null,(76),null], null), null);
wrongtangular.input.reject_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(65),null,(70),null,(68),null,(83),null], null), null);
wrongtangular.input.undo_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(85),null], null), null);
wrongtangular.input.keystrokes__GT_actions = (function wrongtangular$input$keystrokes__GT_actions(in$){
var out = cljs.core.async.chan.call(null);
var c__18544__auto___20832 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18544__auto___20832,out){
return (function (){
var f__18545__auto__ = (function (){var switch__18523__auto__ = ((function (c__18544__auto___20832,out){
return (function (state_20807){
var state_val_20808 = (state_20807[(1)]);
if((state_val_20808 === (7))){
var inst_20802 = (state_20807[(2)]);
var state_20807__$1 = (function (){var statearr_20809 = state_20807;
(statearr_20809[(7)] = inst_20802);

return statearr_20809;
})();
var statearr_20810_20833 = state_20807__$1;
(statearr_20810_20833[(2)] = null);

(statearr_20810_20833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20808 === (1))){
var state_20807__$1 = state_20807;
var statearr_20811_20834 = state_20807__$1;
(statearr_20811_20834[(2)] = null);

(statearr_20811_20834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20808 === (4))){
var inst_20781 = (state_20807[(8)]);
var inst_20780 = (state_20807[(2)]);
var inst_20781__$1 = inst_20780.keyCode;
var inst_20782 = wrongtangular.input.approve_keys.call(null,inst_20781__$1);
var state_20807__$1 = (function (){var statearr_20812 = state_20807;
(statearr_20812[(8)] = inst_20781__$1);

return statearr_20812;
})();
if(cljs.core.truth_(inst_20782)){
var statearr_20813_20835 = state_20807__$1;
(statearr_20813_20835[(1)] = (5));

} else {
var statearr_20814_20836 = state_20807__$1;
(statearr_20814_20836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20808 === (15))){
var inst_20798 = (state_20807[(2)]);
var state_20807__$1 = state_20807;
var statearr_20815_20837 = state_20807__$1;
(statearr_20815_20837[(2)] = inst_20798);

(statearr_20815_20837[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20808 === (13))){
var state_20807__$1 = state_20807;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20807__$1,(16),out,new cljs.core.Keyword(null,"undo","undo",-1818036302));
} else {
if((state_val_20808 === (6))){
var inst_20781 = (state_20807[(8)]);
var inst_20787 = wrongtangular.input.reject_keys.call(null,inst_20781);
var state_20807__$1 = state_20807;
if(cljs.core.truth_(inst_20787)){
var statearr_20816_20838 = state_20807__$1;
(statearr_20816_20838[(1)] = (9));

} else {
var statearr_20817_20839 = state_20807__$1;
(statearr_20817_20839[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20808 === (3))){
var inst_20805 = (state_20807[(2)]);
var state_20807__$1 = state_20807;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20807__$1,inst_20805);
} else {
if((state_val_20808 === (12))){
var inst_20790 = (state_20807[(2)]);
var state_20807__$1 = state_20807;
var statearr_20818_20840 = state_20807__$1;
(statearr_20818_20840[(2)] = inst_20790);

(statearr_20818_20840[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20808 === (2))){
var state_20807__$1 = state_20807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20807__$1,(4),in$);
} else {
if((state_val_20808 === (11))){
var inst_20800 = (state_20807[(2)]);
var state_20807__$1 = state_20807;
var statearr_20819_20841 = state_20807__$1;
(statearr_20819_20841[(2)] = inst_20800);

(statearr_20819_20841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20808 === (9))){
var state_20807__$1 = state_20807;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20807__$1,(12),out,new cljs.core.Keyword(null,"reject","reject",1415953113));
} else {
if((state_val_20808 === (5))){
var state_20807__$1 = state_20807;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20807__$1,(8),out,new cljs.core.Keyword(null,"approve","approve",784812935));
} else {
if((state_val_20808 === (14))){
var state_20807__$1 = state_20807;
var statearr_20820_20842 = state_20807__$1;
(statearr_20820_20842[(2)] = null);

(statearr_20820_20842[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20808 === (16))){
var inst_20795 = (state_20807[(2)]);
var state_20807__$1 = state_20807;
var statearr_20821_20843 = state_20807__$1;
(statearr_20821_20843[(2)] = inst_20795);

(statearr_20821_20843[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20808 === (10))){
var inst_20781 = (state_20807[(8)]);
var inst_20792 = wrongtangular.input.undo_keys.call(null,inst_20781);
var state_20807__$1 = state_20807;
if(cljs.core.truth_(inst_20792)){
var statearr_20822_20844 = state_20807__$1;
(statearr_20822_20844[(1)] = (13));

} else {
var statearr_20823_20845 = state_20807__$1;
(statearr_20823_20845[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20808 === (8))){
var inst_20785 = (state_20807[(2)]);
var state_20807__$1 = state_20807;
var statearr_20824_20846 = state_20807__$1;
(statearr_20824_20846[(2)] = inst_20785);

(statearr_20824_20846[(1)] = (7));


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
});})(c__18544__auto___20832,out))
;
return ((function (switch__18523__auto__,c__18544__auto___20832,out){
return (function() {
var wrongtangular$input$keystrokes__GT_actions_$_state_machine__18524__auto__ = null;
var wrongtangular$input$keystrokes__GT_actions_$_state_machine__18524__auto____0 = (function (){
var statearr_20828 = [null,null,null,null,null,null,null,null,null];
(statearr_20828[(0)] = wrongtangular$input$keystrokes__GT_actions_$_state_machine__18524__auto__);

(statearr_20828[(1)] = (1));

return statearr_20828;
});
var wrongtangular$input$keystrokes__GT_actions_$_state_machine__18524__auto____1 = (function (state_20807){
while(true){
var ret_value__18525__auto__ = (function (){try{while(true){
var result__18526__auto__ = switch__18523__auto__.call(null,state_20807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18526__auto__;
}
break;
}
}catch (e20829){if((e20829 instanceof Object)){
var ex__18527__auto__ = e20829;
var statearr_20830_20847 = state_20807;
(statearr_20830_20847[(5)] = ex__18527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20848 = state_20807;
state_20807 = G__20848;
continue;
} else {
return ret_value__18525__auto__;
}
break;
}
});
wrongtangular$input$keystrokes__GT_actions_$_state_machine__18524__auto__ = function(state_20807){
switch(arguments.length){
case 0:
return wrongtangular$input$keystrokes__GT_actions_$_state_machine__18524__auto____0.call(this);
case 1:
return wrongtangular$input$keystrokes__GT_actions_$_state_machine__18524__auto____1.call(this,state_20807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
wrongtangular$input$keystrokes__GT_actions_$_state_machine__18524__auto__.cljs$core$IFn$_invoke$arity$0 = wrongtangular$input$keystrokes__GT_actions_$_state_machine__18524__auto____0;
wrongtangular$input$keystrokes__GT_actions_$_state_machine__18524__auto__.cljs$core$IFn$_invoke$arity$1 = wrongtangular$input$keystrokes__GT_actions_$_state_machine__18524__auto____1;
return wrongtangular$input$keystrokes__GT_actions_$_state_machine__18524__auto__;
})()
;})(switch__18523__auto__,c__18544__auto___20832,out))
})();
var state__18546__auto__ = (function (){var statearr_20831 = f__18545__auto__.call(null);
(statearr_20831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18544__auto___20832);

return statearr_20831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18546__auto__);
});})(c__18544__auto___20832,out))
);


return out;
});
var body_20978 = document.body;
var keystrokes_20979 = cljs.core.async.chan.call(null);
var handle_event_20980 = ((function (body_20978,keystrokes_20979){
return (function (p1__20849_SHARP_){
return cljs.core.async.put_BANG_.call(null,keystrokes_20979,p1__20849_SHARP_);
});})(body_20978,keystrokes_20979))
;
var inputs_20981 = wrongtangular.input.keystrokes__GT_actions.call(null,keystrokes_20979);
wrongtangular.input.handle_inputs_BANG_ = ((function (body_20978,keystrokes_20979,handle_event_20980,inputs_20981){
return (function wrongtangular$input$handle_inputs_BANG_(){
goog.events.listen(body_20978,goog.events.EventType.KEYDOWN,handle_event_20980);

var c__18544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18544__auto__,body_20978,keystrokes_20979,handle_event_20980,inputs_20981){
return (function (){
var f__18545__auto__ = (function (){var switch__18523__auto__ = ((function (c__18544__auto__,body_20978,keystrokes_20979,handle_event_20980,inputs_20981){
return (function (state_20949){
var state_val_20950 = (state_20949[(1)]);
if((state_val_20950 === (7))){
var inst_20945 = (state_20949[(2)]);
var state_20949__$1 = state_20949;
var statearr_20951_20982 = state_20949__$1;
(statearr_20951_20982[(2)] = inst_20945);

(statearr_20951_20982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20950 === (1))){
var state_20949__$1 = state_20949;
var statearr_20952_20983 = state_20949__$1;
(statearr_20952_20983[(2)] = null);

(statearr_20952_20983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20950 === (4))){
var inst_20916 = (state_20949[(7)]);
var inst_20916__$1 = (state_20949[(2)]);
var state_20949__$1 = (function (){var statearr_20953 = state_20949;
(statearr_20953[(7)] = inst_20916__$1);

return statearr_20953;
})();
if(cljs.core.truth_(inst_20916__$1)){
var statearr_20954_20984 = state_20949__$1;
(statearr_20954_20984[(1)] = (5));

} else {
var statearr_20955_20985 = state_20949__$1;
(statearr_20955_20985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20950 === (15))){
var inst_20916 = (state_20949[(7)]);
var inst_20933 = [cljs.core.str("No matching clause: "),cljs.core.str(inst_20916)].join('');
var inst_20934 = (new Error(inst_20933));
var inst_20935 = (function(){throw inst_20934})();
var state_20949__$1 = state_20949;
var statearr_20956_20986 = state_20949__$1;
(statearr_20956_20986[(2)] = inst_20935);

(statearr_20956_20986[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20950 === (13))){
var inst_20939 = (state_20949[(2)]);
var state_20949__$1 = state_20949;
var statearr_20957_20987 = state_20949__$1;
(statearr_20957_20987[(2)] = inst_20939);

(statearr_20957_20987[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20950 === (6))){
var state_20949__$1 = state_20949;
var statearr_20958_20988 = state_20949__$1;
(statearr_20958_20988[(2)] = null);

(statearr_20958_20988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20950 === (3))){
var inst_20947 = (state_20949[(2)]);
var state_20949__$1 = state_20949;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20949__$1,inst_20947);
} else {
if((state_val_20950 === (12))){
var inst_20916 = (state_20949[(7)]);
var inst_20929 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"undo","undo",-1818036302),inst_20916);
var state_20949__$1 = state_20949;
if(inst_20929){
var statearr_20959_20989 = state_20949__$1;
(statearr_20959_20989[(1)] = (14));

} else {
var statearr_20960_20990 = state_20949__$1;
(statearr_20960_20990[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20950 === (2))){
var state_20949__$1 = state_20949;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20949__$1,(4),inputs_20981);
} else {
if((state_val_20950 === (11))){
var inst_20927 = wrongtangular.data.reject_BANG_.call(null);
var state_20949__$1 = state_20949;
var statearr_20961_20991 = state_20949__$1;
(statearr_20961_20991[(2)] = inst_20927);

(statearr_20961_20991[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20950 === (9))){
var inst_20916 = (state_20949[(7)]);
var inst_20925 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"reject","reject",1415953113),inst_20916);
var state_20949__$1 = state_20949;
if(inst_20925){
var statearr_20962_20992 = state_20949__$1;
(statearr_20962_20992[(1)] = (11));

} else {
var statearr_20963_20993 = state_20949__$1;
(statearr_20963_20993[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20950 === (5))){
var inst_20916 = (state_20949[(7)]);
var inst_20921 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"approve","approve",784812935),inst_20916);
var state_20949__$1 = state_20949;
if(inst_20921){
var statearr_20964_20994 = state_20949__$1;
(statearr_20964_20994[(1)] = (8));

} else {
var statearr_20965_20995 = state_20949__$1;
(statearr_20965_20995[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20950 === (14))){
var inst_20931 = wrongtangular.data.undo_BANG_.call(null);
var state_20949__$1 = state_20949;
var statearr_20966_20996 = state_20949__$1;
(statearr_20966_20996[(2)] = inst_20931);

(statearr_20966_20996[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20950 === (16))){
var inst_20937 = (state_20949[(2)]);
var state_20949__$1 = state_20949;
var statearr_20967_20997 = state_20949__$1;
(statearr_20967_20997[(2)] = inst_20937);

(statearr_20967_20997[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20950 === (10))){
var inst_20941 = (state_20949[(2)]);
var state_20949__$1 = (function (){var statearr_20968 = state_20949;
(statearr_20968[(8)] = inst_20941);

return statearr_20968;
})();
var statearr_20969_20998 = state_20949__$1;
(statearr_20969_20998[(2)] = null);

(statearr_20969_20998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20950 === (8))){
var inst_20923 = wrongtangular.data.approve_BANG_.call(null);
var state_20949__$1 = state_20949;
var statearr_20970_20999 = state_20949__$1;
(statearr_20970_20999[(2)] = inst_20923);

(statearr_20970_20999[(1)] = (10));


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
});})(c__18544__auto__,body_20978,keystrokes_20979,handle_event_20980,inputs_20981))
;
return ((function (switch__18523__auto__,c__18544__auto__,body_20978,keystrokes_20979,handle_event_20980,inputs_20981){
return (function() {
var wrongtangular$input$handle_inputs_BANG__$_state_machine__18524__auto__ = null;
var wrongtangular$input$handle_inputs_BANG__$_state_machine__18524__auto____0 = (function (){
var statearr_20974 = [null,null,null,null,null,null,null,null,null];
(statearr_20974[(0)] = wrongtangular$input$handle_inputs_BANG__$_state_machine__18524__auto__);

(statearr_20974[(1)] = (1));

return statearr_20974;
});
var wrongtangular$input$handle_inputs_BANG__$_state_machine__18524__auto____1 = (function (state_20949){
while(true){
var ret_value__18525__auto__ = (function (){try{while(true){
var result__18526__auto__ = switch__18523__auto__.call(null,state_20949);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18526__auto__;
}
break;
}
}catch (e20975){if((e20975 instanceof Object)){
var ex__18527__auto__ = e20975;
var statearr_20976_21000 = state_20949;
(statearr_20976_21000[(5)] = ex__18527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21001 = state_20949;
state_20949 = G__21001;
continue;
} else {
return ret_value__18525__auto__;
}
break;
}
});
wrongtangular$input$handle_inputs_BANG__$_state_machine__18524__auto__ = function(state_20949){
switch(arguments.length){
case 0:
return wrongtangular$input$handle_inputs_BANG__$_state_machine__18524__auto____0.call(this);
case 1:
return wrongtangular$input$handle_inputs_BANG__$_state_machine__18524__auto____1.call(this,state_20949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
wrongtangular$input$handle_inputs_BANG__$_state_machine__18524__auto__.cljs$core$IFn$_invoke$arity$0 = wrongtangular$input$handle_inputs_BANG__$_state_machine__18524__auto____0;
wrongtangular$input$handle_inputs_BANG__$_state_machine__18524__auto__.cljs$core$IFn$_invoke$arity$1 = wrongtangular$input$handle_inputs_BANG__$_state_machine__18524__auto____1;
return wrongtangular$input$handle_inputs_BANG__$_state_machine__18524__auto__;
})()
;})(switch__18523__auto__,c__18544__auto__,body_20978,keystrokes_20979,handle_event_20980,inputs_20981))
})();
var state__18546__auto__ = (function (){var statearr_20977 = f__18545__auto__.call(null);
(statearr_20977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18544__auto__);

return statearr_20977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18546__auto__);
});})(c__18544__auto__,body_20978,keystrokes_20979,handle_event_20980,inputs_20981))
);

return c__18544__auto__;
});})(body_20978,keystrokes_20979,handle_event_20980,inputs_20981))
;

wrongtangular.input.stop_handling_inputs_BANG_ = ((function (body_20978,keystrokes_20979,handle_event_20980,inputs_20981){
return (function wrongtangular$input$stop_handling_inputs_BANG_(){
goog.events.unlisten(body_20978,goog.events.EventType.KEYDOWN,handle_event_20980);

return cljs.core.async.close_BANG_.call(null,inputs_20981);
});})(body_20978,keystrokes_20979,handle_event_20980,inputs_20981))
;

//# sourceMappingURL=input.js.map?rel=1426867234478