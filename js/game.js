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
        desc: 'Plataforma para vuelos comerciales y reservas. Destruye a los drones y a los densos muros blindados (50 impactos para destruirlos o esquívalos por los laterales) con disparo continuo hasta aterrizar.',
        req: 'Pilota la nave, destruye o esquiva los muros blindados de 50 de vida y alcanza el 100% de distancia.'
      },
      game: {
        title: 'Misión Aérea VitLine',
        subtitle: 'Muros Blindados (50 HP) • Esquivar o Destruir',
        badge: 'Muros de 50 HP'
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
        desc: 'Agencia de turismo por Colombia. Supera 3 niveles de alta dificultad recolectando las letras en orden estricto y con límite de movimientos. ¡Si pisas una letra incorrecta el nivel se reinicia!',
        req: 'Supera los 3 niveles recolectando las letras en orden estricto antes de agotar tus movimientos.'
      },
      game: {
        title: 'Laberintos Turísticos (3 Niveles)',
        subtitle: '3 Niveles • Movimientos Limitados • Orden Estricto',
        badge: '3 Niveles • Pasos Limitados'
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
      icon: 'fa-spray-can-sparkles',
      briefing: {
        title: 'GlowSmec Salón & Spa',
        desc: 'Simulador de atención rápida estilo Cooking Salon. Atiende con agilidad a los 15 clientes entregándoles los productos solicitados antes de que se agoten sus 10 segundos de paciencia.',
        req: 'Atiende a los 15 clientes entregando sus cosméticos a tiempo (10 segundos por cliente).'
      },
      game: {
        title: 'Atención en Salón de Belleza',
        subtitle: 'Estilo Cooking Salon • 15 Clientes • 10s de Paciencia',
        badge: '15 Clientes (10s)'
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
        desc: 'Plataforma ecológica y compostaje. Guía al gusano con animación fluida para comer 10 manzanas. ¡Cuidado! Chocar contra las paredes o morderte causa reinicio a 0.',
        req: 'Come 10 manzanas con movimientos fluidos sin tocar paredes mortales ni tu propio cuerpo.'
      },
      game: {
        title: 'Gusano Ecológico (Animación Fluida)',
        subtitle: 'Come 10 Manzanas • Animación 60 FPS • Pared Mortal',
        badge: 'Animación Fluida • 10 Manzanas'
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
        title: 'Patitas al Rescate (Geometry Dash Style)',
        desc: 'Refugio de rescate animal. Carrera neón estilo Geometry Dash: salta picos y baja/deslízate rápidamente bajo obstáculos aéreos con controles dedicados de SALTAR y BAJAR.',
        req: 'Supera la pista neón esquivando picos y barreras usando SALTAR y BAJAR sin perder tus 3 vidas.'
      },
      game: {
        title: 'Carrera Neón Geometry Dash',
        subtitle: 'Controles: SALTAR y BAJAR • Picos Neón y Deslizamiento',
        badge: 'Estilo Geometry Dash'
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
        desc: 'Academia de lógica computacional. Resuelve la serie de 10 acertijos algorítmicos programando los movimientos del robot con botones para esquivar obstáculos y alcanzar la meta.',
        req: 'Programa y resuelve con éxito los 10 acertijos de ruta para graduarte en SoftPlay.'
      },
      game: {
        title: 'Programador de Robots (10 Acertijos)',
        subtitle: 'Serie Completa de 10 Niveles Algorítmicos',
        badge: '10 Acertijos'
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
      // Todos los minijuegos concluidos: salir de pantalla completa para ver Pasaporte y Sala VIP
      toggleFullscreen(false);
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
        buildGlowsmecSalon();
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

          <!-- Pantalla de Inicio con Botón Play y Pantalla Completa Automática -->
          <div class="vitline-start-overlay" id="vitline-start-overlay">
            <div class="vitline-start-modal">
              <div class="vitline-start-badge">
                <i class="fa-solid fa-plane-departure"></i> Destino 01 • VitLine
              </div>
              <h3 class="vitline-start-title">Misión Aérea VitLine</h3>
              <p class="vitline-start-desc">
                Despega en la plataforma de reservas comerciales. Elimina los drones enemigos con disparo automático continuo y esquiva los obstáculos hasta llegar al destino.
              </p>
              <div class="vitline-start-features">
                <div class="feature-tag"><i class="fa-solid fa-expand"></i> Pantalla Completa Automática</div>
                <div class="feature-tag"><i class="fa-solid fa-bolt"></i> Disparo Infinito Activo</div>
                <div class="feature-tag"><i class="fa-solid fa-shield-heart"></i> 3 Vidas de Escudo</div>
                <div class="feature-tag"><i class="fa-solid fa-cubes-stacked"></i> Muros Blindados (50 HP)</div>
              </div>
              <button id="vitline-start-btn" class="btn-play-vitline">
                <i class="fa-solid fa-play"></i> JUGAR (PLAY)
              </button>
            </div>
          </div>
        </div>

        <div style="text-align:center; font-size:0.72rem; color:var(--blue-accent); padding:0.2rem;">
          ⚡ Disparo infinito activo • Destruye muros blindados (50 disparos) o esquívalos por los lados
        </div>
      </div>
    `;

    const canvas = document.getElementById('vitline-canvas');
    const wrap = document.getElementById('vitline-canvas-wrap');
    const ctx = canvas.getContext('2d');
    const distTxt = document.getElementById('v-dist-txt');
    const scoreTxt = document.getElementById('v-score-txt');
    const shieldTxt = document.getElementById('v-shield-txt');
    const startOverlay = document.getElementById('vitline-start-overlay');
    const startBtn = document.getElementById('vitline-start-btn');

    let isPlaying = false;

    function resizeCanvas() {
      canvas.width = wrap.clientWidth || 320;
      canvas.height = wrap.clientHeight || 260;
      if (!isPlaying && plane) {
        plane.x = canvas.width / 2;
        plane.y = canvas.height - 40;
      }
    }

    let animId = null;
    let plane = { x: (wrap.clientWidth || 320) / 2, y: (wrap.clientHeight || 260) - 40, w: 28, h: 32, speed: 4 };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    if (startBtn && startOverlay) {
      startBtn.addEventListener('click', () => {
        toggleFullscreen(true);
        startOverlay.style.display = 'none';
        isPlaying = true;
        resizeCanvas();
        setTimeout(resizeCanvas, 120);
        setTimeout(resizeCanvas, 300);
      });
    }

    let bullets = [];
    let enemies = [];
    let particles = [];
    let clouds = [];
    let score = 0;
    let distance = 0;
    let shields = 3;
    let gameWon = false;
    let enemySpawnCounter = 0;
    let wallSpawnCounter = 0;
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

    function drawPlane(px, py) {
      ctx.save();
      ctx.translate(px, py);
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
    }

    function loop() {
      if (gameWon) return;

      ctx.fillStyle = '#050c1b';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Nubes lentas
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      clouds.forEach(c => {
        c.y += isPlaying ? c.speed : c.speed * 0.4;
        if (c.y > canvas.height + c.r) {
          c.y = -c.r;
          c.x = Math.random() * canvas.width;
        }
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Si el jugador no ha pulsado JUGAR (PLAY), se mantiene la nave en reposo decorativo
      if (!isPlaying) {
        drawPlane(plane.x, plane.y);
        animId = requestAnimationFrame(loop);
        return;
      }

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

      // Dibujar Drones Enemigos con barra de 3 vidas, fondo transparente y aspas giratorias
      function drawEnemyDrone(x, y, frame, type, hp, maxHp, hitFlash) {
        ctx.save();
        ctx.translate(x, y);
        const rotorAngle = (frame * 0.45) % (Math.PI * 2);

        // Resplandor de impacto
        if (hitFlash && hitFlash > 0) {
          ctx.shadowColor = '#38bdf8';
          ctx.shadowBlur = 14;
        }

        // Barra de 3 Vidas (HP) del Drone
        const barW = 22;
        const barH = 3.5;
        const barX = -barW / 2;
        const barY = -19;
        ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
        ctx.fillRect(barX - 1, barY - 1, barW + 2, barH + 2);

        const segW = 6;
        for (let k = 0; k < 3; k++) {
          if (k < (hp !== undefined ? hp : 3)) {
            ctx.fillStyle = hp === 3 ? '#22c55e' : (hp === 2 ? '#f59e0b' : '#ef4444');
          } else {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
          }
          ctx.fillRect(barX + k * (segW + 1), barY, segW, barH);
        }

        if (type === 'assault') {
          // Drone de Asalto Pesado (Quadcopter en 'X' sin fondo)
          ctx.strokeStyle = hitFlash > 0 ? '#38bdf8' : '#64748b';
          ctx.lineWidth = 2.8;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(-12, -12); ctx.lineTo(12, 12);
          ctx.moveTo(12, -12); ctx.lineTo(-12, 12);
          ctx.stroke();

          // 4 Motores y hélices transparentes girando
          const rotors = [[-12, -12], [12, -12], [-12, 12], [12, 12]];
          rotors.forEach(([rx, ry], idx) => {
            ctx.fillStyle = '#1e293b';
            ctx.beginPath();
            ctx.arc(rx, ry, 3.5, 0, Math.PI * 2);
            ctx.fill();

            ctx.save();
            ctx.translate(rx, ry);
            ctx.rotate(rotorAngle * (idx % 2 === 0 ? 1 : -1));
            ctx.strokeStyle = 'rgba(239, 68, 68, 0.85)';
            ctx.lineWidth = 1.6;
            ctx.beginPath();
            ctx.moveTo(-8, 0); ctx.lineTo(8, 0);
            ctx.stroke();
            ctx.restore();
          });

          // Chasis central metálico futurista
          ctx.fillStyle = hitFlash > 0 ? '#1e293b' : '#0f172a';
          ctx.strokeStyle = '#ef4444';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.roundRect(-8, -8, 16, 16, 4);
          ctx.fill();
          ctx.stroke();

          // Sensor óptico hostil con resplandor carmesí
          ctx.fillStyle = '#ef4444';
          ctx.shadowColor = '#ef4444';
          ctx.shadowBlur = 9;
          ctx.beginPath();
          ctx.arc(0, 0, 3.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        } else {
          // Drone Caza de Reconocimiento (Bi-rotor en flecha sin fondo)
          ctx.fillStyle = hitFlash > 0 ? '#334155' : '#1e293b';
          ctx.strokeStyle = '#f59e0b';
          ctx.lineWidth = 1.6;
          ctx.beginPath();
          ctx.moveTo(0, 11);
          ctx.lineTo(13, -5);
          ctx.lineTo(7, -11);
          ctx.lineTo(0, -6);
          ctx.lineTo(-7, -11);
          ctx.lineTo(-13, -5);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();

          // Rotores duales en las alas
          [[-12, -5], [12, -5]].forEach(([rx, ry], idx) => {
            ctx.fillStyle = '#334155';
            ctx.beginPath();
            ctx.arc(rx, ry, 3, 0, Math.PI * 2);
            ctx.fill();

            ctx.save();
            ctx.translate(rx, ry);
            ctx.rotate(rotorAngle * (idx === 0 ? 1 : -1));
            ctx.strokeStyle = 'rgba(245, 158, 11, 0.85)';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(-7, 0); ctx.lineTo(7, 0);
            ctx.stroke();
            ctx.restore();
          });

          // Ojo sensor ámbar
          ctx.fillStyle = '#fbbf24';
          ctx.shadowColor = '#f59e0b';
          ctx.shadowBlur = 8;
          ctx.beginPath();
          ctx.arc(0, 0, 3, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        ctx.restore();
      }

      // Función para dibujar los Muros Blindados de 50 de Vida (HP = 50)
      function drawWall(x, y, w, h, hp, maxHp, hitFlash) {
        ctx.save();
        ctx.translate(x, y);

        if (hitFlash && hitFlash > 0) {
          ctx.shadowColor = '#38bdf8';
          ctx.shadowBlur = 16;
        }

        const halfW = w / 2;
        const halfH = h / 2;

        // Estructura exterior blindada
        ctx.fillStyle = hitFlash > 0 ? '#38bdf8' : '#1e293b';
        ctx.strokeStyle = hitFlash > 0 ? '#ffffff' : '#f59e0b';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.roundRect(-halfW, -halfH, w, h, 6);
        ctx.fill();
        ctx.stroke();

        // Franjas diagonales de peligro (hazard stripes)
        ctx.save();
        ctx.beginPath();
        ctx.roundRect(-halfW + 2, -halfH + 2, w - 4, h - 4, 4);
        ctx.clip();
        ctx.strokeStyle = 'rgba(245, 158, 11, 0.35)';
        ctx.lineWidth = 6;
        for (let sx = -halfW - 20; sx < halfW + 20; sx += 14) {
          ctx.beginPath();
          ctx.moveTo(sx, -halfH);
          ctx.lineTo(sx + 14, halfH);
          ctx.stroke();
        }
        ctx.restore();

        // Barra de Vida Superior (HP Bar: 50 a 0)
        const barW = w - 8;
        const barH = 5;
        const barX = -barW / 2;
        const barY = -halfH - 8;
        ctx.fillStyle = 'rgba(0, 0, 0, 0.85)';
        ctx.fillRect(barX - 1, barY - 1, barW + 2, barH + 2);

        const fillPct = Math.max(0, hp / maxHp);
        ctx.fillStyle = fillPct > 0.5 ? '#22c55e' : (fillPct > 0.2 ? '#f59e0b' : '#ef4444');
        ctx.fillRect(barX, barY, barW * fillPct, barH);

        // Texto informativo del Muro con conteo exacto de HP
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 9px "JetBrains Mono", monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.shadowColor = 'rgba(0,0,0,0.9)';
        ctx.shadowBlur = 4;
        ctx.fillText(`🛡️ MURO ${hp}/${maxHp}`, 0, 0);

        ctx.restore();
      }

      // Spawn de Drones enemigos con 3 Vidas (HP = 3)
      enemySpawnCounter++;
      if (enemySpawnCounter > 48) {
        enemySpawnCounter = 0;
        enemies.push({
          x: 22 + Math.random() * (canvas.width - 44),
          y: -22,
          w: 24,
          h: 24,
          speed: 0.68 + Math.random() * 0.45,
          type: Math.random() > 0.5 ? 'assault' : 'scout',
          hp: 3,
          maxHp: 3,
          hitFlash: 0
        });
      }

      // Spawn periódico de Muros Blindados de 50 HP (Se pueden destruir con 50 disparos o esquivar)
      wallSpawnCounter++;
      if (wallSpawnCounter > 175 && distance < 95) {
        wallSpawnCounter = 0;
        const wallW = Math.min(84, canvas.width * 0.38);
        const minX = wallW / 2 + 18;
        const maxX = canvas.width - (wallW / 2 + 18);
        const wallX = minX + Math.random() * Math.max(10, maxX - minX);
        enemies.push({
          x: wallX,
          y: -32,
          w: wallW,
          h: 28,
          speed: 0.52,
          type: 'wall',
          hp: 50,
          maxHp: 50,
          hitFlash: 0
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

      // Enemigos y Muros con barra de vida
      for (let i = enemies.length - 1; i >= 0; i--) {
        const en = enemies[i];
        en.y += en.speed;

        if (en.type === 'wall') {
          drawWall(en.x, en.y, en.w, en.h, en.hp, en.maxHp, en.hitFlash);
        } else {
          drawEnemyDrone(en.x, en.y, Math.floor(distance * 10) + i * 5, en.type, en.hp, en.maxHp, en.hitFlash);
        }
        if (en.hitFlash > 0) en.hitFlash--;

        // Colisión con balas:
        for (let j = bullets.length - 1; j >= 0; j--) {
          const b = bullets[j];
          let hit = false;
          if (en.type === 'wall') {
            hit = (b.x >= en.x - en.w / 2 && b.x <= en.x + en.w / 2 &&
                   b.y >= en.y - en.h / 2 && b.y <= en.y + en.h / 2);
          } else {
            hit = (Math.hypot(b.x - en.x, b.y - en.y) < 18);
          }

          if (hit) {
            sound.playSnap();
            bullets.splice(j, 1);
            en.hp--;
            en.hitFlash = 4;

            // Chispas de impacto
            for (let p = 0; p < (en.type === 'wall' ? 2 : 3); p++) {
              particles.push({
                x: b.x, y: b.y,
                vx: (Math.random() - 0.5) * 3,
                vy: (Math.random() - 0.5) * 3,
                alpha: 1,
                color: en.type === 'wall' ? '#f59e0b' : '#38bdf8'
              });
            }

            // Destrucción tras agotar los puntos de vida (50 para el muro, 3 para el drone)
            if (en.hp <= 0) {
              sound.playLaser();
              const pointsEarned = en.type === 'wall' ? 100 : 15;
              score += pointsEarned;
              scoreTxt.textContent = score;

              const countParts = en.type === 'wall' ? 20 : 8;
              for (let p = 0; p < countParts; p++) {
                particles.push({
                  x: en.x + (Math.random() - 0.5) * (en.w || 20),
                  y: en.y + (Math.random() - 0.5) * (en.h || 20),
                  vx: (Math.random() - 0.5) * 6,
                  vy: (Math.random() - 0.5) * 6,
                  alpha: 1,
                  color: en.type === 'wall' ? '#f59e0b' : (en.type === 'assault' ? '#ef4444' : '#f59e0b')
                });
              }
              enemies.splice(i, 1);
            }
            break;
          }
        }

        // Colisión con el avión
        if (enemies[i]) {
          let planeHit = false;
          if (en.type === 'wall') {
            planeHit = (Math.abs(plane.x - en.x) < (en.w / 2 + 10) &&
                        Math.abs(plane.y - en.y) < (en.h / 2 + 12));
          } else {
            planeHit = (Math.hypot(plane.x - en.x, plane.y - en.y) < 20);
          }

          if (planeHit) {
            shields--;
            sound.playHurt();
            enemies.splice(i, 1);
            shieldTxt.textContent = shields === 2 ? '❤️❤️' : (shields === 1 ? '❤️' : '💔');
            if (shields <= 0) {
              shields = 3;
              shieldTxt.textContent = '❤️❤️❤️';
            }
          }
        }

        if (enemies[i] && en.y > canvas.height + 40) enemies.splice(i, 1);
      }

      // Partículas
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.05;
        ctx.fillStyle = p.color || '#38bdf8';
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillRect(p.x, p.y, 3, 3);
        ctx.globalAlpha = 1.0;
        if (p.alpha <= 0) particles.splice(i, 1);
      }

      // Dibujar Avión
      drawPlane(plane.x, plane.y);

      animId = requestAnimationFrame(loop);
    }

    animId = requestAnimationFrame(loop);

    activeGameCleanup = () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      window.removeEventListener('resize', resizeCanvas);
    };
  }

  // =========================================================================
  // 2. DALULÚ TRAVEL: LABERINTO EN ORDEN ESTRICTO (D - A - L - U - L - U)
  // =========================================================================
  function buildDaluluMaze() {
    const MAZE_RIDDLES = [
      {
        id: 1,
        title: 'Nivel 1: El Nombre de la Aventura',
        hint: 'Sigue el sendero recolectando las letras en orden exacto: D - A - L - U - L - U',
        word: 'DALULU',
        maxMoves: 28,
        start: { r: 0, c: 0 },
        layout: [
          [0, 0, 1, 0, 0, 0, 0],
          [1, 0, 1, 0, 1, 1, 0],
          [0, 0, 0, 0, 1, 0, 0],
          [0, 1, 1, 0, 0, 0, 1],
          [0, 0, 1, 1, 1, 0, 0],
          [1, 0, 0, 0, 1, 1, 0],
          [0, 0, 1, 0, 0, 0, 2]
        ],
        letters: [
          { r: 0, c: 1, char: 'D', order: 0 },
          { r: 0, c: 5, char: 'A', order: 1 },
          { r: 2, c: 2, char: 'L', order: 2 },
          { r: 3, c: 4, char: 'U', order: 3 },
          { r: 5, c: 3, char: 'L', order: 4 },
          { r: 4, c: 6, char: 'U', order: 5 }
        ]
      },
      {
        id: 2,
        title: 'Nivel 2: El Paraíso de la Costa',
        hint: 'Aguas turquesas y arrecifes. Recolecta en orden: P - L - A - Y - A',
        word: 'PLAYA',
        maxMoves: 30,
        start: { r: 6, c: 0 },
        layout: [
          [0, 0, 0, 0, 0, 0, 2],
          [0, 1, 1, 1, 1, 1, 0],
          [0, 0, 0, 0, 0, 1, 0],
          [1, 1, 1, 1, 0, 1, 0],
          [0, 0, 0, 0, 0, 1, 0],
          [0, 1, 1, 1, 1, 1, 0],
          [0, 0, 0, 0, 0, 0, 0]
        ],
        letters: [
          { r: 6, c: 2, char: 'P', order: 0 },
          { r: 4, c: 2, char: 'L', order: 1 },
          { r: 2, c: 3, char: 'A', order: 2 },
          { r: 3, c: 4, char: 'Y', order: 3 },
          { r: 4, c: 6, char: 'A', order: 4 }
        ]
      },
      {
        id: 3,
        title: 'Nivel 3: La Magia del Caribe',
        hint: 'Murallas coloniales y atardeceres. Recolecta en orden: C - A - R - I - B - E',
        word: 'CARIBE',
        maxMoves: 34,
        start: { r: 0, c: 0 },
        layout: [
          [0, 0, 0, 0, 0, 0, 0],
          [1, 1, 1, 1, 1, 1, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 1, 1, 2, 1, 1, 0],
          [0, 1, 0, 0, 0, 1, 0],
          [0, 1, 1, 0, 1, 1, 0],
          [0, 0, 0, 0, 0, 0, 0]
        ],
        letters: [
          { r: 0, c: 3, char: 'C', order: 0 },
          { r: 0, c: 6, char: 'A', order: 1 },
          { r: 3, c: 6, char: 'R', order: 2 },
          { r: 6, c: 5, char: 'I', order: 3 },
          { r: 6, c: 1, char: 'B', order: 4 },
          { r: 2, c: 2, char: 'E', order: 5 }
        ]
      }
    ];

    let currentRiddleIndex = 0;
    let completedRiddles = [false, false, false];
    let currentLetterIndex = 0;
    let playerPos = { r: 0, c: 0 };
    let letterSpawns = [];
    let movesLeft = 0;
    let isTransitioning = false;

    interactiveArena.innerHTML = `
      <div class="dalulu-maze-ui">
        <div class="dalulu-levels-bar">
          <span style="font-size:0.75rem; font-weight:700; color:#ffffff;">
            <i class="fa-solid fa-map-location-dot" style="color:var(--blue-accent);"></i> Nivel <strong id="dalulu-riddle-num">1 / 3</strong>
          </span>
          <div class="dalulu-lvl-chips" id="dalulu-chips-row">
            ${MAZE_RIDDLES.map((r, i) => `
              <button class="dalulu-lvl-chip ${i === 0 ? 'active' : ''}" data-idx="${i}">Nivel ${i + 1}</button>
            `).join('')}
          </div>
          <span style="font-size:0.75rem; font-weight:800; color:#f59e0b;">
            <i class="fa-solid fa-shoe-prints"></i> Pasos: <strong id="dalulu-moves-txt">0</strong>
          </span>
        </div>

        <div class="dalulu-riddle-box" id="dalulu-riddle-desc"></div>

        <div class="maze-word-tracker" id="maze-word-tracker"></div>

        <div id="dalulu-order-hint" style="font-size:0.74rem; color:var(--gold-accent); text-align:center; font-weight:700; min-height:18px;"></div>

        <div class="dalulu-maze-board" id="maze-board" style="grid-template-columns: repeat(7, 1fr); grid-template-rows: repeat(7, 1fr);"></div>

        <div class="mobile-touch-dpad">
          <button class="dpad-btn up" id="dpad-up" title="Mover Arriba"><i class="fa-solid fa-arrow-up"></i></button>
          <button class="dpad-btn left" id="dpad-left" title="Mover Izquierda"><i class="fa-solid fa-arrow-left"></i></button>
          <button class="dpad-btn right" id="dpad-right" title="Mover Derecha"><i class="fa-solid fa-arrow-right"></i></button>
          <button class="dpad-btn down" id="dpad-down" title="Mover Abajo"><i class="fa-solid fa-arrow-down"></i></button>
        </div>
      </div>
    `;

    const board = document.getElementById('maze-board');
    const hintEl = document.getElementById('dalulu-order-hint');
    const movesTxt = document.getElementById('dalulu-moves-txt');
    const riddleNumEl = document.getElementById('dalulu-riddle-num');
    const riddleDescEl = document.getElementById('dalulu-riddle-desc');
    const wordTracker = document.getElementById('maze-word-tracker');
    const chipsRow = document.getElementById('dalulu-chips-row');

    function renderChips() {
      chipsRow.innerHTML = MAZE_RIDDLES.map((r, i) => {
        const isDone = completedRiddles[i];
        const isActive = i === currentRiddleIndex;
        return `
          <button class="dalulu-lvl-chip ${isActive ? 'active' : ''} ${isDone ? 'completed' : ''}" data-idx="${i}" title="${r.title}">
            N${i + 1}${isDone ? ' ✓' : ''}
          </button>
        `;
      }).join('');

      chipsRow.querySelectorAll('.dalulu-lvl-chip').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.getAttribute('data-idx'));
          sound.playClick();
          loadRiddle(idx);
        });
      });
    }

    function updateSlotsUI() {
      const riddle = MAZE_RIDDLES[currentRiddleIndex];
      for (let i = 0; i < riddle.word.length; i++) {
        const slot = document.getElementById(`slot-letter-${i}`);
        if (slot) {
          slot.classList.remove('target-active');
          if (i < currentLetterIndex) {
            slot.textContent = riddle.word[i];
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

      if (currentLetterIndex < riddle.word.length) {
        hintEl.style.color = 'var(--gold-accent)';
        hintEl.textContent = `Próxima letra a recoger en orden: "${riddle.word[currentLetterIndex]}" (${currentLetterIndex + 1}/${riddle.word.length})`;
      } else {
        hintEl.style.color = 'var(--green-accent)';
        hintEl.textContent = `¡Palabra ${riddle.word} completa! Cruza la meta turística 🏁`;
      }
    }

    function renderMaze() {
      const riddle = MAZE_RIDDLES[currentRiddleIndex];
      board.innerHTML = '';
      for (let r = 0; r < 7; r++) {
        for (let c = 0; c < 7; c++) {
          const cell = document.createElement('div');
          const cellType = riddle.layout[r][c];
          cell.className = 'maze-cell ' + (cellType === 1 ? 'wall' : (cellType === 2 ? 'exit' : 'path'));

          if (playerPos.r === r && playerPos.c === c) {
            cell.innerHTML = '<div class="maze-player-dot"><i class="fa-solid fa-person-walking-luggage"></i></div>';
          } else {
            const letter = letterSpawns.find(l => l.r === r && l.c === c && !l.collected);
            if (letter) {
              const isCurrentTarget = letter.order === currentLetterIndex;
              cell.innerHTML = `<span class="maze-letter-pickup" style="${isCurrentTarget ? 'color:#38bdf8; font-size:0.95rem; text-shadow:0 0 8px #38bdf8;' : 'opacity:0.5; color:#cbd5e1;'}">${letter.char}</span>`;
            } else if (cellType === 2) {
              cell.innerHTML = '<span style="font-size:0.85rem;">🏁</span>';
            }
          }
          board.appendChild(cell);
        }
      }
    }

    function loadRiddle(index) {
      if (index < 0 || index >= MAZE_RIDDLES.length) return;
      currentRiddleIndex = index;
      const riddle = MAZE_RIDDLES[currentRiddleIndex];

      playerPos = { ...riddle.start };
      letterSpawns = riddle.letters.map(l => ({ ...l, collected: false }));
      currentLetterIndex = 0;
      movesLeft = riddle.maxMoves;
      isTransitioning = false;

      movesTxt.textContent = movesLeft;
      movesTxt.style.color = '#f59e0b';
      riddleNumEl.textContent = `${index + 1} / 3`;
      riddleDescEl.innerHTML = `
        <span><i class="fa-solid fa-puzzle-piece"></i> <strong>${riddle.title}</strong></span><br>
        <span style="color:#cbd5e1; font-weight:500;">${riddle.hint} • Límite: ${riddle.maxMoves} pasos</span>
      `;

      wordTracker.innerHTML = riddle.word.split('').map((char, i) => `
        <div class="letter-tile-slot ${i === 0 ? 'target-active' : ''}" id="slot-letter-${i}">_</div>
      `).join('');

      renderChips();
      updateSlotsUI();
      renderMaze();
    }

    function tryMove(dr, dc) {
      if (isTransitioning) return;
      const riddle = MAZE_RIDDLES[currentRiddleIndex];
      const nr = playerPos.r + dr;
      const nc = playerPos.c + dc;
      if (nr < 0 || nr >= 7 || nc < 0 || nc >= 7) return;
      if (riddle.layout[nr][nc] === 1) return;

      playerPos.r = nr;
      playerPos.c = nc;
      sound.playStep();

      // Consumir un movimiento
      movesLeft--;
      movesTxt.textContent = movesLeft;
      if (movesLeft <= 5) {
        movesTxt.style.color = '#ef4444';
      }

      // Verificación estricta de letras:
      // Si pisa cualquier casilla con una letra que NO es la siguiente en orden, el nivel se repite de inmediato
      const letter = letterSpawns.find(l => l.r === nr && l.c === nc && !l.collected);
      if (letter) {
        if (letter.order === currentLetterIndex) {
          letter.collected = true;
          currentLetterIndex++;
          sound.playSnap();
          updateSlotsUI();
        } else {
          // Letra equivocada: penalización estricta de reinicio
          sound.playHurt();
          isTransitioning = true;
          hintEl.style.color = '#ef4444';
          hintEl.textContent = `💥 ¡Letra "${letter.char}" incorrecta! Debías tomar "${riddle.word[currentLetterIndex]}". Nivel reiniciado.`;
          renderMaze();
          setTimeout(() => {
            loadRiddle(currentRiddleIndex);
          }, 850);
          return;
        }
      }

      // Comprobar si se agotaron los movimientos disponibles
      if (movesLeft <= 0 && currentLetterIndex < riddle.word.length) {
        sound.playHurt();
        isTransitioning = true;
        hintEl.style.color = '#ef4444';
        hintEl.textContent = '❌ ¡Agotaste tus movimientos disponibles! Nivel reiniciado.';
        renderMaze();
        setTimeout(() => {
          loadRiddle(currentRiddleIndex);
        }, 850);
        return;
      }

      // Comprobar salida 🏁
      if (riddle.layout[nr][nc] === 2) {
        if (currentLetterIndex >= riddle.word.length) {
          completedRiddles[currentRiddleIndex] = true;
          renderChips();

          if (currentRiddleIndex < MAZE_RIDDLES.length - 1) {
            isTransitioning = true;
            sound.playSuccess();
            hintEl.style.color = 'var(--green-accent)';
            hintEl.textContent = `🎉 ¡Nivel ${currentRiddleIndex + 1} superado! Cargando siguiente laberinto...`;
            setTimeout(() => {
              loadRiddle(currentRiddleIndex + 1);
            }, 850);
          } else {
            sound.playSuccess();
            completeCurrentChallenge('¡Superaste con éxito los 3 niveles con orden estricto y límite de movimientos en DaLulú Travel!');
          }
        } else {
          sound.playClick();
          hintEl.textContent = '¡Aún te faltan letras para desbloquear la salida!';
        }
      }

      renderMaze();
    }

    loadRiddle(0);

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
  // =========================================================================
  // 3. GLOWSMEC: ATENCIÓN A CLIENTES • ESTILO COCINA / SALON DASH (10 CLIENTES • 20s)
  // =========================================================================
  function buildGlowsmecSalon() {
    const TOTAL_CLIENTS_GOAL = 15;
    const PATIENCE_TIME = 10.0; // 10 segundos exactos por cliente

    const COSMETICS = [
      { id: 'shampoo', name: 'Shampoo', faIcon: 'fa-pump-soap', color: '#0284c7', bgColor: 'rgba(2, 132, 199, 0.22)', borderColor: '#38bdf8' },
      { id: 'mascarilla', name: 'Mascarilla', faIcon: 'fa-spa', color: '#10b981', bgColor: 'rgba(16, 185, 129, 0.22)', borderColor: '#34d399' },
      { id: 'tinte', name: 'Tinte', faIcon: 'fa-fill-drip', color: '#ec4899', bgColor: 'rgba(236, 72, 153, 0.22)', borderColor: '#f472b6' },
      { id: 'cera', name: 'Cera', faIcon: 'fa-cube', color: '#f59e0b', bgColor: 'rgba(245, 158, 11, 0.22)', borderColor: '#fbbf24' },
      { id: 'tijeras', name: 'Tijeras', faIcon: 'fa-scissors', color: '#3b82f6', bgColor: 'rgba(59, 130, 246, 0.22)', borderColor: '#60a5fa' },
      { id: 'secador', name: 'Secador', faIcon: 'fa-wind', color: '#8b5cf6', bgColor: 'rgba(139, 92, 246, 0.22)', borderColor: '#a78bfa' },
      { id: 'serum', name: 'Sérum', faIcon: 'fa-droplet', color: '#14b8a6', bgColor: 'rgba(20, 184, 166, 0.22)', borderColor: '#2dd4bf' },
      { id: 'laca', name: 'Laca', faIcon: 'fa-spray-can-sparkles', color: '#f43f5e', bgColor: 'rgba(244, 63, 94, 0.22)', borderColor: '#fb7185' }
    ];

    const CUSTOMER_POOL = [
      { id: 1, name: 'Sofía', avatar: '👩‍🦰', order: ['shampoo', 'secador'], msg: '¡Lavado y secado rápido!' },
      { id: 2, name: 'Alejandro', avatar: '👨‍💼', order: ['cera', 'tijeras'], msg: '¡Corte y cera para la reunión!' },
      { id: 3, name: 'Valentina', avatar: '👱‍♀️', order: ['tinte', 'serum'], msg: '¡Tinte fucsia y gotas de brillo!' },
      { id: 4, name: 'Mateo', avatar: '👨‍🦱', order: ['shampoo', 'mascarilla'], msg: '¡Spa nutritivo capilar!' },
      { id: 5, name: 'Camila', avatar: '👩‍🦳', order: ['laca', 'secador'], msg: '¡Peinado elegante y laca!' },
      { id: 6, name: 'Lucas', avatar: '🧑', order: ['tijeras', 'cera'], msg: '¡Perfilado con tijeras y cera!' },
      { id: 7, name: 'Isabella', avatar: '👩‍🦱', order: ['tinte', 'laca'], msg: '¡Tinte de noche y fijación!' },
      { id: 8, name: 'Daniel', avatar: '🧔', order: ['shampoo', 'serum'], msg: '¡Lavado relajante con sérum!' },
      { id: 9, name: 'Mariana', avatar: '👩', order: ['mascarilla', 'secador'], msg: '¡Mascarilla de keratina y calor!' },
      { id: 10, name: 'Andrés', avatar: '🧑‍🦱', order: ['cera', 'laca'], msg: '¡Look de gala con cera y fijador!' },
      { id: 11, name: 'Lucía', avatar: '👧', order: ['mascarilla', 'tijeras'], msg: '¡Puntas abiertas y nutrición!' },
      { id: 12, name: 'Carlos', avatar: '👨‍🦲', order: ['shampoo', 'laca'], msg: '¡Brillo y fijación extrema!' },
      { id: 13, name: 'Elena', avatar: '👩‍🦱', order: ['tinte', 'secador'], msg: '¡Reflejos dorados con calor!' },
      { id: 14, name: 'Gabriel', avatar: '🧔‍♂️', order: ['cera', 'serum'], msg: '¡Barba y cabello sedoso!' },
      { id: 15, name: 'Patricia', avatar: '👵', order: ['mascarilla', 'laca'], msg: '¡Tratamiento rejuvenecedor!' }
    ];

    let servedCount = 0;
    let tipsTotal = 0;
    let customerQueueIdx = 0;
    let gameWon = false;
    let tickInterval = null;
    let spawnTimeouts = [];

    // Dos puestos simultáneos en el mostrador como en el juego de cocina de referencia
    let spots = [
      { active: false, customer: null, timeLeft: PATIENCE_TIME, delivered: [] },
      { active: false, customer: null, timeLeft: PATIENCE_TIME, delivered: [] }
    ];

    interactiveArena.innerHTML = `
      <div class="glowsmec-salon-ui">
        <div class="salon-hud-bar">
          <span><i class="fa-solid fa-users"></i> Clientes Atendidos: <strong id="salon-served-txt" style="color:#ffffff;">0 / 15</strong></span>
          <span style="color:#fbbf24;"><i class="fa-solid fa-coins"></i> Propinas: <strong id="salon-tips-txt">$0</strong></span>
          <span><i class="fa-solid fa-stopwatch"></i> Paciencia: <strong id="salon-global-timer">10.0s</strong></span>
        </div>

        <div class="cooking-salon-scene">
          <div class="customers-counter-row" id="customers-counter-row">
            <!-- Puestos inyectados dinámicamente -->
          </div>
          <div class="salon-counter-surface"></div>
        </div>

        <div id="salon-feedback-hint" style="width:100%; text-align:center; font-size:0.72rem; color:var(--text-muted); min-height:18px;">
          Toca el cosmético que pide el cliente para servírselo antes de que se agote su barra vertical (10s)
        </div>

        <div class="cosmetics-shelf-grid" id="cosmetics-shelf">
          ${COSMETICS.map(cos => `
            <button class="cosmetic-card-btn" data-id="${cos.id}" style="--item-color:${cos.color}; --item-border:${cos.borderColor}; --item-bg:${cos.bgColor};">
              <div class="cosmetic-icon-bubble" style="background:${cos.bgColor}; border:1.5px solid ${cos.borderColor}; color:${cos.color};">
                <i class="fa-solid ${cos.faIcon}"></i>
              </div>
              <span class="cosmetic-name">${cos.name}</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;

    const servedTxt = document.getElementById('salon-served-txt');
    const tipsTxt = document.getElementById('salon-tips-txt');
    const feedbackHint = document.getElementById('salon-feedback-hint');
    const counterRow = document.getElementById('customers-counter-row');

    function renderSpots() {
      counterRow.innerHTML = '';
      spots.forEach((spot, idx) => {
        const spotEl = document.createElement('div');
        if (!spot.active || !spot.customer) {
          spotEl.className = 'customer-counter-spot empty';
          spotEl.innerHTML = `<span style="font-size:0.75rem; color:var(--text-muted);">Puesto ${idx + 1}<br>Esperando cliente...</span>`;
        } else {
          spotEl.className = 'customer-counter-spot';
          const cust = spot.customer;
          const pct = Math.max(0, (spot.timeLeft / PATIENCE_TIME) * 100);
          const isWarning = spot.timeLeft <= 5.0 && spot.timeLeft > 2.5;
          const isUrgent = spot.timeLeft <= 2.5;

          spotEl.innerHTML = `
            <div class="customer-avatar-box">
              <span class="customer-avatar-icon">${cust.avatar}</span>
              <span class="customer-name-tag">${cust.name}</span>
              <span style="font-size:0.6rem; color:#94a3b8; font-family:'JetBrains Mono', monospace;">${spot.timeLeft.toFixed(1)}s</span>
            </div>

            <div class="customer-order-card">
              <div class="order-items-col">
                ${cust.order.map(itemId => {
                  const item = COSMETICS.find(c => c.id === itemId);
                  const isDone = spot.delivered.includes(itemId);
                  const borderClr = isDone ? '#22c55e' : (item ? item.borderColor : '#cbd5e1');
                  const bgClr = isDone ? '#dcfce7' : (item ? item.bgColor : '#f8fafc');
                  const textClr = isDone ? '#15803d' : '#0f172a';
                  const iconClr = isDone ? '#15803d' : (item ? item.color : '#0f172a');
                  return `
                    <div class="order-dish-badge ${isDone ? 'collected' : ''}" style="border-color:${borderClr}; background:${bgClr}; color:${textClr};">
                      <span class="order-dish-icon" style="color:${iconClr};">
                        <i class="fa-solid ${item ? item.faIcon : 'fa-star'}"></i>
                      </span>
                      <span class="order-dish-name" style="color:${textClr};">${item ? item.name : ''}</span>
                      ${isDone ? '<i class="fa-solid fa-check" style="margin-left:auto; color:#10b981;"></i>' : ''}
                    </div>
                  `;
                }).join('')}
              </div>

              <!-- Barra Vertical de Paciencia estilo Cooking Game (10s) -->
              <div class="order-timer-vertical" title="Paciencia restante: ${spot.timeLeft.toFixed(1)}s">
                <div class="vertical-timer-fill ${isUrgent ? 'urgent' : (isWarning ? 'warning' : '')}" style="height:${pct}%;"></div>
              </div>
            </div>
          `;
        }
        counterRow.appendChild(spotEl);
      });
    }

    function spawnCustomer(spotIdx) {
      if (gameWon || servedCount >= TOTAL_CLIENTS_GOAL) return;
      const custData = CUSTOMER_POOL[customerQueueIdx % CUSTOMER_POOL.length];
      customerQueueIdx++;

      spots[spotIdx] = {
        active: true,
        customer: custData,
        timeLeft: PATIENCE_TIME,
        delivered: []
      };
      renderSpots();
    }

    // Iniciar con el primer cliente en Spot 0, y el segundo en Spot 1 tras 1.8 segundos
    spawnCustomer(0);
    const initialT2 = setTimeout(() => spawnCustomer(1), 1800);
    spawnTimeouts.push(initialT2);

    // Reloj principal de paciencia (100ms)
    tickInterval = setInterval(() => {
      if (gameWon) return;

      let needsRender = false;
      spots.forEach((spot, idx) => {
        if (spot.active && spot.customer) {
          spot.timeLeft -= 0.1;
          needsRender = true;

          // Se agotaron los 10 segundos
          if (spot.timeLeft <= 0) {
            spot.active = false;
            sound.playHurt();
            if (feedbackHint) {
              feedbackHint.textContent = `😤 ¡${spot.customer.name} se fue porque se agotaron sus 10s!`;
              feedbackHint.style.color = '#ef4444';
              setTimeout(() => {
                if (feedbackHint) {
                  feedbackHint.textContent = 'Toca el cosmético que pide el cliente para servírselo antes de que se agote su barra vertical (10s)';
                  feedbackHint.style.color = 'var(--text-muted)';
                }
              }, 1800);
            }

            // Siguiente cliente en este puesto
            const t = setTimeout(() => spawnCustomer(idx), 900);
            spawnTimeouts.push(t);
          }
        }
      });

      if (needsRender) {
        renderSpots();
      }
    }, 100);

    // Entrega de cosméticos al tocar los botones de la estación de peluquería
    document.querySelectorAll('.cosmetic-card-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (gameWon) return;
        const cosmeticId = btn.getAttribute('data-id');
        const cosmetic = COSMETICS.find(c => c.id === cosmeticId);

        // Buscar clientes que necesitan este cosmético y aún no lo han recibido
        const eligibleSpots = [];
        spots.forEach((spot, idx) => {
          if (spot.active && spot.customer && spot.customer.order.includes(cosmeticId) && !spot.delivered.includes(cosmeticId)) {
            eligibleSpots.push(idx);
          }
        });

        if (eligibleSpots.length > 0) {
          // Si ambos lo necesitan, priorizar al que le queda menos tiempo
          eligibleSpots.sort((a, b) => spots[a].timeLeft - spots[b].timeLeft);
          const targetSpotIdx = eligibleSpots[0];
          const targetSpot = spots[targetSpotIdx];

          targetSpot.delivered.push(cosmeticId);
          sound.playSnap();

          // Comprobar si completó el pedido de este cliente
          const orderFulfilled = targetSpot.customer.order.every(reqId => targetSpot.delivered.includes(reqId));

          if (orderFulfilled) {
            sound.playSuccess();
            servedCount++;
            const earnedTips = 120 + Math.floor(targetSpot.timeLeft * 8);
            tipsTotal += earnedTips;

            servedTxt.textContent = `${servedCount} / ${TOTAL_CLIENTS_GOAL}`;
            tipsTxt.textContent = `$${tipsTotal}`;

            if (feedbackHint) {
              feedbackHint.textContent = `⭐ ¡${targetSpot.customer.name} atendida perfectamente! +$${earnedTips} de propina`;
              feedbackHint.style.color = '#10b981';
            }

            // Mostrar toast flotante de propina en el puesto
            const toast = document.createElement('div');
            toast.className = 'tip-floating-toast';
            toast.textContent = `+$${earnedTips} ✨`;
            counterRow.appendChild(toast);
            setTimeout(() => toast.remove(), 800);

            targetSpot.active = false;
            renderSpots();

            // Verificar si se completaron los 15 clientes
            if (servedCount >= TOTAL_CLIENTS_GOAL) {
              gameWon = true;
              clearInterval(tickInterval);
              completeCurrentChallenge('¡Atendiste con éxito a los 15 clientes de peluquería en GlowSmec estilo Cooking Salon!');
              return;
            }

            // Traer siguiente cliente a este puesto tras una breve pausa
            const nextT = setTimeout(() => spawnCustomer(targetSpotIdx), 800);
            spawnTimeouts.push(nextT);
          } else {
            if (feedbackHint) {
              feedbackHint.textContent = `🧴 ¡${cosmetic ? cosmetic.name : ''} entregado a ${targetSpot.customer.name}! Falta otro cosmético.`;
              feedbackHint.style.color = '#38bdf8';
            }
            renderSpots();
          }
        } else {
          // Ningún cliente lo necesita en este momento
          sound.playClick();
          btn.style.transform = 'scale(0.9)';
          setTimeout(() => btn.style.transform = '', 150);
          if (feedbackHint) {
            feedbackHint.textContent = `⚠️ Ningún cliente actual necesita ${cosmetic ? cosmetic.name : 'este producto'} ahora.`;
            feedbackHint.style.color = '#f59e0b';
          }
        }
      });
    });

    activeGameCleanup = () => {
      if (tickInterval) clearInterval(tickInterval);
      spawnTimeouts.forEach(t => clearTimeout(t));
    };
  }

  // =========================================================================
  // 4. GREENTASK: GUSANO MÁS LENTO & 10 MANZANAS
  // =========================================================================
  function buildGreenTaskSnake() {
    const TARGET_APPLES = 10;
    interactiveArena.innerHTML = `
      <div class="greentask-snake-ui">
        <div class="snake-hud-bar">
          <span><i class="fa-solid fa-apple-whole"></i> Manzanas: <strong id="snake-apple-txt">0 / 10</strong></span>
          <span style="color:#f87171;"><i class="fa-solid fa-triangle-exclamation"></i> <strong>Paredes Mortales</strong></span>
        </div>

        <div class="snake-canvas-wrap" id="snake-canvas-wrap">
          <canvas id="snake-canvas"></canvas>
        </div>

        <div id="snake-hazard-hint" class="snake-hazard-hint">
          ⚡ ¡Cuidado! Chocar contra las paredes o morder tu cuerpo reinicia el huerto a 0.
        </div>

        <div class="mobile-touch-dpad">
          <button class="dpad-btn up" id="snake-up" title="Mover Arriba"><i class="fa-solid fa-arrow-up"></i></button>
          <button class="dpad-btn left" id="snake-left" title="Mover Izquierda"><i class="fa-solid fa-arrow-left"></i></button>
          <button class="dpad-btn right" id="snake-right" title="Mover Derecha"><i class="fa-solid fa-arrow-right"></i></button>
          <button class="dpad-btn down" id="snake-down" title="Mover Abajo"><i class="fa-solid fa-arrow-down"></i></button>
        </div>
      </div>
    `;

    const canvas = document.getElementById('snake-canvas');
    const wrap = document.getElementById('snake-canvas-wrap');
    const ctx = canvas.getContext('2d');
    const appleTxt = document.getElementById('snake-apple-txt');
    const hazardHint = document.getElementById('snake-hazard-hint');

    const GRID_SIZE = 14;
    canvas.width = wrap.clientWidth || 280;
    canvas.height = wrap.clientHeight || 220;
    const tileW = Math.floor(canvas.width / GRID_SIZE);
    const tileH = Math.floor(canvas.height / GRID_SIZE);

    let snake = [
      { x: 5, y: 5, prevX: 4, prevY: 5 },
      { x: 4, y: 5, prevX: 3, prevY: 5 },
      { x: 3, y: 5, prevX: 2, prevY: 5 }
    ];
    let dir = { x: 1, y: 0 };
    let nextDir = { x: 1, y: 0 };
    let apple = { x: 9, y: 5 };
    let applesEaten = 0;
    let gameWon = false;
    let animId = null;
    let particles = [];

    const STEP_TIME = 210; // ms por paso lógico (ritmo pausado y controlable)
    let lastStepTime = performance.now();

    function spawnApple() {
      let valid = false;
      while (!valid) {
        apple = {
          x: Math.floor(Math.random() * (GRID_SIZE - 2)) + 1,
          y: Math.floor(Math.random() * (GRID_SIZE - 2)) + 1
        };
        valid = !snake.some(s => s.x === apple.x && s.y === apple.y);
      }
    }

    function step() {
      if (gameWon) return;

      dir = nextDir;
      const head = {
        x: snake[0].x + dir.x,
        y: snake[0].y + dir.y,
        prevX: snake[0].x,
        prevY: snake[0].y
      };

      // 1. Pérdida automática al tocar una pared exterior
      const hitWall = head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE;

      // 2. Pérdida automática al morderse a sí mismo
      const hitSelf = snake.some(seg => seg.x === head.x && seg.y === head.y);

      if (hitWall || hitSelf) {
        sound.playHurt();
        if (wrap) {
          wrap.classList.add('crashed');
          setTimeout(() => { if (wrap) wrap.classList.remove('crashed'); }, 420);
        }

        if (hazardHint) {
          hazardHint.textContent = hitWall ? '💥 ¡Chocaste contra la pared! Reiniciando a 0 manzanas...' : '💥 ¡Te mordiste el cuerpo! Reiniciando a 0 manzanas...';
          hazardHint.style.color = '#ef4444';
          setTimeout(() => {
            if (hazardHint) {
              hazardHint.textContent = '⚡ ¡Cuidado! Chocar contra las paredes o morder tu cuerpo reinicia el huerto a 0.';
              hazardHint.style.color = '#f87171';
            }
          }, 1600);
        }

        // Reinicio completo desde el principio
        applesEaten = 0;
        appleTxt.textContent = '0 / 10';
        snake = [
          { x: 5, y: 5, prevX: 4, prevY: 5 },
          { x: 4, y: 5, prevX: 3, prevY: 5 },
          { x: 3, y: 5, prevX: 2, prevY: 5 }
        ];
        dir = { x: 1, y: 0 };
        nextDir = { x: 1, y: 0 };
        spawnApple();
        return;
      }

      // Preparar prevX y prevY en todos los segmentos para interpolación fluida
      for (let i = snake.length - 1; i > 0; i--) {
        snake[i].prevX = snake[i].x;
        snake[i].prevY = snake[i].y;
        snake[i].x = snake[i - 1].x;
        snake[i].y = snake[i - 1].y;
      }
      snake[0].prevX = snake[0].x;
      snake[0].prevY = snake[0].y;
      snake[0].x = head.x;
      snake[0].y = head.y;

      if (head.x === apple.x && head.y === apple.y) {
        sound.playEat();
        applesEaten++;
        appleTxt.textContent = `${applesEaten} / 10`;

        // Chispas de comer manzana
        for (let p = 0; p < 8; p++) {
          particles.push({
            x: (apple.x + 0.5) * tileW,
            y: (apple.y + 0.5) * tileH,
            vx: (Math.random() - 0.5) * 4,
            vy: (Math.random() - 0.5) * 4,
            alpha: 1,
            color: '#10b981'
          });
        }

        // Crecer: añadir nuevo segmento en la cola
        const tail = snake[snake.length - 1];
        snake.push({ x: tail.prevX, y: tail.prevY, prevX: tail.prevX, prevY: tail.prevY });

        spawnApple();
        if (applesEaten >= TARGET_APPLES) {
          gameWon = true;
          completeCurrentChallenge('¡Gusano ecológico creció con las 10 manzanas con movimientos fluidos en GreenTask!');
          return;
        }
      }
    }

    function render(now) {
      if (gameWon) return;

      if (now - lastStepTime >= STEP_TIME) {
        step();
        lastStepTime = now;
      }

      const progress = Math.min(1, Math.max(0, (now - lastStepTime) / STEP_TIME));

      ctx.fillStyle = '#020617';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Cuadrícula sutil de fondo
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;
      for (let x = 0; x <= canvas.width; x += tileW) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
      }
      for (let y = 0; y <= canvas.height; y += tileH) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
      }

      // Perímetro de advertencia de pared mortal
      ctx.strokeStyle = 'rgba(239, 68, 68, 0.45)';
      ctx.lineWidth = 3;
      ctx.strokeRect(1.5, 1.5, canvas.width - 3, canvas.height - 3);

      // Manzana con respiración fluida
      const applePulse = Math.sin(now * 0.007) * 1.5;
      const appleRadius = tileW * 0.38 + applePulse;
      ctx.fillStyle = '#ef4444';
      ctx.shadowColor = '#ef4444';
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc((apple.x + 0.5) * tileW, (apple.y + 0.5) * tileH, appleRadius, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Hoja de la manzana
      ctx.fillStyle = '#10b981';
      ctx.beginPath();
      ctx.ellipse((apple.x + 0.5) * tileW + 2, (apple.y + 0.5) * tileH - appleRadius - 2, 4, 2, Math.PI / 4, 0, Math.PI * 2);
      ctx.fill();

      // Partículas
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.04;
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillRect(p.x - 2, p.y - 2, 4, 4);
        ctx.globalAlpha = 1.0;
        if (p.alpha <= 0) particles.splice(i, 1);
      }

      // Dibujar gusano orgánico fluido con interpolación continua
      for (let i = snake.length - 1; i >= 0; i--) {
        const seg = snake[i];
        const curX = seg.prevX + (seg.x - seg.prevX) * progress;
        const curY = seg.prevY + (seg.y - seg.prevY) * progress;
        const px = (curX + 0.5) * tileW;
        const py = (curY + 0.5) * tileH;

        // Ondulación viva de oruga
        const undulation = Math.sin(now * 0.009 + i * 0.65) * 1.2;
        const drawPx = px + (-dir.y * undulation);
        const drawPy = py + (dir.x * undulation);

        const radius = i === 0 ? tileW * 0.44 : Math.max(tileW * 0.28, tileW * 0.38 - (i * 0.4));

        ctx.save();
        ctx.translate(drawPx, drawPy);

        // Degradado vivo de oruga ecológica
        const grad = ctx.createRadialGradient(-radius * 0.3, -radius * 0.3, 1, 0, 0, radius);
        if (i === 0) {
          grad.addColorStop(0, '#6ee7b7');
          grad.addColorStop(1, '#059669');
        } else {
          grad.addColorStop(0, '#34d399');
          grad.addColorStop(1, '#047857');
        }
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2);
        ctx.fill();

        // Anillos decorativos de la oruga
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.arc(0, 0, radius * 0.65, 0, Math.PI * 2);
        ctx.stroke();

        // Ojos y antenas en la cabeza
        if (i === 0) {
          const eyeOffX = dir.x * (radius * 0.42);
          const eyeOffY = dir.y * (radius * 0.42);
          const perpX = -dir.y * (radius * 0.36);
          const perpY = dir.x * (radius * 0.36);

          // Ojo 1
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(eyeOffX + perpX, eyeOffY + perpY, 3.2, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = '#0f172a';
          ctx.beginPath();
          ctx.arc(eyeOffX + perpX + dir.x, eyeOffY + perpY + dir.y, 1.8, 0, Math.PI * 2);
          ctx.fill();

          // Ojo 2
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(eyeOffX - perpX, eyeOffY - perpY, 3.2, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = '#0f172a';
          ctx.beginPath();
          ctx.arc(eyeOffX - perpX + dir.x, eyeOffY - perpY + dir.y, 1.8, 0, Math.PI * 2);
          ctx.fill();

          // Antenas suaves oscilantes
          const antSwing = Math.sin(now * 0.015) * 2;
          ctx.strokeStyle = '#34d399';
          ctx.lineWidth = 1.8;
          ctx.beginPath();
          ctx.moveTo(perpX, perpY);
          ctx.lineTo(perpX + dir.x * 6 + antSwing, perpY + dir.y * 6 - 4);
          ctx.moveTo(-perpX, -perpY);
          ctx.lineTo(-perpX + dir.x * 6 - antSwing, -perpY + dir.y * 6 - 4);
          ctx.stroke();
        }

        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    }

    animId = requestAnimationFrame(render);

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
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener('keydown', onKeyDown);
    };
  }

  // =========================================================================
  // 5. PATITAS AL RESCATE: RUNNER CON PERRO REALISTA (PATAS ANDANDO) & 3 VIDAS
  // =========================================================================
  function buildPatitasRunner() {
    let attemptCount = 1;

    interactiveArena.innerHTML = `
      <div class="patitas-runner-ui">
        <div class="runner-hud-bar">
          <span><i class="fa-solid fa-flag-checkered"></i> Progreso: <strong id="runner-dist-txt">0%</strong></span>
          <span class="runner-speed-badge" id="runner-attempt-txt" style="background:rgba(244,63,94,0.18); border-color:#f43f5e; color:#fb7185;">
            <i class="fa-solid fa-rotate-left"></i> INTENTO 1
          </span>
          <span class="runner-speed-badge" id="runner-speed-txt"><i class="fa-solid fa-bolt"></i> 1.0x</span>
          <span><i class="fa-solid fa-heart"></i> <strong id="runner-lives-txt">❤️❤️❤️</strong></span>
        </div>

        <div class="runner-canvas-wrap" id="runner-canvas-wrap">
          <canvas id="patitas-canvas"></canvas>
        </div>

        <div class="runner-dual-controls">
          <button id="runner-down-btn" class="runner-btn runner-btn-down" title="Bajar rápido en aire o deslizarse en suelo">
            <i class="fa-solid fa-angles-down"></i> BAJAR / DESLIZAR (S / ↓)
          </button>
          <button id="runner-jump-btn" class="runner-btn runner-btn-jump" title="Saltar obstáculos">
            <i class="fa-solid fa-angles-up"></i> SALTAR (ESPACIO / W / ↑)
          </button>
        </div>
      </div>
    `;

    const canvas = document.getElementById('patitas-canvas');
    const wrap = document.getElementById('runner-canvas-wrap');
    const ctx = canvas.getContext('2d');
    const distTxt = document.getElementById('runner-dist-txt');
    const attemptTxt = document.getElementById('runner-attempt-txt');
    const speedTxt = document.getElementById('runner-speed-txt');
    const livesTxt = document.getElementById('runner-lives-txt');
    const jumpBtn = document.getElementById('runner-jump-btn');
    const downBtn = document.getElementById('runner-down-btn');

    canvas.width = wrap.clientWidth || 320;
    canvas.height = wrap.clientHeight || 200;

    let animId = null;
    let groundY = canvas.height - 35;
    let dog = {
      x: 48,
      y: groundY - 26,
      vy: 0,
      gravity: 0.68,
      isJumping: false,
      isSliding: false,
      slideTimer: 0,
      rotation: 0,
      frame: 0
    };
    let obstacles = [];
    let particles = [];
    let bgGridOffset = 0;
    let distance = 0;
    let lives = 3;
    let spawnCounter = 0;
    let gameWon = false;
    let hurtFlash = 0;

    function jump() {
      if (gameWon) return;
      if (!dog.isJumping) {
        dog.isJumping = true;
        dog.isSliding = false;
        dog.slideTimer = 0;
        dog.vy = -10.8;
        sound.playJump();

        // Chispas neón al saltar
        for (let p = 0; p < 8; p++) {
          particles.push({
            x: dog.x - 6 + (Math.random() - 0.5) * 12,
            y: groundY - 2,
            vx: (Math.random() - 0.5) * 3,
            vy: -Math.random() * 3,
            size: 4,
            alpha: 1,
            color: '#38bdf8'
          });
        }
      }
    }

    function fastDown() {
      if (gameWon) return;
      if (dog.isJumping) {
        // En el aire: caída rápida (fast fall slam) hacia el suelo
        dog.vy = Math.max(dog.vy + 7, 13);
        sound.playSnap();

        for (let p = 0; p < 6; p++) {
          particles.push({
            x: dog.x + (Math.random() - 0.5) * 10,
            y: dog.y - 10,
            vx: (Math.random() - 0.5) * 2,
            vy: -2,
            size: 3,
            alpha: 1,
            color: '#fb923c'
          });
        }
      } else {
        // En el suelo: deslizamiento rasante para pasar bajo obstáculos elevados
        dog.isSliding = true;
        dog.slideTimer = 34; // duración del deslizamiento
        sound.playSnap();

        for (let p = 0; p < 6; p++) {
          particles.push({
            x: dog.x - 12,
            y: groundY - 3,
            vx: -2 - Math.random() * 3,
            vy: -Math.random() * 2,
            size: 3.5,
            alpha: 1,
            color: '#f97316'
          });
        }
      }
    }

    jumpBtn.addEventListener('click', (e) => { e.preventDefault(); jump(); });
    downBtn.addEventListener('click', (e) => { e.preventDefault(); fastDown(); });

    canvas.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      if (clientX < canvas.width * 0.45) {
        fastDown();
      } else {
        jump();
      }
    });

    function onKeyDown(e) {
      if (e.key === ' ' || e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') {
        e.preventDefault();
        jump();
      } else if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') {
        e.preventDefault();
        fastDown();
      }
    }
    window.addEventListener('keydown', onKeyDown);

    function updateLivesUI() {
      livesTxt.textContent = lives === 3 ? '❤️❤️❤️' : (lives === 2 ? '❤️❤️' : (lives === 1 ? '❤️' : '💀'));
    }

    function resetRun() {
      attemptCount++;
      attemptTxt.innerHTML = `<i class="fa-solid fa-rotate-left"></i> INTENTO ${attemptCount}`;
      distance = 0;
      lives = 3;
      obstacles = [];
      dog.y = groundY - 26;
      dog.vy = 0;
      dog.isJumping = false;
      dog.isSliding = false;
      dog.rotation = 0;
      updateLivesUI();
      distTxt.textContent = '0%';
      if (speedTxt) speedTxt.innerHTML = '<i class="fa-solid fa-bolt"></i> 1.0x';
    }

    // Dibujado del perro con soporte de salto con giro Geometry Dash y deslizamiento rasante
    function drawDog(x, y, frame, jumping, sliding, rotation) {
      ctx.save();
      ctx.translate(x, y);

      if (jumping) {
        ctx.rotate(rotation);
      }

      const dogColor = hurtFlash > 0 ? '#ef4444' : '#d97706';
      const earColor = hurtFlash > 0 ? '#b91c1c' : '#b45309';

      if (sliding) {
        // Postura aerodinámica de deslizamiento rasante (bajo el obstáculo aéreo)
        ctx.fillStyle = dogColor;
        ctx.beginPath();
        ctx.roundRect(-18, -4, 36, 12, 5);
        ctx.fill();

        // Cabeza agachada hacia adelante
        ctx.beginPath();
        ctx.roundRect(14, -8, 14, 12, 4);
        ctx.fill();

        // Hocico y nariz
        ctx.fillStyle = '#030712';
        ctx.beginPath();
        ctx.arc(28, -2, 2.2, 0, Math.PI * 2);
        ctx.fill();

        // Ojo concentrado
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(21, -4, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#030712';
        ctx.beginPath();
        ctx.arc(22, -4, 1, 0, Math.PI * 2);
        ctx.fill();

        // Oreja pegada hacia atrás por el viento
        ctx.fillStyle = earColor;
        ctx.beginPath();
        ctx.roundRect(4, -9, 12, 4, 2);
        ctx.fill();

        // Chispas de fricción al deslizarse
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(-16, 8);
        ctx.lineTo(-24, 7);
        ctx.stroke();

        ctx.restore();
        return;
      }

      // Animación normal / trotando / saltando
      const tailWag = Math.sin(frame * 0.4) * 0.4;
      ctx.save();
      ctx.translate(-14, -6);
      ctx.rotate(-0.5 + tailWag);
      ctx.fillStyle = earColor;
      ctx.beginPath();
      ctx.roundRect(0, -3, 10, 5, 2);
      ctx.fill();
      ctx.restore();

      const legPhase1 = jumping ? 0.3 : Math.sin(frame * 0.35);
      const legPhase2 = jumping ? -0.3 : -Math.sin(frame * 0.35);

      ctx.strokeStyle = earColor;
      ctx.lineWidth = 3.5;
      ctx.lineCap = 'round';

      ctx.beginPath();
      ctx.moveTo(-8, 6);
      ctx.lineTo(-8 + legPhase2 * 7, 18);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(8, 6);
      ctx.lineTo(8 + legPhase1 * 7, 18);
      ctx.stroke();

      // Cuerpo
      ctx.fillStyle = dogColor;
      ctx.beginPath();
      ctx.roundRect(-14, -8, 28, 16, 6);
      ctx.fill();

      // Cabeza
      ctx.beginPath();
      ctx.roundRect(8, -18, 16, 14, 5);
      ctx.fill();

      // Hocico y nariz
      ctx.beginPath();
      ctx.roundRect(18, -13, 8, 8, 3);
      ctx.fill();
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

      // Oreja
      const earFlap = jumping ? -0.5 : Math.sin(frame * 0.3) * 0.25;
      ctx.save();
      ctx.translate(11, -16);
      ctx.rotate(0.3 + earFlap);
      ctx.fillStyle = earColor;
      ctx.beginPath();
      ctx.roundRect(-2, 0, 6, 12, 3);
      ctx.fill();
      ctx.restore();

      // Patas delanteras
      ctx.strokeStyle = dogColor;
      ctx.lineWidth = 3.5;

      ctx.beginPath();
      ctx.moveTo(-6, 6);
      ctx.lineTo(-6 + legPhase1 * 7, 18);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(10, 6);
      ctx.lineTo(10 + legPhase2 * 7, 18);
      ctx.stroke();

      ctx.restore();
    }

    function loop() {
      if (gameWon) return;

      const speedMultiplier = 1 + (distance / 100) * 1.5;
      const scrollSpeed = 2.6 + (distance / 100) * 4.4;

      // Físicas del salto
      if (dog.isJumping) {
        dog.y += dog.vy;
        dog.vy += dog.gravity;
        dog.rotation += 0.09;

        if (dog.y >= groundY - 26) {
          dog.y = groundY - 26;
          dog.vy = 0;
          dog.isJumping = false;
          dog.rotation = 0;
        }
      } else {
        dog.rotation = 0;
        if (dog.isSliding) {
          dog.slideTimer--;
          if (dog.slideTimer <= 0) {
            dog.isSliding = false;
          }
        }
      }

      dog.frame += 0.8 * speedMultiplier;
      if (hurtFlash > 0) hurtFlash--;

      // Estela neón estilo Geometry Dash detrás del perrito
      if (Math.random() > 0.35) {
        particles.push({
          x: dog.x - 14,
          y: dog.isSliding ? groundY - 4 : dog.y + (Math.random() - 0.5) * 12,
          vx: -scrollSpeed * 0.4,
          vy: (Math.random() - 0.5) * 1.5,
          size: dog.isSliding ? 4 : 5,
          alpha: 0.9,
          color: dog.isSliding ? '#f97316' : (dog.isJumping ? '#38bdf8' : '#a855f7')
        });
      }

      distance += 0.038;
      distTxt.textContent = `${Math.min(100, Math.floor(distance))}%`;
      if (speedTxt) {
        speedTxt.innerHTML = `<i class="fa-solid fa-bolt"></i> ${speedMultiplier.toFixed(1)}x`;
      }

      if (distance >= 100) {
        distance = 100;
        gameWon = true;
        completeCurrentChallenge('¡Superaste la pista Geometry Dash en Patitas al Rescate con saltos y deslizamientos perfectos!');
        return;
      }

      // Generación de obstáculos variados (Picos simples, picos dobles y obstáculos elevados)
      spawnCounter++;
      const spawnLimit = Math.max(36, Math.floor(64 - (distance / 100) * 26));
      if (spawnCounter > spawnLimit) {
        spawnCounter = 0;
        const rand = Math.random();
        if (rand < 0.45) {
          // Pico simple neón Geometry Dash en suelo
          obstacles.push({
            x: canvas.width + 10,
            y: groundY - 22,
            w: 20,
            h: 22,
            type: 'spike'
          });
        } else if (rand < 0.72) {
          // Pico doble neón en suelo
          obstacles.push({
            x: canvas.width + 10,
            y: groundY - 22,
            w: 38,
            h: 22,
            type: 'double-spike'
          });
        } else {
          // Obstáculo aéreo suspendido (Requiere BAJAR / deslizarse por debajo)
          obstacles.push({
            x: canvas.width + 10,
            y: groundY - 44,
            w: 36,
            h: 20,
            type: 'overhead'
          });
        }
      }

      // Fondo cibernético Geometry Dash
      ctx.fillStyle = '#030712';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Cuadrícula neón pulsante de fondo
      bgGridOffset = (bgGridOffset + scrollSpeed * 0.5) % 24;
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.07)';
      ctx.lineWidth = 1;
      for (let x = -bgGridOffset; x < canvas.width; x += 24) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, groundY); ctx.stroke();
      }
      for (let y = 0; y < groundY; y += 24) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
      }

      // Suelo neón con cuadrícula electroluminiscente
      ctx.fillStyle = '#050c1e';
      ctx.fillRect(0, groundY, canvas.width, canvas.height - groundY);

      // Línea brillante del suelo neón
      ctx.strokeStyle = '#00f0ff';
      ctx.lineWidth = 2.5;
      ctx.shadowColor = '#00f0ff';
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.moveTo(0, groundY);
      ctx.lineTo(canvas.width, groundY);
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Partículas neón de la estela
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.04;
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillRect(p.x, p.y, p.size, p.size);
        ctx.globalAlpha = 1.0;
        if (p.alpha <= 0) particles.splice(i, 1);
      }

      // Dibujar y gestionar obstáculos
      for (let i = obstacles.length - 1; i >= 0; i--) {
        const obs = obstacles[i];
        obs.x -= scrollSpeed;

        if (obs.type === 'spike') {
          // Pico triangular Neón Geometry Dash
          ctx.save();
          ctx.shadowColor = '#f43f5e';
          ctx.shadowBlur = 12;
          ctx.fillStyle = '#0f172a';
          ctx.strokeStyle = '#f43f5e';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(obs.x, obs.y + obs.h);
          ctx.lineTo(obs.x + obs.w / 2, obs.y);
          ctx.lineTo(obs.x + obs.w, obs.y + obs.h);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();

          // Detalle geométrico interior del pico
          ctx.strokeStyle = '#fb7185';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(obs.x + 4, obs.y + obs.h);
          ctx.lineTo(obs.x + obs.w / 2, obs.y + 6);
          ctx.lineTo(obs.x + obs.w - 4, obs.y + obs.h);
          ctx.stroke();
          ctx.restore();
        } else if (obs.type === 'double-spike') {
          // Pico doble
          ctx.save();
          ctx.shadowColor = '#a855f7';
          ctx.shadowBlur = 12;
          for (let k = 0; k < 2; k++) {
            const sx = obs.x + k * 18;
            ctx.fillStyle = '#0f172a';
            ctx.strokeStyle = '#c084fc';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(sx, obs.y + obs.h);
            ctx.lineTo(sx + 9, obs.y);
            ctx.lineTo(sx + 18, obs.y + obs.h);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
          }
          ctx.restore();
        } else if (obs.type === 'overhead') {
          // Obstáculo aéreo suspendido (bloque neón con advertencia de deslizamiento)
          ctx.save();
          ctx.shadowColor = '#f59e0b';
          ctx.shadowBlur = 14;
          ctx.fillStyle = '#1e293b';
          ctx.strokeStyle = '#fbbf24';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.roundRect(obs.x, obs.y, obs.w, obs.h, 4);
          ctx.fill();
          ctx.stroke();

          // Franjas de advertencia en el obstáculo aéreo
          ctx.fillStyle = '#f59e0b';
          ctx.font = 'bold 9px "JetBrains Mono", monospace';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('⚡ BAJAR', obs.x + obs.w / 2, obs.y + obs.h / 2);
          ctx.restore();
        }

        // Detección de colisiones precisa
        let collided = false;
        if (obs.type === 'overhead') {
          // El obstáculo aéreo se esquiva SI Y SOLO SI el perro se desliza por el suelo
          if (!dog.isSliding) {
            // Si está de pie o saltando hacia él
            if (dog.x + 14 > obs.x && dog.x - 14 < obs.x + obs.w) {
              const dogTop = dog.isJumping ? dog.y - 20 : groundY - 26;
              if (dogTop < obs.y + obs.h) {
                collided = true;
              }
            }
          }
        } else {
          // Picos en el suelo: requieren SALTAR
          const inXRange = (dog.x + 12 > obs.x && dog.x - 12 < obs.x + obs.w);
          const inYRange = (dog.y + 12 >= obs.y);
          if (inXRange && inYRange) {
            collided = true;
          }
        }

        if (collided) {
          lives--;
          sound.playHurt();
          hurtFlash = 16;
          obstacles.splice(i, 1);
          updateLivesUI();

          // Explosión de chispas en impacto
          for (let p = 0; p < 12; p++) {
            particles.push({
              x: dog.x,
              y: dog.y,
              vx: (Math.random() - 0.5) * 6,
              vy: (Math.random() - 0.5) * 6,
              size: 4,
              alpha: 1,
              color: '#ef4444'
            });
          }

          if (lives <= 0) {
            resetRun();
          }
        } else if (obs.x < -40) {
          obstacles.splice(i, 1);
        }
      }

      // Dibujar perro
      drawDog(dog.x, dog.y, dog.frame, dog.isJumping, dog.isSliding, dog.rotation);

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
    const PUZZLES = [
      {
        id: 1,
        title: 'Nivel 1: Paso Libre',
        desc: 'Mueve el robot en línea recta hacia la terminal.',
        size: 5,
        start: { r: 2, c: 0 },
        target: { r: 2, c: 4 },
        obstacles: [{ r: 1, c: 2 }, { r: 3, c: 2 }]
      },
      {
        id: 2,
        title: 'Nivel 2: El Desvío en L',
        desc: 'Rodea la pared central para alcanzar la meta.',
        size: 5,
        start: { r: 0, c: 0 },
        target: { r: 4, c: 4 },
        obstacles: [{ r: 0, c: 2 }, { r: 1, c: 2 }, { r: 2, c: 2 }]
      },
      {
        id: 3,
        title: 'Nivel 3: Muralla Zigzag',
        desc: 'Navega la ruta en S esquivando los muros.',
        size: 5,
        start: { r: 0, c: 0 },
        target: { r: 4, c: 0 },
        obstacles: [{ r: 1, c: 0 }, { r: 1, c: 1 }, { r: 1, c: 2 }, { r: 3, c: 2 }, { r: 3, c: 3 }, { r: 3, c: 4 }]
      },
      {
        id: 4,
        title: 'Nivel 4: El Búnker en U',
        desc: 'Ingresa al búnker y conéctate a la computadora central.',
        size: 5,
        start: { r: 0, c: 4 },
        target: { r: 2, c: 2 },
        obstacles: [{ r: 1, c: 1 }, { r: 2, c: 1 }, { r: 3, c: 1 }, { r: 3, c: 2 }, { r: 3, c: 3 }, { r: 1, c: 3 }]
      },
      {
        id: 5,
        title: 'Nivel 5: Paso Estrecho',
        desc: 'Cruza por el único nodo abierto del firewall.',
        size: 5,
        start: { r: 4, c: 0 },
        target: { r: 0, c: 4 },
        obstacles: [{ r: 2, c: 0 }, { r: 2, c: 1 }, { r: 2, c: 3 }, { r: 2, c: 4 }]
      },
      {
        id: 6,
        title: 'Nivel 6: Circuito Cuadrado',
        desc: 'Bordea el núcleo impenetrable por el anillo exterior.',
        size: 5,
        start: { r: 0, c: 0 },
        target: { r: 4, c: 2 },
        obstacles: [{ r: 1, c: 1 }, { r: 1, c: 2 }, { r: 1, c: 3 }, { r: 2, c: 1 }, { r: 2, c: 2 }, { r: 2, c: 3 }, { r: 3, c: 1 }, { r: 3, c: 2 }, { r: 3, c: 3 }]
      },
      {
        id: 7,
        title: 'Nivel 7: Intersección en Cruz',
        desc: 'El centro tiene un bloqueo en cruz; navega por los flancos.',
        size: 5,
        start: { r: 0, c: 2 },
        target: { r: 4, c: 2 },
        obstacles: [{ r: 2, c: 1 }, { r: 2, c: 2 }, { r: 2, c: 3 }, { r: 1, c: 2 }, { r: 3, c: 2 }]
      },
      {
        id: 8,
        title: 'Nivel 8: Puente de Datos',
        desc: 'Cruza entre los dos cuadrantes a través del puente único.',
        size: 5,
        start: { r: 4, c: 4 },
        target: { r: 0, c: 0 },
        obstacles: [{ r: 0, c: 2 }, { r: 1, c: 2 }, { r: 3, c: 2 }, { r: 4, c: 2 }, { r: 2, c: 0 }, { r: 2, c: 4 }]
      },
      {
        id: 9,
        title: 'Nivel 9: Campo Minado',
        desc: 'Programa con precisión milimétrica entre obstáculos dispersos.',
        size: 5,
        start: { r: 0, c: 0 },
        target: { r: 4, c: 4 },
        obstacles: [{ r: 0, c: 3 }, { r: 1, c: 1 }, { r: 2, c: 3 }, { r: 3, c: 1 }, { r: 3, c: 2 }, { r: 4, c: 1 }]
      },
      {
        id: 10,
        title: 'Nivel 10: El Gran Algoritmo',
        desc: 'Desafío final: laberinto espiral con curva cerrada.',
        size: 5,
        start: { r: 4, c: 0 },
        target: { r: 0, c: 4 },
        obstacles: [{ r: 4, c: 1 }, { r: 3, c: 1 }, { r: 2, c: 1 }, { r: 1, c: 1 }, { r: 1, c: 3 }, { r: 2, c: 3 }, { r: 3, c: 3 }, { r: 4, c: 3 }]
      }
    ];

    let currentPuzzleIdx = 0;
    let program = [];
    let isExecuting = false;
    let stepInterval = null;

    let currentPuzzle = PUZZLES[currentPuzzleIdx];
    let robotPos = { ...currentPuzzle.start };

    interactiveArena.innerHTML = `
      <div class="softplay-robot-ui">
        <div class="softplay-puzzles-strip" id="softplay-puzzles-strip">
          ${PUZZLES.map((p, i) => `
            <div class="softplay-puzzle-pill ${i === 0 ? 'active' : ''}" id="sp-pill-${i}">
              P${i + 1}
            </div>
          `).join('')}
        </div>

        <div class="softplay-puzzle-meta">
          <span id="puzzle-title-txt" style="font-weight:700; color:var(--blue-accent);">
            ${currentPuzzle.title}
          </span>
          <span id="puzzle-step-counter" style="color:var(--text-muted); font-family:'JetBrains Mono', monospace;">
            Órdenes: 0 / 14
          </span>
        </div>

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
    const titleTxt = document.getElementById('puzzle-title-txt');
    const counterTxt = document.getElementById('puzzle-step-counter');

    function loadPuzzle(idx) {
      currentPuzzleIdx = idx;
      currentPuzzle = PUZZLES[currentPuzzleIdx];
      robotPos = { ...currentPuzzle.start };
      program = [];
      isExecuting = false;
      if (stepInterval) clearInterval(stepInterval);
      execBtn.disabled = false;

      titleTxt.textContent = currentPuzzle.title;
      counterTxt.textContent = 'Órdenes: 0 / 14';

      for (let i = 0; i < PUZZLES.length; i++) {
        const pill = document.getElementById(`sp-pill-${i}`);
        if (pill) {
          pill.className = 'softplay-puzzle-pill ' + (i < currentPuzzleIdx ? 'completed' : (i === currentPuzzleIdx ? 'active' : ''));
        }
      }

      renderBoard();
      renderQueue();
    }

    function renderBoard() {
      board.innerHTML = '';
      const size = currentPuzzle.size;
      board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
      board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

      for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
          const cell = document.createElement('div');
          const isObs = currentPuzzle.obstacles.some(o => o.r === r && o.c === c);
          const isTarget = currentPuzzle.target.r === r && currentPuzzle.target.c === c;

          cell.className = 'robot-cell ' + (isObs ? 'obstacle' : (isTarget ? 'target' : ''));

          if (robotPos.r === r && robotPos.c === c) {
            cell.innerHTML = '<span class="robot-token">🤖</span>';
          } else if (isTarget) {
            cell.innerHTML = '<span style="font-size:1.15rem;">💻</span>';
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
      counterTxt.textContent = `Órdenes: ${program.length} / 14`;
    }

    renderBoard();
    renderQueue();

    document.querySelectorAll('.btn-arrow-order').forEach(btn => {
      btn.addEventListener('click', () => {
        if (isExecuting) return;
        if (program.length < 14) {
          sound.playClick();
          program.push(btn.getAttribute('data-cmd'));
          renderQueue();
        }
      });
    });

    clearBtn.addEventListener('click', () => {
      if (isExecuting) return;
      sound.playClick();
      program = [];
      robotPos = { ...currentPuzzle.start };
      renderBoard();
      renderQueue();
    });

    execBtn.addEventListener('click', () => {
      if (program.length === 0 || isExecuting) return;
      isExecuting = true;
      execBtn.disabled = true;
      robotPos = { ...currentPuzzle.start };
      renderBoard();

      let stepIdx = 0;
      stepInterval = setInterval(() => {
        document.querySelectorAll('.cmd-badge').forEach(b => b.classList.remove('active-step'));

        if (stepIdx >= program.length) {
          clearInterval(stepInterval);
          isExecuting = false;
          execBtn.disabled = false;

          // Comprobar si llegó a la computadora meta
          if (robotPos.r === currentPuzzle.target.r && robotPos.c === currentPuzzle.target.c) {
            sound.playSuccess();
            const currentPill = document.getElementById(`sp-pill-${currentPuzzleIdx}`);
            if (currentPill) currentPill.classList.add('completed');

            if (currentPuzzleIdx >= PUZZLES.length - 1) {
              completeCurrentChallenge('¡Completaste con éxito los 10 acertijos algorítmicos de programación en SoftPlay!');
            } else {
              titleTxt.textContent = `✅ ¡Acertijo ${currentPuzzleIdx + 1} Resuelto! Cargando el siguiente...`;
              setTimeout(() => {
                loadPuzzle(currentPuzzleIdx + 1);
              }, 750);
            }
          } else {
            sound.playHurt();
            titleTxt.textContent = `⚠️ No llegó a la meta. Ajusta las órdenes y reintenta.`;
            setTimeout(() => {
              titleTxt.textContent = currentPuzzle.title;
            }, 1800);
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

        const size = currentPuzzle.size;
        if (nr >= 0 && nr < size && nc >= 0 && nc < size) {
          const hitObs = currentPuzzle.obstacles.some(o => o.r === nr && o.c === nc);
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
      }, 340);
    });

    activeGameCleanup = () => {
      if (stepInterval) clearInterval(stepInterval);
    };
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
