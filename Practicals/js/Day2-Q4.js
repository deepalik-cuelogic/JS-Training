//4. Write a program that will print number from 1 to 100 using all the variants of a loop structure(for,while,do while etc)

//for loop 
function usingForLoop(){
    var forLoopArr = [];
    for (var i = 1 ; i <= 100 ; i++){
        forLoopArr.push(i);
    }
    document.getElementsByClassName('forLoopResult')[0].innerHTML +=  forLoopArr ;
}

//while loop 
function usingWhileLoop(){
    var WhileLoopArr = [];
    var i = 1 ;
    while (i <= 100){
        WhileLoopArr.push(i);
        i++;
    }
    document.getElementsByClassName('whileLoopResult')[0].innerHTML +=  WhileLoopArr ;
}
//do while loop 
function usingDoWhileLoop(){
    var DoWhileLoopArr = [];
    var i = 1 ;
    do{
        DoWhileLoopArr.push(i);
        i++;
    }
    while (i <= 100);
    document.getElementsByClassName('dowhileLoopResult')[0].innerHTML +=  DoWhileLoopArr ;
}