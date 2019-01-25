
const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');
/*
       var flyingBird = new Image();
       flyingBird.src = "flyingbird.png";

       var runningCat = new Image();
       runningCat.src = "runningcat.png";

       var explosionSheet = new Image();
       explosionSheet.src = "explosion.png";

       var runningBoy = new Image();
       runningBoy.src = "runningBoy.png";
*/
       var SpinnerImg = new Image();
       SpinnerImg.src = "Spinner.jpg";

       var RunnerImg = new Image();
       RunnerImg.src = "Running.png";

/*
       var explosionEffect = new Audio();
       explosionEffect.src = "Bomb.mp3";
       explosionEffect.volume = 0.2;

*/


/*

       // flying bird character
       function Bird(){
        this.birdFramesSequence = new Array();

       }

       // running cat character
       function Cat(){
        this.catFramesSequence = new Array();
       }

       // explosion effect
       function Expolosion () {
         this.explosionFramesSequence = new Array();
       }

       // running boy
       function Boy (){
        this.BoyFramesSequence = new Array();

       }
*/
       function Spinner() {
       	this.SpinnerFramesSequence = new Array();
       }

       function Runner() {
       	this.RunnerFrameSequence = new Array();
       }


       function Frame(){ // a birdFrames constructor

        this.position = {startX: 0, startY: 0, width: 0, height: 0, posX: 0, posY: 0, widthX: 0, heightY: 0}

       }

       function createFrame (flyingBird,startX, startY, width, height, posX, posY, widthX, heightY) {
         var frame = new Frame();

         frame.position.startX = startX;
         frame.position.startY = startY;
         frame.position.width = width;
         frame.position.height = height;
         frame.position.posX = posX;
         frame.position.posY = posY;
         frame.position.widthX = widthX;
         frame.position.heightY = heightY;

         return frame;

       }



       var firstFrame_Spinner = createFrame(Spinner, 60,0,280,230,0,0,280,230);
       var secondFrame_Spinner = createFrame(Spinner, 290, 0, 490, 230, 0, 0, 490, 230);
       var thirdFrame_Spinner = createFrame(Spinner, 510, 0, 710, 230,0 , 0, 710, 230);
       var fourthFrame_Spinner = createFrame(Spinner, 710, 0, 930, 230,0 , 0, 930, 230);
       var fifthFrame_Spinner = createFrame(Spinner, 60,280, 280,470,0,0, 280,470);
       var sixthFrame_Spinner = createFrame(Spinner, 280, 280, 480,470,0,0, 480,470);
       var seventhFrame_Spinner = createFrame(Spinner, 500, 280, 700,470,0,0, 700,470);

       var spinner_Frames = new Array();
       spinner_Frames.push(firstFrame_Spinner);
       spinner_Frames.push(secondFrame_Spinner);
       spinner_Frames.push(thirdFrame_Spinner);
       spinner_Frames.push(fourthFrame_Spinner);
       spinner_Frames.push(fifthFrame_Spinner);
       spinner_Frames.push(sixthFrame_Spinner);
       spinner_Frames.push(seventhFrame_Spinner);


       var spinner = new Spinner();
       spinner.SpinnerFramesSequence = spinner_Frames;

