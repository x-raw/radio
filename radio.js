 (async () => {

  const USER = "x-raw";
  const REPO = "radio";

  const base = `https://cdn.jsdelivr.net/gh/${USER}/${REPO}`;

  // Ambil metadata file HANYA dari repo ini,
  // otomatis ketemu semua file mp3
  const r = await fetch(`https://data.jsdelivr.com/v1/package/gh/${USER}/${REPO}`);
  const j = await r.json();

  let tracks = j.files
    .filter(f => f.name.endsWith(".mp3"))
    .map(f => `${base}${f.name}`);

  // random satu
  const pick = () => tracks[Math.floor(Math.random() * tracks.length)];

  const audio = new Audio(pick());
  audio.autoplay = true;
  audio.volume = 1.0;

  audio.addEventListener("ended", () => {
    audio.src = pick();
    audio.play();
  });

  window.Radio = audio;

})();