/* ============================================================
   app.js: 3rd Year 1st Sem Reviewer G1
   Vanilla JS, no dependencies.
   ============================================================ */

'use strict';

// ── Constants ──────────────────────────────────────────────
const ADMIN_USER = 'zyril';
const ADMIN_PASS = 'zyril2006';
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
  renderSidebar();      // refresh active state
  renderExamContent();
}

// ── Landing render ──────────────────────────────────────────
function renderLanding() {
  const all = getAllExams();
  const upcoming = all.filter(e => e.status === 'upcoming').sort((a,b) => a.date.localeCompare(b.date));
  const done     = all.filter(e => e.status === 'done'    ).sort((a,b) => b.date.localeCompare(a.date));

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

    <div id="panel-notes"    class="tab-panel${currentTab === 'notes'    ? ' active' : ''}"><div class="prose">${exam.notes    || '<p>No notes yet.</p>'}</div></div>
    <div id="panel-reviewer" class="tab-panel${currentTab === 'reviewer' ? ' active' : ''}"></div>`;

  const reviewerPanel = $('panel-reviewer');
  if (Array.isArray(exam.reviewer)) {
    renderInteractiveReviewer(reviewerPanel, exam.reviewer);
  } else if (exam.reviewer && typeof exam.reviewer === 'object') {
    reviewerPanel.innerHTML = `
      <div class="tabs reviewer-subtabs" role="tablist" style="margin-bottom: 1rem;">
        <button class="tab-btn active" id="subtab-mcq" role="tab" onclick="switchReviewerTab('mcq')">Multiple Choice</button>
        <button class="tab-btn" id="subtab-ident" role="tab" onclick="switchReviewerTab('ident')">Identification</button>
      </div>
      <div id="subpanel-mcq" class="tab-panel active"></div>
      <div id="subpanel-ident" class="tab-panel"></div>
    `;
    renderInteractiveReviewer($('subpanel-mcq'), exam.reviewer.mcq);
    
    const identPanel = $('subpanel-ident');
    if (Array.isArray(exam.reviewer.ident)) {
      renderInteractiveIdent(identPanel, exam.reviewer.ident);
    } else {
      identPanel.innerHTML = `<div class="prose">${exam.reviewer.ident}</div>`;
    }
  } else {
    reviewerPanel.innerHTML = `<div class="prose">${exam.reviewer || '<p>No reviewer yet.</p>'}</div>`;
  }

  initRevealObserver();
}

// ── Interactive Reviewer Component ───────────────────────────
function renderInteractiveReviewer(container, questions) {
  container.innerHTML = '';
  
  questions.forEach((q, qIndex) => {
    const qContainer = document.createElement('div');
    qContainer.className = 'quiz-question-container';
    
    const qText = document.createElement('div');
    qText.className = 'quiz-question-text';
    qText.textContent = q.question;
    qContainer.appendChild(qText);
    
    const optionsList = document.createElement('div');
    optionsList.className = 'quiz-options-list';
    
    q.options.forEach((optText, optIndex) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option-btn';
      btn.textContent = optText;
      btn.onclick = () => handleQuizOptionClick(btn, optIndex, q.correctIndex, optionsList);
      optionsList.appendChild(btn);
    });
    
    qContainer.appendChild(optionsList);
    container.appendChild(qContainer);
  });
  
  const restartBtn = document.createElement('button');
  restartBtn.className = 'quiz-restart-btn';
  restartBtn.textContent = 'Restart Quiz';
  restartBtn.onclick = () => renderInteractiveReviewer(container, questions);
  container.appendChild(restartBtn);
}

function handleQuizOptionClick(clickedBtn, selectedIndex, correctIndex, optionsList) {
  // Lock all options for this question
  const allBtns = optionsList.querySelectorAll('.quiz-option-btn');
  allBtns.forEach(btn => btn.disabled = true);
  
  if (selectedIndex === correctIndex) {
    clickedBtn.classList.add('quiz-option-correct');
  } else {
    clickedBtn.classList.add('quiz-option-incorrect');
    // Highlight the correct option too
    if (allBtns[correctIndex]) {
      allBtns[correctIndex].classList.add('quiz-option-correct');
    }
  }
}

function renderInteractiveIdent(container, questions) {
  container.innerHTML = '<h3>Part II. Identification</h3><div class="ident-quiz-container"></div>';
  const quizContainer = container.querySelector('.ident-quiz-container');
  
  questions.forEach((q, qIndex) => {
    const qContainer = document.createElement('div');
    qContainer.className = 'quiz-question-container';
    
    const qText = document.createElement('div');
    qText.className = 'quiz-question-text';
    qText.textContent = `${qIndex + 1}. ${q.question}`;
    qContainer.appendChild(qText);
    
    const inputGroup = document.createElement('div');
    inputGroup.className = 'ident-input-group';
    
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'ident-input';
    input.placeholder = 'Type your answer...';
    
    const checkBtn = document.createElement('button');
    checkBtn.className = 'ident-check-btn';
    checkBtn.textContent = 'Check';
    
    const feedback = document.createElement('div');
    feedback.className = 'ident-feedback';
    
    checkBtn.onclick = () => {
      const val = input.value.trim().toLowerCase();
      if (!val) return;
      
      const isCorrect = q.accept.some(ans => ans.toLowerCase() === val) || val === q.answer.toLowerCase();
      
      input.disabled = true;
      checkBtn.disabled = true;
      
      if (isCorrect) {
        feedback.innerHTML = `<span style="color: var(--success); font-weight: 600;">✓ Correct!</span>`;
        input.classList.add('input-correct');
      } else {
        feedback.innerHTML = `<span style="color: var(--warning); font-weight: 600;">✗ Incorrect. The correct answer is: ${q.answer}</span>`;
        input.classList.add('input-incorrect');
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
  });
  
  const restartBtn = document.createElement('button');
  restartBtn.className = 'quiz-restart-btn';
  restartBtn.textContent = 'Restart Quiz';
  restartBtn.onclick = () => renderInteractiveIdent(container, questions);
  container.appendChild(restartBtn);
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
  ['mcq', 'ident'].forEach(t => {
    const panel = document.getElementById(`subpanel-${t}`);
    if (panel) panel.classList.toggle('active', t === tab);
  });
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
  if (isAdmin()) {
    badge.classList.add('visible');
    if (footerBtn) footerBtn.textContent = 'Admin Mode';
  } else {
    badge.classList.remove('visible');
    if (footerBtn) footerBtn.textContent = 'Admin Login';
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
