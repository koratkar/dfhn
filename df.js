let hn = document.getElementsByTagName("a")
let burn_words = ['comments', 'discuss', 'new', 'past', 'show', 'jobs', 'submit', 'ask', 'More']

function destroyComments(c) {
    if (c == 0) {
        return
    } else if (typeof(hn[c]) == 'undefined') {
        destroyComments(c-1)
    } else {
        for (i=0; i<burn_words.length; i++) {
            if (hn[c].text.includes(burn_words[i])) {
                hn[c].remove()
                i = burn_words.length
            }
        }
        destroyComments(c-1)
    }
}


destroyComments(hn.length)