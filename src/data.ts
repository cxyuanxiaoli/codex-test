import type { FeatureCollection, Point } from 'geojson'
export const districts = ['浦东新区', '黄浦区', '静安区', '徐汇区', '虹口区', '杨浦区']
let seed = 42
const random = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296 }
export const sites: FeatureCollection<Point> = { type: 'FeatureCollection', features: Array.from({length: 180}, (_, i) => ({type:'Feature', geometry:{type:'Point', coordinates:[121.40 + random() * .18, 31.16 + random() * .15]}, properties:{id:i + 1, name:`${['城市服务中心','交通监测站','环境感知节点','公共服务设施'][i % 4]} ${String(i+1).padStart(3,'0')}`, district:districts[i % 6], value:Math.round(30 + random() * 70), category:i % 4, status:i % 13 === 0 ? '需关注' : '运行正常'}})) }
export const boundary: FeatureCollection = {type:'FeatureCollection', features:[{type:'Feature',properties:{},geometry:{type:'Polygon',coordinates:[[[121.402,31.175],[121.428,31.16],[121.477,31.166],[121.521,31.182],[121.574,31.21],[121.582,31.258],[121.55,31.298],[121.491,31.31],[121.445,31.291],[121.415,31.244],[121.402,31.175]]]}}]}
export const routes: FeatureCollection = {type:'FeatureCollection',features:[[[121.415,31.2],[121.45,31.218],[121.48,31.235],[121.52,31.25],[121.56,31.28]],[[121.44,31.29],[121.465,31.26],[121.48,31.235],[121.505,31.21],[121.54,31.18]]].map(coordinates=>({type:'Feature',properties:{},geometry:{type:'LineString',coordinates}}))}
export function distance(a:number[],b:number[]) { const rad=Math.PI/180; const v=Math.sin((b[1]-a[1])*rad/2)**2+Math.cos(a[1]*rad)*Math.cos(b[1]*rad)*Math.sin((b[0]-a[0])*rad/2)**2; return 6371*2*Math.atan2(Math.sqrt(v),Math.sqrt(1-v)) }
