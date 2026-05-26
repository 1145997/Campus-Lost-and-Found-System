# Campus Lost and Found System

## 介绍

Campus Lost and Found System 是一个面向校园场景的失物招领全栈项目，包含微信小程序端、后台管理端和 Spring Boot 后端服务。系统围绕“发布、审核、浏览、沟通、完结”这条主流程设计，用来帮助学生快速发布寻物或招领信息，也方便管理员集中审核内容、管理分类、公告、评论和用户数据。

项目适合作为软件工程、Java 后端、前端工程化和微信小程序开发的综合实践展示。

主要模块：

- 微信小程序端：用户登录、发布寻物/招领、浏览列表与详情、公告查看、我的发布、编辑删除、完结记录。
- 后台管理端：管理员登录、信息审核、分类管理、评论管理、公告管理、用户管理、数据统计看板。
- 后端服务：RESTful API、JWT 鉴权、MySQL 持久化、MyBatis-Plus 数据访问、MinIO 文件上传、微信小程序登录接入。

技术栈：

- Backend：Spring Boot 3.5、MyBatis-Plus、MySQL 8、JWT、MinIO、Maven Wrapper
- Admin Web：Vue 3、Vite、TypeScript、Element Plus、Pinia、Axios
- Mini Program：微信原生小程序

目录结构：

```text
.
├── adminend/v3-admin-vite-main/v3-admin-vite-main/ # 后台管理端
├── backend/campuslostfound/                        # Spring Boot 后端
├── miniprogram/GraduateProject/                    # 微信小程序端
├── sql/init.sql                                    # 数据库初始化脚本
├── sql/api.sql                                     # API 示例数据
└── api_info.json                                   # 接口说明导出
```

## 部署

### 1. 准备环境

- JDK 17+
- MySQL 8.0+
- MinIO
- Node.js 20+ 与 pnpm
- 微信开发者工具

### 2. 初始化数据库

先创建数据库：

```sql
CREATE DATABASE campus_lost_found DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

导入初始化脚本：

```bash
mysql -u <user> -p campus_lost_found < sql/init.sql
```

### 3. 配置后端

后端默认使用环境变量覆盖敏感信息，不需要把真实密钥写进仓库。

| 变量 | 说明 |
| --- | --- |
| `DB_URL` | MySQL JDBC 地址 |
| `DB_USERNAME` | 数据库用户名 |
| `DB_PASSWORD` | 数据库密码 |
| `JWT_SECRET` | JWT 签名密钥，生产环境请使用足够长的随机值 |
| `MINIO_ENDPOINT` | MinIO 服务地址 |
| `MINIO_ACCESS_KEY` | MinIO Access Key |
| `MINIO_SECRET_KEY` | MinIO Secret Key |
| `MINIO_BUCKET` | 文件存储桶 |
| `MINIO_READ_PATH` | 文件公开访问路径 |
| `WECHAT_MINIAPP_APPID` | 微信小程序 AppID |
| `WECHAT_MINIAPP_SECRET` | 微信小程序 Secret |

启动后端：

```bash
cd backend/campuslostfound
./mvnw -DskipTests spring-boot:run
```

Windows：

```powershell
cd backend\campuslostfound
.\mvnw.cmd -DskipTests spring-boot:run
```

本地默认 API 入口为：

```text
http://localhost:8080/api
```

### 4. 启动后台管理端

```bash
cd adminend/v3-admin-vite-main/v3-admin-vite-main
pnpm install
pnpm dev
```

开发环境默认走 Vite 代理。需要修改代理目标时，在 `.env.development` 中配置：

```text
VITE_DEV_PROXY_TARGET = http://localhost:8080
```

### 5. 启动微信小程序

使用微信开发者工具导入：

```text
miniprogram/GraduateProject
```

小程序 API 地址在 `miniprogram/GraduateProject/utils/api.js` 中配置。真机调试或上线时请使用自己的 HTTPS 后端域名，并在微信小程序后台配置合法请求域名。

## 亮点

- 完整的三端架构：微信小程序负责校园用户入口，Vue 管理端负责运营审核，Spring Boot 后端统一提供 API。
- 主流程闭环清晰：发布寻物/招领、后台审核、前台展示、详情沟通、记录完结，覆盖真实校园失物招领业务。
- 权限与安全边界明确：后端使用 JWT 保护管理接口，生产密钥、数据库密码、MinIO 配置和微信密钥均通过环境变量注入。
- 文件服务独立：图片上传接入 MinIO，便于从本地开发迁移到服务器或对象存储。
- 工程化基础完整：后端使用 Maven Wrapper，管理端基于 Vite + TypeScript + Element Plus，小程序端保留原生微信工程结构，便于分别部署和维护。
