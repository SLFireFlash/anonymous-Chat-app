const txtToken = document.getElementById("TextTokenid");


function tokenGen(){
    var numbers =[1,2,3,4,5,6,7,8,9,0];
    let TokenId= "user";
    for(let x=0;x<4;x++){
        TokenId +=Math.floor(Math.random() * numbers.length);
    }
    return TokenId
}

function copyTxt(){
    const token = document.getElementById("TextTokenid");
    token.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(token.value);
    alert("Copied the text: " + token.value);
}

txtToken.value = tokenGen();



