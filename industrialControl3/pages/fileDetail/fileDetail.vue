<template>
	<view class="video_detail">
		<view v-for="item in fileDetail">
			<!--简介-->
			<view class="video_detail_intro" style="border-bottom: none;">
				<view class="intro_title">{{item.title}}</view>
				<view class="intro_info">
					<view class="intro_labels">
						<view class="intro_label_1">标签</view>
					</view>
					<view class="intro_auth">
						<view class="intro_auth_left">
							<view class="intro_auth_left_inner">贡献人: 张三</view>
						</view>
						<view class="comment_list_right">
							<view class="zan_num" style="margin-right: 10rpx;">2</view>
							<image class="answer_time_img" src="../../static/img/btn_comments@2x.png" mode=""></image>
							<view class="zan_num">10</view>
							<image class="answer_time_img" src="../../static/img/btn_zan@2x.png" mode=""></image>
							<view class="zan_num">10</view>
							<image class="answer_time_img" src="../../static/img/btn_scan@2x.png" mode=""></image>
						</view>
					</view>
				</view>
				<view class="intro_content">
					<view class="intro_content_detail">
						<text style="color: #333333;font-size: 26rpx;">描述：</text>
						内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要
					</view>
				</view>
			</view>
			<!--图片 -->
			<view class="image_list">
				<image src="../../static/img/test.jpeg" class="image1"></image>
				<image src="../../static/img/test.jpeg" class="image1 image2"></image>
				<image src="../../static/img/test.jpeg" class="image1 image2"></image>
			</view>
			
			<!--未购买 -->
			<view class="file_price">
				<view class="tips">隐藏部分付费后才可查看</view>
				<button class="btn_1">12元购买</button>
				<button class="btn_2">LV.2会员</button>
			</view>
			
			<!--已购买-->
			<view class="file_paid">
				<view class="download_url">
					<view style="font-size: 20rpx;"><label style="color:#005cb7;font-size: 24rpx;">下载地址：</label>https:mp.flins.com.cn</view>
				</view>
				<view class="words">
					<view style="font-size: 24rpx;"><label style="color:#005cb7;">说明：</label>文字文字</view>
				</view>
				<view class="update">
					<view style="font-size: 20rpx;">更新于：2019.11.21</view>
				</view>
			</view>
		</view>
		
		
		<!-- 评论 -->
		<view class="tab_list">
			<view class="comment_content" v-if="commentList.length > 0">
				<view class="comment_list" v-for="(item,index) in commentList" :key="index">
					<view class="comment_list_first">
						<view class="comment_list_left">
							<image class="author_img" :src="item.avatar.s" mode=""></image>
							<view class="author_name">{{item.nickname}}</view>
						</view>
						<view class="comment_list_right">
							<view class="zan_num">{{item.like_num}}</view>
							<image class="zan_img" src="../../static/img/btn_zan@2x.png" mode=""></image>
						</view>
					</view>
					<view class="comment_inner_comment">{{item.content}}<view class="comment_inner_comment_time">{{item.create_time}}</view></view>
				</view>
			</view>
			<view v-else class="no_data">暂无评论...</view>
		</view>	
	</view>
</template>

<script>
	import { file_info,comments_list } from '../../api/api.js'
	export default {
		data() {
			return {
				fileId: '',
				access_token: '',
				member_id: '',
				commentList: [],
				fileDetail: {}
			}
		},
		onLoad(option) {
			let that = this
			that.fileId = option.id
			uni.getStorage({
			    key: 'access_token',
			    success: function (res) {
			        that.access_token = res.data
			    }
			});
			uni.getStorage({
			    key: 'member_id',
			    success: function (res) {
			        that.member_id = res.data
			    }
			});
			console.log(that.member_id)
			console.log(that.access_token)
			that.getFileDetail()
		},
		methods: {
			//获取文档详情
			getFileDetail(){
				let that = this
				let params = {
					member_id: that.member_id,
					access_token: that.access_token,
					file_id: that.fileId
				}
				file_info(params).then(res => {
					console.log(res)
					if(res.data.code == 1){
						that.fileDetail = res.data.data
					}
				})
			},
			//获取评论列表
			getCommentsList(){
				let that = this
				let params = {
					member_id: that.member_id,
					access_token: that.access_token,
					post_id: that.fileId,
					type: 3, //1-新闻，2-视频，3-文档
					page: 1,
					limit: 10
				}
				comments_list(params).then(res => {
					console.log(res)
					if(res.data.code == 1){
						that.commentList = res.data.data.list
					}
				})
			}
		}
	}
</script>
