## 1. 安装Java
### 1.1 从官网下载安装包（https://www.java.com/en/download/)
![](\imgs\download.png)

### 1.2 解压安装java
安装包下载完成后，解压安装。
![](\imgs\java.png)

### 1.3 配置java环境变量

1. 首先右键电脑属性，找到高级系统设置
![](\imgs\高级设置.png)
2. 环境变量设置
![](\imgs\环境变量.png)
3. java环境变量设置
![](\imgs\java环境变量设置.png)

### 1.4 测试java是否安装成功
点击window+R，运行cmd，分别输入java -version，出现java版本号则表示安装成功。
![](\imgs\java-version.png)

## 2. 下载geoserver
进入geoserver官网，选择Stable版进行下载。地址：<a href="https://geoserver.org/download/">Download</a>
![](\imgs\geoserver-download.png)
我们选则Platform Independent Binary版本进行下载。
![](\imgs\binary-version.png)
下载完成后进行解压，进入文件夹中bin文件夹，双击startup.bat。
![](\imgs\bin.png)
![](\imgs\startup.png)
如果服务成功启动，则出现下图的界面。
![](\imgs\started.png)

## 3. 进入geoserver地图服务界面
点击 (http://localhost:8080/geoserver/web/)，输入用户名及密码，则可以使用geoserver进行地图发布了。
username: admin
password: geoserver
![](\imgs\geoserver-page.png)