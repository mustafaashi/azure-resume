window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const funcctionApi = '';

const getVisitCount = () => {
    let count = 30;
    fetch(funcctionApi).then(Response => {
        return Response.json()
    }).then(Response =>{
        console.log("Website Called function API.");
        count = Response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
} 