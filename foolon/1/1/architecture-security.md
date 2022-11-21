# 系统架构安全性
- 认证 ：系统分辨出真正的用户
- 授权 ：系统控制一个用户应该看到什么内容
- 凭证 ：系统保证用户以及另一个被授权的对象，当时的承诺是真实可靠不可动摇的
- 保密 ：系统保证信息不被内部包括管理员在内的人获取
- 传输 ：系统保证信息在传输过程中，不被他人获取
- 验证 ：系统保证输入到系统中的信息都是不会对系统的稳定性和统一性产生影响

## 认证
- ssl/tls 传输安全层的认证

- http认证 建立连接的认证

  基本原理是：客户端向服务器发送请求，服务器作出响应，并且返回401，`WWW-Authenticate:`这个字段表示服务器要让客户端应答的证明途径是什么， 客户端收到401的响应后，发现服务器要证明，那么客户端通过 authorization: 字段将证明发送给服务器，如果服务器证明身份就返回200 否则就返回 403 访问阻止，下面是在服务器响应 401，客户端要发送证明的时候的几种手段 

  - digest ：这种方法就是将用户的密码+盐和用户名，hash计算以后传入服务器端存储起来
  
  - bearer ：OAuth 2的技术
  
  - hoba ：是一种基于自签名证书的认证方案

  - aws4-hmac-sha256 亚马逊的解决方案
  - ntlm/negotiate 微软解决方案
  - windows live id 微软解决方案
  - Twitter basic twitter的解决方案
