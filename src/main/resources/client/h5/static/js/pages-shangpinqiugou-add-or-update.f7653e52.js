(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shangpinqiugou-add-or-update"],{"1b1c":function(e,i,n){var r=n("3af6");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var t=n("4f06").default;t("c23e75e6",r,!0,{sourceMap:!1,shadowMode:!1})},"3af6":function(e,i,n){var r=n("24fb");i=r(!1),i.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-4bc9a1d0]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),e.exports=i},"5aa7":function(e,i,n){"use strict";var r=n("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,n("a481"),n("c5f6"),n("f559"),n("456d"),n("ac6a"),n("28a5"),n("96cf");var t=r(n("3b8d")),a=r(n("e2b1")),o=r(n("064f")),s=r(n("bd56")),u={data:function(){return{cross:"",ruleForm:{shangpinmingcheng:"",shangpintupian:"",shangpinleixing:"",xinjiuchengdu:"",jieshoujiawei:"",qiugoushuliang:"",fabushijian:"",qiugouzhanghao:"",lianxidianhua:"",userid:""},shangpinleixingOptions:[],shangpinleixingIndex:0,user:{},ro:{shangpinmingcheng:!1,shangpintupian:!1,shangpinleixing:!1,xinjiuchengdu:!1,jieshoujiawei:!1,qiugoushuliang:!1,fabushijian:!1,qiugouzhanghao:!1,lianxidianhua:!1,userid:!1}}},components:{wPicker:a.default,xiaEditor:o.default,multipleSelect:s.default},watch:{},onLoad:function(){var e=(0,t.default)(regeneratorRuntime.mark((function e(i){var n,r,t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.ruleForm.fabushijian=this.$utils.getCurDateTime(),n=uni.getStorageSync("nowTable"),e.next=4,this.$api.session(n);case 4:return r=e.sent,this.user=r.data,this.ruleForm.qiugouzhanghao=this.user.yonghuzhanghao,this.ro.qiugouzhanghao=!0,e.next=10,this.$api.option("shangpinleixing","shangpinleixing",{});case 10:if(r=e.sent,this.shangpinleixingOptions=r.data,this.shangpinleixingOptions.unshift("请选择商品类型"),this.ruleForm.userid=uni.getStorageSync("userid"),i.refid&&(this.ruleForm.refid=i.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!i.id){e.next=21;break}return this.ruleForm.id=i.id,e.next=19,this.$api.info("shangpinqiugou",this.ruleForm.id);case 19:r=e.sent,this.ruleForm=r.data;case 21:if(this.cross=i.cross,!i.cross){e.next=69;break}t=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(t);case 25:if((e.t1=e.t0()).done){e.next=69;break}if(a=e.t1.value,"shangpinmingcheng"!=a){e.next=31;break}return this.ruleForm.shangpinmingcheng=t[a],this.ro.shangpinmingcheng=!0,e.abrupt("continue",25);case 31:if("shangpintupian"!=a){e.next=35;break}return this.ruleForm.shangpintupian=t[a].split(",")[0],this.ro.shangpintupian=!0,e.abrupt("continue",25);case 35:if("shangpinleixing"!=a){e.next=39;break}return this.ruleForm.shangpinleixing=t[a],this.ro.shangpinleixing=!0,e.abrupt("continue",25);case 39:if("xinjiuchengdu"!=a){e.next=43;break}return this.ruleForm.xinjiuchengdu=t[a],this.ro.xinjiuchengdu=!0,e.abrupt("continue",25);case 43:if("jieshoujiawei"!=a){e.next=47;break}return this.ruleForm.jieshoujiawei=t[a],this.ro.jieshoujiawei=!0,e.abrupt("continue",25);case 47:if("qiugoushuliang"!=a){e.next=51;break}return this.ruleForm.qiugoushuliang=t[a],this.ro.qiugoushuliang=!0,e.abrupt("continue",25);case 51:if("fabushijian"!=a){e.next=55;break}return this.ruleForm.fabushijian=t[a],this.ro.fabushijian=!0,e.abrupt("continue",25);case 55:if("qiugouzhanghao"!=a){e.next=59;break}return this.ruleForm.qiugouzhanghao=t[a],this.ro.qiugouzhanghao=!0,e.abrupt("continue",25);case 59:if("lianxidianhua"!=a){e.next=63;break}return this.ruleForm.lianxidianhua=t[a],this.ro.lianxidianhua=!0,e.abrupt("continue",25);case 63:if("userid"!=a){e.next=67;break}return this.ruleForm.userid=t[a],this.ro.userid=!0,e.abrupt("continue",25);case 67:e.next=25;break;case 69:this.styleChange(),this.$forceUpdate();case 71:case"end":return e.stop()}}),e,this)})));function i(i){return e.apply(this,arguments)}return i}(),computed:{baseUrl:function(){return this.$base.url}},methods:{styleChange:function(){this.$nextTick((function(){document.querySelectorAll(".radioText").forEach((function(e){e.removeAttribute("style");var i={color:"#666666"};Object.keys(i).forEach((function(n){e.style[n]=i[n]}))})),document.querySelectorAll(".radioTextActive").forEach((function(e){e.removeAttribute("style");var i={color:"#ff9933"};Object.keys(i).forEach((function(n){e.style[n]=i[n]}))})),document.querySelectorAll(".checkText").forEach((function(e){e.removeAttribute("style");var i={color:"#666666"};Object.keys(i).forEach((function(n){e.style[n]=i[n]}))})),document.querySelectorAll(".checkTextActive").forEach((function(e){e.removeAttribute("style");var i={color:"#ff9933"};Object.keys(i).forEach((function(n){e.style[n]=i[n]}))})),document.querySelectorAll(".uni-radio-input").forEach((function(e){e.removeAttribute("style");var i={border:"2rpx solid #999999",borderRadius:"0",background:"#ffffff"};Object.keys(i).forEach((function(n){e.style[n]=i[n]}))})),document.querySelectorAll(".uni-radio-input-checked").forEach((function(e){e.removeAttribute("style");var i={border:"2rpx solid #ff9933",borderRadius:"0",color:"#ff9933",background:"#ffffff"};Object.keys(i).forEach((function(n){e.style[n]=i[n]}))})),document.querySelectorAll(".uni-checkbox-input").forEach((function(e){e.removeAttribute("style");var i={border:"2rpx solid #999999",borderRadius:"0",background:"#ffffff"};Object.keys(i).forEach((function(n){e.style[n]=i[n]}))})),document.querySelectorAll(".uni-checkbox-input-checked").forEach((function(e){e.removeAttribute("style");var i={border:"2rpx solid #ff9933",color:"#ff9933",borderRadius:"0",background:"#ffffff"};Object.keys(i).forEach((function(n){e.style[n]=i[n]}))}))}))},fabushijianConfirm:function(e){console.log(e),this.ruleForm.fabushijian=e.result,this.$forceUpdate()},shangpinleixingChange:function(e){this.shangpinleixingIndex=e.target.value,this.ruleForm.shangpinleixing=this.shangpinleixingOptions[this.shangpinleixingIndex]},shangpintupianTap:function(){var e=this;this.$api.upload((function(i){e.ruleForm.shangpintupian="file/"+i.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,t.default)(regeneratorRuntime.mark((function e(){var i,n,r,t,a,o,s,u,l,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.shangpinmingcheng){e.next=3;break}return this.$utils.msg("商品名称不能为空"),e.abrupt("return");case 3:if(this.ruleForm.shangpinleixing){e.next=6;break}return this.$utils.msg("商品类型不能为空"),e.abrupt("return");case 6:if(!this.ruleForm.qiugoushuliang||this.$validate.isIntNumer(this.ruleForm.qiugoushuliang)){e.next=9;break}return this.$utils.msg("求购数量应输入整数"),e.abrupt("return");case 9:if(this.ruleForm.userid){e.next=12;break}return this.$utils.msg("用户id不能为空"),e.abrupt("return");case 12:if(!this.cross){e.next=29;break}if(uni.setStorageSync("crossCleanType",!0),a=uni.getStorageSync("statusColumnName"),o=uni.getStorageSync("statusColumnValue"),""==a){e.next=29;break}if(i||(i=uni.getStorageSync("crossObj")),a.startsWith("[")){e.next=25;break}for(s in i)s==a&&(i[s]=o);return u=uni.getStorageSync("crossTable"),e.next=23,this.$api.update("".concat(u),i);case 23:e.next=29;break;case 25:n=Number(uni.getStorageSync("userid")),r=i["id"],t=uni.getStorageSync("statusColumnName"),t=t.replace(/\[/,"").replace(/\]/,"");case 29:if(!r||!n){e.next=52;break}return this.ruleForm.crossuserid=n,this.ruleForm.crossrefid=r,l={page:1,limit:10,crossuserid:n,crossrefid:r},e.next=35,this.$api.list("shangpinqiugou",l);case 35:if(c=e.sent,!(c.data.total>=t)){e.next=42;break}return this.$utils.msg(uni.getStorageSync("tips")),uni.removeStorageSync("crossCleanType"),e.abrupt("return",!1);case 42:if(!this.ruleForm.id){e.next=47;break}return e.next=45,this.$api.update("shangpinqiugou",this.ruleForm);case 45:e.next=49;break;case 47:return e.next=49,this.$api.add("shangpinqiugou",this.ruleForm);case 49:this.$utils.msgBack("提交成功");case 50:e.next=60;break;case 52:if(!this.ruleForm.id){e.next=57;break}return e.next=55,this.$api.update("shangpinqiugou",this.ruleForm);case 55:e.next=59;break;case 57:return e.next=59,this.$api.add("shangpinqiugou",this.ruleForm);case 59:this.$utils.msgBack("提交成功");case 60:case"end":return e.stop()}}),e,this)})));function i(){return e.apply(this,arguments)}return i}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var i=new Date,n=i.getFullYear(),r=i.getMonth()+1,t=i.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),r=r>9?r:"0"+r,t=t>9?t:"0"+t,"".concat(n,"-").concat(r,"-").concat(t)},toggleTab:function(e){this.$refs[e].show()}}};i.default=u},"5efc":function(e,i,n){"use strict";var r=n("1b1c"),t=n.n(r);t.a},ea69:function(e,i,n){"use strict";n.r(i);var r=n("fbc1"),t=n("ef09");for(var a in t)"default"!==a&&function(e){n.d(i,e,(function(){return t[e]}))}(a);n("5efc");var o,s=n("f0c5"),u=Object(s["a"])(t["default"],r["b"],r["c"],!1,null,"4bc9a1d0",null,!1,r["a"],o);i["default"]=u.exports},ef09:function(e,i,n){"use strict";n.r(i);var r=n("5aa7"),t=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(i,e,(function(){return r[e]}))}(a);i["default"]=t.a},fbc1:function(e,i,n){"use strict";var r={"w-picker":n("e2b1").default},t=function(){var e=this,i=e.$createElement,n=e._self._c||i;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{style:{width:"100%",padding:"0 0 0 0",position:"relative",background:"#ff993310",height:"auto"}},[n("v-uni-form",{staticClass:"app-update-pv",style:{width:"100%",padding:"24rpx 24rpx 24rpx 24rpx",background:"none",display:"block",height:"auto"}},[n("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0px",background:"none",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[n("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("商品名称")]),n("v-uni-input",{style:{border:"2rpx solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"0px",flex:"1",background:"#ffffff",fontSize:"28rpx",lineHeight:"64rpx",height:"64rpx"},attrs:{disabled:e.ro.shangpinmingcheng,placeholder:"商品名称"},model:{value:e.ruleForm.shangpinmingcheng,callback:function(i){e.$set(e.ruleForm,"shangpinmingcheng",i)},expression:"ruleForm.shangpinmingcheng"}})],1),n("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0px",background:"none",display:"flex",width:"100%",borderStyle:"solid",height:"auto"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.shangpintupianTap.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("商品图片")]),e.ruleForm.shangpintupian?n("v-uni-image",{staticClass:"avator",style:{width:"80rpx",borderRadius:"100%",objectFit:"cover",display:"block",height:"80rpx"},attrs:{src:e.baseUrl+e.ruleForm.shangpintupian.split(",")[0],mode:"aspectFill"}}):n("v-uni-image",{staticClass:"avator",style:{width:"80rpx",borderRadius:"100%",objectFit:"cover",display:"block",height:"80rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1),n("v-uni-view",{staticClass:"select",style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0px",background:"none",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[n("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("商品类型")]),n("v-uni-picker",{style:{width:"100%",flex:"1",height:"auto"},attrs:{value:e.shangpinleixingIndex,range:e.shangpinleixingOptions},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.shangpinleixingChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-input",style:{border:"2rpx solid #eeeeee",padding:"0 20rpx",color:"#666666",background:"#ffffff",width:"100%",lineHeight:"64rpx",fontSize:"28rpx"}},[e._v(e._s(e.ruleForm.shangpinleixing?e.ruleForm.shangpinleixing:"请选择商品类型"))])],1)],1),n("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0px",background:"none",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[n("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("新旧程度")]),n("v-uni-input",{style:{border:"2rpx solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"0px",flex:"1",background:"#ffffff",fontSize:"28rpx",lineHeight:"64rpx",height:"64rpx"},attrs:{disabled:e.ro.xinjiuchengdu,placeholder:"新旧程度"},model:{value:e.ruleForm.xinjiuchengdu,callback:function(i){e.$set(e.ruleForm,"xinjiuchengdu",i)},expression:"ruleForm.xinjiuchengdu"}})],1),n("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0px",background:"none",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[n("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("接受价位")]),n("v-uni-input",{style:{border:"2rpx solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"0px",flex:"1",background:"#ffffff",fontSize:"28rpx",lineHeight:"64rpx",height:"64rpx"},attrs:{disabled:e.ro.jieshoujiawei,placeholder:"接受价位"},model:{value:e.ruleForm.jieshoujiawei,callback:function(i){e.$set(e.ruleForm,"jieshoujiawei",i)},expression:"ruleForm.jieshoujiawei"}})],1),n("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0px",background:"none",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[n("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("求购数量")]),n("v-uni-input",{style:{border:"2rpx solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"0px",flex:"1",background:"#ffffff",fontSize:"28rpx",lineHeight:"64rpx",height:"64rpx"},attrs:{disabled:e.ro.qiugoushuliang,placeholder:"求购数量"},model:{value:e.ruleForm.qiugoushuliang,callback:function(i){e.$set(e.ruleForm,"qiugoushuliang",i)},expression:"ruleForm.qiugoushuliang"}})],1),n("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0px",background:"none",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[n("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("发布时间")]),n("v-uni-input",{style:{border:"2rpx solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"0px",flex:"1",background:"#ffffff",fontSize:"28rpx",lineHeight:"64rpx",height:"64rpx"},attrs:{placeholder:"发布时间"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.toggleTab("fabushijian")}},model:{value:e.ruleForm.fabushijian,callback:function(i){e.$set(e.ruleForm,"fabushijian",i)},expression:"ruleForm.fabushijian"}})],1),n("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0px",background:"none",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[n("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("求购账号")]),n("v-uni-input",{style:{border:"2rpx solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"0px",flex:"1",background:"#ffffff",fontSize:"28rpx",lineHeight:"64rpx",height:"64rpx"},attrs:{disabled:e.ro.qiugouzhanghao,placeholder:"求购账号"},model:{value:e.ruleForm.qiugouzhanghao,callback:function(i){e.$set(e.ruleForm,"qiugouzhanghao",i)},expression:"ruleForm.qiugouzhanghao"}})],1),n("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0px",background:"none",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[n("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("联系电话")]),n("v-uni-input",{style:{border:"2rpx solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"0px",flex:"1",background:"#ffffff",fontSize:"28rpx",lineHeight:"64rpx",height:"64rpx"},attrs:{disabled:e.ro.lianxidianhua,placeholder:"联系电话"},model:{value:e.ruleForm.lianxidianhua,callback:function(i){e.$set(e.ruleForm,"lianxidianhua",i)},expression:"ruleForm.lianxidianhua"}})],1),n("v-uni-view",{staticClass:"btn",style:{width:"100%",justifyContent:"center",display:"flex",height:"auto"}},[n("v-uni-button",{staticClass:"bg-red",style:{border:"0px solid #eeeeee",padding:"0 0 0 0",margin:"0 4% 0 0",color:"#fff",borderRadius:"40rpx",background:"#ff9933",width:"30%",lineHeight:"80rpx",fontSize:"28rpx",height:"80rpx"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1),n("w-picker",{ref:"fabushijian",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(i){arguments[0]=i=e.$handleEvent(i),e.fabushijianConfirm.apply(void 0,arguments)}}})],1)],1)},a=[];n.d(i,"b",(function(){return t})),n.d(i,"c",(function(){return a})),n.d(i,"a",(function(){return r}))}}]);