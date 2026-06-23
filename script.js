//Time Function
function clockTime() {
    var Time = new Date().toLocaleString();
    var timetext= document.querySelector("#clock"); 
    timetext.innerHTML = Time
    }
    setInterval(clockTime, 999);
    clockTime()




//Window function
// Make the DIV element draggable:
dragElement(document.getElementById("window"));  


// Step 1: Define a function called `dragElement` that makes an HTML element draggable.
function dragElement(element) {
  // Step 2: Set up variables to keep track of the element's position.
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  // Step 3: Check if there is a special header element associated with the draggable element.
  if (document.getElementById(element.id + "header")) {
    // Step 4: If present, assign the `dragMouseDown` function to the header's `onmousedown` event.
    // This allows you to drag the window around by its header.
    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
    // Step 5: If not present, assign the function directly to the draggable element's `onmousedown` event.
    // This allows you to drag the window by holding down anywhere on the window.
    element.onmousedown = startDragging;
  }

  // Step 6: Define the `startDragging` function to capture the initial mouse position and set up event listeners.
  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    // Step 7: Get the mouse cursor position at startup.
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 8: Set up event listeners for mouse movement (`elementDrag`) and mouse button release (`closeDragElement`).
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

  // Step 9: Define the `elementDrag` function to calculate the new position of the element based on mouse movement.
  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();
    // Step 10: Calculate the new cursor position.
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 11: Update the element's new position by modifying its `top` and `left` CSS properties.
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  // Step 12: Define the `stopDragging` function to stop tracking mouse movement by removing the event listeners.
  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


//
var welcomeScreen = document.getElementById("window");

function openWindow(element) {
  element.style.display = "block"
}

function closeWindow(element) {
  element.style.display = "none"
}


var welcomeScreenClose = document.querySelector("#welcomeclose")

var welcomeScreenOpen = document.querySelector("#welcomeopen")

welcomeScreenClose.addEventListener("click", function() {
  closeWindow(welcomeScreen);
});

welcomeScreenOpen.addEventListener("click", function() {
  openWindow(welcomeScreen);
});



//Opening window setup
var selectedIcon = undefined;

function selectIcon(element) {
  if (selectedIcon && selectedIcon !== element) {
    deselectIcon(selectedIcon);
  }
  element.classList.add("selected");
  selectedIcon = element;
}

function deselectIcon(element) {
  element.classList.remove("selected");
  selectedIcon = undefined;
}

function handleIconTap(element) {
  if (element.classList.contains("selected")) {
    deselectIcon(element);
    var windowId = element.dataset.app;
    var windowToOpen = document.getElementById(windowId);
    if (windowToOpen) {
      openWindow(windowToOpen);
    }
  } else {
    selectIcon(element);
  }
}


//Barca app window setup
dragElement(document.getElementById("window-barca"));

document.getElementById("barcaclose").addEventListener("click", function() {
  closeWindow(document.getElementById("window-barca"));
});

var appIcon = document.getElementById("app");
appIcon.addEventListener("click", function() {
  handleIconTap(appIcon);
});


fetch("./barca_content.html")
  .then(response => response.text())
  .then(html => {
    document.getElementById("barca_content_place").innerHTML = html;
  });


//Music app window setup
dragElement(document.getElementById("window-music"));

document.getElementById("musicclose").addEventListener("click", function() {
  closeWindow(document.getElementById("window-music"));
});

var musicIcon = document.getElementById("music-app");
musicIcon.addEventListener("click", function() {
  handleIconTap(musicIcon);
});

  const songs = [
  { title: "We Are One (Ole Ola)",   author: "Pitbull, Jennifer Lopez, Claudia Leitte",   cover: "./resonant/covers/we_are_one.png", audio: "./resonant/audios/we_are_one.mp3" },
  { title: "Azizam", author: "Ed Sheeran", cover: "./resonant/covers/Azizam_Cover.jpg", audio: "./resonant/audios/Azizam_Single_Track_SpotiDost.mp3" },
  { title: "Baby Doll", author: "Dominic Fike", cover: "./resonant/covers/Babydoll_Cover.jpg", audio: "./resonant/audios/Babydoll_Single_Track_SpotiDost.mp3" },
  { title: "Bolide Noir", author: "Central Cee, JRK 19", cover: "./resonant/covers/Bolide_Noir_Cover.jpg", audio: "./resonant/audios/Bolide_Noir_Single_Track_SpotiDost.mp3" },
  { title: "On The Floor", author: "Jennifer Lopez, Pitbull", cover: "./resonant/covers/On_The_Floor_Cover.jpg", audio: "./resonant/audios/On_The_Floor_Single_Track_SpotiDost.mp3" },
  { title: "Phantom", author: "EsDeeKid, Rico Ace", cover: "./resonant/covers/Phantom_Cover.jpg", audio: "./resonant/audios/Phantom_Single_Track_SpotiDost.mp3" },
  { title: "Rain Dance", author: "Dave, Tems", cover: "./resonant/covers/Raindance_feat._Tems_Cover.jpg", audio: "./resonant/audios/Raindance_feat._Tems_Single_Track_SpotiDost.mp3" },
  { title: "They Don't Care About Us", author: "Michael Jackson", cover: "./resonant/covers/They_Dont_Care_About_Us_Cover.jpg", audio: "./resonant/audios/They_Dont_Care_About_Us_Single_Track_SpotiDost.mp3" },
  { title: "WAGWAN", author: "Central Cee", cover: "./resonant/covers/WAGWAN_Cover.jpg", audio: "./resonant/audios/WAGWAN_Single_Track_SpotiDost.mp3" },
  { title: "Welcome To The Black Parade", author: "My Chemical Romance", cover: "./resonant/covers/Welcome_to_the_Black_Parade_Cover.jpg", audio: "./resonant/audios/Welcome_to_the_Black_Parade_Single_Track_SpotiDost.mp3" },
  { title: "Godzilla", author: "Eminem, Juice WRLD", cover: "./resonant/covers/Godzilla_feat._Juice_WRLD_Cover.jpg", audio: "./resonant/audios/Godzilla_feat._Juice_WRLD_Single_Track_SpotiDost.mp3" },
  { title: "Malcom In The Middle", author: "Malcom Todd", cover: "./resonant/covers/Malcolm_In_The_Middle_Cover.jpg", audio: "./resonant/audios/Malcolm_In_The_Middle_Single_Track_SpotiDost.mp3" },
  { title: "Let It Happen", author: "Tame Impala", cover: "./resonant/covers/Let_It_Happen_Cover.jpg", audio: "./resonant/audios/Let_It_Happen_Single_Track_SpotiDost.mp3" },
  { title: "FE!N",   author: "Travis Scott, Playboi Carti",   cover: "./resonant/covers/FEIN_Cover.jpg", audio: "./resonant/audios/FEN_feat._Playboi_Carti_Single_Track_SpotiDost.mp3" },
];

fetch("./music.html")
  .then(response => response.text())
  .then(html => {
    document.getElementById("music_content_place").innerHTML = html;

    const list        = document.getElementById("songlist");
    const infoButton  = document.getElementById("info");
    const panel       = document.getElementById("song-panel");
    const audio       = document.getElementById("audio-player");
    const cover       = document.getElementById("now-playing-cover");
    const npTitle     = document.getElementById("now-playing-title");
    const npAuthor    = document.getElementById("now-playing-author");
    const playIcon    = document.getElementById("play-icon");
    const playButton  = document.getElementById("stop_button");
    const skipButton  = document.getElementById("skip_button");
    const returnButton = document.getElementById("return_button");
    const progressBar  = document.getElementById("progress-bar");
    const currentTime  = document.getElementById("current-time");
    const totalTime    = document.getElementById("total-time");
    
    let currentIndex = 0;

    function applyDominantColor(imageSrc) {
      const image = new Image();
      image.crossOrigin = "anonymous";   
      image.onload = function() {        
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0);

        const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

        let r = 0, g = 0, b = 0, count = 0;
        for (let i = 0; i < pixels.length; i += 4) {
          r += pixels[i];
          g += pixels[i + 1];
          b += pixels[i + 2];
          count++;
        }
        r = Math.floor(r / count);
        g = Math.floor(g / count);
        b = Math.floor(b / count);

        const bgColor = `rgba(${r}, ${g}, ${b}, 0.35)`;
          const buttonColor = `rgb(${r}, ${g}, ${b})`;
          document.querySelector(".music-container").style.background = bgColor;
          document.getElementById("stop_button").style.backgroundColor = buttonColor;
      };

      image.src = imageSrc;  
    }

function playSong(index) {
      if (index < 0) index = songs.length - 1;
      if (index >= songs.length) index = 0;
      currentIndex = index;

      const data = songs[index];
      audio.src = data.audio;
      audio.play();

      cover.src = data.cover;
      npTitle.textContent = data.title;
      npAuthor.textContent = data.author;
      playIcon.src = "./icons/pause.png";
      applyDominantColor(data.cover);
    }
    
    let listHTML = "";
    for (let i = 0; i < songs.length; i++) {
      const song = songs[i];
      listHTML += `
        <li class="song" data-index="${i}">
          <img class="song-cover" src="${song.cover}">
          <div class="song-text">
            <span class="title">${song.title}</span>
            <span class="authour">${song.author}</span>
          </div>
        </li>
      `;
    }
    list.innerHTML = listHTML;

   
    infoButton.addEventListener("click", function() {
      panel.style.display = (panel.style.display === "none") ? "block" : "none";
    });

    
    list.addEventListener("click", function(event) {
      const song = event.target.closest(".song");
      if (!song) return;
      const index = Number(song.dataset.index);
      playSong(index);
      panel.style.display = "none";
    });

   
    playButton.addEventListener("click", function() {
      if (!audio.src) {           
        playSong(currentIndex);
        return;
      }
      if (audio.paused) {         
        audio.play();
        playIcon.src = "./icons/pause.png";
      } else {                    
        audio.pause();
        playIcon.src = "./icons/play.png";
      }
    });


    skipButton.addEventListener("click", function()   { playSong(currentIndex + 1); });
    returnButton.addEventListener("click", function() { playSong(currentIndex - 1); });


audio.addEventListener("ended", function() { playSong(currentIndex + 1); });

    const formatTime = function(s) {
      const m = Math.floor(s / 60);
      const sec = Math.floor(s % 60);
      return m + ":" + (sec < 10 ? "0" : "") + sec;
    };

    audio.addEventListener("timeupdate", function () {
      if (!audio.duration) return;
      progressBar.value = (audio.currentTime / audio.duration) * 100;
      currentTime.textContent = formatTime(audio.currentTime);
    });

    audio.addEventListener("loadedmetadata", function () {
      totalTime.textContent = formatTime(audio.duration);
      progressBar.value = 0;
    });

    progressBar.addEventListener("input", function () {
      audio.currentTime = (progressBar.value / 100) * audio.duration;
    });

  })
  .catch(error => {
    console.log("Error", error);
  });



  // Vela browser app
