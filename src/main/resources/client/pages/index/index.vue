<template>
<view class="content">
	<view :style='{"width":"100%","flexWrap":"wrap","background":"#ff993310","display":"flex","height":"auto"}'>
		<swiper :style='{"width":"100%","margin":"0 0 20rpx 0","background":"#ffffff","height":"360rpx"}' class="swiper" :indicator-dots='true' :autoplay='true' :circular='true' indicator-active-color='#ff9933' indicator-color='#33333330' :duration='500' :interval='5000' :vertical='false'>
			<swiper-item :style='{"width":"100%","background":"#ffffff","height":"100%"}' v-for="(swiper,index) in swiperList" :key="index" @tap="onSwiperTap(swiper)">
				<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"100%"}' mode="aspectFill" :src="baseUrl+swiper.img"></image>
				<view v-if="false" :style='{"width":"100%","padding":"0 8rpx 0 8rpx","lineHeight":"60rpx","fontSize":"28rpx","color":"#333333","background":"#ffffff"}'>{{ swiper.title }}</view>
			</swiper-item>
		</swiper>


		<!-- menu -->
		<view v-if="true" class="menu" :style='{"padding":"0px 0px 0px 40rpx","margin":"40rpx 0px 20rpx 0px","borderColor":"#eee","borderRadius":"8rpx","flexWrap":"wrap","background":"none","borderWidth":"0px","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
            <block v-for="(item,ind) in menuList" v-bind:key="item.roleName">
                <block v-if="ind==0" v-bind:key="index" v-for=" (menu,index) in item.frontMenu">
					<view v-if="menu.childs.length" :style='{"padding":"12rpx 0 12rpx 0","margin":"0px 40rpx 20rpx 0","borderColor":"#ff993360","borderRadius":"0px","borderWidth":"0 0 8rpx","width":"calc(25% - 40rpx)","borderStyle":"double","height":"auto"}' class="menu-list" @tap="menuClick(menu,index)">
						<view class="iconarr" :class="menu.fontClass" :style='{"border":"4rpx solid #ff9933","padding":"0 0 0 0","boxShadow":"6rpx 8rpx 8rpx #dddddd","margin":"0 auto 12rpx auto","color":"#ff9933","textAlign":"center","display":"block","borderRadius":"8rpx","background":"#fff","width":"128rpx","lineHeight":"96rpx","fontSize":"60rpx","height":"96rpx"}'></view>
						<view :style='{"padding":"0 0 0 0","margin":"0px auto 0 auto","color":"#333333","textAlign":"center","width":"100%","lineHeight":"2","fontSize":"26rpx"}'>{{menu.menu}}</view>
					</view>
                </block>
            </block>
		</view>
		<!-- menu -->
		
		

		<!-- 商品推荐 -->
		<!-- 商品推荐 -->
		
		

		<!-- 商品列表 -->
																										<view class="listBox list" :style='{"width":"100%","margin":"40rpx 0 40rpx 0","background":"none","order":"4"}'>
			<view v-if="false && 3 == 1" class="idea listIdea" :style='{"width":"100%","padding":"40rpx","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20230815/1b3e2caf374142fcb4d5bdb9448d4e01.png) no-repeat center bottom / cover","display":"block","height":"360rpx"}'>
				<view :style='{"width":"100%","margin":"100rpx 0 0 0","textAlign":"center","background":"none","display":"block","height":"48rpx"}' class="box box1">不后悔过往，不浪费现在</view>
				<view :style='{"width":"100%","textAlign":"center","background":"none","display":"block","height":"48rpx"}' class="box box2">满怀梦想，面对未来</view>
				<view :style='{"width":"20%","background":"#ffffff","display":"none","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#ffffff","display":"none","height":"160rpx"}' class="box box4"></view>
			</view>
		  
			<view class="title" :style='{"width":"calc(100% - 48rpx)","padding":"32rpx 80rpx","margin":"0 24rpx 24rpx 24rpx","textAlign":"center","background":"url(http://clfile.zggen.cn/20231205/27b350199c7f4e399e889fe0209a6dea.png) no-repeat center top / 100% 100%","height":"auto"}'>
				<view :style='{"padding":"12rpx 60rpx 8rpx 120rpx","color":"#fff","borderRadius":"8rpx","background":"none","display":"inline-block","fontSize":"32rpx","lineHeight":"48rpx","minWidth":"300rpx","fontWeight":"500"}'>商品信息</view>
				<text :style='{"margin":"10rpx 0 0 0","color":"#fcfcfc","display":"inline-block","width":"auto","fontSize":"28rpx","lineHeight":"48rpx","float":"right"}' @tap="onPageTap('shangpinxinxi')">查看更多</text>
			</view>
			
			<view v-if="false && 3 == 2" class="idea listIdea" :style='{"width":"100%","padding":"40rpx","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20230815/1b3e2caf374142fcb4d5bdb9448d4e01.png) no-repeat center bottom / cover","display":"block","height":"360rpx"}'>
				<view :style='{"width":"100%","margin":"100rpx 0 0 0","textAlign":"center","background":"none","display":"block","height":"48rpx"}' class="box box1">不后悔过往，不浪费现在</view>
				<view :style='{"width":"100%","textAlign":"center","background":"none","display":"block","height":"48rpx"}' class="box box2">满怀梦想，面对未来</view>
				<view :style='{"width":"20%","background":"#ffffff","display":"none","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#ffffff","display":"none","height":"160rpx"}' class="box box4"></view>
			</view>
			
		  		  
		  		  
		  		  
		  		  
		  		  
		  		  <!-- 样式6 -->
		  <view class="list-box style6" :style='{"width":"100%","padding":"24rpx 24rpx 24rpx 24rpx","margin":"0 0 0 0","height":"auto"}'>
			<view v-if="homeshangpinxinxilist.length > 0" @tap="onDetailTap('shangpinxinxi',homeshangpinxinxilist[0].id)" class="box box1" :style='{"width":"100%","padding":"0 0 0 0","margin":"0 0 20rpx 0","position":"relative","height":"auto"}'>
			  			                			  <view v-if="true" :style='{"padding":"0 20rpx 0 20rpx","margin":"0 0 0 0","overflow":"hidden","whiteSpace":"nowrap","color":"#333","textAlign":"center","width":"100%","lineHeight":"64rpx","fontSize":"28rpx","textOverflow":"ellipsis","height":"64rpx"}' class="title ">{{homeshangpinxinxilist[0].shangpinmingcheng}}</view>
			  			  			  			  <image :style='{"width":"100%","objectFit":"cover","borderRadius":"8rpx","display":"block","height":"328rpx"}' class="list-item-image" mode="aspectFill" v-if="homeshangpinxinxilist[0].shangpintupian.substring(0,4)=='http'" :src="homeshangpinxinxilist[0].shangpintupian"></image>
			  <image :style='{"width":"100%","objectFit":"cover","borderRadius":"8rpx","display":"block","height":"328rpx"}' class="list-item-image" mode="aspectFill" v-else :src="homeshangpinxinxilist[0].shangpintupian?baseUrl+homeshangpinxinxilist[0].shangpintupian.split(',')[0]:''"></image>
			                			  			                			  			                			  			                			  			                			  <view v-if="true" :style='{"padding":"0 20rpx 0 20rpx","margin":"0 0 0 0","overflow":"hidden","whiteSpace":"nowrap","color":"#333","textAlign":"center","width":"100%","lineHeight":"64rpx","fontSize":"28rpx","textOverflow":"ellipsis","height":"64rpx"}' class="title ">品牌:{{homeshangpinxinxilist[0].pinpai}}</view>
			  			  			                			  			                			  			                			  			                			  			                			  			                			  			</view>
			<view class="list-item" :style='{"width":"100%","margin":"0 0 20rpx 0","justifyContent":"space-between","display":"flex","height":"auto"}'>
			  <view class="list-item-body" :style='{"width":"48%","padding":"0 0 0 0","margin":"0 0 0 0","height":"auto"}'>
				<view v-if="homeshangpinxinxilist.length > 1" @tap="onDetailTap('shangpinxinxi',homeshangpinxinxilist[1].id)" class="box box2" :style='{"width":"100%","padding":"0 0 0 0","margin":"0 0 20rpx 0","position":"relative","height":"auto"}'>
				  				                    				  <view v-if="true" :style='{"padding":"0 20rpx 0 20rpx","margin":"0 0 0 0","overflow":"hidden","whiteSpace":"nowrap","color":"#333","textAlign":"center","width":"100%","lineHeight":"64rpx","fontSize":"28rpx","textOverflow":"ellipsis","height":"64rpx"}' class="title ">{{homeshangpinxinxilist[1].shangpinmingcheng}}</view>
				  				  				  				  <image :style='{"width":"100%","objectFit":"cover","borderRadius":"8rpx","display":"block","height":"328rpx"}' class="list-item-image" mode="aspectFill" v-if="homeshangpinxinxilist[1].shangpintupian.substring(0,4)=='http'" :src="homeshangpinxinxilist[1].shangpintupian"></image>
				  <image :style='{"width":"100%","objectFit":"cover","borderRadius":"8rpx","display":"block","height":"328rpx"}' class="list-item-image" mode="aspectFill" v-else :src="homeshangpinxinxilist[1].shangpintupian?baseUrl+homeshangpinxinxilist[1].shangpintupian.split(',')[0]:''"></image>
				                    				  				                    				  				                    				  				                    				  				                    				  <view v-if="true" :style='{"padding":"0 20rpx 0 20rpx","margin":"0 0 0 0","overflow":"hidden","whiteSpace":"nowrap","color":"#333","textAlign":"center","width":"100%","lineHeight":"64rpx","fontSize":"28rpx","textOverflow":"ellipsis","height":"64rpx"}' class="title ">品牌:{{homeshangpinxinxilist[1].pinpai}}</view>
				  				  				                    				  				                    				  				                    				  				                    				  				                    				  				                    				  				</view>
				<view v-if="homeshangpinxinxilist.length > 2" @tap="onDetailTap('shangpinxinxi',homeshangpinxinxilist[2].id)" class="box box3" :style='{"width":"100%","padding":"0 0 0 0","margin":"0 0 20rpx 0","position":"relative","height":"auto"}'>
				  				                    				  <view v-if="true" :style='{"padding":"0 20rpx 0 20rpx","margin":"0 0 0 0","overflow":"hidden","whiteSpace":"nowrap","color":"#333","textAlign":"center","width":"100%","lineHeight":"64rpx","fontSize":"28rpx","textOverflow":"ellipsis","height":"64rpx"}' class="title ">{{homeshangpinxinxilist[2].shangpinmingcheng}}</view>
				  				  				  				  <image :style='{"width":"100%","objectFit":"cover","borderRadius":"8rpx","display":"block","height":"164rpx"}' class="list-item-image" mode="aspectFill" v-if="homeshangpinxinxilist[2].shangpintupian.substring(0,4)=='http'" :src="homeshangpinxinxilist[2].shangpintupian"></image>
				  <image :style='{"width":"100%","objectFit":"cover","borderRadius":"8rpx","display":"block","height":"164rpx"}' class="list-item-image" mode="aspectFill" v-else :src="homeshangpinxinxilist[2].shangpintupian?baseUrl+homeshangpinxinxilist[2].shangpintupian.split(',')[0]:''"></image>
				                    				  				                    				  				                    				  				                    				  				                    				  <view v-if="true" :style='{"padding":"0 20rpx 0 20rpx","margin":"0 0 0 0","overflow":"hidden","whiteSpace":"nowrap","color":"#333","textAlign":"center","width":"100%","lineHeight":"64rpx","fontSize":"28rpx","textOverflow":"ellipsis","height":"64rpx"}' class="title ">品牌:{{homeshangpinxinxilist[2].pinpai}}</view>
				  				  				                    				  				                    				  				                    				  				                    				  				                    				  				                    				  				</view>
			  </view>
			  <view class="list-item-body" :style='{"width":"48%","padding":"0 0 0 0","margin":"0 0 0 0","height":"auto"}'>
				<view v-if="homeshangpinxinxilist.length > 3" @tap="onDetailTap('shangpinxinxi',homeshangpinxinxilist[3].id)" class="box box4" :style='{"width":"100%","padding":"0 0 0 0","margin":"0 0 20rpx 0","position":"relative","height":"auto"}'>
				  				                    				  <view v-if="true" :style='{"padding":"0 20rpx 0 20rpx","margin":"0 0 0 0","overflow":"hidden","whiteSpace":"nowrap","color":"#333","textAlign":"center","width":"100%","lineHeight":"64rpx","fontSize":"28rpx","textOverflow":"ellipsis","height":"64rpx"}' class="title ">{{homeshangpinxinxilist[3].shangpinmingcheng}}</view>
				  				  				  				  <image :style='{"width":"100%","objectFit":"cover","borderRadius":"8rpx","display":"block","height":"164rpx"}' class="list-item-image" mode="aspectFill" v-if="homeshangpinxinxilist[3].shangpintupian.substring(0,4)=='http'" :src="homeshangpinxinxilist[3].shangpintupian"></image>
				  <image :style='{"width":"100%","objectFit":"cover","borderRadius":"8rpx","display":"block","height":"164rpx"}' class="list-item-image" mode="aspectFill" v-else :src="homeshangpinxinxilist[3].shangpintupian?baseUrl+homeshangpinxinxilist[3].shangpintupian.split(',')[0]:''"></image>
				                    				  				                    				  				                    				  				                    				  				                    				  <view v-if="true" :style='{"padding":"0 20rpx 0 20rpx","margin":"0 0 0 0","overflow":"hidden","whiteSpace":"nowrap","color":"#333","textAlign":"center","width":"100%","lineHeight":"64rpx","fontSize":"28rpx","textOverflow":"ellipsis","height":"64rpx"}' class="title ">品牌:{{homeshangpinxinxilist[3].pinpai}}</view>
				  				  				                    				  				                    				  				                    				  				                    				  				                    				  				                    				  				</view>
				<view v-if="homeshangpinxinxilist.length > 4" @tap="onDetailTap('shangpinxinxi',homeshangpinxinxilist[4].id)" class="box box5" :style='{"width":"100%","padding":"0 0 0 0","margin":"0 0 0 0","position":"relative","height":"auto"}'>
				  				                    				  <view v-if="true" :style='{"padding":"0 20rpx 0 20rpx","margin":"0 0 0 0","overflow":"hidden","whiteSpace":"nowrap","color":"#333","textAlign":"center","width":"100%","lineHeight":"64rpx","fontSize":"28rpx","textOverflow":"ellipsis","height":"64rpx"}' class="title ">{{homeshangpinxinxilist[4].shangpinmingcheng}}</view>
				  				  				  				  <image :style='{"width":"100%","objectFit":"cover","borderRadius":"8rpx","display":"block","height":"328rpx"}' class="list-item-image" mode="aspectFill" v-if="homeshangpinxinxilist[4].shangpintupian.substring(0,4)=='http'" :src="homeshangpinxinxilist[4].shangpintupian"></image>
				  <image :style='{"width":"100%","objectFit":"cover","borderRadius":"8rpx","display":"block","height":"328rpx"}' class="list-item-image" mode="aspectFill" v-else :src="homeshangpinxinxilist[4].shangpintupian?baseUrl+homeshangpinxinxilist[4].shangpintupian.split(',')[0]:''"></image>
				                    				  				                    				  				                    				  				                    				  				                    				  <view v-if="true" :style='{"padding":"0 20rpx 0 20rpx","margin":"0 0 0 0","overflow":"hidden","whiteSpace":"nowrap","color":"#333","textAlign":"center","width":"100%","lineHeight":"64rpx","fontSize":"28rpx","textOverflow":"ellipsis","height":"64rpx"}' class="title ">品牌:{{homeshangpinxinxilist[4].pinpai}}</view>
				  				  				                    				  				                    				  				                    				  				                    				  				                    				  				                    				  				</view>
			  </view>
			</view>
			<view v-if="homeshangpinxinxilist.length > 5" @tap="onDetailTap('shangpinxinxi',homeshangpinxinxilist[5].id)" class="box box6" :style='{"width":"100%","padding":"0 0 0 0","margin":"0 0 0 0","position":"relative","display":"none","height":"auto"}'>
			  			                			  <view v-if="true" :style='{"padding":"0 20rpx 0 20rpx","margin":"0 0 0 0","backgroundColor":"#00000030","whiteSpace":"nowrap","color":"#fff","textAlign":"center","bottom":"0","overflow":"hidden","left":"0","width":"100%","lineHeight":"64rpx","fontSize":"28rpx","position":"absolute","textOverflow":"ellipsis","zIndex":"1","height":"64rpx"}' class="title ">{{homeshangpinxinxilist[5].shangpinmingcheng}}</view>
			  			  			  			  <image :style='{"width":"100%","objectFit":"cover","display":"block","height":"328rpx"}' class="list-item-image" mode="aspectFill" v-if="homeshangpinxinxilist[5].shangpintupian.substring(0,4)=='http'" :src="homeshangpinxinxilist[5].shangpintupian"></image>
			  <image :style='{"width":"100%","objectFit":"cover","display":"block","height":"328rpx"}' class="list-item-image" mode="aspectFill" v-else :src="homeshangpinxinxilist[5].shangpintupian?baseUrl+homeshangpinxinxilist[5].shangpintupian.split(',')[0]:''"></image>
			                			  			                			  			                			  			                			  			                			  <view v-if="true" :style='{"padding":"0 20rpx 0 20rpx","margin":"0 0 0 0","backgroundColor":"#00000030","whiteSpace":"nowrap","color":"#fff","textAlign":"center","bottom":"0","overflow":"hidden","left":"0","width":"100%","lineHeight":"64rpx","fontSize":"28rpx","position":"absolute","textOverflow":"ellipsis","zIndex":"1","height":"64rpx"}' class="title ">品牌:{{homeshangpinxinxilist[5].pinpai}}</view>
			  			  			                			  			                			  			                			  			                			  			                			  			                			  			</view>
		  </view>
		  		  
		  		  
		  		  
		  		  
			<view v-if="false && 3 == 3" class="idea listIdea" :style='{"width":"100%","padding":"40rpx","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20230815/1b3e2caf374142fcb4d5bdb9448d4e01.png) no-repeat center bottom / cover","display":"block","height":"360rpx"}'>
				<view :style='{"width":"100%","margin":"100rpx 0 0 0","textAlign":"center","background":"none","display":"block","height":"48rpx"}' class="box box1">不后悔过往，不浪费现在</view>
				<view :style='{"width":"100%","textAlign":"center","background":"none","display":"block","height":"48rpx"}' class="box box2">满怀梦想，面对未来</view>
				<view :style='{"width":"20%","background":"#ffffff","display":"none","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#ffffff","display":"none","height":"160rpx"}' class="box box4"></view>
			</view>
		</view>
																																														<!-- 商品列表 -->
		
		
		<!-- 新闻资讯 -->
														<view class="listBox news" :style='{"width":"100%","margin":"40rpx 0 40rpx 0","background":"none","order":"11"}'>
			<view v-if="false && 3 == 1" class="idea newsIdea" :style='{"width":"100%","padding":"40rpx","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20230815/1b3e2caf374142fcb4d5bdb9448d4e01.png) no-repeat center bottom / 100% 100%","display":"block","height":"360rpx"}'>
				<view :style='{"width":"100%","margin":"100rpx 0 0 0","textAlign":"center","background":"none","display":"block","height":"auto"}' class="box box1">走的够远，才懂得前方依旧长路漫漫</view>
				<view :style='{"width":"20%","background":"#ffffff","display":"none","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#ffffff","display":"none","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#ffffff","display":"none","height":"160rpx"}' class="box box4"></view>
			</view>
			
			<view class="title" :style='{"width":"calc(100% - 48rpx)","padding":"32rpx 80rpx","margin":"0 24rpx 24rpx 24rpx","textAlign":"center","background":"url(http://clfile.zggen.cn/20231205/27b350199c7f4e399e889fe0209a6dea.png) no-repeat center top / 100% 100%","height":"auto"}'>
				<view :style='{"padding":"8rpx 60rpx 8rpx 120rpx","color":"#fff","borderRadius":"8rpx","background":"none","display":"inline-block","fontSize":"32rpx","lineHeight":"48rpx","minWidth":"300rpx","fontWeight":"500"}'>公告信息</view>
				<text :style='{"margin":"10rpx 0 0 0","color":"#fcfcfc","display":"inline-block","width":"auto","fontSize":"28rpx","lineHeight":"48rpx","float":"right"}' @tap="onPageTap('news')">查看更多</text>
			</view>
			
			<view v-if="false && 3 == 2" class="idea newsIdea" :style='{"width":"100%","padding":"40rpx","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20230815/1b3e2caf374142fcb4d5bdb9448d4e01.png) no-repeat center bottom / 100% 100%","display":"block","height":"360rpx"}'>
				<view :style='{"width":"100%","margin":"100rpx 0 0 0","textAlign":"center","background":"none","display":"block","height":"auto"}' class="box box1">走的够远，才懂得前方依旧长路漫漫</view>
				<view :style='{"width":"20%","background":"#ffffff","display":"none","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#ffffff","display":"none","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#ffffff","display":"none","height":"160rpx"}' class="box box4"></view>
			</view>
			
					  
						
						
		  <!-- 样式4 -->
		  		  
		  <!-- 样式5 -->
		  		  <view class="news-box2" :style='{"width":"100%","padding":"24rpx 24rpx 24rpx 24rpx","margin":"0 0 0 0","height":"auto"}'>
			<block v-for="(item,index) in news" :key="index">
			  <view @tap="onNewsDetailTap(item.id)" v-if="index==0" class="list-item" :style='{"width":"100%","padding":"0 0 0 0","margin":"0 0 20rpx 0","position":"relative","height":"auto"}'>
				<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"360rpx"}' mode="aspectFill" class="listmpic" :src="baseUrl+item.picture"></image>
				<view :style='{"padding":"0 20rpx 0 20rpx","margin":"0 0 0 0","backgroundColor":"#00000030","whiteSpace":"nowrap","color":"#fff","textAlign":"center","bottom":"0","overflow":"hidden","left":"0","width":"100%","lineHeight":"64rpx","fontSize":"28rpx","position":"absolute","textOverflow":"ellipsis","zIndex":"1","height":"64rpx"}' class="title ">{{item.title}}</view>
			  </view>
			  <view @tap="onNewsDetailTap(item.id)" v-if="index>0" class="list-item" :style='{"width":"100%","height":"auto"}'>
				<view :style='{"padding":"0 20rpx","borderColor":"#ff993350","overflow":"hidden","whiteSpace":"nowrap","color":"#666","borderWidth":"0 0 2rpx 0","width":"100%","lineHeight":"88rpx","fontSize":"28rpx","textOverflow":"ellipsis","borderStyle":"dashed","height":"88rpx"}' class="title ">{{item.title}}</view>
			  </view>
			</block>
		  </view>
		  		  
		  <!-- 样式6 -->
		  		  
		  <!-- 样式7 -->
		  		  
		  <!-- 样式8 -->
		  		  
		  <!-- 样式9 -->
		  			
			<view v-if="false && 3 == 3" class="idea newsIdea" :style='{"width":"100%","padding":"40rpx","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20230815/1b3e2caf374142fcb4d5bdb9448d4e01.png) no-repeat center bottom / 100% 100%","display":"block","height":"360rpx"}'>
				<view :style='{"width":"100%","margin":"100rpx 0 0 0","textAlign":"center","background":"none","display":"block","height":"auto"}' class="box box1">走的够远，才懂得前方依旧长路漫漫</view>
				<view :style='{"width":"20%","background":"#ffffff","display":"none","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#ffffff","display":"none","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#ffffff","display":"none","height":"160rpx"}' class="box box4"></view>
			</view>
		</view>
																																																										<!-- 新闻资讯 -->
				

	</view>
