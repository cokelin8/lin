// 监听页面加载，当页面加载完毕后再执行js代码
$(()=>{
    // 1.正则校验
    // 2.表单处理
    $("#usernameID").blur(function(){
        let reg = /^[a-zA-Z]{3,8}$/;
        let val = $.trim($(this).val());

        if(reg.test(val)){
            $(this).next().text("√").addClass("form_group_succeed");
        }else{
            $(this).next().text("用户名不符合规范！！！").removeClass("form_group_succeed").addClass("form_group_error");
        }  
    });
    $("#phoneID").blur(function(){

        let reg = /^1[3-9]\d{9}$/;
        let val = $.trim($(this).val());
        
        if(reg.test(val)){
            $(this).next().text("√").addClass("form_group_succeed");
        }else{
            $(this).next().text("手机号码不符合规范！！！").removeClass("form_group_succeed").addClass("form_group_error");
        }
    });
    $("#passwordA").blur(function(){
        let reg = /^[a-zA-Z0-9]{6,18}$/;
        let val = $.trim($(this).val());

        if(reg.test(val)){
            $(this).next().text("√").addClass("form_group_succeed");
        }else{
            $(this).next().text("密码不符合规范！！！").removeClass("form_group_succeed").addClass("form_group_error");
        }
    })

    $("#passwordB").blur(function(){
        let val = $.trim($(this).val());
        
        if($.trim($("#passwordA").val()) === val){
            $(this).next().text("√").addClass("form_group_succeed");
        }else{
            $(this).next().text("两次输入的密码不一致！！！").removeClass("form_group_succeed").addClass("form_group_error");
        }
    })
});