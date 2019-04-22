
(function(){

    //选项卡 依赖 element 模块，否则无法进行功能性操作
    layui.use('element', function(){});

    //表单 依赖
    layui.use('form', function(){
        var form = layui.form;

        //前端验证
        form.verify({
            username : function(value){
                //var len = value.length;
                //if( len<2 || len>10 )return "用户名长度不正确";
                //数字 字母 _ 汉字
                if(!/^[\d_a-z\u4e00-\u9fa5]{2,18}$/i.test(value)){
                    return "用户名格式不正确！";
                }
            },
            password : function(value){
                //var len = value.length;
                //if(len<6 || len>18)return "密码格式不正确！";
                //数字 字母 _!@#$%^&*()+{}[]-=,.<>?
                if( !/^[\da-z_,!@#\$%\^&*()+\[\]{}\-=\.<>?]{6,18}$/i.test(value) ){
                    return "密码格式不正确！"
                }
            },
            password2 : function(value){
                //获取password框的value
                let val = $("#reg-password").val();
                //console.log(val);
                //和确认密码框的value做比较
                if(value !== val){
                    return "两次密码输入不一致！";
                }
            }
        });

        //登录提交监听
        form.on('submit(login)', function(data){
            $.ajax({
                method : "POST",
                url : "/login",
                data : data.field,
                success : function(data){
                    layer.alert(data.msg,function(){
                        //alert( 1 )
                        if ( data.code === 1 ){
                            //登录成功的话，跳转到用户中心页面
                            location.href = "/usercenter";
                        }
                        else if ( data.code === 0 ){
                            //登录失败 ，再点弹窗的确定按钮的话，把弹窗关了
                            layer.close(layer.index);
                        }
                    });
                }
            });

            return false;
        });

        //注册提交监听
        form.on('submit(reg)', function(data){
            $.ajax({
                method : "POST",
                url : "/reg",
                data : data.field,
                success : function(data){
                    layer.alert(data.msg,function(){
                        //alert( 1 )
                        if ( data.code === 1 ){
                            //登录成功的话，跳转到用户中心页面
                            location.href = "/usercenter";
                        }
                        else if ( data.code === 0 ){
                            //登录失败 ，再点弹窗的确定按钮的话，把弹窗关了
                            layer.close(layer.index);
                        }
                    });
                }
            });

            return false;
        });

    });

})();