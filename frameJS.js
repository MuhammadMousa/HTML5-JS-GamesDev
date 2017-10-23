const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

       var spriteSheet = new Image();
       spriteSheet.src = "spritesheet.png";

       function Frame(){ // a frames constructor

        this.position = {startX: 0, startY: 0, width: 0, height: 0, posX: 0, posY: 0, widthX: 0, heightY: 0}

       }
       
       function createFrame (spriteSheet,startX, startY, width, height, posX, posY, widthX, heightY) {
         var frame = new Frame();
         frame.startX = startX;
         frame.startY = startY;
         frame.width = width;
         frame.height = height;
         frame.posX = posX;
         frame.posY = posY;
         frame.widthX = widthX;
         frame.heightY = heightY;

         return frame;
         
       }

       var firstFrame = createFrame(spriteSheet, 0,0,190,151,0,0,190,151);
       var secondFrame = createFrame(spriteSheet, 1, 201, 192, 142, 0, 201, 192, 142);
       var thirdFrame = createFrame(spriteSheet, 32, 399, 181, 102,0 , 399, 181, 102);
       var fourthFrame = createFrame(spriteSheet, 201, 13, 171, 138,201 , 0, 171, 138);

       var frames = [];
          frames.push(firstFrame);
          frames.push(secondFrame);
          frames.push(thirdFrame );
          frames.push(fourthFrame);
       

       spriteSheet.addEventListener("load", function() {
        /*
           context.drawImage(spriteSheet, firstFrame.startX, firstFrame.startY, firstFrame.width, firstFrame.height,
                              firstFrame.posX, firstFrame.posY, firstFrame.widthX, firstFrame.heightY);

          context.drawImage(spriteSheet, secondFrame.startX, secondFrame.startY, secondFrame.width, secondFrame.height,
                              secondFrame.posX, secondFrame.posY, secondFrame.widthX, secondFrame.heightY);

           context.drawImage(spriteSheet, thirdFrame.startX, thirdFrame.startY, thirdFrame.width, thirdFrame.height,
                              thirdFrame.posX, thirdFrame.posY, thirdFrame.widthX, thirdFrame.heightY);

           context.drawImage(spriteSheet, fourthFrame.startX, fourthFrame.startY, fourthFrame.width, fourthFrame.height,
                              fourthFrame.posX, fourthFrame.posY, fourthFrame.widthX, fourthFrame.heightY);

          var currentAnim = 0;
           */
        
          
          var i = 0;
           setInterval(function  () {

             if(i < frames.length){

             context.clearRect(0,0,195,160); // clearing the canvas for a complete frame (the coordinates -> "Trial and error")

             context.drawImage(spriteSheet,frames[i].startX,frames[i].startY, frames[i].width, frames[i].height, 
              0, 0, frames[i].widthX, frames[i].heightY);


                i++;
             
             }
             else {
              i = 0;
             }
            
               
           },100);


     });
