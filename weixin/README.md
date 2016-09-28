## 微信小程序
### 声明周期
App Launch-->App Show-->onLoad-->onShow-->onReady
以上过程在该页面显示过程中只出现一次
### 路由
wx.navigateTo(OBJECT)：保留当前页面，跳转到应用内的某个页面，使用wx.navigateBack可以返回到原页面。  
wx.redirectTo(OBJECT)：关闭当前页面，跳转到应用内的某个页面。  
wx.navigateBack()：关闭当前页面，回退前一页面。  
