const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

       var spriteSheet = new Image();
       spriteSheet.src = "spritesheet.png";
       
       // the first character in the game
       function Bird(){
        this.framesSequence = new Array();

       }


       function Frame(){ // a frames constructor

        this.position = {startX: 0, startY: 0, width: 0, height: 0, posX: 0, posY: 0, widthX: 0, heightY: 0}

       }
       
       function createFrame (spriteSheet,startX, startY, width, height, posX, posY, widthX, heightY) {
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

       var firstFrame = createFrame(spriteSheet, 0,0,190,151,0,0,190,151);
       var secondFrame = createFrame(spriteSheet, 1, 201, 192, 142, 0, 201, 192, 142);
       var thirdFrame = createFrame(spriteSheet, 32, 399, 181, 102,0 , 399, 181, 102);
       var fourthFrame = createFrame(spriteSheet, 201, 13, 171, 138,201 , 0, 171, 138);
       var fifthFrame = createFrame(spriteSheet, 200,200, 171,166,0,0,171,166);
       var sixthFrame = createFrame(spriteSheet, 209, 371, 161,131,0,0,161,131);
       var seventhFrame = createFrame(spriteSheet, 379, 11, 171,151,0,0,171,151);
       var eighthFrame = createFrame(spriteSheet, 390, 231, 165,109,0,0,165,109);
       var ninthFrame = createFrame(spriteSheet, 367,367,184,124,0,0,184,124);
       var tinthFrame = createFrame(spriteSheet, 550,0,178,145,0,0,178,145);
       var eleventhFrame = createFrame(spriteSheet, 552,211,173,120,0,0,173,120);
       var twelvethFrame = createFrame(spriteSheet, 550,360,179,138,0,0,179,138);
       var thiteenthFrame = createFrame(spriteSheet, 726,0,184,143,0,0,184,143);
       var fourteenthFrame = createFrame(spriteSheet, 750, 211,160,128,0,0,160,128);

       var frames = [];
          frames.push(firstFrame);
          frames.push(secondFrame);
          frames.push(thirdFrame );
          frames.push(fourthFrame);
          frames.push(fifthFrame);
          frames.push(sixthFrame);
          frames.push(seventhFrame);
          frames.push(eighthFrame);
          frames.push(ninthFrame);
          frames.push(tinthFrame);
          frames.push(eleventhFrame);
          frames.push(twelvethFrame);
          frames.push(thiteenthFrame);
          frames.push(fourteenthFrame);

          var bird = new Bird();
          bird.framesSequence = frames;
          console.log(bird.framesSequence);

       spriteSheet.addEventListener("load", function() {
           var i = 0; // determine the current frame
           setInterval(function  () {

             if(i < bird.framesSequence.length){

             context.clearRect(0,0,canvas.width,canvas.height); // clearing the canvas for a complete frame (the coordinates -> "Trial and error")

             context.drawImage(spriteSheet,bird.framesSequence[i].position.startX,bird.framesSequence[i].position.startY, 
              bird.framesSequence[i].position.width, bird.framesSequence[i].position.height, 
              0, 0, bird.framesSequence[i].position.widthX, bird.framesSequence[i].position.heightY);

                i++;
             }
             else {
              i = 0;
             }
            
               
           },50);


     });
