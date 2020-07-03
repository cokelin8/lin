$(()=>{
    // 秒杀
    let miaoSha = document.querySelector(".seckill_listm");
    $.getJSON("../server/json/miaosha.json",(data) =>{
        let html = data.map(item => {
            return `<div class ="listm_box float_left">
                        <a class="seckill_wraper" href="#">
                        <div class="wraper_img">
                            <img src=${item.img}>
                        </div>
                        <h6 class="wraper_name">${item.title}</h6>
                        <div class="wraper_price">
                            <span class="price_miaosha">${item.miaosha}</span>
                            <span class="price_origin">${item.origin}</span>
                        </div>
                        </a>
                    </div>`
        }).join("");
        miaoSha.innerHTML = html;
    })
    // 品牌
    let pinPai = document.querySelector(".brand_r");
    $.getJSON("../server/json/pinpai.json",(data) =>{
        let html = data.map(item => {
            return `<a class ="other-item float_left href="#">
                        <div class="other_item_logo">
                            <img src=${item.img}>
                        </div>
                        <h6  class="other_item_name">${item.usname}</h6>
                    </a>`
        }).join("");
        pinPai.innerHTML = html;
    })


    let pinDao = document.querySelector(".channel_show");
    $.getJSON("../server/json/pindao.json",(data) =>{
        let html = data.map(item => {
            return `<div class="channel_box float_left">
                        <a class="channels_box_tit" href="#">
                            <span class="box_tit_main1" >${item.bigTitle}</span>
                            <span class="box_tit_main2" >${item.smTitle}</span>
                        </a>
                        <div class="channels_box_images">
                            <a class="channels_box_lk1" href="#">
                                <div class="channels_box_imgs">
                                    <img src=${item.img}>
                                </div>
                            </a>
                            <a class="channels_box_lk1" href="#">
                                <div class="channels_box_imgs">
                                    <img src=${item.img2}>
                                </div>
                            </a> 
                        </div>
                    </div>`
        }).join("");
        pinDao.innerHTML += html;
    })


    // 轮播
    let num = 1;
    let myLeft;
    $(".seckill_list_r").click(function(){
        
        num++;
        if(num >= 6){
           num =1;
           $(".seckill_listm").css({"left":"0"});
        } 
        myLeft = -num * 800;
        $(".seckill_listm").animate({"left":myLeft+"px"});
    });
    
    $(".seckill_list_l").click(function(){
        num--;
        if(num<=0){
            num = 5;
            $(".seckill_listm").css({"left":"-4800px"});
        }
        myLeft = -num * 800;
        $(".seckill_listm").animate({"left":myLeft+"px"});
    });
                 
       
    // 
    class Manager {
        constructor(data) {
            this.data = data;
            this.renderUI();
            this.addEventHandler();
        }
        renderUI() {
          
            for(let i = 0 ;i<this.data.data.length;i++){
                let dataA = this.data.data[i].map((item,index)=>{
                        return `
                                <div class="special_item special_item_${index}">
                                    <a href="#" class="special_item_lk">
                                        <div class="special_item_img">
                                            <img src="${item.img}" class="special_item_img">
                                        </div>
                                        <div class="special_item_message">
                                            <span class="special_item_name">${item.title}</span>
                                            <div class="special_item_price">
                                                <span class="special_item_miaoShaPrice">
                                                    <span class="dollar_txt">￥</span>${item.miaoShaPrice}
                                                </span>
                                                <span class="special_item_jdPrice">
                                                    <span class="dollar_txt">￥</span>${item.jdPrice}
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </div>  
                        `
                    }).join("");
                let dataB = `<div class="special_list">${dataA}</div>`; 
                    $(".special_b_item").append(dataB);
            }
           $(".special_b_item").find(".special_list").eq(0).addClass("special_list_active");
        }
        addEventHandler() {
            $(".special_tab").children("a").mouseenter(function(){
                $(this).addClass("tab_lk_active").siblings().removeClass("tab_lk_active");
                 let index = $(this).index();
                $(".special_b_item").children(".special_list").eq(index).addClass("special_list_active").siblings().removeClass("special_list_active");
        });
        } 
    }
    $.getJSON("../../server/json/tejia.json", (data) => new Manager(data));

        let faxian = document.querySelector(".goods_list");
        $.getJSON("../server/json/faxian.json",(data) =>{
            let html = data.map((item,index)=> {
                return ` <a href="" class="goods ${index % 2 == 0 ? "goods_top" :"goods_bottom" }">
                            <div class="goods_name">${item.title}</div>
                            <div class="goods_image">
                                <div class="goods_box">
                                    <img src="${item.img}" class="goods_img">
                                </div>
                            </div>
                        </a>`
            }).join("");
            faxian.innerHTML += html;
    })


    let tuiJian = document.querySelector(".recommend_m");
    $.getJSON("../server/json/tuijian.json",(data) =>{
        data.data.forEach((item,index)=> {
            let htmlLi = ''
            item.forEach(item=>{
                htmlLi += `<li class="recommend_main_item">
                                <a class="recommend_lk" href="#">
                                    <div class="recommend_box">
                                        <img class="recommend_img" src=${item.img}>
                                    </div>
                                    <div class="recommend_info">
                                        <p class="recommend_info_name">${item.title}</p>
                                        <div class="recommend_price">
                                            <div class="recommend_price_box">
                                                <i>￥</i><span class="recommend_price_txt">${item.price}</span><i>00</i>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        `
            })
            let htmlUl = ` <ul id="recommend_main${index}"class="recommend_main_list clearfix">${htmlLi}</ul>`
            tuiJian.innerHTML += htmlUl;
        })

        $(".recommend_m").find("#recommend_main0").addClass("recommend_m_active");

        $(".recommend_tab").find("li").click(function(){
            $(".recommend_tab").find("li h5").removeClass("recommend_active");
            $(".recommend_tab").find("li span").removeClass("tit_active");
            $(this).find("h5").addClass("recommend_active");
            $(this).find("span").addClass("tit_active");
            let index = $(this).index();
            $(".recommend_m").children("ul").eq(index).addClass("recommend_m_active").siblings().removeClass("recommend_m_active");
        });
        
    })


    
});

function notFeng(){
    let leftX = 0;
    let imagesBox = document.getElementsByClassName("slider_wrap")[0];
    let time = setInterval(function(){
        leftX = leftX -180; 
            if(leftX == -180){
                $(".slider_btn_1").removeClass("slider_btn_active").siblings().addClass("slider_btn_active");
            }
            if(leftX == -360){
                $(".slider_btn_1").addClass("slider_btn_active").siblings().removeClass("slider_btn_active");
            }
            if(leftX==-540){  
                leftX = 0;   
            }
            imagesBox.style.transform = `translate3d(${leftX}px,0px,0px)`;

    },1000);
    
}

function noFengGun(){
    let leftX = 0;
    let imgBox = document.getElementsByClassName("nice_goods_recommends");
    let imagesBox = document.getElementsByClassName("goods_list")[0];

    
    let time = setInterval(function(){
        leftX--;  
        if(leftX==-2000){  
            leftX = 0;   
        }
        imagesBox.style.transform = `translate3d(${leftX}px,0px,0px)`;

    },15);
}
window.onload = function(){
    notFeng();
    noFengGun();
}