/*

       	SpinnerImg.addEventListener("load", function(){
       		var i = 0; // determine the current frame
           setInterval(function  () {
           	console.log("Hi");
             if(i < spinner.SpinnerFramesSequence.length){
             context.clearRect(0,0,canvas.width,canvas.height); // clearing the canvas for a complete frame (the coordinates -> "Trial and error")
             context.drawImage(SpinnerImg,
              spinner.SpinnerFramesSequence[i].position.startX,
              spinner.SpinnerFramesSequence[i].position.startY,
              spinner.SpinnerFramesSequence[i].position.width, spinner.SpinnerFramesSequence[i].position.height,
              0, 0, spinner.SpinnerFramesSequence[i].position.widthX, spinner.SpinnerFramesSequence[i].position.heightY);
                i++;
             }
             else {
              i = 0;
             }
           },500);

       		});

*/

       	/********************************************************************************************/
       var firstFrame_Runner = createFrame(RunnerImg,   0, 0,      150, 220,  0, 0,   150, 220);
       var secondFrame_Runner = createFrame(RunnerImg,  150, 0,    170, 220,  0, 0,   170, 220);
       var thirdFrame_Runner = createFrame(RunnerImg,   320, 0,    180, 220,  0, 0,   180, 220);
       var fourthFrame_Runner = createFrame(RunnerImg,  500, 0,    180, 220,  0, 0,   180, 220);
       var fifthFrame_Runner = createFrame(RunnerImg,   680, 0,    160, 220,  0, 0,   160, 220);

       var sixthFrame_Runner = createFrame(RunnerImg,   0, 220,        150, 430,  0, 0,   150, 430);
       var seventhFrame_Runner = createFrame(RunnerImg, 150, 220,      170, 430,  0, 0,   170, 430);
       var eighthFrame_Runner = createFrame(RunnerImg,  320, 220,      180, 430,  0, 0,   180, 430);
       var ninthFrame_Runner = createFrame(RunnerImg,   500, 220,      180, 430,  0, 0,   180, 430);
       var tenthFrame_Runner = createFrame(RunnerImg,   680, 220,      160, 430,  0, 0,   160, 430);

       var RunnerFrames = new Array();
       RunnerFrames.push(firstFrame_Runner);
       RunnerFrames.push(secondFrame_Runner);
       RunnerFrames.push(thirdFrame_Runner);
       RunnerFrames.push(fourthFrame_Runner);
       RunnerFrames.push(fifthFrame_Runner);
       RunnerFrames.push(sixthFrame_Runner);
       RunnerFrames.push(seventhFrame_Runner);
       RunnerFrames.push(eighthFrame_Runner);
       RunnerFrames.push(ninthFrame_Runner);
       RunnerFrames.push(tenthFrame_Runner);

       var runner = new Runner();
       runner.RunnerFrameSequence = RunnerFrames;

       RunnerImg.addEventListener("load", function(){
       		var i = 0; // determine the current frame
           setInterval(function  () {
             
             if(i < runner.RunnerFrameSequence.length){
             context.clearRect(0,0,canvas.width,canvas.height); // clearing the canvas for a complete frame (the coordinates -> "Trial and error")
             context.drawImage(
              RunnerImg,
              runner.RunnerFrameSequence[i].position.startX,
              runner.RunnerFrameSequence[i].position.startY,
              runner.RunnerFrameSequence[i].position.width, 
              runner.RunnerFrameSequence[i].position.height,
              545, 200, 
              runner.RunnerFrameSequence[i].position.widthX, 
              runner.RunnerFrameSequence[i].position.heightY
              );
                i++;
             }
             else {
              i = 0;
             }
           },60);

       		});







       	/********************************************************************************************/






