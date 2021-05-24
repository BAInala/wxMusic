// pages/index/index.js
import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList: [],// 轮播图
    recommandMusic:[],//推荐歌曲
    toplist:[],// 排行榜
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // 轮播
    let bannerListData = await request('/banner', { type: 2 }
    )
    // 推荐歌曲
    let recommandMusic = await request('/personalized',{limit:15}
    )

    this.setData({
      bannerList: bannerListData.banners,
      recommandMusic:recommandMusic.result,
    })
    this.getTopList();

  
// 排行榜


  },
  async getTopList(){
    // 排行 拿6个 0-5
    // 拿到一次 存放一次 先展示
    // index++  先用值 再加
    // slice 不会修改原数组
    let index=0;
    let listArr=[];
    while(index<6){
       let topAlldata=await request('/top/list',{idx:index++})
       let topList={
         name:topAlldata.playlist.name,
         tracks:topAlldata.playlist.tracks.slice(0,3)
       }
       listArr.push(topList)
    }
    // 房子while外面  不会出现白屏  不需要等待请求全部结束
    this.setData({
      toplist:listArr,
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})