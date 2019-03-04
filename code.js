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

    let createCanvas  = () =>{
        let cnvs = document.getElementById('join-image');
        let ctx = cnvs.getContext('2d');
        let pic = new Image();
        pic.src="https://thumbs.dreamstime.com/z/kids-sport-team-having-pep-talk-coach-children-soccer-motivated-trainer-coaching-football-youth-young-boys-standing-109031418.jpg";
        pic.addEventListener("load", () => {
            ctx.filter = 'blur(2px)';
            ctx.drawImage(pic, 0, 0, cnvs.width, cnvs.height);

        });
    };

    createCanvas();


});