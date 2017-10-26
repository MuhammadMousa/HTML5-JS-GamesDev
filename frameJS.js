const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

       var flyingBird = new Image();
       flyingBird.src = "flyingbird.png";

       var runningCat = new Image();
       runningCat.src = "runningcat.png";

       var explosionSheet = new Image();
       explosionSheet.src = "explosion.png";


       var explosionEffect = new Audio();
       explosionEffect.src = "Bomb.mp3";
       explosionEffect.volume = 0.2;


    


       
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
function clear (argument) {
  // body...
}
function update (argument) {
  // body...
}
function draw (argument) {
  // body...
}
function Animate (argument) {
  update();
  clear();
  draw();
}