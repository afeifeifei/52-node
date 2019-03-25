# 操作Git

## 初始化仓库

使用`git init`；

添加文件到Git仓库，分两步：

1. 使用`git add <filePath>`，可反复多次使用，添加多个文件
2. 使用`git commit`,提交到版本库，完成！


## 查看仓库状态

- 要随时掌握工作区的状态，使用`git status`命令。
- 如果`git status`告诉你有文件被修改，用`git diff`可以查看修改的内容。

## 版本回退

- `HEAD`指向的版本就是当前版本的，因此Git允许我们在版本的历史之间穿梭，使用命令`git reset --hard commit_id`。
- 穿梭前，用`git log`可以查看提交历史（commit_id），以便确定要回退到哪个版本。
- 要重返未来，用`git reflog`查看命令历史，以便确定要回到未来的哪个版本。

## 了解工作区和暂存区

[点我了解：工作区和暂存区的区别](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/0013745374151782eb658c5a5ca454eaa451661275886c6000)



> Git是如何跟踪修改的？每次修改，如果不`add`到暂存区，那就不会加入到`commit`



## 情景分析

情景一：当你改乱了工作区某个文件的内容，想直接丢弃工作区的修改时，用命令`git checkout -- <file>`

情景二：当你不但改乱了工作去文件内容，还`add`到了暂存区，想丢弃修改，分两步，第一步用命令`git reset HEAD <file>`，就回到了情景一，第二步按情景一操作。

情景三：已经提交了不合适的修改到版本库时，想要撤销本次提交，参考`版本回退`，不过前提是没有推送到远程库。



## 删除文件

命令`git rm`用于删除一个文件。如果一个文件已经被提交到版本库，那么你永远不用担心误删，但是要小心，你只能恢复文件到最新版本，你会丢失**最近一次提交后你修改的内容**。

------

# origin repository

## 远程仓库

1. 创建Github账号

2. 创建SSH Key。在用户主目录下，看看有没有.ssh目录，如果有，再看看这个目录下有没有`id_rsa`和`id_rsa.pub`这两个文件，如果已经有了，可直接跳到下一步。如果没有，打开Shell（Windows下打开Git Bash），创建SSH Key：

   ```js
   $ ssh-keygen -t rsa -C "youremail@example.com"
   ```

   你需要把邮件地址换成你自己的邮件地址，然后一路回车，使用默认值即可，由于这个Key也不是用于军事目的，所以也无需设置密码。

   如果一切顺利的话，可以在用户主目录里找到`.ssh`目录，里面有`id_rsa`和`id_rsa.pub`两个文件，这两个就是SSH Key的秘钥对，`id_rsa`是私钥，不能泄露出去，`id_rsa.pub`是公钥，可以放心地告诉任何人。

3. 登陆`GitHub => settings => SSH and GPS keys => new SSH keys`

   然后，点“Add SSH Key”，填上任意Title，在Key文本框里粘贴`id_rsa.pub`文件的内容,

   点“Add Key”。

## 添加远程库origin

先在GitHub create new repository。然后填上项目名字，点击create。在弹出得界面选择SSH就能看到下面命令里得东西，复制过来就是干。

要关联一个远程库，使用命令`git remote add origin git@server-name:path/repo-name.git`；

关联后，使用命令`git push -u origin master`第一次推送master分支的所有内容；

此后，每次本地提交后，只要有必要，就可以使用命令`git push origin master`推送最新修改；

分布式版本系统的最大好处之一是在本地工作完全不需要考虑远程库的存在，也就是有没有联网都可以正常工作，而SVN在没有联网的时候是拒绝干活的！当有网络的时候，再把本地提交推送一下就完成了同步，真是太方便了！

**注意：**

当你第一次使用Git的clone或者push命令连接GitHub时，会得到一个警告：

```js
The authenticity of host 'github.com (xx.xx.xx.xx)' can't be established.
RSA key fingerprint is xx.xx.xx.xx.xx.
Are you sure you want to continue connecting (yes/no)?
  
这是因为Git使用SSH连接，而SSH连接在第一次验证GitHub服务器的Key时，需要你确认GitHub的Key的指纹信息是否真的来自GitHub的服务器，输入yes回车即可。
Git会输出一个警告，告诉你已经把GitHub的Key添加到本机的一个信任列表里了：
Warning: Permanently added 'github.com' (RSA) to the list of known hosts.
这个警告只会出现一次，后面的操作就不会有任何警告了。
```

