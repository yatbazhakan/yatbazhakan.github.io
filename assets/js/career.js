/* career.js: the horizontal "Education and experience" figure.
   Data: the <li class="career__item"> elements in each .career__lane inside [data-career].
   Each item gets --x (start) and --y (end), as % of the axis; CSS draws the segment, the dot,
   the leader and the label from those. */

const box = document.querySelector('[data-career]');
if (box) try { init(box); } catch (e) { console.error('career:', e); }

function init(box) {
  const canvas = box.querySelector('.career__canvas');
  const d = new Date();
  const now = d.getFullYear() + d.getMonth() / 12;
  const from = +box.dataset.from, to = Math.max(+box.dataset.to, d.getFullYear() + 1);
  const pct = (t) => ((Math.min(Math.max(t, from), to) - from) / (to - from)) * 100;

  canvas.querySelectorAll('.career__item').forEach((li) => {
    const s = +li.dataset.start;
    const current = li.dataset.end === 'now';
    const e = current ? to : li.dataset.end ? +li.dataset.end : s;
    const x = pct(s), y = pct(e);
    li.style.setProperty('--x', x.toFixed(2));
    li.style.setProperty('--y', y.toFixed(2));
    if (current) li.style.setProperty('--now', Math.min(Math.max(((now - s) / (to - s)) * 100, 0), 100).toFixed(1));
    if (!li.dataset.end) li.classList.add('career__item--point');
    const mid = (x + y) / 2, align = li.dataset.align;
    if (align === 'before') li.classList.add('career__item--before');
    else if (align === 'start' || (!align && mid < 9)) li.classList.add('career__item--start');
    else if (align === 'end' || (!align && mid > 88)) li.classList.add('career__item--end');
    const label = document.createElement('span');
    label.className = 'career__label';
    label.append(...li.childNodes);
    li.append(label);
  });

  const axis = document.createElement('ol');
  axis.className = 'career__axis';
  axis.setAttribute('aria-hidden', 'true');
  for (let yr = from; yr < to; yr++) {
    const li = document.createElement('li');
    li.textContent = yr;
    li.style.setProperty('--x', pct(yr).toFixed(2));
    li.style.setProperty('--y', pct(yr + 1).toFixed(2));
    axis.append(li);
  }
  canvas.prepend(axis);

  const hint = document.createElement('p');
  hint.className = 'career__hint';
  hint.setAttribute('aria-hidden', 'true');
  hint.textContent = 'Swipe for earlier years';
  box.after(hint);
  box.dataset.ready = '';

  let pinned = true;
  const sync = () => {
    const scrolls = box.scrollWidth - box.clientWidth > 1;
    box.toggleAttribute('data-overflow', scrolls);
    if (scrolls) {
      box.tabIndex = 0;
      box.setAttribute('role', 'region');
      box.setAttribute('aria-label', 'Timeline (scrolls sideways)');
      if (pinned) box.scrollLeft = box.scrollWidth;
    } else {
      box.removeAttribute('tabindex');
      box.removeAttribute('role');
      box.removeAttribute('aria-label');
    }
    box.toggleAttribute('data-scrolled', box.scrollLeft > 1);
  };
  box.addEventListener('scroll', () => {
    pinned = box.scrollLeft >= box.scrollWidth - box.clientWidth - 2;
    box.toggleAttribute('data-scrolled', box.scrollLeft > 1);
  }, { passive: true });
  sync();
  if ('ResizeObserver' in window) new ResizeObserver(sync).observe(box);
}
