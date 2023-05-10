// var scriptUrl = 'https://www.youtube.com/s/player/50cf60f0/www-widgetapi.vflset/www-widgetapi.js';
// var scriptUrl = 'https://firebasestorage.googleapis.com/v0/b/doczy-media.appspot.com/o/widgetapi.js?alt=media&token=78cecbee-07b0-47aa-8a6d-8ae96be0cde7';
var scriptUrl = "widgetapi.js";
console.log("aloa");

window['yt_embedsEnableHouseBrandAndYtCoexistence'] = true;
try {
    var ttPolicy = window.trustedTypes.createPolicy("youtube-widget-api", {
        createScriptURL: function (x) {
            return x
        }
    });
    scriptUrl = ttPolicy.createScriptURL(scriptUrl)
} catch (e) { }
var YT;
if (!window["YT"]) YT = {
    loading: 0,
    loaded: 0
};
var YTConfig;
if (!window["YTConfig"]) YTConfig = {
    "host": "https://www.youtube.com"
};
if (!YT.loading) {
    YT.loading = 1;
    (function () {
        var l = [];
        YT.ready = function (f) {
            if (YT.loaded) f();
            else l.push(f)
        };
        window.onYTReady = function () {
            YT.loaded = 1;
            for (var i = 0; i < l.length; i++) try {
                l[i]()
            } catch (e$0) { }
        };
        YT.setConfig = function (c) {
            for (var k in c)
                if (c.hasOwnProperty(k)) YTConfig[k] = c[k]
        };
        var a = document.createElement("script");
        a.type = "text/javascript";
        a.id = "www-widgetapi-script";
        a.src = scriptUrl;
        a.async = true;
        var c = document.currentScript;
        if (c) {
            var n = c.nonce || c.getAttribute("nonce");
            if (n) a.setAttribute("nonce", n)
        }
        var b =
            document.getElementsByTagName("script")[0];
        b.parentNode.insertBefore(a, b)
    })()
};