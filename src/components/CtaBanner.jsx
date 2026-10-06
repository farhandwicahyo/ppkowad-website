import { Link } from 'react-router-dom';

export default function CtaBanner({
  title = 'SIERA III 2026',
  text = 'The 3rd Symposium of Indonesian Health Resilience Association',
  withIcon = false,
}) {
  return (
    <section className="cta-banner">
      <div className="cta-banner-inner">
        <div>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
        <Link className="btn btn-white" to="/daftar">JOIN US &rarr;</Link>
        {withIcon && (
          <span className="cta-icon-circle"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M9 6l6 6-6 6" /></svg></span>
        )}
      </div>
    </section>
  );
}
