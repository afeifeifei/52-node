## 初步了解Git 与 Github



#### 1. 概念

**Github**：*一个网站，我们可以将项目放在这里进行托管*。超多大佬在这里进行各种项目的交流，我可以在这里找到最新最前沿最牛逼的技术，甚至我们还可以参与到某些牛逼项目的开发过程中，由于程序员男性居多，戏称全球最大的同性交友平台。

**Git**：*一个软件，需要下载安装，用来在开发过程中进行版本控制*。Github利用Git来实现项目的版本控制，提交等。Git不仅仅只能服务于Github，因为项目托管平台不仅仅只有Github，还有很多，只不过都没有Github火。

#### 2. 开始使用

- [Github网址](https://github.com/)，进行注册和简单的了解。
- [Git网址](https://git-scm.com/)，在这里下载安装Git。PS：Git的操作是基于命令行的，当然也有UI界面操作，因为命令行比较多，操作起来也很复杂，并且初次接触命令行操作会让人很抓狂的…所以在本次课程中，我们教大家利用webstorm来操作Git上传Github，当大家有一定的基础之后，可以自行了解命令行，推荐[廖雪峰大佬的Git教程](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)，非常详细。
- 通过Webstorm来连接Github：webstorm最终也是操作Git来连接Github的，所以必须先安装好Git。*老师我没有用webstorm*，没有关系，咱们还可以直接操作Git呢！方法参考上面廖雪峰大佬的教程链接。由于webstorm集成了很多很方便于我们前端开发的工具，所以电脑情况允许的条件下，强烈推荐使用webstorm开发。当然其他开发软件也很优秀的，所以不必担心与纠结， *更不要说：“哎呀完了，安装不了webstorm前端没法学了”*，没这么夸张…记事本还能很好的写代码呢…
- 使用Github来查看你的静态网页项目

#### 3. 一些常用的Git命令

感谢风屿老师的友情提供，以下内容可能引起部分同学严重的不适…没接触过的看看就得了…没必要马上学会。

```HTML
操作Git

初始化仓库

使用git init；

添加文件到Git仓库，分两步：

1. 使用git add <filePath>，可反复多次使用，添加多个文件
2. 使用git commit,提交到版本库，完成！

查看仓库状态

- 要随时掌握工作区的状态，使用git status命令。
- 如果git status告诉你有文件被修改，用git diff可以查看修改的内容。

版本回退

- HEAD指向的版本就是当前版本的，因此Git允许我们在版本的历史之间穿梭，使用命令git reset --hard commit_id。
- 穿梭前，用git log可以查看提交历史（commit_id），以便确定要回退到哪个版本。
- 要重返未来，用git reflog查看命令历史，以便确定要回到未来的哪个版本。

了解工作区和暂存区

点我了解：工作区和暂存区的区别



Git是如何跟踪修改的？每次修改，如果不add到暂存区，那就不会加入到commit



情景分析

情景一：当你改乱了工作区某个文件的内容，想直接丢弃工作区的修改时，用命令git checkout -- <file>

情景二：当你不但改乱了工作去文件内容，还add到了暂存区，想丢弃修改，分两步，第一步用命令git reset HEAD <file>，就回到了情景一，第二步按情景一操作。

情景三：已经提交了不合适的修改到版本库时，想要撤销本次提交，参考版本回退，不过前提是没有推送到远程库。



删除文件

命令git rm用于删除一个文件。如果一个文件已经被提交到版本库，那么你永远不用担心误删，但是要小心，你只能恢复文件到最新版本，你会丢失最近一次提交后你修改的内容。

---

origin repository

远程仓库

1. 创建Github账号
2. 创建SSH Key。在用户主目录下，看看有没有.ssh目录，如果有，再看看这个目录下有没有id_rsa和id_rsa.pub这两个文件，如果已经有了，可直接跳到下一步。如果没有，打开Shell（Windows下打开Git Bash），创建SSH Key：
       $ ssh-keygen -t rsa -C "youremail@example.com"
   你需要把邮件地址换成你自己的邮件地址，然后一路回车，使用默认值即可，由于这个Key也不是用于军事目的，所以也无需设置密码。
   如果一切顺利的话，可以在用户主目录里找到.ssh目录，里面有id_rsa和id_rsa.pub两个文件，这两个就是SSH Key的秘钥对，id_rsa是私钥，不能泄露出去，id_rsa.pub是公钥，可以放心地告诉任何人。
3. 登陆GitHub => settings => SSH and GPS keys => new SSH keys
   然后，点“Add SSH Key”，填上任意Title，在Key文本框里粘贴id_rsa.pub文件的内容,
   点“Add Key”。

添加远程库origin

先在GitHub create new repository。然后填上项目名字，点击create。在弹出得界面选择SSH就能看到下面命令里得东西，复制过来就是干。

要关联一个远程库，使用命令git remote add origin git@server-name:path/repo-name.git；

关联后，使用命令git push -u origin master第一次推送master分支的所有内容；

此后，每次本地提交后，只要有必要，就可以使用命令git push origin master推送最新修改；

分布式版本系统的最大好处之一是在本地工作完全不需要考虑远程库的存在，也就是有没有联网都可以正常工作，而SVN在没有联网的时候是拒绝干活的！当有网络的时候，再把本地提交推送一下就完成了同步，真是太方便了！

注意：

当你第一次使用Git的clone或者push命令连接GitHub时，会得到一个警告：

    The authenticity of host 'github.com (xx.xx.xx.xx)' can't be established.
    RSA key fingerprint is xx.xx.xx.xx.xx.
    Are you sure you want to continue connecting (yes/no)?
      
    这是因为Git使用SSH连接，而SSH连接在第一次验证GitHub服务器的Key时，需要你确认GitHub的Key的指纹信息是否真的来自GitHub的服务器，输入yes回车即可。
    Git会输出一个警告，告诉你已经把GitHub的Key添加到本机的一个信任列表里了：
    Warning: Permanently added 'github.com' (RSA) to the list of known hosts.
    这个警告只会出现一次，后面的操作就不会有任何警告了。

从远程库克隆

之前的添加远程库是先有本地库，后有远程库。

假设现在从零开始，那么最好的方式是先创建远程库，然后，本地clone远程库

首先登陆GitHub，创建一个新的仓库。

拿到仓库的地址，然后使用git clone命令克隆。

    git clone git@github.com:username/repositoryname.git

远程仓库

创建与合并分支

每次提交，Git都把它们串成一条时间线，这条时间线就是一个分支。

截止到目前，只有一条时间线，在Git里，这个分支叫主分支，即master分支。

HEAD严格来说不是指向提交，而是指向master，master才是指向提交的，所以，HEAD指向的就是当前分支。

姿势来了：

Git鼓励大量使用分支：

查看分支：git branch

创建分支：git branch <name>

切换分支：git checkout <name>

创建+切换分支：git checkout -b <name>

合并某分支到当前分支：git merge <name>

删除分支：git branch -d <name>

分支冲突

当Git无法自动合并分支时，就必须首先解决冲突。解决冲突后，再提交，合并完成。

用git log --graph命令可以看到分支合并图。

分支管理策略

合并分支时，加上--no-ff参数就可以用普通模式合并，合并后的历史有分支，能看出来曾经做过合并，而fast forward合并就看不出来曾经做过合并。

注意：使用--no-ff合并时会自动创建一个新的commit，所以要加上-m并写上描述。

BUG分支

修复bug时，我们会通过创建新的bug分支进行修复，然后合并，最后删除；

当手头工作没有完成时，先把工作现场git stash一下，然后去修复bug，修复后，再git stash pop，回到工作现场。

Feature分支

开发一个新功能，最好新建一个分支

如果要丢弃一个没有被合并过的分支，可以通过git branch -D <name>强行删除。

多人协作

- 查看远程库信息，使用git remote -v；
- 本地新建的分支如果不推送到远程，对其他人就是不可见的；
- 从本地推送分支，使用git push origin branch-name，如果推送失败，先用git pull抓取远程的新提交；
- 在本地创建和远程分支对应的分支，使用git checkout -b branch-name origin/branch-name，本地和远程分支的名称最好一致；
- 建立本地分支和远程分支的关联，使用git branch --set-upstream branch-name origin/branch-name；
- 从远程抓取分支，使用git pull，如果有冲突，要先处理冲突。

标签管理

发布一个版本时，我们通常先在版本库中打一个标签（tag），这样，就唯一确定了打标签时刻的版本。将来无论什么时候，取某个标签的版本，就是把那个打标签的时刻的历史版本取出来。所以，标签也是版本库的一个快照。

创建标签

- 命令git tag <name>用于新建一个标签，默认为HEAD，也可以指定一个commit id；
- git tag -a <tagname> -m "blablabla..."可以指定标签信息；
- git tag -s <tagname> -m "blablabla..."可以用PGP签名标签；
- 命令git tag可以查看所有标签。
- 用命令git show <tagname>可以看到说明文字

操作标签

因为创建的标签都只存储在本地，不会自动推送到远程。所以，打错的标签可以在本地安全删除。

- 删除标签git tag -d <tagName>
- 如果要推送某个标签到远程，使用命令git push origin <tagName>
  或者一次性推送所有尚未推送到远程的标签git push origin --tags
- 如果标签已经推送到远程，需要删除远程标签：先从本地删除：
      $ git tag -d <tagName>
  然后再删除远程，使用命令push，但是格式如下：
      $ git push origin :refs/tags/<tagName>
  需要查看远程标签是否删除，登陆GitHub查看

配置Git命令别名

有没有经常敲错命令？比如git status？status这个单词真心不好记。

如果敲git st就表示git status那就简单多了，当然这种偷懒的办法我们是极力赞成的。

我们只需要敲一行命令，告诉Git，以后st就表示status：

    $ git config --global alias.st status

好了，现在敲git st看看效果。

更多命令参考廖雪峰，也可以自己配置。
```

