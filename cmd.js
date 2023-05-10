document.getElementsByClassName("mobile-topbar-header")[0].style.display = "none"           
document.getElementById("app").style.padding = "0px"
document.getElementById("app").style.background = "#20242F"
var css = '*{-webkit-touch-callout:none;-webkit-user-select:none}'; 
var head = document.head || document.getElementsByTagName('head')[0]; 
var style = document.createElement('style'); style.type = 'text/css'; 
style.appendChild(document.createTextNode(css)); 
head.appendChild(style);            
document.body.style.background = "#20242F"            
document.getElementsByClassName("spinner")[0].style.display = "none"            
document.querySelector("#app > ytm-pivot-bar-renderer").style.display = "none"            
var matches = document.getElementsByClassName("compact-media-item-stats")            
for (var i=0; i<matches.length; i++) {matches[i].style.display = "none"}
var matches = document.getElementsByClassName("metadata-badge")
for (var i=0; i<matches.length; i++) {matches[i].style.display = "none"}
var matches = document.getElementsByClassName("compact-media-item-menu")
for (var i=0; i<matches.length; i++) {matches[i].style.display = "none"}
var matches = document.getElementsByTagName("h4")
for (var i=0; i<matches.length; i++) { matches[i].style.padding = "auto"}
var matches =document.getElementsByClassName("compact-media-item-metadata-content")
for (var i=0; i<matches.length; i++) {matches[i].style.color = "#ffffff"}
var matches = document.getElementsByTagName("ytm-promoted-sparkles-text-search-renderer")
for (var i=0; i<matches.length; i++) { matches[i].style.display = "none"}