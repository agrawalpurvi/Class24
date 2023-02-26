var my_circle;


function setup(){
    createCanvas(400,400);
    my_circle=new Circle(50,10,6,10,"pink");

}


function draw(){
    background("purple");
    my_circle.x+=my_circle.xspeed;
    
    
    if(my_circle.x<0 || my_circle.x>width){
        my_circle.xspeed*=-1;
    }


    my_circle.y+=my_circle.yspeed;

    if(my_circle.y<0 || my_circle.y>height){
        my_circle.yspeed*=-1;
    }

    fill("pink");

    circle(my_circle.x,my_circle.y,50);

    

    
}