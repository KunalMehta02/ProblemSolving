console.log('satrt');
setTimeout(function cbT(){
    console.log('cb setTimeout')
},5000);

fetch("https://www.netflix.com/in/")
.then(function cbF(){
    console.log("CB netflix");
});
console.log("end")


