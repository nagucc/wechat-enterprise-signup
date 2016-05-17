# 微信企业号自助注册系统

使用此系统，可以让用户通过指定的url地址注册企业号，之后再通过“关注身份验证”即可关注企业号。

## 使用方法

### 在Docker中使用

1. 编写`docker-compose`脚本

```yaml
web:
  image: nagucc/wechat-enterprise-signup:1.1
  restart: always
  links:
  - redis:wx_redis
  ports:
  - 40001:3000
  environment:
  - WXE_CORPID=your_corpid
  - REDIS_HOST=wx_redis
  - WXE_SECRET=your_secret
  - SUCCESS_URL=http://success_url.com
  - REDIS_PORT=6379
  - NEW_USER_DEPARTMENT_ID=[2]
  - WXE_AGENTID=0
  - WEBSITE_HOSTNAME=wx.nagu.cc
redis:
  image: redis:2.8
  restart: always

```

### 环境变量
系统通过环境变量进行一些参数的设置。可用的环境变量包括：
  - `WXE_CORPID` 必须，企业号的corpId
  - `WXE_SECRET` 必须，企业号管理组的secret
  - `WXE_AGENTID` 默认为`0`，企业号调用此应用的应用编号，一般使用企业小助手调用，编号为0
  - `NEW_USER_DEPARTMENT_ID` 默认为`1`，指定一个组Id，当用户注册之后自动被加入这个组中。
  - `REDIS_PORT` 默认为`6379`，系统使用的redis数据库的端口号
  - `REDIS_HOST` 默认为`localhost` ，系统使用的redis数据库的地址
  - `SUCCESS_URL` 可选，指定一个url，当用户注册成功后跳转到此url
  - `WEBSITE_HOSTNAME` 必须，指定当前系统的地址
  - `TITLE` 默认为`微信企业号自助注册`，指定用户注册页面的标题
  - `HELP_MESSAGE` 默认为`如需帮助，请拨打65031141。`
