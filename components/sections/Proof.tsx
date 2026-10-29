import { proof } from '@/lib/proof';
import ProofMessages from './ProofMessages';
import ProofPhotos from './ProofPhotos';
import ProofQuotes from './ProofQuotes';
import s from './Proof.module.css';

export default function Proof() {
  const { title, messages, stats, testimonials, photos } = proof;
  if (!messages.length && !stats.length && !testimonials.length && !photos.length) return null;

  return (
    <section className={s.root}>
      <div className="container">
        <h2 data-r>{title}</h2>

        {photos.length > 0 && <ProofPhotos photos={photos}/>}

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
      </div>
    </section>
  );
}
