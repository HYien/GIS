import L, { map } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import "leaflet.vectorgrid";//引用矢量瓦片插件

/* This code is needed to properly load the images in the Leaflet CSS */
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
})
function initMap() {
  const centerPoint = [28.25,112.46]
  const map = L.map('map',{
    crs: L.CRS.EPSG4326,
    attributionControl: false,
    center: centerPoint,
    zoom: 3
  })
  // const basemap = L.tileLayer('https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{
  //   noWrap: true,
  // })
  // basemap.addTo(map)
  const marker = L.marker(centerPoint)
  marker.addTo(map)
  // 加载矢量瓦片
  loadVetorTile(map)
}

// mouseover高亮的要素
let highLightLayer = null
function clearHighLightLayer(vectorTile) {
  if (highLightLayer) {
    vectorTile.resetFeatureStyle(highLightLayer.properties.NAME)
  }
  highLightLayer = null
}
// 本地geoserver发布的矢量瓦片图层
const url = "http://localhost:8080/geoserver/gwc/service/tms/1.0.0/ne%3Acountries@EPSG%3A4326@pbf/{z}/{x}/{y}.pbf"
const VectorTileOptions = {
  noWrap: true,
  layerURL: url,
  rendererFactory: L.canvas.tile,
  tms: true,//根据自己的情况调整true还是false
  vectorTileLayerStyles: {
    countries: function (properties, zoom) { 
      if (properties.ABBREV_LEN === 5) {
        return {
          weight: 2,
          color: 'pink',
          opacity: 1,
          fillColor: 'green',
          fill: true,
          radius: 6,
          fillOpacity: 0.3
        }
      } else {
        return {
          weight: 2,
          color: 'red',
          opacity: 1,
          fillColor: 'green',
          fill: true,
          radius: 6,
          fillOpacity: 0.6
        }
      }
    }
  },
  interactive: true,	//开启VectorGrid触发mouse/pointer事件
  getFeatureId: function (f) {
    return f.properties.NAME;
  }
}

// 矢量瓦片高亮样式符号style
const HighLightStyle = {
  fillColor: 'yellow',
    fillOpacity: 0.6,
    stroke: true,
    fill: true,
    color: 'blue',
    opacity: 1,
    weight: 3,
    dashArray: '5',
}

function loadVetorTile(map) {
  console.log('加载瓦片矢量地图')
  const vectorTile = new L.vectorGrid.protobuf(url, VectorTileOptions)
  vectorTile.addTo(map)
  vectorTile.on('mouseover', e => {
    clearHighLightLayer(vectorTile)
    highLightLayer = e.layer
    const properties = e.layer.properties;
    vectorTile.setFeatureStyle(e.layer.properties.NAME, HighLightStyle)
    L.popup()
        .setContent(properties.NAME || properties.NAME_ZH)
        .setLatLng(e.latlng)
        .openOn(map);
  })
}

// 初始化地图
initMap()
