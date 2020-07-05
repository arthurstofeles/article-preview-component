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