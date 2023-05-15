img="";
status="";
objects=[];

function preload(){
    img=loadImage("R.jpeg");
    sound=loadSound("sound.wav");
}

function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    canvas.hide();
    
}

function start(){
    object_detector=ml5.objectDetector('cocossd',model_loaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function model_loaded(){
    console.log('model_loaded');
    status=true;
}

function got_results(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results;
}

function draw(){
    image(video,0,0,380,380);
    
    if(status != ""){

        object_detector.detect(video,got_results);

        if(object.detect == objects["person"].label){
            document.getElementById("status").innerHTML="Status : Baby detected!";
            fill(r,g,b);
            percentage=floor(objects[i].confidence * 100);
            text(objects[i].label + "" , objects[i].x + 15 , objects[i].y + 15);
            noFill();
            stroke("red");
            rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);
        }
    }
    else{
        sound.play("sound.wav");
        speed(1);
        volume(1.5);
    }
}