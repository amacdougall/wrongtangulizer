// Compiled by ClojureScript 0.0-3126 {}
goog.provide('wrongtangular.data');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('om.core');
goog.require('wrongtangular.util');
wrongtangular.data.assets_url = "data/assets.json";
if(typeof wrongtangular.data.app_state !== 'undefined'){
} else {
wrongtangular.data.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ready?","ready?",-105765697),false,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"forward","forward",-557345303),new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"complete","complete",-500388775),cljs.core.PersistentVector.EMPTY], null));
}
wrongtangular.data.app_cursor = (function wrongtangular$data$app_cursor(){
return om.core.ref_cursor.call(null,om.core.root_cursor.call(null,wrongtangular.data.app_state));
});
wrongtangular.data.image_set = (function wrongtangular$data$image_set(p__20630){
var map__20632 = p__20630;
var map__20632__$1 = ((cljs.core.seq_QMARK_.call(null,map__20632))?cljs.core.apply.call(null,cljs.core.hash_map,map__20632):map__20632);
var complete = cljs.core.get.call(null,map__20632__$1,new cljs.core.Keyword(null,"complete","complete",-500388775));
var queue = cljs.core.get.call(null,map__20632__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(cljs.core.peek.call(null,complete)),cljs.core.peek.call(null,queue),cljs.core.peek.call(null,cljs.core.pop.call(null,queue))], null);
});
wrongtangular.data.approved_ids = (function wrongtangular$data$approved_ids(app){
return cljs.core.map.call(null,(function (p1__20634_SHARP_){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(p1__20634_SHARP_));
}),cljs.core.filter.call(null,(function (p1__20633_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__20633_SHARP_),new cljs.core.Keyword(null,"approved","approved",-803187124));
}),new cljs.core.Keyword(null,"complete","complete",-500388775).cljs$core$IFn$_invoke$arity$1(app)));
});
wrongtangular.data.rejected_ids = (function wrongtangular$data$rejected_ids(app){
return cljs.core.map.call(null,(function (p1__20636_SHARP_){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(p1__20636_SHARP_));
}),cljs.core.filter.call(null,(function (p1__20635_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__20635_SHARP_),new cljs.core.Keyword(null,"rejected","rejected",231052999));
}),new cljs.core.Keyword(null,"complete","complete",-500388775).cljs$core$IFn$_invoke$arity$1(app)));
});
wrongtangular.data.last_action = (function wrongtangular$data$last_action(app){
return new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.peek.call(null,new cljs.core.Keyword(null,"complete","complete",-500388775).cljs$core$IFn$_invoke$arity$1(app)));
});
wrongtangular.data.store_in_records_BANG_ = (function wrongtangular$data$store_in_records_BANG_(complete){
var dehydrate = (function (entry){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(entry),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(entry))], null);
});
return wrongtangular.util.store_BANG_.call(null,new cljs.core.Keyword(null,"records","records",1326822832),cljs.core.mapv.call(null,dehydrate,complete));
});
wrongtangular.data.restore_from_records = (function wrongtangular$data$restore_from_records(data){
var temp__4404__auto__ = wrongtangular.util.fetch.call(null,new cljs.core.Keyword(null,"records","records",1326822832));
if(cljs.core.truth_(temp__4404__auto__)){
var records = temp__4404__auto__;
var has_id = ((function (records,temp__4404__auto__){
return (function (id){
return ((function (records,temp__4404__auto__){
return (function (p1__20637_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__20637_SHARP_),id);
});
;})(records,temp__4404__auto__))
});})(records,temp__4404__auto__))
;
var find_by_id = ((function (has_id,records,temp__4404__auto__){
return (function (id,data__$1){
return cljs.core.first.call(null,cljs.core.filter.call(null,has_id.call(null,id),data__$1));
});})(has_id,records,temp__4404__auto__))
;
var rehydrate = ((function (has_id,find_by_id,records,temp__4404__auto__){
return (function (p__20642){
var vec__20643 = p__20642;
var status = cljs.core.nth.call(null,vec__20643,(0),null);
var id = cljs.core.nth.call(null,vec__20643,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.keyword.call(null,status),new cljs.core.Keyword(null,"item","item",249373802),find_by_id.call(null,id,data)], null);
});})(has_id,find_by_id,records,temp__4404__auto__))
;
var complete = cljs.core.mapv.call(null,rehydrate,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),records));
var completed_ids = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,((function (has_id,find_by_id,rehydrate,complete,records,temp__4404__auto__){
return (function (p1__20638_SHARP_){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(p1__20638_SHARP_));
});})(has_id,find_by_id,rehydrate,complete,records,temp__4404__auto__))
),complete);
var queue = cljs.core.into.call(null,cljs.core.List.EMPTY,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.remove.call(null,((function (has_id,find_by_id,rehydrate,complete,completed_ids,records,temp__4404__auto__){
return (function (p1__20639_SHARP_){
return completed_ids.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__20639_SHARP_));
});})(has_id,find_by_id,rehydrate,complete,completed_ids,records,temp__4404__auto__))
,data)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [queue,complete], null);
} else {
return null;
}
});
wrongtangular.data.advance_BANG_ = (function wrongtangular$data$advance_BANG_(result,app){
var map__20645 = app;
var map__20645__$1 = ((cljs.core.seq_QMARK_.call(null,map__20645))?cljs.core.apply.call(null,cljs.core.hash_map,map__20645):map__20645);
var complete = cljs.core.get.call(null,map__20645__$1,new cljs.core.Keyword(null,"complete","complete",-500388775));
var queue = cljs.core.get.call(null,map__20645__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var complete__$1 = cljs.core.conj.call(null,complete,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),result,new cljs.core.Keyword(null,"item","item",249373802),cljs.core.peek.call(null,queue)], null));
var queue__$1 = cljs.core.pop.call(null,queue);
wrongtangular.data.store_in_records_BANG_.call(null,complete__$1);

