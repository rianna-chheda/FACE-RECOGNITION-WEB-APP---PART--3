Webcam.set({
    width:300,
    height:300,
    mage_format:'jpg',
    jpg_quality:90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML ='<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/PHEaqVVQk//model.json",modelLoaded);

function modelLoaded()
{console.log("Model Loaded");
}
function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results)
{
    if (error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("result_person").innerHTML = results[0].label;
        document.getElementById("result_person_accuracy").innerHTML = result[0].confidence.toFixed(3);
    }
}