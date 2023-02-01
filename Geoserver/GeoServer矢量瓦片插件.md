## GeoServer矢量瓦片插件
### 下载Vector Tiles插件
如果geoserver没有发布矢量瓦片（GeoServer application/x-protobuf;type= mapbox-vector）的选项，需要添加Vector Tiles插件。将下载的压缩包解压后将.jar文件放入geoserver\webapps\geoserver\WEB-INF\lib\路径下，然后重启Geoserver服务。
![](\imgs\vector-tiles.webp)
重启Geoserver服务后，可以选择发布矢量瓦片地图了。
![](\imgs\mapbox-vector.webp)