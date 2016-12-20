## 视口viewport
视口指的是移动设备中的设备屏幕窗口。  

在移动端浏览器当中，存在着两种视口，一种是可见视口（也就是我们说的设备大小），另一种是视窗视口（网页的宽度是多少）。什么是可见视口，什么又是视窗视口呢？此处举一个例子：如果我们的屏幕是320像素*480像素的大小（iPhone4），假设在浏览器中，320像素的屏幕宽度能够展示980像素宽度的内容。那么320像素的宽度就是可见视口的宽度，而能够显示的980像素的宽度就是视窗视口的宽度。  

为了显示更多的内容，大多数的浏览器会把自己的视窗视口扩大，简易的理解，就是让原本320像素的屏幕宽度能够容下980像素甚至更宽的内容（将网页等比例缩小）。  

常见viewport数值  
iPhone：980  
iPad：1024  
Android：980  
WinPhone：1024  
为了让用户能够看清晰设备中的内容，因此我们并不让浏览器按照默认的viewport进行展示。此时就需要进行设置，要尽量保持分辨率和媒体设备视口大小比例为1：1，从而得到最佳的显示效果。  

进行视口的设置有两种不同的方法，一种是在meta标签当中，进行视口的设置，通过调整属性值设置视口的具体大小。另一种是使用@viewport进行设置。相比之下，meta更加好用且兼容良好。因此，在此我仅讲解第一种设置方法。  

将视口设置为设备宽度  

<meta　name="viewport"　content= "width=device-width" />
将视口设置为设备宽度，并在最初的时候以放大2倍的方式显示  

<meta　name="viewport"　content= "width=device-width, initial-scale=2.0"　/>
将视口设置为设备宽度，并允许缩放，最大放大到2倍，最小缩小到1/2  

<meta　name="viewport"　content= "width=device-width, maximum-scale=2.0,　miniumum-scale=0.5" />
将视口设置为设备宽度，并禁止缩放  

<meta　name="viewport"　content= "width=device-width, user-scalable=no"　/>
视口的相关知识点  
width 设定布局视口宽度  
height 设定布局视口高度  
initial-scale 设定页面初始缩放比例（0-10.0）  
user-scalable 设定用户是否可以缩放（yes/no）  
minimum-scale 设定最小缩小比例（0-10.0）  
maximum-scale 设定最大放大比例（0-10.0）  
target-densitydpi* 设定目标屏幕的dpi（device-dpi）  

参考资料(http://h5course.lofter.com/post/b4bbd_66a932a)

