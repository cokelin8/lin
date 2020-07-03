
// 拿数据

// 秒杀
let lis = $(".slider_list .slider_wrapper .slider_item.seckill-item.slider_active");
let b = Array.from(lis)
Array.from(lis);
let arr = [];
b.forEach(function(item){
    let obj = {};
    obj.img = item.querySelector(".lazyimg_img").src;
    obj.title = item.querySelector(".seckill-item__name").innerText;
    obj.miaosha = item.querySelector(".price-miaosha").innerText;
    obj.origin = item.querySelector(".price-origin").innerText;
    arr.push(obj);
})
JSON.stringify(arr);

// 大轮播
let lis = $(".slider_list .slider_wrapper .slider_item.focus-slider__item.focus-item .focus-item__core");
let b = Array.from(lis);
Array.from(lis);
let arr = [];
b.forEach(function(item){
    let obj = {};
    obj.img = item.querySelector(".focus-item-img").src;
    arr.push(obj);
})
JSON.stringify(arr);

频道广场
let lis = $(".channels_block_wrapper .channels_item");
let b = Array.from(lis);
Array.from(lis);
let arr = [];
let index = 2;
b.forEach(function(item,index){

    obj.img = item.querySelector(".lazyimg.lazyimg_loaded.channels_item_img  .lazyimg_img").src;
    obj.bigTitle = item.querySelector(".channels_item_title").innerText;
    arr.push(obj);
})
JSON.stringify(arr);


let lis = $(".channels_block_wrapper .channels_item");
let b = Array.from(lis);
Array.from(lis);
let arr = [];
for(var i = 2;i<b.length;i++){
    let obj = {};
    obj.img = b[i].querySelectorAll(".lazyimg.lazyimg_loaded.channels_item_img .lazyimg_img").src;
    // obj.img2 = b[i].querySelectorAll(".lazyimg.lazyimg_loaded.channels_item_img  .lazyimg_img")[1].src;
    obj.bigTitle = b[i].querySelector(".channels_item_title_main").innerText;
    obj.smTitle = b[i].querySelector(".channels_item_title_aside").innerText;
    arr.push(obj);
    $(selector).attr(attributeName);
}
JSON.stringify(arr);

//为你推荐
let lis = $("#feedContent0 .more2_item.more2_item_good.hover-on");
let b = Array.from(lis);
Array.from(lis);
let arr = [];
b.forEach(function(item){
    let obj = {};
    obj.img = item.querySelector(".lazyimg_img").src;
    obj.title = item.querySelector(".more2_info_name").innerText;
    obj.price = item.querySelector(".mod_price").innerText;
    arr.push(obj);
})
JSON.stringify(arr);



// 品牌
let lis = $(".goods-others a");
let b = Array.from(lis);
Array.from(lis);
let arr = [];
b.forEach(function(item){
    let obj = {};
    obj.img = item.querySelector(".other-item__logo img").src;
    obj.usname = item.querySelector(".other-item__name").innerText;
    arr.push(obj);
})
JSON.stringify(arr);

let lis = $("#cate_item1 .cate_part_col1 .cate_detail .cate_datail_item");
let b = Array.from(lis);
Array.from(lis);
let arr = [];
b.forEach(function(item){
    let obj = {};
    obj.cate_channel = item.querySelector(".cate_channel_lk").innerText;
    arr.push(obj);
})
JSON.stringify(arr);

// 特价

let lis = $(".tab_body_item .special_list .special_item .special_item_lk");
let b = Array.from(lis);
Array.from(lis);
let arr = [];
b.forEach(function(item){
    let obj = {};
    obj.img = item.querySelector(".lazyimg_img").src;
    obj.title = item.querySelector(".special_item_name").innerText;
    obj.miaoShaPrice = item.querySelector(".special_item_miaoShaPrice").innerText;
    obj.jdPrice = item.querySelector(".special_item_jdPrice").innerText;
    arr.push(obj);
})
JSON.stringify(arr);





let lis = $("#feedContent2 .more2_item.more2_item_good.hover-on");
let b = Array.from(lis);
Array.from(lis);
let arr = [];
b.forEach(function(item){
    let obj = {};
    obj.img = item.querySelector(".lazyimg_img").src;
    obj.title = item.querySelector(".more2_info_name").innerText;
    obj.price = item.querySelector(".mod_price").innerText;
    arr.push(obj);
})
JSON.stringify(arr);









let lis = document.querySelector(".slider_item");
let arr = [];
lis.forEach(a =>{
    let obj = {};
    obj.img = a.querySelector(".lazyimg").img;
    obj.title = a.querySelector(".seckill-item__name").innerText;
    obj.miaosha = a.querySelector(".price-miaosha").innerText;
    obj.priceorigin = a.querySelector(".price-origin").innerText;
    arr.push(obj);
    //把转化到的数据转成json 数组拿出来
   
})
JSON.stringify(arr)



发现好货

let lis = $(".nice-goods__recommends .goods-list .goods");
let b = Array.from(lis);
Array.from(lis);
let arr = [];
b.forEach(function(item){
    let obj = {};
    obj.title =item.querySelector(".goods__name").innerText;
    obj.img= item.querySelector(".goods__image .lazyimg_img").src;
    arr.push(obj);
})
JSON.stringify(arr);





let lis = $(".gl-warp .gl-item");
let b = Array.from(lis);
Array.from(lis);
let arr = [];
b.forEach(function(item){
    let obj = {};
    obj.img= item.querySelector(".p-img a img").src;
    obj.price = item.querySelector(".p-price strong i").innerText;
    obj.pname = item.querySelector(".p-name a em").innerText;
    obj.ptitle = item.querySelector(".p-name a i").innerText;
    obj.evaluate = item.querySelector(".p-commit strong a").innerText;
    obj.shop = item.querySelector(".p-shop span a").innerText;
    arr.push(obj);
})
JSON.stringify(arr);