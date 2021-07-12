var canvas = new fabric.Canvas("sydelle");
var px = 10,
    py = 10;
var blockwidth = 30,
    blockheight = 30;
var playerobject = "";
var blockobject = "";

function playerupdate() {
    fabric.Image.fromURL("player.png", function (Img) {
        playerobject = Img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(150);
        playerobject.set({
            top: py,
            left: px
        });
        canvas.add(playerobject);
    });
}

function newimg(getimg) {
    fabric.Image.fromURL(getimg, function (Img) {
        blockobject = Img;
        blockobject.scaleToWidth(blockwidth);
        blockobject.scaleToHeight(blockheight);
        blockobject.set({
            top: py,
            left: px
        });
        canvas.add(blockobject);
    });
}

window.addEventListener("keydown", keytown);

function keytown(e) {
    var pentown = e.keyCode;
    if (e.shiftKey == true && pentown == "80") {
        blockwidth = blockwidth + 10;
        blockheight = blockheight + 10;
        document.getElementById("current_height").innerHTML = blockheight;
        document.getElementById("current_width").innerHTML = blockwidth;
    }
    if (e.shiftKey == true && pentown == "77") {
        blockwidth = blockwidth - 10;
        blockheight = blockheight - 10;
        document.getElementById("current_height").innerHTML = blockheight;
        document.getElementById("current_width").innerHTML = blockwidth;
    }
    if (pentown == "38") {
        up();
    }
    if (pentown == "40") {
        down();
    }
    if (pentown == "37") {
        left();
    }
    if (pentown == "39") {
        right();
    }
    if (pentown == "89") {
        newimg("yellow_wall.png");
    }
    if (pentown == "87") {
        newimg("wall.jpg");
    }
    if (pentown == "85") {
        newimg("unique.png");
    }
    if (pentown == "84") {
        newimg("trunk.jpg");
    }
    if (pentown == "82") {
        newimg("roof.jpg");
    }
    if (pentown == "76") {
        newimg("light_green.png");
    }
    if (pentown == "71") {
        newimg("ground.png");
    }
    if (pentown == "68") {
        newimg("dark_green.png");
    }
    if (pentown == "67") {
        newimg("cloud.jpg");
    }
}
function up(){
    if(py>0){
        py=py-blockheight;
        canvas.remove(playerobject);
        playerupdate();
    }
}
function down(){
    if(py<450){
        py=py+blockheight;
        canvas.remove(playerobject);
        playerupdate();
    }
}
function left(){
    if(px>0){
        px=px-blockheight;
        canvas.remove(playerobject);
        playerupdate();
    }
}
function right(){
    if(px<600){
        px=px+blockheight;
        canvas.remove(playerobject);
        playerupdate();
    }
}