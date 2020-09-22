class game{
    constructor(){
       
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.width =screenWidth;
        this.canvas.height = screenHeight;
        document.body.appendChild(this.canvas);
        this.snake = new snake(this);
        this.screen = new Screen(this);
        this.background = new background(this);
        this.speedUp();
        this.food = new food(this);
        this.loop();
     }
       
     loop(){
      
        this.update();
        this.draw();
        setTimeout(()=>this.loop(),20)
     }
     update(){
        this.snake.update();
        this.screen.update();
        this.food.update();
        this.background.update(); 
        
        }
     clearScreen(){
         this.context.fillStyle = "black";
         this.context.fillRect(0,0,screenWidth,screenHeight);
     }
     
     draw(){
         
        this.clearScreen();
        this.background.draw();
        this.snake.draw();
     }
       
      
       
    
     speedUp(){
      $('canvas').on('mousedown mouseup', function mouseState(e) {
        
         if (e.type == "mousedown") {
             //code triggers on hold
             console.log("hold");
             snackSpeed = 8;
          }    
          else snackSpeed = 3;
        });
     };
     
     
};
var games = new game();   
      
   
    
       
   