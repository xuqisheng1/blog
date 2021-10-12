(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{349:function(t,a,v){t.exports=v.p+"assets/img/cache_control.14921c12.png"},443:function(t,a,v){"use strict";v.r(a);var _=v(42),s=Object(_.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#协议"}},[t._v("#")]),t._v(" 协议")]),t._v(" "),_("ul",[_("li",[t._v("HTTP：HTTP/1.0 HTTP/1.1 HTTP/2 HTTP/3")]),t._v(" "),_("li",[t._v("RARP")]),t._v(" "),_("li",[t._v("DHCP")]),t._v(" "),_("li",[t._v("WEBSOCKET")]),t._v(" "),_("li",[t._v("DNS")]),t._v(" "),_("li",[t._v("HTTPDNS")]),t._v(" "),_("li",[t._v("FTP")]),t._v(" "),_("li",[t._v("SMTP")]),t._v(" "),_("li",[t._v("POP")]),t._v(" "),_("li",[t._v("IMAP")])]),t._v(" "),_("h1",{attrs:{id:"http-缓存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-缓存"}},[t._v("#")]),t._v(" HTTP 缓存")]),t._v(" "),_("h2",{attrs:{id:"响应头"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#响应头"}},[t._v("#")]),t._v(" 响应头")]),t._v(" "),_("p",[_("strong",[t._v("Cache-Control：")]),t._v(" 设置缓存策略")]),t._v(" "),_("ul",[_("li",[t._v("no-storage：不缓存数据到本地")]),t._v(" "),_("li",[t._v("public：允许用户、代理服务器缓存数据到本地")]),t._v(" "),_("li",[t._v("private：只允许用户缓存数据到本地")]),t._v(" "),_("li",[t._v("max-age：缓存的有效时间，多长时间不过期，单位秒(例：Cache-Control: max-age=120)")]),t._v(" "),_("li",[t._v("no-cache：每次需要发送请求给服务器询问缓存是否有变化，再来决定如何使用缓存")])]),t._v(" "),_("p",[_("strong",[t._v("Expires：")]),t._v(" 缓存的过期时间（GMT 格式时间），HTTP/1.0 产物"),_("br"),t._v("\n例：Expires: Wed, 28 Apr 2021 09:27:04 GMT")]),t._v(" "),_("p",[_("strong",[t._v("Pragma")]),t._v(" 作用类似 Cache-Control，HTTP/1.0 产物")]),t._v(" "),_("div",{staticClass:"custom-block warning"},[_("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),_("p",[t._v("优先级：Pragma > Cache-Control > Expires")])]),t._v(" "),_("p",[_("strong",[t._v("Last-Modified：")]),t._v(" 资源的最后一次修改时间"),_("br"),t._v(" "),_("strong",[t._v("etag：")]),t._v(" 请求资源内容哈希值")]),t._v(" "),_("div",{staticClass:"custom-block warning"},[_("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),_("p",[t._v("优先级：etag > Last-Modified")])]),t._v(" "),_("h2",{attrs:{id:"请求头"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#请求头"}},[t._v("#")]),t._v(" 请求头")]),t._v(" "),_("p",[_("strong",[t._v("If-None-Match：")]),t._v(" 将服务器返回的 etag 传给服务器，不匹配，返回新的资源（200 OK）,否则不返回新的资源（304 Not Modified）"),_("br"),t._v("\n**If-Modified-Since：**如果上一次的响应头没有 etag ，有 Last-Modified，就会将 Last-Modified 的值作为请求头的值")]),t._v(" "),_("div",{staticClass:"custom-block warning"},[_("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),_("p",[_("strong",[t._v("Last-Modified 缺陷：")]),_("br"),t._v("\n1.只能精确到秒，如果资源在 1 秒内被修改了，客户端将无法获取最新的资源数据"),_("br"),t._v("\n2.如果某些资源被修改了（最后一次修改事件发生了变化），但是内容并没有发生变化；此时如果使用 Last-Modified，服务端还是会返回资源，浪费了服务器资源")])]),t._v(" "),_("h2",{attrs:{id:"http-缓存的使用流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-缓存的使用流程"}},[t._v("#")]),t._v(" HTTP 缓存的使用流程")]),t._v(" "),_("p",[_("strong",[t._v("以 Cache-Control 为例")])]),t._v(" "),_("ol",[_("li",[t._v("本地发起 GET 请求，先查看本地是否有缓存，本地有缓存，转步骤 2，本地无缓存，转步骤 3；")]),t._v(" "),_("li",[t._v("本地缓存响应头的 Cache-Control 是否为 no-cache，如果是 no-cache，转入步骤 4；不是，转入步骤 5；")]),t._v(" "),_("li",[t._v("向服务器请求资源，请求资源成功，如果响应头的 Cache-Control 不为 no-storage，则将请求到的资源缓存到本地，否则不将资源缓存到本地；")]),t._v(" "),_("li",[t._v("查看上次缓存的响应头是否有 etag，如果有 etag，则发起一个请求头带 If-None-Match，值为缓存响应头的 etag 值的请求到服务；如果上次缓存的请求头没有 etag，查看上次缓存的响应头是否有 Last-Modified，如果有 Last-Modified，则发起一个请求头带 If-Modified-Since，值为缓存响应头的 Last-Modified 值的请求到服务；服务器会根据请求的 If-None-Match 和 If-Modified-Since 判断资源是否有变更，如果没有修改则返回"),_("strong",[t._v("304 Not Modified")]),t._v("；如果资源有变更，则返回"),_("strong",[t._v("200 OK")]),t._v("，并将最新的资源返回；本地根据服务器返回的响应头的 Cache-Control 决定是否缓存。")]),t._v(" "),_("li",[t._v("如果 Cache-Control 不是 max-age，则取出本地缓存的资源；如果 Cache-Control 是 max-age，判断 max-age 是否过期，如果已经过期，则转步骤 4，如果没有过期，则取出本地缓存的资源。")])]),t._v(" "),_("p",[_("strong",[t._v("流程图如下")])]),t._v(" "),_("p",[_("img",{attrs:{src:v(349),alt:"HTTP缓存流程图"}})]),t._v(" "),_("h1",{attrs:{id:"其他"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),_("p",[t._v("WebService RESTful")]),t._v(" "),_("h1",{attrs:{id:"vpn"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vpn"}},[t._v("#")]),t._v(" VPN")]),t._v(" "),_("p",[t._v("VPN 与 代理的区别")]),t._v(" "),_("h1",{attrs:{id:"抓包工具"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#抓包工具"}},[t._v("#")]),t._v(" 抓包工具")]),t._v(" "),_("p",[t._v("Charles")]),t._v(" "),_("h1",{attrs:{id:"网络爬虫"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#网络爬虫"}},[t._v("#")]),t._v(" 网络爬虫")]),t._v(" "),_("p",[t._v("robots.txt")]),t._v(" "),_("h1",{attrs:{id:"无线网络"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#无线网络"}},[t._v("#")]),t._v(" 无线网络")]),t._v(" "),_("p",[t._v("路由器")])])}),[],!1,null,null,null);a.default=s.exports}}]);