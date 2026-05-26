const API_ORIGIN = "https://your-api-domain.example.com"
const BASE_URL = `${API_ORIGIN.replace(/\/$/, "")}/api`

// 真机调试或线上部署时，请将 API_ORIGIN 替换为已备案并配置到小程序后台的 HTTPS 域名。
// true: 开发期 mock 登录
// false: 真实微信登录
const USE_MOCK_LOGIN = false

module.exports = {
  API_ORIGIN,
  BASE_URL,
  USE_MOCK_LOGIN
}
