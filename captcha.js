let code;
function createCaptcha() {
    //clear the contents of captcha div first
    document.getElementById('captcha').innerHTML = "";
    let charsArray =
        "023456789abcdefghijkmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lengthOtp = 4;
    let captcha = [];
    for (let i = 0; i < lengthOtp; i++) {
        //below code will not allow Repetition of Characters
        let index = Math.floor(Math.random() * charsArray.length + 1); //get the next character from the array
        if (captcha.indexOf(charsArray[index]) === -1)
            captcha.push(charsArray[index]);
        else i--;
    }
    // let canv = document.createElement("canvas");
    // canv.id = "captcha";
    // canv.width = 100;
    // canv.height = 50;
    const canv = document.getElementById('captcha');
    let ctx = canv.getContext("2d");
    ctx.font = '100px Verdana';
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canv.width, canv.height);
    ctx.textAlign = 'center';

    const gradient = ctx.createLinearGradient(0,0, canv.width,0);
    gradient.addColorStop(0,"magenta");
    gradient.addColorStop(0.5,"blue");
    gradient.addColorStop(1,"red");
    ctx.fillStyle = gradient;
    ctx.fillText(captcha.join(""), canv.width / 2, 110, 300);
    //storing captcha so that can validate you can save it somewhere else according to your specific requirements
    code = captcha.join("");
    // document.getElementById("captcha").appendChild(canv); // adds the canvas to the body element
}

function validateCaptcha(e) {
    e.preventDefault();
    debugger
    if (document.getElementById("cpatchaTextBox").value === code) {
        alert("Valid Captcha")
    }else{
        alert("Invalid Captcha. try Again");
        createCaptcha();
    }
}
