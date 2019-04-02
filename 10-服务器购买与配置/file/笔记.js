
/*

Linux
    复制/粘贴 命令不是 ctrl+c / ctrl+v   而是  ctrl+ins / shift+ins

 */


/*

* 首先在linux里面安装npm
    yum install npm -y   （可以在任意目录，课堂演示实在/根目录，建议第一次使用linux不熟悉的话，和阿飞老师一模一样的进行操作）

* 检测npm是否安装成功
    npm -v  （centOS的yum安装的npm是3.10.10的版本，比较低，但是不影响后面几步的操作，当完成node安装之后，自动升级npm）

* 通过npm安装 n 模块（n模块的作用是node的版本管理器）
    npm i n -g

* 检测 n模块 是否安装成功（会显示很大一段n的命令）
    n --help

* 通过 n命令 来安装和切换各个版本的node
    安装   n stable    安装稳定版本
          n latest    安装最新的版本
          n x.x.x     安装x.x.x版本的node

    切换
          直接 n 回车，上下方向键选择当前需要的node版本

    （安装/切换 之后，需要关闭一下xshell，才能通过 node -v 检测当前node版本，npm版本也会自动升级）
 */
/*

在服务端运行node项目
    - 在本地测试好
    - 把项目文件通过ftp上传到服务器，注意不要上传 node_modules 因为内容太多很慢，可以在服务器用npm i命令安装依赖
    - 在服务器安全组里面添加安全组规则，开放端口
    - 在xshell运行nodejs文件启动服务
    - 使用 公网ip:端口 的形式，所有人都能访问你的程序

 */

/*
明天预告：
    默认端口
    进程守护
    域名绑定
 */











