import Image from 'next/image';
import { proof } from '@/lib/proof';
import ProofMessages from './ProofMessages';
import ProofQuotes from './ProofQuotes';
import s from './Proof.module.css';

export default function Proof() {
  const { title, messagesLead, messages, stats, testimonials, photos } = proof;
  if (!messages.length && !stats.length && !testimonials.length && !photos.length) return null;

  return (
    <section className={s.root}>
      <div className="container">
        <h2>{title}</h2>
        {(messages.length > 0 || testimonials.length > 0) && <p className={s.lead}>{messagesLead}</p>}

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

        {testimonials.length > 0 && <ProofQuotes items={testimonials}/>}

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
