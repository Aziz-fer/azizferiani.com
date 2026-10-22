/* Page interactions. Runs on every page load, including client-side navigations;
   everything registered here is torn down through the AbortController before the next page. */

const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = () => matchMedia('(pointer: fine)').matches;
const isRtl = () => document.documentElement.dir === 'rtl';

let controller: AbortController | null = null;

document.addEventListener('astro:page-load', () => {
  controller?.abort();
  controller = new AbortController();
  const { signal } = controller;

  initScrollState(signal);
  initMenu(signal);
  initTheme(signal);
  initReveal(signal);
  initCounters(signal);
  initRotator(signal);
  initTilt(signal);
  initSpotlight(signal);
  initFilters(signal);
  initCopy(signal);
  initLightbox(signal);
});

/* ---------- Scroll-linked state: navbar, progress bar, back-to-top, parallax, timeline ---------- */
function initScrollState(signal: AbortSignal) {
  const root = document.documentElement;
  const progress = document.querySelector<HTMLElement>('[data-progress]');
  const toTop = document.querySelector<HTMLElement>('[data-to-top]');
  const layers = [...document.querySelectorAll<HTMLElement>('[data-parallax]')];
  const timelines = [...document.querySelectorAll<HTMLElement>('[data-timeline]')];
  let ticking = false;

  const update = () => {
    ticking = false;
    const y = window.scrollY;
    const vh = window.innerHeight;
    const max = document.documentElement.scrollHeight - vh;
    root.toggleAttribute('data-scrolled', y > 24);
    if (progress) progress.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
    toTop?.classList.toggle('is-shown', y > vh * 1.2);

    if (!reduced()) {
      for (const layer of layers) {
        if (y > vh * 1.5) continue;
        const speed = Number(layer.dataset.parallax) || 0.2;
        layer.style.transform = `translate3d(0, ${y * speed}px, 0)`;
      }
    }

    for (const tl of timelines) {
      const rect = tl.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (vh * 0.65 - rect.top) / rect.height));
      tl.style.setProperty('--progress', String(p));
      for (const item of tl.querySelectorAll<HTMLElement>('[data-timeline-item]')) {
        const r = item.getBoundingClientRect();
        item.classList.toggle('is-active', r.top < vh * 0.65);
      }
    }
  };

  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true, signal });
  window.addEventListener('resize', onScroll, { passive: true, signal });
  toTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reduced() ? 'auto' : 'smooth' }), {
    signal,
  });
  update();
}

/* ---------- Mobile menu & language dropdown ---------- */
function initMenu(signal: AbortSignal) {
  const button = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const menu = document.getElementById('mobile-menu');
  const lang = document.querySelector<HTMLDetailsElement>('[data-lang]');

  const setOpen = (open: boolean) => {
    if (!button || !menu) return;
    button.setAttribute('aria-expanded', String(open));
    menu.hidden = !open;
  };

  button?.addEventListener('click', () => setOpen(button.getAttribute('aria-expanded') !== 'true'), { signal });
  menu?.addEventListener('click', (e) => (e.target as HTMLElement).closest('a') && setOpen(false), { signal });

  document.addEventListener(
    'click',
    (e) => {
      if (lang?.open && !lang.contains(e.target as Node)) lang.open = false;
    },
    { signal },
  );
  document.addEventListener(
    'keydown',
    (e) => {
      if (e.key !== 'Escape') return;
      setOpen(false);
      if (lang) lang.open = false;
    },
    { signal },
  );
}

