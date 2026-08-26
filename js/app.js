/* ============================================================
   app.js: 3rd Year 1st Sem Reviewer G1
   Vanilla JS, no dependencies.
   ============================================================ */

'use strict';

// ── Constants ──────────────────────────────────────────────
const ADMIN_USER = 'zyril';
const ADMIN_PASS = '123';
// NOTE: This is a client-side credential check only, not real security.
// Anyone who opens DevTools can read or bypass this check. This is
// acceptable for a low-stakes personal study tool, but do NOT reuse
// this pattern for anything that needs actual access control.

const STORAGE_KEY_ADMIN  = 'g1-reviewer-admin';   // sessionStorage
const STORAGE_KEY_STATUS = 'g1-reviewer-statuses'; // localStorage overrides

// ── Theme Configuration ────────────────────────────────────
// To add a 4th theme: add one entry here + one CSS variable block
// (light + dark) in css/themes.css. That's it.
const THEMES = [
  { id: 'canvas',  label: 'Canvas' },
  { id: 'folio',   label: 'Folio' },
  { id: 'studio',  label: 'Studio' },
];

const DEFAULT_THEME = 'canvas'; // Best first impression for new visitors

// ── State ──────────────────────────────────────────────────
let currentView   = 'landing'; // 'landing' | 'app'
let currentExamId = null;
let currentTab    = 'notes';
let currentLessonTab = 0;        // index into exam.notesLessons[]

// ── Helpers ────────────────────────────────────────────────

/** Get status override from localStorage, fall back to data.js value. */
function getExamStatus(exam) {
  try {
    const overrides = JSON.parse(localStorage.getItem(STORAGE_KEY_STATUS) || '{}');
    return overrides[exam.id] || exam.status;
  } catch { return exam.status; }
}

/** Persist a status override to localStorage. */
function setExamStatusOverride(examId, status) {
  try {
    const overrides = JSON.parse(localStorage.getItem(STORAGE_KEY_STATUS) || '{}');
    overrides[examId] = status;
    localStorage.setItem(STORAGE_KEY_STATUS, JSON.stringify(overrides));
  } catch (e) { console.warn('localStorage write failed:', e); }
}

/** Return all exams flat, with effective status and parent subject info. */
function getAllExams() {
  const all = [];
  for (const subject of SUBJECTS) {
    for (const exam of subject.exams) {
      all.push({
        ...exam,
        status: getExamStatus(exam),
        subjectId: subject.id,
        subjectName: subject.name,
      });
    }
  }
  return all;
}

/** Find subject + exam by examId. Returns { subject, exam } or null. */
function findExam(examId) {
  for (const subject of SUBJECTS) {
    for (const exam of subject.exams) {
      if (exam.id === examId) return { subject, exam };
    }
  }
  return null;
}

/** Format a date string (YYYY-MM-DD) for display. */
function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-PH', { year: 'numeric', month: 'short', day: 'numeric' });
}

/** Check if admin is logged in. */
function isAdmin() {
  return sessionStorage.getItem(STORAGE_KEY_ADMIN) === '1';
}

/** Shuffle an array in place (Fisher-Yates). Also returns the array. */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/** Get badge class for exam type. */
function getBadgeClass(type) {
  const t = (type || '').toLowerCase();
  if (t.includes('mid')) return 'badge-midterms';
  if (t.includes('final')) return 'badge-finals';
  return 'badge-quiz';
}

// ── DOM refs ───────────────────────────────────────────────
const $ = id => document.getElementById(id);

// ── Visual Theme (data-theme: cobalt | folio | oxide) ──────
function switchTheme(themeId) {
  document.documentElement.setAttribute('data-theme', themeId);
  localStorage.setItem('siteTheme', themeId);
  // Sync the dropdown in case this was called programmatically
  const sel = $('theme-switcher');
  if (sel) sel.value = themeId;
}

function populateThemeSwitcher() {
  const sel = $('theme-switcher');
  if (!sel) return;
  sel.innerHTML = THEMES.map(t =>
    `<option value="${t.id}">${t.label}</option>`
  ).join('');
  // Set the saved or default value
  const current = document.documentElement.getAttribute('data-theme') || DEFAULT_THEME;
  sel.value = current;
}

