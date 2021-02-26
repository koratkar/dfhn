let hn = document.getElementsByTagName("a")
let burn_words = ['comments', 'discuss', 'new', 'past', 'show', 'jobs', 'submit', 'ask', 'More']

function destroyComments(c) {
    if (c == 0) {
        return
    } else if (typeof(hn[c]) == 'undefined') {
        destroyComments(c-1)
    } else {
        if (hn[c].className !== 'storylink') {
            for (i=0; i<burn_words.length; i++) {
                if (hn[c].text.includes(burn_words[i])) {
                    hn[c].remove()
                    i = burn_words.length
                }
            }
        }
        destroyComments(c-1)
    }
}

function destroyLines() {
    // document.getElementsByClassName("pagetop")[0].innerHtml = '<span class="pagetop"><b class="hnname"><a href="news">Hacker News</a></b></span>'
    // console.log(document.getElementsByClassName("pagetop"))
    let pagetop = document.getElementsByClassName("pagetop")[0]
    pagetop.innerHTML = '<b class="hnname"><a href="news">Hacker News</a></b>'
    let subtexts = document.getElementsByClassName("subtext")
    for (i=0; i<subtexts.length; i++) {
        subtexts[i].innerHTML = ""
    }
}

destroyComments(hn.length)
destroyLines()
console.log("DFHN is awake. View the source code: github.com/koratkar/dfhn.")