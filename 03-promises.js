
    //promise
    // Using two-pronged ‘facade’
    // functions that both initiate background web
    // browser work and return a placeholder object (promise) immediately in JavaScript

function display(data){
    console.log(data)
   }
   const futureData = fetch('https://jsonplaceholder.org/users/1')
   futureData.then(display); // Attaches display functionality
   console.log("Me first");
   