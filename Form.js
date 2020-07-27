class Form {
    constructor() {
        //this.star = loadImage("./images/start12.png");
        //this.star.Visibility = 255;
        this.button = select('#playbutton');
    }

    hide() {
        //this.star.Visibility = 0;
        //this.button.hide();
    }

    display() {
    //image(star, displayWidth/2-90, 100, 100, 200);
    background(bground);
    this.button.position(windowWidth/2-150, windowHeight/2-50);

    this.button.mousePressed(()=>{
        //this.star.Visibility = 0;
        //this.button.hide();
        gameState = 1;
    })
    
  }
    
}