dragElement(document.getElementById("window-browser"));

document.getElementById("browserclose").addEventListener("click", function () {
  closeWindow(document.getElementById("window-browser"));
});

var browserIcon = document.getElementById("browser-app");
browserIcon.addEventListener("click", function () {
  handleIconTap(browserIcon);
});

fetch("./browser.html")
  .then(response => response.text())
  .then(html => {
    document.getElementById("browser_content_place").innerHTML = html;

    const urlInput = document.getElementById("browser-url-input");
    const goBtn = document.getElementById("browser-go-btn");

function openURL(raw) {
  console.log("CLICK reçu, valeur:", raw);
  var url = raw.trim();
  if (!url) return;
  if (url.startsWith("http://") || url.startsWith("https://") || url.match(/^[\w-]+\.[a-z]{2,}/)) {
    if (!url.startsWith("http")) url = "https://" + url;
    var w = window.open(url, "_blank");
    console.log("window.open retourne:", w);
  } else {
    var w = window.open("https://www.google.com/search?q=" + encodeURIComponent(url), "_blank");
    console.log("window.open retourne:", w);
  }
}

goBtn.addEventListener("click", () => openURL(urlInput.value));
urlInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") openURL(urlInput.value);
});

document.querySelectorAll(".bookmark").forEach(function(btn) {
  btn.addEventListener("click", () => openURL(btn.dataset.url));
});
  });



  // Notes app
