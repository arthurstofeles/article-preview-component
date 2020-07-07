const shareButtonClose = document.getElementById('closeCard');
const shareButtonOpen = document.getElementById('openCard')

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

window.onload = function() {
    for(let i = 0; i < btnFacebook.length; i++) {
        btnFacebook[i].href = "https://www.facebook.com/sharer/sharer.php?u=" + window.location.href;
    }
}