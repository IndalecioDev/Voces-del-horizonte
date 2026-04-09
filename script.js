// ============================================
// VOCES DEL HORIZONTE — v3
// ============================================

// ── DATOS ──
const AMBIENTES = [
  {
    name: "Terror",
    desc: "Ambientes oscuros e inquietantes",
    scenes: [
      { name: "Susurros en la oscuridad", videoId: "vj8hryqOXNE" },
      { name: "Presencia desconocida",    videoId: "CDWtH8eHeEU" },
      { name: "Ritual prohibido",         videoId: "dcwB95o3UdA" }
    ]
  },
  {
    name: "Ambiente de rol",
    desc: "Música para sesiones y narración",
    scenes: [
      { name: "Bosque",             videoId: "F8bYaMoQ2sM" },
      { name: "Lluvia",             videoId: "hzJTZgGtAVU" },
      { name: "Tormenta",           videoId: "w7_7pz5-Jk0" },
      { name: "Ciudad viva",        videoId: "q9yaKpYS9qc" },
      { name: "Cavernas",           videoId: "OtfgXgclSxU" },
      { name: "Taberna viva",       videoId: "WOtNqISrpyY" },
      { name: "Ciudad desértica",   videoId: "82Qm3a3ngug" },
      { name: "Bosque de noche",    videoId: "NvBS6NWewxU" },
      { name: "Navegando en el mar",videoId: "uPAfgWAb6Qo" },
      { name: "Pantano",            videoId: "YT2D1-bDMq8" },
      { name: "Tormenta de nieve",  videoId: "eZgPLvQn1Fo" },
      { name: "Playa",              videoId: "4djOiCdkLsg" },
      { name: "Campamento noche",   videoId: "ww8E0MR6AjQ" },
      { name: "Alcantarillado",     videoId: "Q1Vh3MiwSUc" },
      { name: "Mercado",            videoId: "-r9cvBWjGKM" },
      { name: "Volcán",             videoId: "tor8d3IgZ1w" }
    ]
  },
  {
    name: "Batalla",
    desc: "Banda sonora épica para el combate",
    scenes: [
      { name: "Emboscada",       videoId: "8Q7cioftmKs" },
      { name: "Héroes",          videoId: "H8n7K3jABhI" },
      { name: "Boss de mazmorra",videoId: "tBI63CPbW9c" },
      { name: "Sorpresa",        videoId: "sd1Otp7s1Fk" },
      { name: "Persecución",     videoId: "fq8OSrIUST4" },
      { name: "Duelo",           videoId: "_YpKEpF0oxo" },
      { name: "Aberración",      videoId: "WahaiTaVw2k" },
      { name: "Combate fácil",   videoId: "2GX9lVHfnxs" },
      { name: "Ataque pirata",   videoId: "c4-S9N1ecOo" },
      { name: "Combate acuático",videoId: "YWLllXzFFA8" },
      { name: "Arena de combate",videoId: "3YO67uD8TAo" },
      { name: "Violín de fuego", videoId: "71-xEw3Z_kU" },
      { name: "Corazón hueco",   videoId: "9gUZayPkXbw" }
    ]
  },
  {
    name: "Eventos",
    desc: "Momentos especiales de la sesión",
    scenes: [
      { name: "La aventura empieza", videoId: "Jikm8CCRbdM" },
      { name: "Suspense",            videoId: "EApZmmYg_oQ" },
      { name: "Negociación tensa",   videoId: "RPkHu8M_U4c" },
      { name: "Último adiós",        videoId: "mFsQpCjRyvY" },
      { name: "Investigación",       videoId: "7wBzL62Va1k" },
      { name: "Descanso",            videoId: "7T3SU4Ht1Yw" },
      { name: "Elegancia",           videoId: "ulplqXTp4R0" },
      { name: "Sigilo",              videoId: "WW4bdFhcZgw" },
      { name: "OFFROL",              videoId: "dxwJuo_KejY" },
      { name: "Momento trágico",     videoId: "HNd7P7C-lWg" },
      { name: "Gremio",              videoId: "33iGWNJg73U" },
      { name: "Ritual",              videoId: "5Y7oXb_Vmsc" }
    ]
  },
  {
    name: "Taberna",
    desc: "El rincón favorito de Barno",
    scenes: [
      { name: "Bardo",     videoId: "u2jLHdpo2AQ" },
      { name: "Concierto", videoId: "JvAAj5vFMwY" },
      { name: "Descanso",  videoId: "aspw9d8Qw2s" },
      { name: "Piratillas",videoId: "x3M-5jMFPMY" },
      { name: "Tétrico",   videoId: "iQiUgrHqB9w" },
      { name: "Desierto",  videoId: "dhA8BtU8MaI" },
      { name: "Mágico",    videoId: "hC6xVASVoO0" },
      { name: "Danza",     videoId: "JyyQlYRqvRs" },
      { name: "Solitaria", videoId: "orgikrTCKTc" }
    ]
  },
  {
    name: "Escenarios",
    desc: "Paisajes sonoros para la exploración",
    scenes: [
      { name: "Pantano",         videoId: "fv_7EurNAss" },
      { name: "Montañas",        videoId: "bLZApMsorjA" },
      { name: "Bosque",          videoId: "4Y6n-1XQSfE" },
      { name: "Desierto",        videoId: "maYRisfQQvc" },
      { name: "Hielo",           videoId: "qD2ahwiPRBk" },
      { name: "Aguas profundas", videoId: "MhiSjz0c7MI" }
    ]
  }
];

