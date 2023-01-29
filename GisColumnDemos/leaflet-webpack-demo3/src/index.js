import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const mapObjs = {
  LMap: {
    mapContainer: 'LMap',
    label: 'ArcGIS影像图',
    url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
  },
  RMap: {
    mapContainer: 'RMap',
    label: 'ArcGIS街道图',
    url: 'http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineCommunity/MapServer/tile/{z}/{y}/{x}'
  }
}

let maps = []
let LMap = null
let RMap = null

function initMap() {
  LMap = L.map(mapObjs.LMap.mapContainer, {
    attributionControl: false,
    center: [28.23, 112.65],
    zoom: 12,
    zoomControl: false
  })
  const leftLayer = L.tileLayer(mapObjs.LMap.url).addTo(LMap)
  RMap = L.map(mapObjs.RMap.mapContainer, {
    attributionControl: false,
    center: [28.23, 112.65],
    zoom: 12,
    zoomControl: false
  })
  const rightLayer = L.tileLayer(mapObjs.RMap.url).addTo(RMap)

  maps = [LMap, RMap]

  maps.map(map => {
    map.on({
      drag: mapLink,
      zoom: mapLink,
      mousemove: onMapMove
    })
  })
}

function mapLink(e) {
  const _this = this
  maps.map(map => {
    map.setView(_this.getCenter(),_this.getZoom())
  })
}

let moveMarker = null
function onMapMove(e) {
  if (moveMarker) moveMarker.remove()
  const icon = L.icon({
    iconUrl: 'hand_pointer.png',
    iconSize: [16, 24]
  })
  moveMarker = L.marker(e.latlng, {
    icon: icon
  })
  if (e.target._container.id === 'LMap') {
    moveMarker.addTo(RMap)
  } else {
    moveMarker.addTo(LMap)
  }
}

initMap()