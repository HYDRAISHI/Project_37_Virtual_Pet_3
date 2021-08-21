class Food {
    constructor(){
        this.image = loadImage("images/Milk.png");
        this.foodStock = foodStock;        
        this.lastFed = lastFed;
        

        
    }

    getFoodStock(){
        return this.foodStock;
    }   

    updateFoodStock(foodStock){
        this.foodStock = foodStock;
    }

    deductFood(){
        if(foodS > 0){
            foodS = foodS -1;
        } 
    }   

    washroom(){
        background(washroom, 500,500);
        dog.visible = false;
    }

    bedroom(){
        background(bedroom, 500,500);
        dog.visible = false;
    }

    garden(){
        background(garden, 500,500);
        dog.visible = false;
    }
    display(){
        var x=50,y=200; 
        image(this.image,600,200,50,50); 
        if(this.foodStock!=0){ 
            for(var i=0;i<this.foodStock;i++){
                 if(i%10===0){ 
                    x=80; 
                    y=y+50; 
                } 
                image(this.image,x,y,50,50); 
                x=x+30;
                
            }
        }
    }
}