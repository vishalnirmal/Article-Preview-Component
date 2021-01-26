var share = document.querySelector(".share");
share.addEventListener("click", ()=>{
    var share_bubble = document.querySelector(".share-bubble");
    if(share_bubble.parentElement.classList.contains("active"))
        share_bubble.parentElement.classList.remove("active");
    else
        share_bubble.parentElement.classList.add("active");
});