/// Website: https://y2mate.com/

async function getQuality(vid) {
    let url = 'https://www.y2mate.com/mates/analyzeV2/ajax';
    const formData = new FormData();

    let videoURL = "https://www.youtube.com/watch?v=" + vid;
    // console.log(videoURL);

    formData.append("k_query", videoURL);
    formData.append("k_page", "home");

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
    let url = "https://www.y2mate.com/mates/convertV2/index";
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

let data = await getQuality(videoId);
let k = data["links"]["mp4"]["auto"]["k"];
let vid = data["vid"];

let dlData = await getLinkDownload(vid, k);
let urlDownload = dlData["dlink"]

urlDownload;

// getQuality(videoId).then(data => {
//     console.log(data);
//     let k = data["links"]["mp4"]["auto"]["k"];
//     let vid = data["vid"]

//     getLinkDownload(vid, k).then(dlData => {
//         console.log(dlData);
//         let urlDownload = dlData["dlink"]
//         console.log(urlDownload)

//      });
// });