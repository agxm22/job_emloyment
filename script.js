function dropParticles() {
  document.getElementById("sound").play(); // 🔊 Play sound

  const particles = document.getElementById("particles");
  particles.innerHTML = "";

  for (let i = 0; i < 300; i++) {
    // (same as before...)
  }
}
