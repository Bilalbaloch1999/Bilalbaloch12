//song list
let All_song = [
   {
     name: "Saajan Ji Ghr Ayea",
     path: "music/1.mp3",
     img: "images/1.jpg",
     singer: "aAka Yougnik"
   },
   {
     name: "Phir aur kya chahiye",
     path: "music/2.mp3",
     img: "images/2.jpg",
     singer: "Arijit Singh"
   },
   {
     name: "Luka Chuppi",
     path: "music/3.mp3",
     img: "images/3.jpg",
     singer: "A. R. Rahman "
   },
   {
     name: "Hua Hai Aj Pheli Baar",
     path: "music/4.mp3",
     img: "images/4.jpg",
     singer: "Amaal Malik"
   },
   {
     name: "Aj Unse Milna Hai",
     path: "music/5.mp3",
     img: "images/5.jpg",
     singer: "Shaan"
   },
   {
    name: "Tujhko Na Dekhun",
    path: "music/6.mp3",
    img: "images/6.jpg",
    singer:"Sunidhi Chauhan"
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