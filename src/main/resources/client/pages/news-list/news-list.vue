<template>
<mescroll-uni @init="mescrollInit" :up="upOption" :down="downOption" @down="downCallback" @up="upCallback">
	<view class="content">
		<view :style='{"minHeight":"100vh","width":"100%","padding":"20rpx 0 0 0","position":"relative","background":"#ff993310","height":"auto"}'>
			<view :style='{"padding":"20rpx 0 0 0","alignItems":"center","flex":"1","display":"flex","width":"calc(98% - 120rpx)","position":"relative","justifyContent":"space-between"}'>
				<view :style='{"border":"2rpx solid #ff993350","backgroundColor":"#ffffff","margin":"0 30rpx 0 30rpx","color":"#333333","alignItems":"center","borderRadius":"0px","flex":"1","display":"flex","lineHeight":"64rpx","fontSize":"24rpx","height":"64rpx"}'>
					<text class="iconfont icon-sousuo1" :style='{"margin":"0 16rpx 0 16rpx"}'></text>
					<input v-model="searchForm.title" type="text" placeholder="标题" :style='{"background":"#ffffff","height":"100%"}'></input>
				</view>
				<button @tap="search" :style='{"border":"0px","padding":"0 40rpx 0 40rpx","margin":"0 20rpx 0 0px","borderRadius":"0px","color":"#fff","background":"#ff9933","fontSize":"28rpx","lineHeight":"64rpx","height":"64rpx"}'>搜索</button>
			</view>

			<!-- 样式2 -->
			<view class="news-box2" :style='{"width":"100%","padding":"24rpx 24rpx 24rpx 24rpx","margin":"40rpx 0 40rpx 0","height":"auto","order":"10"}'>
				<block v-for="(product,index) in list" :key="index">
					<view @tap="onDetailTap(product)" v-if="index==0" class="list-item" :style='{"width":"100%","padding":"0 0 0 0","margin":"0 0 20rpx 0","position":"relative","height":"auto"}'>
						<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"328rpx"}' mode="aspectFill" class="listmpic" :src="baseUrl+product.picture"></image>
						<view :style='{"padding":"0 20rpx 0 20rpx","margin":"0 0 0 0","backgroundColor":"#00000030","whiteSpace":"nowrap","color":"#fff","textAlign":"center","bottom":"0","overflow":"hidden","left":"0","width":"100%","lineHeight":"64rpx","fontSize":"28rpx","position":"absolute","textOverflow":"ellipsis","zIndex":"1","height":"64rpx"}' class="title ">{{product.title}}</view>
					</view>
					<view @tap="onDetailTap(product)" v-if="index>0" class="list-item" :style='{"width":"100%","height":"auto"}'>
						<view :style='{"padding":"0 20rpx","borderColor":"#ff993350","overflow":"hidden","whiteSpace":"nowrap","color":"#333","borderWidth":"0 0 2rpx 0","width":"100%","lineHeight":"88rpx","fontSize":"28rpx","textOverflow":"ellipsis","borderStyle":"dashed","height":"88rpx"}' class="title ">{{product.title}}</view>
					</view>
				</block>
			</view>




		</view>
	</view>
</mescroll-uni>
</template>
<script>
	export default {
		data() {
			return {
				list:[],
				searchForm: {},
				mescroll: null, //mescroll实例对象
			}
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			}
		},
		async onShow() {
			// 重新加载数据
			if (this.mescroll) this.mescroll.resetUpScroll()
		},
		async onLoad(options) {
            if(options.userid) {
                this.userid=options.userid;
            } else {
                this.userid = "";
            }
			// 重新加载数据
			if (this.mescroll) this.mescroll.resetUpScroll()
		},
		methods:{
			// mescroll组件初始化的回调,可获取到mescroll对象
			mescrollInit(mescroll) {
				this.mescroll = mescroll;
			},
			/*下拉刷新的回调 */
			downCallback(mescroll) {
				this.hasNext = true
				// 重置分页参数页数为1
				mescroll.resetUpScroll()
			},
			/*上拉加载的回调: mescroll携带page的参数, 其中num:当前页 从1开始, size:每页数据条数,默认10 */
			async upCallback(mescroll) {
				let params = {
					page: mescroll.num,
					limit: mescroll.size
				}
				if(this.searchForm.title){
					params['title'] = '%' + this.searchForm.title + '%'
				}
				let res = {}
				if(this.userid) {
					res = await this.$api.page(`news`, params);
				} else {
					res = await this.$api.list(`news`, params);
				}
				// 如果是第一页数据置空
				if (mescroll.num == 1) this.list = [];
				this.list = this.list.concat(res.data.list);
				let length = Math.ceil(this.list.length/6)
				let arr = [];
				for (let i = 0; i<length; i++){
					arr[i] = this.list.slice(i*6, (i+1)*6)
				}
				this.lists = arr
				if (res.data.list.length == 0) this.hasNext = false;
				mescroll.endSuccess(mescroll.size, this.hasNext);
			},
			onDetailTap(row){
				this.$utils.jump(`../news-detail/news-detail?id=${row.id}`)
			},
			// 搜索
			async search(){
				this.mescroll.num = 1
				let searchForm = {
					page: this.mescroll.num,
					limit: this.mescroll.size
				}
				if(this.searchForm.title){
					searchForm['title'] = '%' + this.searchForm.title + '%'
				}
                let res = {};
                if(this.userid) {
                    res = await this.$api.page(`news`, searchForm);
                } else {
                    res = await this.$api.list(`news`, searchForm);
                }
				// 如果是第一页数据置空
				if (this.mescroll.num == 1) this.list = [];
				this.list = this.list.concat(res.data.list);
				let length = Math.ceil(this.list.length/6)
				let arr = [];
				for (let i = 0; i<length; i++){
					arr[i] = this.list.slice(i*6, (i+1)*6)
				}
				this.lists = arr
				if (res.data.list.length == 0) this.hasNext = false;
				this.mescroll.endSuccess(this.mescroll.size, this.hasNext);
				this.screenBoxShow = false
			}
		}
	}
</script>