const TRACKS = [
  { title: "LT Ainsley",                  src: "Musica IA/LT Ainsley.mp3" },
  { title: "LT Aki",                      src: "Musica IA/LT Aki.mp3" },
  { title: "LT ALASTOR",                  src: "Musica IA/LT ALASTOR.mp3" },
  { title: "LT Aleria",                   src: "Musica IA/LT Aleria.mp3" },
  { title: "LT AMARA",                    src: "Musica IA/LT AMARA.mp3" },
  { title: "LT Ambrosius",                src: "Musica IA/LT Ambrosius.mp3" },
  { title: "LT ARYA",                     src: "Musica IA/LT ARYA.mp3" },
  { title: "LT ASTRID",                   src: "Musica IA/LT ASTRID.mp3" },
  { title: "LT Aysel",                    src: "Musica IA/LT Aysel.mp3" },
  { title: "LT Azoth",                    src: "Musica IA/LT Azoth.mp3" },
  { title: "LT BARNO",                    src: "Musica IA/LT BARNO.mp3" },
  { title: "LT Brego",                    src: "Musica IA/LT Brego.mp3" },
  { title: "LT Bruma",                    src: "Musica IA/LT Bruma.mp3" },
  { title: "LT Castor",                   src: "Musica IA/LT Castor.mp3" },
  { title: "LT Cinderstone",              src: "Musica IA/LT Cinderstone.mp3" },
  { title: "LT Dalgren",                  src: "Musica IA/LT Dalgren.mp3" },
  { title: "LT DAXON",                    src: "Musica IA/LT DAXON.mp3" },
  { title: "LT FROSTMANE",                src: "Musica IA/LT FROSTMANE.mp3" },
  { title: "LT Gloamtide",                src: "Musica IA/LT Gloamtide.mp3" },
  { title: "LT GOLEM",                    src: "Musica IA/LT GOLEM.mp3" },
  { title: "LT Gorvar",                   src: "Musica IA/LT Gorvar.mp3" },
  { title: "LT GRIMD",                    src: "Musica IA/LT GRIMD.mp3" },
  { title: "LT Heronveil",                src: "Musica IA/LT Heronveil.mp3" },
  { title: "LT Isaach",                   src: "Musica IA/LT Isaach.mp3" },
  { title: "LT Julk Ogan",                src: "Musica IA/LT Julk Ogan.mp3" },
  { title: "LT Kuno",                     src: "Musica IA/LT Kuno.mp3" },
  { title: "LT KUROKI",                   src: "Musica IA/LT KUROKI.mp3" },
  { title: "LT LANCE",                    src: "Musica IA/LT LANCE.mp3" },
  { title: "LT Lero",                     src: "Musica IA/LT Lero.mp3" },
  { title: "LT MARA",                     src: "Musica IA/LT MARA.mp3" },
  { title: "LT Mel",                      src: "Musica IA/LT Mel.mp3" },
  { title: "LT Ominorej",                 src: "Musica IA/LT Ominorej.mp3" },
  { title: "LT Varis",                    src: "Musica IA/LT Varis.mp3" },
  { title: "LT varyan",                   src: "Musica IA/LT varyan.mp3" },
  { title: "LT VIGGO",                    src: "Musica IA/LT VIGGO.mp3" },
  { title: "LT Vigo",                     src: "Musica IA/LT Vigo.mp3" },
  { title: "LT Weedy",                    src: "Musica IA/LT Weedy.mp3" },
  { title: "LT XAVGRETOR",                src: "Musica IA/LT XAVGRETOR.mp3" },
  { title: "LT Yuuji",                    src: "Musica IA/LT Yuuji.mp3" },
  { title: "Terratea, Tierra de Leyendas",src: "Musica IA/Terratea, Tierra de Leyendas.mp3" },
  { title: "LT Señor de la Noche",        src: "Musica IA/LT Señor de la Noche.mp3" },
  { title: "LT SHINJIRO",                 src: "Musica IA/LT SHINJIRO.mp3" },
  { title: "LT Singlas",                  src: "Musica IA/LT Singlas.mp3" },
  { title: "LT SKULL",                    src: "Musica IA/LT SKULL.mp3" },
  { title: "LT Stardust",                 src: "Musica IA/LT Stardust.mp3" },
  { title: "LT Tibu",                     src: "Musica IA/LT Tibu.mp3" },
  { title: "LT una canción de Barno",     src: "Musica IA/LT una canción de Barno.mp3" },
  { title: "LT Urist",                    src: "Musica IA/LT Urist.mp3" },
  { title: "LT Vaal",                     src: "Musica IA/LT Vaal.mp3" },
  { title: "LT Vaal'cifer",               src: "Musica IA/LT Vaal'cifer.mp3" }
];