return cljs.core.assoc.call(null,app,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"forward","forward",-557345303),new cljs.core.Keyword(null,"queue","queue",1455835879),queue__$1,new cljs.core.Keyword(null,"complete","complete",-500388775),complete__$1);
});
wrongtangular.data.approve_BANG_ = (function wrongtangular$data$approve_BANG_(){
return om.core.transact_BANG_.call(null,wrongtangular.data.app_cursor.call(null),cljs.core.partial.call(null,wrongtangular.data.advance_BANG_,new cljs.core.Keyword(null,"approved","approved",-803187124)));
});
wrongtangular.data.reject_BANG_ = (function wrongtangular$data$reject_BANG_(){
return om.core.transact_BANG_.call(null,wrongtangular.data.app_cursor.call(null),cljs.core.partial.call(null,wrongtangular.data.advance_BANG_,new cljs.core.Keyword(null,"rejected","rejected",231052999)));
});
wrongtangular.data.undo_BANG_ = (function wrongtangular$data$undo_BANG_(){
if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"complete","complete",-500388775).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,wrongtangular.data.app_state)))){
return null;
} else {
return om.core.transact_BANG_.call(null,wrongtangular.data.app_cursor.call(null),(function (p__20648){
var map__20649 = p__20648;
var map__20649__$1 = ((cljs.core.seq_QMARK_.call(null,map__20649))?cljs.core.apply.call(null,cljs.core.hash_map,map__20649):map__20649);
var app = map__20649__$1;
var complete = cljs.core.get.call(null,map__20649__$1,new cljs.core.Keyword(null,"complete","complete",-500388775));
var queue = cljs.core.get.call(null,map__20649__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var queue__$1 = cljs.core.conj.call(null,queue,new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(cljs.core.peek.call(null,complete)));
var complete__$1 = cljs.core.pop.call(null,complete);
wrongtangular.data.store_in_records_BANG_.call(null,complete__$1);

return cljs.core.assoc.call(null,app,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"backward","backward",554036364),new cljs.core.Keyword(null,"queue","queue",1455835879),queue__$1,new cljs.core.Keyword(null,"complete","complete",-500388775),complete__$1);
}));
}
});
wrongtangular.data.load_initial_data_BANG_ = (function wrongtangular$data$load_initial_data_BANG_(){
var c__18544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18544__auto__){
return (function (){
var f__18545__auto__ = (function (){var switch__18523__auto__ = ((function (c__18544__auto__){
return (function (state_20702){
var state_val_20703 = (state_20702[(1)]);
if((state_val_20703 === (5))){
var inst_20700 = (state_20702[(2)]);
var state_20702__$1 = state_20702;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20702__$1,inst_20700);
} else {
if((state_val_20703 === (4))){
var inst_20686 = (state_20702[(7)]);
var inst_20687 = (state_20702[(8)]);
var inst_20696 = wrongtangular.data.app_cursor.call(null);
var inst_20697 = (function (){var temp__4404__auto__ = inst_20687;
var data = inst_20686;
return ((function (temp__4404__auto__,data,inst_20686,inst_20687,inst_20696,state_val_20703,c__18544__auto__){
return (function (app){
return cljs.core.assoc.call(null,app,new cljs.core.Keyword(null,"ready?","ready?",-105765697),true,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.into.call(null,cljs.core.List.EMPTY,data));
});
;})(temp__4404__auto__,data,inst_20686,inst_20687,inst_20696,state_val_20703,c__18544__auto__))
})();
var inst_20698 = om.core.transact_BANG_.call(null,inst_20696,inst_20697);
var state_20702__$1 = state_20702;
var statearr_20704_20716 = state_20702__$1;
(statearr_20704_20716[(2)] = inst_20698);

(statearr_20704_20716[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20703 === (3))){
var inst_20686 = (state_20702[(7)]);
var inst_20687 = (state_20702[(8)]);
var inst_20690 = cljs.core.nth.call(null,inst_20687,(0),null);
var inst_20691 = cljs.core.nth.call(null,inst_20687,(1),null);
var inst_20692 = wrongtangular.data.app_cursor.call(null);
var inst_20693 = (function (){var complete = inst_20691;
var queue = inst_20690;
var vec__20689 = inst_20687;
var temp__4404__auto__ = inst_20687;
var data = inst_20686;
return ((function (complete,queue,vec__20689,temp__4404__auto__,data,inst_20686,inst_20687,inst_20690,inst_20691,inst_20692,state_val_20703,c__18544__auto__){
return (function (app){
return cljs.core.assoc.call(null,app,new cljs.core.Keyword(null,"ready?","ready?",-105765697),true,new cljs.core.Keyword(null,"queue","queue",1455835879),queue,new cljs.core.Keyword(null,"complete","complete",-500388775),complete);
});
;})(complete,queue,vec__20689,temp__4404__auto__,data,inst_20686,inst_20687,inst_20690,inst_20691,inst_20692,state_val_20703,c__18544__auto__))
})();
var inst_20694 = om.core.transact_BANG_.call(null,inst_20692,inst_20693);
var state_20702__$1 = state_20702;
var statearr_20705_20717 = state_20702__$1;
(statearr_20705_20717[(2)] = inst_20694);

(statearr_20705_20717[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20703 === (2))){
var inst_20686 = (state_20702[(7)]);
var inst_20687 = (state_20702[(8)]);
var inst_20685 = (state_20702[(2)]);
var inst_20686__$1 = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),inst_20685);
var inst_20687__$1 = wrongtangular.data.restore_from_records.call(null,inst_20686__$1);
var state_20702__$1 = (function (){var statearr_20706 = state_20702;
(statearr_20706[(7)] = inst_20686__$1);

(statearr_20706[(8)] = inst_20687__$1);

return statearr_20706;
})();
if(cljs.core.truth_(inst_20687__$1)){
var statearr_20707_20718 = state_20702__$1;
(statearr_20707_20718[(1)] = (3));

} else {
var statearr_20708_20719 = state_20702__$1;
(statearr_20708_20719[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20703 === (1))){
var inst_20683 = wrongtangular.util.get_json.call(null,wrongtangular.data.assets_url);
var state_20702__$1 = state_20702;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20702__$1,(2),inst_20683);
} else {
return null;
}
}
}
}
}
});})(c__18544__auto__))
;
return ((function (switch__18523__auto__,c__18544__auto__){
return (function() {
var wrongtangular$data$load_initial_data_BANG__$_state_machine__18524__auto__ = null;
var wrongtangular$data$load_initial_data_BANG__$_state_machine__18524__auto____0 = (function (){
var statearr_20712 = [null,null,null,null,null,null,null,null,null];
(statearr_20712[(0)] = wrongtangular$data$load_initial_data_BANG__$_state_machine__18524__auto__);

(statearr_20712[(1)] = (1));

return statearr_20712;
});
var wrongtangular$data$load_initial_data_BANG__$_state_machine__18524__auto____1 = (function (state_20702){
while(true){
var ret_value__18525__auto__ = (function (){try{while(true){
var result__18526__auto__ = switch__18523__auto__.call(null,state_20702);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18526__auto__;
}
break;
}
}catch (e20713){if((e20713 instanceof Object)){
var ex__18527__auto__ = e20713;
var statearr_20714_20720 = state_20702;
(statearr_20714_20720[(5)] = ex__18527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20721 = state_20702;
state_20702 = G__20721;
continue;
} else {
return ret_value__18525__auto__;
}
break;
}
});
wrongtangular$data$load_initial_data_BANG__$_state_machine__18524__auto__ = function(state_20702){
switch(arguments.length){
case 0:
return wrongtangular$data$load_initial_data_BANG__$_state_machine__18524__auto____0.call(this);
case 1:
return wrongtangular$data$load_initial_data_BANG__$_state_machine__18524__auto____1.call(this,state_20702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
wrongtangular$data$load_initial_data_BANG__$_state_machine__18524__auto__.cljs$core$IFn$_invoke$arity$0 = wrongtangular$data$load_initial_data_BANG__$_state_machine__18524__auto____0;
wrongtangular$data$load_initial_data_BANG__$_state_machine__18524__auto__.cljs$core$IFn$_invoke$arity$1 = wrongtangular$data$load_initial_data_BANG__$_state_machine__18524__auto____1;
return wrongtangular$data$load_initial_data_BANG__$_state_machine__18524__auto__;
})()
;})(switch__18523__auto__,c__18544__auto__))
})();
var state__18546__auto__ = (function (){var statearr_20715 = f__18545__auto__.call(null);
(statearr_20715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18544__auto__);

return statearr_20715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18546__auto__);
});})(c__18544__auto__))
);

return c__18544__auto__;
});

//# sourceMappingURL=data.js.map?rel=1426867234389