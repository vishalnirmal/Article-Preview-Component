var share = document.querySelector(".share");
share.addEventListener("click", ()=>{
    var share_bubble = document.querySelector(".share-bubble");
    if(share_bubble.classList.contains("active"))
        share_bubble.classList.remove("active");
    else
        share_bubble.classList.add("active");
});