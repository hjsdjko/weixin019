(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shangpinxinxi-add-or-update"],{"565d":function(e,i,n){"use strict";n.r(i);var r=n("fcf2"),t=n("f9f4");for(var a in t)"default"!==a&&function(e){n.d(i,e,(function(){return t[e]}))}(a);n("a40b");var o,s=n("f0c5"),u=Object(s["a"])(t["default"],r["b"],r["c"],!1,null,"2a74c1d7",null,!1,r["a"],o);i["default"]=u.exports},"5e7b":function(e,i,n){var r=n("24fb");i=r(!1),i.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-2a74c1d7]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),e.exports=i},8921:function(e,i,n){var r=n("5e7b");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var t=n("4f06").default;t("38ed8d3e",r,!0,{sourceMap:!1,shadowMode:!1})},a40b:function(e,i,n){"use strict";var r=n("8921"),t=n.n(r);t.a},c955:function(e,i,n){"use strict";var r=n("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,n("a481"),n("c5f6"),n("f559"),n("456d"),n("ac6a"),n("28a5"),n("96cf");var t=r(n("3b8d")),a=r(n("e2b1")),o=r(n("064f")),s=r(n("bd56")),u={data:function(){return{cross:"",ruleForm:{shangpinmingcheng:"",shangpintupian:"",shangpinleixing:"",xinjiuchengdu:"",guige:"",pinpai:"",shangpinxiangqing:"",storeupnum:"0",price:"0",clicknum:"0",maijiazhanghao:"",maijiaxingming:""},shangpinleixingOptions:[],shangpinleixingIndex:0,xinjiuchengduOptions:[],xinjiuchengduIndex:0,user:{},ro:{shangpinmingcheng:!1,shangpintupian:!1,shangpinleixing:!1,xinjiuchengdu:!1,guige:!1,pinpai:!1,shangpinxiangqing:!1,storeupnum:!1,price:!1,clicknum:!1,maijiazhanghao:!1,maijiaxingming:!1}}},components:{wPicker:a.default,xiaEditor:o.default,multipleSelect:s.default},watch:{},onLoad:function(){var e=(0,t.default)(regeneratorRuntime.mark((function e(i){var n,r,t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(n);case 3:return r=e.sent,this.user=r.data,this.ruleForm.maijiazhanghao=this.user.maijiazhanghao,this.ro.maijiazhanghao=!0,this.ruleForm.maijiaxingming=this.user.maijiaxingming,this.ro.maijiaxingming=!0,e.next=11,this.$api.option("shangpinleixing","shangpinleixing",{});case 11:if(r=e.sent,this.shangpinleixingOptions=r.data,this.shangpinleixingOptions.unshift("请选择商品类型"),this.xinjiuchengduOptions="全新,九成新,八成新,七成新,六成以下".split(","),this.ruleForm.userid=uni.getStorageSync("userid"),i.refid&&(this.ruleForm.refid=i.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!i.id){e.next=23;break}return this.ruleForm.id=i.id,e.next=21,this.$api.info("shangpinxinxi",this.ruleForm.id);case 21:r=e.sent,this.ruleForm=r.data;case 23:if(this.cross=i.cross,!i.cross){e.next=79;break}t=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(t);case 27:if((e.t1=e.t0()).done){e.next=79;break}if(a=e.t1.value,"shangpinmingcheng"!=a){e.next=33;break}return this.ruleForm.shangpinmingcheng=t[a],this.ro.shangpinmingcheng=!0,e.abrupt("continue",27);case 33:if("shangpintupian"!=a){e.next=37;break}return this.ruleForm.shangpintupian=t[a].split(",")[0],this.ro.shangpintupian=!0,e.abrupt("continue",27);case 37:if("shangpinleixing"!=a){e.next=41;break}return this.ruleForm.shangpinleixing=t[a],this.ro.shangpinleixing=!0,e.abrupt("continue",27);case 41:if("xinjiuchengdu"!=a){e.next=45;break}return this.ruleForm.xinjiuchengdu=t[a],this.ro.xinjiuchengdu=!0,e.abrupt("continue",27);case 45:if("guige"!=a){e.next=49;break}return this.ruleForm.guige=t[a],this.ro.guige=!0,e.abrupt("continue",27);case 49:if("pinpai"!=a){e.next=53;break}return this.ruleForm.pinpai=t[a],this.ro.pinpai=!0,e.abrupt("continue",27);case 53:if("shangpinxiangqing"!=a){e.next=57;break}return this.ruleForm.shangpinxiangqing=t[a],this.ro.shangpinxiangqing=!0,e.abrupt("continue",27);case 57:if("storeupnum"!=a){e.next=61;break}return this.ruleForm.storeupnum=t[a],this.ro.storeupnum=!0,e.abrupt("continue",27);case 61:if("price"!=a){e.next=65;break}return this.ruleForm.price=t[a],this.ro.price=!0,e.abrupt("continue",27);case 65:if("clicknum"!=a){e.next=69;break}return this.ruleForm.clicknum=t[a],this.ro.clicknum=!0,e.abrupt("continue",27);case 69:if("maijiazhanghao"!=a){e.next=73;break}return this.ruleForm.maijiazhanghao=t[a],this.ro.maijiazhanghao=!0,e.abrupt("continue",27);case 73:if("maijiaxingming"!=a){e.next=77;break}return this.ruleForm.maijiaxingming=t[a],this.ro.maijiaxingming=!0,e.abrupt("continue",27);case 77:e.next=27;break;case 79:this.styleChange(),this.$forceUpdate();case 81:case"end":return e.stop()}}),e,this)})));function i(i){return e.apply(this,arguments)}return i}(),computed:{baseUrl:function(){return this.$base.url}},methods:{shangpinxiangqingChange:function(e){this.ruleForm.shangpinxiangqing=e},styleChange:function(){this.$nextTick((function(){document.querySelectorAll(".radioText").forEach((function(e){e.removeAttribute("style");var i={color:"#666666"};Object.keys(i).forEach((function(n){e.style[n]=i[n]}))})),document.querySelectorAll(".radioTextActive").forEach((function(e){e.removeAttribute("style");var i={color:"#ff9933"};Object.keys(i).forEach((function(n){e.style[n]=i[n]}))})),document.querySelectorAll(".checkText").forEach((function(e){e.removeAttribute("style");var i={color:"#666666"};Object.keys(i).forEach((function(n){e.style[n]=i[n]}))})),document.querySelectorAll(".checkTextActive").forEach((function(e){e.removeAttribute("style");var i={color:"#ff9933"};Object.keys(i).forEach((function(n){e.style[n]=i[n]}))})),document.querySelectorAll(".uni-radio-input").forEach((function(e){e.removeAttribute("style");var i={border:"2rpx solid #999999",borderRadius:"0",background:"#ffffff"};Object.keys(i).forEach((function(n){e.style[n]=i[n]}))})),document.querySelectorAll(".uni-radio-input-checked").forEach((function(e){e.removeAttribute("style");var i={border:"2rpx solid #ff9933",borderRadius:"0",color:"#ff9933",background:"#ffffff"};Object.keys(i).forEach((function(n){e.style[n]=i[n]}))})),document.querySelectorAll(".uni-checkbox-input").forEach((function(e){e.removeAttribute("style");var i={border:"2rpx solid #999999",borderRadius:"0",background:"#ffffff"};Object.keys(i).forEach((function(n){e.style[n]=i[n]}))})),document.querySelectorAll(".uni-checkbox-input-checked").forEach((function(e){e.removeAttribute("style");var i={border:"2rpx solid #ff9933",color:"#ff9933",borderRadius:"0",background:"#ffffff"};Object.keys(i).forEach((function(n){e.style[n]=i[n]}))}))}))},shangpinleixingChange:function(e){this.shangpinleixingIndex=e.target.value,this.ruleForm.shangpinleixing=this.shangpinleixingOptions[this.shangpinleixingIndex]},xinjiuchengduChange:function(e){this.xinjiuchengduIndex=e.target.value,this.ruleForm.xinjiuchengdu=this.xinjiuchengduOptions[this.xinjiuchengduIndex]},shangpintupianTap:function(){var e=this;this.$api.upload((function(i){e.ruleForm.shangpintupian="file/"+i.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,t.default)(regeneratorRuntime.mark((function e(){var i,n,r,t,a,o,s,u,l,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.shangpinmingcheng){e.next=3;break}return this.$utils.msg("商品名称不能为空"),e.abrupt("return");case 3:if(this.ruleForm.shangpinleixing){e.next=6;break}return this.$utils.msg("商品类型不能为空"),e.abrupt("return");case 6:if(!this.ruleForm.storeupnum||this.$validate.isIntNumer(this.ruleForm.storeupnum)){e.next=9;break}return this.$utils.msg("收藏数量应输入整数"),e.abrupt("return");case 9:if(!this.ruleForm.price||this.$validate.isNumber(this.ruleForm.price)){e.next=12;break}return this.$utils.msg("价格应输入数字"),e.abrupt("return");case 12:if(!this.ruleForm.clicknum||this.$validate.isIntNumer(this.ruleForm.clicknum)){e.next=15;break}return this.$utils.msg("点击次数应输入整数"),e.abrupt("return");case 15:if(!this.cross){e.next=32;break}if(uni.setStorageSync("crossCleanType",!0),a=uni.getStorageSync("statusColumnName"),o=uni.getStorageSync("statusColumnValue"),""==a){e.next=32;break}if(i||(i=uni.getStorageSync("crossObj")),a.startsWith("[")){e.next=28;break}for(s in i)s==a&&(i[s]=o);return u=uni.getStorageSync("crossTable"),e.next=26,this.$api.update("".concat(u),i);case 26:e.next=32;break;case 28:n=Number(uni.getStorageSync("userid")),r=i["id"],t=uni.getStorageSync("statusColumnName"),t=t.replace(/\[/,"").replace(/\]/,"");case 32:if(!r||!n){e.next=55;break}return this.ruleForm.crossuserid=n,this.ruleForm.crossrefid=r,l={page:1,limit:10,crossuserid:n,crossrefid:r},e.next=38,this.$api.list("shangpinxinxi",l);case 38:if(p=e.sent,!(p.data.total>=t)){e.next=45;break}return this.$utils.msg(uni.getStorageSync("tips")),uni.removeStorageSync("crossCleanType"),e.abrupt("return",!1);case 45:if(!this.ruleForm.id){e.next=50;break}return e.next=48,this.$api.update("shangpinxinxi",this.ruleForm);case 48:e.next=52;break;case 50:return e.next=52,this.$api.add("shangpinxinxi",this.ruleForm);case 52:this.$utils.msgBack("提交成功");case 53:e.next=63;break;case 55:if(!this.ruleForm.id){e.next=60;break}return e.next=58,this.$api.update("shangpinxinxi",this.ruleForm);case 58:e.next=62;break;case 60:return e.next=62,this.$api.add("shangpinxinxi",this.ruleForm);case 62:this.$utils.msgBack("提交成功");case 63:case"end":return e.stop()}}),e,this)})));function i(){return e.apply(this,arguments)}return i}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var i=new Date,n=i.getFullYear(),r=i.getMonth()+1,t=i.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),r=r>9?r:"0"+r,t=t>9?t:"0"+t,"".concat(n,"-").concat(r,"-").concat(t)},toggleTab:function(e){this.$refs[e].show()}}};i.default=u},f9f4:function(e,i,n){"use strict";n.r(i);var r=n("c955"),t=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(i,e,(function(){return r[e]}))}(a);i["default"]=t.a},fcf2:function(e,i,n){"use strict";var r={"xia-editor":n("064f").default},t=function(){var e=this,i=e.$createElement,n=e._self._c||i;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{style:{width:"100%",padding:"0 0 0 0",position:"relative",background:"#ff993310",height:"auto"}},[n("v-uni-form",{staticClass:"app-update-pv",style:{width:"100%",padding:"24rpx 24rpx 24rpx 24rpx",background:"none",display:"block",height:"auto"}},[n("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0px",background:"none",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[n("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("商品名称")]),n("v-uni-input",{style:{border:"2rpx solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"0px",flex:"1",background:"#ffffff",fontSize:"28rpx",lineHeight:"64rpx",height:"64rpx"},attrs:{disabled:e.ro.shangpinmingcheng,placeholder:"商品名称"},model:{value:e.ruleForm.shangpinmingcheng,callback:function(i){e.$set(e.ruleForm,"shangpinmingcheng",i)},expression:"ruleForm.shangpinmingcheng"}})],1),n("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0px",background:"none",display:"flex",width:"100%",borderStyle:"solid",height:"auto"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.shangpintupianTap.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("商品图片")]),e.ruleForm.shangpintupian?n("v-uni-image",{staticClass:"avator",style:{width:"80rpx",borderRadius:"100%",objectFit:"cover",display:"block",height:"80rpx"},attrs:{src:e.baseUrl+e.ruleForm.shangpintupian.split(",")[0],mode:"aspectFill"}}):n("v-uni-image",{staticClass:"avator",style:{width:"80rpx",borderRadius:"100%",objectFit:"cover",display:"block",height:"80rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1),n("v-uni-view",{staticClass:"select",style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0px",background:"none",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[n("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("商品类型")]),n("v-uni-picker",{style:{width:"100%",flex:"1",height:"auto"},attrs:{value:e.shangpinleixingIndex,range:e.shangpinleixingOptions},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.shangpinleixingChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-input",style:{border:"2rpx solid #eeeeee",padding:"0 20rpx",color:"#666666",background:"#ffffff",width:"100%",lineHeight:"64rpx",fontSize:"28rpx"}},[e._v(e._s(e.ruleForm.shangpinleixing?e.ruleForm.shangpinleixing:"请选择商品类型"))])],1)],1),n("v-uni-view",{staticClass:"select",style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0px",background:"none",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[n("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("新旧程度")]),n("v-uni-picker",{style:{width:"100%",flex:"1",height:"auto"},attrs:{value:e.xinjiuchengduIndex,range:e.xinjiuchengduOptions},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.xinjiuchengduChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-input",style:{border:"2rpx solid #eeeeee",padding:"0 20rpx",color:"#666666",background:"#ffffff",width:"100%",lineHeight:"64rpx",fontSize:"28rpx"}},[e._v(e._s(e.ruleForm.xinjiuchengdu?e.ruleForm.xinjiuchengdu:"请选择新旧程度"))])],1)],1),n("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0px",background:"none",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[n("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("规格")]),n("v-uni-input",{style:{border:"2rpx solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"0px",flex:"1",background:"#ffffff",fontSize:"28rpx",lineHeight:"64rpx",height:"64rpx"},attrs:{disabled:e.ro.guige,placeholder:"规格"},model:{value:e.ruleForm.guige,callback:function(i){e.$set(e.ruleForm,"guige",i)},expression:"ruleForm.guige"}})],1),n("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0px",background:"none",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[n("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("品牌")]),n("v-uni-input",{style:{border:"2rpx solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"0px",flex:"1",background:"#ffffff",fontSize:"28rpx",lineHeight:"64rpx",height:"64rpx"},attrs:{disabled:e.ro.pinpai,placeholder:"品牌"},model:{value:e.ruleForm.pinpai,callback:function(i){e.$set(e.ruleForm,"pinpai",i)},expression:"ruleForm.pinpai"}})],1),n("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0px",background:"none",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[n("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("收藏数量")]),n("v-uni-input",{style:{border:"2rpx solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"0px",flex:"1",background:"#ffffff",fontSize:"28rpx",lineHeight:"64rpx",height:"64rpx"},attrs:{disabled:e.ro.storeupnum,placeholder:"收藏数量"},model:{value:e.ruleForm.storeupnum,callback:function(i){e.$set(e.ruleForm,"storeupnum",i)},expression:"ruleForm.storeupnum"}})],1),n("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0px",background:"none",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[n("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("价格")]),n("v-uni-input",{style:{border:"2rpx solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"0px",flex:"1",background:"#ffffff",fontSize:"28rpx",lineHeight:"64rpx",height:"64rpx"},attrs:{disabled:e.ro.price,placeholder:"价格"},model:{value:e.ruleForm.price,callback:function(i){e.$set(e.ruleForm,"price",i)},expression:"ruleForm.price"}})],1),n("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0px",background:"none",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[n("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("卖家账号")]),n("v-uni-input",{style:{border:"2rpx solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"0px",flex:"1",background:"#ffffff",fontSize:"28rpx",lineHeight:"64rpx",height:"64rpx"},attrs:{disabled:e.ro.maijiazhanghao,placeholder:"卖家账号"},model:{value:e.ruleForm.maijiazhanghao,callback:function(i){e.$set(e.ruleForm,"maijiazhanghao",i)},expression:"ruleForm.maijiazhanghao"}})],1),n("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0px",background:"none",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[n("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("卖家姓名")]),n("v-uni-input",{style:{border:"2rpx solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"0px",flex:"1",background:"#ffffff",fontSize:"28rpx",lineHeight:"64rpx",height:"64rpx"},attrs:{disabled:e.ro.maijiaxingming,placeholder:"卖家姓名"},model:{value:e.ruleForm.maijiaxingming,callback:function(i){e.$set(e.ruleForm,"maijiaxingming",i)},expression:"ruleForm.maijiaxingming"}})],1),n("v-uni-view",{style:{padding:"12rpx 0 12rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",borderWidth:"0 0 0px 0",width:"100%",borderStyle:"solid",height:"auto"}},[n("v-uni-view",{staticClass:"title",style:{width:"100%",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",fontWeight:"500"}},[e._v("商品详情")]),n("xia-editor",{ref:"editor",style:{minHeight:"320rpx",border:"2rpx solid #eeeeee",padding:"20rpx",color:"#666666",background:"#ffffff",width:"100%",height:"auto"},attrs:{placeholder:"商品详情"},on:{editorChange:function(i){arguments[0]=i=e.$handleEvent(i),e.shangpinxiangqingChange.apply(void 0,arguments)}},model:{value:e.ruleForm.shangpinxiangqing,callback:function(i){e.$set(e.ruleForm,"shangpinxiangqing",i)},expression:"ruleForm.shangpinxiangqing"}})],1),n("v-uni-view",{staticClass:"btn",style:{width:"100%",justifyContent:"center",display:"flex",height:"auto"}},[n("v-uni-button",{staticClass:"bg-red",style:{border:"0px solid #eeeeee",padding:"0 0 0 0",margin:"0 4% 0 0",color:"#fff",borderRadius:"40rpx",background:"#ff9933",width:"30%",lineHeight:"80rpx",fontSize:"28rpx",height:"80rpx"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)],1)],1)},a=[];n.d(i,"b",(function(){return t})),n.d(i,"c",(function(){return a})),n.d(i,"a",(function(){return r}))}}]);