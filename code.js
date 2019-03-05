
let cnvs = document.getElementById('join-image');
let ctx = cnvs.getContext('2d');
ctx.width = 700;
ctx.height = 453;
let pic = new Image();
pic.src="./images/myimage.jpg";
ctx.filter = 'blur(5px)';

window.onload = start;
function start() {
    ctx.drawImage(pic, 0, 0 ,700,453);
}

document.onmousemove = (e) => {
    ctx.clearRect(0, 0, cnvs.width, cnvs.height);
    ctx.drawImage(pic, 0, 0 ,700,453);
    var event = e || window.event;
    window.mouseX = event.clientX;
    window.mouseY = event.clientY;
    if(window.mouseX < ctx.width && window.mouseY < ctx.height){
        ctx.filter = "none";
        ctx.drawImage(pic, window.mouseX - 50, window.mouseY - 100,100,100,window.mouseX - 50, window.mouseY - 100,100,100);
        ctx.filter = 'blur(5px)';
    }
 };

cnvs.addEventListener('click', () => {
    var link = document.createElement('a');
    link.download = 'filename.png';
    link.href = cnvs.toDataURL();
    link.click();
});