(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{378:function(a,t,s){a.exports=s.p+"assets/img/no_cache.985811f3.png"},379:function(a,t,s){a.exports=s.p+"assets/img/has_cache.6254b691.png"},520:function(a,t,s){"use strict";s.r(t);var e=s(42),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"http-的缓存机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-的缓存机制"}},[a._v("#")]),a._v(" Http 的缓存机制")]),a._v(" "),e("p",[a._v("网络请求是非常耗时的操作，js 太大或者网络不好时容易出现长时间的白屏。使用 Http 的缓存机制可以有效减少延迟，减少网络带宽消耗。")]),a._v(" "),e("p",[a._v("Http 缓存分为两种，强缓存和协商缓存。")]),a._v(" "),e("p",[a._v("协商缓存不管是否生效，都需要与服务端发生交互。")]),a._v(" "),e("h2",{attrs:{id:"强缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#强缓存"}},[a._v("#")]),a._v(" 强缓存")]),a._v(" "),e("p",[a._v("强缓存直接从本地副本比对读取，返回的状态码是 200。强缓存如果生效，不需要再和服务器发生交互。")]),a._v(" "),e("p",[a._v("强缓存主要包括 "),e("code",[a._v("Expires")]),a._v("和"),e("code",[a._v("Cache-Control")]),a._v("。")]),a._v(" "),e("h3",{attrs:{id:"expires"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#expires"}},[a._v("#")]),a._v(" Expires")]),a._v(" "),e("p",[a._v("Expires 的值为服务端返回的到期时间，即下一次请求时，请求时间小于服务端返回的到期时间，直接使用缓存数据。\nExpires 是 HTTP/1.0 中定义的缓存字段，它有个大问题：客户端和服务端的时间可能快慢不一致，并且客户端的时间是可以自行修改的，所以这个字段不一定能满足预期\n于是 HTTP 1.1 的版本中使用 Cache-Control 替代。")]),a._v(" "),e("h3",{attrs:{id:"cache-control"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cache-control"}},[a._v("#")]),a._v(" Cache-Control")]),a._v(" "),e("p",[a._v("Cache-Control 常见的取值有 private、public、no-cache、max-age，no-store，默认为 private。")]),a._v(" "),e("ul",[e("li",[a._v("private: 客户端可以缓存")]),a._v(" "),e("li",[a._v("public: 客户端和代理服务器都可缓存（前端的同学，可以认为 public 和 private 是一样的）")]),a._v(" "),e("li",[a._v("max-age=xxx: 缓存的内容将在 xxx 秒后失效")]),a._v(" "),e("li",[a._v("s-maxage 代理服务器缓存有效时间")]),a._v(" "),e("li",[a._v("no-cache: 需要使用对比缓存来验证缓存数据（后面介绍）")]),a._v(" "),e("li",[a._v("no-store: 所有内容都不会缓存，强制缓存，对比缓存都不会触发")])]),a._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[a._v("cache"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("control"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" max"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("age"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3600")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" s"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("maxage"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3600")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("代理服务器"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("当 Expires 和 Cache-Control 同时存在时，Cache-Control 的优先级更高。")]),a._v(" "),e("p",[a._v("强缓存对于时间限制的太死，前端中一般只有一些长时间不用更新基础库（如 jq）才会使用。对于更新频繁一点的，需要使用协商缓存。")]),a._v(" "),e("h2",{attrs:{id:"协商缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存"}},[a._v("#")]),a._v(" 协商缓存")]),a._v(" "),e("p",[a._v("协商缓存需要进行比较判断是否可以使用缓存。\n浏览器第一次请求数据时，服务器会将缓存标识与数据一起返回给客户端，客户端将二者备份至缓存数据库中。\n再次请求数据时，客户端将备份的缓存标识发送给服务器，服务器根据缓存标识进行判断，判断成功后，返回 304 状态码，通知客户端比较成功，可以使用缓存数据。")]),a._v(" "),e("p",[a._v("既然协商缓存还是向服务器发起了请求，我们为什么还要用协商缓存？原因是，服务端在进行标识比较后，只返回 header 部分，通过状态码通知客户端使用缓存，不再需要将报文主体部分返回给客户端，报文大小和请求时间都会大大减少。")]),a._v(" "),e("p",[a._v("协商缓存一共有两对，"),e("code",[a._v("Last-Modified / If-Modified-Since")]),a._v("和 "),e("code",[a._v("Etag / If-None-Match")]),a._v("。")]),a._v(" "),e("h3",{attrs:{id:"last-modified-if-modified-since"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#last-modified-if-modified-since"}},[a._v("#")]),a._v(" Last-Modified / If-Modified-Since")]),a._v(" "),e("p",[a._v("Last-Modified: 服务器在响应请求时，告诉浏览器资源的最后修改时间。")]),a._v(" "),e("p",[a._v("If-Modified-Since:再次请求服务器时，通过此字段通知服务器上次请求时，服务器返回的资源最后修改时间。\n服务器收到请求后发现有头 If-Modified-Since 则与被请求资源的最后修改时间进行比对。\n若资源的最后修改时间大于 If-Modified-Since，说明资源又被改动过，则响应整片资源内容，返回状态码 200；\n若资源的最后修改时间小于或等于 If-Modified-Since，说明资源无新修改，则响应 HTTP 304，告知浏览器继续使用所保存的 cache。")]),a._v(" "),e("p",[a._v("缺点：last-modify 是以时刻作为标识的，无法识别 1 秒内的多次修改。而且有些服务器得不到精确的文件的最后修改时间，如果文件时动态生成的，那么该方法的更新时间永远是生成的时间，起不到缓存的作用。")]),a._v(" "),e("p",[a._v("为了解决上述问题，HTTP1.1 是，提出了 Etag/If-none-match 方案")]),a._v(" "),e("h3",{attrs:{id:"etag-if-none-match"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#etag-if-none-match"}},[a._v("#")]),a._v(" Etag / If-None-Match")]),a._v(" "),e("p",[a._v("这对的优先级高于 Last-Modified / If-Modified-Since")]),a._v(" "),e("p",[a._v("Etag: 服务器响应请求时，告诉浏览器当前资源在服务器的唯一标识（生成规则由服务器决定）。\nIf-None-Match：再次请求服务器时，通过此字段通知服务器客户段缓存数据的唯一标识。\n服务器收到请求后发现有头 If-None-Match 则与被请求资源的唯一标识进行比对，\n不同，说明资源又被改动过，则响应整片资源内容，返回状态码 200；\n相同，说明资源无新修改，则响应 HTTP 304，告知浏览器继续使用所保存的 cache。")]),a._v(" "),e("p",[a._v("缓存示意图 1：")]),a._v(" "),e("p",[e("img",{attrs:{src:s(378),alt:""}}),a._v(" "),e("img",{attrs:{src:s(379),alt:""}})]),a._v(" "),e("h2",{attrs:{id:"如何配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何配置"}},[a._v("#")]),a._v(" 如何配置")]),a._v(" "),e("p",[a._v("后端一般都会用 nginx 做反向代理，缓存配置一般也在 nginx 中配置。")]),a._v(" "),e("ul",[e("li",[a._v("Cache-Control")])]),a._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#例1：给js css设置cache-control")]),a._v("\nlocation ~ .*"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("."),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("js"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("css"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("$ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    expires 10d"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("ul",[e("li",[e("p",[a._v("Last-Modified\nLast-Modified 默认也会带上，但是要配合 Cache-Control 使用")])]),a._v(" "),e("li",[e("p",[a._v("Etag\nnginx 默认会开启 etag。如果要关闭可以配置：")])])]),a._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("    etag off"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ol",[e("li",[a._v("上线时的配置业务 js")])]),a._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[a._v("    gzip on"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    etag on"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\ngzip_comp_level "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\ngzip_vary on"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\ngzip_types text"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("plain text"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("css application"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("json application"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("x"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("javascript application"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("javascript text"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("xml application"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("xml application"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("rss"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v("xml text"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("javascript image"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("svg"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v("xml application"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("vnd"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("ms"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("fontobject application"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("x"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("font"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("ttf font"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("opentype"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n                proxy_redirect off"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n                proxy_set_header Host $host"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n                proxy_set_header "),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("X")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("Real"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("IP")]),a._v(" $remote_addr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n                proxy_set_header "),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("X")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("Forwarded"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("For $proxy_add_x_forwarded_for"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n                root "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("images"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[a._v("图片")])]),a._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[a._v("    location "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("~")]),a._v("\\"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("gif"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("jpg"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("jpeg"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("png"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("bmp"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("ico"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("$ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        root "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("www"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("img"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        expires "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("30")]),a._v("d"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);