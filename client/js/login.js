$(() => {
    $(".tab_login_item").click(function() {
        /* (1) 设置当前标签的选中状态 */
        $(this).addClass("active").siblings().removeClass("active");
        /* (2) 切换显示对应的内容 */

        let index = $(this).index();
        $(".login_view").eq(index).addClass("login_viewCurrent").siblings().removeClass("login_viewCurrent");
    })

    /* 获取登录按钮，添加事件 */
    $("#loginBtn").click(function() {
        let username = $.trim($("#loginName").val());
        let password = $.trim($("#password").val());
        console.log($.trim($("#loginName").val()));

        /* 先检查用户名和密码和是否填写，都满足则发请求 */
        if (username.length == 0) {
            alert("用户名不能为空");
            return
        }
        if (password.length == 0) {
            alert("密码不能为空");
            return;
        }
        $.ajax({
            type: "post",
            url: "../server/login.php",
            dataType: "json",
            data: `username=${username}&password=${md5(password).slice(0,15)}`
        }).done(data => {
            // alert(data.msg);
            /* 如果 */
            if (data.status == "success") {
                alert(data.msg);
                location.href = "./index.html";
            } else {
                alert(data.msg);
            }
        })

    })

})