(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{517:function(t,s,a){"use strict";a.r(s);var n=a(36),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"代码检查工具"}},[t._v("代码检查工具")]),t._v(" "),a("p",[t._v("代码检查通常会被配置再 CI 中，用于自动检查代码的质量，本次我们介绍三个用于代码检查的工具")]),t._v(" "),a("ul",[a("li",[t._v("go vet / go tool vet")]),t._v(" "),a("li",[t._v("golangci-lint")]),t._v(" "),a("li",[t._v("govulncheck")])]),t._v(" "),a("h2",{attrs:{id:"go-vet-go-tool-vet"}},[t._v("go vet / go tool vet")]),t._v(" "),a("p",[t._v("go vet 命令是 go tool vet 的简单封装，go vet 实际上还是需要调用 go tool vet 才能完成工作，这俩命令的主要目的就是为了基础的代码检查。不过这个命令只能做简单的检查，下面我们介绍一下更常用的工具。")]),t._v(" "),a("h2",{attrs:{id:"golangci-lint"}},[t._v("golangci-lint")]),t._v(" "),a("p",[t._v("首先在介绍 golangci-lint 之前我们先下载它，它是一个 go 语言写的可执行文件，使用")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" install  github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("golangci"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("golangci"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("lint"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("cmd"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("golangci"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("lint@latest \n")])])]),a("p",[t._v("即可下载到本地的～/go/bin/ 目录，这里专门存储使用 go install 下载的使用 go 写的可执行文件，记得将这个路径加入 PATH。")]),t._v(" "),a("p",[t._v("通过在要检查的项目中设置配置文件，用来配置 lint 工具的选项，使用 "),a("code",[t._v(".golangci.yaml")]),t._v(" 即可")]),t._v(" "),a("p",[t._v("例如：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("\nrun:\n  skip-dirs: "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置要忽略的目录")]),t._v("\n    - util\n    - .*~\n    - api/swagger/docs\n  skip-files: "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置不需要检查的go源码文件，支持正则匹配，这里建议包括：_test.go")]),t._v("\n    - "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('".*'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v(".my"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v('.go$"')]),t._v("\n    - _test.go\nlinters-settings:\n  errcheck:\n    check-type-assertions: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这里建议设置为true，如果确实不需要检查，可以写成`num, _ := strconv.Atoi(numStr)`")]),t._v("\n    check-blank: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n  gci:\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将以`github.com/marmotedu/iam`开头的包放在第三方包后面")]),t._v("\n    local-prefixes: github.com/marmotedu/iam\n  godox:\n    keywords: "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 建议设置为BUG、FIXME、OPTIMIZE、HACK")]),t._v("\n      - BUG\n      - FIXME\n      - OPTIMIZE\n      - HACK\n  goimports:\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置哪些包放在第三方包后面，可以设置多个包，逗号隔开")]),t._v("\n    local-prefixes: github.com/marmotedu/iam\n  gomoddirectives: "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置允许在go.mod中replace的包")]),t._v("\n    replace-local: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    replace-allow-list:\n      - github.com/coreos/etcd\n      - google.golang.org/grpc\n      - github.com/marmotedu/api\n      - github.com/marmotedu/component-base\n      - github.com/marmotedu/marmotedu-sdk-go\n  gomodguard: "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 下面是根据需要选择可以使用的包和版本，建议设置")]),t._v("\n    allowed:\n      modules:\n        - gorm.io/gorm\n        - gorm.io/driver/mysql\n        - k8s.io/klog\n      domains: "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# List of allowed module domains")]),t._v("\n        - google.golang.org\n        - gopkg.in\n        - golang.org\n        - github.com\n        - go.uber.org\n    blocked:\n      modules:\n        - github.com/pkg/errors:\n            recommendations:\n              - github.com/marmotedu/errors\n            reason: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("github.com/marmotedu/errors"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(' is the log package used by marmotedu projects."')]),t._v("\n      versions:\n        - github.com/MakeNowJust/heredoc:\n            version: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"> 2.0.9"')]),t._v("\n            reason: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"use the latest version"')]),t._v("\n      local_replace_directives: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n  lll:\n    line-length: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("240")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这里可以设置为240，240一般是够用的")]),t._v("\n  importas: "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置包的alias，根据需要设置")]),t._v("\n    jwt: github.com/appleboy/gin-jwt/v2         \n    metav1: github.com/marmotedu/component-base/pkg/meta/v1\n\n")])])]),a("p",[t._v("使用 golangci-lint run (等于 golangci-lint run ./...  意思就是把所有的包，子包，遍历完全) 你会得到一个类似：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("\ncollie.go:171:41: composites: image/jpeg.Options struct literal uses unkeyed fields "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("govet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err :"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" jpeg.Encode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file, i.img, "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("jpeg.Options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" nil "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t                                    ^\ncollie.go:241:2: printf: "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("fmt.Println"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(" arg list ends with redundant newline "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("govet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tfmt.Println"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"声明：本程序来自GitHub：shgopher,欢迎关注公众号：科科人神；'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v("免费软件，如果使用期间出现任何后果，本软件不承担任何责任谢谢"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t^\ncollie.go:244:2: printf: "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("fmt.Println"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(" arg list ends with redundant newline "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("govet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tfmt.Println"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"运行结束 ☕️ ☕ ☕'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t^\ncollie.go:162:5: SA9001: defers "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" this range loop won't run unless the channel gets closed "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("staticcheck"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t\tdefer file.Close"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t\t^\n")])])]),a("p",[t._v("这样的结果，这样你就会发现是哪个配置的 linter 发出的警告，以及是什么样子的警告。")]),t._v(" "),a("h2",{attrs:{id:"govulncheck"}},[t._v("govulncheck")]),t._v(" "),a("p",[t._v("go 官方维护了一个 https://vuln.go.dev/ 的漏洞库，我们可以使用 "),a("code",[t._v("go install golang.org/x/vuln/cmd/govulncheck@latest")]),t._v(" 的方式，下载目前 (go 1.19) 还在测试阶段的这一功能，"),a("code",[t._v("govulncheck")]),t._v(" 将会是一个独立的工具，并且 go 在 https://pkg.go.dev/golang.org/x/vuln/vulncheck 还提供了相关功能的 API，可以更灵活的去使用这个功能，目前已知的即将推出的功能分别是提供 vscode 插件，以及将此功能集成在 pkg.go.dev 这个 go 包的集合地，也就是说只要被收录在这个网站的 go 包都将自动接受漏洞检查，另外，go 以后可能还会将这个功能直接集成在例如 "),a("code",[t._v("go build")]),t._v(" 这种常用命令上。")]),t._v(" "),a("ul",[a("li",[t._v("下载 govulncheck "),a("code",[t._v("go install golang.org/x/vuln/cmd/govulncheck@latest")])]),t._v(" "),a("li",[t._v("在一个拥有 go.mod 的目录下，使用 govulncheck 跟上一个有 go 文件的路径，例如："),a("code",[t._v("govulncheck ./pkg/watcher")])])]),t._v(" "),a("p",[t._v("只需要这样简单的设置就可以去检查代码中存在的风险和漏洞，govulncheck 就会打印出这样的信息：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("Vulnerability #"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" GO"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2022")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0493")]),t._v("\n  When called with a non"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("zero flags parameter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" the Faccessat\n  function can incorrectly report that a file is accessible"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  Found in"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" golang"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sys"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("unix@v0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20211020064051")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("0ec99a608a1b\n  Fixed in"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" golang"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sys"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("unix@v0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20220412211240")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("33da011f77ad\n  More info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("pkg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dev"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("vuln"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("GO"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2022")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0493")]),t._v("\n")])])]),a("p",[t._v("信息中包括了你引用的某些包出现的一些漏洞，在 fix 中有修复的信息，可以把你引用的包进行一个升级。")]),t._v(" "),a("h2",{attrs:{id:"x-tools-工具系列"}},[t._v("x/tools 工具系列")]),t._v(" "),a("blockquote",[a("p",[t._v("https://pkg.go.dev/golang.org/x/tools#section-readme")])]),t._v(" "),a("p",[t._v("比如检测变量 shadow 的工具")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("go "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" golang.org/x/tools/go/analysis/passes/shadow/cmd/shadow\n")])])]),a("h2",{attrs:{id:"参考资料"}},[t._v("参考资料")]),t._v(" "),a("ul",[a("li",[t._v("https://go.dev/blog/vuln")]),t._v(" "),a("li",[t._v("https://time.geekbang.org/column/article/390401")])])])}),[],!1,null,null,null);s.default=e.exports}}]);