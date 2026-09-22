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
      osc.frequency.setValueAtTime(880, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(110, this.ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.12);
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
      osc.type = 'highpass';
      osc.frequency.setValueAtTime(1200, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.005, this.ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
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

  // 2. DATASET DE LOS 7 DESTINOS Y SUS NUEVOS MINIJUEGOS
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
        desc: 'Plataforma para vuelos comerciales y asistencia de viaje. Pilota la aeronave por el corredor aéreo esquivando turbulencias hasta aterrizar en tu destino.',
        req: 'Pilota la nave VitLine, dispara a las turbulencias y alcanza el 100% de la distancia de vuelo.'
      },
      game: {
        title: 'Misión Aérea VitLine',
        subtitle: 'Arcade Clásico de Naves Vertical',
        badge: 'Shooter Vertical'
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
        desc: 'Agencia de viajes dedicada a crear experiencias seguras e itinerarios personalizados por Colombia. Explora el laberinto y recolecta las letras de la palabra DALULÚ.',
        req: 'Encuentra las 6 letras de DALULÚ en el laberinto y llega a la salida turística.'
      },
      game: {
        title: 'Laberinto de la Palabra',
        subtitle: 'Acertijo Turístico DaLulú',
        badge: 'Laberinto & Palabra'
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
        desc: 'Plataforma de belleza y estilismo profesional. Pon a prueba tu pulso como en la prueba de la galleta de Squid Game: realiza el corte de cabello perfecto siguiendo la silueta guía sin desviarte.',
        req: 'Desliza las tijeras con precisión milimétrica a lo largo del contorno sin salirte del margen seguro.'
      },
      game: {
        title: 'Corte de Precisión Estético',
        subtitle: 'Juego de Pulso Estilo Squid Game',
        badge: 'Precisión & Pulso'
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
        desc: 'Plataforma comprometida con el compostaje y la regeneración ecológica. Guía al gusano ecológico para que devore manzanas orgánicas y crezca sucesivamente.',
        req: 'Come 5 manzanas orgánicas con el gusano para nutrir el suelo sin chocar contra las paredes.'
      },
      game: {
        title: 'Gusano de las Manzanas',
        subtitle: 'Snake Clásico de Crecimiento',
        badge: 'Gusano & Manzanas'
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
        desc: 'Refugio de rescate animal y adopción responsable. El perrito Toby corre velozmente por la ciudad superando obstáculos al estilo del dinosaurio de Chrome para llegar al centro de adopción.',
        req: 'Salta los obstáculos tocando la pantalla o con espacio y llega al refugio canino.'
      },
      game: {
        title: 'Carrera del Perrito Rescatado',
        subtitle: 'Runner Tipo Dinosaurio de Google',
        badge: 'Runner Canino'
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
        desc: 'Academia interactiva de pensamiento computacional. Programa al robot SoftBot mediante órdenes de dirección (Arriba, Abajo, Izquierda, Derecha) para llevarlo a la meta sin escribir código.',
        req: 'Construye la secuencia de órdenes con los botones direccionales y presiona EJECUTAR para guiar al robot.'
      },
      game: {
        title: 'Programación de Robot',
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
  const STORAGE_KEY = 'pasaporte_11_4_state_v2';
  let appState = {
    currentIndex: 0,
    stamps: {},
    passengerName: 'Evaluador Oficial 11-4',
    soundEnabled: true,
    isFullscreen: false
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

  // Cleanup de timers y animación del minijuego activo
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
      // Si el usuario presionó Escape en modo nativo
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

    // Estampar en estado
    appState.stamps[dest.id] = true;
    persistState();
    renderDock();
    updatePassportStats();

    // Actualizar badges
    destStatusBadge.className = 'dest-status-badge stamped';
    destStatusBadge.innerHTML = '<i class="fa-solid fa-circle-check"></i> <span>Acreditado 11-4</span>';
    stampAwardAlert.classList.add('active');
    stampAwardAlert.innerHTML = `<i class="fa-solid fa-certificate"></i> <span>${successMsg || '¡Desafío completado con éxito!'}</span>`;

    claimStampBtn.disabled = true;
    claimStampText.textContent = '¡Sello Oficial Estampado!';

    // Desplegar Overlay de Victoria
    victoryTitle.textContent = `¡DESAFÍO ${dest.name.toUpperCase()} COMPLETADO!`;
    victoryDesc.textContent = successMsg || 'Has acreditado este proyecto exitosamente en tu pasaporte.';
    victoryStampShowcase.innerHTML = `<i class="fa-solid ${dest.icon}"></i>`;
    gameVictoryOverlay.classList.add('active');

    // Configurar cuenta regresiva de 3.5 segundos hacia el siguiente destino
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
      // Se completaron los 7 destinos
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
      stampAwardAlert.innerHTML = '<i class="fa-solid fa-circle-check"></i> <span>¡Este destino ya está estampado y verificado! Puedes volver a jugarlo.</span>';
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
  // 1. VITLINE: SHOOT 'EM UP VERTICAL ARCADE
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

        <div class="vitline-mobile-controls">
          <button id="v-shoot-btn" class="btn-shoot-action">
            <i class="fa-solid fa-bolt"></i> DISPARAR LÁSER
          </button>
        </div>
      </div>
    `;

    const canvas = document.getElementById('vitline-canvas');
    const wrap = document.getElementById('vitline-canvas-wrap');
    const ctx = canvas.getContext('2d');
    const distTxt = document.getElementById('v-dist-txt');
    const scoreTxt = document.getElementById('v-score-txt');
    const shieldTxt = document.getElementById('v-shield-txt');
    const shootBtn = document.getElementById('v-shoot-btn');

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

    // Inicializar nubes de fondo
    for (let i = 0; i < 6; i++) {
      clouds.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: 15 + Math.random() * 25,
        speed: 0.6 + Math.random() * 0.8
      });
    }

    function shoot() {
      if (gameWon) return;
      sound.playLaser();
      bullets.push({ x: plane.x - 6, y: plane.y - 12, vx: 0, vy: -7 });
      bullets.push({ x: plane.x + 6, y: plane.y - 12, vx: 0, vy: -7 });
    }

    shootBtn.addEventListener('click', (e) => {
      e.preventDefault();
      shoot();
    });

    // Control táctil directo sobre el canvas (Móvil)
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
    canvas.addEventListener('touchstart', (e) => {
      handleTouchMove(e);
      shoot();
    }, { passive: false });

    // Controles de Teclado
    const keys = {};
    function onKeyDown(e) {
      if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', ' ', 'w', 'a', 's', 'd'].includes(e.key)) {
        keys[e.key] = true;
        if (e.key === ' ') {
          e.preventDefault();
          shoot();
        }
      }
    }
    function onKeyUp(e) { keys[e.key] = false; }
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);

    function loop() {
      if (gameWon) return;

      // Teclado
      if (keys['ArrowLeft'] || keys['a']) plane.x = Math.max(16, plane.x - plane.speed);
      if (keys['ArrowRight'] || keys['d']) plane.x = Math.min(canvas.width - 16, plane.x + plane.speed);
      if (keys['ArrowUp'] || keys['w']) plane.y = Math.max(30, plane.y - plane.speed);
      if (keys['ArrowDown'] || keys['s']) plane.y = Math.min(canvas.height - 20, plane.y + plane.speed);

      // Distancia
      distance += 0.09;
      if (distance >= 100) {
        distance = 100;
        gameWon = true;
        distTxt.textContent = '100%';
        completeCurrentChallenge('¡Aterrizaje en destino VitLine completado con éxito!');
        return;
      }
      distTxt.textContent = `${Math.floor(distance)}%`;

      // Limpiar y fondo
      ctx.fillStyle = '#050c1b';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Nubes de fondo
      ctx.fillStyle = 'rgba(255, 255, 255, 0.06)';
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

      // Spawn de obstáculos (Turbulencias / Drones)
      enemySpawnCounter++;
      if (enemySpawnCounter > 35) {
        enemySpawnCounter = 0;
        enemies.push({
          x: 20 + Math.random() * (canvas.width - 40),
          y: -20,
          w: 22,
          h: 22,
          speed: 1.8 + Math.random() * 1.5,
          type: Math.random() > 0.5 ? 'storm' : 'drone'
        });
      }

      // Actualizar y dibujar balas
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

      // Actualizar y dibujar enemigos
      for (let i = enemies.length - 1; i >= 0; i--) {
        const en = enemies[i];
        en.y += en.speed;

        // Dibujar obstáculo
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
          const dist = Math.hypot(b.x - en.x, b.y - en.y);
          if (dist < 18) {
            sound.playSnap();
            score += 15;
            scoreTxt.textContent = score;
            // Partículas
            for (let p = 0; p < 6; p++) {
              particles.push({
                x: en.x, y: en.y,
                vx: (Math.random() - 0.5) * 4,
                vy: (Math.random() - 0.5) * 4,
                alpha: 1
              });
            }
            enemies.splice(i, 1);
            bullets.splice(j, 1);
            break;
          }
        }

        // Colisión con el avión
        if (enemies[i] && Math.hypot(plane.x - en.x, plane.y - en.y) < 22) {
          shields--;
          sound.playLaser();
          enemies.splice(i, 1);
          shieldTxt.textContent = shields === 2 ? '❤️❤️' : (shields === 1 ? '❤️' : '💔');
          if (shields <= 0) {
            shields = 3;
            shieldTxt.textContent = '❤️❤️❤️';
          }
        }

        if (en.y > canvas.height + 25) enemies.splice(i, 1);
      }

      // Dibujar partículas
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.05;
        ctx.fillStyle = `rgba(56, 189, 248, ${p.alpha})`;
        ctx.fillRect(p.x, p.y, 3, 3);
        if (p.alpha <= 0) particles.splice(i, 1);
      }

      // Dibujar avión del jugador VitLine
      ctx.save();
      ctx.translate(plane.x, plane.y);
      // Fuego de propulsión
      ctx.fillStyle = '#f59e0b';
      ctx.beginPath();
      ctx.moveTo(-5, 14);
      ctx.lineTo(0, 18 + Math.random() * 8);
      ctx.lineTo(5, 14);
      ctx.fill();

      // Fuselaje del avión
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

      // Cabina
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
  // 2. DALULÚ TRAVEL: LABERINTO DE LA PALABRA
  // =========================================================================
  function buildDaluluMaze() {
    const TARGET_WORD = 'DALULU';
    let collectedLetters = [];

    // Laberinto 7x7 (0 = camino, 1 = muro, 2 = salida)
    const mazeLayout = [
      [0, 0, 1, 0, 0, 0, 0],
      [1, 0, 1, 0, 1, 1, 0],
      [0, 0, 0, 0, 1, 0, 0],
      [0, 1, 1, 0, 0, 0, 1],
      [0, 0, 1, 1, 1, 0, 0],
      [1, 0, 0, 0, 1, 1, 0],
      [0, 0, 1, 0, 0, 0, 2]
    ];

    // Posiciones de las 6 letras de D-A-L-U-L-U
    const letterSpawns = [
      { r: 0, c: 1, char: 'D', collected: false },
      { r: 0, c: 5, char: 'A', collected: false },
      { r: 2, c: 2, char: 'L', collected: false },
      { r: 3, c: 4, char: 'U', collected: false },
      { r: 5, c: 3, char: 'L', collected: false },
      { r: 4, c: 6, char: 'U', collected: false }
    ];

    let playerPos = { r: 0, c: 0 };

    interactiveArena.innerHTML = `
      <div class="dalulu-maze-ui">
        <div class="maze-word-tracker" id="maze-word-tracker">
          ${TARGET_WORD.split('').map((char, i) => `
            <div class="letter-tile-slot" id="slot-letter-${i}">_</div>
          `).join('')}
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
              cell.innerHTML = `<span class="maze-letter-pickup">${letter.char}</span>`;
            } else if (cellType === 2) {
              cell.innerHTML = '<span style="font-size:0.8rem;">🏁</span>';
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
      if (mazeLayout[nr][nc] === 1) return; // Muro

      playerPos.r = nr;
      playerPos.c = nc;
      sound.playStep();

      // Recolección de letras
      const letter = letterSpawns.find(l => l.r === nr && l.c === nc && !l.collected);
      if (letter) {
        letter.collected = true;
        collectedLetters.push(letter.char);
        sound.playSnap();
        const slot = document.getElementById(`slot-letter-${collectedLetters.length - 1}`);
        if (slot) {
          slot.textContent = letter.char;
          slot.classList.add('collected');
        }
      }

      // Verificar salida
      if (mazeLayout[nr][nc] === 2) {
        if (collectedLetters.length >= TARGET_WORD.length) {
          completeCurrentChallenge('¡Palabra DALULÚ descubierta y ruta turística completada!');
        } else {
          sound.playClick();
        }
      }

      renderMaze();
    }

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
  // 3. GLOWSMEC: CORTE DE CABELLO DE PRECISIÓN (ESTILO SQUID GAME DALGONA)
  // =========================================================================
  function buildGlowsmecPrecision() {
    interactiveArena.innerHTML = `
      <div class="glowsmec-precision-ui">
        <div class="precision-hud-bar">
          <span><i class="fa-solid fa-scissors"></i> Progreso de Corte: <strong id="glow-pct">0%</strong></span>
          <div style="display: flex; align-items: center; gap: 0.35rem;">
            <span>Pulso:</span>
            <div class="tension-meter-track">
              <div id="glow-tension" class="tension-meter-fill"></div>
            </div>
          </div>
        </div>

        <div class="haircut-canvas-stage" id="haircut-canvas-stage">
          <canvas id="glowsmec-canvas"></canvas>
        </div>

        <p class="precision-instructions-hint">
          ✂️ Mantén presionado y desliza la tijera por la línea punteada rosa sin salirte.
        </p>
      </div>
    `;

    const canvas = document.getElementById('glowsmec-canvas');
    const stage = document.getElementById('haircut-canvas-stage');
    const ctx = canvas.getContext('2d');
    const pctTxt = document.getElementById('glow-pct');
    const tensionBar = document.getElementById('glow-tension');

    function resize() {
      canvas.width = stage.clientWidth || 320;
      canvas.height = stage.clientHeight || 240;
    }
    resize();

    // Generar curva de corte de cabello (silueta perfil elegante)
    const points = [];
    const numPoints = 28;
    for (let i = 0; i < numPoints; i++) {
      const t = i / (numPoints - 1);
      const px = canvas.width * 0.18 + t * (canvas.width * 0.64);
      // Curva de peinado fade con ondas
      const py = canvas.height * 0.55 + Math.sin(t * Math.PI * 1.5) * 45;
      points.push({ x: px, y: py, cut: false });
    }

    let isCutting = false;
    let cutCount = 0;
    let tension = 0;
    let gameWon = false;

    function drawScene(currentPos) {
      ctx.fillStyle = '#030712';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Silueta de cabeza/estilismo
      ctx.fillStyle = '#1e293b';
      ctx.beginPath();
      ctx.arc(canvas.width * 0.5, canvas.height * 0.7, canvas.height * 0.38, 0, Math.PI * 2);
      ctx.fill();

      // Línea guía original (punteada)
      ctx.strokeStyle = 'rgba(236, 72, 153, 0.4)';
      ctx.lineWidth = 14;
      ctx.lineCap = 'round';
      ctx.beginPath();
      points.forEach((p, idx) => {
        if (idx === 0) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
      });
      ctx.stroke();

      // Línea de corte trazada
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 4;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      points.forEach((p, idx) => {
        if (idx === 0) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
      });
      ctx.stroke();
      ctx.setLineDash([]);

      // Puntos ya cortados
      points.forEach((p) => {
        if (p.cut) {
          ctx.fillStyle = '#38bdf8';
          ctx.beginPath();
          ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Herramienta de corte en la posición actual
      if (currentPos) {
        ctx.fillStyle = '#ec4899';
        ctx.font = '20px sans-serif';
        ctx.fillText('✂️', currentPos.x - 10, currentPos.y - 4);
      }
    }

    drawScene(null);

    function handlePointer(x, y) {
      if (gameWon) return;
      let minDistance = 999;
      let closestIdx = -1;

      points.forEach((p, idx) => {
        const d = Math.hypot(p.x - x, p.y - y);
        if (d < minDistance) {
          minDistance = d;
          closestIdx = idx;
        }
      });

      if (minDistance < 22) {
        // En la zona segura
        tension = Math.max(0, tension - 3);
        if (!points[closestIdx].cut) {
          points[closestIdx].cut = true;
          cutCount++;
          sound.playSnip();
        }
      } else {
        // Desviado de la línea
        tension = Math.min(100, tension + 4);
      }

      tensionBar.style.width = `${tension}%`;
      const pct = Math.round((cutCount / points.length) * 100);
      pctTxt.textContent = `${pct}%`;

      drawScene({ x, y });

      if (cutCount >= points.length && tension < 60) {
        gameWon = true;
        completeCurrentChallenge('¡Corte de cabello impecable con precisión de 5 estrellas!');
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
  // 4. GREENTASK: GUSANO CON LA MANZANA (SNAKE CLÁSICO)
  // =========================================================================
  function buildGreenTaskSnake() {
    interactiveArena.innerHTML = `
      <div class="greentask-snake-ui">
        <div class="snake-hud-bar">
          <span><i class="fa-solid fa-apple-whole"></i> Manzanas: <strong id="snake-apple-txt">0 / 5</strong></span>
          <span><i class="fa-solid fa-trophy"></i> Meta: 5 manzanas</span>
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

      // Borde envolvente
      if (head.x < 0) head.x = GRID_SIZE - 1;
      if (head.x >= GRID_SIZE) head.x = 0;
      if (head.y < 0) head.y = GRID_SIZE - 1;
      if (head.y >= GRID_SIZE) head.y = 0;

      // Comer manzana
      if (head.x === apple.x && head.y === apple.y) {
        sound.playEat();
        applesEaten++;
        appleTxt.textContent = `${applesEaten} / 5`;
        spawnApple();
        if (applesEaten >= 5) {
          gameWon = true;
          clearInterval(snakeInterval);
          completeCurrentChallenge('¡Gusano ecológico alimentado y compostaje GreenTask completado!');
          return;
        }
      } else {
        snake.pop();
      }

      snake.unshift(head);

      // Dibujar
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
          // Ojos del gusano
          ctx.fillStyle = '#030712';
          ctx.beginPath();
          ctx.arc((seg.x + 0.3) * tileW, (seg.y + 0.35) * tileH, 2, 0, Math.PI * 2);
          ctx.arc((seg.x + 0.7) * tileW, (seg.y + 0.35) * tileH, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      });
    }

    snakeInterval = setInterval(tick, 140);

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
  // 5. PATITAS AL RESCATE: CHROME DINO RUNNER CON PERRO
  // =========================================================================
  function buildPatitasRunner() {
    interactiveArena.innerHTML = `
      <div class="patitas-runner-ui">
        <div class="runner-hud-bar">
          <span><i class="fa-solid fa-flag-checkered"></i> Refugio: <strong id="runner-dist-txt">0%</strong></span>
          <span><i class="fa-solid fa-heart"></i> Misión Adopción</span>
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
    const jumpBtn = document.getElementById('runner-jump-btn');

    canvas.width = wrap.clientWidth || 320;
    canvas.height = wrap.clientHeight || 200;

    let animId = null;
    let groundY = canvas.height - 35;
    let dog = { x: 38, y: groundY - 26, vy: 0, gravity: 0.65, isJumping: false, frame: 0 };
    let obstacles = [];
    let distance = 0;
    let spawnCounter = 0;
    let gameWon = false;

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

    function loop() {
      if (gameWon) return;

      // Actualizar física del perro
      dog.y += dog.vy;
      dog.vy += dog.gravity;
      if (dog.y >= groundY - 26) {
        dog.y = groundY - 26;
        dog.vy = 0;
        dog.isJumping = false;
      }
      dog.frame++;

      // Progreso de distancia
      distance += 0.12;
      distTxt.textContent = `${Math.min(100, Math.floor(distance))}%`;
      if (distance >= 100) {
        distance = 100;
        gameWon = true;
        completeCurrentChallenge('¡El perrito llegó a salvo al refugio de Patitas al Rescate!');
        return;
      }

      // Spawn de obstáculos
      spawnCounter++;
      if (spawnCounter > 55) {
        spawnCounter = 0;
        obstacles.push({
          x: canvas.width + 10,
          y: groundY - 22,
          w: 18,
          h: 22,
          type: Math.random() > 0.5 ? 'cone' : 'fence'
        });
      }

      // Dibujar
      ctx.fillStyle = '#071020';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Línea de tierra
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, groundY);
      ctx.lineTo(canvas.width, groundY);
      ctx.stroke();

      // Obstáculos
      for (let i = obstacles.length - 1; i >= 0; i--) {
        const obs = obstacles[i];
        obs.x -= 3.5;

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

        // Colisión suave (reinicia un poco de distancia sin castigar al usuario)
        if (Math.hypot(dog.x - obs.x, dog.y - obs.y) < 18) {
          distance = Math.max(0, distance - 4);
          sound.playLaser();
          obstacles.splice(i, 1);
        } else if (obs.x < -20) {
          obstacles.splice(i, 1);
        }
      }

      // Dibujar perrito
      ctx.font = '24px sans-serif';
      ctx.fillText('🐶', dog.x - 12, dog.y + 20);

      animId = requestAnimationFrame(loop);
    }

    animId = requestAnimationFrame(loop);

    activeGameCleanup = () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('keydown', onKeyDown);
    };
  }

  // =========================================================================
  // 6. SOFTPLAY: PROGRAMAR ROBOT CON BOTONES DE ÓRDENES
  // =========================================================================
  function buildSoftPlayGame() {
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
          <span style="font-size:0.72rem; color:var(--text-muted);">Secuencia vacía. Agrega órdenes:</span>
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

    // Agregar órdenes
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

    // Ejecutar programa paso a paso
    execBtn.addEventListener('click', () => {
      if (program.length === 0) return;
      execBtn.disabled = true;
      robotPos = { r: 0, c: 0 };
      renderBoard();

      let stepIdx = 0;
      const stepInterval = setInterval(() => {
        // Desmarcar anterior
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

        // Chequear límites y obstáculos
        if (nr >= 0 && nr < GRID_SIZE && nc >= 0 && nc < GRID_SIZE) {
          const hitObs = obstacles.some(o => o.r === nr && o.c === nc);
          if (!hitObs) {
            robotPos.r = nr;
            robotPos.c = nc;
            sound.playStep();
          } else {
            sound.playLaser();
          }
        } else {
          sound.playLaser();
        }

        renderBoard();
        stepIdx++;
      }, 350);
    });
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
            <span style="font-size:0.7rem; font-weight:700;">Slot SSD M.2</span>
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

    // Selección de componente
    partCards.forEach(card => {
      card.addEventListener('click', () => {
        const compId = card.getAttribute('data-comp');
        if (installedParts[compId]) return;

        sound.playClick();
        partCards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        selectedComp = compId;

        // Resaltar ranura correspondiente
        slotZones.forEach(z => {
          if (z.getAttribute('data-slot') === compId) z.classList.add('highlight');
          else z.classList.remove('highlight');
        });
      });
    });

    // Colocación en la ranura
    slotZones.forEach(slot => {
      slot.addEventListener('click', () => {
        const slotType = slot.getAttribute('data-slot');
        if (installedParts[slotType]) return;

        if (selectedComp === slotType) {
          // Encaje perfecto
          sound.playSnap();
          installedParts[slotType] = true;
          slot.classList.remove('highlight');
          slot.classList.add('installed');
          slot.querySelector('span').textContent = '✓ Instalado';

          // Marcar tarjeta de componente como instalada
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
          sound.playLaser();
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
  }

  // 11. CAMBIAR DESTINO ACTIVO
  function switchDestination(newIndex) {
    if (newIndex < 0) newIndex = destinations.length - 1;
    if (newIndex >= destinations.length) newIndex = 0;
    appState.currentIndex = newIndex;

    const dest = destinations[appState.currentIndex];

    // Encabezado
    missionDestPill.textContent = `DESTINO ${dest.id} • ${dest.name.toUpperCase()}`;
    const isStamped = !!appState.stamps[dest.id];
    if (isStamped) {
      destStatusBadge.className = 'dest-status-badge stamped';
      destStatusBadge.innerHTML = '<i class="fa-solid fa-circle-check"></i> <span>Acreditado 11-4</span>';
    } else {
      destStatusBadge.className = 'dest-status-badge';
      destStatusBadge.innerHTML = '<i class="fa-regular fa-circle-dot"></i> <span>Pendiente de Sello</span>';
    }

    // Video y Misión
    if (gameVideo.getAttribute('src') !== dest.videoSrc) {
      gameVideo.src = dest.videoSrc;
      gameVideo.currentTime = 0;
    }

    briefingTitle.innerHTML = `<i class="fa-solid ${dest.icon}"></i> ${dest.briefing.title}`;
    briefingDesc.textContent = dest.briefing.desc;
    briefingReq.textContent = `Desafío: ${dest.briefing.req}`;

    // Minijuego
    minigameTitle.innerHTML = `<i class="fa-solid ${dest.icon}"></i> ${dest.game.title}`;
    minigameSubtitle.textContent = dest.game.subtitle;
    minigameBadge.textContent = dest.game.badge;

    // Fondo
    updateBackground(dest.bgImage);

    // Cargar Minijuego
    loadMinigame(dest);

    // Actualizar dock
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

  // Atajos de Teclado
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
