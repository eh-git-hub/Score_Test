let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");

function myFunction(){
    console.log(input1.value);
    console.log(input2.value);
    demo1.innerHTML = `<p>Text 1: ${input1.value}<p>`
    demo2.innerHTML = `<p>Text 2: ${input2.value}<p>`
}

let score = 0; 

function scoreKeeper(){
    if (input1.value == input2.value){
        score += 10;
        document.getElementById("score").innerHTML = score;
        // console.log(score);
    } else {
        score += 5;
        document.getElementById("score").innerHTML = score;
    }
}

