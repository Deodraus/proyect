/**
 * ============================================================================
 * PASAPORTE DE INNOVACIÓN • 11-4
 * Motor Lógico de Gamificación y Minijuegos
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. SINTETIZADOR DE AUDIO WEB (Sin archivos externos)
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

      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
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
      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    }
  }

  const sound = new SoundSynth();

  // 2. DATASET DE LOS 7 DESTINOS Y SUS MINIJUEGOS
  const destinations = [
    {
      id: '01',
      key: 'vitline',
      name: 'VitLine',
      title: 'VitLine Airlines',
      badge: '01 • VitLine',
      category: 'Vuelos & Reservas',
      videoSrc: 'assets/video/vitlinepage.mp4',
      bgImage: 'assets/images/tecnologia.jpeg',
      icon: 'fa-plane-departure',
      briefing: {
        title: 'VitLine Airlines',
        desc: 'Plataforma para cotización de rutas comerciales, reservación de vuelos y emisión digital de tiquetes protegidos.',
        req: 'Despacha un vuelo eligiendo destino y categoría comercial.'
      },
      game: {
        title: 'Torre de Despacho de Vuelos',
        subtitle: 'Simulador Aéreo VitLine',
        badge: 'Ruta & Despacho'
      }
    },
    {
      id: '02',
      key: 'dalulu',
      name: 'DaLulú Travel',
      title: 'DaLulú Travel',
      badge: '02 • DaLulú',
      category: 'Turismo en Colombia',
      videoSrc: 'assets/video/dalulupage.mp4',
      bgImage: 'assets/images/aprender.jpeg',
      icon: 'fa-mountain-sun',
      briefing: {
        title: 'DaLulú Travel Agency',
        desc: 'Agencia de viajes dedicada a crear experiencias seguras e itinerarios personalizados por Colombia.',
        req: 'Identifica el destino emblemático de Antioquia en el mapa interactivo.'
      },
      game: {
        title: 'Ruta Turística Colombiana',
        subtitle: 'Explorador de Destinos DaLulú',
        badge: 'Identificación Geográfica'
      }
    },
    {
      id: '03',
      key: 'glowsmec',
      name: 'GlowSmec',
      title: 'GlowSmec',
      badge: '03 • GlowSmec',
      category: 'Cuidado Estético & Spa',
      videoSrc: 'assets/video/glowsmecpage.mp4',
      bgImage: 'assets/images/oportunidades.jpeg',
      icon: 'fa-spa',
      briefing: {
        title: 'GlowSmec Salón & Spa',
        desc: 'Plataforma para salones de belleza con agendamiento en línea, asesorías de estilo y venta de productos sostenibles.',
        req: 'Selecciona un horario disponible y confirma tu cita de estilismo.'
      },
      game: {
        title: 'Agenda & Estilismo Exprés',
        subtitle: 'Sistema de Citas GlowSmec',
        badge: 'Agendamiento Digital'
      }
    },
    {
      id: '04',
      key: 'greentask',
      name: 'GreenTask',
      title: 'GreenTask',
      badge: '04 • GreenTask',
      category: 'Ecología & Reciclaje',
      videoSrc: 'assets/video/greentaskpage.webm',
      bgImage: 'assets/images/juntos.jpeg',
      icon: 'fa-recycle',
      briefing: {
        title: 'GreenTask Sostenible',
        desc: 'Comprometida con la regeneración ambiental, reciclaje de plásticos PET, papel, cartón y donaciones ecológicas.',
        req: 'Clasifica los 3 residuos en las canecas de reciclaje correctas.'
      },
      game: {
        title: 'Eco-Sorting Challenge',
        subtitle: 'Clasificador de Residuos GreenTask',
        badge: 'Clasificación Verde'
      }
    },
    {
      id: '05',
      key: 'patitas',
      name: 'Patitas al Rescate',
      title: 'Patitas al Rescate',
      badge: '05 • Patitas',
      category: 'Adopción & Rescate Animal',
      videoSrc: 'assets/video/patitasalrescatepage.mp4',
      bgImage: 'assets/images/catalina.jpeg',
      icon: 'fa-paw',
      briefing: {
        title: 'Patitas al Rescate',
        desc: 'Plataforma integral para conectar animales rescatados con adoptantes responsables y tienda solidaria para el refugio.',
        req: 'Encuentra al adoptante ideal y responsable para el perro rescatado.'
      },
      game: {
        title: 'Match de Adopción Responsable',
        subtitle: 'Módulo de Adopciones Patitas al Rescate',
        badge: 'Bienestar Animal'
      }
    },
    {
      id: '06',
      key: 'softplay',
      name: 'SoftPlay',
      title: 'SoftPlay',
      badge: '06 • SoftPlay',
      category: 'Educación en Programación',
      videoSrc: 'assets/video/softplaypage.mp4',
      bgImage: 'assets/images/quehacemos.jpeg',
      icon: 'fa-code',
      briefing: {
        title: 'SoftPlay Academy',
        desc: 'Cursos de programación práctica mediante retos interactivos, gamificación y proyectos dinámicos.',
        req: 'Ejecuta y compila el código sin errores para desbloquear el nivel.'
      },
      game: {
        title: 'Code Quest / Bug Hunter',
        subtitle: 'Simulador de Código SoftPlay',
        badge: 'Sintaxis & Lógica'
      }
    },
    {
      id: '07',
      key: 'tecnofix',
      name: 'TecnoFix',
      title: 'TecnoFix',
      badge: '07 • TecnoFix',
      category: 'Hardware & Servicio Técnico',
      videoSrc: 'assets/video/tecnofixpage.mp4',
      bgImage: 'assets/images/tecnologia.jpeg',
      icon: 'fa-screwdriver-wrench',
      briefing: {
        title: 'TecnoFix Computadores',
        desc: 'Venta de repuestos, computadores gamer y sistema de agendamiento para servicio técnico y mantenimiento.',
        req: 'Monta los 4 componentes en la motherboard y enciende el equipo.'
      },
      game: {
        title: 'Arma tu PC Gamer & Diagnóstico',
        subtitle: 'Taller Técnico TecnoFix',
        badge: 'Ensamblaje Hardware'
      }
    }
  ];

  // 3. GESTIÓN DEL ESTADO Y PERSISTENCIA (LOCALSTORAGE)
  const STORAGE_KEY = 'pasaporte_11_4_state_v1';
  let appState = {
    currentIndex: 0,
    stamps: {}, // { '01': true, '02': false, ... }
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

  // Modales
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

  // Actualizar etiqueta de sonido
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

  // 5. RENDERIZADO DEL DOCK DE DESTINOS
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

  // 6. RENDERIZADO DEL PASAPORTE MODAL
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

  // 7. ACTUALIZACIÓN DE FONDO CON BLUR
  function updateBackground(bgUrl) {
    if (!bgUrl) return;
    const incomingSlide = activeBgSlide === 1 ? bgSlide2 : bgSlide1;
    const currentSlide = activeBgSlide === 1 ? bgSlide1 : bgSlide2;

    incomingSlide.style.backgroundImage = `url('${bgUrl}')`;
    incomingSlide.classList.add('active');
    currentSlide.classList.remove('active');

    activeBgSlide = activeBgSlide === 1 ? 2 : 1;
  }

  // 8. CONSTRUCTOR DINÁMICO DE MINIJUEGOS
  let activeChallengeCompleted = false;

  function loadMinigame(dest) {
    interactiveArena.innerHTML = '';
    activeChallengeCompleted = false;
    stampAwardAlert.classList.remove('active');

    const isAlreadyStamped = !!appState.stamps[dest.id];
    if (isAlreadyStamped) {
      claimStampBtn.disabled = true;
      claimStampText.textContent = 'Sello Ya Obtenido';
      stampAwardAlert.classList.add('active');
      stampAwardAlert.innerHTML = '<i class="fa-solid fa-circle-check"></i> <span>¡Este destino ya está estampado y verificado en tu pasaporte!</span>';
    } else {
      claimStampBtn.disabled = true;
      claimStampText.textContent = 'Estampar Sello';
    }

    switch (dest.key) {
      case 'vitline':
        buildVitLineGame();
        break;
      case 'dalulu':
        buildDaluluGame();
        break;
      case 'glowsmec':
        buildGlowsmecGame();
        break;
      case 'greentask':
        buildGreenTaskGame();
        break;
      case 'patitas':
        buildPatitasGame();
        break;
      case 'softplay':
        buildSoftPlayGame();
        break;
      case 'tecnofix':
        buildTecnoFixGame();
        break;
    }
  }

  function completeCurrentChallenge(successMsg) {
    activeChallengeCompleted = true;
    sound.playSuccess();
    stampAwardAlert.classList.add('active');
    if (successMsg) {
      stampAwardAlert.innerHTML = `<i class="fa-solid fa-certificate"></i> <span>${successMsg}</span>`;
    }

    if (!appState.stamps[destinations[appState.currentIndex].id]) {
      claimStampBtn.disabled = false;
      claimStampText.textContent = '¡Estampar Sello Oficial!';
    }
  }

  // -------------------------------------------------------------
  // MINIJUEGO 1: VITLINE (Despacho de Vuelos)
  // -------------------------------------------------------------
  function buildVitLineGame() {
    interactiveArena.innerHTML = `
      <div class="vitline-game-ui">
        <div class="flight-dispatch-grid">
          <div class="input-field-group">
            <label>Origen</label>
            <select id="v-orig" class="flight-select">
              <option value="BOG">Bogotá (BOG) - El Dorado</option>
              <option value="MDE">Medellín (MDE) - J.M. Córdova</option>
            </select>
          </div>
          <div class="input-field-group">
            <label>Destino Comercial</label>
            <select id="v-dest" class="flight-select">
              <option value="CUN">Cancún (CUN) - Desde $380 USD</option>
              <option value="MIA">Miami (MIA) - Desde $450 USD</option>
              <option value="PTY">Ciudad de Panamá (PTY) - $280 USD</option>
              <option value="SCL">Santiago de Chile (SCL) - $540 USD</option>
            </select>
          </div>
        </div>

        <div class="flight-radar-stage">
          <div class="flight-radar-grid"></div>
          <div id="v-plane" class="flight-track-plane"><i class="fa-solid fa-plane"></i></div>
          <div id="v-dest-badge" class="flight-track-dest">Cancún (CUN)</div>
        </div>

        <button id="v-dispatch-btn" class="btn-stamp-action" style="align-self: center; font-size: 0.8rem; padding: 0.5rem 1.2rem;">
          <i class="fa-solid fa-paper-plane"></i> Calcular Ruta y Despachar Vuelo
        </button>
      </div>
    `;

    const plane = document.getElementById('v-plane');
    const destSelect = document.getElementById('v-dest');
    const destBadge = document.getElementById('v-dest-badge');
    const dispatchBtn = document.getElementById('v-dispatch-btn');

    destSelect.addEventListener('change', () => {
      const txt = destSelect.options[destSelect.selectedIndex].text.split(' - ')[0];
      destBadge.textContent = txt;
    });

    dispatchBtn.addEventListener('click', () => {
      sound.playClick();
      dispatchBtn.disabled = true;
      dispatchBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Despachando aeronave...';
      plane.style.left = '75%';

      setTimeout(() => {
        dispatchBtn.innerHTML = '<i class="fa-solid fa-check"></i> ¡Vuelo Despachado con Éxito!';
        completeCurrentChallenge('¡Tiquete emitido y ruta VitLine validada con éxito!');
      }, 1500);
    });
  }

  // -------------------------------------------------------------
  // MINIJUEGO 2: DALULÚ TRAVEL (Ruta Turística Colombiana)
  // -------------------------------------------------------------
  function buildDaluluGame() {
    interactiveArena.innerHTML = `
      <div class="dalulu-game-ui">
        <p class="dalulu-question">¿Cuál es el destino emblemático de Antioquia destacado por DaLulú Travel en su plataforma?</p>
        <div class="tourism-cards-grid">
          <div class="tourism-card" data-correct="true">
            <div class="tourism-icon"><i class="fa-solid fa-mountain"></i></div>
            <div class="tourism-title">Guatapé & Peñol</div>
            <div class="tourism-dept">Antioquia, Colombia</div>
          </div>
          <div class="tourism-card" data-correct="false">
            <div class="tourism-icon"><i class="fa-solid fa-sun"></i></div>
            <div class="tourism-title">Desierto Tatacoa</div>
            <div class="tourism-dept">Huila, Colombia</div>
          </div>
          <div class="tourism-card" data-correct="false">
            <div class="tourism-icon"><i class="fa-solid fa-water"></i></div>
            <div class="tourism-title">Murallas Cartagena</div>
            <div class="tourism-dept">Bolívar, Colombia</div>
          </div>
        </div>
        <div id="dalulu-feedback" style="text-align:center; font-size:0.8rem; color:var(--text-muted);">
          Haz clic en la tarjeta del destino correcto
        </div>
      </div>
    `;

    const cards = interactiveArena.querySelectorAll('.tourism-card');
    const feedback = document.getElementById('dalulu-feedback');

    cards.forEach(card => {
      card.addEventListener('click', () => {
        sound.playClick();
        cards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');

        const isCorrect = card.getAttribute('data-correct') === 'true';
        if (isCorrect) {
          feedback.style.color = 'var(--green-accent)';
          feedback.textContent = '¡Correcto! Guatapé y el Peñol forman parte de los tours principales de DaLulú.';
          completeCurrentChallenge('¡Destino antioqueño verificado por DaLulú Travel!');
        } else {
          feedback.style.color = '#f87171';
          feedback.textContent = 'Ese es un bello destino, pero DaLulú destaca los paisajes de Guatapé y Antioquia.';
        }
      });
    });
  }

  // -------------------------------------------------------------
  // MINIJUEGO 3: GLOWSMEC (Agenda & Estilismo Exprés)
  // -------------------------------------------------------------
  function buildGlowsmecGame() {
    interactiveArena.innerHTML = `
      <div class="glowsmec-game-ui">
        <p style="font-size: 0.82rem; color: #ffffff; text-align:center;">Selecciona un horario disponible en el salón GlowSmec para confirmar tu cita:</p>
        <div class="salon-slots-container">
          <div class="salon-time-slot occupied">
            <div class="slot-hour">09:00 AM</div>
            <div class="slot-status">Ocupado (Spa)</div>
          </div>
          <div class="salon-time-slot available" data-slot="2:30 PM">
            <div class="slot-hour">02:30 PM</div>
            <div class="slot-status">Libre (Corte & Estilo)</div>
          </div>
          <div class="salon-time-slot occupied">
            <div class="slot-hour">05:00 PM</div>
            <div class="slot-status">Ocupado (Capilar)</div>
          </div>
        </div>
        <button id="glow-book-btn" class="btn-stamp-action" style="align-self: center; font-size:0.8rem; padding:0.5rem 1.2rem;" disabled>
          <i class="fa-solid fa-calendar-check"></i> Agendar Cita en GlowSmec
        </button>
      </div>
    `;

    const availableSlot = interactiveArena.querySelector('.salon-time-slot.available');
    const bookBtn = document.getElementById('glow-book-btn');

    availableSlot.addEventListener('click', () => {
      sound.playClick();
      availableSlot.classList.add('selected');
      bookBtn.disabled = false;
    });

    bookBtn.addEventListener('click', () => {
      sound.playClick();
      bookBtn.disabled = true;
      bookBtn.innerHTML = '<i class="fa-solid fa-check"></i> ¡Cita Confirmada en GlowSmec!';
      completeCurrentChallenge('¡Cita de estética agendada y registrada con éxito!');
    });
  }

  // -------------------------------------------------------------
  // MINIJUEGO 4: GREENTASK (Eco-Sorting Challenge)
  // -------------------------------------------------------------
  function buildGreenTaskGame() {
    const items = [
      { name: 'Botella Plástica PET', bin: 'blue', icon: 'fa-bottle-water' },
      { name: 'Periódicos y Cajas', bin: 'gray', icon: 'fa-box-archive' },
      { name: 'Latas de Chatarra', bin: 'green', icon: 'fa-recycle' }
    ];

    let currentItemIdx = 0;

    function renderItem() {
      const item = items[currentItemIdx];
      interactiveArena.innerHTML = `
        <div class="greentask-game-ui">
          <div class="waste-item-stage">
            <span style="font-size:0.75rem; color:var(--text-muted);">Clasifica este residuo (${currentItemIdx + 1}/3):</span>
            <div class="waste-token"><i class="fa-solid ${item.icon}"></i> ${item.name}</div>
          </div>

          <div class="eco-bins-grid">
            <div class="eco-bin bin-blue" data-bin="blue">
              <div class="bin-icon" style="color:#38bdf8;"><i class="fa-solid fa-trash-can"></i></div>
              <div class="bin-title">Caneca Azul</div>
              <span style="font-size:0.65rem; color:var(--text-muted);">Plásticos PET</span>
            </div>
            <div class="eco-bin bin-gray" data-bin="gray">
              <div class="bin-icon" style="color:#94a3b8;"><i class="fa-solid fa-trash-can"></i></div>
              <div class="bin-title">Caneca Gris</div>
              <span style="font-size:0.65rem; color:var(--text-muted);">Papel y Cartón</span>
            </div>
            <div class="eco-bin bin-green" data-bin="green">
              <div class="bin-icon" style="color:#10b981;"><i class="fa-solid fa-trash-can"></i></div>
              <div class="bin-title">Caneca Verde</div>
              <span style="font-size:0.65rem; color:var(--text-muted);">Chatarra / Orgánico</span>
            </div>
          </div>
          <div id="green-feedback" style="text-align:center; font-size:0.76rem; color:var(--text-muted);">
            Toca la caneca correspondiente para reciclar
          </div>
        </div>
      `;

      const bins = interactiveArena.querySelectorAll('.eco-bin');
      const feedback = document.getElementById('green-feedback');

      bins.forEach(bin => {
        bin.addEventListener('click', () => {
          sound.playClick();
          const targetBin = bin.getAttribute('data-bin');
          if (targetBin === item.bin) {
            currentItemIdx++;
            if (currentItemIdx >= items.length) {
              completeCurrentChallenge('¡Todos los materiales reciclados y donación GreenTask registrada!');
              interactiveArena.innerHTML = `
                <div style="text-align:center; padding:1rem; color:var(--green-accent);">
                  <i class="fa-solid fa-seedling" style="font-size:2.5rem; margin-bottom:0.5rem;"></i>
                  <h4>¡Reciclaje Completado al 100%!</h4>
                  <p style="font-size:0.8rem; color:var(--text-secondary);">Has clasificado plásticos PET, cartón y metales correctamente.</p>
                </div>
              `;
            } else {
              renderItem();
            }
          } else {
            feedback.style.color = '#f87171';
            feedback.textContent = 'Caneca incorrecta. Recuerda la norma de colores ecológicos.';
          }
        });
      });
    }

    renderItem();
  }

  // -------------------------------------------------------------
  // MINIJUEGO 5: PATITAS AL RESCATE (Match de Adopción)
  // -------------------------------------------------------------
  function buildPatitasGame() {
    interactiveArena.innerHTML = `
      <div class="patitas-game-ui">
        <div class="pet-rescue-card">
          <div class="pet-avatar">🐶</div>
          <div class="pet-info">
            <h4>Toby • Cachorro Rescatado</h4>
            <p>Juguetón, sociable y activo. Requiere una familia comprometida con paseos diarios y cariño.</p>
          </div>
        </div>

        <p style="font-size:0.76rem; color:var(--text-muted); margin-bottom:-0.2rem;">Elige al adoptante con mejor perfil responsable:</p>
        <div class="adopter-options-grid">
          <button class="adopter-choice-btn" data-correct="false">
            <i class="fa-regular fa-circle"></i>
            <span>Perfil A: Permanece fuera de casa 16 horas y no tiene tiempo para paseos.</span>
          </button>
          <button class="adopter-choice-btn" data-correct="true">
            <i class="fa-regular fa-circle"></i>
            <span>Perfil B: Familia con tiempo, espacio para jugar y compromiso de cuidado veterinario.</span>
          </button>
          <button class="adopter-choice-btn" data-correct="false">
            <i class="fa-regular fa-circle"></i>
            <span>Perfil C: Busca mascota temporal para dejar sola en una terraza.</span>
          </button>
        </div>
      </div>
    `;

    const buttons = interactiveArena.querySelectorAll('.adopter-choice-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        sound.playClick();
        buttons.forEach(b => {
          b.classList.remove('selected');
          b.querySelector('i').className = 'fa-regular fa-circle';
        });

        btn.classList.add('selected');
        btn.querySelector('i').className = 'fa-solid fa-circle-check';

        const isCorrect = btn.getAttribute('data-correct') === 'true';
        if (isCorrect) {
          completeCurrentChallenge('¡Adopción responsable formalizada en Patitas al Rescate!');
        }
      });
    });
  }

  // -------------------------------------------------------------
  // MINIJUEGO 6: SOFTPLAY (Code Quest / Bug Hunter)
  // -------------------------------------------------------------
  function buildSoftPlayGame() {
    interactiveArena.innerHTML = `
      <div class="softplay-game-ui">
        <div class="code-editor-box">
          <span class="code-keyword">function</span> <span class="code-fn">aprenderProgramando</span>() {<br>
          &nbsp;&nbsp;<span class="code-keyword">let</span> plataforma = <span class="code-string">"SoftPlay"</span>;<br>
          &nbsp;&nbsp;<span class="code-keyword">let</span> retoResuelto = <span id="code-slot" class="code-bug">false</span>;<br>
          &nbsp;&nbsp;<span class="code-keyword">return</span> retoResuelto ? <span class="code-string">"¡Sello Aprobado!"</span> : <span class="code-string">"Pendiente"</span>;<br>
          }
        </div>

        <p style="font-size:0.75rem; color:var(--text-muted); text-align:center;">Elige el valor booleano correcto para resolver el reto y compilar:</p>

        <div class="code-options-grid">
          <button class="code-fix-btn" data-val="null">null</button>
          <button class="code-fix-btn" data-val="true">true</button>
          <button class="code-fix-btn" data-val="undefined">undefined</button>
        </div>
      </div>
    `;

    const codeSlot = document.getElementById('code-slot');
    const buttons = interactiveArena.querySelectorAll('.code-fix-btn');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        sound.playClick();
        const val = btn.getAttribute('data-val');
        codeSlot.textContent = val;

        if (val === 'true') {
          btn.classList.add('correct');
          codeSlot.className = 'code-string';
          completeCurrentChallenge('¡Función compilada con éxito en el runtime de SoftPlay!');
        } else {
          codeSlot.className = 'code-bug';
        }
      });
    });
  }

  // -------------------------------------------------------------
  // MINIJUEGO 7: TECNOFIX (Arma tu PC Gamer)
  // -------------------------------------------------------------
  function buildTecnoFixGame() {
    let installedCount = 0;
    interactiveArena.innerHTML = `
      <div class="tecnofix-game-ui">
        <p style="font-size:0.78rem; color:#ffffff; text-align:center;">Haz clic en cada componente para instalarlo en la Motherboard:</p>
        <div class="pc-motherboard-grid">
          <div class="pc-socket-slot" data-comp="cpu">
            <div class="slot-comp-icon"><i class="fa-solid fa-microchip"></i></div>
            <div class="slot-label">CPU Intel i7</div>
          </div>
          <div class="pc-socket-slot" data-comp="gpu">
            <div class="slot-comp-icon"><i class="fa-solid fa-tv"></i></div>
            <div class="slot-label">GPU RTX 4070</div>
          </div>
          <div class="pc-socket-slot" data-comp="ram">
            <div class="slot-comp-icon"><i class="fa-solid fa-memory"></i></div>
            <div class="slot-label">RAM 16GB RGB</div>
          </div>
          <div class="pc-socket-slot" data-comp="psu">
            <div class="slot-comp-icon"><i class="fa-solid fa-plug"></i></div>
            <div class="slot-label">Fuente 750W</div>
          </div>
        </div>

        <button id="pc-power-btn" class="btn-stamp-action" style="align-self: center; font-size:0.8rem; padding:0.5rem 1.2rem;" disabled>
          <i class="fa-solid fa-power-off"></i> Encender Computador Gamer
        </button>
      </div>
    `;

    const slots = interactiveArena.querySelectorAll('.pc-socket-slot');
    const powerBtn = document.getElementById('pc-power-btn');

    slots.forEach(slot => {
      slot.addEventListener('click', () => {
        if (!slot.classList.contains('installed')) {
          sound.playClick();
          slot.classList.add('installed');
          installedCount++;

          if (installedCount >= 4) {
            powerBtn.disabled = false;
            powerBtn.style.boxShadow = '0 0 20px var(--green-glow)';
          }
        }
      });
    });

    powerBtn.addEventListener('click', () => {
      sound.playClick();
      powerBtn.disabled = true;
      powerBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Arrancando BIOS...';

      setTimeout(() => {
        powerBtn.innerHTML = '<i class="fa-solid fa-check"></i> ¡PC Operativo a 144 FPS!';
        completeCurrentChallenge('¡Equipo ensamblado y soporte técnico TecnoFix completado!');
      }, 1200);
    });
  }

  // 9. CARGAR DESTINO ACTIVO
  function switchDestination(newIndex) {
    if (newIndex < 0) newIndex = destinations.length - 1;
    if (newIndex >= destinations.length) newIndex = 0;
    appState.currentIndex = newIndex;

    const dest = destinations[appState.currentIndex];

    // Encabezado del Destino
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

    // Cargar lógica del minijuego
    loadMinigame(dest);

    // Actualizar dock
    renderDock();
    updatePassportStats();
  }

  // 10. ACCIÓN DE ESTAMPAR SELLO
  claimStampBtn.addEventListener('click', () => {
    const dest = destinations[appState.currentIndex];
    if (activeChallengeCompleted && !appState.stamps[dest.id]) {
      appState.stamps[dest.id] = true;
      persistState();
      sound.playStamp();

      claimStampBtn.disabled = true;
      claimStampText.textContent = '¡Sello Estampado con Éxito!';

      // Actualizar UI
      renderDock();
      renderPassportModal();
      switchDestination(appState.currentIndex);

      // Si se completaron los 7, abrir automáticamente el pasaporte
      const totalStamped = Object.keys(appState.stamps).filter(k => appState.stamps[k]).length;
      if (totalStamped >= 7) {
        setTimeout(() => {
          passportModal.classList.add('active');
        }, 600);
      }
    }
  });

  // 11. GESTIÓN DE MODALES (PASAPORTE & SALA VIP)
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

  // Cerrar modales con clic afuera
  [passportModal, vipModal].forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  });

  // Atajos de Teclado (Flecha Izquierda / Derecha)
  window.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT') return;
    if (e.key === 'ArrowRight') {
      sound.playClick();
      switchDestination(appState.currentIndex + 1);
    } else if (e.key === 'ArrowLeft') {
      sound.playClick();
      switchDestination(appState.currentIndex - 1);
    }
  });

  // 12. INICIALIZACIÓN
  renderDock();
  switchDestination(0);
});