/* ---------- Theme toggle with a circular reveal ---------- */
function initTheme(signal: AbortSignal) {
  const root = document.documentElement;
  const button = document.querySelector<HTMLButtonElement>('[data-theme-toggle]');
  if (!button) return;

  const label = () => {
    const dawn = root.dataset.theme === 'dawn';
    button.setAttribute('aria-label', (dawn ? button.dataset.labelNight : button.dataset.labelDawn) ?? '');
  };
  label();

  button.addEventListener(
    'click',
    (e) => {
      const next = root.dataset.theme === 'dawn' ? 'night' : 'dawn';
      const apply = () => {
        root.dataset.theme = next;
        try {
          localStorage.setItem('theme', next);
        } catch {}
        label();
      };

      if (!document.startViewTransition || reduced()) {
        apply();
        return;
      }

      const x = e.clientX || window.innerWidth - 40;
      const y = e.clientY || 40;
      const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
      root.classList.add('theme-switching');
      const transition = document.startViewTransition(apply);
      transition.ready
        .then(() =>
          root.animate(
            { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
            { duration: 750, easing: 'cubic-bezier(0.16, 1, 0.3, 1)', pseudoElement: '::view-transition-new(root)' },
          ),
        )
        .catch(() => {});
      transition.finished.finally(() => root.classList.remove('theme-switching'));
    },
    { signal },
  );
}

/* ---------- Reveal on scroll ---------- */
function initReveal(signal: AbortSignal) {
  for (const group of document.querySelectorAll<HTMLElement>('[data-stagger]')) {
    const step = Number(group.dataset.stagger) || 90;
    group.querySelectorAll<HTMLElement>(':scope > [data-reveal]').forEach((el, i) => {
      el.style.setProperty('--d', `${i * step}ms`);
    });
  }

  const items = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (reduced() || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
  );
  items.forEach((el) => io.observe(el));
  signal.addEventListener('abort', () => io.disconnect());
}

/* ---------- Count-up numbers ---------- */
function initCounters(signal: AbortSignal) {
  const els = document.querySelectorAll<HTMLElement>('[data-count]');
  const run = (el: HTMLElement) => {
    const target = Number(el.dataset.count);
    if (reduced()) {
      el.textContent = String(target);
      return;
    }
    const start = performance.now();
    const duration = 1600;
    const step = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      el.textContent = String(Math.round(target * (1 - Math.pow(2, -10 * p))));
      if (p < 1 && !signal.aborted) requestAnimationFrame(step);
      else el.textContent = String(target);
    };
    requestAnimationFrame(step);
  };

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        run(entry.target as HTMLElement);
        io.unobserve(entry.target);
      }
    },
    { threshold: 0.6 },
  );
  els.forEach((el) => {
    el.textContent = '0';
    io.observe(el);
  });
  signal.addEventListener('abort', () => io.disconnect());
}

/* ---------- Rotating words in the hero ---------- */
function initRotator(signal: AbortSignal) {
  for (const rotator of document.querySelectorAll<HTMLElement>('[data-rotator]')) {
    const words = [...rotator.querySelectorAll<HTMLElement>('[data-word]')];
    if (words.length < 2 || reduced()) continue;
    let i = 0;
    const timer = window.setInterval(() => {
      words[i].classList.remove('is-active');
      words[i].classList.add('is-leaving');
      const leaving = words[i];
      window.setTimeout(() => leaving.classList.remove('is-leaving'), 700);
      i = (i + 1) % words.length;
      words[i].classList.add('is-active');
    }, 2600);
    signal.addEventListener('abort', () => clearInterval(timer));
  }
}

/* ---------- 3D tilt (book covers, photo) ---------- */
function initTilt(signal: AbortSignal) {
  if (!finePointer() || reduced()) return;
  for (const el of document.querySelectorAll<HTMLElement>('[data-tilt]')) {
    const max = Number(el.dataset.tilt) || 12;
    el.addEventListener(
      'pointermove',
      (e) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        el.style.setProperty('--ry', `${(px - 0.5) * max * 2}deg`);
        el.style.setProperty('--rx', `${(0.5 - py) * max * 2}deg`);
        el.style.setProperty('--gx', `${px * 100}%`);
        el.style.setProperty('--gy', `${py * 100}%`);
        el.classList.add('is-tilting');
      },
      { signal },
    );
    el.addEventListener(
      'pointerleave',
      () => {
        el.style.removeProperty('--rx');
        el.style.removeProperty('--ry');
        el.classList.remove('is-tilting');
      },
      { signal },
    );
  }
}

