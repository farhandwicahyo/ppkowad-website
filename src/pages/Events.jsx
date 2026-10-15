import { useState } from 'react';
import PageHero from '../components/PageHero.jsx';
import { EVENTS } from '../data/events.js';
import { SIKLUS } from '../data/organisasi.js';


const MONTHS = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
const WEEKDAYS = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];

const pad2 = (n) => String(n).padStart(2, '0');
const toDate = (s) => new Date(s + 'T00:00:00');
const sameDay = (a, b) => a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();

function eventsOn(y, m, d) {
  const target = new Date(y, m, d);
  return EVENTS.filter((ev) => target >= toDate(ev.start) && target <= toDate(ev.end));
}

function formatRange(ev) {
  const s = toDate(ev.start);
  const e = toDate(ev.end);
  if (sameDay(s, e)) return pad2(s.getDate()) + ' ' + MONTHS[s.getMonth()] + ' ' + s.getFullYear();
  if (s.getMonth() === e.getMonth() && s.getFullYear() === e.getFullYear()) {
    return pad2(s.getDate()) + '-' + pad2(e.getDate()) + ' ' + MONTHS[s.getMonth()] + ' ' + s.getFullYear();
  }
  return pad2(s.getDate()) + ' ' + MONTHS[s.getMonth()] + ' ' + s.getFullYear() + ' - ' + pad2(e.getDate()) + ' ' + MONTHS[e.getMonth()] + ' ' + e.getFullYear();
}

// bulan awal & acara terpilih: acara yang sedang berjalan, lalu yang akan datang terdekat, lalu acara terakhir
const realToday = new Date();
realToday.setHours(0, 0, 0, 0);
const ongoing = EVENTS.find((ev) => toDate(ev.start) <= realToday && realToday <= toDate(ev.end));
const upcoming = EVENTS.filter((ev) => toDate(ev.start) > realToday).sort((a, b) => toDate(a.start) - toDate(b.start))[0];
const defaultEvent = ongoing || upcoming || EVENTS[EVENTS.length - 1];
const startDate = toDate(defaultEvent.start);

function buildCells(year, month) {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrev = new Date(year, month, 0).getDate();
  const leading = (new Date(year, month, 1).getDay() + 6) % 7; // Senin = 0
  const total = Math.ceil((leading + daysInMonth) / 7) * 7;
  const cells = [];
  for (let i = 0; i < total; i++) {
    let day, y = year, m = month, outside = false;
    if (i < leading) { day = daysInPrev - leading + i + 1; m = month - 1; outside = true; }
    else if (i >= leading + daysInMonth) { day = i - leading - daysInMonth + 1; m = month + 1; outside = true; }
    else day = i - leading + 1;
    if (m < 0) { m = 11; y -= 1; }
    if (m > 11) { m = 0; y += 1; }
    cells.push({ key: i, day, outside, events: eventsOn(y, m, day) });
  }
  return cells;
}

export default function Events() {
  const [year, setYear] = useState(startDate.getFullYear());
  const [month, setMonth] = useState(startDate.getMonth());
  const [selected, setSelected] = useState(defaultEvent);

  const shift = (delta) => {
    const d = new Date(year, month + delta, 1);
    setYear(d.getFullYear());
    setMonth(d.getMonth());
  };

  const s = toDate(selected.start);
  const e = toDate(selected.end);
  const dayLabel = sameDay(s, e) ? pad2(s.getDate()) : pad2(s.getDate()) + '-' + pad2(e.getDate());

  return (
    <>
      <PageHero
        eyebrow="Agenda Acara"
        title="Rangkaian Kegiatan Kami"
        text="Kegiatan organisasi, kebersamaan wilayah, dan tonggak program kerja PP-KOWAD."
        image="hut-tumpeng.jpg"
      />

      <section className="section">
        <div className="section-header">
          <p className="eyebrow">Jadwal Terdekat</p>
          <h2>Agenda yang Akan Datang</h2>
        </div>
        <div className="cal-widget">
          <div className="cal-header">
            <div className="cal-nav">
              <button className="cal-nav-btn" type="button" aria-label="Bulan sebelumnya" onClick={() => shift(-1)}>&lsaquo;</button>
              <p className="cal-title">{MONTHS[month]} {year}</p>
              <button className="cal-nav-btn" type="button" aria-label="Bulan berikutnya" onClick={() => shift(1)}>&rsaquo;</button>
            </div>
            <button
              className="cal-today-btn"
              type="button"
              onClick={() => { setYear(startDate.getFullYear()); setMonth(startDate.getMonth()); }}
            >Hari Ini</button>
          </div>
          <div className="cal-weekdays">
            {WEEKDAYS.map((w) => <span key={w}>{w}</span>)}
          </div>
          <div className="cal-grid">
            {buildCells(year, month).map((c) => (
              <div key={c.key} className={'cal-cell' + (c.outside ? ' is-outside' : '') + (c.events.length && !c.outside ? ' has-event' : '')}>
                <div className="cal-date">{pad2(c.day)}</div>
                {c.events.map((ev) => (
                  <button key={ev.title} type="button" className="cal-event" onClick={() => setSelected(ev)}>{ev.title}</button>
                ))}
              </div>
            ))}
          </div>
        </div>

        <p className="cal-legend"><span className="cal-legend-dot"></span> Tanggal dengan agenda &mdash; klik untuk lihat detail</p>

        <div className="cal-detail">
          <div className="cal-detail-card">
            <div className="cal-detail-date"><strong>{dayLabel}</strong><span>{MONTHS[s.getMonth()].slice(0, 3)}</span></div>
            <div className="cal-detail-body">
              <span className="cal-detail-tag">{selected.tag}</span>
              <h4>{selected.title}</h4>
              <p>{formatRange(selected)}</p>
              <p>{selected.desc}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="dr-section">
        <div className="dr-wrap">
          <div className="dr-row">
            <h2>Siklus Musyawarah dan Rapat</h2>
            <div className="dr-cols">
              {SIKLUS.map((x) => (
                <div key={x.name}>
                  <h3><small>{x.every}</small>{x.name}</h3>
                  <p>{x.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
