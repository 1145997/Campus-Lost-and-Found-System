const BASE_URL = "http://127.0.0.1:8080/api"

// 真机或部署环境请改为自己的 HTTPS API 域名。

// true：开发期 mock 登录
// false：真实微信登录
const USE_MOCK_LOGIN = false

module.exports = {
  BASE_URL,
  USE_MOCK_LOGIN
}