// ── GRAIN ──
(function() {
  const c = document.getElementById('grain');
  if (!c) return;
  const ctx = c.getContext('2d');
  let t = 0;
  function draw() {
    c.width  = window.innerWidth;
    c.height = window.innerHeight;
    const img = ctx.createImageData(c.width, c.height);
    const d = img.data;
    for (let i = 0; i < d.length; i += 4) {
      const v = (Math.random() * 255) | 0;
      d[i] = d[i+1] = d[i+2] = v;
      d[i+3] = 18;
    }
    ctx.putImageData(img, 0, 0);
    setTimeout(() => requestAnimationFrame(draw), 80);
  }
  draw();
})();

// ── SCROLL REVEAL ──
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// ── AMBIENTES ──
const catGrid    = document.getElementById('categoryGrid');
const scenePanel = document.getElementById('scenePanel');
const sceneTitle = document.getElementById('sceneTitle');
const sceneGrid  = document.getElementById('sceneGrid');
const sceneSearch= document.getElementById('sceneSearch');
const sceneEmpty = document.getElementById('sceneEmpty');
const playerPanel= document.getElementById('playerPanel');
const ytDot      = document.getElementById('ytDot');
const ytNowTitle = document.getElementById('ytNowTitle');
const ytNowMeta  = document.getElementById('ytNowMeta');
const ytStart    = document.getElementById('ytStart');
const ytPause    = document.getElementById('ytPause');
const ytReset    = document.getElementById('ytReset');
const ytFrameWrap= document.getElementById('ytFrameWrap');
const ytFrame    = document.getElementById('ytFrame');

let selectedScene   = null;
let currentCat      = null;

// Build categories
AMBIENTES.forEach((cat, idx) => {
  const el = document.createElement('div');
  el.className = 'cat-card';
  el.style.animationDelay = `${idx * .06}s`;
  el.innerHTML = `<span class="cat-card-name">${cat.name}</span><span class="cat-card-desc">${cat.desc}</span>`;
  el.addEventListener('click', () => openCat(idx, el));
  catGrid.appendChild(el);
});

