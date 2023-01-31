import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
// 引入坐标系
import 'proj4'
import 'proj4leaflet'
import mapConfig from './config/mapConfig'

function initMap() {
  const map = mapFactory('map', {
    attributionControl: false,
    center: mapConfig.mapInitParams.center,
    zoom: mapConfig.mapInitParams.zoom
  })
  createBaseLayers(map, mapConfig.baseMaps, 'ArcGIS影像图')
  const baiduMap = mapFactory('baidu-map', {
    crs: L.CRS.Baidu, 
    center: mapConfig.mapInitParams.center,
    zoom: mapConfig.mapInitParams.zoom
  })
  createBaseLayers(baiduMap, mapConfig.baiduBaseMaps, '百度影像图')
}

function mapFactory(mapId,options) {
  const map = L.map(mapId, options)
  return map
}

function createBaseLayers(map, basemaps, defaultName) {
  const baseLayers = {}
  basemaps.forEach(baseItem => {
    const baseMap = L.tileLayer(baseItem.url, {
      subdomains: baseItem.subdomains,
      styles: ({bigfont}) => bigfont ? 'ph' : 'pl',
      tms: baseItem.tms
    })
    if (baseItem.label === defaultName) {
      map.addLayer(baseMap)
    }
    baseLayers[baseItem.label] = baseMap
  })
  L.control.layers(baseLayers).addTo(map)
}

// 定义百度坐标系
L.CRS.Baidu = new L.Proj.CRS(
  'EPSG:900913',
  `+proj=merc
    +a=6378206
    +b=6356584.314245179
    +lat_ts=0.0
    +lon_0=0.0
    +x_0=0
    +y_0=0
    +k=1.0
    +units=m
    +nadgrids=@null
    +wktext
    +no_defs`, {
  resolutions: function () {
    var res = [],
      level = 19;
    res[0] = Math.pow(2, 18);
    for (let i = 1; i < level; i++) {
      res[i] = Math.pow(2, (18 - i))
    }
    return res;
  }(),
  origin: [0, 0],
  bounds: L.bounds([20037508.342789244, 0], [0, 20037508.342789244])
})

initMap()

