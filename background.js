class background{
    constructor(game){
        this.game = game;
    }
    update(){

    };
    draw(){
        //draw vertical line
        let firstLineX = gridSize - (this.game.snake.x % gridSize);
        let currentLineX = firstLineX;
        while(currentLineX <= screenWidth){
            this.drawLine(
                {x:currentLineX,y:0},
                {x:currentLineX,y:screenHeight}
            );
            currentLineX += gridSize;
        };
        //draw horizontal line
        let firstLineY = gridSize-(this.game.snake.y % gridSize);
        let currentLineY = firstLineY;
        while(currentLineY <= screenHeight){
            this.drawLine(
                {x:0,y:currentLineY},
                {x:screenWidth,y:currentLineY}
            );
            currentLineY += gridSize;
        }
       
    };
    //draw a circle
    drawLine(startPos,endPos){
        this.game.context.strokeStyle = 'dimgrey';
        this.game.context.lineWidth = 3; 
        this.game.context.beginPath();
        this.game.context.moveTo(startPos.x,startPos.y);
        this.game.context.lineTo(endPos.x,endPos.y);
        this.game.context.stroke();
    };
};