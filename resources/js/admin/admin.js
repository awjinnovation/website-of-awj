import Alpine from 'alpinejs';

/**
 * Shared image picker used by every admin form. Call openMediaPicker(cb, folder)
 * from any button; the user uploads a file or chooses an existing one, and the
 * chosen image's URL is passed to cb. Keeps every form's existing path field —
 * the picker just fills it in — so nothing else about the forms changes.
 */
window.openMediaPicker = (callback, folder = '') => {
  window.dispatchEvent(new CustomEvent('open-media-picker', { detail: { callback, folder } }));
};

const csrf = () =>
  document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') ?? '';

Alpine.data('mediaPicker', () => ({
  open: false,
  tab: 'upload',
  folder: '',
  busy: false,
  error: '',
  items: [],
  loaded: false,
  cb: null,

  init() {
    window.addEventListener('open-media-picker', (e) => {
      this.cb = e.detail.callback;
      this.folder = e.detail.folder || '';
      this.error = '';
      this.tab = 'upload';
      this.open = true;
      if (!this.loaded) this.loadLibrary();
    });
  },

  close() {
    this.open = false;
    this.cb = null;
  },

  async loadLibrary() {
    try {
      const res = await fetch('/admin/media/list', { headers: { Accept: 'application/json' } });
      this.items = await res.json();
      this.loaded = true;
    } catch {
      this.error = 'Could not load the library.';
    }
  },

  async upload(fileList) {
    const file = fileList?.[0];
    if (!file) return;
    this.busy = true;
    this.error = '';
    try {
      const body = new FormData();
      body.append('file', file);
      if (this.folder) body.append('folder', this.folder);
      const res = await fetch('/admin/media', {
        method: 'POST',
        headers: { 'X-CSRF-TOKEN': csrf(), Accept: 'application/json' },
        body,
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        this.error = j.message || 'Upload failed. Use a JPG, PNG, WEBP, GIF or SVG under 10 MB.';
        return;
      }
      const media = await res.json();
      this.items.unshift(media);
      this.choose(media.url);
    } catch {
      this.error = 'Upload failed. Please try again.';
    } finally {
      this.busy = false;
    }
  },

  choose(url) {
    if (this.cb) this.cb(url);
    this.close();
  },
}));

window.Alpine = Alpine;
Alpine.start();
