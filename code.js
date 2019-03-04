$('document').ready(function(){
    let myContainer = $('#container');
    let showPic = $('#container .show-pic');

    let showPicHalfW = showPic.width()/2;
    let showPicHalfH = showPic.height()/2;

    myContainer.mousemove((event) =>{
        event.preventDefault();
        showPic.show();
        let scrollLeftPos = $(window).scrollLeft();
        let scrollTopPos = $(window).scrollTop();
        let offsetLft = myContainer.offset().left;
        let offsetTp = myContainer.offset().top;
        let upX=event.clientX;
        let upY=event.clientY;
        showPic.css({backgroundPosition : ''+(offsetLft-upX+showPicHalfW-scrollLeftPos)+'px '+(offsetTp-upY+showPicHalfH-scrollTopPos)+'px',top:''+(-offsetTp+upY-showPicHalfH+scrollTopPos)+'px',left:''+(-offsetLft+upX-showPicHalfW+scrollLeftPos)+'px'});
    });

    myContainer.mouseout(() =>{
        showPic.hide();
    });

    let cnvs = document.getElementById('join-image');
    let ctx = cnvs.getContext('2d');
    ctx.width = 700;
    ctx.height = 453;
    let pic = new Image();
    pic.src="https://cdn.interiorzine.com/wp-content/uploads/2017/11/50-ways-to-make-a-small-space-more-livable.jpg";
    document.onmousemove = function(e) {
        ctx.clearRect(0, 0, cnvs.width, cnvs.height);
        var event = e || window.event;
        window.mouseX = event.clientX;
        window.mouseY = event.clientY;
        if(window.mouseX < ctx.width && window.mouseY < ctx.height){
            // ctx.filter = 'blur(5px)';
            let image2 = ctx.drawImage(pic, window.mouseX - 50, window.mouseY - 100,100,100,window.mouseX - 50, window.mouseY - 100,100,100);
        }
     };



});