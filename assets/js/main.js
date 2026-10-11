/**
 * hakanyatbaz.com — Main Client Script
 * Handles mobile nav toggle and publication topic/type filters.
 */

(function () {
  'use strict';

  // ── Mobile Navigation Toggle ──
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      const spans = toggle.querySelectorAll('span');
      if (spans.length === 3) {
        spans[0].style.transform = isOpen ? 'translateY(7px) rotate(45deg)' : '';
        spans[1].style.transform = isOpen ? 'scaleX(0)' : '';
        spans[2].style.transform = isOpen ? 'translateY(-7px) rotate(-45deg)' : '';
      }
    });

    // Close menu when clicking any nav link
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        if (navLinks.classList.contains('is-open')) {
          navLinks.classList.remove('is-open');
          toggle.setAttribute('aria-expanded', 'false');
          const spans = toggle.querySelectorAll('span');
          if (spans.length === 3) {
            spans[0].style.transform = '';
            spans[1].style.transform = '';
            spans[2].style.transform = '';
          }
        }
      });
    });
  }

  // ── Publication Filter Bar ──
  const filterBar = document.getElementById('pubFilterBar');
  const pubList = document.getElementById('pubList');

  if (filterBar && pubList) {
    const buttons = filterBar.querySelectorAll('.filter-btn');
    const pubs = pubList.querySelectorAll('.pub');
    const yearGroups = pubList.querySelectorAll('.year-group');

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        buttons.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        pubs.forEach(function (card) {
          const type = card.getAttribute('data-type');
          const topic = card.getAttribute('data-topic');

          let show = false;
          if (filter === 'all') {
            show = true;
          } else if (filter === 'journal' && type === 'journal') {
            show = true;
          } else if (filter === 'conference' && type === 'conference') {
            show = true;
          } else if (filter === 'autonomous' && topic === 'autonomous') {
            show = true;
          } else if (filter === 'sensing' && topic === 'sensing') {
            show = true;
          }

          card.classList.toggle('is-hidden', !show);
        });

        // Hide empty year groups
        yearGroups.forEach(function (group) {
          const visibleCards = group.querySelectorAll('.pub:not(.is-hidden)');
          group.classList.toggle('is-hidden', visibleCards.length === 0);
        });
      });
    });
  }
})();
