import Image from 'next/image';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { content } from '@/lib/content';

const extensions = ['webp', 'png', 'svg'];

/* Logotipo em vetor, usado só enquanto o arquivo oficial não existe em public/images */
function Wordmark() {
  return (
    <svg viewBox="0 0 73 37" width="84" height="43" role="img" aria-label={content.logo} fill="currentColor" style={{ color: '#fff', display: 'block' }}>
      <rect x="25" y="0" width="19.5" height="3.7"/>
      <rect x="25" y="6" width="19" height="3.7"/>
      <text x="3.5" y="22" textLength="58" lengthAdjust="spacingAndGlyphs" fontSize="15.6" fontWeight="900" fontStyle="italic" style={{ fontFamily: 'var(--font-heading), sans-serif' }}>{content.logo}</text>
      <rect x="21" y="24.3" width="19.5" height="3.7"/>
      <rect x="20" y="30.2" width="19.5" height="3.7"/>
    </svg>
  );
}

export default function Brand() {
  const ext = extensions.find((e) => existsSync(path.join(process.cwd(), 'public/images', `sebrae-logo.${e}`)));
  return ext
    ? <Image src={`/images/sebrae-logo.${ext}`} alt={content.logo} width={1737} height={905} style={{ width: 88, height: 'auto' }}/>
    : <Wordmark/>;
}
