# JSPatch

## 理解

### [JPEngine startEngine]

在 AppDelegate 中，执行 [JPEngine startEngine] 时，会生成一个全局静态的 JSContext 对象：

```objc
static JSContext *_context;

if (![JSContext class] || _context) { return; }
JSContext *context = [[JSContext alloc] init];
_context = context;
```

定义一些列 block 回调给 JS 调用

```objc
context[@"_OC_defineClass"] = ^(NSString *classDeclaration, JSValue *instanceMethods, JSValue *classMethods) {
    return defineClass(classDeclaration, instanceMethods, classMethods);
};
//···
```

添加对 JS 执行异常的捕捉

```objc
context.exceptionHandler = ^(JSContext *con, JSValue *exception) {
    NSLog(@"%@", exception);
    _exceptionBlock([NSString stringWithFormat:@"js exception: %@", exception]);
};
```

定义 JS 环境中 \_OC_null 变量

```objc
static NSObject *_nullObj;

_nullObj = [[NSObject alloc] init];
context[@"_OC_null"] = formatOCToJS(_nullObj);

static id formatOCToJS(id obj) {
    if ([obj isKindOfClass:[NSString class]] || [obj isKindOfClass:[NSDictionary class]] || [obj isKindOfClass:[NSArray class]] || [obj isKindOfClass:[NSDate class]]) {
        return _autoConvert ? obj: _wrapObj([JPBoxing boxObj:obj]);
    }
    if ([obj isKindOfClass:[NSNumber class]]) {
        return _convertOCNumberToString ? [(NSNumber*)obj stringValue] : obj;
    }
    if ([obj isKindOfClass:NSClassFromString(@"NSBlock")] || [obj isKindOfClass:[JSValue class]]) {
        return obj;
    }
    return _wrapObj(obj);
}

static NSDictionary *_wrapObj(id obj)
{
    if (!obj || obj == _nilObj) {
        return @{@"__isNil": @(YES)};
    }
    return @{@"__obj": obj, @"__clsName": NSStringFromClass([obj isKindOfClass:[JPBoxing class]] ? [[((JPBoxing *)obj) unbox] class]: [obj class])};
}
```

初始化其他用到的全局变量

```objc
_nilObj = [[NSObject alloc] init];
_JSMethodSignatureLock = [[NSLock alloc] init];
_JSMethodForwardCallLock = [[NSRecursiveLock alloc] init];
_registeredStruct = [[NSMutableDictionary alloc] init];
_currInvokeSuperClsName = [[NSMutableDictionary alloc] init];
```

执行 JSPatch.js 文件初始化 JS 执行环境

```objc
static void (^_exceptionBlock)(NSString *log) = ^void(NSString *log) {
    NSCAssert(NO, log);
};

NSString *path = [[NSBundle bundleForClass:[self class]] pathForResource:@"JSPatch" ofType:@"js"];
if (!path) _exceptionBlock(@"can't find JSPatch.js");
NSString *jsCore = [[NSString alloc] initWithData:[[NSFileManager defaultManager] contentsAtPath:path] encoding:NSUTF8StringEncoding];
if ([_context respondsToSelector:@selector(evaluateScript:withSourceURL:)]) {
    [_context evaluateScript:jsCore withSourceURL:[NSURL URLWithString:@"JSPatch.js"]];
} else {
    [_context evaluateScript:jsCore];
}
```

### JSPatch.js

JSPatch 定义了一个 JS 全局变量 global

```js
var global = this;
```

执行了一个 JS 函数

```js
(function() {···})()
```

该函数内部定义了一系列供 JS 原生调用的函数

```js
var _formatOCToJS = function(obj) {}
var _methodFunc = function(instance, clsName, methodName, args, isSuper, isPerformSelector) {}
var _require = function(clsName) {}
var global.require = function() {}
var _formatDefineMethods = function(methods, newMethods, realClsName) {}
var _wrapLocalMethod = function(methodName, func, realClsName) {}
var _setupJSMethod = function(className, methods, isInst, realClsName) {}
var _propertiesGetFun = function(name){}
var _propertiesSetFun = function(name){}
global.defineClass = function(declaration, properties, instMethods, clsMethods) {}
global.defineProtocol = function(declaration, instProtos , clsProtos) {}
global.block = function(args, cb) {}
if (global.console) {
    var jsLogger = console.log;
    global.console.log = function() {
      global._OC_log.apply(global, arguments);
      if (jsLogger) {
        jsLogger.apply(global.console, arguments);
      }
    }
  } else {
    global.console = {
      log: global._OC_log
    }
  }
global.defineJSClass = function(declaration, instMethods, clsMethods) {}
```

注意在这个函数内部还执行了以下操作:  
给 Object 的原型对象新增 **\_\_c**、**super**、**performSelectorInOC**、**performSelector** 四个不可配置和不可枚举的属性，这样所有对象如果没有重新定义这些属性，都能通过原型链找到 Object.prototype 中对应的属性

```js
var _customMethods = {
    __c: function(methodName) {}
    super: function() {}
    performSelectorInOC: function() {}
    performSelector: function() {}
}
for (var method in _customMethods) {
    if (_customMethods.hasOwnProperty(method)) {
        Object.defineProperty(Object.prototype, method, {value: _customMethods[method], configurable:false, enumerable: false})
    }
}
```

### Demo.js

在执行 Demo.js 之前，通过正则匹配把所有 Demo.js 里所有 OC 语法的方法调用替换成 \_\_c 函数调用

```js
UIView.alloc().init()
->
UIView.__c('alloc')().__c('init')()
```

执行正则替换的核心代码如下

```objc
static NSRegularExpression* _regex;

if (!_regex) {
     _regex = [NSRegularExpression regularExpressionWithPattern:@"(?<!\\\\)\\.\\s*(\\w+)\\s*\\(" options:0 error:nil]
}

NSString *replacedScript = [_regex stringByReplacingMatchesInString:script options:0 range:NSMakeRange(0, script.length) withTemplate:_replaceStr];
NSString *formatedScript = [NSString stringWithFormat:@";(function(){try{\n%@\n}catch(e){_OC_catch(e.message, e.stack)}})();", replacedScript];
```

## 疑惑

#### 执行 JS 前的方法替换正则匹配怎么写？

```objc
static NSRegularExpression *_regx;
if(!_regx) {
    _regx = [NSRegularExpression regularExpressionWithPattern:@“(?<!\\\\)\\.\\s*(\\w+)\\s*\\(” options:0 error:nil];
}
NSString *replacedScript = [_regex stringByReplacingMatchesInString:script options:0 range:NSMakeRange(0, script.length) withTemplate:_replaceStr];
NSString *formatedScript = [NSString stringWithFormat:@";(function(){try{\n%@\n}catch(e){_OC_catch(e.message, e.stack)}})();", replacedScript];
```
