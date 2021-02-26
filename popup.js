let link = "https://news.ycombinator.com/submitlink?u="
window.onload = function(){
    document.getElementById("submit").addEventListener('click', submit)
}

function submit() {    
    chrome.windows.getCurrent((window) => {
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, (tab) => {
            console.log(encodeURIComponent(tab[0].url))
            chrome.tabs.create({url: link + tab[0].url + "&t=" + tab[0].title})
        })
    })
}