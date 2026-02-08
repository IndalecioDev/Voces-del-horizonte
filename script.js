// ===============================
// VOCES DEL HORIZONTE
// Ambientes (YouTube) + Radio (Local)
// ===============================

// -------------------------------
// AMBIENTES (YOUTUBE)
// -------------------------------
const AMBIENTES = [
  {
    name: "Terror",
    desc: "Ambientes inquietantes, oscuros y perturbadores",
    scenes: [
      { name: "Susurros en la oscuridad", desc: "", videoId: "vj8hryqOXNE" },
      { name: "Presencia desconocida", desc: "", videoId: "CDWtH8eHeEU" },
      { name: "Ritual prohibido", desc: "", videoId: "dcwB95o3UdA" }
    ]
  },
  {
    name: "Ambiente de rol",
    desc: "Música ambiental para sesiones de rol y narración",
    scenes: [
      { name: "Bosque", desc: "", videoId: "F8bYaMoQ2sM" },
      { name: "Lluvia", desc: "", videoId: "hzJTZgGtAVU" },
      { name: "Tormenta", desc: "", videoId: "w7_7pz5-Jk0" },
      { name: "Ciudad viva", desc: "", videoId: "q9yaKpYS9qc" },
      { name: "Cavernas", desc: "", videoId: "OtfgXgclSxU" },
      { name: "Taberna viva", desc: "", videoId: "WOtNqISrpyY" },
      { name: "Ciudad desertica", desc: "", videoId: "82Qm3a3ngug" },
      { name: "Bosque de noche", desc: "", videoId: "NvBS6NWewxU" },
      { name: "Navegando en el mar", desc: "", videoId: "uPAfgWAb6Qo" },
      { name: "Pantano", desc: "", videoId: "YT2D1-bDMq8" },
      { name: "Tormenta de nieve", desc: "", videoId: "eZgPLvQn1Fo" },
      { name: "Playa", desc: "", videoId: "4djOiCdkLsg" },
      { name: "Campamento noche", desc: "", videoId: "ww8E0MR6AjQ" },
      { name: "Alcantarillado", desc: "", videoId: "Q1Vh3MiwSUc" },
      { name: "Mercado", desc: "", videoId: "-r9cvBWjGKM" },
      { name: "Volcan", desc: "", videoId: "tor8d3IgZ1w" }
    ]
  },

  // =========================
  // NUEVOS AMBIENTES AÑADIDOS
  // =========================

  {
    name: "Batalla",
    desc: "Elige la banda sonora para tu epica batalla",
    scenes: [
      { name: "Emboscada", desc: "", videoId: "8Q7cioftmKs" },
      { name: "Heroes", desc: "", videoId: "H8n7K3jABhI" },
      { name: "Boss de mazmorra", desc: "", videoId: "tBI63CPbW9c" },
      { name: "Sorpresa", desc: "", videoId: "sd1Otp7s1Fk" },
      { name: "Persecucion", desc: "", videoId: "fq8OSrIUST4" },
      { name: "Duelo", desc: "", videoId: "_YpKEpF0oxo" },
      { name: "Aberracion", desc: "", videoId: "WahaiTaVw2k" },
      { name: "Combate facil", desc: "", videoId: "2GX9lVHfnxs" },
      { name: "ataque pirata", desc: "", videoId: "c4-S9N1ecOo" },
      { name: "Combate acuatico", desc: "", videoId: "YWLllXzFFA8" },
      { name: "arena de combate", desc: "", videoId: "3YO67uD8TAo" },
      { name: "Violin de fuego", desc: "", videoId: "71-xEw3Z_kU" },
      { name: "Corazon hueco", desc: "", videoId: "9gUZayPkXbw" }
    ]
  },

  {
    name: "Eventos",
    desc: "Banda sonora para tus eventos",
    scenes: [
      { name: "La aventura empieza", desc: "", videoId: "Jikm8CCRbdM" },
      { name: "suspense", desc: "", videoId: "EApZmmYg_oQ" },
      { name: "Negociacion tensa", desc: "", videoId: "RPkHu8M_U4c" },
      { name: "Ultimo adios", desc: "", videoId: "mFsQpCjRyvY" },
      { name: "Investigacion", desc: "", videoId: "7wBzL62Va1k" },
      { name: "Descanso", desc: "", videoId: "7T3SU4Ht1Yw" },
      { name: "Elegancia", desc: "", videoId: "ulplqXTp4R0" },
      { name: "Sigilo", desc: "", videoId: "WW4bdFhcZgw" },
      { name: "OFFROL", desc: "", videoId: "dxwJuo_KejY" },
      { name: "Momento tragico", desc: "", videoId: "HNd7P7C-lWg" },
      { name: "gremio", desc: "", videoId: "33iGWNJg73U" },
      { name: "ritual", desc: "", videoId: "5Y7oXb_Vmsc" }
    ]
  },

  {
    name: "Taberna",
    desc: "El sitio favorito del famoso Barno ",
    scenes: [
      { name: "Bardo", desc: "", videoId: "u2jLHdpo2AQ" },
      { name: "concierto", desc: "", videoId: "JvAAj5vFMwY" },
      { name: "descanso", desc: "", videoId: "aspw9d8Qw2s" },
      { name: "piratillas", desc: "", videoId: "x3M-5jMFPMY" },
      { name: "Tetrico", desc: "", videoId: "iQiUgrHqB9w" },
      { name: "desierto", desc: "", videoId: "dhA8BtU8MaI" },
      { name: "magico", desc: "", videoId: "hC6xVASVoO0" },
      { name: "danza", desc: "", videoId: "JyyQlYRqvRs" },
      { name: "Solitaria", desc: "", videoId: "orgikrTCKTc" }
    ]
  },

  {
    name: "Escenarios",
    desc: "",
    scenes: [
      { name: "Pantano", desc: "", videoId: "fv_7EurNAss" },
      { name: "montañas", desc: "", videoId: "bLZApMsorjA" },
      { name: "Bosque", desc: "", videoId: "4Y6n-1XQSfE" },
      { name: "desierto", desc: "", videoId: "maYRisfQQvc" },
      { name: "Hielo", desc: "", videoId: "qD2ahwiPRBk" },
      { name: "aguas profundas", desc: "", videoId: "MhiSjz0c7MI" }
    ]
  }
];