/*





       var firstFrame = createFrame(flyingBird, 0,0,190,151,0,0,190,151);
       var secondFrame = createFrame(flyingBird, 1, 201, 192, 142, 0, 201, 192, 142);
       var thirdFrame = createFrame(flyingBird, 32, 399, 181, 102,0 , 399, 181, 102);
       var fourthFrame = createFrame(flyingBird, 201, 13, 171, 138,201 , 0, 171, 138);
       var fifthFrame = createFrame(flyingBird, 200,200, 171,166,0,0,171,166);
       var sixthFrame = createFrame(flyingBird, 209, 371, 161,131,0,0,161,131);
       var seventhFrame = createFrame(flyingBird, 379, 11, 171,151,0,0,171,151);
       var eighthFrame = createFrame(flyingBird, 390, 231, 165,109,0,0,165,109);
       var ninthFrame = createFrame(flyingBird, 367,367,184,124,0,0,184,124);
       var tinthFrame = createFrame(flyingBird, 550,0,178,145,0,0,178,145);
       var eleventhFrame = createFrame(flyingBird, 552,211,173,120,0,0,173,120);
       var twelvethFrame = createFrame(flyingBird, 550,360,179,138,0,0,179,138);
       var thiteenthFrame = createFrame(flyingBird, 726,0,184,143,0,0,184,143);
       var fourteenthFrame = createFrame(flyingBird, 750, 211,160,128,0,0,160,128);

       var birdFrames = new Array();

          birdFrames.push(firstFrame);
          birdFrames.push(secondFrame);
          birdFrames.push(thirdFrame );
          birdFrames.push(fourthFrame);
          birdFrames.push(fifthFrame);
          birdFrames.push(sixthFrame);
          birdFrames.push(seventhFrame);
          birdFrames.push(eighthFrame);
          birdFrames.push(ninthFrame);
          birdFrames.push(tinthFrame);
          birdFrames.push(eleventhFrame);
          birdFrames.push(twelvethFrame);
          birdFrames.push(thiteenthFrame);
          birdFrames.push(fourteenthFrame);

          var bird = new Bird();
          bird.birdFramesSequence = birdFrames;



       var catFirstFrame = createFrame(runningCat, 0,0,510,271,0,0,510,271);
       var catSecondFrame = createFrame(runningCat, 530, 0, 460, 260, 0, 0, 460, 260);
       var catThirdFrame = createFrame(runningCat, 0, 322, 480, 198,0 , 0, 480, 198);
       var catFourthFrame = createFrame(runningCat, 559, 311, 421, 169,0 , 0, 421, 169);
       var catFifthFrame = createFrame(runningCat, 50,561, 410,199,0,0,410,199);
       var catSixthFrame = createFrame(runningCat, 550, 580, 430,205,0,0,430,205);
       var catSeventhFrame = createFrame(runningCat, 0, 840, 460,180,0,0,460,180);
       var catEighthFrame = createFrame(runningCat, 500, 820, 500,204,0,0,500,204);

       var catFrames = new Array();

       catFrames.push(catFirstFrame);
       catFrames.push(catSecondFrame);
       catFrames.push(catThirdFrame);
       catFrames.push(catFourthFrame);
       catFrames.push(catFifthFrame);
       catFrames.push(catSixthFrame);
       catFrames.push(catSeventhFrame);
       catFrames.push(catEighthFrame);



          var cat = new Cat();
          cat.catFramesSequence = catFrames;



       var explosionFirstFrame = createFrame(explosionSheet, 0,0,100,90,0,0,100,90);
       var explosionSecondFrame = createFrame(explosionSheet, 100, 0, 95, 90, 0, 0, 95, 90);
       var explosionThirdFrame = createFrame(explosionSheet, 195, 0, 95, 90,0 , 0, 95, 90);
       var explosionFourthFrame = createFrame(explosionSheet, 290, 0, 95, 90,0 , 0, 171, 138);
       var explosionFifthFrame = createFrame(explosionSheet, 285,0, 95,90,0,0,95,90);
       var explosionSixthFrame = createFrame(explosionSheet, 0, 90, 100,100,0,0,100,100);
       var explosionSeventhFrame = createFrame(explosionSheet, 100, 90, 95,100,0,0,95,100);
       var explosionEighthFrame = createFrame(explosionSheet, 195, 90, 95,100,0,0,95,100);
       var explosionNinthFrame = createFrame(explosionSheet, 290,90,95,100,0,0,95,100);
       var explosionTenthFrame = createFrame(explosionSheet, 385,90,90,100,0,0,90,100);
       var explosionEleventhFrame = createFrame(explosionSheet, 0,190,100,105,0,0,100,105);
       var explosionTwelvethFrame = createFrame(explosionSheet, 100,190,95,105,0,0,95,105);
       var explosionThiteenthFrame = createFrame(explosionSheet, 195,190,100,105,0,0,100,105);
       var explosionFourteenthFrame = createFrame(explosionSheet, 290, 190,95,100,0,0,95,100);
       var explosionFifteenthFrame = createFrame(explosionSheet, 385, 190,95,105,0,0,95,105);
       var explosionSixteenthFrame = createFrame(explosionSheet, 0, 295,100,85,0,0,100,85);
       var explosionSeventeenthFrame = createFrame(explosionSheet, 100, 295,100,85,0,0,100,85);



          var explosionFrames = new Array();

          explosionFrames.push(explosionFirstFrame);
          explosionFrames.push(explosionSecondFrame);
          explosionFrames.push(explosionThirdFrame);
          explosionFrames.push(explosionFourthFrame);
          explosionFrames.push(explosionFifthFrame);
          explosionFrames.push(explosionSixthFrame);
          explosionFrames.push(explosionSeventhFrame);
          explosionFrames.push(explosionEighthFrame);
          explosionFrames.push(explosionNinthFrame);
          explosionFrames.push(explosionTenthFrame);
          explosionFrames.push(explosionEleventhFrame);
          explosionFrames.push(explosionTwelvethFrame);
          explosionFrames.push(explosionThiteenthFrame);
          explosionFrames.push(explosionFourteenthFrame);
          explosionFrames.push(explosionFifteenthFrame);
          explosionFrames.push(explosionSixteenthFrame);
          explosionFrames.push(explosionSeventeenthFrame);

          var explosion = new Expolosion();
          explosion.explosionFramesSequence = explosionFrames;




          var runBoyFirstFrame = createFrame(10,10,270,255,0,0,270,255);
          var runBoySecondFrame = createFrame(290,10,247,255,0,0,247,255);
          var runBoyThirdFrame = createFrame(532,10,223,255,0,0,223,255);
          var runBoyFourthFrame = createFrame(770,10,230,255,0,0,230,255);
          var runBoyFifthFrame = createFrame(1040,10,240,255,0,0,240,255);

          var BoyFrames = new Array();

          BoyFrames.push(runBoyFirstFrame);
          BoyFrames.push(runBoySecondFrame);
          BoyFrames.push(runBoyThirdFrame);
          BoyFrames.push(runBoyFourthFrame);
          BoyFrames.push(runBoyFifthFrame);


          var boy  = new Boy();
          boy.BoyFramesSequence = BoyFrames;


/*
      runningBoy.addEventListener("load", function() {
           var i = 0; // determine the current frame
           setInterval(function  () {
             if(i < boy.BoyFramesSequence.length){
             context.clearRect(0,0,canvas.width,canvas.height); // clearing the canvas for a complete frame (the coordinates -> "Trial and error")
             context.drawImage(runningBoy,
              boy.BoyFramesSequence[i].position.startX,
              boy.BoyFramesSequence[i].position.startY,
              boy.BoyFramesSequence[i].position.width, boy.BoyFramesSequence[i].position.height,
              0, 0, boy.BoyFramesSequence[i].position.widthX, boy.BoyFramesSequence[i].position.heightY);
                i++;
             }
             else {
              i = 0;
             }
           },500);
     });
*/