- web认证 对于来访用户的认证
  > oauth 2.0 和 WebAuthn[关系](https://oauth.net/webauthn/)
  - WebAuthn

  注册的过程：

  用户在系统的注册界面填写好数据后，点击注册信息，服务器暂时保存这些数据，并生成器一个challenge（一个随机的字符串）和用户id返回给客户端，客户端的webauthn API接收到这两个数据后，将其传递给验证器，验证器是客户端可验证的API接口，比如你的指纹，faceid等屋里验证的统一接口，验证器提示用户进行验证（比如让你验证指纹）验证的结果会生成一个私钥和公钥，验证器存储私钥和用户信息以及当前的域名，用私钥对challenge进行签名，将这个签名结果，userid，以及公钥一起返回给客户端，客户端再将数据转发给服务器，服务器会检查userid，并用公钥 解密后的结果出来的challenge和之前的challenge进行验证，如果通过，服务端会存储userid和公钥


  登陆的过程：

  用户填写用户名即可点击登陆，服务器返回一个随机challenge和userid，浏览器将challenge和userid转发给验证器，验证器提示用户进行认证操作，如果验证器已经有了注册时候的私钥，如果域名和用户都对的话，就不会再生成一个新的私钥对了，直接以存储的私钥加密challenge，并且返回给浏览器，浏览器转发给服务器，服务器接收到这个被加密的challenge后，用公钥进行解密，发现就是之前发送的那个challenge，宣布此次登陆有效。

- 认证的实现

## 授权
授权的两个要素1 确保授权的过程可靠 2 确保授权的结果可控

- RBAC
  - 用户
  - 角色
  - 许可
  - 资源
  
  `用户`隶属于`角色`拥有`许可`去操纵`资源`

  - 最小特权原则：角色拥有的权限是根据完成某个任务所需的最小权限来赋予的，比如你的电脑拥有管理员权限和普通权限，当你需要完成的任务不需要管理员权限的时候你
  只需要普通权限即可，如果需要更高权限就申请管理员权限。

  - 角色关联 ： 在rbac中可以对不同的角色权限进行继承，比如，全体员工拥有吃饭的权利，普通工程师拥有提交代码的权利，技术总监拥有开会的权利，那么我们可以这么来分配，给全体员工分配吃饭权利，普通工程师继承这个权利并且加上提交代码的权利，技术总计继承普通工程师的权利并且再加上开会的权利

  - 角色之间的互斥：比如不能让一个角色既拥有出纳的权利又同时拥有财务的权利，互斥也可以是限定某个角色拥有的权限数量，比如不能让一个人拥有从产品需求到代码设计，代码实现，代码测试，后期的维护这全部的权限。

  - 垂直权限 ： 功能权限，xx角色拥有某个功能就是属于垂直权限
  
  - 水平权限 ： 数据权限

  垂直权限可以进行抽象，抽象的某个模型很多用户都可以使用，例如可以很多人拥有一种功能，但是水平权限，因为即便是同样的角色，拥有的数据也不同，因此数据是不能抽象的，需要单独管理


- OAuth2
从原理来说oauth2主要解决对于第三方授权的作用，比如你微信登陆，然后授权给某个app，就是这么个作用。

oauth2的核心就是使用`令牌`去代替容易被泄漏的`密码`

下面做一个演示：有四个角色，第三方应用，用户，授权服务器，资源服务器，第三方应用向用户请求访问资源，用户同意，第三方获得用户的授权然后去访问授权服务器，授权服务器给予令牌给第三方应用，第三方应用使用令牌去访问资源服务器，资源服务器看到令牌后认证成功并将资源释放给三方应用。

举一个实际的例子：你下载了一个淘宝，但是你不想自己输入信息，你可以申请使用支付宝账号进行登陆，你首先在淘宝里点击支付宝登陆，这个时候就是淘宝获取了你的授权，授权去支付宝那里取令牌，这个时候自动跳转到支付宝里，支付宝将令牌给予给淘宝，淘宝获取到这个令牌，就去支付宝的资源服务器拿了你的用户名等信息，然后淘宝获取信息后返回到淘宝里，并且帮你在淘宝建立一个用户，到此结束。

oauth2 一共提供了四种不同的授权方式：

- 授权码模式
  - 第三方应用将用户导向（http 302）授权页面，并且给授权服务器提供clientID，以及一个回调的uri
  - 授权服务器根据clientid来确认第三方的身份，用户在授权服务器中认证并且决定是否授权
  - 如果用户决定授权，授权服务器会调用第三方应用提供的回调uri，并且附带授权码和获取令牌的地址作为参数
  - 第三方应用通过uri获取到授权码，然后通过自己的clientsecret，向授权服务器提供的可以获取令牌的令牌服务器获取令牌，
  - 令牌服务器核对授权码和clientsecret后，向第三方授权令牌，一个是访问令牌，一个是刷新令牌，访问令牌用于访问资源，刷新令牌用户在访问令牌失效后，重新获取访问令牌，刷新令牌比访问令牌的授权时间长
  - 资源服务器根据令牌标注的权限，释放某些资源给第三方
- 隐式授权模式
  - 取消掉授权码，直接发放令牌，作为验证会验证回调uri和注册时期的uri是否是同一个域
  - 没有刷新令牌，也就意味着这种授权的时间很短
  - 使用 fragment (就是类似 https://example.com/d/#/appid23 这个#后面的信息)来传递令牌，因为fragment当客户端发起ajax的时候会忽略它，来最大可能的避免被攻击
- 密码模式
  - 在密码模式中，不仅仅有授权，还有认证
  - 在密码模式中，密码的明文要交给“第三方”因此这个第三方必须是足够的信任，比如一个系统下的其它构建
  - 在密码模式中，第三方拿着用户给的密码去资源服务器去获取令牌和刷新令牌
- 客户端模式
  - 这个模式下，只有第三方和资源服务器，并没有用户这个主体，意思就是直接第三方去获取资源服务器的资源
  - 通常来说微服务之间也是需要进行授权管理的，那么可以使用oauth2.o的客户端模式进行在服务之间进行授权

## 凭证
可以理解为 `凭证 == 令牌` 基本上当你认证后，授权后，就该操弄令牌了。

在传统的我们认知的cookie - session 模式中，把令牌存储在服务器是一个共识，但是在分布式系统中，保存在服务器中cap就会出现不兼容的现象，所以使用jwt令牌的这种方式开始有了一个新的发展。
- cookie & session
  - 这种模式的诞生是为了解决http协议的无状态现象。无状态说的是没有记忆上下文，各种操作前后独立。
  - cookie 记录了 session的id，session记录了一个令牌，所以cookie不会泄密
  - cookie session模式，如果开启了https，就会避免cookie信息的泄漏问题
  - 因为令牌存在于session中，所以服务器可以主动去控制状态。比如给这个cookie设置失效时间
  
- JWT
  cookie season模式无法满足cap理论，而jwt是可以满足cap理论的
  
  jwt就是将信息保存在客户端里的一种机制，这种机制在一个客户端，多个服务器的模式下特别的适合

  当然了，还是无法携带大量的数据，不过呢，被非法更改的毛病还是可以治好的

  jwt只能防止被篡改，但是传递过程是明文传递（仅base64转码）的，所以它不能防止被窥探

  jwt分为三部分，分别是 令牌头.负载.签名
## 保密
保密可以分为在客户端和服务器端的保密，以及传输过程的保密。
- 保密的强度
  - 将密码进行哈希加密
  - 将密码 + 盐以后进行哈希算法加密
  - 将密码 + 动态盐进行哈希算法加密
  - 将动态令牌引入服务中，在网关和其它的流量位置进行校验
  - 启动https防止传输过程中被恶意嗅探
  - 物理隔绝，比如建设u盾（证书物理隔绝），内网
- 客户端加密
  - 为了防止密码在服务器端被滥用（例如被拖库攻击），可以在传入服务器端之前就进行客户端的加密
- 密码存储和验证过程演示
  - 客户端输入明文密码（base64转码也是明文）123456
  - 客户端对用户密码进行哈希摘要，例如md5，sha256，BCrypt等
  - 客户端对已经的摘要再次加盐然后再次取哈希摘要
  - 客户端传过来的这个摘要 + 一个随机的字符串盐，再次得到一个哈希值，然后将这个值和随机数存储在服务器端，这里可以将这两个值存放在一个字段里，比如默认随机盐作为开头计算的结果放在后面

  - 验证密码的过程是这样的，客户端经过相同的算法加密后的摘要传递给后端，后端取数据库中存储的信息，前多少位是盐，然后拿前端的摘要加上这个盐经过相同的加密算法的计算如果等于后面的信息，就证明是真用户
## 传输
- 摘要，加密和签名
- 数字证书
- 传输安全层
## 验证