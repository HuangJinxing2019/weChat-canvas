//index.js
//获取应用实例
const app = getApp()
let utils = require('../../utils/util')
Page({
  data: {
    imageSrc:'',
    options: [],
  },
  onLoad(){

  },
  onReady(){
    
  },
  canvasDraw(){
    let options = [
      {
        type: 'rect',
        width: 750,
        height: 1334,
        top: 0,
        left: 0,
        background: '#fff'
      },
      {
        type: 'image',
        url: 'https://img.yijian.hk/2020-05-14/20200514195702-fbbd9c95-f0fc-43e5-ab49-b6b66af44f124930596248742728509.png',
        width: 750,
        height: 994,
        round: false,
        top: 0,
        left: 0,
        children: [
          {
            type: 'image',
            url: 'https://img.yijian.hk/bd81c74c716247b7be6c202b395813e9.png',
            width: 100,
            height: 100,
            round: true,
            top: 950,
            left: 30,
            borderRadius: 50
          },
        ]
      },
      {
        type: 'image',
        url: 'https://img.yijian.hk/2020-12-25/20201225102642-TS2105240T.png',
        width: 214,
        height: 214,
        left: 506,
        top: 1065,
      },
      {
        type: 'text',
        content: '张三',
        fontSize: 28,
        color: '#666',
        fontFamily: 'PingFangSC-Regular',
        top: 1069,
        left: 30,
      },
      {
        type: 'text',
        content: '推荐你开通权益会员，享受12项特权，还有权益大礼包领取打飞机大酒店附',
        fontSize: 24,
        color: '#666',
        fontFamily: 'PingFangSC-Regular',
        top: 1115,
        left: 30,
        maxWidth: 446,
        lineHeight: 33 
      },
      {
        type: 'rect',
        width: 446,
        height: 50,
        background: '#F4F4F4',
        round: true,
        borderRadius: 25,
        top: 1220,
        left: 30,
      },
      {
        type: 'text',
        content: '长按图片，识别小程序二维码>>',
        left: 80,
        top: 1229,
        fontSize: 24,
        color: '#616161',
        fontFamily: 'PingFangSC-Regular',
      },
    ]
    this.setData({
      options: options
    })
  },
  canvasChange(e){
    if(e.detail.data.errMsg === "canvasToTempFilePath:ok"){
      this.setData({
        imageSrc: e.detail.data.tempFilePath
      })
    }else{
      wx.showToast({
        title: e.detail.data.errMsg,
        icon: 'none'
      })
    }
    
  },
  imagBindLongTap(e){
    wx.saveImageToPhotosAlbum({
      filePath: e.currentTarget.dataset.url,
      success(res) {
        wx.showToast({
          title: '保存图片成功',
          icon: 'success',
          duration: 2000
        })
      },
      fail(err){
        if(err.errMsg == 'saveImageToPhotosAlbum:fail auth deny'){
          util.toast('失败！请到设置打开访问相册的权限')
        }
      }
    })
  },

 
})
