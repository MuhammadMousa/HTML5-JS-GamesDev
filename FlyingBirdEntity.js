var flyingBird = new Image();
flyingBird.src = "flyingbird.png";

/*
* Bird Constructor
*/
function Bird()
{

 this.birdFramesSequence = new Array();
 this.birdSprite = null;

}

var BirdObj = new Bird();
BirdObj.birdFramesSequence = {};
BirdObj.birdSprite = new Image();
BirdObj.birdSprite.src = "flyingbird.png";
