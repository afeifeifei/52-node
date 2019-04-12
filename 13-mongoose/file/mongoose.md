## mongoose

[mongoose官方文档](https://mongoosejs.com/docs/guide.html)

[mongoose中文文档](http://mongoosejs.net/docs/)

### 1.安装

```
npm i mongoose -S
```

### 2.连接

```js
const mongoose = require("mongoose");

//连接 test 数据库
mongoose.connect("mongodb://localhost:27017/test",{useNewUrlParser:true});
```

一般情况下，我们可以使用connect连接单个数据库，假设有链接多个的需求，可以使用[createConnect](http://mongoosejs.net/docs/connections.html)的方式。

### 3.检测

- 方法1 （一般使用这个比较方便，记这一个就可以了）

```js
mongoose
	.connect("mongodb://localhost:27017/test",{useNewUrlParser:true})
	.then(()=>{console.log("数据库连接成功")})
	.catch(()=>{ console.log("数据库连接失败")}));
```

- 方法2 

```js
mongoose.connection.once("open",()=>{
    console.log("数据库连接成功");
});
mongoose.connection.once("error",()=>{
    console.log("数据库连接失败");
});
```

### 4.Schema

在建表之前，需要先定义该表的**Schema**，规定好接下来往表中存储什么样的数据格式。

例如，我们准备往数据库中建立一个用户信息表`user`，那我们先要规定好`user`表的**Schema**。

```js
const userSchema = new Schema({
    userName : String, //只有类型要求，无其他要求，可以直接写类型
    password : {type:String,required:true}, //多个要求，传入对象
    registerDate : {type:Date,default:Date.now}, //多个要求，传入对象
    //可以嵌套多层结构
    userInfo : {
        status : {type:String,default:"这人很吊，没有个性签名。"},
        email : {type:String}
    },
    //定义数组，可以存放任意格式数据
    any : [],
    //定义数组，可以存放String格式数据
    friend : [String],
    //定义数组，可以存放指定的另外一个Schema规定的数据
    other : [otherSchema]
});
```

Schema中[选项](http://mongoosejs.net/docs/schematypes.html)有多个，常用的有三个`type 数据类型` `required 是否必须` `default 默认值`。

Schema的[数据类型](http://mongoosejs.net/docs/schematypes.html)有：`String Number Date Boolean Buffer Mixed ObjectId Array Decimal128`。

Schema构造函数可以接受第二个对象参数，比如我们可以传入`{versionKey : false}`来取消每项数据的版本信息。

### 5.建表

定义好了表的Schema，就可以建表了。（已经存在对应的表的话，就是连接该表得到返回值以便后续操作）

```js
//建立一个名为 "users"（存储到数据库的时候，mongoose默认为表名补上"s"）的表，比指定表数据规则 userScheme
//返回值定义一个变量来接收，用于接下来的增删改查操作
const user = mongoose.model("user",userScheme);
```

注意1：如果第一次建立 "users" 表，且不存数据的话，这个表是不会在数据库中建立的。

注意2：这和连接数据库是同步代码，但是不用担心连接的异步问题，mongoose会自动在连接成功之后处理。

### 6.增删改查

可以使用*回调*、*Promise*或者*async函数*的形式来检测接来下的各种操作是否成功，推荐*Promise*。

删除更新等操作**没有错误捕捉（或者回调函数）的情况下，是不执行的**，所以建议为每项操作添加上错误捕捉。

- 增删

```js
//增 create
user.create({
    userName : "afeifei",
    password : "123456"
});

//删  deleteOne  deleteMany
user.deleteOne({userName:"afeifei"}).catch(err=>{if(err)throw err});
```

- 查

删除操作的时候第一个参数其实就是查询条件，接下来我们专门学习一下查询操作。

```js
//查  find  findOne  findById
/*
Model.find( conditions, [projection], [options], [callback] );
	conditions  查询条件
	projection  返回内容选项
	options     查询配置选项
	callback    回调函数，参数err data，可用Promise代替
*/
/*
conditions 常用查询条件，详细查询条件请参考官方文档
	{}                      基础条件块，eg:  {name:"afei"}
	
	$or $nor                或者 或者取反，eg:  {$or:[{name:"afei"},{age:"20"}]}
	
	$gt $gte $lt $lte $ne   大于 大于等于 小于 小于等于 不等于，eg:  {age:{$lt:20}}
	$in $nin                在/不在 指定的多个字段之类，eg:  {name:{$in:["afei","zhuque"]}}
	$exists                  存在某属性，eg:  {age:{$exists:true}}
	
	$size                   数组长度匹配，eg:  {arr:{size:2}}
	$all                    数组中是否存在指定的所有项，eg:  {arr:{$all:[123,456]}}
	
	$where                  可以使用JavaScript代码或函数，eg:  {$where:"this.age===18"}
	正则                    使用正则匹配，eg:  {name:/afei/}
*/
/*
projection  返回内容选项
	默认全部显示，
	{age:1}        只显示age属性和_id属性
	{age:1,_id:0}  只显示age属性
*/
/*
options  查询配置选项
	常用skip limit sort
	{skip:2}         略过前2条数据
	{limit:5}        最多返回5条属性
	{sort:{age:1}}   按照age项升序排列
*/
```

```js
user
    .find(
        {userName:"afeifei"}
    )
    .then(data=>{
        console.log(data);
    })
    .catch(e=>{
        console.log(e);
    });
```

```js
user
    .find(
        {age:{$lt:20}}
    )
    .then(data=>{
        console.log(data);
    })
    .catch(e=>{
        console.log(e);
    });
//等价于使用whereAPI  user.where("age").lt(21).exec(function(e,data){});
```

```js
user
    .find(
        {userName:"afeifei"},
        {userName:1,_id:0}
    )
    .then(data=>{
        console.log(data);
    })
    .catch(e=>{
        console.log(e);
    });
```

```js
user
    .find(
        {userName:"afeifei"},
        {userName:1,_id:0},
    	{skip:2,limit:3,sort:{age:1}}
    )
    .then(data=>{
        console.log(data);
    })
    .catch(e=>{
        console.log(e);
    });
```

- 改

```js
//改 update updateOne updateMany findByIdAndUpdate
/*
Model.update(conditions,doc,[options],[callback])
	conditions   查询条件（和find一样）
	doc          要修改的内容
	options      选项
	callback     回调 参数err,info(更新成功的信息) ，可以用Promise代替
*/
/*
doc 要修改的内容
	{password:"456"}                     修改 password 为"456"  
	{$set:{"userInfo.test":"123"}}       修改 userInfo.test 为"123"
	{$inc:{age:1}}                       修改 age  自增1
	{$unset:{age:0}}                     移除 age 属性（值随便写啥都是移除）
	
	{$push:{arr:999}}                    为 arr数组 添加一条 999 值
	{$push:{test: {$each:[1,4,5,9],$slice:-5}}}  为 arr数组 添加 1 4 5 9 值，并截取倒数5个
	{$addToSet:{arr:20}}                 为 arr数组 添加一条 20 值，如果20存在，则不添加
	{$pop:{arr:1}}                       删除 arr数组 的最后一项，arr值为-1则删除第一项
	{$pull:{arr:123}}                    删除 arr数组 所有123值
*/
```























