class Screen{
    constructor(game){
        this.game = game;
        this.top = 0;
        this.bottom = 0;
        this.left = 0;
        this.right = 0;

    }
    update(){
        this.top = this.game.snake.y - (screenHeight/2);
        this.bottom = this.game.snake.y + (screenHeight/2);
        this.left = this.game.snake.x -(screenWidth/2);
        this.right = this.game.snake.x + (screenWidth/2);
       
        
    };
    drawCircle(pos){
     
        this.game.context.beginPath();
        this.game.context.arc(pos.x-this.left,
            pos.y-this.top,
            10,
            0,
            2*Math.PI);
        this.game.context.fillStyle = "green";
        this.game.context.fill();
        
        
    };
}

