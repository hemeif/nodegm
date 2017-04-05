if(Swiper){
    var myswiper = new Swiper('.banne', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        ceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false

    });
    var swiper = new Swiper('.tete', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        effect : 'fade',
        fade: {
            crossFade: false,
        },
        // spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false

    });

}else{
    var Swiper="";
}






 var fflag=true;
 var headers=$("header")

 window.onscroll=function(){
     var obj=document.body.scrollTop?document.body:document.documentElement;
      var scrllt=obj.scrollTop;
      // console.log(scrllt)
      // if(scrllt>300&&scrllt<=600){
      //   headers.animate({opacity:0},500);

      // }else
       if(scrllt>600){
     
          if(fflag){
            fflag=false;
            headers.css({position:"fixed"});
              // headers.animate({opacity:1},500);
          }
        }else{
           
          if(!fflag){

            fflag=true;
                 headers.css({position:"absolute"});
                  // headers.animate({height:"70px"},500);
              // headers.animate({opacity:0},500);

          }
        }
    }


    

var harigh=$(".harigh");
var xiaoh=$("li",harigh);
console.log(harigh)
// jzlouc(harigh,yxuan,xiaoh,gyinuz)
// 楼层跳转
 function jzlouc(boxs,yxuan,xiaoh,gyinuz){


    var flag=true;
    var fflag=true;
    var ch=document.documentElement.clientHeight;
    // console.log(ch)
    var arr=[];
    for(var i=0;i<boxs.length;i++){
    arr.push(boxs[i].offsetTop);
    }

    for(var i=0;i<xiaoh.length;i++){
      xiaoh[i].paih=i
      xiaoh[i].onclick=function(){
        
          flag=false;
          for(var k=0;k<xiaoh.length;k++){
            // xiaoh[k].classList.remove("hot")
            var gyinuz=$(".gyinuz",xiaoh[k])[0];
             gyinuz.style.display="none";

          }
            // xiaoh[this.paih].classList.add("hot");
          var gyinuz=$(".gyinuz",xiaoh[this.paih])[0];
          gyinuz.style.display="block";

            var obj=document.body;
            animate(obj,{scrollTop:arr[this.paih]},function(){
              flag=true;
            })  
            var obj=document.documentElement;
            animate(obj,{scrollTop:arr[this.paih]},function(){
              flag=true;
            })                
        
       }


    }


    
    
    // console.log(arr);
    window.onscroll=function(){
      if (!flag){
        return;
      };
    var obj=document.body.scrollTop?document.body:document.documentElement;
      var scrllt=obj.scrollTop;
      // console.log(obj)
      for(var i=0;i<arr.length;i++){
        if(ch+scrllt>=arr[i]+200){        
          var imgs=$("img",boxs[i]);
          // console.log(imgs)
          for(var j=0;j<imgs.length;j++){
            
            imgs[j].src=imgs[j].getAttribute("photo-n");          
          }
          for(var k=0;k<xiaoh.length;k++){

              var gyinuz=$(".gyinuz",xiaoh[k])[0];
              gyinuz.style.display="none";
          }
            var gyinuz=$(".gyinuz",xiaoh[i])[0];
             gyinuz.style.display="block";
          
        }
        

      }
      // if(scrllt>1300){
      //     if(fflag){
      //       fflag=false;

      //       animate(yxuan,{opacity:1});

      //     }
      //   }else{
      //     if(!fflag){

      //       fflag=true;

      //       animate(yxuan,{opacity:0});

      //     }
        // }

    }

 }


$.fn.autotype = function (str, speed) {
    var self = this,
        defaultStr = '<p>我是贺梅芳</p>'
            +'<p>一名前端工程师</p>'
            +'<p>欢迎来到我的个人网站</p><br>',//将要添加的元素的默认内容
        defaultSpeed = 100,
        str = str || defaultStr,
        speed = speed || defaultSpeed,
        index = 0,
        timer = setInterval(function () {
            var current = str.substr(index, 1);
            if (current == '<') {
                index = str.indexOf('>', index) + 1;
            } else {
                index++;
            }
            self.html(str.substring(0, index) + ( (index & 1) && (index != str.length) ? '_' : ''));
            if (index >= str.length) {
                clearInterval(timer);
            }
        }, speed);
};
$("#autotype").autotype();

