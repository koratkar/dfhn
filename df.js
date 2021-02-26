let hn = document.getElementsByTagName("a")
let burn_words = ['comments', 'discuss', 'new', 'past', 'show', 'jobs', 'submit', 'ask', 'More']

function destroylinks(c) {
    if (c == 0) {
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

function destroylines() {
    // document.getElementsByClassName("pagetop")[0].innerHtml = '<span class="pagetop"><b class="hnname"><a href="news">Hacker News</a></b></span>'
    // console.log(document.getElementsByClassName("pagetop"))
    let pagetop = document.getElementsByClassName("pagetop")[0]
    pagetop.innerHTML = '<b class="hnname"><a href="news">Hacker News</a></b>'
    let subtexts = document.getElementsByClassName("subtext")
    for (i=0; i<subtexts.length; i++) {
        subtexts[i].innerHTML = ""
    }
}

destroylinks(hn.length)
destroylines()
console.log("DFHN is awake. View the source code: github.com/koratkar/dfhn.")