const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

        context.fillStyle = "#bbb";
        context.fillRect(0, 0, canvas.width, canvas.height);

        var spriteSheet = new Image();
        spriteSheet.src = "spritesheet.png";

   

       spriteSheet.addEventListener("load", function() {
            context.drawImage(spriteSheet, 0, 0, 190, 151,0 , 0, 190, 151);

           context.drawImage(spriteSheet, 1, 201, 192, 142,0 , 201, 192, 142);


     });

/*


function main () {
    //update();
	//draw();
	//requestAnimationFrame(main);
	
}

const square = {
	position: {x: 0, y: 0}
};

function update () {
   

}



function draw () {
    
	context.fillStyle = "red";
	context.fillRect(square.position.x, square.position.y, 20, 20);

}

//main();


*/

