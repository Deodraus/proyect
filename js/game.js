/**
 * ============================================================================
 * PASAPORTE DE INNOVACIÓN • GRADO 11-4
 * Motor Lógico de Gamificación, Pantalla Completa & 7 Minijuegos Móviles
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. SINTETIZADOR DE AUDIO WEB (Sin archivos externos de audio)
  class SoundSynth {
    constructor() {
      this.enabled = true;
      this.ctx = null;
    }

    init() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          this.ctx = new AudioCtx();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    playLaser() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(850, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.1);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.1);
    }

    playJump() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(160, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(480, this.ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.16);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.16);
    }

    playEat() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.1);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.1);
    }

    playStep() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(520, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.005, this.ctx.currentTime + 0.06);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.06);
    }

    playSnap() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(640, this.ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.1);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.1);
    }

    playSnip() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(1400, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.005, this.ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    }

    playHurt() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(60, this.ctx.currentTime + 0.2);
      gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.2);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.2);
    }

    playStamp() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(140, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(35, this.ctx.currentTime + 0.18);
      gain.gain.setValueAtTime(0.7, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.2);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.2);
    }

    playSuccess() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.08);
        gain.gain.setValueAtTime(0, this.ctx.currentTime + idx * 0.08);
        gain.gain.linearRampToValueAtTime(0.25, this.ctx.currentTime + idx * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.08 + 0.25);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(this.ctx.currentTime + idx * 0.08);
        osc.stop(this.ctx.currentTime + idx * 0.08 + 0.25);
      });
    }

    playClick() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    }
  }

  const sound = new SoundSynth();

  // 2. DATASET DE LOS 7 DESTINOS
  const destinations = [
    {
      id: '01',
      key: 'vitline',
      name: 'VitLine',
      title: 'VitLine Airlines',
      badge: '01 • VitLine',
      category: 'Vuelos & Reservas',
      videoSrc: 'vitlinepage.mp4',
      bgImage: 'assets/images/tecnologia.jpeg',
      icon: 'fa-jet-fighter-up',
      briefing: {
        title: 'VitLine Airlines',
        desc: 'Plataforma para vuelos comerciales y asistencia de viaje. La aeronave dispara automáticamente de forma infinita mientras esquivas las turbulencias hasta aterrizar.',
        req: 'Pilota la nave con disparo continuo automático y alcanza el 100% de la distancia de vuelo.'
      },
      game: {
        title: 'Misión Aérea VitLine',
        subtitle: 'Disparo Automático Infinito & Vuelo Vertical',
        badge: 'Shooter Automático'
      }
    },
    {
      id: '02',
      key: 'dalulu',
      name: 'DaLulú Travel',
      title: 'DaLulú Travel',
      badge: '02 • DaLulú',
      category: 'Turismo en Colombia',
      videoSrc: 'dalulupage.mp4',
      bgImage: 'assets/images/aprender.jpeg',
      icon: 'fa-compass',
      briefing: {
        title: 'DaLulú Travel Agency',
        desc: 'Agencia de viajes dedicada a crear experiencias por Colombia. Debes recolectar las letras de DALULÚ en el orden exacto (D -> A -> L -> U -> L -> U) para abrir la salida.',
        req: 'Recoge las 6 letras en el orden estricto de DALULÚ y cruza la meta turística.'
      },
      game: {
        title: 'Laberinto de la Palabra en Orden',
        subtitle: 'Acertijo Turístico DaLulú (Orden Estricto)',
        badge: 'D-A-L-U-L-U en Orden'
      }
    },
    {
      id: '03',
      key: 'glowsmec',
      name: 'GlowSmec',
      title: 'GlowSmec Salón & Spa',
      badge: '03 • GlowSmec',
      category: 'Cuidado Estético & Spa',
      videoSrc: 'glowsmecpage.mp4',
      bgImage: 'assets/images/oportunidades.jpeg',
      icon: 'fa-scissors',
      briefing: {
        title: 'GlowSmec Salón & Spa',
        desc: 'Plataforma de belleza profesional. Supera los 5 estilos de corte de precisión estilo Squid Game (Flequillo, Fade, Barba, Tribal y Pompadour).',
        req: 'Completa los 5 niveles de corte de cabello manteniendo el pulso firme sin salirte del margen.'
      },
      game: {
        title: '5 Desafíos de Corte de Precisión',
        subtitle: 'Serie de 5 Estilos Estéticos GlowSmec',
        badge: '5 Niveles de Corte'
      }
    },
    {
      id: '04',
      key: 'greentask',
      name: 'GreenTask',
      title: 'GreenTask Sostenible',
      badge: '04 • GreenTask',
      category: 'Ecología & Reciclaje',
      videoSrc: 'greentaskpage.webm',
      bgImage: 'assets/images/juntos.jpeg',
      icon: 'fa-worm',
      briefing: {
        title: 'GreenTask Sostenible',
        desc: 'Plataforma ecológica y compostaje. Guía al gusano a un ritmo tranquilo y pausado para comer 10 manzanas orgánicas y crecer sucesivamente.',
        req: 'Come 10 manzanas orgánicas a ritmo pausado con el gusano para nutrir el huerto.'
      },
      game: {
        title: 'Gusano de las Manzanas (10 Manzanas)',
        subtitle: 'Snake Sostenible a Ritmo Pausado',
        badge: 'Meta: 10 Manzanas'
      }
    },
    {
      id: '05',
      key: 'patitas',
      name: 'Patitas al Rescate',
      title: 'Patitas al Rescate',
      badge: '05 • Patitas',
      category: 'Adopción & Rescate Animal',
      videoSrc: 'patitasalrescatepage.mp4',
      bgImage: 'assets/images/catalina.jpeg',
      icon: 'fa-dog',
      briefing: {
        title: 'Patitas al Rescate',
        desc: 'Refugio de rescate animal. El perrito realista corre moviendo sus patas; dispones de 3 vidas. Cada obstáculo no evitado te quita 1 vida; si pierdes las 3 vidas, reinicias la carrera.',
        req: 'Salta los obstáculos con el perrito realista, cuida tus 3 vidas y llega al 100% de la distancia.'
      },
      game: {
        title: 'Carrera Canina Realista (3 Vidas)',
        subtitle: 'Runner con Animación de Patas & Vidas',
        badge: '3 Vidas & Patas Animadas'
      }
    },
    {
      id: '06',
      key: 'softplay',
      name: 'SoftPlay',
      title: 'SoftPlay Academy',
      badge: '06 • SoftPlay',
      category: 'Educación en Programación',
      videoSrc: 'softplaypage.mp4',
      bgImage: 'assets/images/quehacemos.jpeg',
      icon: 'fa-robot',
      briefing: {
        title: 'SoftPlay Academy',
        desc: 'Academia interactiva de lógica computacional. Programa al robot mediante botones direccionales para llevarlo hasta la computadora meta sin escribir código.',
        req: 'Construye la secuencia de órdenes y presiona EJECUTAR para ver al robot completar la ruta.'
      },
      game: {
        title: 'Programador de Robots',
        subtitle: 'Lógica Visual e Interactiva por Botones',
        badge: 'Órdenes sin Código'
      }
    },
    {
      id: '07',
      key: 'tecnofix',
      name: 'TecnoFix',
      title: 'TecnoFix Computadores',
      badge: '07 • TecnoFix',
      category: 'Hardware & Servicio Técnico',
      videoSrc: 'tecnofixpage.mp4',
      bgImage: 'assets/images/tecnologia.jpeg',
      icon: 'fa-microchip',
      briefing: {
        title: 'TecnoFix Computadores',
        desc: 'Taller de hardware y ensamble especializado. Agarra con precisión los 5 componentes principales (CPU, RAM, GPU, SSD y Fuente) y móntalos en el PC Gamer para encenderlo.',
        req: 'Ensambla cada componente en su ranura correcta del chasis y enciende el equipo a 240 FPS.'
      },
      game: {
        title: 'Simulador de Ensamble de PC',
        subtitle: 'Taller de Precisión en Hardware TecnoFix',
        badge: 'Ensamble de PC'
      }
    }
  ];

  // 3. ESTADO GLOBAL & PERSISTENCIA
  const STORAGE_KEY = 'pasaporte_11_4_state_v3';
  let appState = {
    currentIndex: 0,
    stamps: {},
    passengerName: 'Evaluador Oficial 11-4',
    soundEnabled: true
  };

  function loadSavedState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        appState.stamps = parsed.stamps || {};
        appState.passengerName = parsed.passengerName || 'Evaluador Oficial 11-4';
        appState.soundEnabled = parsed.soundEnabled !== undefined ? parsed.soundEnabled : true;
      }
    } catch (e) {
      console.warn('Error leyendo localStorage:', e);
    }
    sound.enabled = appState.soundEnabled;
  }

  function persistState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        stamps: appState.stamps,
        passengerName: appState.passengerName,
        soundEnabled: appState.soundEnabled
      }));
    } catch (e) {
      console.warn('Error guardando en localStorage:', e);
    }
  }

  loadSavedState();

  // 4. ELEMENTOS DEL DOM
  const gameVideo = document.getElementById('game-video');
  const missionDestPill = document.getElementById('mission-dest-pill');
  const destStatusBadge = document.getElementById('dest-status-badge');
  const briefingTitle = document.getElementById('briefing-title');
  const briefingDesc = document.getElementById('briefing-desc');
  const briefingReq = document.getElementById('briefing-req');

  const minigameTitle = document.getElementById('minigame-title');
  const minigameSubtitle = document.getElementById('minigame-subtitle');
  const minigameBadge = document.getElementById('minigame-badge');
  const interactiveArena = document.getElementById('interactive-arena');
  const stampAwardAlert = document.getElementById('stamp-award-alert');
  const claimStampBtn = document.getElementById('claim-stamp-btn');
  const claimStampText = document.getElementById('claim-stamp-text');

  const dockItemsRow = document.getElementById('dock-items-row');
  const passportStampCountEl = document.getElementById('passport-stamp-count');
  const toggleSoundBtn = document.getElementById('toggle-sound-btn');
  const soundLabel = document.getElementById('sound-label');

  // Pantalla Completa & Victory Overlay
  const gamePlayCard = document.querySelector('.game-play-card');
  const toggleFullscreenBtn = document.getElementById('toggle-fullscreen-btn');
  const fullscreenBtnText = document.getElementById('fullscreen-btn-text');
  const gameVictoryOverlay = document.getElementById('game-victory-overlay');
  const victoryTitle = document.getElementById('victory-title');
  const victoryDesc = document.getElementById('victory-desc');
  const victoryStampShowcase = document.getElementById('victory-stamp-showcase');
  const victoryCountdownTxt = document.getElementById('victory-countdown-txt');
  const countdownProgressBar = document.getElementById('countdown-progress-bar');
  const btnNextDestNow = document.getElementById('btn-next-dest-now');

  // Modales Pasaporte y Sala VIP
  const openPassportBtn = document.getElementById('open-passport-btn');
  const closePassportBtn = document.getElementById('close-passport-btn');
  const passportModal = document.getElementById('passport-modal');
  const passengerNameInput = document.getElementById('passenger-name-input');
  const passportProgressPct = document.getElementById('passport-progress-pct');
  const stampsSlotsGrid = document.getElementById('stamps-slots-grid');
  const vipRewardBanner = document.getElementById('vip-reward-banner');

  const openVipBtn = document.getElementById('open-vip-btn');
  const closeVipBtn = document.getElementById('close-vip-btn');
  const vipModal = document.getElementById('vip-modal');

  const bgSlide1 = document.getElementById('game-bg-slide-1');
  const bgSlide2 = document.getElementById('game-bg-slide-2');
  let activeBgSlide = 1;

  let activeGameCleanup = null;

  // 5. CONTROLADOR DE PANTALLA COMPLETA
  function toggleFullscreen(forceState) {
    const shouldBeFullscreen = forceState !== undefined ? forceState : !gamePlayCard.classList.contains('is-fullscreen');

    if (shouldBeFullscreen) {
      gamePlayCard.classList.add('is-fullscreen');
      fullscreenBtnText.textContent = 'Salir';
      toggleFullscreenBtn.querySelector('i').className = 'fa-solid fa-compress';
      try {
        if (!document.fullscreenElement && gamePlayCard.requestFullscreen) {
          gamePlayCard.requestFullscreen().catch(() => {});
        }
      } catch (e) {}
    } else {
      gamePlayCard.classList.remove('is-fullscreen');
      fullscreenBtnText.textContent = 'Pantalla Completa';
      toggleFullscreenBtn.querySelector('i').className = 'fa-solid fa-expand';
      try {
        if (document.fullscreenElement && document.exitFullscreen) {
          document.exitFullscreen().catch(() => {});
        }
      } catch (e) {}
    }
    sound.playClick();
  }

  if (toggleFullscreenBtn) {
    toggleFullscreenBtn.addEventListener('click', () => toggleFullscreen());
  }

  document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement && gamePlayCard.classList.contains('is-fullscreen')) {
      gamePlayCard.classList.remove('is-fullscreen');
      fullscreenBtnText.textContent = 'Pantalla Completa';
      toggleFullscreenBtn.querySelector('i').className = 'fa-solid fa-expand';
    }
  });

  // 6. ACTUALIZACIÓN DE SONIDO Y NOMBRE
  function updateSoundUI() {
    if (appState.soundEnabled) {
      toggleSoundBtn.querySelector('i').className = 'fa-solid fa-volume-high';
      soundLabel.textContent = 'Audio ON';
    } else {
      toggleSoundBtn.querySelector('i').className = 'fa-solid fa-volume-xmark';
      soundLabel.textContent = 'Muted';
    }
  }
  updateSoundUI();

  toggleSoundBtn.addEventListener('click', () => {
    appState.soundEnabled = !appState.soundEnabled;
    sound.enabled = appState.soundEnabled;
    updateSoundUI();
    persistState();
    if (appState.soundEnabled) sound.playClick();
  });

  passengerNameInput.value = appState.passengerName;
  passengerNameInput.addEventListener('input', (e) => {
    appState.passengerName = e.target.value || 'Evaluador Oficial 11-4';
    persistState();
  });

  // 7. RENDERIZADO DEL DOCK
  function renderDock() {
    dockItemsRow.innerHTML = '';
    destinations.forEach((dest, idx) => {
      const isStamped = !!appState.stamps[dest.id];
      const item = document.createElement('div');
      item.className = `dest-dock-item ${idx === appState.currentIndex ? 'active' : ''} ${isStamped ? 'stamped' : ''}`;
      item.innerHTML = `
        <div class="dest-num">DESTINO ${dest.id}</div>
        <div class="dest-name">${dest.name}</div>
      `;
      item.addEventListener('click', () => {
        sound.playClick();
        switchDestination(idx);
      });
      dockItemsRow.appendChild(item);
    });
  }

  // 8. RENDERIZADO DEL PASAPORTE
  function updatePassportStats() {
    const stampedCount = Object.keys(appState.stamps).filter(k => appState.stamps[k]).length;
    passportStampCountEl.textContent = `${stampedCount} / 7`;
    const pct = Math.round((stampedCount / 7) * 100);
    passportProgressPct.textContent = `${pct}%`;

    if (stampedCount >= 7) {
      vipRewardBanner.classList.add('active');
    } else {
      vipRewardBanner.classList.remove('active');
    }
  }

  function renderPassportModal() {
    stampsSlotsGrid.innerHTML = '';
    destinations.forEach((dest) => {
      const isStamped = !!appState.stamps[dest.id];
      const slot = document.createElement('div');
      slot.className = `stamp-slot-card ${isStamped ? 'stamped' : ''}`;
      slot.innerHTML = `
        <div class="stamp-seal-circle">
          <i class="fa-solid ${dest.icon}"></i>
        </div>
        <div class="stamp-slot-title">${dest.id}. ${dest.name}</div>
        <div class="stamp-status-text">${isStamped ? '✓ ACREDITADO 11-4' : 'Pendiente'}</div>
      `;
      stampsSlotsGrid.appendChild(slot);
    });
    updatePassportStats();
  }

  // 9. ACTUALIZACIÓN DE FONDO
  function updateBackground(bgUrl) {
    if (!bgUrl) return;
    const incomingSlide = activeBgSlide === 1 ? bgSlide2 : bgSlide1;
    const currentSlide = activeBgSlide === 1 ? bgSlide1 : bgSlide2;
    incomingSlide.style.backgroundImage = `url('${bgUrl}')`;
    incomingSlide.classList.add('active');
    currentSlide.classList.remove('active');
    activeBgSlide = activeBgSlide === 1 ? 2 : 1;
  }

  // 10. SISTEMA DE VICTORIA & AUTO-AVANCE AL SIGUIENTE DESTINO
  let victoryCountdownTimer = null;

  function completeCurrentChallenge(successMsg) {
    const dest = destinations[appState.currentIndex];
    sound.playSuccess();
    sound.playStamp();

    appState.stamps[dest.id] = true;
    persistState();
    renderDock();
    updatePassportStats();

    destStatusBadge.className = 'dest-status-badge stamped';
    destStatusBadge.innerHTML = '<i class="fa-solid fa-circle-check"></i> <span>Acreditado 11-4</span>';
    stampAwardAlert.classList.add('active');
    stampAwardAlert.innerHTML = `<i class="fa-solid fa-certificate"></i> <span>${successMsg || '¡Desafío completado con éxito!'}</span>`;

    claimStampBtn.disabled = true;
    claimStampText.textContent = '¡Sello Oficial Estampado!';

    victoryTitle.textContent = `¡DESAFÍO ${dest.name.toUpperCase()} COMPLETADO!`;
    victoryDesc.textContent = successMsg || 'Has acreditado este proyecto exitosamente en tu pasaporte.';
    victoryStampShowcase.innerHTML = `<i class="fa-solid ${dest.icon}"></i>`;
    gameVictoryOverlay.classList.add('active');

    let timeLeft = 3.5;
    countdownProgressBar.style.width = '100%';
    victoryCountdownTxt.textContent = `Avanzando al siguiente destino en ${timeLeft.toFixed(1)}s...`;

    if (victoryCountdownTimer) clearInterval(victoryCountdownTimer);

    const isLastDestination = appState.currentIndex >= destinations.length - 1;
    if (isLastDestination) {
      victoryCountdownTxt.textContent = '¡Misión 11-4 Completa! Abriendo Pasaporte VIP en 3s...';
      btnNextDestNow.innerHTML = '<i class="fa-solid fa-trophy"></i> Ver Pasaporte y Sala VIP';
    } else {
      btnNextDestNow.innerHTML = `<i class="fa-solid fa-forward-step"></i> Siguiente: ${destinations[appState.currentIndex + 1].name}`;
    }

    const intervalTime = 100;
    victoryCountdownTimer = setInterval(() => {
      timeLeft -= intervalTime / 1000;
      const pct = Math.max(0, (timeLeft / 3.5) * 100);
      countdownProgressBar.style.width = `${pct}%`;

      if (timeLeft <= 0) {
        clearInterval(victoryCountdownTimer);
        advanceToNextDestination();
      } else {
        if (!isLastDestination) {
          victoryCountdownTxt.textContent = `Avanzando al siguiente destino en ${timeLeft.toFixed(1)}s...`;
        }
      }
    }, intervalTime);
  }

  function advanceToNextDestination() {
    if (victoryCountdownTimer) clearInterval(victoryCountdownTimer);
    gameVictoryOverlay.classList.remove('active');

    if (appState.currentIndex < destinations.length - 1) {
      switchDestination(appState.currentIndex + 1);
    } else {
      renderPassportModal();
      passportModal.classList.add('active');
    }
  }

  btnNextDestNow.addEventListener('click', () => {
    sound.playClick();
    advanceToNextDestination();
  });

  // -------------------------------------------------------------
  // CARGADOR Y LIMPIEZA DE MINIJUEGOS
  // -------------------------------------------------------------
  function loadMinigame(dest) {
    if (activeGameCleanup) {
      try { activeGameCleanup(); } catch (e) {}
      activeGameCleanup = null;
    }

    interactiveArena.innerHTML = '';
    stampAwardAlert.classList.remove('active');
    gameVictoryOverlay.classList.remove('active');

    const isAlreadyStamped = !!appState.stamps[dest.id];
    if (isAlreadyStamped) {
      claimStampBtn.disabled = true;
      claimStampText.textContent = 'Sello Ya Obtenido';
      stampAwardAlert.classList.add('active');
      stampAwardAlert.innerHTML = '<i class="fa-solid fa-circle-check"></i> <span>¡Destino ya acreditado! Puedes volver a jugar.</span>';
    } else {
      claimStampBtn.disabled = true;
      claimStampText.textContent = 'Estampar Sello';
    }

    switch (dest.key) {
      case 'vitline':
        buildVitLineArcade();
        break;
      case 'dalulu':
        buildDaluluMaze();
        break;
      case 'glowsmec':
        buildGlowsmecPrecision();
        break;
      case 'greentask':
        buildGreenTaskSnake();
        break;
      case 'patitas':
        buildPatitasRunner();
        break;
      case 'softplay':
        buildSoftPlayRobot();
        break;
      case 'tecnofix':
        buildTecnoFixAssembly();
        break;
    }
  }

  // =========================================================================
  // 1. VITLINE: SHOOT 'EM UP VERTICAL CON DISPARO AUTOMÁTICO & ENEMIGOS LENTOS
  // =========================================================================
  function buildVitLineArcade() {
    interactiveArena.innerHTML = `
      <div class="vitline-arcade-ui">
        <div class="arcade-hud-bar">
          <span><i class="fa-solid fa-gauge-high"></i> Distancia: <strong id="v-dist-txt">0%</strong></span>
          <span><i class="fa-solid fa-star"></i> Puntos: <strong id="v-score-txt">0</strong></span>
          <span><i class="fa-solid fa-shield-halved"></i> Escudo: <strong id="v-shield-txt">❤️❤️❤️</strong></span>
        </div>

        <div class="vitline-canvas-wrap" id="vitline-canvas-wrap">
          <canvas id="vitline-canvas"></canvas>
        </div>

        <div style="text-align:center; font-size:0.72rem; color:var(--blue-accent); padding:0.2rem;">
          ⚡ Disparo automático infinito activo • Desliza el dedo o usa flechas para mover la nave
        </div>
      </div>
    `;

    const canvas = document.getElementById('vitline-canvas');
    const wrap = document.getElementById('vitline-canvas-wrap');
    const ctx = canvas.getContext('2d');
    const distTxt = document.getElementById('v-dist-txt');
    const scoreTxt = document.getElementById('v-score-txt');
    const shieldTxt = document.getElementById('v-shield-txt');

    function resizeCanvas() {
      canvas.width = wrap.clientWidth || 320;
      canvas.height = wrap.clientHeight || 260;
    }
    resizeCanvas();

    let animId = null;
    let plane = { x: canvas.width / 2, y: canvas.height - 40, w: 28, h: 32, speed: 4 };
    let bullets = [];
    let enemies = [];
    let particles = [];
    let clouds = [];
    let score = 0;
    let distance = 0;
    let shields = 3;
    let gameWon = false;
    let enemySpawnCounter = 0;
    let autoShootCounter = 0;

    for (let i = 0; i < 6; i++) {
      clouds.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: 15 + Math.random() * 25,
        speed: 0.3 + Math.random() * 0.4
      });
    }

    function shoot() {
      if (gameWon) return;
      sound.playLaser();
      bullets.push({ x: plane.x - 7, y: plane.y - 12, vx: 0, vy: -7 });
      bullets.push({ x: plane.x + 7, y: plane.y - 12, vx: 0, vy: -7 });
    }

    function handleTouchMove(e) {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      const targetX = (touch.clientX - rect.left) * (canvas.width / rect.width);
      const targetY = (touch.clientY - rect.top) * (canvas.height / rect.height);
      plane.x = Math.max(16, Math.min(canvas.width - 16, targetX));
      plane.y = Math.max(30, Math.min(canvas.height - 20, targetY));
    }
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
    canvas.addEventListener('touchstart', handleTouchMove, { passive: false });

    const keys = {};
    function onKeyDown(e) {
      if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', ' ', 'w', 'a', 's', 'd'].includes(e.key)) {
        keys[e.key] = true;
      }
    }
    function onKeyUp(e) { keys[e.key] = false; }
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);

    function loop() {
      if (gameWon) return;

      // Movimiento con teclado
      if (keys['ArrowLeft'] || keys['a']) plane.x = Math.max(16, plane.x - plane.speed);
      if (keys['ArrowRight'] || keys['d']) plane.x = Math.min(canvas.width - 16, plane.x + plane.speed);
      if (keys['ArrowUp'] || keys['w']) plane.y = Math.max(30, plane.y - plane.speed);
      if (keys['ArrowDown'] || keys['s']) plane.y = Math.min(canvas.height - 20, plane.y + plane.speed);

      // Disparo automático infinito
      autoShootCounter++;
      if (autoShootCounter >= 11) {
        autoShootCounter = 0;
        shoot();
      }

      // Distancia de vuelo
      distance += 0.08;
      if (distance >= 100) {
        distance = 100;
        gameWon = true;
        distTxt.textContent = '100%';
        completeCurrentChallenge('¡Aterrizaje en destino VitLine completado con éxito!');
        return;
      }
      distTxt.textContent = `${Math.floor(distance)}%`;

      ctx.fillStyle = '#050c1b';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Nubes lentas
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      clouds.forEach(c => {
        c.y += c.speed;
        if (c.y > canvas.height + c.r) {
          c.y = -c.r;
          c.x = Math.random() * canvas.width;
        }
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Spawn de obstáculos lentos
      enemySpawnCounter++;
      if (enemySpawnCounter > 48) {
        enemySpawnCounter = 0;
        enemies.push({
          x: 20 + Math.random() * (canvas.width - 40),
          y: -20,
          w: 22,
          h: 22,
          speed: 0.75 + Math.random() * 0.65, // Más lento según pedido
          type: Math.random() > 0.5 ? 'storm' : 'drone'
        });
      }

      // Balas
      ctx.fillStyle = '#38bdf8';
      ctx.shadowBlur = 8;
      ctx.shadowColor = '#38bdf8';
      for (let i = bullets.length - 1; i >= 0; i--) {
        const b = bullets[i];
        b.y += b.vy;
        ctx.fillRect(b.x - 2, b.y - 6, 4, 12);
        if (b.y < -10) bullets.splice(i, 1);
      }
      ctx.shadowBlur = 0;

      // Enemigos
      for (let i = enemies.length - 1; i >= 0; i--) {
        const en = enemies[i];
        en.y += en.speed;

        if (en.type === 'storm') {
          ctx.fillStyle = '#94a3b8';
          ctx.beginPath();
          ctx.arc(en.x, en.y, 12, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = '#f59e0b';
          ctx.font = '10px sans-serif';
          ctx.fillText('⚡', en.x - 5, en.y + 4);
        } else {
          ctx.fillStyle = '#ef4444';
          ctx.fillRect(en.x - 10, en.y - 10, 20, 20);
          ctx.fillStyle = '#ffffff';
          ctx.font = '10px sans-serif';
          ctx.fillText('⚠️', en.x - 6, en.y + 4);
        }

        // Colisión con balas
        for (let j = bullets.length - 1; j >= 0; j--) {
          const b = bullets[j];
          if (Math.hypot(b.x - en.x, b.y - en.y) < 18) {
            sound.playSnap();
            score += 10;
            scoreTxt.textContent = score;
            for (let p = 0; p < 5; p++) {
              particles.push({
                x: en.x, y: en.y,
                vx: (Math.random() - 0.5) * 3,
                vy: (Math.random() - 0.5) * 3,
                alpha: 1
              });
            }
            enemies.splice(i, 1);
            bullets.splice(j, 1);
            break;
          }
        }

        // Colisión con el avión
        if (enemies[i] && Math.hypot(plane.x - en.x, plane.y - en.y) < 20) {
          shields--;
          sound.playHurt();
          enemies.splice(i, 1);
          shieldTxt.textContent = shields === 2 ? '❤️❤️' : (shields === 1 ? '❤️' : '💔');
          if (shields <= 0) {
            shields = 3;
            shieldTxt.textContent = '❤️❤️❤️';
          }
        }

        if (en.y > canvas.height + 25) enemies.splice(i, 1);
      }

      // Partículas
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.05;
        ctx.fillStyle = `rgba(56, 189, 248, ${p.alpha})`;
        ctx.fillRect(p.x, p.y, 3, 3);
        if (p.alpha <= 0) particles.splice(i, 1);
      }

      // Dibujar Avión
      ctx.save();
      ctx.translate(plane.x, plane.y);
      ctx.fillStyle = '#f59e0b';
      ctx.beginPath();
      ctx.moveTo(-4, 14);
      ctx.lineTo(0, 18 + Math.random() * 6);
      ctx.lineTo(4, 14);
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.moveTo(0, -18);
      ctx.lineTo(6, -6);
      ctx.lineTo(16, 6);
      ctx.lineTo(4, 12);
      ctx.lineTo(0, 10);
      ctx.lineTo(-4, 12);
      ctx.lineTo(-16, 6);
      ctx.lineTo(-6, -6);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = '#0284c7';
      ctx.fillRect(-2, -10, 4, 8);
      ctx.restore();

      animId = requestAnimationFrame(loop);
    }

    animId = requestAnimationFrame(loop);

    activeGameCleanup = () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
    };
  }

  // =========================================================================
  // 2. DALULÚ TRAVEL: LABERINTO EN ORDEN ESTRICTO (D - A - L - U - L - U)
  // =========================================================================
  function buildDaluluMaze() {
    const TARGET_WORD = 'DALULU';
    let currentLetterIndex = 0;

    // Laberinto 7x7
    const mazeLayout = [
      [0, 0, 1, 0, 0, 0, 0],
      [1, 0, 1, 0, 1, 1, 0],
      [0, 0, 0, 0, 1, 0, 0],
      [0, 1, 1, 0, 0, 0, 1],
      [0, 0, 1, 1, 1, 0, 0],
      [1, 0, 0, 0, 1, 1, 0],
      [0, 0, 1, 0, 0, 0, 2]
    ];

    // Letras distribuidas con índice estricto de recolección (0 a 5)
    const letterSpawns = [
      { r: 0, c: 1, char: 'D', order: 0, collected: false },
      { r: 0, c: 5, char: 'A', order: 1, collected: false },
      { r: 2, c: 2, char: 'L', order: 2, collected: false },
      { r: 3, c: 4, char: 'U', order: 3, collected: false },
      { r: 5, c: 3, char: 'L', order: 4, collected: false },
      { r: 4, c: 6, char: 'U', order: 5, collected: false }
    ];

    let playerPos = { r: 0, c: 0 };

    interactiveArena.innerHTML = `
      <div class="dalulu-maze-ui">
        <div class="maze-word-tracker" id="maze-word-tracker">
          ${TARGET_WORD.split('').map((char, i) => `
            <div class="letter-tile-slot ${i === 0 ? 'target-active' : ''}" id="slot-letter-${i}">_</div>
          `).join('')}
        </div>

        <div id="dalulu-order-hint" style="font-size:0.74rem; color:var(--gold-accent); text-align:center; font-weight:700;">
          Próxima letra a recoger: "D" (1/6)
        </div>

        <div class="dalulu-maze-board" id="maze-board" style="grid-template-columns: repeat(7, 1fr); grid-template-rows: repeat(7, 1fr);">
        </div>

        <div class="mobile-touch-dpad">
          <button class="dpad-btn up" id="dpad-up"><i class="fa-solid fa-arrow-up"></i></button>
          <button class="dpad-btn left" id="dpad-left"><i class="fa-solid fa-arrow-left"></i></button>
          <button class="dpad-btn right" id="dpad-right"><i class="fa-solid fa-arrow-right"></i></button>
          <button class="dpad-btn down" id="dpad-down"><i class="fa-solid fa-arrow-down"></i></button>
        </div>
      </div>
    `;

    const board = document.getElementById('maze-board');
    const hintEl = document.getElementById('dalulu-order-hint');

    function updateSlotsUI() {
      for (let i = 0; i < TARGET_WORD.length; i++) {
        const slot = document.getElementById(`slot-letter-${i}`);
        if (slot) {
          slot.classList.remove('target-active');
          if (i < currentLetterIndex) {
            slot.textContent = TARGET_WORD[i];
            slot.classList.add('collected');
          } else if (i === currentLetterIndex) {
            slot.textContent = '_';
            slot.classList.add('target-active');
          } else {
            slot.textContent = '_';
            slot.classList.remove('collected');
          }
        }
      }

      if (currentLetterIndex < TARGET_WORD.length) {
        hintEl.textContent = `Próxima letra a recoger en orden: "${TARGET_WORD[currentLetterIndex]}" (${currentLetterIndex + 1}/6)`;
      } else {
        hintEl.style.color = 'var(--green-accent)';
        hintEl.textContent = '¡Palabra DALULÚ completa! Cruza la meta turística 🏁';
      }
    }

    function renderMaze() {
      board.innerHTML = '';
      for (let r = 0; r < 7; r++) {
        for (let c = 0; c < 7; c++) {
          const cell = document.createElement('div');
          const cellType = mazeLayout[r][c];
          cell.className = 'maze-cell ' + (cellType === 1 ? 'wall' : (cellType === 2 ? 'exit' : 'path'));

          if (playerPos.r === r && playerPos.c === c) {
            cell.innerHTML = '<div class="maze-player-dot"><i class="fa-solid fa-person-walking-luggage"></i></div>';
          } else {
            const letter = letterSpawns.find(l => l.r === r && l.c === c && !l.collected);
            if (letter) {
              const isCurrentTarget = letter.order === currentLetterIndex;
              cell.innerHTML = `<span class="maze-letter-pickup" style="${isCurrentTarget ? 'color:#38bdf8; font-size:0.95rem; text-shadow:0 0 8px #38bdf8;' : 'opacity:0.4;'}">${letter.char}</span>`;
            } else if (cellType === 2) {
              cell.innerHTML = '<span style="font-size:0.85rem;">🏁</span>';
            }
          }
          board.appendChild(cell);
        }
      }
    }

    function tryMove(dr, dc) {
      const nr = playerPos.r + dr;
      const nc = playerPos.c + dc;
      if (nr < 0 || nr >= 7 || nc < 0 || nc >= 7) return;
      if (mazeLayout[nr][nc] === 1) return;

      playerPos.r = nr;
      playerPos.c = nc;
      sound.playStep();

      // Verificar si hay una letra
      const letter = letterSpawns.find(l => l.r === nr && l.c === nc && !l.collected);
      if (letter) {
        if (letter.order === currentLetterIndex) {
          // Recolección en el orden adecuado
          letter.collected = true;
          currentLetterIndex++;
          sound.playSnap();
          updateSlotsUI();
        } else {
          // Intentó recoger una letra fuera de turno
          sound.playClick();
          hintEl.textContent = `¡Orden estricto! Primero debes recoger "${TARGET_WORD[currentLetterIndex]}"`;
        }
      }

      // Verificar salida
      if (mazeLayout[nr][nc] === 2) {
        if (currentLetterIndex >= TARGET_WORD.length) {
          completeCurrentChallenge('¡Palabra DALULÚ completada en el orden exacto y meta alcanzada!');
        } else {
          sound.playClick();
          hintEl.textContent = '¡Aún te faltan letras para desbloquear la salida!';
        }
      }

      renderMaze();
    }

    updateSlotsUI();
    renderMaze();

    document.getElementById('dpad-up').addEventListener('click', () => tryMove(-1, 0));
    document.getElementById('dpad-down').addEventListener('click', () => tryMove(1, 0));
    document.getElementById('dpad-left').addEventListener('click', () => tryMove(0, -1));
    document.getElementById('dpad-right').addEventListener('click', () => tryMove(0, 1));

    function onKeyDown(e) {
      if (e.key === 'ArrowUp' || e.key === 'w') tryMove(-1, 0);
      else if (e.key === 'ArrowDown' || e.key === 's') tryMove(1, 0);
      else if (e.key === 'ArrowLeft' || e.key === 'a') tryMove(0, -1);
      else if (e.key === 'ArrowRight' || e.key === 'd') tryMove(0, 1);
    }
    window.addEventListener('keydown', onKeyDown);

    activeGameCleanup = () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }

  // =========================================================================
  // 3. GLOWSMEC: 5 NIVELES DE PRECISIÓN DE CORTE (ESTILO SQUID GAME DALGONA)
  // =========================================================================
  function buildGlowsmecPrecision() {
    const HAIRCUT_LEVELS = [
      { name: 'Nivel 1: Flequillo Recto & Bob', curveType: 'straight_arc' },
      { name: 'Nivel 2: Fade Degradado Lateral', curveType: 'fade_down' },
      { name: 'Nivel 3: Perfilado de Barba & Patilla', curveType: 'beard_angle' },
      { name: 'Nivel 4: Diseño Freestyle Barber', curveType: 'wave_zigzag' },
      { name: 'Nivel 5: Pompadour Estilizado GlowSmec', curveType: 'pompadour_crest' }
    ];

    let currentLevel = 0;

    interactiveArena.innerHTML = `
      <div class="glowsmec-precision-ui">
        <div class="glowsmec-levels-strip" id="glow-levels-strip">
          ${HAIRCUT_LEVELS.map((lvl, i) => `
            <div class="glowsmec-level-pill ${i === 0 ? 'active' : ''}" id="pill-lvl-${i}">
              Lvl ${i + 1}
            </div>
          `).join('')}
        </div>

        <div class="precision-hud-bar">
          <span id="glow-lvl-title" style="font-weight:700; color:#f472b6;">
            ${HAIRCUT_LEVELS[0].name}
          </span>
          <div style="display:flex; align-items:center; gap:0.35rem;">
            <span>Pulso:</span>
            <div class="tension-meter-track">
              <div id="glow-tension" class="tension-meter-fill"></div>
            </div>
          </div>
        </div>

        <div class="haircut-canvas-stage" id="haircut-canvas-stage">
          <canvas id="glowsmec-canvas"></canvas>
        </div>

        <p class="precision-instructions-hint" id="glow-hint-txt">
          ✂️ Nivel 1/5: Desliza las tijeras siguiendo la línea punteada para realizar el corte.
        </p>
      </div>
    `;

    const canvas = document.getElementById('glowsmec-canvas');
    const stage = document.getElementById('haircut-canvas-stage');
    const ctx = canvas.getContext('2d');
    const tensionBar = document.getElementById('glow-tension');
    const lvlTitle = document.getElementById('glow-lvl-title');
    const hintTxt = document.getElementById('glow-hint-txt');

    function resize() {
      canvas.width = stage.clientWidth || 320;
      canvas.height = stage.clientHeight || 220;
    }
    resize();

    let points = [];
    let isCutting = false;
    let cutCount = 0;
    let tension = 0;
    let levelDone = false;

    function generateCurve(type) {
      points = [];
      const numPoints = 26;
      for (let i = 0; i < numPoints; i++) {
        const t = i / (numPoints - 1);
        let px = canvas.width * 0.16 + t * (canvas.width * 0.68);
        let py = canvas.height * 0.55;

        if (type === 'straight_arc') {
          py = canvas.height * 0.45 + Math.sin(t * Math.PI) * 25;
        } else if (type === 'fade_down') {
          py = canvas.height * 0.35 + t * (canvas.height * 0.4);
        } else if (type === 'beard_angle') {
          py = t < 0.5 ? canvas.height * 0.35 + t * 50 : canvas.height * 0.6 - (t - 0.5) * 45;
        } else if (type === 'wave_zigzag') {
          py = canvas.height * 0.52 + Math.sin(t * Math.PI * 3) * 30;
        } else if (type === 'pompadour_crest') {
          py = canvas.height * 0.65 - Math.sin(t * Math.PI) * 55;
        }

        points.push({ x: px, y: py, cut: false });
      }
      cutCount = 0;
      tension = 0;
      levelDone = false;
    }

    generateCurve(HAIRCUT_LEVELS[0].curveType);

    function drawScene(currentPos) {
      ctx.fillStyle = '#030712';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Silueta estilizadora de fondo
      ctx.fillStyle = '#1e293b';
      ctx.beginPath();
      ctx.arc(canvas.width * 0.5, canvas.height * 0.68, canvas.height * 0.36, 0, Math.PI * 2);
      ctx.fill();

      // Línea guía
      ctx.strokeStyle = 'rgba(236, 72, 153, 0.4)';
      ctx.lineWidth = 14;
      ctx.lineCap = 'round';
      ctx.beginPath();
      points.forEach((p, idx) => {
        if (idx === 0) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
      });
      ctx.stroke();

      // Trazado de corte
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 3.5;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      points.forEach((p, idx) => {
        if (idx === 0) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
      });
      ctx.stroke();
      ctx.setLineDash([]);

      // Puntos cortados
      points.forEach((p) => {
        if (p.cut) {
          ctx.fillStyle = '#38bdf8';
          ctx.beginPath();
          ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      if (currentPos) {
        ctx.fillStyle = '#ec4899';
        ctx.font = '22px sans-serif';
        ctx.fillText('✂️', currentPos.x - 11, currentPos.y - 4);
      }
    }

    drawScene(null);

    function nextLevel() {
      currentLevel++;
      sound.playSuccess();

      for (let i = 0; i < HAIRCUT_LEVELS.length; i++) {
        const pill = document.getElementById(`pill-lvl-${i}`);
        if (pill) {
          pill.className = 'glowsmec-level-pill ' + (i < currentLevel ? 'completed' : (i === currentLevel ? 'active' : ''));
        }
      }

      if (currentLevel >= HAIRCUT_LEVELS.length) {
        completeCurrentChallenge('¡Has dominado los 5 estilos de corte con pulso impecable en GlowSmec!');
      } else {
        lvlTitle.textContent = HAIRCUT_LEVELS[currentLevel].name;
        hintTxt.textContent = `✂️ Nivel ${currentLevel + 1}/5: Sigue el contorno del corte.`;
        generateCurve(HAIRCUT_LEVELS[currentLevel].curveType);
        tensionBar.style.width = '0%';
        drawScene(null);
      }
    }

    function handlePointer(x, y) {
      if (levelDone) return;
      let minDistance = 999;
      let closestIdx = -1;

      points.forEach((p, idx) => {
        const d = Math.hypot(p.x - x, p.y - y);
        if (d < minDistance) {
          minDistance = d;
          closestIdx = idx;
        }
      });

      if (minDistance < 24) {
        tension = Math.max(0, tension - 3);
        if (!points[closestIdx].cut) {
          points[closestIdx].cut = true;
          cutCount++;
          sound.playSnip();
        }
      } else {
        tension = Math.min(100, tension + 3.5);
      }

      tensionBar.style.width = `${tension}%`;
      drawScene({ x, y });

      if (cutCount >= points.length && tension < 65) {
        levelDone = true;
        setTimeout(nextLevel, 300);
      }
    }

    function onPointerDown(e) {
      isCutting = true;
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) * (canvas.width / rect.width);
      const y = (e.clientY - rect.top) * (canvas.height / rect.height);
      handlePointer(x, y);
    }

    function onPointerMove(e) {
      if (!isCutting) return;
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) * (canvas.width / rect.width);
      const y = (e.clientY - rect.top) * (canvas.height / rect.height);
      handlePointer(x, y);
    }

    function onPointerUp() { isCutting = false; }

    canvas.addEventListener('pointerdown', onPointerDown);
    canvas.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    activeGameCleanup = () => {
      canvas.removeEventListener('pointerdown', onPointerDown);
      canvas.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
    };
  }

  // =========================================================================
  // 4. GREENTASK: GUSANO MÁS LENTO & 10 MANZANAS
  // =========================================================================
  function buildGreenTaskSnake() {
    const TARGET_APPLES = 10; // Cambiado a 10 según requerimiento
    interactiveArena.innerHTML = `
      <div class="greentask-snake-ui">
        <div class="snake-hud-bar">
          <span><i class="fa-solid fa-apple-whole"></i> Manzanas: <strong id="snake-apple-txt">0 / 10</strong></span>
          <span><i class="fa-solid fa-trophy"></i> Meta: 10 Manzanas (Ritmo Pausado)</span>
        </div>

        <div class="snake-canvas-wrap" id="snake-canvas-wrap">
          <canvas id="snake-canvas"></canvas>
        </div>

        <div class="mobile-touch-dpad">
          <button class="dpad-btn up" id="snake-up"><i class="fa-solid fa-arrow-up"></i></button>
          <button class="dpad-btn left" id="snake-left"><i class="fa-solid fa-arrow-left"></i></button>
          <button class="dpad-btn right" id="snake-right"><i class="fa-solid fa-arrow-right"></i></button>
          <button class="dpad-btn down" id="snake-down"><i class="fa-solid fa-arrow-down"></i></button>
        </div>
      </div>
    `;

    const canvas = document.getElementById('snake-canvas');
    const wrap = document.getElementById('snake-canvas-wrap');
    const ctx = canvas.getContext('2d');
    const appleTxt = document.getElementById('snake-apple-txt');

    const GRID_SIZE = 14;
    canvas.width = wrap.clientWidth || 280;
    canvas.height = wrap.clientHeight || 220;
    const tileW = Math.floor(canvas.width / GRID_SIZE);
    const tileH = Math.floor(canvas.height / GRID_SIZE);

    let snake = [
      { x: 5, y: 5 },
      { x: 4, y: 5 },
      { x: 3, y: 5 }
    ];
    let dir = { x: 1, y: 0 };
    let nextDir = { x: 1, y: 0 };
    let apple = { x: 9, y: 5 };
    let applesEaten = 0;
    let gameWon = false;
    let snakeInterval = null;

    function spawnApple() {
      apple = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE)
      };
    }

    function tick() {
      if (gameWon) return;

      dir = nextDir;
      const head = { x: snake[0].x + dir.x, y: snake[0].y + dir.y };

      if (head.x < 0) head.x = GRID_SIZE - 1;
      if (head.x >= GRID_SIZE) head.x = 0;
      if (head.y < 0) head.y = GRID_SIZE - 1;
      if (head.y >= GRID_SIZE) head.y = 0;

      if (head.x === apple.x && head.y === apple.y) {
        sound.playEat();
        applesEaten++;
        appleTxt.textContent = `${applesEaten} / 10`;
        spawnApple();
        if (applesEaten >= TARGET_APPLES) {
          gameWon = true;
          clearInterval(snakeInterval);
          completeCurrentChallenge('¡Gusano ecológico creció con las 10 manzanas y compostó el huerto GreenTask!');
          return;
        }
      } else {
        snake.pop();
      }

      snake.unshift(head);

      ctx.fillStyle = '#020617';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Manzana
      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.arc((apple.x + 0.5) * tileW, (apple.y + 0.5) * tileH, tileW * 0.4, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#10b981';
      ctx.fillRect((apple.x + 0.45) * tileW, apple.y * tileH, tileW * 0.15, tileH * 0.25);

      // Gusano
      snake.forEach((seg, idx) => {
        ctx.fillStyle = idx === 0 ? '#34d399' : '#059669';
        ctx.beginPath();
        ctx.roundRect(seg.x * tileW + 1, seg.y * tileH + 1, tileW - 2, tileH - 2, 4);
        ctx.fill();
        if (idx === 0) {
          ctx.fillStyle = '#030712';
          ctx.beginPath();
          ctx.arc((seg.x + 0.3) * tileW, (seg.y + 0.35) * tileH, 2, 0, Math.PI * 2);
          ctx.arc((seg.x + 0.7) * tileW, (seg.y + 0.35) * tileH, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      });
    }

    // Gusano más pausado/lento (230ms en vez de 140ms)
    snakeInterval = setInterval(tick, 230);

    function changeDir(dx, dy) {
      if ((dx !== 0 && dir.x === -dx) || (dy !== 0 && dir.y === -dy)) return;
      nextDir = { x: dx, y: dy };
      sound.playClick();
    }

    document.getElementById('snake-up').addEventListener('click', () => changeDir(0, -1));
    document.getElementById('snake-down').addEventListener('click', () => changeDir(0, 1));
    document.getElementById('snake-left').addEventListener('click', () => changeDir(-1, 0));
    document.getElementById('snake-right').addEventListener('click', () => changeDir(1, 0));

    function onKeyDown(e) {
      if (e.key === 'ArrowUp' || e.key === 'w') changeDir(0, -1);
      else if (e.key === 'ArrowDown' || e.key === 's') changeDir(0, 1);
      else if (e.key === 'ArrowLeft' || e.key === 'a') changeDir(-1, 0);
      else if (e.key === 'ArrowRight' || e.key === 'd') changeDir(1, 0);
    }
    window.addEventListener('keydown', onKeyDown);

    activeGameCleanup = () => {
      clearInterval(snakeInterval);
      window.removeEventListener('keydown', onKeyDown);
    };
  }

  // =========================================================================
  // 5. PATITAS AL RESCATE: RUNNER CON PERRO REALISTA (PATAS ANDANDO) & 3 VIDAS
  // =========================================================================
  function buildPatitasRunner() {
    interactiveArena.innerHTML = `
      <div class="patitas-runner-ui">
        <div class="runner-hud-bar">
          <span><i class="fa-solid fa-flag-checkered"></i> Refugio: <strong id="runner-dist-txt">0%</strong></span>
          <span><i class="fa-solid fa-heart"></i> Vidas: <strong id="runner-lives-txt">❤️❤️❤️</strong></span>
        </div>

        <div class="runner-canvas-wrap" id="runner-canvas-wrap">
          <canvas id="patitas-canvas"></canvas>
        </div>

        <button id="runner-jump-btn" class="runner-jump-touch-btn">
          <i class="fa-solid fa-paw"></i> ¡SALTAR OBSTÁCULO! (ESPACIO / TOQUE)
        </button>
      </div>
    `;

    const canvas = document.getElementById('patitas-canvas');
    const wrap = document.getElementById('runner-canvas-wrap');
    const ctx = canvas.getContext('2d');
    const distTxt = document.getElementById('runner-dist-txt');
    const livesTxt = document.getElementById('runner-lives-txt');
    const jumpBtn = document.getElementById('runner-jump-btn');

    canvas.width = wrap.clientWidth || 320;
    canvas.height = wrap.clientHeight || 200;

    let animId = null;
    let groundY = canvas.height - 35;
    let dog = { x: 42, y: groundY - 28, vy: 0, gravity: 0.65, isJumping: false, frame: 0 };
    let obstacles = [];
    let distance = 0;
    let lives = 3;
    let spawnCounter = 0;
    let gameWon = false;
    let hurtFlash = 0;

    function jump() {
      if (gameWon) return;
      if (!dog.isJumping) {
        dog.isJumping = true;
        dog.vy = -10.5;
        sound.playJump();
      }
    }

    jumpBtn.addEventListener('click', (e) => {
      e.preventDefault();
      jump();
    });
    canvas.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      jump();
    });

    function onKeyDown(e) {
      if (e.key === ' ' || e.key === 'ArrowUp') {
        e.preventDefault();
        jump();
      }
    }
    window.addEventListener('keydown', onKeyDown);

    function updateLivesUI() {
      livesTxt.textContent = lives === 3 ? '❤️❤️❤️' : (lives === 2 ? '❤️❤️' : (lives === 1 ? '❤️' : '💀'));
    }

    function resetRun() {
      distance = 0;
      lives = 3;
      obstacles = [];
      updateLivesUI();
      distTxt.textContent = '0%';
    }

    function drawDog(x, y, frame, jumping) {
      ctx.save();
      ctx.translate(x, y);

      // Color base del perro (caramelo dorado)
      const dogColor = hurtFlash > 0 ? '#ef4444' : '#d97706';
      const earColor = hurtFlash > 0 ? '#b91c1c' : '#b45309';

      // Cola alegre batiendo
      const tailWag = Math.sin(frame * 0.4) * 0.4;
      ctx.save();
      ctx.translate(-14, -6);
      ctx.rotate(-0.5 + tailWag);
      ctx.fillStyle = earColor;
      ctx.beginPath();
      ctx.roundRect(0, -3, 10, 5, 2);
      ctx.fill();
      ctx.restore();

      // Patas traseras (animación trotando)
      const legPhase1 = jumping ? 0.3 : Math.sin(frame * 0.35);
      const legPhase2 = jumping ? -0.3 : -Math.sin(frame * 0.35);

      ctx.strokeStyle = earColor;
      ctx.lineWidth = 3.5;
      ctx.lineCap = 'round';

      // Pata trasera izquierda
      ctx.beginPath();
      ctx.moveTo(-8, 6);
      ctx.lineTo(-8 + legPhase2 * 7, 18);
      ctx.stroke();

      // Pata delantera izquierda
      ctx.beginPath();
      ctx.moveTo(8, 6);
      ctx.lineTo(8 + legPhase1 * 7, 18);
      ctx.stroke();

      // Cuerpo del perro
      ctx.fillStyle = dogColor;
      ctx.beginPath();
      ctx.roundRect(-14, -8, 28, 16, 6);
      ctx.fill();

      // Cabeza
      ctx.beginPath();
      ctx.roundRect(8, -18, 16, 14, 5);
      ctx.fill();

      // Hocico
      ctx.beginPath();
      ctx.roundRect(18, -13, 8, 8, 3);
      ctx.fill();

      // Nariz
      ctx.fillStyle = '#030712';
      ctx.beginPath();
      ctx.arc(24, -10, 2, 0, Math.PI * 2);
      ctx.fill();

      // Ojo
      ctx.fillStyle = '#030712';
      ctx.beginPath();
      ctx.arc(15, -13, 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(14.5, -13.5, 0.7, 0, Math.PI * 2);
      ctx.fill();

      // Oreja que ondea con el trote
      const earFlap = jumping ? -0.5 : Math.sin(frame * 0.3) * 0.25;
      ctx.save();
      ctx.translate(11, -16);
      ctx.rotate(0.3 + earFlap);
      ctx.fillStyle = earColor;
      ctx.beginPath();
      ctx.roundRect(-2, 0, 6, 12, 3);
      ctx.fill();
      ctx.restore();

      // Patas derechas (primer plano)
      ctx.strokeStyle = dogColor;
      ctx.lineWidth = 3.5;

      // Pata trasera derecha
      ctx.beginPath();
      ctx.moveTo(-6, 6);
      ctx.lineTo(-6 + legPhase1 * 7, 18);
      ctx.stroke();

      // Pata delantera derecha
      ctx.beginPath();
      ctx.moveTo(10, 6);
      ctx.lineTo(10 + legPhase2 * 7, 18);
      ctx.stroke();

      ctx.restore();
    }

    function loop() {
      if (gameWon) return;

      dog.y += dog.vy;
      dog.vy += dog.gravity;
      if (dog.y >= groundY - 26) {
        dog.y = groundY - 26;
        dog.vy = 0;
        dog.isJumping = false;
      }
      dog.frame++;
      if (hurtFlash > 0) hurtFlash--;

      distance += 0.12;
      distTxt.textContent = `${Math.min(100, Math.floor(distance))}%`;
      if (distance >= 100) {
        distance = 100;
        gameWon = true;
        completeCurrentChallenge('¡El perrito llegó a salvo al refugio de Patitas al Rescate!');
        return;
      }

      spawnCounter++;
      if (spawnCounter > 58) {
        spawnCounter = 0;
        obstacles.push({
          x: canvas.width + 10,
          y: groundY - 22,
          w: 18,
          h: 22,
          type: Math.random() > 0.5 ? 'cone' : 'fence'
        });
      }

      ctx.fillStyle = '#071020';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Suelo
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, groundY);
      ctx.lineTo(canvas.width, groundY);
      ctx.stroke();

      // Obstáculos
      for (let i = obstacles.length - 1; i >= 0; i--) {
        const obs = obstacles[i];
        obs.x -= 3.2;

        if (obs.type === 'cone') {
          ctx.fillStyle = '#f97316';
          ctx.beginPath();
          ctx.moveTo(obs.x + obs.w / 2, obs.y);
          ctx.lineTo(obs.x + obs.w, obs.y + obs.h);
          ctx.lineTo(obs.x, obs.y + obs.h);
          ctx.closePath();
          ctx.fill();
        } else {
          ctx.fillStyle = '#a855f7';
          ctx.fillRect(obs.x, obs.y + 4, obs.w, obs.h - 4);
        }

        // Colisión: Quita 1 vida. Si llega a 0, reinicia la carrera
        if (Math.hypot(dog.x - obs.x, dog.y - obs.y) < 22) {
          lives--;
          sound.playHurt();
          hurtFlash = 15;
          obstacles.splice(i, 1);
          updateLivesUI();

          if (lives <= 0) {
            resetRun();
          }
        } else if (obs.x < -20) {
          obstacles.splice(i, 1);
        }
      }

      // Dibujar perro animado realista
      drawDog(dog.x, dog.y, dog.frame, dog.isJumping);

      animId = requestAnimationFrame(loop);
    }

    animId = requestAnimationFrame(loop);

    activeGameCleanup = () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('keydown', onKeyDown);
    };
  }

  // =========================================================================
  // 6. SOFTPLAY: PROGRAMADOR DE ROBOTS (SIN CÓDIGO)
  // =========================================================================
  function buildSoftPlayRobot() {
    let program = [];
    const GRID_SIZE = 5;
    let robotPos = { r: 0, c: 0 };
    const targetPos = { r: 4, c: 4 };
    const obstacles = [
      { r: 1, c: 1 },
      { r: 1, c: 2 },
      { r: 3, c: 2 },
      { r: 3, c: 3 }
    ];

    interactiveArena.innerHTML = `
      <div class="softplay-robot-ui">
        <div class="robot-command-queue-bar" id="robot-queue">
          <span style="font-size:0.72rem; color:var(--text-muted);">Toca las flechas para ordenar pasos al robot:</span>
        </div>

        <div class="robot-board-grid" id="robot-board"></div>

        <div class="softplay-programming-controls">
          <div class="arrow-controls-row">
            <button class="btn-arrow-order" data-cmd="UP" title="Arriba">⬆️</button>
            <button class="btn-arrow-order" data-cmd="DOWN" title="Abajo">⬇️</button>
            <button class="btn-arrow-order" data-cmd="LEFT" title="Izquierda">⬅️</button>
            <button class="btn-arrow-order" data-cmd="RIGHT" title="Derecha">➡️</button>
          </div>

          <div class="program-action-row">
            <button id="btn-exec-prog" class="btn-exec-program"><i class="fa-solid fa-play"></i> EJECUTAR PROGRAMA</button>
            <button id="btn-clear-prog" class="btn-clear-program"><i class="fa-solid fa-trash-can"></i> Borrar</button>
          </div>
        </div>
      </div>
    `;

    const board = document.getElementById('robot-board');
    const queueBar = document.getElementById('robot-queue');
    const execBtn = document.getElementById('btn-exec-prog');
    const clearBtn = document.getElementById('btn-clear-prog');

    function renderBoard() {
      board.innerHTML = '';
      for (let r = 0; r < GRID_SIZE; r++) {
        for (let c = 0; c < GRID_SIZE; c++) {
          const cell = document.createElement('div');
          const isObs = obstacles.some(o => o.r === r && o.c === c);
          const isTarget = targetPos.r === r && targetPos.c === c;

          cell.className = 'robot-cell ' + (isObs ? 'obstacle' : (isTarget ? 'target' : ''));

          if (robotPos.r === r && robotPos.c === c) {
            cell.innerHTML = '<span class="robot-token">🤖</span>';
          } else if (isTarget) {
            cell.innerHTML = '<span style="font-size:1.1rem;">💻</span>';
          } else if (isObs) {
            cell.innerHTML = '<span style="font-size:0.9rem;">🧱</span>';
          }
          board.appendChild(cell);
        }
      }
    }

    function renderQueue() {
      if (program.length === 0) {
        queueBar.innerHTML = '<span style="font-size:0.72rem; color:var(--text-muted);">Toca las flechas para ordenar pasos al robot:</span>';
      } else {
        queueBar.innerHTML = '';
        program.forEach((cmd, i) => {
          const icon = cmd === 'UP' ? '⬆️' : (cmd === 'DOWN' ? '⬇️' : (cmd === 'LEFT' ? '⬅️' : '➡️'));
          const badge = document.createElement('div');
          badge.className = 'cmd-badge';
          badge.id = `step-badge-${i}`;
          badge.textContent = icon;
          queueBar.appendChild(badge);
        });
      }
    }

    renderBoard();
    renderQueue();

    document.querySelectorAll('.btn-arrow-order').forEach(btn => {
      btn.addEventListener('click', () => {
        if (program.length < 12) {
          sound.playClick();
          program.push(btn.getAttribute('data-cmd'));
          renderQueue();
        }
      });
    });

    clearBtn.addEventListener('click', () => {
      sound.playClick();
      program = [];
      robotPos = { r: 0, c: 0 };
      renderBoard();
      renderQueue();
    });

    execBtn.addEventListener('click', () => {
      if (program.length === 0) return;
      execBtn.disabled = true;
      robotPos = { r: 0, c: 0 };
      renderBoard();

      let stepIdx = 0;
      const stepInterval = setInterval(() => {
        document.querySelectorAll('.cmd-badge').forEach(b => b.classList.remove('active-step'));

        if (stepIdx >= program.length) {
          clearInterval(stepInterval);
          execBtn.disabled = false;
          if (robotPos.r === targetPos.r && robotPos.c === targetPos.c) {
            completeCurrentChallenge('¡Algoritmo exitoso! El robot llegó a la meta en SoftPlay.');
          }
          return;
        }

        const currentBadge = document.getElementById(`step-badge-${stepIdx}`);
        if (currentBadge) currentBadge.classList.add('active-step');

        const cmd = program[stepIdx];
        let nr = robotPos.r;
        let nc = robotPos.c;

        if (cmd === 'UP') nr--;
        else if (cmd === 'DOWN') nr++;
        else if (cmd === 'LEFT') nc--;
        else if (cmd === 'RIGHT') nc++;

        if (nr >= 0 && nr < GRID_SIZE && nc >= 0 && nc < GRID_SIZE) {
          const hitObs = obstacles.some(o => o.r === nr && o.c === nc);
          if (!hitObs) {
            robotPos.r = nr;
            robotPos.c = nc;
            sound.playStep();
          } else {
            sound.playHurt();
          }
        } else {
          sound.playHurt();
        }

        renderBoard();
        stepIdx++;
      }, 350);
    });

    activeGameCleanup = () => {};
  }

  // =========================================================================
  // 7. TECNOFIX: SIMULADOR DE ENSAMBLAJE DE PC CON PRECISIÓN
  // =========================================================================
  function buildTecnoFixAssembly() {
    const components = [
      { id: 'cpu', name: 'CPU Intel i9', icon: 'fa-microchip', slotName: 'Socket CPU' },
      { id: 'ram', name: 'RAM 32GB RGB', icon: 'fa-memory', slotName: 'Ranuras RAM' },
      { id: 'gpu', name: 'RTX 4080 GPU', icon: 'fa-tv', slotName: 'Ranura PCIe' },
      { id: 'ssd', name: 'SSD M.2 2TB', icon: 'fa-hard-drive', slotName: 'Slot M.2' },
      { id: 'psu', name: 'Fuente 850W', icon: 'fa-plug', slotName: 'Bahía PSU' }
    ];

    let selectedComp = null;
    let installedParts = {};

    interactiveArena.innerHTML = `
      <div class="tecnofix-assembly-ui">
        <div class="assembly-hud-bar">
          <span><i class="fa-solid fa-wrench"></i> Ensamble: <strong id="pc-count-txt">0 / 5</strong></span>
          <span id="pc-status-msg" style="color:var(--text-muted);">Toca una pieza y luego su ranura</span>
        </div>

        <div class="pc-chassis-stage">
          <div class="pc-slot-zone" data-slot="cpu">
            <i class="fa-solid fa-microchip slot-icon" style="font-size:1.3rem;"></i>
            <span style="font-size:0.7rem; font-weight:700;">Socket CPU</span>
          </div>
          <div class="pc-slot-zone" data-slot="ram">
            <i class="fa-solid fa-memory slot-icon" style="font-size:1.3rem;"></i>
            <span style="font-size:0.7rem; font-weight:700;">Ranuras RAM</span>
          </div>
          <div class="pc-slot-zone" data-slot="gpu">
            <i class="fa-solid fa-tv slot-icon" style="font-size:1.3rem;"></i>
            <span style="font-size:0.7rem; font-weight:700;">Puerto PCIe</span>
          </div>
          <div class="pc-slot-zone" data-slot="ssd">
            <i class="fa-solid fa-hard-drive slot-icon" style="font-size:1.3rem;"></i>
            <span style="font-size:0.7rem; font-weight:700;">Slot M.2</span>
          </div>
          <div class="pc-slot-zone" data-slot="psu" style="grid-column: span 2;">
            <i class="fa-solid fa-plug slot-icon" style="font-size:1.3rem;"></i>
            <span style="font-size:0.7rem; font-weight:700;">Bahía Fuente PSU</span>
          </div>
        </div>

        <div class="pc-parts-tray" id="pc-tray">
          ${components.map(c => `
            <div class="pc-part-card" data-comp="${c.id}">
              <i class="fa-solid ${c.icon}"></i>
              <span>${c.name}</span>
            </div>
          `).join('')}
        </div>

        <button id="btn-power-pc" class="btn-power-pc" disabled>
          <i class="fa-solid fa-power-off"></i> ⚡ ENCENDER COMPUTADOR GAMER
        </button>
      </div>
    `;

    const countTxt = document.getElementById('pc-count-txt');
    const statusMsg = document.getElementById('pc-status-msg');
    const powerBtn = document.getElementById('btn-power-pc');
    const partCards = document.querySelectorAll('.pc-part-card');
    const slotZones = document.querySelectorAll('.pc-slot-zone');

    partCards.forEach(card => {
      card.addEventListener('click', () => {
        const compId = card.getAttribute('data-comp');
        if (installedParts[compId]) return;

        sound.playClick();
        partCards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        selectedComp = compId;

        slotZones.forEach(z => {
          if (z.getAttribute('data-slot') === compId) z.classList.add('highlight');
          else z.classList.remove('highlight');
        });
      });
    });

    slotZones.forEach(slot => {
      slot.addEventListener('click', () => {
        const slotType = slot.getAttribute('data-slot');
        if (installedParts[slotType]) return;

        if (selectedComp === slotType) {
          sound.playSnap();
          installedParts[slotType] = true;
          slot.classList.remove('highlight');
          slot.classList.add('installed');
          slot.querySelector('span').textContent = '✓ Instalado';

          const card = document.querySelector(`.pc-part-card[data-comp="${slotType}"]`);
          if (card) {
            card.classList.remove('selected');
            card.classList.add('installed');
          }
          selectedComp = null;

          const totalInstalled = Object.keys(installedParts).length;
          countTxt.textContent = `${totalInstalled} / 5`;
          statusMsg.style.color = 'var(--green-accent)';
          statusMsg.textContent = '¡Componente ensamblado con precisión!';

          if (totalInstalled >= 5) {
            powerBtn.disabled = false;
            statusMsg.textContent = '¡Todos los componentes listos para encender!';
          }
        } else if (selectedComp) {
          sound.playHurt();
          statusMsg.style.color = '#f87171';
          statusMsg.textContent = 'Esta ranura no corresponde a la pieza seleccionada.';
        }
      });
    });

    powerBtn.addEventListener('click', () => {
      sound.playSuccess();
      powerBtn.disabled = true;
      powerBtn.classList.add('powered');
      powerBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Arrancando BIOS y RGB...';

      setTimeout(() => {
        powerBtn.innerHTML = '<i class="fa-solid fa-check"></i> ¡PC Operativo a 240 FPS!';
        completeCurrentChallenge('¡PC Gamer completamente ensamblado y servicio técnico TecnoFix certificado!');
      }, 1400);
    });

    activeGameCleanup = () => {};
  }

  // 11. CAMBIAR DESTINO ACTIVO
  function switchDestination(newIndex) {
    if (newIndex < 0) newIndex = destinations.length - 1;
    if (newIndex >= destinations.length) newIndex = 0;
    appState.currentIndex = newIndex;

    const dest = destinations[appState.currentIndex];

    missionDestPill.textContent = `DESTINO ${dest.id} • ${dest.name.toUpperCase()}`;
    const isStamped = !!appState.stamps[dest.id];
    if (isStamped) {
      destStatusBadge.className = 'dest-status-badge stamped';
      destStatusBadge.innerHTML = '<i class="fa-solid fa-circle-check"></i> <span>Acreditado 11-4</span>';
    } else {
      destStatusBadge.className = 'dest-status-badge';
      destStatusBadge.innerHTML = '<i class="fa-regular fa-circle-dot"></i> <span>Pendiente de Sello</span>';
    }

    if (gameVideo.getAttribute('src') !== dest.videoSrc) {
      gameVideo.src = dest.videoSrc;
      gameVideo.currentTime = 0;
    }

    briefingTitle.innerHTML = `<i class="fa-solid ${dest.icon}"></i> ${dest.briefing.title}`;
    briefingDesc.textContent = dest.briefing.desc;
    briefingReq.textContent = `Desafío: ${dest.briefing.req}`;

    minigameTitle.innerHTML = `<i class="fa-solid ${dest.icon}"></i> ${dest.game.title}`;
    minigameSubtitle.textContent = dest.game.subtitle;
    minigameBadge.textContent = dest.game.badge;

    updateBackground(dest.bgImage);
    loadMinigame(dest);
    renderDock();
    updatePassportStats();
  }

  // 12. GESTIÓN DE MODALES
  openPassportBtn.addEventListener('click', () => {
    sound.playClick();
    renderPassportModal();
    passportModal.classList.add('active');
  });

  closePassportBtn.addEventListener('click', () => {
    sound.playClick();
    passportModal.classList.remove('active');
  });

  openVipBtn.addEventListener('click', () => {
    sound.playClick();
    passportModal.classList.remove('active');
    vipModal.classList.add('active');
  });

  closeVipBtn.addEventListener('click', () => {
    sound.playClick();
    vipModal.classList.remove('active');
  });

  [passportModal, vipModal].forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  });

  window.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT') return;
    if (e.key === 'ArrowRight' && e.ctrlKey) {
      sound.playClick();
      switchDestination(appState.currentIndex + 1);
    } else if (e.key === 'ArrowLeft' && e.ctrlKey) {
      sound.playClick();
      switchDestination(appState.currentIndex - 1);
    }
  });

  // 13. INICIALIZACIÓN
  renderDock();
  switchDestination(0);
});
