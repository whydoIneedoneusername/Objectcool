objects=[]
status="";

function preload()
{

}

function setup()
{
    canvas=createCanvas(600,360);
    canvas.center()
    video.hide()
}

function start()
{
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting objects";
}

function modelLoaded()
{
    console.log("model is loaded");
}
function draw()
{
    image(video, 0,0,650,450);
    if(status != "")
    {
        objectDetector.detect(video,gotResult);

        for(i=0; i<objects.length; i++)
        {
            document.getElementById("status").innerHTML="Status: Objects detected";
            document.getElementById("number_of_objects").innerHTML="Number of Objects detected are "+ objects.length;

            fill('#25c8e8');
            percent=floor(objects[i].confidence * 100);
            text(objects[i].label+"  "+percent+"%", objects[i].x+15, objects[i].y+15);
            noFill();
            stroke("#25c8e8");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}