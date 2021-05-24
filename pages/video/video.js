// pages/video/video.js
import request from "../../utils/request";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList: [],
    navId:""

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.getUserRecentPlayList();
  },
  // 获取导航
  async getUserRecentPlayList () {
    let navListData = await request('/video/group/list');
    let navList = navListData.data.splice(0, 14)
    this.setData({
      navList,
      navId:navList[0].id
    })
  },
  changeNav(event){
    let navId= event.currentTarget.id;
    this.setData({
      navId
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