(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-356253bc"],{"00b2":function(e,t,c){},"900a":function(e,t,c){"use strict";c("00b2")},fd3f:function(e,t,c){"use strict";c.r(t);var n=c("7a23"),o=c("7ed9"),r=c("fd2d"),l=function(e){return Object(n["pushScopeId"])("data-v-5ffdee37"),e=e(),Object(n["popScopeId"])(),e},a={class:"home"},u={class:"posts"},i={key:0,class:"loading"},b=l((function(){return Object(n["createElementVNode"])("i",{class:"pi pi-spin pi-spinner",style:{"font-size":"2rem"}},null,-1)})),s=[b],j={key:1,class:"error"},O={class:"container grid"},f={setup:function(e){var t='*[_type == "post"]{\n  _id,\n  title,\n  slug,\n  excerpt\n}[0...50]',c=Object(n["ref"])([]),l=Object(n["ref"])(!0),b=Object(n["ref"])(null);return Object(n["onMounted"])((function(){var e=function(){l=!0,o["a"].fetch(t).then((function(e){l=!1,c.value=e}),(function(e){b.value=e}))};e()})),function(e,t){var o=Object(n["resolveComponent"])("router-link");return Object(n["openBlock"])(),Object(n["createElementBlock"])("main",a,[Object(n["createElementVNode"])("article",u,[Object(n["unref"])(l).value?(Object(n["openBlock"])(),Object(n["createElementBlock"])("section",i,s)):Object(n["createCommentVNode"])("",!0),Object(n["unref"])(b)?(Object(n["openBlock"])(),Object(n["createElementBlock"])("section",j,Object(n["toDisplayString"])(Object(n["unref"])(b)),1)):Object(n["createCommentVNode"])("",!0),Object(n["createElementVNode"])("section",O,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(Object(n["unref"])(c),(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{class:"post-item col",key:e._id},[Object(n["createVNode"])(o,{to:"/blog/".concat(e.slug.current)},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("h2",null,Object(n["toDisplayString"])(e.title),1),Object(n["createElementVNode"])("p",null,Object(n["toDisplayString"])(e.excerpt),1)]})),_:2},1032,["to"])])})),128))])]),Object(n["createElementVNode"])("footer",null,[Object(n["createVNode"])(Object(n["unref"])(r["a"]))])])}}},p=(c("900a"),c("6b0d")),d=c.n(p);const m=d()(f,[["__scopeId","data-v-5ffdee37"]]);var k=m,v={setup:function(e){return function(e,t){return Object(n["openBlock"])(),Object(n["createBlock"])(k)}}};const B=v;t["default"]=B}}]);
//# sourceMappingURL=chunk-356253bc.979da4ca.js.map