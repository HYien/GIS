// 自己申请得天地图key
const TDT_KEY = 'b888d7341fd90864162843d7837307dd'

const MAP_CONFIG = {
  mapInitParams: {
    center: [28.21,112.94],
    zoom: 12
  },
  baseMaps: [
    {
      label: 'ArcGIS影像图',
      url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      subdomains: '',
      tms: false
    },
    {
      label: 'ArcGIS街道图',
      url: 'http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineCommunity/MapServer/tile/{z}/{y}/{x}',
      subdomains: '',
      tms: false
    },
    {
      label: '天地图街道图',
      url: `http://t{s}.tianditu.gov.cn/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=${TDT_KEY}`,
      subdomains: ["0", "1", "2", "3", "4", "5", "6", "7"],
      tms: false
    },
    {
      label: '天地图影像图',
      url: `http://t{s}.tianditu.gov.cn/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=${TDT_KEY}`,
      subdomains: ["0", "1", "2", "3", "4", "5", "6", "7"],
      tms: false
    },
    {
      label: '高德街道图',
      url: 'http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}',
      subdomains: ["1", "2", "3", "4"],
      tms: false
    },
    {
      label: '高德影像图',
      url: 'http://webst0{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
      subdomains: ["1", "2", "3", "4"],
      tms: false
    },
    {
      label: 'OSM街道图',
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      subdomains: '',
      tms: false
    },
    {
      label: '谷歌街道图',
      url: 'http://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}',
      subdomains: '',
      tms: false
    },
    {
      label: '谷歌影像图',
      url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}',
      subdomains: '',
      tms: false
    }
  ],
  baiduBaseMaps: [
    {
      label: '百度街道图',
      url: 'http://online{s}.map.bdimg.com/onlinelabel/?qt=tile&x={x}&y={y}&z={z}&styles={styles}&scaler=1&p=1',
      subdomains: '0123456789',
      tms: true
    },
    {
      label: '百度影像图',
      url: 'http://shangetu{s}.map.bdimg.com/it/u=x={x};y={y};z={z};v=009;type=sate&fm=46',
      subdomains: '0123456789',
      tms: true
    }
  ]
}

export default MAP_CONFIG