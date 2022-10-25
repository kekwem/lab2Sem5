function Click(str:string):void{
    var input = document.getElementsByTagName('input')[0];
    input.value += str;
}

function Clear():void{
    var input = document.getElementsByTagName('input')[0];
    input.value = "";
}

function Calculate():void{
    var input = document.getElementsByTagName('input')[0];
}
