/**
 * CapWorks Studio — Fichier de maintenance
 */

window.IS_MAINTENANCE = false;

// ─── Ne pas modifier en dessous ───────────────────────────────────────────────

(function () {
  // Ne pas rediriger si on est déjà sur index.html
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  if (currentPage === 'index.html' || currentPage === '') return;
 
  if (IS_MAINTENANCE) {
    window.location.replace('index.html');
  }
})();