const categoryGrid = document.getElementById("categoryGrid");
const scenePanel = document.getElementById("scenePanel");
const sceneTitle = document.getElementById("sceneTitle");
const sceneGrid = document.getElementById("sceneGrid");
const playerPanel = document.getElementById("playerPanel");

const ytNowTitle = document.getElementById("ytNowTitle");
const ytNowMeta = document.getElementById("ytNowMeta");

const ytStart = document.getElementById("ytStart");
const ytPause = document.getElementById("ytPause");
const ytReset = document.getElementById("ytReset");

const ytFrameWrap = document.getElementById("ytFrameWrap");
const ytFrame = document.getElementById("ytFrame");

let selectedScene = null;
let isPlaying = false;

function makeCard(title, desc) {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `<h3>${title}</h3><p>${desc}</p>`;
  return div;
}

function renderCategories() {
  categoryGrid.innerHTML = "";
  AMBIENTES.forEach((cat, idx) => {
    const card = makeCard(cat.name, cat.desc);
    card.addEventListener("click", () => openCategory(idx));
    categoryGrid.appendChild(card);
  });

  // Estado inicial: solo categorías
  scenePanel.hidden = true;
  playerPanel.hidden = true;
  stopYouTube();
}

function openCategory(idx) {
  const cat = AMBIENTES[idx];

  sceneTitle.textContent = `Opciones • ${cat.name}`;
  sceneGrid.innerHTML = "";

  cat.scenes.forEach((s) => {
    const card = makeCard(s.name, s.desc);
    card.addEventListener("click", () => selectScene(s));
    sceneGrid.appendChild(card);
  });

  scenePanel.hidden = false;
  playerPanel.hidden = false;

  scenePanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function selectScene(scene) {
  selectedScene = scene;
  ytNowTitle.textContent = scene.name;
  ytNowMeta.textContent = scene.desc;

  // No reproducir aquí. Solo seleccionar.
  // Si había un vídeo sonando, lo paramos para evitar mezcla rara.
  stopYouTube();
}

function startYouTube() {
  if (!selectedScene) return;

  const id = selectedScene.videoId;

  // Embed normal + enablejsapi=1 para poder pausar con postMessage
  ytFrame.src = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&enablejsapi=1`;
  ytFrameWrap.hidden = false;
  isPlaying = true;
}

function pauseYouTube() {
  // Pausa REAL sin cerrar el iframe (postMessage a YouTube)
  if (!ytFrame || !ytFrame.contentWindow) return;

  ytFrame.contentWindow.postMessage(
    JSON.stringify({ event: "command", func: "pauseVideo", args: [] }),
    "*"
  );

  isPlaying = false;
  ytNowMeta.textContent = "Pausado";
}

function stopYouTube() {
  ytFrameWrap.hidden = true;
  ytFrame.src = "";
  isPlaying = false;
}

ytStart.addEventListener("click", () => {
  if (!selectedScene) {
    ytNowTitle.textContent = "Elige un subtipo";
    ytNowMeta.textContent = "Selecciona una opción primero";
    return;
  }
  startYouTube();
});

ytPause.addEventListener("click", () => {
  pauseYouTube();
});

ytReset.addEventListener("click", () => {
  // 1) Para y limpia el vídeo
  stopYouTube();

  // 2) Vuelve al inicio: SOLO categorías visibles
  selectedScene = null;
  ytNowTitle.textContent = "Nada reproduciéndose";
  ytNowMeta.textContent = "Selecciona un ambiente";

  scenePanel.hidden = true;
  playerPanel.hidden = true;

  document.getElementById("ambientes")?.scrollIntoView({ behavior: "smooth", block: "start" });
});

renderCategories();
// -------------------------------
// RADIO DEL HORIZONTE (LOCAL)
// -------------------------------
const TRACKS = [
  { title: "LT D'Zargo", src: "Musica IA/LT D'Zargo.mp3" },
  { title: "LT El grajo", src: "Musica IA/LT El grajo.mp3" },
  { title: "LT Elminster", src: "Musica IA/LT Elminster.mp3" },
  { title: "LT Gerard.", src: "Musica IA/LT Gerard..mp3" },
  { title: "LT Amonseith", src: "Musica IA/LT Amonseith.mp3" },
  { title: "LT Angie", src: "Musica IA/LT Angie.mp3" },
  { title: "LT Barno 1", src: "Musica IA/LT Barno 1.mp3" },
  { title: "LT Barno 2", src: "Musica IA/LT Barno 2.mp3" },
  { title: "LT BESTA", src: "Musica IA/LT BESTA.mp3" },
  { title: "LT Caramelo", src: "Musica IA/LT Caramelo.mp3" },
  { title: "LT CAROLINE", src: "Musica IA/LT CAROLINE.mp3" },
  { title: "LT Croldar", src: "Musica IA/LT Croldar.mp3" },
  { title: "LT Curtis.", src: "Musica IA/LT Curtis..mp3" },
  { title: "LT Draktarirus", src: "Musica IA/LT Draktarirus.mp3" },
  { title: "LT DRAVEN", src: "Musica IA/LT DRAVEN.mp3" },
  { title: "LT P1_", src: "Musica IA/LT P1_.mp3" },
  { title: "LT PANCRACIO", src: "Musica IA/LT PANCRACIO.mp3" },
  { title: "LT Peach", src: "Musica IA/LT Peach.mp3" },
  { title: "LT POLLO.", src: "Musica IA/LT POLLO..mp3" },
  { title: "LT Rafgal", src: "Musica IA/LT Rafgal.mp3" },
  { title: "LT Rouis", src: "Musica IA/LT Rouis.mp3" },
  { title: "LT Ryan Obrian", src: "Musica IA/LT Ryan Obrian.mp3" },
  { title: "LT Ryan", src: "Musica IA/LT Ryan.mp3" },
  { title: "LT Gintoki", src: "Musica IA/LT Gintoki.mp3" },
  { title: "LT ILLINOA.", src: "Musica IA/LT ILLINOA..mp3" },
  { title: "LT Isaach", src: "Musica IA/LT Isaach.mp3" },
  { title: "LT Julk Ogan", src: "Musica IA/LT Julk Ogan.mp3" },
  { title: "LT Kuno", src: "Musica IA/LT Kuno.mp3" },
  { title: "LT KUROKI", src: "Musica IA/LT KUROKI.mp3" },
  { title: "LT LANCE", src: "Musica IA/LT LANCE.mp3" },
  { title: "LT Lero", src: "Musica IA/LT Lero.mp3" },
  { title: "LT MARA", src: "Musica IA/LT MARA.mp3" },
  { title: "LT Mel", src: "Musica IA/LT Mel.mp3" },
  { title: "LT Ominorej", src: "Musica IA/LT Ominorej.mp3" },
  { title: "LT Varis", src: "Musica IA/LT Varis.mp3" },
  { title: "LT varyan", src: "Musica IA/LT varyan.mp3" },
  { title: "LT VIGGO", src: "Musica IA/LT VIGGO.mp3" },
  { title: "LT Vigo", src: "Musica IA/LT Vigo.mp3" },
  { title: "LT Weedy", src: "Musica IA/LT Weedy.mp3" },
  { title: "LT XAVGRETOR", src: "Musica IA/LT XAVGRETOR.mp3" },
  { title: "LT Yuuji", src: "Musica IA/LT Yuuji.mp3" },
  { title: "Terratea, Tierra de Leyendas", src: "Musica IA/Terratea, Tierra de Leyendas.mp3" },
  { title: "LT Señor de la Noche", src: "Musica IA/LT Señor de la Noche.mp3" },
  { title: "LT SHINJIRO", src: "Musica IA/LT SHINJIRO.mp3" },
  { title: "LT Singlas", src: "Musica IA/LT Singlas.mp3" },
  { title: "LT SKULL", src: "Musica IA/LT SKULL.mp3" },
  { title: "LT Stardust", src: "Musica IA/LT Stardust.mp3" },
  { title: "LT Tibu", src: "Musica IA/LT Tibu.mp3" },
  { title: "LT una canción de Barno", src: "Musica IA/LT una canción de Barno.mp3" },
  { title: "LT Urist", src: "Musica IA/LT Urist.mp3" },
  { title: "LT Vaal", src: "Musica IA/LT Vaal.mp3" },
  { title: "LT Vaal'cifer", src: "Musica IA/LT Vaal'cifer.mp3" }
];

const radioAudio = document.getElementById("radioAudio");
const radioNowBox = document.getElementById("radioNowBox");
const radioNowTitle = document.getElementById("radioNowTitle");
const radioNowMeta = document.getElementById("radioNowMeta");

const radioPrev = document.getElementById("radioPrev");
const radioPlay = document.getElementById("radioPlay");
const radioPause = document.getElementById("radioPause");
const radioNext = document.getElementById("radioNext");

const radioVolDown = document.getElementById("radioVolDown");
const radioVolUp = document.getElementById("radioVolUp");
const radioVolValue = document.getElementById("radioVolValue");

const radioShuffle = document.getElementById("radioShuffle");

const radioBar = document.getElementById("radioBar");
const radioBarFill = document.getElementById("radioBarFill");
const radioBarKnob = document.getElementById("radioBarKnob");
const radioTimeNow = document.getElementById("radioTimeNow");
const radioTimeTotal = document.getElementById("radioTimeTotal");

let trackIndex = -1;
let historyStack = [];
let shuffleEnabled = true;
let switchingTimer = null;

function fmtTime(seconds){
  if (!Number.isFinite(seconds) || seconds < 0) return "--:--";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
}

function animateSwitch(){
  if (!radioNowBox) return;
  radioNowBox.classList.add("is-switching");
  clearTimeout(switchingTimer);
  switchingTimer = setTimeout(() => {
    radioNowBox.classList.remove("is-switching");
  }, 230);
}

function pickRandomNext(currentIdx){
  if (TRACKS.length <= 1) return 0;
  let next = currentIdx;
  while (next === currentIdx) {
    next = Math.floor(Math.random() * TRACKS.length);
  }
  return next;
}

function setNowPlayingUI(title, meta){
  animateSwitch();
  setTimeout(() => {
    radioNowTitle.textContent = title;
    radioNowMeta.textContent = meta;
  }, 120);
}

function setVol(v){
  const clamped = Math.max(0, Math.min(1, v));
  radioAudio.volume = clamped;
  if (radioVolValue) radioVolValue.textContent = Math.round(clamped * 100) + "%";
}

function loadTrack(i, autoplay=false, pushHistory=true){
  if (!TRACKS.length) return;

  const nextIndex = (i + TRACKS.length) % TRACKS.length;
  if (pushHistory && trackIndex !== -1 && nextIndex !== trackIndex) {
    historyStack.push(trackIndex);
    if (historyStack.length > 50) historyStack.shift();
  }

  trackIndex = nextIndex;
  const t = TRACKS[trackIndex];

  radioAudio.src = t.src;
  radioAudio.currentTime = 0;

  radioBarFill.style.width = "0%";
  radioBarKnob.style.left = "0%";
  radioTimeNow.textContent = "00:00";
  radioTimeTotal.textContent = "--:--";

  setNowPlayingUI(t.title, "Cargando duración…");

  if (autoplay) radioAudio.play().catch(()=>{});
}

function updateProgress(){
  const dur = radioAudio.duration;
  const cur = radioAudio.currentTime;

  radioTimeNow.textContent = fmtTime(cur);
  radioTimeTotal.textContent = fmtTime(dur);

  if (Number.isFinite(dur) && dur > 0) {
    const pct = Math.max(0, Math.min(100, (cur / dur) * 100));
    radioBarFill.style.width = pct + "%";
    radioBarKnob.style.left = pct + "%";
    radioBar.setAttribute("aria-valuenow", String(Math.round(pct)));
  }
}

function ensureLoadedFirst(){
  if (trackIndex === -1 && TRACKS.length) loadTrack(0, false);
}

function seekToClientX(clientX){
  const rect = radioBar.getBoundingClientRect();
  const x = Math.max(0, Math.min(rect.width, clientX - rect.left));
  const pct = x / rect.width;
  const dur = radioAudio.duration;
  if (Number.isFinite(dur) && dur > 0) {
    radioAudio.currentTime = dur * pct;
    updateProgress();
  }
}

// Eventos audio
radioAudio.addEventListener("loadedmetadata", () => {
  const t = TRACKS[trackIndex];
  if (t) setNowPlayingUI(t.title, `Duración: ${fmtTime(radioAudio.duration)}`);
  updateProgress();
});
radioAudio.addEventListener("timeupdate", updateProgress);
radioAudio.addEventListener("ended", () => {
  if (!TRACKS.length) return;
  const next = shuffleEnabled ? pickRandomNext(trackIndex) : (trackIndex + 1);
  loadTrack(next, true);
});

// Controles
radioPlay.addEventListener("click", () => {
  if (!TRACKS.length) return;
  if (trackIndex === -1) loadTrack(0, true);
  else radioAudio.play().catch(()=>{});
});
radioPause.addEventListener("click", () => radioAudio.pause());

radioNext.addEventListener("click", () => {
  if (!TRACKS.length) return;
  const next = shuffleEnabled
    ? pickRandomNext(trackIndex === -1 ? 0 : trackIndex)
    : ((trackIndex === -1) ? 0 : trackIndex + 1);
  loadTrack(next, true);
});

radioPrev.addEventListener("click", () => {
  if (!TRACKS.length) return;

  if (historyStack.length) {
    const prevIdx = historyStack.pop();
    loadTrack(prevIdx, true, false);
    return;
  }

  const prev = (trackIndex === -1) ? 0 : (trackIndex - 1);
  loadTrack(prev, true);
});

// Barra: click + teclado
radioBar.addEventListener("click", (e) => {
  ensureLoadedFirst();
  seekToClientX(e.clientX);
});
radioBar.addEventListener("keydown", (e) => {
  ensureLoadedFirst();
  if (e.key === "ArrowLeft") {
    radioAudio.currentTime = Math.max(0, radioAudio.currentTime - 5);
    updateProgress();
  }
  if (e.key === "ArrowRight") {
    radioAudio.currentTime = Math.min(radioAudio.duration || 0, radioAudio.currentTime + 5);
    updateProgress();
  }
});

// Shuffle toggle
function syncShuffleButton(){
  radioShuffle.classList.toggle("active", shuffleEnabled);
  radioShuffle.textContent = shuffleEnabled ? "🔀 Aleatorio: ON" : "➡️ Aleatorio: OFF";
  radioShuffle.setAttribute("aria-pressed", String(shuffleEnabled));
}
radioShuffle.addEventListener("click", () => {
  shuffleEnabled = !shuffleEnabled;
  syncShuffleButton();
});

// Volumen buttons
setVol(0.8);
const STEP = 0.1;
radioVolDown.addEventListener("click", () => setVol(radioAudio.volume - STEP));
radioVolUp.addEventListener("click", () => setVol(radioAudio.volume + STEP));

// Estado inicial
if (TRACKS.length) {
  radioNowTitle.textContent = "La radio está lista";
  radioNowMeta.textContent = "Pulsa Play";
} else {
  radioNowTitle.textContent = "Sin canciones";
  radioNowMeta.textContent = "Añade temas en TRACKS (JS)";
}
syncShuffleButton();
