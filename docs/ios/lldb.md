# 通用格式

< command > [< subcommand > [< subcommand >...]] < action > [-options [ optionvalue ]] [argument [ argument...]]

# 打印

**print**、**p**：打印；**p** 是 **expr-** 的缩写  
**po**：如果接收到的参数是一个指针，会调用对象的 description 方法并打印，如果接收到的参数时一个 core foundation 对象，那么他会调用 CFShow 方法并打印；如果这两个方法都调用失败，那么 **po** 和 **p** 的打印内容相同；**po**是 **expr -o-** 的缩写

# 内存

<font color="#000000">**读取内存：**</font>  
memory read/[数量][格式][字节数] <内存地址>  
x/[数量][格式][字节数] <内存地址>  
例：x/3xw 0x10010

<font color="#000000">**修改内存：**</font>  
memory write <内存地址> <数值>  
例：memory write 0x10010 10

<font color="#000000">**格式：**</font>  
**x**是 16 进制  
**f**是浮点  
**d**是 10 进制

<font color="#000000">**字节数：**</font>  
**b：** byte，1 字节  
**h：** half word，2 字节  
**w：** word，4 字节  
**g：** giant word，8 字节

# 断点

breakpoint set -a 函数地址  
breakpoint set -n 函数名
:::warning
C 函数打断点：breakpoint set -n test  
OC 函数打断点：breakpoint set -n "[ViewController touchesBegan:withEvent:]”
:::
