

$(() => {
    // let first = $("li")[0];
    // let $first = $(first);

    // $first.css("background", "green");

    // console.log("helloooo");
    // console.log($first);

    populateLocalStorage();
    
    const songInput = $("#song-input");
    const artistInput = $("#artist-input");
    const taNameInput = $("#name");

    const form = $("form");

    form.on("submit", (e) => {
        e.preventDefault(); //need this because we don't want it to trigger a POST req

        const titleText = songInput.val();
        const artistText = artistInput.val();
        const ta = $(`#${taNameInput.val().toLowerCase()}`);

        // console.log(titleText);
        // console.log(artistText);
        // console.log(ta);
        
        let lsTa = localStorage.getItem(taNameInput.val());
        
        lsTa = JSON.parse(lsTa);
        if (lsTa === null) {
            lsTa = [];
        }

        lsTa.push({title: titleText, artist: artistText});

        localStorage.setItem(taNameInput.val(), JSON.stringify(lsTa));

        addSongSnippet(ta, titleText, artistText, taNameInput.val());

        songInput.val("");
        artistInput.val("");
        taNameInput.val("");

    
    })
})

function addSongSnippet(ta, titleText, artistText, taName) {
    const song = $("<div></div>");
    song.addClass("songSnippet");

    const title = $("<div></div>");
    const artist = $("<div></div>");

    title.text(titleText);
    artist.text(artistText);

    song.append(title);
    song.append(artist);

    song.data("taName", taName);
    // console.log(song.data("taName"));

    ta.append(song);

    addClick(song);
}

function addClick(song) {
    song.on("click", () => {
        let li = $("<li></li>");
        // console.log(song.children());
        let arr = song.children();
        let [title, artist] = arr;
        li.text(`title: ${$(title).text()}, artist: ${$(artist).text()}`)
        $("#addedSongs").append(li);
    })

    song.on("click", () => {
        console.log(song.data("taName"));
    })

}

function populateLocalStorage() {
    let h = {};

    // let tas = ["ronil", "vanessa", "michelle", "jen", "walker", "mike", "helen", "andy"];
    let tas = Array.from($(".taName")).map(x => $(x).text().toLowerCase());

    tas.forEach((ta) => {
        let temp = localStorage.getItem(ta);
        h[ta] = JSON.parse(temp);
    })

    // console.log(h);

    for (let key in h) {
        let ta = $(`#${key}`);
        if (h[key] !== null) {
            h[key].forEach((song) => {
                addSongSnippet(ta, song.title, song.artist);
            })
        }
    }

}