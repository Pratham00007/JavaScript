// async and aawait

function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weathr data");
            resolve(200);
        },2000);
    });
}

async function getWeatherData() {
    await api(); // 1st call
    await api(); //2nd call after 4 sec total
}