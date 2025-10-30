(async () => {
  const OWNER = "x-raw";
  const REPO = "radio";
  const PATH = "";

  const res = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/contents/${PATH}`);
  const data = await res.json();

  const tracks = data
    .filter(f => f.name.endsWith(".mp3"))
    .map(f => f.download_url);

  const pick = tracks[Math.floor(Math.random()*tracks.length)];

  const audio = new Audio(pick);
  audio.autoplay = true;

  window.Radio = audio;
})();
