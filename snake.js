class snake{
    constructor(game){
        this.game = game;
        this.x = gameWidth/2;
        this.y = gameHeight/2;
        this.listenMouseEvent();
        this.angle = 0;
        this.tailPosition = [] ;
        this.createTail();
    }
    listenMouseEvent(){
        this.game.canvas.addEventListener('mousemove',(event)=> {
        
                var rect = this.game.canvas.getBoundingClientRect();
                 this.mouseHover({
                  x: event.clientX - rect.left,
                  y: event.clientY - rect.top
                });
          });
          
    };
    createTail(){
          for(let i = 0; i < 10 ; i++){
           this.tailPosition.push({
               x:this.x,
               y:this.y
           });
         };
        } 
       
    
       
    mouseHover(pos) {
        this.angle = Math.atan2(
            pos.y - (screenHeight/2),
            pos.x - (screenWidth/2)
        );   
       
        console.log(this.angle);
    };
    update(){
        //draw tail
        //snake moving to the pointer
        //update position
        //cos = k / h => k = cos * h
        let newTailPosition = {
            x:this.x + Math.cos(this.angle)* snackSpeed,
            y:this.y + Math.sin(this.angle)*snackSpeed
        }
        this.tailPosition.unshift(newTailPosition);
        this.tailPosition.pop();
        this.x = newTailPosition.x;
        this.y = newTailPosition.y;
};
    draw(){
       //draw snake head
        this.tailPosition.forEach(pos=>{
            this.game.screen.drawCircle({
                x:pos.x,
                y:pos.y
            })
        });
        
    };   
} 
    
          
      