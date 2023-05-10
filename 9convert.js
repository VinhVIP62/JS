/// Website: https://9convert.com/

async function getQuality(vid) {
    let url = 'https://9convert.com/api/ajaxSearch/index';
    const formData = new FormData();

    let videoURL = "https://www.youtube.com/watch?v=" + vid;
    console.log(videoURL);

    formData.append("query", videoURL);
    formData.append("vt", "home");

    let res = await fetch(url, {
        method: 'POST',
        body: formData,
    });

    if (res.ok) {
        let ret = await res.json();
        return ret;

    } else {
        return `HTTP error: ${res.status}`;
    }
}

async function getLinkDownload(vid, k) {
    let url = "https://9convert.com/api/ajaxConvert/convert";
    const formData = new FormData();

    formData.append("vid", vid);
    formData.append("k", k);


    let res = await fetch(url, {
        method: 'POST',
        body: formData,
    });

    if (res.ok) {
        let ret = await res.json();
        return ret;

    } else {
        return `HTTP error: ${res.status}`;
    }
}

let videoId = "NZJmLBap_0c";

getQuality(videoId).then(data => {
    console.log(data);
    let k = data["links"]["mp4"]["auto"]["k"];
    let vid = data["vid"]

    getLinkDownload(vid, k).then(dlData => {
        console.log(dlData);
        let urlDownload = dlData["dlink"]
        console.log(urlDownload)

     });
});