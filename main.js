class MaryamsError extends Error {
    constructor(message) {
      super(message);
      this.name = "Maryam's Error"; 
    }
}

//error catching
window.onerror = function (msg, url, lineNo, columnNo, error) {
    console.log("Error Found:\n" + error);
    TrackJS.track("Error Found:\n" + error);
    return false;
  };

function test(){
    console.log("Output: " + document.querySelector('output').innerHTML);
}
function error(){
    console.error("ERR: change ouput so that it does not equal output. Currently = " + document.querySelector('output').innerHTML);
}

function count(){
    console.count("Number of times count button has been clicked")
}
function warn(){
    console.warn('Change first number. Currently = ' + document.querySelector('#first-num').value);
}
function assert(){
    let first = parseInt(document.querySelector('#first-num').value);
    let second = parseInt(document.querySelector('#second-num').value);
    let output = parseInt(document.querySelector('output').value);
    let reason = 'Calculator is outputting wrong answer';
    if(document.querySelector('#operator').value == "+"){
        console.assert((first + second) == output, {first, second, output, reason});
    }
    else if(document.querySelector('#operator').value == "-"){

        console.assert((first - second) == output, {first, second, output, reason});
    }
    else if(document.querySelector('#operator').value == "*"){
        console.assert((first * second) == output, {first, second, output, reason});
    }
    else if(document.querySelector('#operator').value == "/"){
        console.assert((first / second) == output, {first, second, output, reason});
    }
    //meant to fail
    reason = "Imposible statement";  
    console.assert((first > second) && (first < second), {first, second, reponse}); 
}
function clear(){
    console.clear();
    console.log("Console Clearned"); 
}

function conDir(){
    console.dir(document.head);
}

function dirxml(){
    console.dir(document);
}
function start(){
    console.group("Test"); 
}
function end(){
    console.groupEnd("Test"); 
}
function table(){
    console.table([
        {
          Class: 'CSE 110',
          Time: '6 PM',
        },
        {
        Class: 'CSE 152A',
        Time: '2 PM',
        },
        {
        Class: 'CSE 101',
        Time: '1 PM',
        }
      ]);
}
function startTimer(){
    console.time("myTimer");
    console.log("Timer Started")
}
function endTimer(){
    console.timeEnd("myTimer");
    
}
function trace(){
    console.trace();
}

function global(){
    console.log(boom); //triggers error

}

function tryCatch(){
    try {
        aintGonnaWork(); 
      } catch (err) {    
        console.error(`Error has occurred!`);     
      }finally{
        console.log("Error does not affect functionality")
      }
}

function aintGonnaWork(){
    console.log(nonExistentVariable);
}

function toThrow(){
    try{
        throw new Error("Error has been thrown");
    }
    catch{
        console.log('Error Thrown and Caught')
    }
}

function customError(){
    try{
        throw new MaryamsError("A custom Error has been thrown");
    }
    catch{
        console.log('Custom Error Thrown and Caught')
    }
    
}


    