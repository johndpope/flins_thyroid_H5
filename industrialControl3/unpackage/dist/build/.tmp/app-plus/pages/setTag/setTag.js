(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/setTag/setTag"],{"0c36":function(t,e,a){"use strict";a.r(e);var c=a("5471"),n=a("dd69");for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);var o=a("2877"),i=Object(o["a"])(n["default"],c["a"],c["b"],!1,null,null,null);e["default"]=i.exports},"27ce":function(t,e,a){"use strict";(function(t,c){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a("6b26"),s={data:function(){return{member_id:"",access_token:"",tagList:[],checkedCount:0}},onLoad:function(){console.log(t(this," at pages\\setTag\\setTag.vue:31"));var e=this;c.getStorage({key:"access_token",success:function(t){e.access_token=t.data}}),c.getStorage({key:"member_id",success:function(t){e.member_id=t.data}}),e.getTags()},methods:{getTags:function(){var e=this;(0,n.get_tags)({member_id:this.member_id,access_token:this.access_token}).then(function(a){console.log(t(a," at pages\\setTag\\setTag.vue:55")),1==a.data.code&&(e.tagList=a.data.data.list,console.log(t(e.tagList," at pages\\setTag\\setTag.vue:58")))})},checkTag:function(t,e){var a=this;a.tagList[t].child[e].is_checked=1,a.checkedCount=0;var c=0;a.tagList.forEach(function(t,e){t.child.forEach(function(t,e){1==t.is_checked&&c++})}),a.checkedCount=c},cancelTag:function(t,e){var a=this;a.tagList[t].child[e].is_checked=0,a.checkedCount=0;var c=0;a.tagList.forEach(function(t,e){t.child.forEach(function(t,e){1==t.is_checked&&c++})}),a.checkedCount=c},submitTag:function(){var e=this,a="";e.tagList.forEach(function(t,e){t.child.forEach(function(t,e){1==t.is_checked&&(a+=t.id+",")})}),a=a.substr(0,a.length-1),console.log(t(a," at pages\\setTag\\setTag.vue:107")),(0,n.tag_add)({member_id:this.member_id,access_token:this.access_token,tagids:a}).then(function(e){console.log(t(e," at pages\\setTag\\setTag.vue:113")),1==e.data.code&&(c.showToast({title:"标签设置成功!",duration:2e3,icon:"none"}),c.switchTab({url:"../index/index"}))})}}};e.default=s}).call(this,a("0de9")["default"],a("6e42")["default"])},5471:function(t,e,a){"use strict";var c=function(){var t=this,e=t.$createElement;t._self._c},n=[];a.d(e,"a",function(){return c}),a.d(e,"b",function(){return n})},dd69:function(t,e,a){"use strict";a.r(e);var c=a("27ce"),n=a.n(c);for(var s in c)"default"!==s&&function(t){a.d(e,t,function(){return c[t]})}(s);e["default"]=n.a},f7cd:function(t,e,a){"use strict";(function(t){a("91f7"),a("921b");c(a("66fd"));var e=c(a("0c36"));function c(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])}},[["f7cd","common/runtime","common/vendor"]]]);