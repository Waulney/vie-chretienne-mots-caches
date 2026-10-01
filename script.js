/* ==========================================================================
   MOTS CACHÉS - LA VIE CHRÉTIENNE
   SCRIPT PRINCIPAL (PARCOURS DES ÉCRITURES : ÉVANGILES À APOCALYPSE)
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. TEXTES MULTILINGUES ET NIVEAUX CHRONOLOGIQUES
// --------------------------------------------------------------------------
const UI_TEXTS = {
  fr: {
    slogan: "Parcours chronologique des Évangiles à l'Apocalypse",
    level: "Niveau:", found: "Trouvés:", timer: "Temps:",
    wordsTitle: "Mots à trouver :", prev: "⏮️ Précédent", next: "Suivant ⏭️",
    restart: "🔄 Recommencer", hint: "💡 Indice (-10s)", win: "Félicitations ! Étape spirituelle validée !",
    shareText: "J'ai progressé dans le jeu de Mots Cachés - La Vie Chrétienne !"
  },
  en: {
    slogan: "Chronological journey from Gospels to Revelation",
    level: "Level:", found: "Found:", timer: "Time:",
    wordsTitle: "Words to find:", prev: "⏮️ Previous", next: "Next ⏭️",
    restart: "🔄 Restart", hint: "💡 Hint (-10s)", win: "Congratulations! Spiritual milestone completed!",
    shareText: "I completed a level in the Christian Life Word Search game!"
  },
  es: {
    slogan: "Recorrido cronológico desde los Evangelios hasta el Apocalipsis",
    level: "Nivel:", found: "Encontrados:", timer: "Tiempo:",
    wordsTitle: "Palabras a buscar:", prev: "⏮️ Anterior", next: "Siguiente ⏭️️",
    restart: "🔄 Reiniciar", hint: "💡 Pista (-10s)", win: "¡Felicidades! ¡Etapa espiritual completada!",
    shareText: "¡Avancé en el juego de Sopa de Letras - La Vida Cristiana!"
  }
};

const LEVELS_DATA = {
  fr: [
    { title: "Niveau 1 : La Condition Humaine & la Promesse", words: ["PECHE", "LOI", "CHUTE", "GRACE", "PROMESSE", "PROPHETE", "REPENTIR", "ATTENTE"] },
    { title: "Niveau 2 : L'Incarnation du Christ", words: ["JESUS", "CHRIST", "MESSIE", "EMMANUEL", "VIERGE", "MARIE", "VERBE", "CRECHE"] },
    { title: "Niveau 3 : L'Appel & la Conversion", words: ["REPENTANCE", "FOI", "CONVERSION", "PARDON", "DISCIPLE", "APPEL", "SUIVRE", "CROIRE"] },
    { title: "Niveau 4 : L'Engagement du Baptême", words: ["BAPTEME", "EAU", "IMMERSION", "SYMBOLISM", "OBEISSANCE", "ENGAGEMENT", "PURIFICATION", "TEMOIGNAGE"] },
    { title: "Niveau 5 : La Renaissance Spirituelle", words: ["RENAISSANCE", "ESPRIT", "NOUVEAU", "VIE", "JUSTICE", "ADOPTION", "AMOUR", "LUMIERE"] },
    { title: "Niveau 6 : Le Sacrificiel de la Croix", words: ["CROIX", "SANG", "RANCHON", "SACRIFICE", "GOLGOTHA", "AMOUR", "SALUT", "COMPASSION"] },
    { title: "Niveau 7 : La Résurrection & l'Ascension", words: ["RESURRECTION", "TOMBEAU", "VICTOIRE", "VIVANT", "ASCENSION", "GLOIRE", "SEIGNEUR", "COURONNE"] },
    { title: "Niveau 8 : La Pentecôte & le Saint-Esprit", words: ["PENTECOTE", "ESPRIT", "CONSOLATEUR", "PUISSANCE", "ONCTION", "EGLISE", "DON", "FEU"] },
    { title: "Niveau 9 : La Vie de Prière & Méditation", words: ["PRIERE", "MEDITATION", "PAROLE", "BIBLE", "JEUNE", "LOUANGE", "ADORATION", "SUPPLIQUE"] },
    { title: "Niveau 10 : La Sanctification au Quotidien", words: ["SANCTIFICATION", "SAINTETE", "OBEISSANCE", "PURETE", "DISCIPLINE", "VERITE", "JUSTICE", "MARCHE"] },
    { title: "Niveau 11 : Les Fruits de l'Esprit", words: ["AMOUR", "JOIE", "PAIX", "PATIENCE", "BONTE", "DOUCEUR", "FIDELITE", "MAITRISE"] },
    { title: "Niveau 12 : Le Combat Spirituel", words: ["ARMURE", "BOUCLIER", "EPEE", "CASQUE", "COMBAT", "VICTOIRE", "RESISTANCE", "VIGILANCE"] },
    { title: "Niveau 13 : La Communion & le Service", words: ["COMMUNION", "PARTAGE", "SERVICE", "CHARITE", "FRATERNITE", "OFFRANDE", "UNITE", "CORPS"] },
    { title: "Niveau 14 : Le Retour du Seigneur", words: ["RETOUR", "AVENEMENT", "TROMPETTE", "ESPERANCE", "ENLEVEMENT", "JUGEMENT", "GLOIRE", "ROI"] },
    { title: "Niveau 15 : La Cité Céleste & l'Éternité", words: ["APOCALYPSE", "PARADIS", "ETERNITE", "EGLISE", "NOUVELLE", "JERUSALEM", "VIE", "AMEN"] }
  ],
  en: [
    { title: "Level 1: Human Condition & Promise", words: ["SIN", "LAW", "FALL", "GRACE", "PROMISE", "PROPHET", "REPENT", "WAITING"] },
    { title: "Level 2: Incarnation of Christ", words: ["JESUS", "CHRIST", "MESSIAH", "EMMANUEL", "VIRGIN", "MARY", "WORD", "MANGER"] },
    { title: "Level 3: Call & Conversion", words: ["REPENTANCE", "FAITH", "CONVERSION", "FORGIVENESS", "DISCIPLE", "CALL", "FOLLOW", "BELIEVE"] },
    { title: "Level 4: Baptism Commitment", words: ["BAPTISM", "WATER", "IMMERSION", "SYMBOL", "OBEDIENCE", "COMMITMENT", "PURITY", "WITNESS"] },
    { title: "Level 5: Spiritual Rebirth", words: ["REBIRTH", "SPIRIT", "NEW", "LIFE", "RIGHTEOUS", "ADOPTION", "LOVE", "LIGHT"] },
    { title: "Level 6: Sacrifice of the Cross", words: ["CROSS", "BLOOD", "RANSOM", "SACRIFICE", "CALVARY", "LOVE", "SALVATION", "MERCY"] },
    { title: "Level 7: Resurrection & Ascension", words: ["RESURRECTION", "TOMB", "VICTORY", "ALIVE", "ASCENSION", "GLORY", "LORD", "CROWN"] },
    { title: "Level 8: Pentecost & Holy Spirit", words: ["PENTECOST", "SPIRIT", "COMFORTER", "POWER", "ANOINTING", "CHURCH", "GIFT", "FIRE"] },
    { title: "Level 9: Prayer & Meditation", words: ["PRAYER", "MEDITATION", "WORD", "BIBLE", "FASTING", "PRAISE", "WORSHIP", "PLEA"] },
    { title: "Level 10: Daily Sanctification", words: ["SANCTIFICATION", "HOLINESS", "OBEDIENCE", "PURITY", "DISCIPLINE", "TRUTH", "JUSTICE", "WALK"] },
    { title: "Level 11: Fruits of the Spirit", words: ["LOVE", "JOY", "PEACE", "PATIENCE", "KINDNESS", "GENTLENESS", "FAITHFUL", "CONTROL"] },
    { title: "Level 12: Spiritual Warfare", words: ["ARMOR", "SHIELD", "SWORD", "HELMET", "WARFARE", "VICTORY", "STAND", "WATCH"] },
    { title: "Level 13: Fellowship & Service", words: ["FELLOWSHIP", "SHARING", "SERVICE", "CHARITY", "BROTHERHOOD", "OFFERING", "UNITY", "BODY"] },
    { title: "Level 14: Return of the Lord", words: ["RETURN", "COMING", "TRUMPET", "HOPE", "RAPTURE", "JUDGMENT", "GLORY", "KING"] },
    { title: "Level 15: Celestial City & Eternity", words: ["REVELATION", "PARADISE", "ETERNITY", "BRIDE", "NEW", "JERUSALEM", "LIFE", "AMEN"] }
  ],
  es: [
    { title: "Nivel 1: Condición Humana y Promesa", words: ["PECADO", "LEY", "CAIDA", "GRACIA", "PROMESA", "PROFETA", "ARREPENTIR", "ESPERA"] },
    { title: "Nivel 2: Encarnación de Cristo", words: ["JESUS", "CRISTO", "MESIAS", "EMMANUEL", "VIRGEN", "MARIA", "VERBO", "PESEBRE"] },
    { title: "Nivel 3: Llamado y Conversión", words: ["ARREPENTIMIENTO", "FE", "CONVERSION", "PERDON", "DISCIPULO", "LLAMADO", "SEGUIR", "CREER"] },
    { title: "Nivel 4: Compromiso del Bautismo", words: ["BAUTISMO", "AGUA", "INMERSION", "SIMBOLO", "OBEDIENCIA", "COMPROMISO", "PURIFICACION", "TESTIMONIO"] },
    { title: "Nivel 5: Renacimiento Espiritual", words: ["RENACIMIENTO", "ESPIRITU", "NUEVO", "VIDA", "JUSTICIA", "ADOPCION", "AMOR", "LUZ"] },
    { title: "Nivel 6: Sacrificio de la Cruz", words: ["CRUZ", "SANGRE", "RESCATE", "SACRIFICIO", "CALVARIO", "AMOR", "SALVACION", "MISERICORDIA"] },
    { title: "Nivel 7: Resurrección y Ascensión", words: ["RESURRECCION", "SEPULCRO", "VICTORIA", "VIVO", "ASCENSION", "GLORIA", "SEÑOR", "CORONA"] },
    { title: "Nivel 8: Pentecostés y Espíritu Santo", words: ["PENTECOSTES", "ESPIRITU", "CONSOLADOR", "PODER", "UNCION", "IGLESIA", "DON", "FUEGO"] },
    { title: "Nivel 9: Oración y Meditación", words: ["ORACION", "MEDITACION", "PALABRA", "BIBLIA", "AYUNO", "ALABANZA", "ADORACION", "SUPLICA"] },
    { title: "Nivel 10: Santificación Diaria", words: ["SANTIFICACION", "SANTIDAD", "OBEDIENCIA", "PUREZA", "DISCIPLINA", "VERDAD", "JUSTICIA", "CAMINAR"] },
    { title: "Nivel 11: Frutos del Espíritu", words: ["AMOR", "GOZO", "PAZ", "PACIENCIA", "BENIGNIDAD", "MANSEDUMBRE", "FE", "DOMINIO"] },
    { title: "Nivel 12: Guerra Espiritual", words: ["ARMADURA", "ESCUDO", "ESPADA", "CASCO", "BATALLA", "VICTORIA", "RESISTENCIA", "VELAR"] },
    { title: "Nivel 13: Comunión y Servicio", words: ["COMUNION", "COMPARTIR", "SERVICIO", "CARIDAD", "HERMANDAD", "OFRENDA", "UNIDAD", "CUERPO"] },
    { title: "Nivel 14: Retorno del Señor", words: ["RETORNO", "VENIDA", "TROMPETA", "ESPERANZA", "ARREBATAMIENTO", "JUICIO", "GLORIA", "REY"] },
    { title: "Nivel 15: Ciudad Celestial y Eternidad", words: ["APOCALIPSIS", "PARAISO", "ETERNIDAD", "ESPOSA", "NUEVA", "JERUSALEN", "VIDA", "AMEN"] }
  ]
};

// --------------------------------------------------------------------------
// 2. ÉTAT DU JEU
// --------------------------------------------------------------------------
const GRID_SIZE = 12;
let currentLang = "fr";
let currentLevelIndex = 0;
let gridLetters = [];
let targetWords = [];
let foundWords = new Set();
let selectedCells = [];
let isSelecting = false;
let startCell = null;

let timerInterval = null;
let secondsElapsed = 0;
let isMuted = false;

// --------------------------------------------------------------------------
// 3. INITIALISATION
// --------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const splash = document.getElementById("splashScreen");
    if (splash) {
      splash.style.opacity = "0";
      setTimeout(() => splash.style.display = "none", 500);
    }
  }, 1800);

  initEventListeners();
  loadLevel(currentLevelIndex);
});

function initEventListeners() {
  document.getElementById("langSelect").addEventListener("change", (e) => {
    currentLang = e.target.value;
    updateLanguageUI();
    loadLevel(0);
  });

  document.getElementById("muteBtn").addEventListener("click", toggleMute);
  document.getElementById("nightModeBtn").addEventListener("click", toggleNightMode);

  document.getElementById("prevLevelBtn").addEventListener("click", prevLevel);
  document.getElementById("nextLevelBtn").addEventListener("click", nextLevel);
  document.getElementById("restartLevelBtn").addEventListener("click", () => loadLevel(currentLevelIndex));
  document.getElementById("hintBtn").addEventListener("click", giveHint);
  document.getElementById("shareBtn").addEventListener("click", shareScore);

  document.getElementById("bgRed").addEventListener("input", updateCustomColors);
  document.getElementById("bgGreen").addEventListener("input", updateCustomColors);
  document.getElementById("bgBlue").addEventListener("input", updateCustomColors);
  document.getElementById("boxOpacity").addEventListener("input", updateCustomColors);

  const gridEl = document.getElementById("wordGrid");
  
  gridEl.addEventListener("mousedown", handleStartSelection);
  gridEl.addEventListener("mouseover", handleMoveSelection);
  window.addEventListener("mouseup", handleEndSelection);

  gridEl.addEventListener("touchstart", handleTouchStart, { passive: false });
  gridEl.addEventListener("touchmove", handleTouchMove, { passive: false });
  window.addEventListener("touchend", handleEndSelection);
}

// --------------------------------------------------------------------------
// 4. GÉNÉRATION DE LA GRILLE & LOGIQUE
// --------------------------------------------------------------------------
function loadLevel(index) {
  const levels = LEVELS_DATA[currentLang] || LEVELS_DATA.fr;
  currentLevelIndex = Math.max(0, Math.min(index, levels.length - 1));
  
  const levelData = levels[currentLevelIndex];
  targetWords = levelData.words;
  foundWords.clear();
  selectedCells = [];
  startCell = null;

  document.getElementById("levelTitle").textContent = levelData.title;
  document.getElementById("levelDisplay").textContent = `${currentLevelIndex + 1} / ${levels.length}`;

  generateGrid(targetWords);
  renderGrid();
  renderWordList();
  updateFoundCount();

  resetTimer();
  startTimer();
}

function generateGrid(words) {
  gridLetters = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(""));

  const directions = [
    [0, 1],   // Horizontale
    [1, 0],   // Verticale
    [1, 1],   // Diagonale
    [-1, 1]   // Diagonale ascendante
  ];

  words.forEach(word => {
    let placed = false;
    let attempts = 0;

    while (!placed && attempts < 150) {
      attempts++;
      const dir = directions[Math.floor(Math.random() * directions.length)];
      const [dirR, dirC] = dir;

      const startR = Math.floor(Math.random() * GRID_SIZE);
      const startC = Math.floor(Math.random() * GRID_SIZE);

      const endR = startR + dirR * (word.length - 1);
      const endC = startC + dirC * (word.length - 1);

      if (endR >= 0 && endR < GRID_SIZE && endC >= 0 && endC < GRID_SIZE) {
        let fits = true;
        for (let i = 0; i < word.length; i++) {
          const r = startR + dirR * i;
          const c = startC + dirC * i;
          if (gridLetters[r][c] !== "" && gridLetters[r][c] !== word[i]) {
            fits = false;
            break;
          }
        }

        if (fits) {
          for (let i = 0; i < word.length; i++) {
            gridLetters[startR + dirR * i][startC + dirC * i] = word[i];
          }
          placed = true;
        }
      }
    }
  });

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let r = 0; r < GRID_SIZE; r++) {
    for (let c = 0; c < GRID_SIZE; c++) {
      if (gridLetters[r][c] === "") {
        gridLetters[r][c] = alphabet[Math.floor(Math.random() * alphabet.length)];
      }
    }
  }
}

// --------------------------------------------------------------------------
// 5. RENDU
// --------------------------------------------------------------------------
function renderGrid() {
  const gridEl = document.getElementById("wordGrid");
  gridEl.innerHTML = "";
  gridEl.style.gridTemplateColumns = `repeat(${GRID_SIZE}, 1fr)`;

  for (let r = 0; r < GRID_SIZE; r++) {
    for (let c = 0; c < GRID_SIZE; c++) {
      const cell = document.createElement("div");
      cell.classList.add("grid-cell");
      cell.dataset.row = r;
      cell.dataset.col = c;
      cell.textContent = gridLetters[r][c];
      gridEl.appendChild(cell);
    }
  }
}

function renderWordList() {
  const listEl = document.getElementById("wordList");
  listEl.innerHTML = "";

  targetWords.forEach(word => {
    const item = document.createElement("div");
    item.classList.add("word-item");
    if (foundWords.has(word)) {
      item.classList.add("found");
    }
    item.id = `word-${word}`;
    item.textContent = word;
    listEl.appendChild(item);
  });
}

function updateFoundCount() {
  document.getElementById("foundDisplay").textContent = `${foundWords.size} / ${targetWords.length}`;
}

// --------------------------------------------------------------------------
// 6. GESTION DE LA SÉLECTION STRICTE (LIGNE DROITE)
// --------------------------------------------------------------------------
function handleStartSelection(e) {
  if (!e.target.classList.contains("grid-cell")) return;
  isSelecting = true;
  startCell = e.target;
  selectedCells = [startCell];
  highlightSelected();
}

function handleMoveSelection(e) {
  if (!isSelecting || !e.target.classList.contains("grid-cell")) return;
  updateSelectionLine(startCell, e.target);
}

function handleTouchStart(e) {
  e.preventDefault();
  const touch = e.touches[0];
  const target = document.elementFromPoint(touch.clientX, touch.clientY);
  if (target && target.classList.contains("grid-cell")) {
    isSelecting = true;
    startCell = target;
    selectedCells = [startCell];
    highlightSelected();
  }
}

function handleTouchMove(e) {
  e.preventDefault();
  if (!isSelecting) return;
  const touch = e.touches[0];
  const target = document.elementFromPoint(touch.clientX, touch.clientY);
  if (target && target.classList.contains("grid-cell")) {
    updateSelectionLine(startCell, target);
  }
}

function updateSelectionLine(fromCell, toCell) {
  const r1 = parseInt(fromCell.dataset.row);
  const c1 = parseInt(fromCell.dataset.col);
  const r2 = parseInt(toCell.dataset.row);
  const c2 = parseInt(toCell.dataset.col);

  const dr = r2 - r1;
  const dc = c2 - c1;

  const isHorizontal = dr === 0;
  const isVertical = dc === 0;
  const isDiagonal = Math.abs(dr) === Math.abs(dc);

  if (!isHorizontal && !isVertical && !isDiagonal) return;

  const stepR = dr === 0 ? 0 : dr / Math.abs(dr);
  const stepC = dc === 0 ? 0 : dc / Math.abs(dc);
  const distance = Math.max(Math.abs(dr), Math.abs(dc));

  const newSelection = [];
  for (let i = 0; i <= distance; i++) {
    const r = r1 + stepR * i;
    const c = c1 + stepC * i;
    const cellEl = document.querySelector(`.grid-cell[data-row="${r}"][data-col="${c}"]`);
    if (cellEl) newSelection.push(cellEl);
  }

  selectedCells = newSelection;
  highlightSelected();
}

function handleEndSelection() {
  if (!isSelecting) return;
  isSelecting = false;

  const selectedWord = selectedCells.map(cell => cell.textContent).join("");
  const reversedWord = selectedWord.split("").reverse().join("");

  let matchedWord = null;
  if (targetWords.includes(selectedWord) && !foundWords.has(selectedWord)) {
    matchedWord = selectedWord;
  } else if (targetWords.includes(reversedWord) && !foundWords.has(reversedWord)) {
    matchedWord = reversedWord;
  }

  if (matchedWord) {
    foundWords.add(matchedWord);
    selectedCells.forEach(cell => cell.classList.add("found"));
    playSound("found");

    const wordItem = document.getElementById(`word-${matchedWord}`);
    if (wordItem) wordItem.classList.add("found");

    updateFoundCount();

    if (foundWords.size === targetWords.length) {
      stopTimer();
      playSound("win");
      setTimeout(() => {
        alert(UI_TEXTS[currentLang].win);
      }, 300);
    }
  } else {
    selectedCells.forEach(cell => cell.classList.remove("selected"));
  }

  selectedCells = [];
  startCell = null;
}

function highlightSelected() {
  document.querySelectorAll(".grid-cell").forEach(cell => {
    if (!cell.classList.contains("found")) {
      cell.classList.remove("selected");
    }
  });

  selectedCells.forEach(cell => {
    if (!cell.classList.contains("found")) {
      cell.classList.add("selected");
    }
  });
}

// --------------------------------------------------------------------------
// 7. MINUTEUR ET INDICES
// --------------------------------------------------------------------------
function startTimer() {
  stopTimer();
  timerInterval = setInterval(() => {
    secondsElapsed++;
    updateTimerDisplay();
  }, 1000);
}

function stopTimer() {
  if (timerInterval) clearInterval(timerInterval);
}

function resetTimer() {
  secondsElapsed = 0;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const mins = String(Math.floor(secondsElapsed / 60)).padStart(2, '0');
  const secs = String(secondsElapsed % 60).padStart(2, '0');
  document.getElementById("timerDisplay").textContent = `${mins}:${secs}`;
}

function giveHint() {
  const remainingWords = targetWords.filter(w => !foundWords.has(w));
  if (remainingWords.length === 0) return;

  const hintWord = remainingWords[0];
  secondsElapsed += 10;
  updateTimerDisplay();

  alert(`💡 Indice : Cherchez le terme "${hintWord[0]}..." (${hintWord.length} lettres)`);
}

// --------------------------------------------------------------------------
// 8. FONCTIONNALITÉS ANNEXES
// --------------------------------------------------------------------------
function updateLanguageUI() {
  const texts = UI_TEXTS[currentLang] || UI_TEXTS.fr;

  document.getElementById("appSlogan").textContent = texts.slogan;
  document.getElementById("levelLabel").textContent = texts.level;
  document.getElementById("foundLabel").textContent = texts.found;
  document.getElementById("timerLabel").textContent = texts.timer;
  document.getElementById("wordsToFindTitle").textContent = texts.wordsTitle;

  document.getElementById("prevLevelBtn").textContent = texts.prev;
  document.getElementById("nextLevelBtn").textContent = texts.next;
  document.getElementById("restartLevelBtn").textContent = texts.restart;
  document.getElementById("hintBtn").textContent = texts.hint;
}

function prevLevel() {
  if (currentLevelIndex > 0) loadLevel(currentLevelIndex - 1);
}

function nextLevel() {
  const levels = LEVELS_DATA[currentLang] || LEVELS_DATA.fr;
  if (currentLevelIndex < levels.length - 1) loadLevel(currentLevelIndex + 1);
}

function toggleMute() {
  isMuted = !isMuted;
  document.getElementById("muteBtn").textContent = isMuted ? "🔇 Mute" : "🔊 Mute";
}

function toggleNightMode() {
  document.body.classList.toggle("night-mode");
}

function updateCustomColors() {
  const r = document.getElementById("bgRed").value;
  const g = document.getElementById("bgGreen").value;
  const b = document.getElementById("bgBlue").value;
  const opacity = document.getElementById("boxOpacity").value;

  document.documentElement.style.setProperty('--color-bg-rgb', `${r}, ${g}, ${b}`);
  document.documentElement.style.setProperty('--box-opacity', opacity);
}

function playSound(type) {
  if (isMuted) return;

  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === "found") {
      osc.frequency.setValueAtTime(523.25, ctx.currentTime);
      osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
      osc.start();
      osc.stop(ctx.currentTime + 0.3);
    } else if (type === "win") {
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.setValueAtTime(880, ctx.currentTime + 0.2);
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.6);
      osc.start();
      osc.stop(ctx.currentTime + 0.6);
    }
  } catch (e) {
    // Audio non supporté
  }
}

function shareScore() {
  const text = UI_TEXTS[currentLang].shareText;
  if (navigator.share) {
    navigator.share({
      title: 'Mots Cachés - La Vie Chrétienne',
      text: text,
      url: window.location.href,
    }).catch(() => {});
  } else {
    navigator.clipboard.writeText(`${text} ${window.location.href}`);
    alert("Lien et message copiés dans le presse-papier !");
  }
}