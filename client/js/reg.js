/* 监听页面的加载，等页面加载完再执行js代码 */
$(() => {

    // $("#phoneID").val(13926291888);
    // $("#usernameID").val("kele");
    // $("#passwordA").val(123456);
    // $("#passwordB").val(123456);

    let imgCode;
    /*不传值，统一走默认值*/
    let captcha = new Captcha({
        lineWidth: 1, //线条宽度
        lineNum: 2, //线条数量
        // dotR: 200, //点的半径
        // dotNum: 1000, //点的数量
        preGroundColor: [10, 80], //前景色区间
        backGroundColor: [150, 250], //背景色区间
        fontSize: 40, //字体大小
        fontFamily: ['Georgia', '微软雅黑', 'Helvetica', 'Arial'], //字体类型
        fontStyle: 'stroke', //字体绘制方法，有fill和stroke
        content: '0123456789', //验证码内容
        length: 4 //验证码长度
    });

    captcha.draw(document.querySelector('#captcha'), r => {
        console.log('验证码', r);
        imgCode = r;

        /* 自动触发标签的事件 */
        $("#imageCode").trigger("blur");
    });  
    let options = {
        "usernameID":{
            reg:`/^[a-zA-Z]{3,8}$/.test(val)`,
            msg:"用户名不符合规范！！！"
        },
        "phoneID":{
            reg: `/^1[3-9]\\d{9}$/.test(val)`,
            msg: "手机号码不符合规范！！！"
        },
        "passwordA": {
            reg: `/^[a-zA-Z0-9]{6,18}$/.test(val)`,
            msg: "密码不符合规范！！！"
        },
        "passwordB": {
            reg: `$.trim($("#passwordA").val()) === val`,
            msg: "两次输入的密码不一致！！！"
        },
        "imageCode": {
            reg: "val == imgCode",
            msg: "图形验证码不正确！！！"
        }
    }
    
    $(".form_box input").blur(function(){
        let option_id = this.id;
        console.log("option_id", options[option_id]);
        let val = $.trim($(this).val());

        if (eval(options[option_id].reg)) {
            // 解决passwordB自动打勾
            if(option_id == "passwordB"){
                if($("#passwordA").val()){
                    $(this).next().text("√").addClass("form_group_succeed");
                }else{
                    $(this).next().text(options[option_id].msg).removeClass("form_group_succeed").addClass("form_group_error");
                }
            }else{
                $(this).next().text("√").addClass("form_group_succeed");
            }
        } else {
            if(option_id == "imageCode"){
                $(this).next().text(options[option_id].msg).addClass("form_group_right");
            }
            $(this).next().text(options[option_id].msg).removeClass("form_group_succeed").addClass("form_group_error");
        }     
    });

    $("#regBtn").click(function(){
        $("#phoneID,#usernameID,#passwordA,#passwordB,#imageCode").trigger("blur");
        // 检查是否勾选
        if($(".form_group_error").length != 0){
            return;
        }
        let isCheck = $("#protocol").is(":checked");
        if(!isCheck){
            alert("请阅读并同意用户的注册协议！！！");
            return; 
        }
        let data = {
            username:$.trim($("#usernameID").val()),
            phone: $.trim($("#phoneID").val()),
            password: md5($.trim($("#passwordA").val())).slice(0, 15)
        }

        // 发送网络请求去执行注册
        $.ajax({
            url: "../server/res.php",
            type: "post",
            data,
            dataType: "json",
        }).done(data => {
            if (data.status == "success") {
                alert("注册成功,请登录！");
                location.href = "./login.html";
            } else {
                alert(data.msg);
            }
        })
    });




}); 
