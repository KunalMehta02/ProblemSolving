// console.log('Welcome git');
// console.log("hello");
// console.log('Welcome git');
// console.log("hello");



// function f1(){
// setTimeout(()=>{console.log('Welcome 5000');},5000);
// setTimeout(()=>{console.log('Welcome 3000');},3000);
// } 
// f1();

console.log('satrt');
setTimeout(function cbT(){
    console.log('cb setTimeout')
},5000);

fetch("https://www.netflix.com/in/")
.then(function cbF(){
    console.log("CB netflix");
});
console.log("end")


