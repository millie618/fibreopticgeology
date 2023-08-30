var button;
var button2;
var button3;
var button4;
var button5;
var button6;
var button7;

var button8;

function setup() {
  createCanvas(800, 800);
 background(255);

button = createImg('COPPER.png')
button.position(50,333)
button.size(150,150)
button.mouseClicked(copper);
text('copper',50,493)



button2 = createImg('alum.png')
button2.position(600,300)
button2.size(150,150)
button2.mouseClicked(alum);
text('aluminium',600,460)

button3 = createImg('quartz.png')
button3.position(400,50)
button3.size(150,150)
button3.mouseClicked(quartz);
text('quartzite',400,210)

button4 = createImg('petrojelly.png')
button4.position(280,260)
button4.size(150,150)
button4.mouseClicked(crudeoil);
text('petroleum jelly',280,420)

button5 = createImg('polycarb.png')
button5.position(130,50)
button5.size(150,150)
button5.mouseClicked(crudeoil);
text('polycarbonate',130,210)

button6 = createImg('polyeth.png')
button6.position(570,120)
button6.size(150,150)
button6.mouseClicked(crudeoil);
text('polyethylene',570,280)

button7 = createImg('steel.png')
button7.position(440,420)
button7.size(150,150)
button7.mouseClicked(crudeoil);
text('steel',440,580)



}

function draw() {
  
text('FIBRE OPTIC GEOLOGY',10,20);

noLoop();
text('There are over 5 billion km of undersea cables that support our internet infrastructure. ',10,620)
text('The cloud is presented as immaterial, but the mining of these minerals for our technological systems has a very physical effect on the planet.',10,640)
text('Click each mineral within a fibre optic cable to see the clouds at the location of its biggest mine.',10,660)
 }




function copper(){
  let img =
createImg('coppersky.png')
img.position(0,0);

}


function alum(){
  let img =
  createImg('alumsky.png')
  img.position(-160,0);

}


function quartz(){
  let img =
  createImg('quartzsky.png')
  img.position(-160,0);
}


function crudeoil(){
  let img =
  createImg('crudeoilsky.png')
  img.position(-180,0);

}

function steel(){
  let img =
  createImg('steelsky.png')
  img.position(0,0);

}