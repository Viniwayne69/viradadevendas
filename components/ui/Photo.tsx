import Image from 'next/image';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { content as c } from '@/lib/content';

const extensions = ['webp', 'jpg', 'jpeg', 'png'];

function findImage(name: string) {
  const ext = extensions.find((e) => existsSync(path.join(process.cwd(), 'public/images', `${name}.${e}`)));
  return ext ? `${name}.${ext}` : null;
}

export default function Photo({ kind }: { kind: 'profile' | 'cover' }) {
  const file = findImage(kind === 'profile' ? 'alle-perfil' : 'alle-capa');
  const label = kind === 'profile' ? c.profilePlaceholder : c.coverPlaceholder;
  return file
    ? <Image src={`/images/${file}`} alt={label} width={600} height={kind === 'profile' ? 750 : 420} priority={kind === 'cover'} style={kind === 'profile' ? { objectPosition: '50% 18%' } : undefined}/>
    : <div className="placeholder" role="img" aria-label={label}>{label}</div>;
}