</view>
</template>

<script>
    import menu from '@/utils/menu'
	import '@/assets/css/global-restaurant.css'
	import uniIcons from "@/components/uni-ui/lib/uni-icons/uni-icons.vue"
	export default {
		components: {
			uniIcons
		},
		data() {
			return {
				options2: {
					effect: 'flip',
					loop : true
				},
				options3: {
					effect: 'cube',
					loop : true,
					cubeEffect: {
						shadow: true,
						slideShadows: true,
						shadowOffset: 20,
						shadowScale: 0.94,
					}
				},
				rows: 2,
				column: 4,
                role : '',
                menuList: [],
                swiperMenuList:[],
                user: {},
                tableName:'',

				//轮播
				swiperList: [],
				homeshangpinxinxilist: [],
				news: [],
			}
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			}
		},
        async onLoad(){
            
        },
		async onShow() {
			this.swiperMenuList = []
			let table = uni.getStorageSync("nowTable");
			let res = await this.$api.session(table);
			this.user = res.data;
			this.tableName = table;
			let menus = menu.list();
			this.menuList = menus;
			let role = '管理员'
			this.menuList.forEach((item,key) => {
			    if(role==item.roleName) {
			        item.frontMenu.forEach((item2,key2) => {
						if(item2.child.length) {
							item2.childs = []
						    item2.child.forEach((item3,key3)=>{
								if(item3.buttons.indexOf("查看")>-1){
									item2.childs.push(item3)
									this.swiperMenuList.push(item3);
								}
							})
						}
			            
			        })
			    }
			})
            // let res;
			// 轮播图
			let swiperList = []
			res = await this.$api.list('config', {
				page: 1,
				limit: 5
			});
			for (let item of res.data.list) {
				if (item.value && item.value!="" && item.value!=null ) {
					swiperList.push({
						img: item.value,
                        title: item.name
					});
				}
			}
			if (swiperList) {
				this.swiperList = swiperList;
			}
			// 公告信息
			res = await this.$api.list('news', {
				page: 1,
				limit: 6
			});
			this.news = res.data.list


			res = await this.$api.list('shangpinxinxi', {
				page: 1,

				limit: 6
			});
			this.homeshangpinxinxilist = res.data.list
		},

		methods: {

			//轮播图跳转
			onSwiperTap(e) {

			},
			// 新闻详情
			onNewsDetailTap(id) {
				this.$utils.jump(`../news-detail/news-detail?id=${id}`)
			},
			// 推荐列表点击详情
			onDetailTap(tableName, id) {
				this.$utils.jump(`../${tableName}/detail?id=${id}`)
			},
			onPageTap(tableName){
				if(tableName=='news'){
					uni.navigateTo({
						url: `../news-list/news-list`,
						fail: function(){
							uni.switchTab({
								url: `../news-list/news-list`
							});
						}
					});
					return false
				}

				uni.navigateTo({
					url: `../${tableName}/list`,
					fail: function(){
						uni.switchTab({
							url: `../${tableName}/list`
						});
					}
				});
				// this.$utils.jump(`../${tableName}/list`)
			},
			menuClick(menu, index) {
				if (menu.childs.length > 0 && menu.childs.length == 1) {
					uni.navigateTo({
						url: `../${menu.childs[0].tableName}/list`,
						fail: function() {
							uni.switchTab({
								url: `../${menu.childs[0].tableName}/list`
							});
						}
					});
				} else if (menu.childs.length > 1) {
					let arr = []
					for(let x in menu.childs){
						arr.push(menu.childs[x].menu.length>6?menu.childs[x].menu.substring(0,6):menu.childs[x].menu)
					}
					uni.showActionSheet({
						itemList: arr,
						success: function (res) {
							uni.navigateTo({
								url: `../${menu.childs[res.tapIndex].tableName}/list`,
								fail: function() {
									uni.switchTab({
										url: `../${menu.childs[res.tapIndex].tableName}/list`
									});
								}
							});
						}
					});
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
</style>
