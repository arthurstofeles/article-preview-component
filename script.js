const shareButtonClose = document.getElementById('closeCard');
const shareButtonOpen = document.getElementById('openCard');

shareButtonOpen.onclick = showShare;
shareButtonClose.onclick = showShare;

function showShare() {
    const cardShare = document.getElementById('shareCard');

    if( cardShare.style.display === "none" ) {
        cardShare.style.display = "flex";
    } else {
        cardShare.style.display = "none";
    }
}

// Facebook Share Function
let btnFacebook = document.querySelectorAll('[data-share="facebook"]');

document.addEventListener("DOMContentLoaded", function() {
    for(let i = 0; i < btnFacebook.length; i++) {
        btnFacebook[i].href = "https://www.facebook.com/sharer/sharer.php?u=" + window.location.href;
    }
});

// Twitter Share Funciton
let btnTwitter = document.querySelectorAll('[data-share="twitter"]');

document.addEventListener("DOMContentLoaded", function() {
    for(let i = 0; i < btnTwitter.length; i++) {
        btnTwitter[i].href = "https://twitter.com/intent/tweet?url="+window.location.href+"&text=";
    }
});

// Pinterest Share Function 
let btnPinterest = document.querySelectorAll('[data-share="pinterest"]');

document.addEventListener("DOMContentLoaded", function() {
    for(let i = 0; i < btnPinterest.length; i++) {
        btnPinterest[i].href = "https://www.pinterest.com/pin/create/button/?url="+window.location.href+"&description="+document.title;
    }
});