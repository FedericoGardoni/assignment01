function setup() {
  createCanvas(800,600);
  background(220,220,220);
}

function draw() {
  stroke(130,130,130);
  line(400,552,800,552);
  strokeWeight(3);
noStroke();  
  //Ruote
  fill(21,124,143);
ellipse(395,480,145,145);

//Ombra ruote
fill(31,94,130);
ellipse(395,480,145,130);



//Corpo Principale

fill(125,194,207);
rect(320,200,150,300);
fill(105,174,197);
rect(458,200,12,300);

//Corpo Det
fill(21,124,143);
rect(320,460,150,20);

//Braccio
fill(21,114,133);
rect(242,275,150,20);
fill(21,124,143);
rect(240,270,150,20);

//Mano
fill(10,94,110);
ellipse(240,280,35,35);

//Negativo Mano
fill(220,220,220);
//noStroke();
rect(210,250,30,30);

//Testa
fill(255,180,109);
rect(435,130,15,70);
fill(232,128,29);
rect(340,130,100,70);
fill(179,94,12);
rect(380,130,20,40);
fill(255,180,109);
rect(360,130,20,40);
fill(179,94,12);
rect(340,130,20,40);
fill(115,174,187);
rect(320,95,150,40);
fill(125,194,207);
rect(320,90,150,40);

stroke(130,130,130);
strokeWeight(1);
line(400,90,420,60);
strokeWeight(3);
line(380,90,380,10);
fill(255,162,152);
ellipse(380,20,15,15);
line(70,400,280,400);
line(520,300,750,300);

}

