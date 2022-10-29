///<reference path = 'Modul.ts'/>

function Calculate():void{
    var a:Utilities.ICalculator = new Utilities.Calculator()


    var input = document.getElementsByTagName('input')[0]
    input.value = a.CalculateProcess(input.value).toString()
}

function Clear():void{
    var input = document.getElementsByTagName('input')[0]
    input.value = ""
}

function Click(str:string):void{
    var input = document.getElementsByTagName('input')[0]
    input.value += str
}