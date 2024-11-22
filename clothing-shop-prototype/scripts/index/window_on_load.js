const loadingScreenElement = document.getElementById("loading-screen");
const loaderElement = document.getElementById("progress-bar");

window.onload = ()=>{
    console.log(window.localStorage.getItem("isExecuted"));
    if (!window.localStorage.getItem("isExecuted")) {
        if(window.location.hash==='' || window.location.hash==='#' ){
            setTimeout(()=>{
                loadingScreenElement.classList.add('removed');
                document.body.className = '';
            },2000);
        }
        else{
            document.body.className = '';
        }
        window.localStorage.setItem("isExecuted", true);
    }
    else{
        loadingScreenElement.classList.add('removed');
        document.body.className = '';
    }
};