// ── Light/Dark Mode (data-mode: light | dark) ──────────────
function applyMode(mode) {
  document.documentElement.setAttribute('data-mode', mode);
  const btn = $('theme-toggle');
  if (!btn) return;
  btn.setAttribute('aria-label', mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  btn.innerHTML = mode === 'dark' ? svgSun() : svgMoon();
}

function toggleMode() {
  const current = document.documentElement.getAttribute('data-mode') || 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  localStorage.setItem('siteMode', next);
  applyMode(next);
}

function initThemeAndMode() {
  // Theme (visual): already set by anti-FOUC script, but sync the dropdown
  const savedTheme = localStorage.getItem('siteTheme') || DEFAULT_THEME;
  document.documentElement.setAttribute('data-theme', savedTheme);

  // Mode (light/dark): already set by anti-FOUC script, but sync the toggle icon
  const savedMode = localStorage.getItem('siteMode');
  const mode = savedMode || 'light';
  applyMode(mode);

  // Populate the theme switcher dropdown
  populateThemeSwitcher();
}

// ── SVG icons (inline, lightweight) ────────────────────────
function svgSun() {
  return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>`;
}

function svgMoon() {
  return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>`;
}

function svgChevronRight() {
  return `<svg class="subject-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`;
}

function svgBars() {
  return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;
}

function svgX() {
  return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;
}

function svgHome() {
  return `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`;
}

// ── Routing / View switching ────────────────────────────────
function showLanding() {
  currentView = 'landing';
  currentExamId = null;
  closeMobileSidebar();
  $('landing-view').style.display = 'block';
  $('app-view').style.display    = 'none';
  $('nav-home-btn').style.display = 'none';
  $('hamburger-btn').style.display = 'none';
  renderLanding();
  initRevealObserver();
}

function showApp(examId) {
  currentView = 'app';
  $('landing-view').style.display = 'none';
  $('app-view').style.display    = 'flex';
  $('nav-home-btn').style.display = 'flex';
  // Show hamburger only on mobile (CSS hides it on desktop via display:none override)
  $('hamburger-btn').style.display = '';
  renderSidebar();
  if (examId) openExam(examId);
  else renderWelcome();
}

function openExam(examId) {
  currentExamId = examId;
  currentTab    = 'notes';
  currentLessonTab = 0;
  renderSidebar();      // refresh active state
  renderExamContent();
}

// ── Landing render ──────────────────────────────────────────
function renderLanding() {
  const all = getAllExams();
  const upcoming = all.filter(e => e.status === 'upcoming').sort((a,b) => (b.date || '').localeCompare(a.date || ''));
  const done     = all.filter(e => e.status === 'done'    ).sort((a,b) => (b.date || '').localeCompare(a.date || ''));

  $('upcoming-count').textContent = upcoming.length;
  $('past-count').textContent     = done.length;

  renderExamList('upcoming-list', upcoming, false);
  renderExamList('past-list',     done,     true);
}

function renderExamList(containerId, exams, isDone) {
  const container = $(containerId);
  if (!container) return;

  if (exams.length === 0) {
    container.innerHTML = `<div class="empty-state">${isDone ? 'No past exams yet.' : 'No upcoming exams.'}</div>`;
    return;
  }

  container.innerHTML = exams.map(exam => {
    const markDoneBtn = (!isDone && isAdmin())
      ? `<button class="mark-done-btn" data-exam-id="${exam.id}" onclick="handleMarkDone(event, '${exam.id}')">✓ Done</button>`
      : '';
    return `
      <div class="exam-card${isDone ? ' done' : ''} reveal" onclick="showApp('${exam.id}')" role="button" tabindex="0" aria-label="Open ${exam.subjectName} ${exam.title}">
        <div class="exam-card-dot"></div>
        <div class="exam-card-body">
          <div class="exam-card-subject">${exam.subjectName}</div>
          <div class="exam-card-title">${exam.title}</div>
          <div class="exam-card-date">${formatDate(exam.date)}</div>
        </div>
        <span class="exam-badge ${getBadgeClass(exam.type)}">${exam.type}</span>
        ${markDoneBtn}
      </div>`;
  }).join('');
}

// ── Sidebar render ──────────────────────────────────────────
function renderSidebar() {
  const container = $('sidebar-subjects');
  if (!container) return;

  container.innerHTML = SUBJECTS.map(subject => {
    const examsHtml = subject.exams.map(exam => {
      const status = getExamStatus(exam);
      const isActive = exam.id === currentExamId;
      const markBtn = (status === 'upcoming' && isAdmin())
        ? `<button class="sidebar-mark-done" data-exam-id="${exam.id}" onclick="handleMarkDone(event, '${exam.id}')">✓</button>`
        : '';
      const doneDot = status === 'done' ? '✓ ' : '';
      return `
        <div class="sidebar-exam-item${isActive ? ' active' : ''}${status === 'done' ? ' done' : ''}"
             onclick="handleSidebarExamClick('${exam.id}')"
             role="button" tabindex="0"
             aria-label="Open ${exam.title}">
          <div class="item-text">
            <div class="item-title">${doneDot}${exam.title}</div>
            <div class="item-date">${formatDate(exam.date)}</div>
          </div>
          ${markBtn}
        </div>`;
    }).join('');

    // Determine if group should be open: open if it contains the active exam
    const isOpen = subject.exams.some(e => e.id === currentExamId);

    return `
      <div class="subject-group${isOpen ? ' open' : ''}" data-subject-id="${subject.id}">
        <div class="subject-header" onclick="toggleSubjectGroup(this.parentElement)" role="button" tabindex="0" aria-expanded="${isOpen}">
          ${subject.name}
          ${svgChevronRight()}
        </div>
        <div class="subject-exams">
          ${examsHtml}
        </div>
      </div>`;
  }).join('');
}

function toggleSubjectGroup(groupEl) {
  groupEl.classList.toggle('open');
}

function handleSidebarExamClick(examId) {
  closeMobileSidebar();
  openExam(examId);
}

// ── Exam content render ─────────────────────────────────────
function renderWelcome() {
  $('main-content').innerHTML = `
    <div class="content-welcome reveal">
      <h2>Select an exam to begin</h2>
      <p>Choose a subject from the sidebar, then pick an exam to view its notes or reviewer.</p>
    </div>`;
  initRevealObserver();
}

function renderExamContent() {
  const found = findExam(currentExamId);
  if (!found) { renderWelcome(); return; }

  const { subject, exam } = found;
  const status = getExamStatus(exam);

  const adminNote = isAdmin() && status === 'upcoming' ? `
    <div class="admin-note">
      Admin: Status changes via "Mark as Done" only persist on <em>this browser/device</em>.
      To make it permanent for all visitors, edit <code>status</code> in <code>js/data.js</code> and redeploy.
    </div>` : '';

  const markDoneBtn = isAdmin() && status === 'upcoming' ? `
    <button class="mark-done-btn" style="margin-top:8px" onclick="handleMarkDone(event, '${exam.id}')">✓ Mark as Done</button>` : '';

  // Determine whether this exam uses lesson tabs for notes
  const hasLessonTabs = Array.isArray(exam.notesLessons) && exam.notesLessons.length > 0;

  // Build the notes panel content
  let notesPanelContent;
  if (hasLessonTabs) {
    const lessonTabsHtml = exam.notesLessons.map((lesson, i) =>
      `<button class="tab-btn${currentLessonTab === i ? ' active' : ''}" 
              id="lesson-tab-${i}" role="tab" 
              aria-selected="${currentLessonTab === i}"
              onclick="switchLessonTab(${i})">${lesson.tab}</button>`
    ).join('');

    const lessonPanelsHtml = exam.notesLessons.map((lesson, i) =>
      `<div id="lesson-panel-${i}" class="tab-panel${currentLessonTab === i ? ' active' : ''}">
        <div class="prose">${lesson.content}</div>
      </div>`
    ).join('');

    notesPanelContent = `
      <div class="tabs lesson-tabs" role="tablist" style="margin-bottom: 1rem;">
        ${lessonTabsHtml}
      </div>
      ${lessonPanelsHtml}`;
  } else {
    notesPanelContent = `<div class="prose">${exam.notes || '<p>No notes yet.</p>'}</div>`;
  }

  $('main-content').innerHTML = `
    <div class="exam-content-header reveal">
      <div class="exam-content-eyebrow">
        <span>${subject.name}</span>
        <span class="exam-badge ${getBadgeClass(exam.type)}">${exam.type}</span>
      </div>
      <h1 class="exam-content-title">${exam.title}</h1>
      <div class="exam-content-meta">
        <span>${formatDate(exam.date)}</span>
        <span style="color: ${status === 'done' ? 'var(--success)' : 'var(--warning)'}">
          ${status === 'done' ? '✓ Done' : 'Upcoming'}
        </span>
      </div>
      ${markDoneBtn}
      ${adminNote}
    </div>

    <div class="tabs" role="tablist">
      <button class="tab-btn${currentTab === 'notes'    ? ' active' : ''}" id="tab-notes"    role="tab" aria-selected="${currentTab==='notes'}" onclick="switchTab('notes')">Notes</button>
      <button class="tab-btn${currentTab === 'reviewer' ? ' active' : ''}" id="tab-reviewer" role="tab" aria-selected="${currentTab==='reviewer'}" onclick="switchTab('reviewer')">Reviewer</button>
    </div>

    <div id="panel-notes"    class="tab-panel${currentTab === 'notes'    ? ' active' : ''}">${notesPanelContent}</div>
    <div id="panel-reviewer" class="tab-panel${currentTab === 'reviewer' ? ' active' : ''}"></div>`;

  const reviewerPanel = $('panel-reviewer');
  if (Array.isArray(exam.reviewer)) {
    renderInteractiveReviewer(reviewerPanel, exam.reviewer);
  } else if (exam.reviewer && typeof exam.reviewer === 'object') {
    // Detect which sub-tabs to show
    const hasIdent = exam.reviewer.ident != null;
    const hasEnum  = exam.reviewer.enum != null;
    const secondTabKey   = hasEnum ? 'enum' : 'ident';
    const secondTabLabel = hasEnum ? 'Enumeration' : 'Identification';

    reviewerPanel.innerHTML = `
      <div class="tabs reviewer-subtabs" role="tablist" style="margin-bottom: 1rem;">
        <button class="tab-btn active" id="subtab-mcq" role="tab" onclick="switchReviewerTab('mcq')">Multiple Choice</button>
        <button class="tab-btn" id="subtab-${secondTabKey}" role="tab" onclick="switchReviewerTab('${secondTabKey}')">${secondTabLabel}</button>
      </div>
      <div id="subpanel-mcq" class="tab-panel active"></div>
      <div id="subpanel-${secondTabKey}" class="tab-panel"></div>
    `;
    renderInteractiveReviewer($('subpanel-mcq'), exam.reviewer.mcq);

    if (hasEnum) {
      renderInteractiveEnum($('subpanel-enum'), exam.reviewer.enum);
    } else {
      const identPanel = $('subpanel-ident');
      if (Array.isArray(exam.reviewer.ident)) {
        renderInteractiveIdent(identPanel, exam.reviewer.ident);
      } else {
        identPanel.innerHTML = `<div class="prose">${exam.reviewer.ident}</div>`;
      }
    }
  } else {
    reviewerPanel.innerHTML = `<div class="prose">${exam.reviewer || '<p>No reviewer yet.</p>'}</div>`;
  }


  initRevealObserver();
}


// ── Interactive Reviewer Component ───────────────────────────
function renderInteractiveReviewer(container, originalQuestions) {
  let score = 0;
  let answeredCount = 0;
  let currentMcqIndex = 0;

  // Deep clone and shuffle questions
  const questions = shuffleArray(JSON.parse(JSON.stringify(originalQuestions)));

  // Track answered state per question
  const answeredFlags = new Array(questions.length).fill(null);

  // Render shell: header + layout (main + navigator)
  container.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 1rem;">
      <h3 style="margin: 0;">Part I. Multiple Choice</h3>
      <div style="font-weight: 600; font-size: 1.05rem; color: var(--text-primary);">
        Score: <span class="mcq-score" style="color: var(--accent);">0</span> / ${questions.length}
      </div>
    </div>
    <div class="enum-layout">
      <div class="enum-main">
        <div class="enum-question-indicator"></div>
        <div class="mcq-quiz-container"></div>
        <div class="enum-prev-next">
          <button class="enum-prev-btn">← Previous</button>
          <button class="enum-next-btn">Next →</button>
        </div>
      </div>
      <div class="enum-navigator">
        <div class="enum-navigator-title">Questions</div>
        <div class="enum-nav-grid"></div>
        <button class="quiz-restart-btn" style="width: 100%; margin-top: 14px;">Restart Quiz</button>
      </div>
    </div>
  `;
  
  const quizContainer = container.querySelector('.mcq-quiz-container');
  const scoreDisplay = container.querySelector('.mcq-score');
  const indicator = container.querySelector('.enum-question-indicator');
  const prevBtn = container.querySelector('.enum-prev-btn');
  const nextBtn = container.querySelector('.enum-next-btn');
  const navGrid = container.querySelector('.enum-nav-grid');
  const restartBtn = container.querySelector('.quiz-restart-btn');

  // Build all question containers
  const questionEls = [];

  questions.forEach((q, qIndex) => {
    // Keep track of the correct answer text before shuffling
    const correctAnswerText = q.options[q.correctIndex];
    // Shuffle the options
    shuffleArray(q.options);
    // Find the new correct index
    const newCorrectIndex = q.options.indexOf(correctAnswerText);

    const qContainer = document.createElement('div');
    qContainer.className = 'quiz-question-container';
    qContainer.style.display = 'none';
    
    const qText = document.createElement('div');
    qText.className = 'quiz-question-text';
    // Remove old manual numbering from q.question if it exists, and re-number based on new order
    const rawQuestionText = q.question.replace(/^\d+\.\s*/, '');
    qText.textContent = rawQuestionText;
    qContainer.appendChild(qText);
    
    const optionsList = document.createElement('div');
    optionsList.className = 'quiz-options-list';
    
    let selectedOptionIndex = -1;
    let isAnswered = false;
    
    const letterPrefixes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    q.options.forEach((optText, optIndex) => {
      // Remove old A. B. C. from optText if they exist
      const rawOptText = optText.replace(/^[A-Z]\.\s*/, '');
      const btn = document.createElement('button');
      btn.className = 'quiz-option-btn';
      btn.textContent = `${letterPrefixes[optIndex] || ''}. ${rawOptText}`;
      
      btn.onclick = () => {
        if (isAnswered) return;
        
        const allBtns = optionsList.querySelectorAll('.quiz-option-btn');
        allBtns.forEach(b => b.classList.remove('quiz-option-selected'));
        btn.classList.add('quiz-option-selected');
        
        selectedOptionIndex = optIndex;
        checkBtn.disabled = false;
      };
      
      optionsList.appendChild(btn);
    });
    
    const actionGroup = document.createElement('div');
    actionGroup.style.marginTop = '12px';
    
    const checkBtn = document.createElement('button');
    checkBtn.className = 'ident-check-btn';
    checkBtn.textContent = 'Check Answer';
    checkBtn.disabled = true;

    checkBtn.onclick = () => {
      if (selectedOptionIndex === -1 || isAnswered) return;
      
      isAnswered = true;
      checkBtn.disabled = true;
      
      const allBtns = optionsList.querySelectorAll('.quiz-option-btn');
      allBtns.forEach(b => b.disabled = true);
      
      answeredCount++;
      answeredFlags[qIndex] = true;
      
      const selectedBtn = allBtns[selectedOptionIndex];
      selectedBtn.classList.remove('quiz-option-selected');
      
      if (selectedOptionIndex === newCorrectIndex) {
        answeredFlags[qIndex] = 'correct';
        selectedBtn.classList.add('quiz-option-correct');
        score++;
        scoreDisplay.textContent = score;
      } else {
        answeredFlags[qIndex] = 'incorrect';
        selectedBtn.classList.add('quiz-option-incorrect');
        if (allBtns[newCorrectIndex]) {
          allBtns[newCorrectIndex].classList.add('quiz-option-correct');
        }
      }

      // Update navigator button state
      updateNavButtons();

      // Check if finished
      if (answeredCount === questions.length) {
        const pct = Math.round((score / questions.length) * 100);
        const finalFeedback = document.createElement('div');
        finalFeedback.style.marginTop = '2rem';
        finalFeedback.style.padding = '16px';
        finalFeedback.style.background = 'var(--surface-alt)';
        finalFeedback.style.border = '1px solid var(--border)';
        finalFeedback.style.borderRadius = 'var(--radius-md)';
        finalFeedback.style.textAlign = 'center';
        finalFeedback.className = 'mcq-final-feedback';
        finalFeedback.innerHTML = `<h3 style="margin-top: 0;">Quiz Completed</h3>
        <p style="font-size: 1.1rem; margin-bottom: 0;">Your final score is <strong>${score} / ${questions.length}</strong> (${pct}%).</p>`;
        // Remove any existing final feedback first
        const existing = quizContainer.querySelector('.mcq-final-feedback');
        if (existing) existing.remove();
        quizContainer.appendChild(finalFeedback);
      }
    };
    
    actionGroup.appendChild(checkBtn);
    qContainer.appendChild(optionsList);
    qContainer.appendChild(actionGroup);
    quizContainer.appendChild(qContainer);
    questionEls.push(qContainer);
  });

  // Build navigator buttons
  const navButtons = [];
  questions.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.className = 'enum-nav-btn';
    btn.textContent = i + 1;
    btn.onclick = () => goToQuestion(i);
    navGrid.appendChild(btn);
    navButtons.push(btn);
  });

  function updateNavButtons() {
    navButtons.forEach((btn, i) => {
      btn.classList.toggle('active', i === currentMcqIndex);
      btn.classList.toggle('correct', answeredFlags[i] === 'correct');
      btn.classList.toggle('incorrect', answeredFlags[i] === 'incorrect');
    });
  }

  function updatePrevNext() {
    prevBtn.disabled = currentMcqIndex === 0;
    if (currentMcqIndex === questions.length - 1) {
      nextBtn.textContent = 'Finish ✓';
    } else {
      nextBtn.textContent = 'Next →';
    }
  }

  function goToQuestion(index) {
    if (index < 0 || index >= questions.length) return;
    questionEls[currentMcqIndex].style.display = 'none';
    currentMcqIndex = index;
    questionEls[currentMcqIndex].style.display = '';
    indicator.textContent = `Question ${currentMcqIndex + 1} of ${questions.length}`;
    updateNavButtons();
    updatePrevNext();
  }

  prevBtn.onclick = () => goToQuestion(currentMcqIndex - 1);
  nextBtn.onclick = () => {
    if (currentMcqIndex < questions.length - 1) {
      goToQuestion(currentMcqIndex + 1);
    } else {
      // On last question, scroll to show final feedback if quiz is complete
      const finalEl = quizContainer.querySelector('.mcq-final-feedback');
      if (finalEl) {
        finalEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  // Show the first question
  goToQuestion(0);

  // Restart button
  restartBtn.onclick = () => {
    renderInteractiveReviewer(container, originalQuestions);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
}

function renderInteractiveIdent(container, originalQuestions) {
  let score = 0;
  let answeredCount = 0;
  let currentIdentIndex = 0;

  // Deep clone and shuffle
  const questions = shuffleArray(JSON.parse(JSON.stringify(originalQuestions)));

  // Track answered state per question (null, 'correct', 'incorrect')
  const answeredFlags = new Array(questions.length).fill(null);

  container.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 1rem;">
      <h3 style="margin: 0;">Part II. Identification</h3>
      <div style="font-weight: 600; font-size: 1.05rem; color: var(--text-primary);">
        Score: <span class="ident-score" style="color: var(--accent);">0</span> / ${questions.length}
      </div>
    </div>
    <div class="enum-layout">
      <div class="enum-main">
        <div class="enum-question-indicator"></div>
        <div class="ident-quiz-container"></div>
        <div class="enum-prev-next">
          <button class="enum-prev-btn">← Previous</button>
          <button class="enum-next-btn">Next →</button>
        </div>
      </div>
      <div class="enum-navigator">
        <div class="enum-navigator-title">Questions</div>
        <div class="enum-nav-grid"></div>
        <button class="quiz-restart-btn" style="width: 100%; margin-top: 14px;">Restart Quiz</button>
      </div>
    </div>
  `;
  
  const quizContainer = container.querySelector('.ident-quiz-container');
  const scoreDisplay = container.querySelector('.ident-score');
  const indicator = container.querySelector('.enum-question-indicator');
  const prevBtn = container.querySelector('.enum-prev-btn');
  const nextBtn = container.querySelector('.enum-next-btn');
  const navGrid = container.querySelector('.enum-nav-grid');
  const restartBtn = container.querySelector('.quiz-restart-btn');

  const questionEls = [];
  
  questions.forEach((q, qIndex) => {
    const qContainer = document.createElement('div');
    qContainer.className = 'quiz-question-container';
    qContainer.style.display = 'none';
    
    const qText = document.createElement('div');
    qText.className = 'quiz-question-text';
    const rawQuestionText = q.question.replace(/^\d+\.\s*/, '');
    qText.textContent = rawQuestionText;
    qContainer.appendChild(qText);
    
    const inputGroup = document.createElement('div');
    inputGroup.className = 'ident-input-group';
    
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'ident-input';
    input.placeholder = 'Type your answer...';
    
    const checkBtn = document.createElement('button');
    checkBtn.className = 'ident-check-btn';
    checkBtn.textContent = 'Check Answer';
    
    const feedback = document.createElement('div');
    feedback.className = 'ident-feedback';
    feedback.style.marginTop = '8px';
    
    checkBtn.onclick = () => {
      const val = input.value.trim().toLowerCase();
      if (!val) return;
      
      const isCorrect = q.accept.some(ans => ans.toLowerCase() === val) || val === q.answer.toLowerCase();
      
      input.disabled = true;
      checkBtn.disabled = true;
      answeredCount++;
      
      if (isCorrect) {
        score++;
        scoreDisplay.textContent = score;
        feedback.innerHTML = `<span style="color: var(--success); font-weight: 600;">✓ Correct!</span>`;
        input.classList.add('input-correct');
        answeredFlags[qIndex] = 'correct';
      } else {
        feedback.innerHTML = `<span style="color: var(--warning); font-weight: 600;">✗ Incorrect. The correct answer is: ${q.answer}</span>`;
        input.classList.add('input-incorrect');
        answeredFlags[qIndex] = 'incorrect';
      }

      updateNavButtons();

      if (answeredCount === questions.length) {
        const pct = Math.round((score / questions.length) * 100);
        const finalFeedback = document.createElement('div');
        finalFeedback.style.marginTop = '2rem';
        finalFeedback.style.padding = '16px';
        finalFeedback.style.background = 'var(--surface-alt)';
        finalFeedback.style.border = '1px solid var(--border)';
        finalFeedback.style.borderRadius = 'var(--radius-md)';
        finalFeedback.style.textAlign = 'center';
        finalFeedback.className = 'ident-final-feedback';
        finalFeedback.innerHTML = `<h3 style="margin-top: 0;">Quiz Completed</h3>
        <p style="font-size: 1.1rem; margin-bottom: 0;">Your final score is <strong>${score} / ${questions.length}</strong> (${pct}%).</p>`;
        
        const existing = quizContainer.querySelector('.ident-final-feedback');
        if (existing) existing.remove();
        quizContainer.appendChild(finalFeedback);
      }
    };
    
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') checkBtn.click();
    });
    
    inputGroup.appendChild(input);
    inputGroup.appendChild(checkBtn);
    qContainer.appendChild(inputGroup);
    qContainer.appendChild(feedback);
    
    quizContainer.appendChild(qContainer);
    questionEls.push(qContainer);
  });
  
  // Build navigator buttons
  const navButtons = [];
  questions.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.className = 'enum-nav-btn';
    btn.textContent = i + 1;
    btn.onclick = () => goToQuestion(i);
    navGrid.appendChild(btn);
    navButtons.push(btn);
  });

  function updateNavButtons() {
    navButtons.forEach((btn, i) => {
      btn.classList.toggle('active', i === currentIdentIndex);
      btn.classList.toggle('correct', answeredFlags[i] === 'correct');
      btn.classList.toggle('incorrect', answeredFlags[i] === 'incorrect');
    });
  }

  function updatePrevNext() {
    prevBtn.disabled = currentIdentIndex === 0;
    if (currentIdentIndex === questions.length - 1) {
      nextBtn.textContent = 'Finish ✓';
    } else {
      nextBtn.textContent = 'Next →';
    }
  }

  function goToQuestion(index) {
    if (index < 0 || index >= questions.length) return;
    questionEls[currentIdentIndex].style.display = 'none';
    currentIdentIndex = index;
    questionEls[currentIdentIndex].style.display = '';
    indicator.textContent = `Question ${currentIdentIndex + 1} of ${questions.length}`;
    updateNavButtons();
    updatePrevNext();

    // Focus input
    const inputEl = questionEls[currentIdentIndex].querySelector('.ident-input:not(:disabled)');
    if (inputEl) inputEl.focus();
  }

  prevBtn.onclick = () => goToQuestion(currentIdentIndex - 1);
  nextBtn.onclick = () => {
    if (currentIdentIndex < questions.length - 1) {
      goToQuestion(currentIdentIndex + 1);
    } else {
      const finalEl = quizContainer.querySelector('.ident-final-feedback');
      if (finalEl) {
        finalEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  // Show the first question
  goToQuestion(0);

  restartBtn.onclick = () => {
    renderInteractiveIdent(container, originalQuestions);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
}

function renderInteractiveEnum(container, originalQuestions) {
  let score = 0;
  let answeredCount = 0;
  let currentEnumIndex = 0;

  // Total points instead of total questions length for the score tracker
  const totalPoints = originalQuestions.reduce((sum, q) => sum + q.requiredAnswerCount, 0);

  // Deep clone and shuffle
  const questions = shuffleArray(JSON.parse(JSON.stringify(originalQuestions)));

  // Track answered state per question
  const answeredFlags = new Array(questions.length).fill(null);

  // Render shell: header + layout (main + navigator)
  container.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 1rem;">
      <h3 style="margin: 0;">Part II. Enumeration</h3>
      <div style="font-weight: 600; font-size: 1.05rem; color: var(--text-primary);">
        Score: <span class="enum-score" style="color: var(--accent);">0</span> / ${totalPoints}
      </div>
    </div>
    <div class="enum-layout">
      <div class="enum-main">
        <div class="enum-question-indicator"></div>
        <div class="enum-quiz-container"></div>
        <div class="enum-prev-next">
          <button class="enum-prev-btn">← Previous</button>
          <button class="enum-next-btn">Next →</button>
        </div>
      </div>
      <div class="enum-navigator">
        <div class="enum-navigator-title">Questions</div>
        <div class="enum-nav-grid"></div>
        <button class="quiz-restart-btn" style="width: 100%; margin-top: 14px;">Restart Quiz</button>
      </div>
    </div>
  `;

  const quizContainer = container.querySelector('.enum-quiz-container');
  const scoreDisplay = container.querySelector('.enum-score');
  const indicator = container.querySelector('.enum-question-indicator');
  const prevBtn = container.querySelector('.enum-prev-btn');
  const nextBtn = container.querySelector('.enum-next-btn');
  const navGrid = container.querySelector('.enum-nav-grid');
  const restartBtn = container.querySelector('.quiz-restart-btn');

  // Build all question containers
  const questionEls = [];

  questions.forEach((q, qIndex) => {
    const qContainer = document.createElement('div');
    qContainer.className = 'quiz-question-container';
    qContainer.style.display = 'none';

    const qText = document.createElement('div');
    qText.className = 'quiz-question-text';
    const rawQuestionText = q.question.replace(/^\d+\.\s*/, '');
    qText.textContent = rawQuestionText;
    qContainer.appendChild(qText);

    const inputGroup = document.createElement('div');
    inputGroup.className = 'ident-input-group';
    inputGroup.style.display = 'flex';
    inputGroup.style.flexDirection = 'column';
    inputGroup.style.gap = '8px';

    const inputs = [];
    for (let i = 0; i < q.requiredAnswerCount; i++) {
      const row = document.createElement('div');
      row.style.display = 'flex';
      row.style.alignItems = 'center';
      row.style.gap = '8px';

      const numLabel = document.createElement('span');
      numLabel.textContent = `${i + 1}.`;
      numLabel.style.fontWeight = '600';
      numLabel.style.color = 'var(--text-secondary)';
      numLabel.style.minWidth = '20px';

      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'ident-input';
      input.placeholder = `Enter answer ${i + 1}`;
      input.style.flex = '1';

      inputs.push(input);
      row.appendChild(numLabel);
      row.appendChild(input);
      inputGroup.appendChild(row);
    }

    const actionGroup = document.createElement('div');
    actionGroup.style.marginTop = '12px';

    const checkBtn = document.createElement('button');
    checkBtn.className = 'ident-check-btn';
    checkBtn.textContent = 'Check Answer';

    const feedback = document.createElement('div');
    feedback.className = 'ident-feedback';
    feedback.style.marginTop = '8px';

    const normalize = (str) => {
      const normalized = str.trim().toLowerCase().replace(/\\s+/g, ' ');
      const noPunct = normalized.replace(/[^\\w\\s]/g, '');
      return { normalized, noPunct };
    };

    const isMatch = (userStr, acceptedVariants) => {
      const userNorm = normalize(userStr);
      return acceptedVariants.some(variant => {
        const variantNorm = normalize(variant);
        return variantNorm.normalized === userNorm.normalized ||
               variantNorm.noPunct === userNorm.noPunct;
      });
    };

    checkBtn.onclick = () => {
      let correctCount = 0;
      const usedExpectedIndices = new Set();

      if (q.ordered) {
        inputs.forEach((input, i) => {
          const val = input.value;
          if (!val.trim()) {
             input.classList.add('input-incorrect');
             return;
          }
          if (q.accept[i] && isMatch(val, q.accept[i])) {
            input.classList.add('input-correct');
            correctCount++;
          } else {
            input.classList.add('input-incorrect');
          }
        });
      } else {
        inputs.forEach((input) => {
           const val = input.value;
           if (!val.trim()) {
             input.classList.add('input-incorrect');
             return;
           }
           let foundMatch = false;
           for (let j = 0; j < q.accept.length; j++) {
              if (usedExpectedIndices.has(j)) continue;

              if (isMatch(val, q.accept[j])) {
                 foundMatch = true;
                 usedExpectedIndices.add(j);
                 break;
              }
           }
           if (foundMatch) {
              input.classList.add('input-correct');
              correctCount++;
           } else {
              input.classList.add('input-incorrect');
           }
        });
      }

      inputs.forEach(input => input.disabled = true);
      checkBtn.disabled = true;
      answeredCount++;

      if (correctCount === q.requiredAnswerCount) {
        answeredFlags[qIndex] = 'correct';
        feedback.innerHTML = `<span style="color: var(--success); font-weight: 600;">✓ Correct! All answers are right.</span>`;
      } else {
        answeredFlags[qIndex] = 'incorrect';
        const expectedSummary = q.accept.map(aliases => aliases[0]).join(', ');
        feedback.innerHTML = `<span style="color: var(--warning); font-weight: 600;">✗ You got ${correctCount} out of ${q.requiredAnswerCount} correct.</span>
        <div style="margin-top: 4px; font-size: 0.85rem; color: var(--text-secondary);">Expected answers: ${expectedSummary}</div>`;
      }

      score += correctCount;
      scoreDisplay.textContent = score;

      // Update navigator button state
      updateNavButtons();

      if (answeredCount === questions.length) {
         const pct = Math.round((score / totalPoints) * 100);
         const finalFeedback = document.createElement('div');
         finalFeedback.style.marginTop = '2rem';
         finalFeedback.style.padding = '16px';
         finalFeedback.style.background = 'var(--surface-alt)';
         finalFeedback.style.border = '1px solid var(--border)';
         finalFeedback.style.borderRadius = 'var(--radius-md)';
         finalFeedback.style.textAlign = 'center';
         finalFeedback.className = 'enum-final-feedback';
         finalFeedback.innerHTML = `<h3 style="margin-top: 0;">Quiz Completed</h3>
         <p style="font-size: 1.1rem; margin-bottom: 0;">Your final score is <strong>${score} / ${totalPoints}</strong> (${pct}%).</p>`;
         // Remove any existing final feedback first
         const existing = quizContainer.querySelector('.enum-final-feedback');
         if (existing) existing.remove();
         quizContainer.appendChild(finalFeedback);
      }
    };

    inputs.forEach((input, i) => {
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          if (i < inputs.length - 1) {
            inputs[i + 1].focus();
          } else {
            checkBtn.click();
          }
        }
      });
    });

    actionGroup.appendChild(checkBtn);
    qContainer.appendChild(inputGroup);
    qContainer.appendChild(actionGroup);
    qContainer.appendChild(feedback);

    quizContainer.appendChild(qContainer);
    questionEls.push(qContainer);
  });

  // Build navigator buttons
  const navButtons = [];
  questions.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.className = 'enum-nav-btn';
    btn.textContent = i + 1;
    btn.onclick = () => goToQuestion(i);
    navGrid.appendChild(btn);
    navButtons.push(btn);
  });

  function updateNavButtons() {
    navButtons.forEach((btn, i) => {
      btn.classList.toggle('active', i === currentEnumIndex);
      btn.classList.toggle('correct', answeredFlags[i] === 'correct');
      btn.classList.toggle('incorrect', answeredFlags[i] === 'incorrect');
    });
  }

  function updatePrevNext() {
    prevBtn.disabled = currentEnumIndex === 0;
    if (currentEnumIndex === questions.length - 1) {
      nextBtn.textContent = 'Finish ✓';
    } else {
      nextBtn.textContent = 'Next →';
    }
  }

  function goToQuestion(index) {
    if (index < 0 || index >= questions.length) return;
    questionEls[currentEnumIndex].style.display = 'none';
    currentEnumIndex = index;
    questionEls[currentEnumIndex].style.display = '';
    indicator.textContent = `Question ${currentEnumIndex + 1} of ${questions.length}`;
    updateNavButtons();
    updatePrevNext();

    // Focus first non-disabled input of the new question
    const firstInput = questionEls[currentEnumIndex].querySelector('.ident-input:not(:disabled)');
    if (firstInput) firstInput.focus();
  }

  prevBtn.onclick = () => goToQuestion(currentEnumIndex - 1);
  nextBtn.onclick = () => {
    if (currentEnumIndex < questions.length - 1) {
      goToQuestion(currentEnumIndex + 1);
    } else {
      // On last question, scroll to show final feedback if quiz is complete
      const finalEl = quizContainer.querySelector('.enum-final-feedback');
      if (finalEl) {
        finalEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  // Show the first question
  goToQuestion(0);

  // Restart button
  restartBtn.onclick = () => {
    renderInteractiveEnum(container, originalQuestions);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
}

function switchTab(tab) {
  currentTab = tab;
  const mainTabs = document.querySelector('.tabs');
  if (mainTabs) {
    mainTabs.querySelectorAll('.tab-btn').forEach(btn => {
      const isActive = btn.id === `tab-${tab}`;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive);
    });
  }
  ['notes', 'reviewer'].forEach(t => {
    const panel = document.getElementById(`panel-${t}`);
    if (panel) panel.classList.toggle('active', t === tab);
  });
}

function switchReviewerTab(tab) {
  const reviewerTabs = document.querySelector('.reviewer-subtabs');
  if (reviewerTabs) {
    reviewerTabs.querySelectorAll('.tab-btn').forEach(btn => {
      const isActive = btn.id === `subtab-${tab}`;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive);
    });
  }
  ['mcq', 'ident', 'enum'].forEach(t => {
    const panel = document.getElementById(`subpanel-${t}`);
    if (panel) panel.classList.toggle('active', t === tab);
  });
}

function switchLessonTab(index) {
  currentLessonTab = index;
  const lessonTabs = document.querySelector('.lesson-tabs');
  if (lessonTabs) {
    lessonTabs.querySelectorAll('.tab-btn').forEach((btn, i) => {
      const isActive = i === index;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive);
    });
  }
  // Toggle lesson panels
  const found = findExam(currentExamId);
  if (!found) return;
  const exam = found.exam;
  if (Array.isArray(exam.notesLessons)) {
    exam.notesLessons.forEach((_, i) => {
      const panel = document.getElementById(`lesson-panel-${i}`);
      if (panel) panel.classList.toggle('active', i === index);
    });
  }
}

// ── Admin: Mark as Done ─────────────────────────────────────
function handleMarkDone(event, examId) {
  event.stopPropagation();
  if (!isAdmin()) return;
  setExamStatusOverride(examId, 'done');
  // Re-render whatever is currently on screen
  if (currentView === 'landing') renderLanding();
  if (currentView === 'app') {
    renderSidebar();
    if (currentExamId === examId) renderExamContent();
  }
}

// ── Admin login modal ───────────────────────────────────────
function openAdminModal() {
  if (isAdmin()) { /* already logged in, show logout confirmation */ return; }
  $('admin-modal').classList.add('active');
  $('admin-username').value = '';
  $('admin-password').value = '';
  $('admin-error').classList.remove('visible');
  setTimeout(() => $('admin-username').focus(), 50);
}

function closeAdminModal() {
  $('admin-modal').classList.remove('active');
}

function submitAdminLogin() {
  const user = $('admin-username').value.trim();
  const pass = $('admin-password').value;
  if (user === ADMIN_USER && pass === ADMIN_PASS) {
    sessionStorage.setItem(STORAGE_KEY_ADMIN, '1');
    closeAdminModal();
    updateAdminUI();
    if (currentView === 'landing') renderLanding();
    if (currentView === 'app') { renderSidebar(); if (currentExamId) renderExamContent(); }
  } else {
    $('admin-error').classList.add('visible');
    $('admin-password').value = '';
    $('admin-password').focus();
  }
}

function adminLogout() {
  sessionStorage.removeItem(STORAGE_KEY_ADMIN);
  updateAdminUI();
  if (currentView === 'landing') renderLanding();
  if (currentView === 'app') { renderSidebar(); if (currentExamId) renderExamContent(); }
}

function updateAdminUI() {
  const badge  = $('admin-badge');
  const footerBtn = $('footer-admin-btn');
  if (footerBtn) footerBtn.style.display = 'none';
  if (isAdmin()) {
    badge.classList.add('visible');
  } else {
    badge.classList.remove('visible');
  }
}

// ── Mobile sidebar ──────────────────────────────────────────
function toggleMobileSidebar() {
  const sidebar  = $('sidebar');
  const overlay  = $('sidebar-overlay');
  const hamburger = $('hamburger-btn');
  const isOpen   = sidebar.classList.contains('mobile-open');

  sidebar.classList.toggle('mobile-open', !isOpen);
  overlay.classList.toggle('active', !isOpen);
  hamburger.innerHTML = isOpen ? svgBars() : svgX();
  hamburger.setAttribute('aria-expanded', String(!isOpen));
}

function closeMobileSidebar() {
  const sidebar  = $('sidebar');
  const overlay  = $('sidebar-overlay');
  const hamburger = $('hamburger-btn');
  sidebar.classList.remove('mobile-open');
  overlay.classList.remove('active');
  if (hamburger) { hamburger.innerHTML = svgBars(); hamburger.setAttribute('aria-expanded', 'false'); }
}

// ── Intersection Observer for reveal animations ─────────────
function initRevealObserver() {
  const items = document.querySelectorAll('.reveal:not(.visible)');
  if (!items.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }, i * 60);
      }
    });
  }, { threshold: 0.05 });

  items.forEach(el => observer.observe(el));
}

// ── Keyboard support ────────────────────────────────────────
function initKeyboardSupport() {
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeAdminModal();
      closeMobileSidebar();
    }
    // Enter/Space on role=button divs
    if ((e.key === 'Enter' || e.key === ' ') && e.target.getAttribute('role') === 'button') {
      e.preventDefault();
      e.target.click();
    }
  });
}

// ── Modal close on backdrop click ──────────────────────────
function initModalBackdropClose() {
  $('admin-modal').addEventListener('click', e => {
    if (e.target === $('admin-modal')) closeAdminModal();
  });
}

// ── Admin password: submit on Enter ────────────────────────
function initAdminFormEnter() {
  [$('admin-username'), $('admin-password')].forEach(input => {
    input?.addEventListener('keydown', e => {
      if (e.key === 'Enter') submitAdminLogin();
    });
  });
}

// ── Boot ────────────────────────────────────────────────────
function init() {
  initThemeAndMode();
  updateAdminUI();
  initKeyboardSupport();
  initModalBackdropClose();
  initAdminFormEnter();
  showLanding();
}

document.addEventListener('DOMContentLoaded', init);
