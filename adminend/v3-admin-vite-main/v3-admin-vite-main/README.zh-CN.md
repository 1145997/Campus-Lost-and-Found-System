# Campus Lost and Found Admin

Campus Lost and Found System 的后台管理端，基于 Vue 3、Vite、TypeScript、Element Plus、Pinia、Axios 和 ECharts 构建。

## 功能

- 管理员登录与 token 会话管理
- 失物招领信息审核
- 失物招领记录管理
- 分类、评论、公告、用户管理
- 首页统计卡片与近 7 天发布趋势图

## 开发

```bash
pnpm install
pnpm dev
```

开发环境接口代理在 `.env.development` 中配置：

```text
VITE_BASE_URL = /api
VITE_DEV_PROXY_TARGET = http://localhost:8080
```

## 构建

```bash
pnpm build
```

生产部署时，`VITE_BASE_URL` 可以使用 `/api` 这类反向代理路径，也可以使用已经配置 CORS 的 HTTPS API 域名。