dragElement(document.getElementById("window-notes"));

document.getElementById("notesclose").addEventListener("click", function () {
  closeWindow(document.getElementById("window-notes"));
});

var notesIcon = document.getElementById("notes-app");
notesIcon.addEventListener("click", function () {
  handleIconTap(notesIcon);
});

fetch("./notes.html")
  .then(response => response.text())
  .then(html => {
    document.getElementById("notes_content_place").innerHTML = html;

    const titleInput = document.getElementById("note-title-input");
    const noteInput  = document.getElementById("note-input");
    const saveBtn    = document.getElementById("note-save-btn");
    const notesList  = document.getElementById("notes-list");

    let notes = [];
    try {
      notes = JSON.parse(localStorage.getItem("velaNotes")) || [];
    } catch (e) {
      notes = [];
    }

    notes = notes.map(n => typeof n === "string"
      ? { title: "No Title", content: n, date: "" }
      : n);

    function saveNotes() {
      localStorage.setItem("velaNotes", JSON.stringify(notes));
    }

    
    function escapeHTML(str) {
      if (str == null) return "";
      return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    }

    function renderNotes() {
      let listHTML = "";
      for (let i = 0; i < notes.length; i++) {
        const note = notes[i];
        listHTML += `
          <li class="note-item">
            <div class="note-header">
              <span class="note-title">${escapeHTML(note.title)}</span>
              <span class="note-date">${escapeHTML(note.date)}</span>
              <button class="note-delete" data-index="${i}">✕</button>
            </div>
            <span class="note-text">${escapeHTML(note.content)}</span>
          </li>
        `;
      }
      notesList.innerHTML = listHTML;
    }

    saveBtn.addEventListener("click", function () {
      const title   = titleInput.value.trim();
      const content = noteInput.value.trim();
      if (!title && !content) return;

      notes.push({
        title: title || "Sans titre",
        content: content,
        date: new Date().toLocaleString()  
      });

      saveNotes();
      renderNotes();
      titleInput.value = "";
      noteInput.value = "";
    });

    notesList.addEventListener("click", function (event) {
      const btn = event.target.closest(".note-delete");
      if (!btn) return;
      const index = Number(btn.dataset.index);
      notes.splice(index, 1);
      saveNotes();
      renderNotes();
    });

    renderNotes();
  });