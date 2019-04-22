## 服务器安装mongodb

### 1.mongodb安装

以CentOs为例，详细步骤在[mongodb官网](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat/)，其他版本Linux都可以在官网找到。简单整理一下：

1. 使用vim命令创建repo文件 `vim /etc/yum.repos.d/mongodb-org-4.0.repo `，*按 i* 进入编辑模式，复制(shift+ins)以下内容到该文件中，*按 ESC* ，*输入 :wq*，保存退出。

```
[mongodb-org-4.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/4.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-4.0.asc
```

2. 运行命令 `sudo yum install -y mongodb-org`，等安装。
3. 运行命令 `sudo service mongod start`，启动mongodb，全部完成了。

### 2.compass连接服务器mongodb

![mongodb](https://afeifeifei.github.io/class-demo/img/mongodb.jpg)