function openCat(idx, el) {
  document.querySelectorAll('.cat-card').forEach(c => c.classList.remove('active'));
  el.classList.add('active');

  currentCat = AMBIENTES[idx];
  sceneTitle.textContent = currentCat.name;
  sceneSearch.value = '';
  renderScenes(currentCat.scenes);

  scenePanel.hidden  = false;
  playerPanel.hidden = false;
  setTimeout(() => scenePanel.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
}

function renderScenes(list) {
  sceneGrid.innerHTML = '';
  sceneEmpty.hidden = !!list.length;
  list.forEach((s, i) => {
    const el = document.createElement('div');
    el.className = 'scene-card';
    el.innerHTML = `<span class="scene-card-name">${s.name}</span>`;
    el.addEventListener('click', () => {
      document.querySelectorAll('.scene-card').forEach(c => c.classList.remove('active'));
      el.classList.add('active');
      selectScene(s);
    });
    sceneGrid.appendChild(el);
  });
}

function selectScene(s) {
  selectedScene = s;
  ytNowTitle.textContent = s.name;
  ytNowMeta.textContent  = 'Listo para reproducir';
  ytDot.classList.remove('active');
  stopYT();
}

sceneSearch.addEventListener('input', () => {
  if (!currentCat) return;
  const q = sceneSearch.value.trim().toLowerCase();
  renderScenes(currentCat.scenes.filter(s => s.name.toLowerCase().includes(q)));
});

function startYT() {
  if (!selectedScene) {
    ytNowTitle.textContent = 'Selecciona una escena primero';
    return;
  }
  ytFrame.src = `https://www.youtube.com/embed/${selectedScene.videoId}?autoplay=1&rel=0&modestbranding=1&enablejsapi=1`;
  ytFrameWrap.hidden = false;
  ytDot.classList.add('active');
  ytNowMeta.textContent = 'Reproduciendo';
}

function pauseYT() {
  ytFrame.contentWindow?.postMessage(JSON.stringify({ event:'command', func:'pauseVideo', args:[] }), '*');
  ytDot.classList.remove('active');
  ytNowMeta.textContent = 'Pausado';
}

function stopYT() {
  ytFrameWrap.hidden = true;
  ytFrame.src = '';
}

ytStart.addEventListener('click', startYT);
ytPause.addEventListener('click', pauseYT);
ytReset.addEventListener('click', () => {
  stopYT();
  selectedScene = null;
  ytNowTitle.textContent = '—';
  ytNowMeta.textContent  = 'Selecciona una escena';
  ytDot.classList.remove('active');
  scenePanel.hidden  = true;
  playerPanel.hidden = true;
  document.querySelectorAll('.cat-card').forEach(c => c.classList.remove('active'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ── RADIO ──
const radioAudio   = document.getElementById('radioAudio');
const radioNowBox  = document.getElementById('radioNowBox');
const radioNowTitle= document.getElementById('radioNowTitle');
const radioNowMeta = document.getElementById('radioNowMeta');
const radioPrev    = document.getElementById('radioPrev');
const radioPlay    = document.getElementById('radioPlay');
const radioPause   = document.getElementById('radioPause');
const radioNext    = document.getElementById('radioNext');
const radioVolSlider=document.getElementById('radioVolSlider');
const radioVolFill = document.getElementById('radioVolFill');
const radioVolValue= document.getElementById('radioVolValue');
const radioShuffle = document.getElementById('radioShuffle');
const radioBar     = document.getElementById('radioBar');
const radioBarFill = document.getElementById('radioBarFill');
const radioBarKnob = document.getElementById('radioBarKnob');
const radioTimeNow = document.getElementById('radioTimeNow');
const radioTimeTot = document.getElementById('radioTimeTotal');
const tracklistToggle = document.getElementById('tracklistToggle');
const tracklistEl  = document.getElementById('tracklist');
const tracklistArrow = document.getElementById('tracklistArrow');

let trackIdx      = -1;
let history       = [];
let shuffleOn     = true;
let tlOpen        = false;
let switchTimer   = null;

// ── VISUALIZADOR ──
const vizC   = document.getElementById('vizCanvas');
const vizCtx = vizC?.getContext('2d');
let audioCtx, analyser, source, vizData, vizConnected = false;
let idleAnim;

function connectViz() {
  if (!vizC || vizConnected || !window.AudioContext) return;
  try {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioCtx.createAnalyser();
    analyser.fftSize = 32;
    analyser.smoothingTimeConstant = .8;
    source = audioCtx.createMediaElementSource(radioAudio);
    source.connect(analyser);
    analyser.connect(audioCtx.destination);
    vizData = new Uint8Array(analyser.frequencyBinCount);
    vizConnected = true;
    cancelAnimationFrame(idleAnim);
    drawViz();
  } catch(e) {}
}

function drawViz() {
  if (!vizCtx || !analyser) return;
  requestAnimationFrame(drawViz);
  analyser.getByteFrequencyData(vizData);
  vizCtx.clearRect(0, 0, 56, 56);
  const count = vizData.length, bw = 4, gap = 2;
  const total = count * (bw + gap) - gap;
  const ox = (56 - total) / 2;
  for (let i = 0; i < count; i++) {
    const v = vizData[i] / 255;
    const h = Math.max(2, v * 48);
    const x = ox + i * (bw + gap);
    vizCtx.fillStyle = `rgba(201,168,76,${.3 + v * .7})`;
    vizCtx.fillRect(x, 28 - h/2, bw, h);
  }
}

function drawIdle() {
  if (!vizCtx) return;
  const t = Date.now() * .002;
  vizCtx.clearRect(0, 0, 56, 56);
  const count = 8, bw = 4, gap = 2;
  const total = count * (bw + gap) - gap;
  const ox = (56 - total) / 2;
  for (let i = 0; i < count; i++) {
    const h = 3 + Math.sin(t + i * .5) * 2;
    const x = ox + i * (bw + gap);
    vizCtx.fillStyle = 'rgba(201,168,76,.15)';
    vizCtx.fillRect(x, 28 - h/2, bw, h);
  }
  idleAnim = requestAnimationFrame(drawIdle);
}
drawIdle();

// ── UTILS ──
function fmt(s) {
  if (!isFinite(s) || s < 0) return '--:--';
  const m = Math.floor(s/60), sec = Math.floor(s%60);
  return `${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
}

function animSwitch() {
  radioNowBox.classList.add('switching');
  clearTimeout(switchTimer);
  switchTimer = setTimeout(() => radioNowBox.classList.remove('switching'), 230);
}

function setNow(title, meta) {
  animSwitch();
  setTimeout(() => {
    radioNowTitle.textContent = title;
    radioNowMeta.textContent  = meta;
  }, 130);
}

function setVol(v) {
  const c = Math.max(0, Math.min(1, v));
  radioAudio.volume = c;
  const p = Math.round(c * 100);
  radioVolValue.textContent = p;
  radioVolSlider.value = p;
  radioVolFill.style.width = p + '%';
}

function randNext(cur) {
  if (TRACKS.length <= 1) return 0;
  let n = cur;
  while (n === cur) n = Math.floor(Math.random() * TRACKS.length);
  return n;
}

function loadTrack(i, play = false, push = true) {
  if (!TRACKS.length) return;
  const ni = ((i % TRACKS.length) + TRACKS.length) % TRACKS.length;
  if (push && trackIdx !== -1 && ni !== trackIdx) {
    history.push(trackIdx);
    if (history.length > 50) history.shift();
  }
  trackIdx = ni;
  const t  = TRACKS[ni];
  radioAudio.src = t.src;
  radioAudio.currentTime = 0;
  radioBarFill.style.width = '0%';
  radioBarKnob.style.left  = '0%';
  radioTimeNow.textContent = '00:00';
  radioTimeTot.textContent = '--:--';
  setNow(t.title, 'Cargando…');
  highlightTrack();
  if (play) {
    connectViz();
    if (audioCtx?.state === 'suspended') audioCtx.resume();
    cancelAnimationFrame(idleAnim);
    radioAudio.play().catch(() => {});
  }
}

function updateProgress() {
  const d = radioAudio.duration, c = radioAudio.currentTime;
  radioTimeNow.textContent = fmt(c);
  radioTimeTot.textContent = fmt(d);
  if (isFinite(d) && d > 0) {
    const p = Math.max(0, Math.min(100, c/d*100));
    radioBarFill.style.width = p + '%';
    radioBarKnob.style.left  = p + '%';
    radioBar.setAttribute('aria-valuenow', String(Math.round(p)));
  }
}

function seek(clientX) {
  const r = radioBar.getBoundingClientRect();
  const p = Math.max(0, Math.min(1, (clientX - r.left) / r.width));
  if (isFinite(radioAudio.duration)) {
    radioAudio.currentTime = radioAudio.duration * p;
    updateProgress();
  }
}

// ── TRACKLIST ──
function buildTracklist() {
  tracklistEl.innerHTML = '';
  TRACKS.forEach((t, i) => {
    const el = document.createElement('div');
    el.className = 'track-row' + (i === trackIdx ? ' active' : '');
    el.innerHTML = `<span class="track-i">${i+1}</span><span class="track-name">${t.title}</span>${i===trackIdx?'<span class="track-now">Ahora</span>':''}`;
    el.addEventListener('click', () => loadTrack(i, true));
    tracklistEl.appendChild(el);
  });
}

function highlightTrack() {
  if (!tlOpen) { buildTracklist(); return; }
  document.querySelectorAll('.track-row').forEach((el, i) => {
    const on = i === trackIdx;
    el.classList.toggle('active', on);
    const badge = el.querySelector('.track-now');
    if (on && !badge) el.insertAdjacentHTML('beforeend', '<span class="track-now">Ahora</span>');
    if (!on && badge) badge.remove();
  });
}

tracklistToggle.addEventListener('click', () => {
  tlOpen = !tlOpen;
  tracklistEl.hidden = !tlOpen;
  tracklistArrow.classList.toggle('open', tlOpen);
  if (tlOpen) buildTracklist();
});

// ── EVENTOS ──
radioAudio.addEventListener('loadedmetadata', () => {
  const t = TRACKS[trackIdx];
  if (t) setNow(t.title, `${fmt(radioAudio.duration)}`);
  updateProgress();
});
radioAudio.addEventListener('timeupdate', updateProgress);
radioAudio.addEventListener('ended', () => {
  loadTrack(shuffleOn ? randNext(trackIdx) : trackIdx + 1, true);
});
radioAudio.addEventListener('play',  () => { cancelAnimationFrame(idleAnim); });
radioAudio.addEventListener('pause', () => drawIdle());

radioPlay.addEventListener('click', () => {
  if (!TRACKS.length) return;
  connectViz();
  if (audioCtx?.state === 'suspended') audioCtx.resume();
  if (trackIdx === -1) loadTrack(0, true);
  else { cancelAnimationFrame(idleAnim); radioAudio.play().catch(() => {}); }
});
radioPause.addEventListener('click', () => radioAudio.pause());
radioNext.addEventListener('click', () => {
  if (!TRACKS.length) return;
  loadTrack(shuffleOn ? randNext(trackIdx < 0 ? 0 : trackIdx) : trackIdx + 1, true);
});
radioPrev.addEventListener('click', () => {
  if (!TRACKS.length) return;
  if (history.length) { loadTrack(history.pop(), true, false); return; }
  loadTrack(trackIdx <= 0 ? TRACKS.length - 1 : trackIdx - 1, true);
});

// Progress bar
let dragging = false;
radioBar.addEventListener('click', e => seek(e.clientX));
radioBar.addEventListener('mousedown', e => { dragging = true; seek(e.clientX); });
window.addEventListener('mousemove',   e => { if (dragging) seek(e.clientX); });
window.addEventListener('mouseup',     () => dragging = false);
radioBar.addEventListener('touchstart', e => seek(e.touches[0].clientX), { passive: true });
window.addEventListener('touchmove',   e => { if (dragging) seek(e.touches[0].clientX); }, { passive: true });
radioBar.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft')  radioAudio.currentTime = Math.max(0, radioAudio.currentTime - 5);
  if (e.key === 'ArrowRight') radioAudio.currentTime = Math.min(radioAudio.duration||0, radioAudio.currentTime + 5);
  updateProgress();
});

setVol(.8);
radioVolSlider.addEventListener('input', () => setVol(radioVolSlider.value / 100));

radioShuffle.addEventListener('click', () => {
  shuffleOn = !shuffleOn;
  radioShuffle.setAttribute('aria-pressed', String(shuffleOn));
});

// Init
setNow('La radio está lista', 'Pulsa reproducir');
buildTracklist();
