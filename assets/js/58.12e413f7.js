(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{457:function(s,a,t){"use strict";t.r(a);var n=t(42),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"ci-cd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ci-cd"}},[s._v("#")]),s._v(" CI&CD")]),s._v(" "),t("p",[s._v("做自动化部署可以分为本地部署和 Jenkins 部署。")]),s._v(" "),t("p",[s._v("公司的源码是放在 Gitlab 上，测试那边使用 Jenkins 做的 CI。下面先介绍怎么完成本地推送代码到 Gitlab 后自动触发 Jenkins 完成构建部署。")]),s._v(" "),t("h2",{attrs:{id:"jenkins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jenkins"}},[s._v("#")]),s._v(" Jenkins")]),s._v(" "),t("p",[s._v("Jenkins 上创建基本的构建任务这里就不说了，主要讲怎么配置触发器和 Gitlab 配合完成自动构建。")]),s._v(" "),t("p",[s._v("Jenkins 上构建触发器有很多种方式，如果安装了 Gitlab Plugin 可以选择这个选项。如果没有安装，可以选择触发远程构建选项。这两个本质都是提供一个 webhook 的 url 给到外部，可以直接通过访问这个 url 触发 Jenkins 的构建。")]),s._v(" "),t("p",[s._v("这里选择触发远程构建来实现, token 设置为 luckypanda-front，JENKINS_URL 是 Jenkins 服务的地址。通过浏览器输入 JENKINS_URL/view/Front/job/LUCKY-PANDA-FRONT/build?token=luckypanda-front 可以测试是否能触发 Jenkins 构建")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("JENKINS_URL/view/Front/job/LUCKY-PANDA-FRONT/build?token"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("luckypanda-front\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("接下来配置 Gitlab")]),s._v(" "),t("h3",{attrs:{id:"gitlab"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gitlab"}},[s._v("#")]),s._v(" Gitlab")]),s._v(" "),t("p",[s._v("Gitlab 支持自定义 webhook，在项目/settings/Integrations 里创建一个 webhook, URL 就填写上 Jenkins 上设置的。")]),s._v(" "),t("p",[s._v("点击 addWebhook。添加成功后可以测试一下连通性。如果不行，可能是 Jenkins 配置问题，需要给匿名用户添加 build 权限。")]),s._v(" "),t("h3",{attrs:{id:"本质"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本质"}},[s._v("#")]),s._v(" 本质")]),s._v(" "),t("p",[s._v("各种 CI 工具实现 Git 提交自动部署本质上都是利用了 Git hooks 的特性。Git 代码仓库是一个裸库，通过自定义 hooks 实现执行不同 events 时执行对应的 hooks 脚本，hooks 脚本对远程 CI 服务器发起请求，完成自动化构建任务。")]),s._v(" "),t("h2",{attrs:{id:"本地的-deploy-脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本地的-deploy-脚本"}},[s._v("#")]),s._v(" 本地的 deploy 脚本")]),s._v(" "),t("p",[s._v("首先可以使用 scipty 扩展项目脚本，在.sh 文件中我们可以写如下的部署命令。\n由于服务器可能没有权限配置免密，使用的是 sshpass 来输入密码。这里需要注意的一个问题是，"),t("code",[s._v("!")]),s._v(" 是个特殊字符，如果密码中包含这个字符就需要做转义处理，否则执行会报错。另外，本地脚本执行 rm 命令时尤其需要注意，尽量写绝对路径，不要写相对路径，如果对 shell 脚本不熟悉，很有可能写出来的变量为空的情况，而如果是 root 权限的话，会导致 remove 掉服务器所有的内容，这是致命的。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/env sh")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#抛出遇到的错误")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" -e\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("cur_date")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +%Y-%m-%d"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$cur_date")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("server_file")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"server-'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${cur_date}")]),s._v('.tar.gz"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("client_file")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"client-'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${cur_date}")]),s._v('.tar.gz"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" -f "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$server_file")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$server_file")]),s._v(' 文件不存在"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"删除'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$server_file")]),s._v('"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -f "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$server_file")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" -f "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$client_file")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$client_file")]),s._v(' 文件不存在"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"删除'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$client_file")]),s._v('"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -f "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$client_file")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"开始构建'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${pwd}")]),s._v('"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run build:test\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"打包完成"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"开始压缩"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zcvf "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$server_file")]),s._v(" -C ./dist "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zcvf "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$client_file")]),s._v(" -C ./dist/assets "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"压缩完成，开始上传服务器"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("server_host")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root@192.168.0.221"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("server_port")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"22"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("server_dist")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/scss/LuckyPanda"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("server_pwd")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"********"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("client_host")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wtttest@192.168.0.154"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("client_port")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"22"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("client_dist")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/images/lpn-front/assets"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("client_pwd")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"********"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查服务器目录是否存在")]),s._v("\nsshpass -p "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$server_pwd")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -p "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$server_port")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$server_host")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mkdir -p '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$server_dist")]),s._v('/"')]),s._v("\n\nsshpass -p "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$client_pwd")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -p "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$client_port")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$client_host")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mkdir -p '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$client_dist")]),s._v('/"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 上传")]),s._v("\nsshpass -p "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$server_pwd")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" -P "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$server_port")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$server_file")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$server_host")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$server_dist")]),s._v("/\n\nsshpass -p "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$client_pwd")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" -P "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$client_port")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$client_file")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$client_host")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$client_dist")]),s._v("/\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"资源上传成功，开始部署"')]),s._v("\n\nsshpass -p "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$server_pwd")]),s._v('"')]),s._v("  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -p "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$server_port")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$server_host")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tar -xvf '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$server_dist")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$server_file")]),s._v(" -C "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$server_dist")]),s._v('/"')]),s._v("\n\nsshpass -p "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$client_pwd")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -p "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$client_port")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$client_host")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tar -xzf '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$client_dist")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$client_file")]),s._v(" -C "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$client_dist")]),s._v('/"')]),s._v("\n\nsshpass -p "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$server_pwd")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -p "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$server_port")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$server_host")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rm  '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$server_dist")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$server_file")]),s._v('"')]),s._v("\n\nsshpass -p "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$client_pwd")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -p "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$client_port")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$client_host")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rm  '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$client_dist")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$client_file")]),s._v('"')]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装服务端依赖")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# sshpass -p "$server_pwd" ssh -p $server_port $server_host "cd $server_dist/; npm install;"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启服务")]),s._v("\nsshpass -p "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$server_pwd")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -p "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$server_port")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$server_host")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" cd '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$server_dist")]),s._v('/; pm2 restart pm2.json"')]),s._v("\n\n\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br"),t("span",{staticClass:"line-number"},[s._v("65")]),t("br"),t("span",{staticClass:"line-number"},[s._v("66")]),t("br"),t("span",{staticClass:"line-number"},[s._v("67")]),t("br"),t("span",{staticClass:"line-number"},[s._v("68")]),t("br"),t("span",{staticClass:"line-number"},[s._v("69")]),t("br"),t("span",{staticClass:"line-number"},[s._v("70")]),t("br"),t("span",{staticClass:"line-number"},[s._v("71")]),t("br"),t("span",{staticClass:"line-number"},[s._v("72")]),t("br"),t("span",{staticClass:"line-number"},[s._v("73")]),t("br"),t("span",{staticClass:"line-number"},[s._v("74")]),t("br"),t("span",{staticClass:"line-number"},[s._v("75")]),t("br"),t("span",{staticClass:"line-number"},[s._v("76")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);