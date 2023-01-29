import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
import { transform } from 'ol/proj.js';

// 引入openlayers的样式
import 'ol/ol.css';
import XYZ from 'ol/source/XYZ';

// 天地图key
const TDT_KEY = 'b888d7341fd90864162843d7837307dd'
/*通常使用WGS84存储数据，使用伪墨卡托显示数据
  * EPSG:4326 (WGS84)；EPSG:3857 (Pseudo-Mercator)*/
const center = transform([112.94, 28.21,], "EPSG:4326", "EPSG:3857");
function initMap() {
  const map = new Map({
    target: 'map',
    layers: [
      new TileLayer({
        // 加载天地图矢量图层
        source: new XYZ({
          url: `http://t0.tianditu.gov.cn/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=${TDT_KEY}`,
        }),
        name: 'BaseMap'
      }),
      new TileLayer({
        // 加载天地图文字标注图层
        source: new XYZ({
          url: `http://t0.tianditu.gov.cn/DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=${TDT_KEY}`,
        }),
        name: 'TextMap'
      })
    ],
    view: new View({
      center: center,
      zoom: 11
    })
  })
}

initMap()