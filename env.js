const showFeed = document.querySelector('#discord-feed'); 
const sec1 = "https://disco";
const sec2 = "rd.com/widget?id=116527623";
const sec3 = "9716696184&theme=dark";
const full = sec1 + sec2 + sec3;
showFeed.setAttribute('src', full);
