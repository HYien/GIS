import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
/* This code is needed to properly load the images in the Leaflet CSS */
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
})
let map = null
function initMap() {
  const centerPoint = [23.25,113.46]
  map = L.map('map',{
    attributionControl: false,
    center: centerPoint,
    zoom: 15
  })
  const basemap = L.tileLayer('https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}')
  basemap.addTo(map)
  const marker = L.marker(centerPoint)
  marker.addTo(map)
}
// 初始化地图
initMap()