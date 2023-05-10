let videoUrl = "https://www.youtube.com/watch?v=DfEJGoZM9c0";
document.getElementById("sf_url").value = videoUrl;
document.getElementById("sf_submit").click();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

while (true) {
    try {
        let url = document.getElementsByClassName("def-btn-box")[0].childNodes[0].href;
        console.log(url);
        break;
    } catch (err) {
        await sleep(100);
    }
}
