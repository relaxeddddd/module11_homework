const timer = setInterval(function(a,b){
    for (let i=a; i<=b; i++){
        console.log(i);

        if (i ==b){
            clearInterval(timer);
        }
    }
}, 1000,5,10);