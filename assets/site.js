// Tema claro/escuro, idioma PT/EN e entrada dos blocos ao rolar.
// O português fica no HTML; o inglês vem de window.EN, carregado antes deste arquivo.
(() => {
  const raiz = document.documentElement;
  const salvar = (k, v) => { try { localStorage.setItem(k, v) } catch (e) {} };
  const ler = (k) => { try { return localStorage.getItem(k) } catch (e) { return null } };

  // ── tema ──
  const botaoTema = document.getElementById('tema');
  const rotularTema = () => {
    const claro = raiz.dataset.theme === 'light';
    const en = raiz.lang === 'en';
    botaoTema.setAttribute('aria-label', claro
      ? (en ? 'Switch to dark mode' : 'Mudar para o modo escuro')
      : (en ? 'Switch to light mode' : 'Mudar para o modo claro'));
    botaoTema.title = botaoTema.getAttribute('aria-label');
  };
  botaoTema.addEventListener('click', () => {
    raiz.dataset.theme = raiz.dataset.theme === 'light' ? 'dark' : 'light';
    salvar('tema', raiz.dataset.theme);
    rotularTema();
  });

  // ── idioma ──
  const EN = window.EN || {};
  const original = new Map();
  const attrsOriginais = new Map();
  const aplicar = (idioma) => {
    const en = idioma === 'en';
    for (const el of document.querySelectorAll('[data-i18n]')) {
      if (!original.has(el)) original.set(el, el.innerHTML);
      const t = EN[el.dataset.i18n];
      el.innerHTML = en && t != null ? t : original.get(el);
    }
    // atributos: data-i18n-attr="aria-label:chave; alt:chave"
    for (const el of document.querySelectorAll('[data-i18n-attr]')) {
      for (const par of el.dataset.i18nAttr.split(';')) {
        const [attr, chave] = par.split(':').map((s) => s.trim());
        if (!attrsOriginais.has(el)) attrsOriginais.set(el, {});
        const guardados = attrsOriginais.get(el);
        if (!(attr in guardados)) guardados[attr] = el.getAttribute(attr) ?? '';
        el.setAttribute(attr, en && EN[chave] != null ? EN[chave] : guardados[attr]);
      }
    }
    raiz.lang = en ? 'en' : 'pt-BR';
    for (const b of document.querySelectorAll('.idioma button')) b.setAttribute('aria-pressed', String(b.dataset.lang === idioma));
    rotularTema();
  };
  for (const b of document.querySelectorAll('.idioma button')) {
    b.addEventListener('click', () => { salvar('idioma', b.dataset.lang); aplicar(b.dataset.lang) });
  }
  const pedido = new URLSearchParams(location.search).get('lang');
  const inicial = pedido === 'en' || pedido === 'pt' ? pedido
    : ler('idioma') || ((navigator.language || 'pt').toLowerCase().startsWith('pt') ? 'pt' : 'en');
  aplicar(inicial);

  // ── entrada dos blocos ao rolar ──
  const alvos = document.querySelectorAll('.revelar');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((itens) => {
      for (const it of itens) if (it.isIntersecting) { it.target.classList.add('visivel'); io.unobserve(it.target) }
    }, { rootMargin: '0px 0px -8% 0px' });
    alvos.forEach((el) => io.observe(el));
  } else alvos.forEach((el) => el.classList.add('visivel'));
})();
