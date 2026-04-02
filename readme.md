# ml_models

Testing out different model structures with Python and Processing.

 "Un calcul éclatant pareil aux computations de mesure du temps par sectionnement et computation des intervalles." ~ Quelqu'un Quiqonque

![models_test.png](models_test.png "Model Test")
  
 
 for use with Processing (MIT) 3.5.4.

---

## 🎹 Synth Circles — retro 80s browser game

**[▶ Play it here (GitHub Pages)](https://davidpomarede.github.io/ml_models/synth_circles.html)**

> If the link above shows a 404, enable GitHub Pages for this repo:  
> *Settings → Pages → Source → Deploy from branch → `main` / `(root)`*

**How to play**
- Drag neon circles toward each other to connect them
- Connected circles play a chord from a C pentatonic scale — always harmonious
- Release a circle and it drifts away, its note fading out
- Tap the **◈ SYNTH CIRCLES ◈** title to mute / unmute

**Works on mobile** — tap the canvas first to unlock audio (browser security requirement), then drag circles with your finger.

**Tech notes (`synth_circles.html`)**
- Pure HTML/CSS/JS, no dependencies — open the file directly in any browser
- Audio: Web Audio API — filtered sawtooth + sine sub-oscillator, vibrato LFO, convolution reverb
- Notes are drawn from a C pentatonic scale so any combination sounds good
- iOS Safari needs a silent "unlock" buffer played on first touch before the AudioContext activates

