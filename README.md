# ATLAS 城市空间智能工作台

基于 **Vite + Vue 3 + TypeScript + MapLibre GL JS** 的交互式 WebGIS 演示项目。

## 开发

需要 Node.js 20.19+ 或 22.12+。

```bash
npm ci
npm run dev
```

```bash
npm run build
npm run preview
```

## 功能

- 上海中心城区 180 个固定种子的模拟节点，四类设施分组
- 地图缩放、朝北、定位、倾斜视角和全屏
- 图层开关、区域与名称筛选、节点属性查询、目录定位
- 散点与热力可视化，模拟时段播放调整热力强度
- 区域节点数量、活跃指标和关注节点统计
- 多点球面距离测量（公里），筛选结果 GeoJSON 导出
- 浅色、标准、夜间底图效果和响应式界面

`src/data.ts` 提供模拟 GeoJSON；可替换为真实空间数据。底图使用 OpenStreetMap 公共瓦片，需要联网；生产部署应选择符合服务条款与流量要求的瓦片服务。所有节点、路线、边界和指标均为演示数据，时间播放仅改变热力强度，不是历史数据查询。底图请求失败时，本地 GeoJSON 图层仍能渲染。浏览器需要支持 WebGL。

## 文件结构

- `src/App.vue`：工作台与地图交互
- `src/data.ts`：类型化 GeoJSON、模拟数据、距离计算
- `src/style.css`：响应式工作台样式

导出数据坐标采用 WGS 84（EPSG:4326），地图采用 Web Mercator 渲染。无后端、数据库或凭据要求。
