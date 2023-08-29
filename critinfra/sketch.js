var button;
var button2;
var button3;
var button4;
var button5;
var button6;
var button7;

var button8;

function setup() {
  createCanvas(800, 600);
 background(255);

button = createImg('COPPER.png')
button.position(50,333)
button.size(150,150)
button.mouseClicked(copper);



button2 = createImg('alum.png')
button2.position(600,300)
button2.size(150,150)
button2.mouseClicked(alum);


button3 = createImg('quartz.png')
button3.position(400,50)
button3.size(150,150)
button3.mouseClicked(quartz);

button4 = createImg('petrojelly.png')
button4.position(280,260)
button4.size(150,150)
button4.mouseClicked(crudeoil);

button5 = createImg('polycarb.png')
button5.position(100,50)
button5.size(150,150)
button5.mouseClicked(crudeoil);

button6 = createImg('polyeth.png')
button6.position(570,120)
button6.size(150,150)
button6.mouseClicked(crudeoil);

button7 = createImg('steel.png')
button7.position(440,420)
button7.size(150,150)
button7.mouseClicked(crudeoil);




}

function draw() {
 

  

 }




function copper(){
  let img =
createImg('coppersky.png')
img.position(0,0);



}


function alum(){
  let img =
  createImg('alumsky.png')
  img.position(0,0);
}


function quartz(){
  let img =
  createImg('quartzsky.png')
  img.position(0,0);
}


function crudeoil(){
  let img =
  createImg('crudeoilsky.png')
  img.position(0,0);

}

function steel(){
  let img =
  createImg('steelsky.png')
  img.position(0,0);

}