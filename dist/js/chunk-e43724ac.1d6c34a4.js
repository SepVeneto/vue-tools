(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e43724ac"],{"0109":function(e,t,n){"use strict";n("0439")},"0439":function(e,t,n){},1711:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:e.tag}},[n("div",{staticClass:"title"},[n("a",{attrs:{href:"#"+e.tag}},[e._v("#")]),n("span",[e._v(e._s(e.title))])]),n("div",{staticClass:"desc"},[e._v(e._s(e.desc))]),n("div",{staticClass:"area"},[n("div",{staticClass:"demo"},[e._t("default")],2),n("div",{staticClass:"code"},[n("transition",{attrs:{name:"collapse"},on:{"before-enter":e.handleBeforeEnter,enter:e.handleEnter,"before-leave":e.handleBeforeLeave,leave:e.handleLeave}},[n("pre",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}]},[n("code",{ref:"codeRef",staticClass:"html hljs xml"},[e._v(e._s(e.code))])])])],1),n("div",{class:["operate-button",{"is-show":e.show}]},[n("bc-button",{attrs:{type:"text"},on:{click:e.handleClick}},[e._v(e._s(e.show?"收起":"展开")+"代码")])],1)])])},c=[],a=n("1020"),o=n.n(a),i={name:"codeCard",props:{title:String,code:String,desc:String,tag:String},computed:{codes:function(){var e=this.$refs.codeRef;if(e){var t=o.a.highlightBlock(this.$refs.codeRef);return t}return""}},data:function(){return{show:!1}},created:function(){},mounted:function(){},methods:{handleLeave:function(e){e.style.height=0},handleBeforeLeave:function(e){e.style.height=e.scrollHeight+"px"},handleEnter:function(e){e.style.height=e.scrollHeight+"px"},handleBeforeEnter:function(e){e.style.height=0},handleClick:function(){var e=this;this.show=!this.show,this.$nextTick().then((function(){var t=e.$refs.codeRef;if(t){var n=o.a.highlightElement(e.$refs.codeRef);return n}return""}))}}},s=i,l=(n("ffe6"),n("0c7c")),u=Object(l["a"])(s,r,c,!1,null,"02e3b1ec",null);t["a"]=u.exports},"466d":function(e,t,n){"use strict";var r=n("d784"),c=n("825a"),a=n("50c4"),o=n("1d80"),i=n("8aa5"),s=n("14c3");r("match",1,(function(e,t,n){return[function(t){var n=o(this),r=void 0==t?void 0:t[e];return void 0!==r?r.call(t,n):new RegExp(t)[e](String(n))},function(e){var r=n(t,e,this);if(r.done)return r.value;var o=c(e),l=String(this);if(!o.global)return s(o,l);var u=o.unicode;o.lastIndex=0;var d,f=[],h=0;while(null!==(d=s(o,l))){var p=String(d[0]);f[h]=p,""===p&&(o.lastIndex=i(l,a(o.lastIndex),u)),h++}return 0===h?null:f}]}))},"63cb":function(e,t,n){},befa:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("aside",{staticClass:"aside"},[n("ul",e._l(e.menus,(function(t){return n("li",{key:t.prop,class:["menu-link"],on:{click:function(n){return e.handleClick(t.prop)}}},[e._v(e._s(t.name))])})),0)])},c=[],a=(n("ac1f"),n("466d"),{name:"asideMenu",props:{menus:{type:Array,default:function(){return[]}}},mounted:function(){this.goAnchor()},methods:{goAnchor:function(){if(location.href.match(/#/g).length>1){var e=location.href.match(/#[^#]+$/);if(!e)return;var t=document.querySelector(e[0]);if(!t)return;setTimeout((function(){document.querySelector("html").scrollTop=t.offsetTop}))}},handleClick:function(e){var t=document.querySelector("#".concat(e)),n=this.$router.resolve("#".concat(e)),r=n.location;this.$router.push(r),t.scrollIntoView({behavior:"smooth"})}}}),o=a,i=(n("0109"),n("0c7c")),s=Object(i["a"])(o,r,c,!1,null,"18dcd0cd",null);t["a"]=s.exports},bf72:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"wrapper"},[n("aside-menu",{attrs:{menus:e.config}}),n("main",e._l(e.asides,(function(e){return n(e.prop,{key:e.prop,tag:"component",staticClass:"container"})})),1)],1)},c=[],a=n("5530"),o=(n("d81d"),n("b893")),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("code-card",e._b({},"code-card",e.config,!1),[n("div",{attrs:{id:"copy-text"}},[e._v("复制文本")]),n("bc-clipboard",{attrs:{dom:"#copy-text"}},[n("bc-button",[e._v("点击复制")])],1)],1)},s=[],l=n("1711"),u=n("fa7b"),d={name:"ClickCopy",components:{codeCard:l["a"]},data:function(){return{config:u["default"]}}},f=d,h=n("0c7c"),p=Object(h["a"])(f,i,s,!1,null,null,null),v=p.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("code-card",e._b({},"code-card",e.config,!1),[n("div",{attrs:{id:"copy-text"}},[e._v("全局配置")]),n("p",[e._v("基于Vue的provide/inject，可以实现一次配置，全局生效，主要用于针对不同后端分页规范不同，选项的键值对名称不一样")]),n("pre",[e._v(e._s(JSON.parse(JSON.stringify({table:{arrayName:"rows",pageName:"page",pageSizeName:"pageSize"},select:{label:"label",value:"value"}}),2)))])])},g=[],b=n("e494"),_={name:"ConfigProvider",components:{codeCard:l["a"]},data:function(){return{config:b["default"]}}},w=_,C=Object(h["a"])(w,m,g,!1,null,null,null),x=C.exports,y=n("befa"),k=n("db49"),S={name:"otherExample",components:{ClickCopy:v,ConfigProvider:x,AsideMenu:y["a"]},computed:{asides:function(){var e=k["e"].map((function(e){return Object(a["a"])(Object(a["a"])({},e),{},{prop:Object(o["d"])(e.prop)})}));return e}},data:function(){return{config:k["e"]}}},$=S,E=(n("c29f"),Object(h["a"])($,r,c,!1,null,"203c21e4",null));t["default"]=E.exports},c29f:function(e,t,n){"use strict";n("c30f")},c30f:function(e,t,n){},ffe6:function(e,t,n){"use strict";n("63cb")}}]);