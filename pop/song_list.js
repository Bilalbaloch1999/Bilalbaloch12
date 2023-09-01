//song list
let All_song = [
   {
     name: "Hawa Hawa",
     path: "music/1.mp3",
     img: "images/1.jpg",
     singer: "Hassan Jahangir"
   },
   {
     name: "Har Zulm Tera Yaad Hai",
     path: "music/2.mp3",
     img: "images/2.jpg",
     singer: "Sajjad Ali"
   },
   {
     name: "Dil Diya Gallan",
     path: "music/3.mp3",
     img: "images/3.jpg",
     singer: "Atif Aslam "
   },
   {
     name: "Ap Jaisa Koi",
     path: "music/4.mp3",
     img: "images/4.jpg",
     singer: "Nazia Hassan"
   },
   {
     name: "Sun Re Sajaniya",
     path: "music/5.mp3",
     img: "images/5.jpg",
     singer: "Ali Zafar"
   },
   {
    name: "Do Pal Ka Jevan",
    path: "music/6.mp3",
    img: "images/6.jpg",
    singer:"Junaid Jamshed"
   }
];
/*you can add more song & images from you computer*/


/*tracks*/
let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {

  let Html = ` <div class="song">
      <div class="img">
      <img src="${All_song[i].img}"/>
      </div>
      <div class="more">
      <audio src="${All_song[i].path}" id="music"></audio>
      <div class="song_info">
         <p id="title">${All_song[i].name}</p>
         <p>${All_song[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
};


/*please follow all the rules so that you do not face any problem*/