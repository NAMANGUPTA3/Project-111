prediction_2 = ""

Webcam.set({
    height: 300,
    width: 350,
    img_format: 'png',
    img_quality: 2160
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot() {

    Webcam.snap(function (data_uri) {
        document.getElementById("results").innerHTML = '<img id = "captured_image" src="' + data_uri + '">';

    });

}
