var Images = {};

Images.makeImage = function(source){
  var img = new Image();
  img.src = source;
  return img;
}

Images.floor = Images.makeImage("/ZTIAPL Project/Images/floor_1.png");
Images.wall = Images.makeImage("/ZTIAPL Project/Images/wall_1.jpg");
Images.level1BG = Images.makeImage("/ZTIAPL Project/Images/fon_3.png");
Images.level2BG = Images.makeImage("/ZTIAPL Project/Images/fon_2.jpg");
Images.level3BG = Images.makeImage("/ZTIAPL Project/Images/fon_1_2.jpg");

Images.charWalkLeft = Images.makeImage("/ZTIAPL Project/Images/left_1.gif");
Images.charWalkRight = Images.makeImage("/ZTIAPL Project/Images/right_1.gif");
Images.charWalkUpright = Images.makeImage("/ZTIAPL Project/Images/back.png");
Images.life = Images.makeImage("/ZTIAPL Project/Images/heart_1.png");
Images.mainMenu = Images.makeImage("/ZTIAPL Project/Images/Menu_1.png");

var canvas = document.getElementById("canvas");  
var ctx = canvas.getContext("2d");

  canvas.width = 1250;
  canvas.height = 550;

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

console.log(Images.level3BG);
var menus = 
`<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'>
<style>
td {background-color:yellow;
padding: 10px;} 
</style>
<foreignObject width='100%' height='100%'>" + ${getElementById(menu_table)} +
        "</foreignObject></svg>
`;
var DOMURL = self.URL || self.webkitURL || self;
var imgur = new Image();
var svg = new Blob([menus], {type: "image/svg+xml;charset=utf-8"});
var url = DOMURL.createObjectURL(svg);
imgur.onload = function() {
  ctx.drawImage(imgur, 0, 0);
  DOMURL.revokeObjectURL(url);
};
imgur.src = url;

Images.mainMenu.onload = function() {
  // Image, x, y, width, height
  ctx.drawImage(Images.mainMenu, 0, 0, 1250, 550)
}
