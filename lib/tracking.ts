/* Origem da campanha: guarda os parâmetros da URL da página (UTMs, gclid e qualquer outro)
   e os repassa para o link da Bilheteria Digital exatamente como chegaram (texto original, sem recodificar). */
const KEY = 'vv_params';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/* Parâmetros atuais da URL (sem o "?"); se a URL não tiver nenhum, usa os guardados nesta visita
   (recarregar ou rolar a página não perde a origem) */
export function capturedParams(): string {
  const current = window.location.search.replace(/^\?/, '');
  try {
    if (current) {
      sessionStorage.setItem(KEY, current);
      return current;
    }
    return sessionStorage.getItem(KEY) ?? '';
  } catch { /* sem armazenamento, segue só com a URL atual */ }
  return current;
}

function keyOf(pair: string): string {
  const raw = pair.split('=')[0];
  try { return decodeURIComponent(raw.replace(/\+/g, ' ')); } catch { return raw; }
}

/* Acrescenta os parâmetros ao destino, mantendo o caminho original e o que o destino já tinha */
export function withParams(destination: string, params: string): string {
  if (!params) return destination;
  const [base, hash = ''] = destination.split('#');
  const [path, query = ''] = base.split('?');
  const existing = new Set(query.split('&').filter(Boolean).map(keyOf));
  const extra = params.split('&').filter((pair) => pair && !existing.has(keyOf(pair)));
  if (!extra.length) return destination;
  return path + '?' + [query, ...extra].filter(Boolean).join('&') + (hash ? '#' + hash : '');
}

/* Clique em botão de inscrição, enviado ao Google Analytics (GA4) */
export function trackButtonClick(local: string, text: string, destination: string) {
  try {
    window.gtag?.('event', 'clique_botao', { botao_local: local, botao_texto: text, destino: destination, transport_type: 'beacon' });
  } catch { /* medir não pode atrapalhar o clique */ }
}
