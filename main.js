let btn=document.getElementById('btn');
let output = document.getElementById('outputtext');

let number = [Math.floor(Math.random()*100)]

btn.addEventListener('click', function(){
    let input = document.getElementById('userInput').value;
    if(input == number){
        output.innerHTML = 'HURRAH!!!!  YOU WON ,your number was ${number}'
    } else if (input < number){
        output.innerHTML = "You gussed too LOW!!!"
    };
    if(input > number){
        output.innerHTML = "you gussed too HIGH!!!"
    }

});
