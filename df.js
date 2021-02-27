let hn = document.getElementsByTagName("a")
let burn_words = ['comments', 'discuss', 'new', 'past', 'show', 'jobs', 'submit', 'ask', 'More']

function destroylinks(c) {
    if (c == 0) {
        let pagetop = document.getElementsByClassName("pagetop")[0]
        pagetop.innerHTML = '<b class="hnname"><a href="news">Hacker News</a></b>'
        return
    } else if (typeof(hn[c]) == 'undefined') {
        destroylinks(c-1)
    } else {
        for (i=0; i<burn_words.length; i++) {
            if (hn[c].text == (burn_words[i])) {
                hn[c].remove()
                i = burn_words.length
            }
        }
    }
    destroylinks(c-1)
}
function destroysubtext() {
    let subtexts = document.getElementsByClassName("subtext")
    for (i=0; i<subtexts.length; i++) {
        subtexts[i].innerHTML = ""
    }
}

destroylinks(hn.length)
if (!window.location.href.includes('item')) {
    destroysubtext()
} else {
    document.getElementsByClassName("comment-tree")[0].remove()
}

console.log("DFHN is awake. View the source code: github.com/koratkar/dfhn.")