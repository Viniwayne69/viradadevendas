import Image from 'next/image';
import { Quote } from 'lucide-react';
import { proof } from '@/lib/proof';
import ProofMessages from './ProofMessages';
import s from './Proof.module.css';

export default function Proof() {
  const { title, messagesLead, messages, stats, testimonials, photos } = proof;
  if (!messages.length && !stats.length && !testimonials.length && !photos.length) return null;

  return (
    <section className={s.root}>
      <div className="container">
        <h2 data-r>{title}</h2>
        {messages.length > 0 && <p className={s.lead} data-r>{messagesLead}</p>}

        {stats.length > 0 && (
          <ul className={s.stats}>
            {stats.map((stat) => (
              <li key={stat.label} data-r>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </li>
            ))}
          </ul>
        )}

        {messages.length > 0 && <ProofMessages messages={messages}/>}

        {testimonials.length > 0 && (
          <div className={s.cards}>
            {testimonials.map((t) => (
              <figure key={t.name + t.quote} className={s.card} data-r>
                <Quote className={s.quote} aria-hidden="true"/>
                <blockquote>{t.quote}</blockquote>
                <figcaption>
                  {t.photo && <Image src={t.photo} alt="" width={96} height={96} className={s.avatar}/>}
                  <span><b>{t.name}</b>{t.role && <small>{t.role}</small>}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        )}

        {photos.length > 0 && (
          <div className={s.photos}>
            {photos.map((p) => (
              <Image key={p.src} src={p.src} alt={p.alt} width={800} height={600} className={s.photo} data-r/>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
