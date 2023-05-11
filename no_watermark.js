var body = document.getElementsByTagName("body")[0];
for (var i = body.childNodes.length - 1; i >= 0; i--) {
    body.removeChild(body.childNodes[i]);
}
var r = document.getElementsByTagName('script');
for (var i = (r.length - 1); i >= 0; i--) {
    if (r[i].getAttribute('id') != 'a') {
        r[i].parentNode.removeChild(r[i]);
    }
}

var divPlayer = document.createElement("div");
divPlayer.setAttribute("id", "player");
body.appendChild(divPlayer);
var script = document.createElement("script");
script.innerHTML = `
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    var player;
    var timerId;
    var lastPlayerState = -1;

    function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
            height: '100%',
            width: '100%',
            videoId: 'Rm-SSPd2Rk4',
            playerVars: {
                'controls': 1,
                'playsinline': 1,
                'enablejsapi': 1,
                'fs': 0,
                'rel': 0,
                'showinfo': 0,
                'iv_load_policy': 3,
                'modestbranding': 0,
                'autoplay': '0',
            },
            events: {
                onReady: function(event) { window.flutter_inappwebview.callHandler('Ready'); },
                onStateChange: function(event) { sendPlayerStateChange(event.data); },
                onPlaybackQualityChange: function(event) { window.flutter_inappwebview.callHandler('PlaybackQualityChange', event.data); },
                onPlaybackRateChange: function(event) { window.flutter_inappwebview.callHandler('PlaybackRateChange', event.data); },
                onError: function(error) { window.flutter_inappwebview.callHandler('Errors', error.data); }
            },
        });
    }
    function sendPlayerStateChange(playerState) {
        lastPlayerState = playerState;
        clearTimeout(timerId);
        window.flutter_inappwebview.callHandler('StateChange', playerState);
        if (playerState == 1) {
            startSendCurrentTimeInterval();
            sendVideoData(player);
        }
    }

    function sendVideoData(player) {
        var videoData = {
            'duration': player.getDuration(),
            'title': player.getVideoData().title,
            'author': player.getVideoData().author,
            'videoId': player.getVideoData().video_id
        };
        window.flutter_inappwebview.callHandler('VideoData', videoData);
    }

    function startSendCurrentTimeInterval() {
        timerId = setInterval(function () {
            window.flutter_inappwebview.callHandler('VideoTime', player.getCurrentTime(), player.getVideoLoadedFraction());
        }, 100);
    }

    function play() {
        player.playVideo();
        return '';
    }

    function pause() {
        player.pauseVideo();
        return '';
    }

    function loadById(loadSettings) {
        player.loadVideoById(loadSettings);
        return '';
    }

    function cueById(cueSettings) {
        player.cueVideoById(cueSettings);
        return '';
    }

    function loadPlaylist(playlist, index, startAt) {
        player.loadPlaylist(playlist, 'playlist', index, startAt);
        return '';
    }

    function cuePlaylist(playlist, index, startAt) {
        player.cuePlaylist(playlist, 'playlist', index, startAt);
        return '';
    }

    function mute() {
        player.mute();
        return '';
    }

    function unMute() {
        player.unMute();
        return '';
    }

    function setVolume(volume) {
        player.setVolume(volume);
        return '';
    }

    function seekTo(position, seekAhead) {
        player.seekTo(position, seekAhead);
        return '';
    }

    function setSize(width, height) {
        player.setSize(width, height);
        return '';
    }

    function setPlaybackRate(rate) {
        player.setPlaybackRate(rate);
        return '';
    }

    function setTopMargin(margin) {
        document.getElementById("player").style.marginTop = margin;
        return '';
    }
    `;

body.appendChild(script);
document.body.style = `
    margin: 0;
    padding: 0;
    background-color: #000000;
    overflow: hidden;
    position: fixed;
    height: 100%;
    width: 100%;
    /* pointer-events: none; */
`;



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function clear() {
    while (true) {
        try {
            removeClass("ytp-impression-link");
            removeClass("ytp-watermark");
            removeClass("ytp-title-link");
            removeClass("ytp-title-text");
            removeClass("ytp-title-channel");
            removeClass("ytp-watch-later-button");
            removeClass("ytp-more-videos-view");
            removeClass("ytp-chrome-top");
            removeClass("ytp-show-cards-title");
            removeClass("ytp-ce-element");
            removeClass("ytp-endscreen-content");
            removeClass("ytp-youtube-button");
            removeClass("ytp-large-play-button");
            removeClass("branding-img-container");
            
            

            await sleep(500);
        } catch (err) {
            await sleep(500);
        }
    }
}

function removeClass(className) {
    var iframe = document.getElementById("player").contentDocument;
    for (var i=iframe.getElementsByClassName(className).length-1; i>=0; i--) {
        var element = iframe.getElementsByClassName(className)[i];
        element.parentNode.removeChild(element);
    }
}

clear();

document.addEventListener('visibilitychange', event => {
    if (document.visibilityState === 'visible') {
        // Resume music
        // player.playVideo();
    } else if (lastPlayerState == 1) {
        // Continue play music in background
        player.playVideo();
    }
});