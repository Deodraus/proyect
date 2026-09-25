/**
 * ============================================================================
 * MUESTRA DE PROYECTOS • MEDIA TÉCNICA EN DESARROLLO DE SOFTWARE (11-4)
 * Controlador de Presentación Interactiva
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. DATASET DE LOS 7 PROYECTOS DE 11-4
  const projectsData = [
    {
      id: '01',
      title: 'VitLine',
      tagline: 'Plataforma de Reserva de Vuelos y Gestión Aeronáutica',
      category: 'Sistema Web Full-Stack',
      status: 'Disponible',
      isReady: true,
      videoSrc: 'vitlinepage.mp4',
      bgImage: 'assets/images/tecnologia.jpeg',
      summary: {
        purpose: 'Sistema integral para la cotización de rutas comerciales, reservación de tiquetes de ida y vuelta, y emisión digital de comprobantes.',
        architecture: 'Estructura modular con separación estricta entre portal público de clientes y panel administrativo con control CRUD.',
        security: 'Conexión PDO segura en MySQL con sentencias preparadas nativas (anti-SQL Injection) y gestión protegida de sesiones.',
        features: 'Motor de búsqueda con filtros en vivo, pasarela de fidelización VitCard, emisión de facturas y panel administrativo de operaciones.'
      },
      stack: ['PHP 8 (PDO)', 'MySQL Relacional', 'JavaScript ES6', 'HTML5 Semántico', 'CSS3 Moderno', 'Seguridad PDO']
    },
    {
      id: '02',
      title: 'DaLulú Travel',
      tagline: 'Agencia de Viajes y Promoción Turística Colombiana',
      category: 'Portal Web Turístico',
      status: 'Disponible',
      isReady: true,
      videoSrc: 'dalulupage.mp4',
      bgImage: 'assets/images/aprender.jpeg',
      summary: {
        purpose: 'Plataforma orientada a brindar asesoría personalizada, itinerarios guiados y promoción de destinos colombianos como Guatapé y Medellín.',
        architecture: 'Interfaz de usuario interactiva con carrusel dinámico, integración de mapas de geolocalización y módulos de contacto.',
        security: 'Validación de formularios de solicitud y sanitización de consultas para reservas turísticas.',
        features: 'Galería fotográfica de destinos, itinerarios recomendados, mapa interactivo de Google Maps y sistema de contacto.'
      },
      stack: ['PHP Backend', 'MySQL Database', 'JavaScript Interactivo', 'HTML5/CSS3', 'Google Maps API']
    },
    {
      id: '03',
      title: 'GlowSmec',
      tagline: 'Gestión de Belleza, Cuidado Estético y Agendamiento',
      category: 'Plataforma de Servicios y Citas',
      status: 'Disponible',
      isReady: true,
      videoSrc: 'glowsmecpage.mp4',
      bgImage: 'assets/images/oportunidades.jpeg',
      summary: {
        purpose: 'Solución digital para salones de estética que integra catálogo de servicios, asesoría de estilo y reserva digital de citas.',
        architecture: 'Estructura cliente-servidor con módulos independientes para catálogo, calendario de citas y carrito de compras.',
        security: 'Control de sesiones de usuario, encriptación básica de contraseñas y validación de disponibilidad horaria.',
        features: 'Catálogo de tratamientos capilares y spa, módulo de agendamiento "Agenda tu Cita", carrito de servicios y geolocalización.'
      },
      stack: ['PHP', 'MySQL', 'JavaScript UI', 'CSS Grid/Flexbox', 'Agendamiento Web']
    },
    {
      id: '04',
      title: 'GreenTask',
      tagline: 'Soluciones Ecológicas, Sostenibilidad y Reciclaje',
      category: 'Plataforma Ambiental y Social',
      status: 'Disponible',
      isReady: true,
      videoSrc: 'greentaskpage.webm',
      bgImage: 'assets/images/juntos.jpeg',
      summary: {
        purpose: 'Fomentar la regeneración ambiental, el reciclaje responsable de plásticos PET, papel, cartón y la gestión comunitaria de donaciones.',
        architecture: 'Portal informativo e interactivo con catálogo de servicios sostenibles, registro de donaciones y georreferenciación.',
        security: 'Validación de formularios de donación, protección de datos comunitarios y control de autenticación.',
        features: 'Catálogo ecológico, módulo de donaciones clasificadas, slider de energías renovables y mapa institucional.'
      },
      stack: ['PHP', 'MySQL', 'JavaScript', 'CSS3 Verde Sostenible', 'Módulos de Donación']
    },
    {
      id: '05',
      title: 'Patitas al Rescate',
      tagline: 'Adopción, Rescate Animal y Tienda Solidaria',
      category: 'Gestión Social y Refugio Animal',
      status: 'Disponible',
      isReady: true,
      videoSrc: 'patitasalrescatepage.mp4',
      bgImage: 'assets/images/catalina.jpeg',
      summary: {
        purpose: 'Conectar animales vulnerables con familias adoptantes responsables, gestionar solicitudes de rescate y apoyar el refugio con una tienda solidaria.',
        architecture: 'Plataforma web con separación de catálogo público, módulo de radicación de rescates y dashboard administrativo de casos.',
        security: 'Gestión protegida de sesiones de usuario, sanitización de solicitudes de adopción y control de permisos de administración.',
        features: 'Formularios de adopción, sistema de reporte de rescates, tienda solidaria con carrito, slider dinámico y mapa.'
      },
      stack: ['PHP Backend', 'MySQL Relacional', 'JavaScript ES6', 'HTML5 Semántico', 'Dashboard Administrativo']
    },
    {
      id: '06',
      title: 'SoftPlay',
      tagline: 'Educación Gamificada en Desarrollo de Software',
      category: 'Plataforma EdTech Interactiva',
      status: 'Disponible',
      isReady: true,
      videoSrc: 'softplaypage.mp4',
      bgImage: 'assets/images/quehacemos.jpeg',
      summary: {
        purpose: 'Facilitar el aprendizaje de programación web (HTML, CSS, JavaScript) mediante una metodología interactiva basada en retos prácticos.',
        architecture: 'Plataforma educativa con rutas de aprendizaje progresivas, galería de proyectos y perfiles de estudiantes.',
        security: 'Validación de registro y autenticación de estudiantes con sesiones seguras y control de avance académico.',
        features: 'Cursos por niveles (HTML5, CSS3, JS), presentación del equipo docente, acceso gratuito a módulos y sistema de valoración.'
      },
      stack: ['PHP', 'MySQL', 'JavaScript Modular', 'CSS3 Dark UI', 'Gamificación Educativa']
    },
    {
      id: '07',
      title: 'TecnoFix',
      tagline: 'Hardware Especializado y Citas de Servicio Técnico',
      category: 'E-Commerce y Soporte Técnico',
      status: 'Disponible',
      isReady: true,
      videoSrc: 'tecnofixpage.mp4',
      bgImage: 'assets/images/tecnologia.jpeg',
      summary: {
        purpose: 'Comercialización de computadores gamer, repuestos y componentes, junto con un sistema de agendamiento para mantenimiento preventivo y correctivo.',
        architecture: 'Estructura modular dividida en catálogo de hardware por categorías, carrito de compras y módulo de gestión de citas técnicas.',
        security: 'Autenticación de clientes, control seguro de sesiones para pedidos y prevención de colisiones en agendamiento.',
        features: 'Catálogo de hardware, carrito de compras interactivo, módulo "Mis Citas", slider de equipos y mapa de ubicación.'
      },
      stack: ['PHP Backend', 'MySQL', 'JavaScript ES6', 'HTML5/CSS3', 'Sistema de Carrito y Citas']
    }
  ];

  let currentIndex = 0;

  // 2. REFERENCIAS AL DOM
  // Elementos del Escenario de Introducción
  const introStage = document.getElementById('intro-stage');
  const introVideo = document.getElementById('intro-video');
  const exitIntroBtn = document.getElementById('exit-intro-btn');
  const reopenIntroBtn = document.getElementById('reopen-intro-btn');
  const introAudioBtn = document.getElementById('intro-audio-btn');
  const introAudioIcon = introAudioBtn ? introAudioBtn.querySelector('i') : null;
  const introAudioText = document.getElementById('intro-audio-text');
  const introPlayPauseBtn = document.getElementById('intro-playpause-btn');
  const introPlayPauseIcon = introPlayPauseBtn ? introPlayPauseBtn.querySelector('i') : null;
  const introPlayPauseText = document.getElementById('intro-playpause-text');
  const introFsBtn = document.getElementById('intro-fs-btn');
  let introIdleTimeout = null;

  // Elementos de la Plataforma de Proyectos
  const projectVideo = document.getElementById('project-video');
  const videoPlaceholder = document.getElementById('video-placeholder');
  const placeholderTitle = document.getElementById('placeholder-title');
  const placeholderText = document.getElementById('placeholder-text');
  
  const videoControlsBar = document.getElementById('video-controls-bar');
  const playPauseBtn = document.getElementById('play-pause-btn');
  const playPauseIcon = playPauseBtn.querySelector('i');
  const muteBtn = document.getElementById('mute-btn');
  const muteIcon = muteBtn.querySelector('i');
  const progressBar = document.getElementById('progress-bar');
  const progressContainer = document.getElementById('progress-container');
  const timeDisplay = document.getElementById('time-display');
  const videoFullscreenBtn = document.getElementById('video-fullscreen-btn');

  const projectIdBadge = document.getElementById('project-id-badge');
  const projectCategoryBadge = document.getElementById('project-category-badge');
  const projectTitle = document.getElementById('project-title');
  const projectTagline = document.getElementById('project-tagline');
  const summaryPurpose = document.getElementById('summary-purpose');
  const summaryArchitecture = document.getElementById('summary-architecture');
  const summarySecurity = document.getElementById('summary-security');
  const summaryFeatures = document.getElementById('summary-features');
  const stackTagsContainer = document.getElementById('stack-tags');

  const currentIdxCounter = document.getElementById('current-index');
  const totalCountEl = document.getElementById('total-count');
  const dockProjectsContainer = document.getElementById('dock-projects-grid');
  
  const prevProjectBtn = document.getElementById('prev-project-btn');
  const nextProjectBtn = document.getElementById('next-project-btn');
  const appFullscreenBtn = document.getElementById('app-fullscreen-btn');

  const bgSlide1 = document.getElementById('bg-slide-1');
  const bgSlide2 = document.getElementById('bg-slide-2');
  let activeBgSlide = 1;

  totalCountEl.textContent = projectsData.length.toString();

  // 3. GENERAR ELEMENTOS DEL DOCK INFERIOR
  function renderDock() {
    dockProjectsContainer.innerHTML = '';
    projectsData.forEach((proj, idx) => {
      const item = document.createElement('div');
      item.className = `dock-item ${proj.isReady ? 'available' : ''} ${idx === currentIndex ? 'active' : ''}`;
      item.setAttribute('role', 'button');
      item.setAttribute('tabindex', '0');
      item.setAttribute('data-index', idx);

      item.innerHTML = `
        <div class="dock-item-top">
          <span class="dock-item-num">${proj.id}</span>
          <span class="dock-item-dot" title="${proj.status}"></span>
        </div>
        <div class="dock-item-name">${proj.title}</div>
        <div class="dock-item-status">${proj.status}</div>
      `;

      item.addEventListener('click', () => {
        if (currentIndex !== idx) {
          switchProject(idx);
        }
      });

      dockProjectsContainer.appendChild(item);
    });
  }

  // 4. CAMBIO SUAVE DE FONDO CON BLUR
  function updateBackground(bgUrl) {
    if (!bgUrl) return;
    const incomingSlide = activeBgSlide === 1 ? bgSlide2 : bgSlide1;
    const currentSlide = activeBgSlide === 1 ? bgSlide1 : bgSlide2;

    incomingSlide.style.backgroundImage = `url('${bgUrl}')`;
    incomingSlide.classList.add('active');
    currentSlide.classList.remove('active');

    activeBgSlide = activeBgSlide === 1 ? 2 : 1;
  }

  // 5. CARGAR DETALLES DEL PROYECTO SELECCIONADO
  function loadProject(index) {
    const proj = projectsData[index];
    if (!proj) return;

    // Actualizar Contador
    currentIdxCounter.textContent = (index + 1).toString();

    // Actualizar Ficha Técnica
    projectIdBadge.textContent = `PROYECTO ${proj.id}`;
    projectCategoryBadge.textContent = proj.category;
    projectTitle.textContent = proj.title;
    projectTagline.textContent = proj.tagline;

    summaryPurpose.textContent = proj.summary.purpose;
    summaryArchitecture.textContent = proj.summary.architecture;
    summarySecurity.textContent = proj.summary.security;
    summaryFeatures.textContent = proj.summary.features;

    // Renderizar Stack Tecnológico
    stackTagsContainer.innerHTML = '';
    proj.stack.forEach((tech, idx) => {
      const pill = document.createElement('span');
      pill.className = `stack-pill ${idx === 0 ? 'highlight' : ''}`;
      pill.innerHTML = `<i class="fa-solid fa-code"></i> ${tech}`;
      stackTagsContainer.appendChild(pill);
    });

    // Gestión del Reproductor de Video
    if (proj.isReady && proj.videoSrc) {
      videoPlaceholder.classList.remove('active');
      projectVideo.style.display = 'block';
      videoControlsBar.style.display = 'flex';

      if (projectVideo.getAttribute('src') !== proj.videoSrc) {
        projectVideo.src = proj.videoSrc;
        projectVideo.currentTime = 0;
      }
      
      // Pausar o reproducir con control seguro (solo si no está activo el video de intro)
      if (!isIntroCurrentlyActive()) {
        projectVideo.play().then(() => {
          playPauseIcon.className = 'fa-solid fa-pause';
        }).catch(() => {
          // En caso de bloqueo de autoplay del navegador
          playPauseIcon.className = 'fa-solid fa-play';
        });
      } else {
        projectVideo.pause();
        playPauseIcon.className = 'fa-solid fa-play';
      }
    } else {
      // Estado cuando no hay video aún
      projectVideo.pause();
      projectVideo.style.display = 'none';
      videoControlsBar.style.display = 'none';

      videoPlaceholder.classList.add('active');
      placeholderTitle.textContent = `${proj.title} • ${proj.tagline}`;
      placeholderText.textContent = `Este proyecto está registrado por 11-4. La vista previa en video se integrará tan pronto esté finalizada la fase de pruebas y grabación.`;
    }

    // Actualizar Fondo con Blur
    updateBackground(proj.bgImage);

    // Actualizar estado activo en el Dock
    const dockItems = dockProjectsContainer.querySelectorAll('.dock-item');
    dockItems.forEach((item, idx) => {
      item.classList.toggle('active', idx === index);
    });
  }

  function switchProject(newIndex) {
    if (newIndex < 0) newIndex = projectsData.length - 1;
    if (newIndex >= projectsData.length) newIndex = 0;
    currentIndex = newIndex;
    loadProject(currentIndex);
  }

  // 6. CONTROLES DE REPRODUCCIÓN DE VIDEO
  function togglePlayPause() {
    if (!projectsData[currentIndex].isReady) return;
    if (projectVideo.paused || projectVideo.ended) {
      projectVideo.play();
      playPauseIcon.className = 'fa-solid fa-pause';
    } else {
      projectVideo.pause();
      playPauseIcon.className = 'fa-solid fa-play';
    }
  }

  function toggleMute() {
    projectVideo.muted = !projectVideo.muted;
    if (projectVideo.muted) {
      muteIcon.className = 'fa-solid fa-volume-xmark';
    } else {
      muteIcon.className = 'fa-solid fa-volume-high';
    }
  }

  function formatTime(seconds) {
    if (isNaN(seconds)) return '00:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  projectVideo.addEventListener('timeupdate', () => {
    if (projectVideo.duration) {
      const percentage = (projectVideo.currentTime / projectVideo.duration) * 100;
      progressBar.style.width = `${percentage}%`;
      timeDisplay.textContent = `${formatTime(projectVideo.currentTime)} / ${formatTime(projectVideo.duration)}`;
    }
  });

  projectVideo.addEventListener('ended', () => {
    playPauseIcon.className = 'fa-solid fa-rotate-right';
  });

  progressContainer.addEventListener('click', (e) => {
    if (!projectVideo.duration) return;
    const rect = progressContainer.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    projectVideo.currentTime = pos * projectVideo.duration;
  });

  playPauseBtn.addEventListener('click', togglePlayPause);
  projectVideo.addEventListener('click', togglePlayPause);
  muteBtn.addEventListener('click', toggleMute);

  // Pantalla Completa del Video
  videoFullscreenBtn.addEventListener('click', () => {
    if (projectVideo.requestFullscreen) {
      projectVideo.requestFullscreen();
    } else if (projectVideo.webkitRequestFullscreen) {
      projectVideo.webkitRequestFullscreen();
    }
  });

  // 7. BOTONES DE NAVEGACIÓN Y TECLADO
  if (prevProjectBtn) {
    prevProjectBtn.addEventListener('click', () => switchProject(currentIndex - 1));
  }
  if (nextProjectBtn) {
    nextProjectBtn.addEventListener('click', () => switchProject(currentIndex + 1));
  }

  // Pantalla Completa General de la Presentación
  if (appFullscreenBtn) {
    appFullscreenBtn.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
          console.warn('Error intentando entrar a pantalla completa:', err);
        });
        appFullscreenBtn.querySelector('i').className = 'fa-solid fa-compress';
      } else {
        document.exitFullscreen();
        appFullscreenBtn.querySelector('i').className = 'fa-solid fa-expand';
      }
    });
  }

  // ==========================================================================
  // 8. CONTROLADOR DEL ESCENARIO DE INTRODUCCIÓN (FONDO EN BUCLE PARA EXPOSITORES)
  // ==========================================================================
  function isIntroCurrentlyActive() {
    return introStage && introStage.classList.contains('active');
  }

  function startIntroIdleTimer() {
    clearTimeout(introIdleTimeout);
    if (!introStage || !introStage.classList.contains('active')) return;
    introStage.classList.remove('user-idle');
    introIdleTimeout = setTimeout(() => {
      if (introStage && introStage.classList.contains('active')) {
        introStage.classList.add('user-idle');
      }
    }, 3800);
  }

  function exitIntro() {
    if (!introStage) return;
    clearTimeout(introIdleTimeout);
    introStage.classList.remove('active');
    introStage.classList.remove('user-idle');

    // Pausar el video de introducción para liberar recursos de CPU/GPU y silenciarlo
    if (introVideo) {
      introVideo.pause();
    }

    // Iniciar la reproducción del primer proyecto si está listo
    const currentProj = projectsData[currentIndex];
    if (currentProj && currentProj.isReady && projectVideo && projectVideo.src) {
      projectVideo.play().then(() => {
        playPauseIcon.className = 'fa-solid fa-pause';
      }).catch(() => {
        playPauseIcon.className = 'fa-solid fa-play';
      });
    }
  }

  function reopenIntro() {
    if (!introStage) return;

    // Pausar el video del proyecto activo
    if (projectVideo) {
      projectVideo.pause();
      playPauseIcon.className = 'fa-solid fa-play';
    }

    introStage.classList.add('active');
    introStage.classList.remove('user-idle');

    if (introVideo) {
      introVideo.play().then(() => {
        if (introPlayPauseIcon) introPlayPauseIcon.className = 'fa-solid fa-pause';
        if (introPlayPauseText) introPlayPauseText.textContent = 'Pausar';
      }).catch(err => {
        console.warn('Reanudación diferida de intro:', err);
      });
    }
    startIntroIdleTimer();
  }

  function toggleIntroAudio() {
    if (!introVideo) return;
    introVideo.muted = !introVideo.muted;
    if (introVideo.muted) {
      if (introAudioIcon) introAudioIcon.className = 'fa-solid fa-volume-xmark';
      if (introAudioText) introAudioText.textContent = 'Activar Sonido';
      if (introAudioBtn) introAudioBtn.classList.remove('active');
    } else {
      if (introAudioIcon) introAudioIcon.className = 'fa-solid fa-volume-high';
      if (introAudioText) introAudioText.textContent = 'Silenciar';
      if (introAudioBtn) introAudioBtn.classList.add('active');
    }
  }

  function toggleIntroPlay() {
    if (!introVideo) return;
    if (introVideo.paused || introVideo.ended) {
      introVideo.play();
      if (introPlayPauseIcon) introPlayPauseIcon.className = 'fa-solid fa-pause';
      if (introPlayPauseText) introPlayPauseText.textContent = 'Pausar';
    } else {
      introVideo.pause();
      if (introPlayPauseIcon) introPlayPauseIcon.className = 'fa-solid fa-play';
      if (introPlayPauseText) introPlayPauseText.textContent = 'Reanudar';
    }
  }

  function toggleIntroFullscreen() {
    if (!document.fullscreenElement) {
      const targetElem = introStage || document.documentElement;
      if (targetElem.requestFullscreen) {
        targetElem.requestFullscreen().catch(err => console.warn(err));
      } else if (targetElem.webkitRequestFullscreen) {
        targetElem.webkitRequestFullscreen();
      }
    } else {
      document.exitFullscreen();
    }
  }

  // Inicializar listeners del Intro
  if (exitIntroBtn) {
    exitIntroBtn.addEventListener('click', exitIntro);
  }
  if (reopenIntroBtn) {
    reopenIntroBtn.addEventListener('click', reopenIntro);
  }
  if (introAudioBtn) {
    introAudioBtn.addEventListener('click', toggleIntroAudio);
  }
  if (introPlayPauseBtn) {
    introPlayPauseBtn.addEventListener('click', toggleIntroPlay);
  }
  if (introFsBtn) {
    introFsBtn.addEventListener('click', toggleIntroFullscreen);
  }

  // Comportamiento del video en bucle
  if (introVideo) {
    introVideo.loop = true;
    introVideo.addEventListener('ended', () => {
      introVideo.currentTime = 0;
      introVideo.play().catch(() => {});
    });

    // Intentar reproducción automática (inicia silenciado para cumplir con políticas del navegador)
    introVideo.play().catch(err => {
      console.log('Autoplay silenciado en espera:', err);
    });
  }

  // Control de inactividad de cursor en modo intro (para pantalla limpia a expositores)
  if (introStage) {
    ['mousemove', 'click', 'keydown', 'touchstart'].forEach(evt => {
      introStage.addEventListener(evt, startIntroIdleTimer, { passive: true });
    });
    startIntroIdleTimer();
  }

  // Atajos de teclado: Flechas para navegar, Espacio para pausar video o salir de intro
  window.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    // Si el video de introducción está en pantalla
    if (isIntroCurrentlyActive()) {
      if (e.key === 'Enter' || e.key === 'Escape' || e.code === 'Space') {
        e.preventDefault();
        exitIntro();
        return;
      }
      if (e.key === 'm' || e.key === 'M') {
        e.preventDefault();
        toggleIntroAudio();
        return;
      }
      if (e.key === 'p' || e.key === 'P') {
        e.preventDefault();
        toggleIntroPlay();
        return;
      }
      if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleIntroFullscreen();
        return;
      }
      return;
    }

    // Navegación en la plataforma de proyectos
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      switchProject(currentIndex + 1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      switchProject(currentIndex - 1);
    } else if (e.key === ' ' || e.code === 'Space') {
      if (projectsData[currentIndex].isReady) {
        e.preventDefault();
        togglePlayPause();
      }
    }
  });

  // 9. INICIALIZACIÓN
  renderDock();

  // Si se solicita omitir la intro (por ejemplo al volver desde el Pasaporte de Minijuegos)
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('skipIntro') === '1') {
    exitIntro();
  }

  loadProject(0);
});