/* ---------- Cursor spotlight on cards ---------- */
function initSpotlight(signal: AbortSignal) {
  if (!finePointer()) return;
  document.addEventListener(
    'pointermove',
    (e) => {
      const card = (e.target as HTMLElement).closest<HTMLElement>('[data-spotlight]');
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    },
    { passive: true, signal },
  );
}

/* ---------- Project filters ---------- */
function initFilters(signal: AbortSignal) {
  for (const group of document.querySelectorAll<HTMLElement>('[data-filters]')) {
    const target = document.getElementById(group.dataset.filters ?? '');
    if (!target) continue;
    const buttons = [...group.querySelectorAll<HTMLButtonElement>('[data-filter]')];
    const cards = [...target.querySelectorAll<HTMLElement>('[data-cat]')];

    group.addEventListener(
      'click',
      (e) => {
        const button = (e.target as HTMLElement).closest<HTMLButtonElement>('[data-filter]');
        if (!button) return;
        const value = button.dataset.filter;
        const apply = () => {
          buttons.forEach((b) => b.setAttribute('aria-pressed', String(b === button)));
          cards.forEach((c) => {
            c.hidden = value !== 'all' && c.dataset.cat !== value;
            c.classList.add('is-visible');
          });
        };
        if (document.startViewTransition && !reduced()) document.startViewTransition(apply);
        else apply();
      },
      { signal },
    );
  }
}

/* ---------- Copy to clipboard ---------- */
function initCopy(signal: AbortSignal) {
  for (const button of document.querySelectorAll<HTMLButtonElement>('[data-copy]')) {
    const label = button.querySelector<HTMLElement>('[data-copy-label]');
    const original = label?.textContent ?? '';
    button.addEventListener(
      'click',
      async () => {
        try {
          await navigator.clipboard.writeText(button.dataset.copy ?? '');
        } catch {
          return;
        }
        button.classList.add('is-copied');
        if (label) label.textContent = button.dataset.copied ?? original;
        window.setTimeout(() => {
          button.classList.remove('is-copied');
          if (label) label.textContent = original;
        }, 2000);
      },
      { signal },
    );
  }
}

/* ---------- Gallery lightbox ---------- */
function initLightbox(signal: AbortSignal) {
  const dialog = document.querySelector<HTMLDialogElement>('[data-lightbox]');
  const items = [...document.querySelectorAll<HTMLButtonElement>('[data-lightbox-item]')];
  if (!dialog || items.length === 0) return;

  const img = dialog.querySelector<HTMLImageElement>('[data-lightbox-img]')!;
  const caption = dialog.querySelector<HTMLElement>('[data-lightbox-caption]')!;
  const meta = dialog.querySelector<HTMLElement>('[data-lightbox-meta]')!;
  let index = 0;

  const show = (i: number) => {
    index = (i + items.length) % items.length;
    const item = items[index];
    img.src = item.dataset.full ?? '';
    img.alt = item.dataset.caption ?? '';
    caption.textContent = item.dataset.caption ?? '';
    meta.textContent = `${item.dataset.chapterLabel ?? ''} · ${index + 1} / ${items.length}`;
  };

  items.forEach((item, i) =>
    item.addEventListener(
      'click',
      () => {
        show(i);
        dialog.showModal();
      },
      { signal },
    ),
  );

  dialog.querySelector('[data-lightbox-prev]')?.addEventListener('click', () => show(index - 1), { signal });
  dialog.querySelector('[data-lightbox-next]')?.addEventListener('click', () => show(index + 1), { signal });
  dialog.querySelector('[data-lightbox-close]')?.addEventListener('click', () => dialog.close(), { signal });
  dialog.addEventListener(
    'click',
    (e) => {
      if (e.target === dialog) dialog.close();
    },
    { signal },
  );
  dialog.addEventListener(
    'keydown',
    (e) => {
      const forward = isRtl() ? 'ArrowLeft' : 'ArrowRight';
      const back = isRtl() ? 'ArrowRight' : 'ArrowLeft';
      if (e.key === forward) show(index + 1);
      if (e.key === back) show(index - 1);
    },
    { signal },
  );
  signal.addEventListener('abort', () => dialog.open && dialog.close());
}
