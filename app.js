let test1 = document.getElementById("test1");
let test2 = document.getElementById("test2");
let demo = document.getElementById("demo");

function myFunction(){
    console.log(test1.value);
    console.log(test2.value);
    demo1.innerHTML = `<p>Text: ${test1.value}<p>`
    demo2.innerHTML = `<p>Text 2: ${test2.value}<p>`
}

let score = 0; 

function scoreKeeper(){
    if (test1.value == test2.value){
        score += 10;
        document.getElementById("score").innerHTML = score;
        // console.log(score);
    } else {
        score += 5;
        document.getElementById("score").innerHTML = score;
    }
}

