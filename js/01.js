let lis = document.querySelector(".general").querySelectorAll("li");
let arr = [];
lis.forEach(li =>{
    let obj = {};
    obj.src = li.querySelector("img").src;
    obj.price = li.querySelector(".def-price").innerText;
    obj.title = li.querySelector(".title-selling-point").innerText;
    obj.dis = li.querySelector(".info-evaluate").innerText;
    obj.store = li.querySelector(".store-stock").innerText;
    obj.sales = li.querySelector(".sales-label").innerText;
    arr.push(obj);
    //把转化到的数据转成json 数组拿出来  
})
JSON.stringify(arr);

//定义一个空数组用来存放数据
channels_item

let lis = document.querySelector(".feedContent0").querySelectorAll("li");
let arr = [];
lis.forEach(li =>{
    let obj = {};
    obj.src = li.querySelector("img").src;
    obj.price = li.querySelector(".more2_info").innerText;
    obj.title = li.querySelector(".more2_item_hd").innerText;
    arr.push(obj);
    //把转化到的数据转成json 数组拿出来
   
})
JSON.stringify(arr)