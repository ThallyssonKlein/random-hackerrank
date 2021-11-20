import html2canvas from "html2canvas"

//Receive msg from background
chrome.runtime.onMessage.addListener((request, sender, sendRequest) => {
    if(request === "screenshot"){

        html2canvas(document.body).then(canvas => { 

        //Took screenshot
        var image = new Image();
        image.src = canvas.toDataURL("image/png");
        image.id = "facial"
        var output=image.src
    
        //Autosave to the local folder
        const anchor = document.createElement('a');
        anchor.download = "img.png";
        anchor.href = canvas.toDataURL("image/png");
        anchor.click()
        })
        .catch(e => {
            console.log("Error " + e + ", the screenshot is not able to be taken")
        })
    
    };

})
