function week3Go() {
    const rdoValue = document.getElementsByName("ageRange");
    const output = document.getElementById("output");
    const chkValue = document.getElementsByName("foodStuff");
    const selColor = document.getElementById("selColor");
    const rand = document.getElementById("textInput");
    const rand2 = document.getElementById("rand2");
    const num = document.getElementById("numInput");
    const pNum = document.getElementById("tellInput");
    const phNum = pNum.value
    const pass = document.getElementById("passInput");
    const Day = document.getElementById("dtBirth");
    let foundOne = false

    output.innerHTML = "";
    for(let i=0; i<rdoValue.length; i++) {
        if (rdoValue[i].checked) {
            output.innerHTML += "Age Range Chosen: " + rdoValue[i].value
            break;
        }
    }
    for(let i=0; i<chkValue.length; i++) {
        if (chkValue[i].checked) {
            output.innerHTML += "<br> Foods Chosen: " + chkValue[i].value
            foundOne = true;
        }
    }
    if(!foundOne) {
        output.innerHTML += "<br> no foods chosen :("
    }
    
    output.innerHTML += "<br> Color slected: " + selColor.value
    output.innerHTML += "<br> Random Text: " + rand.value
    output.innerHTML += "<br> Random Text 2 electric boogallo: " + rand2.value
    output.innerHTML += "<br> number: " + num.value
    output.innerHTML += "<br> Your Phone Number: " + phNum
    output.innerHTML += "<br> password: " + pass.value
    output.innerHTML += "<br> date: " + Day.value
}
