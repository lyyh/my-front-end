## ISO/OSI
先有模型后有协议，协议出现晚  
1.应用层  
数据，用户接口，提供用户程序'接口'  
2.表示层  
数据，数据的表现形式，特定功能的实现，如数据加密、压缩   
3.会话层  
数据，允许不用机器上的用户之间建立会话关系，如windows.建立会话通信。  
4.传输层  
段，实现网络不同主机用户进程之间的数据通信。可靠的与不可靠的传输，传输层的错误检查，流量控制  
端到端的传输  
5.网络层
包，提供逻辑地址(IP)、选路，数据从源端到目的端的传输。  
6.数据链路层  
帧，将上层数据封住成帧，用MAC地址访问媒介，错误检测与修正  
7.物理层
比特流，设备之间比特流的传输，物理接口，电气特性等。   

数据变化:报文->段->包->帧->字节流

### 应用层
各种应用程序协议:
HTTP(超文本传输控制协议)、FTP(文件传输协议)、TELENT(TCP/IP终端仿真协议)

### 表现层
信息的语法语义及他们的关联，如加密解密、转换翻译、压缩解压缩  

### 会话层
不同机器上用户之间建立管理会话。  
SSL(安全套接字协议) TLS(传输层安全协议)  
安全套接字协议、传输层安全协议  

### 传输层
接收上一层数据，在必要的时候把数据进行分割，并将这些数据交给网络层，且保证这些数据段能够有效达到端口。  
必要时把数据进行分割，并将这些数据交给网络层。

### 网络层
控制子网的运行，如逻辑编址、分组传输、路由选择。  

### 数据链路层
物理寻址，同时将原始比特流变为逻辑传输路线。

### 物理层
机械、电子、定时接口通信道上的原始比特流传输




