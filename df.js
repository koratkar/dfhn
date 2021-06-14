console.log("DFHN is awake. View the source code: github.com/koratkar/dfhn.")
function hn_dry() {
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

    function make_gray_and_sad() {
        let lines = document.getElementsByTagName("td")
        lines[0].setAttribute("bgcolor", "#808080")
        lines[lines.length - 1].setAttribute("bgcolor", "#808080")
        document.getElementsByTagName("body")[0].setAttribute("style", "background-color: black;")
        document.getElementsByTagName("img")[0].remove()
        document.getElementById("hnmain").setAttribute("bgcolor", "#d3d3d3")
        let arrows = document.getElementsByClassName("votearrow")
        while(arrows.length > 0) {
            arrows[0].remove()
        }
    }
    make_gray_and_sad()
    
}

if (window.location.host == "news.ycombinator.com") {
    var fake_body = document.documentElement.appendChild(document.createElement("body"))
    fake_body.setAttribute("bgcolor", "black")
    var loading = fake_body.appendChild(document.createElement("h1"))
    loading.setAttribute("id", "loading")
    document.getElementById("loading").innerHTML = "You should be working on something!"
    document.getElementById("loading").style.color = "ff6600"
    document.addEventListener('DOMContentLoaded', () => {
        // fake_body.remove()
        hn_dry()
    })
} else if (window.location.host == "youtube.com") {
    var fake_body = document.documentElement.appendChild(document.createElement("body"))
    fake_body.setAttribute("bgcolor", "black")
    var loading = fake_body.appendChild(document.createElement("h1"))
    loading.setAttribute("id", "loading")
    document.getElementById("loading").innerHTML = "You should be working on something!"
    document.getElementById("loading").style.color = "ff6600"
    document.addEventListener('DOMContentLoaded', () => {
        // fake_body.remove()
        hn_dry()
    })
}


console.log("DFHN is awake. View the source code: github.com/koratkar/dfhn.")