## 从远程库克隆

之前的添加远程库是先有本地库，后有远程库。

假设现在从零开始，那么最好的方式是先创建远程库，然后，本地clone远程库

首先登陆GitHub，创建一个新的仓库。

拿到仓库的地址，然后使用`git clone`命令克隆。

```js
git clone git@github.com:username/repositoryname.git
```

# 远程仓库

## 创建与合并分支

每次提交，Git都把它们串成一条时间线，这条时间线就是一个分支。

截止到目前，只有一条时间线，在Git里，这个分支叫主分支，即`master`分支。

`HEAD`严格来说不是指向提交，而是指向`master`，`master`才是指向提交的，所以，`HEAD`指向的就是当前分支。

**姿势来了：**

Git鼓励大量使用分支：

查看分支：`git branch`

创建分支：`git branch <name>`

切换分支：`git checkout <name>`

创建+切换分支：`git checkout -b <name>`

合并某分支到当前分支：`git merge <name>`

删除分支：`git branch -d <name>`

## 分支冲突

当Git无法自动合并分支时，就必须首先解决冲突。解决冲突后，再提交，合并完成。

用`git log --graph`命令可以看到分支合并图。

## 分支管理策略

合并分支时，加上`--no-ff`参数就可以用普通模式合并，合并后的历史有分支，能看出来曾经做过合并，而`fast forward`合并就看不出来曾经做过合并。

注意：使用`--no-ff`合并时会自动创建一个新的commit，所以要加上`-m`并写上描述。

## BUG分支

修复bug时，我们会通过创建新的bug分支进行修复，然后合并，最后删除；

当手头工作没有完成时，先把工作现场`git stash`一下，然后去修复bug，修复后，再`git stash pop`，回到工作现场。

## Feature分支

开发一个新功能，最好新建一个分支

如果要丢弃一个没有被合并过的分支，可以通过`git branch -D <name>`强行删除。

## 多人协作

- 查看远程库信息，使用`git remote -v`；
- 本地新建的分支如果不推送到远程，对其他人就是不可见的；
- 从本地推送分支，使用`git push origin branch-name`，如果推送失败，先用`git pull`抓取远程的新提交；
- 在本地创建和远程分支对应的分支，使用`git checkout -b branch-name origin/branch-name`，本地和远程分支的名称最好一致；
- 建立本地分支和远程分支的关联，使用`git branch --set-upstream branch-name origin/branch-name`；
- 从远程抓取分支，使用`git pull`，如果有冲突，要先处理冲突。

# 标签管理

发布一个版本时，我们通常先在版本库中打一个标签（tag），这样，就唯一确定了打标签时刻的版本。将来无论什么时候，取某个标签的版本，就是把那个打标签的时刻的历史版本取出来。所以，标签也是版本库的一个快照。

## 创建标签

- 命令`git tag <name>`用于新建一个标签，默认为`HEAD`，也可以指定一个commit id；
- `git tag -a <tagname> -m "blablabla..."`可以指定标签信息；
- `git tag -s <tagname> -m "blablabla..."`可以用PGP签名标签；
- 命令`git tag`可以查看所有标签。
- 用命令`git show <tagname>`可以看到说明文字

## 操作标签

> 因为创建的标签都只存储在本地，不会自动推送到远程。所以，打错的标签可以在本地安全删除。

- 删除标签`git tag -d <tagName>`

- 如果要推送某个标签到远程，使用命令`git push origin <tagName>`

  或者一次性推送所有尚未推送到远程的标签`git push origin --tags`

- 如果标签已经推送到远程，需要删除远程标签：先从本地删除：

  ```js
  $ git tag -d <tagName>
  ```

  然后再删除远程，使用命令push，但是格式如下：

  ```js
  $ git push origin :refs/tags/<tagName>
  ```

  > 需要查看远程标签是否删除，登陆GitHub查看

# 配置Git命令别名

有没有经常敲错命令？比如`git status`？`status`这个单词真心不好记。

如果敲`git st`就表示`git status`那就简单多了，当然这种偷懒的办法我们是极力赞成的。

我们只需要敲一行命令，告诉Git，以后`st`就表示`status`：

```
$ git config --global alias.st status
```

好了，现在敲`git st`看看效果。

更多命令参考[廖雪峰](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/001375234012342f90be1fc4d81446c967bbdc19e7c03d3000)，也可以自己配置。