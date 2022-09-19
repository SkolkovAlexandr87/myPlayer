
// put your code here...

const audio = document.querySelector(".audio");
const imageArtist = document.querySelector(".image-artist");
const listSongs = document.querySelector(".list-songs");
const myArtistsUrl = "json/artists.json";
const boxingArtists = document.querySelector(".boxing-artists");
let listDivArtists;

const fetchJSON = async (url) => {
  try{
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch(err) {
    return null;
  }
}

const promiseArtists = fetchJSON(myArtistsUrl);

let listObjArtist = [];

promiseArtists.then((res) => {
   res.forEach(el => {listObjArtist.push(el)});
})
.then(() => {
  addListArtists();
})
.then(() => {
  boxingArtists.querySelectorAll("div").forEach((el) => {
    el.addEventListener("click", addListSongs);
    el.addEventListener("click", addPictureInBlockImageArtist);
    el.addEventListener("click", removeSpanBlockInBlockImageArtist);
    el.addEventListener("click", addTitleSongInBlockDescriptionSong);
  });
});


function addListArtists() {
    listObjArtist.forEach((obj) => {
      createBlockInListArtists(obj);
    });
};




function createBlockInListArtists(obj) {
  const div = document.createElement("div");
  div.classList.add('div-artist');
  div.style.backgroundImage = `url(${obj.picture})`;
  div.dataset.nameArtist = obj.title;
  boxingArtists.append(div);
  
}



function addListSongs() {
  const thisNode = this;
  
  removeListSongs();

  listObjArtist.forEach((el) => { 
    if(thisNode.dataset.nameArtist === el.title) {
      el.songs.forEach((song) => {
          const nameSong = document.createElement("p");
          nameSong.classList.add("name-song");
          nameSong.textContent = song.title;
          nameSong.dataset.linkSong = song.link;
          listSongs.append(nameSong);
        });
    }
  });
};
  
  //console.log(obj.title)
  /*
  
  
  
  artists.forEach((el) => {
    if(thisNode.dataset.dataNameArtist == el.nameObject) {
      for(let song of el.songs) {
        const nameSong = document.createElement("p");
        nameSong.classList.add("name-song");
        nameSong.textContent = song.title;
        nameSong.dataset.dataLinkSong = song.link;
        listSongs.append(nameSong);
        
        nameSong.addEventListener("click", sendLinkToPlayer);
      }

    };
  }) 
  */



function removeListSongs() {
  const listSongsNamed = listSongs.querySelectorAll("p");
 
  if(listSongsNamed.length) {
    for(let node of listSongsNamed) node.remove();
  };
};

function addLinkToPlayer() {
  audio.src = this.dataset.dataLinkSong;
};

function addPictureInBlockImageArtist() {

  let thisNode = this;
  imageArtist.style.backgroundImage = `url(${thisNode.style.backgroundImage.slice(4, -1).replace(/"/g, "")})`;
}


function removeSpanBlockInBlockImageArtist() {
  if(imageArtist.querySelector("span")) {
    imageArtist.querySelector("span").remove();
  }
}

function addTitleSongInBlockDescriptionSong() {
  const thisNode = this;
  const descriptionSong = document.querySelector(".description-song");
  const name = document.createElement("p");
  name.className = "name-artist";
  name.textContent = `${this.dataset.nameArtist}`;
  descriptionSong.append(name);
}


function removePrevName() {
   
}