/*
      runningCat.addEventListener("load", function () {
            var posX = 0;
            var posY = 0;
            var i = 0; // determine the current frame
            setInterval(function() {
             if(i < cat.catFramesSequence.length){
             context.clearRect(0,0,canvas.width,canvas.height); // clearing the canvas for a complete frame (the coordinates -> "Trial and error")
             context.drawImage(runningCat,
                              cat.catFramesSequence[i].position.startX,  // where to start drawing
                              cat.catFramesSequence[i].position.startY,
                              cat.catFramesSequence[i].position.width,   // the width and the heigh of the frame
                              cat.catFramesSequence[i].position.height,
                              posX, posY,                                                  // position of the frame
                              cat.catFramesSequence[i].position.widthX,  // stretch or reduce the width and the height
                              cat.catFramesSequence[i].position.heightY
                              );
                i++;
                if(posX < (canvas.width - cat.catFramesSequence[i].position.widthX)) { // to make the cat run from (0,0) once it hits the width
                  posX += 10;
                }
                else {
                  posX = 0;
                }
             }
             else {
              i = 0;
             }
           },60);
      });
*/


/*

      explosionSheet.addEventListener("load", function  () {


             var i = 0; // determine the current frame
         setInterval(function  () {


             if(i < explosion.explosionFramesSequence.length){

             context.clearRect(0,0,canvas.width,canvas.height); // clearing the canvas for a complete frame (the coordinates -> "Trial and error")

             context.drawImage(explosionSheet,
                              explosion.explosionFramesSequence[i].position.startX,  // where to start drawing
                              explosion.explosionFramesSequence[i].position.startY,
                              explosion.explosionFramesSequence[i].position.width,   // the width and the heigh of the frame
                              explosion.explosionFramesSequence[i].position.height,
                              0, 0,                                                  // position of the frame
                              explosion.explosionFramesSequence[i].position.widthX,  // stretch or reduce the width and the height
                              explosion.explosionFramesSequence[i].position.heightY
                              );
            explosionEffect.play();

                i++;
             }
             else {
              i = 0;
             }


           },100);



      });


*/
/*
       flyingBird.addEventListener("load", function() {
           var i = 0; // determine the current frame
           setInterval(function  () {
             if(i < bird.birdFramesSequence.length){
             context.clearRect(0,0,canvas.width,canvas.height); // clearing the canvas for a complete frame (the coordinates -> "Trial and error")
             context.drawImage(flyingBird,bird.birdFramesSequence[i].position.startX,bird.birdFramesSequence[i].position.startY,
              bird.birdFramesSequence[i].position.width, bird.birdFramesSequence[i].position.height,
              0, 0, bird.birdFramesSequence[i].position.widthX, bird.birdFramesSequence[i].position.heightY);
                i++;
             }
             else {
              i = 0;
             }
           },500);
     });
*/



/**
 Those are some basic methods ... to be implemented ...
**/
/*
function clear (argument) {
  // body...
  context.clearRect(0,0,canvas.width,canvas.height);
}
function update (argument) {
  // body...
}
function draw (argument) {
}
function Animate (argument) {
  clear();
  update();
  draw();
}*/

