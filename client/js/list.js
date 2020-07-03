$(() => {
    /* 1、发送网络请求获取服务器端的数据 */
    getDataAndRenderUI("default");

    /* 获取总页码的数量 */
    getPageCount();

    function getPageCount() {
        $.ajax({
            type: "get",
            url: "../server/getPageCount.php",
            success: function(response) {
                // console.log("页码", response);

                /* 创建页码 */
                /* 
                <li class="active"><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li> */
                let pageStr = "";
                for (let i = 0; i < response; i++) {
                    pageStr += `<li class='p-class ${i == 0 ? "active":""}'><a href="javascript:void(0)">${i+1}</a></li>`;
                }
                $(pageStr).insertBefore("#nextPage");
            }
        });
    }

    function getDataAndRenderUI(sort, page = 0) {
        $.ajax({
            url: "../server/getList.php",
            data: {
                sort,
                page: page
            },
            dataType: "json",
        }).done(data => {
            let html = data.map(item => {
                return `
                        <li class="gl_item" data-id=${item.goo_id}>
                            <div class="gl_i_wrap">
                                <div class="p_img">
                                    <a href="">
                                        <img src="${item.img}" alt="">
                                    </a>
                                </div>
                                <div class="p_price">
                                    <strong>
                                        <em>￥</em>
                                        <i>${item.price}</i>
                                    </strong>
                                </div>
                                <div class="p_name">
                                    <a href="">
                                        <em>${item.pname}</em>
                                        <i>${item.ptitle}</i>
                                    </a>
                                </div>
                                <div class="p_commit">
                                    <strong>
                                        <a href="">${item.evaluate}</a>条评价
                                    </strong>
                                </div>
                                <div class="p_shop">
                                    <span>
                                        <a href="">${item.shop}</a>
                                        <b></b>
                                    </span>
                                </div>
                                <div class="p_icons">
                                    <i class="goods_icons">自营</i>
                                </div>
                                <div class="p_operate">
                                    <a class="p_o_btn contrast" >
                                        <i></i>对比
                                    </a>
                                    <a class="p_o_btn focus" >
                                        <i></i>关注
                                    </a>
                                    <a class="p_o_btn addcart" >
                                        <i></i>加入购物车
                                    </a>
                                </div>
                            </div>
                        </li>
                `
            }).join("");
            $(".gl_warp").html(html);
        })

    }

    /* 2、加入购物车的点击事件 */
    $(".p_operate").on("click", ".addCart", function() {
        console.log("++")
            /* user_id user_name */
        let user_id = localStorage.getItem("user_id") || "";
        let user_name = localStorage.getItem("user_name") || "";
        let good_id = $(this).parent().attr("data-id");

        console.log(user_id, user_name);
        if (user_id && user_name) {
            /* 发请求，执行添加到购物车 */
            $.ajax({
                url: "../server/addCart.php",
                data: { user_id, good_id }
            }).done(data => {
                console.log("返回值:", data);
            })

        } else {
            /* 跳转去登录 */
            location.href = "./login.html"
        }
    })

    /* 3、点击按钮的时候加入购物车 */
    $(".set_icon").click(function() {
        location.href = "./cart.html"
    })


    /* 4、排序功能 */
    $(".f_sort >a").click(function() {
        console.log($(".f_sort >a"));
        /* 设置选中状态 */
        $(this).addClass("cur").siblings().removeClass("cur");
        // let sortType = $(this).attr("data-sort");
        let sortType = $(this).data().sort;
        // console.log("sortType", sortType);

        getDataAndRenderUI(sortType);
    })

    /* 5、分页功能 */
    $(".pagination").on("click", ".p-class", function(e) {

        /* 排除上一页和下一页的页面点击事件 */
        // if ($(this).parent()[0].id == "prevPage" || $(this).parent()[0].id == "nextPage") return;

        /* 设置选中状态的切换 */
        $(this).addClass("active").siblings().removeClass("active");
        let page = $(this).text() * 1 - 1;
        // console.log(page);
        getDataAndRenderUI($(".cur").data().sort, page)
    })


    /* 上一页和下一页的功能 */
    $("#prevPage,#nextPage").click(function() {

        /* 设置选中状态 */
        let page = $(".active").text() * 1 - 1;
        if (this.id == "prevPage") {
            page--;
        } else if (this.id == "nextPage") {
            page++;
        }

        $(".p-class").eq(page).addClass("active").siblings().removeClass("active")
        getDataAndRenderUI($(".cur").data().sort, page)
    })
})