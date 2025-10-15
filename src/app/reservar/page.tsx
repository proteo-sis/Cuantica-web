"use client";

import { useState, useMemo, useRef } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import eventsData from "../../data/events.json";

type EventItem = {
  id: string;
  title: string;
  date: string;
  time?: string;
  instructor?: string;
  spots?: number;
  image?: string;
  alt?: string;
  description?: string;
  location?: string;
  duration?: string;
  price?: number;
  currency?: string;
  included?: string[];
  highlights?: string[];
};

function ReservationForm({ event, onClose }: { event: EventItem; onClose: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [spots, setSpots] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      eventId: event.id,
      eventTitle: event.title,
      name,
      email,
      phone,
      spots,
    };
    // For now just log; you can replace this with a POST to your reservations API
    console.log("Reservation payload:", payload);
    alert("Reserva enviada. Revisar consola para ver el payload (demo).");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full max-w-lg bg-white rounded-xl shadow-xl p-6 z-10">
        <h3 className="text-2xl font-semibold mb-2">Reservar: {event.title}</h3>
        <p className="text-sm text-gray-600 mb-4">{event.date} · {event.time}</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Nombre</label>
            <input required value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full rounded-md border p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full rounded-md border p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Teléfono</label>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} className="mt-1 w-full rounded-md border p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Cupos</label>
            <input type="number" min={1} max={10} value={spots} onChange={(e) => setSpots(Number(e.target.value))} className="mt-1 w-24 rounded-md border p-2" />
          </div>
          <div className="flex justify-end gap-3">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-md border">Cancelar</button>
            <button type="submit" className="px-4 py-2 rounded-md bg-[var(--color-pink-vibrant)] text-white">Reservar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function ReservarPage() {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [hoveredEvent, setHoveredEvent] = useState<EventItem | null>(null);
  const [detailEvent, setDetailEvent] = useState<EventItem | null>(null);
  const hoverTimeout = useRef<number | null>(null);

  // Filter upcoming events by date (simple ISO compare)
  const now = new Date().toISOString().slice(0, 10);
  const upcoming = (eventsData as EventItem[])
    .filter((ev) => ev.date >= now)
    .sort((a, b) => a.date.localeCompare(b.date));

  // Map of dates that have events for quick lookup
  const datesWithEvents = useMemo(() => {
    const map = new Map<string, EventItem[]>();
    (eventsData as EventItem[]).forEach((ev) => {
      if (!map.has(ev.date)) map.set(ev.date, [] as EventItem[]);
      map.get(ev.date)!.push(ev);
    });
    return map;
  }, []);

  const filtered = selectedDate
    ? upcoming.filter((ev) => ev.date === selectedDate)
    : upcoming;

  function Calendar() {
    const [current, setCurrent] = useState(() => {
      const d = new Date();
      d.setDate(1);
      return d;
    });

    const year = current.getFullYear();
    const month = current.getMonth();

    const monthName = current.toLocaleString("default", { month: "long" });

    const firstDayIndex = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const prevMonth = () => {
      const d = new Date(current);
      d.setMonth(d.getMonth() - 1);
      setCurrent(d);
    };
    const nextMonth = () => {
      const d = new Date(current);
      d.setMonth(d.getMonth() + 1);
      setCurrent(d);
    };

    const weeks: (number | null)[] = [];
    for (let i = 0; i < firstDayIndex; i++) weeks.push(null);
    for (let d = 1; d <= daysInMonth; d++) weeks.push(d);

    const ymd = (d: number) => {
      const mm = String(month + 1).padStart(2, "0");
      const dd = String(d).padStart(2, "0");
      return `${year}-${mm}-${dd}`;
    };

    return (
      <div className="bg-white rounded-xl shadow p-4">
        <div className="flex items-center justify-between mb-3">
          <button onClick={prevMonth} className="px-3 py-1 rounded-md border">‹</button>
          <div className="font-semibold">{monthName} {year}</div>
          <button onClick={nextMonth} className="px-3 py-1 rounded-md border">›</button>
        </div>

        <div className="grid grid-cols-7 gap-1 text-center text-sm">
          {['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'].map((d) => (
            <div key={d} className="text-xs text-gray-500">{d}</div>
          ))}

          {weeks.map((day, idx) => {
            if (day === null) return <div key={idx} />;
            const dateStr = ymd(day);
            const has = datesWithEvents.has(dateStr);
            const isSelected = selectedDate === dateStr;
            return (
              <button
                key={idx}
                onClick={() => setSelectedDate(has ? dateStr : null)}
                className={`relative w-full h-10 rounded-md flex items-center justify-center transition-all ${has ? 'bg-[var(--color-pink-pastel)]/10 hover:bg-[var(--color-pink-pastel)]/20' : ''} ${isSelected ? 'ring-2 ring-[var(--color-pink-vibrant)]' : ''}`}
                aria-pressed={isSelected}
              >
                <span className="text-sm">{day}</span>
                {has && (
                  <span className="absolute -bottom-2 w-2 h-2 rounded-full bg-[var(--color-pink-vibrant)]" />
                )}
              </button>
            );
          })}
        </div>
        {selectedDate && (
          <div className="mt-3 text-sm text-gray-600">Mostrando clases para: <strong>{selectedDate}</strong> — <button onClick={() => setSelectedDate(null)} className="underline">Limpiar</button></div>
        )}
      </div>
    );
  }

  function EventDetails({ event, onClose }: { event: EventItem; onClose: () => void }) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
        <div className="absolute inset-0 bg-black/50" onClick={onClose} />
        <div className="relative w-full max-w-3xl bg-white rounded-xl shadow-xl p-6 z-10 overflow-auto max-h-[80vh]">
          <div className="flex items-start gap-4">
            {event.image && (
              <img src={event.image} alt={event.alt ?? event.title} className="w-40 h-28 object-cover rounded-md" />
            )}
            <div className="flex-1">
              <h2 className="text-2xl font-bold">{event.title}</h2>
              <p className="text-sm text-gray-600">{event.date} · {event.time}</p>
              <p className="mt-2 text-gray-700">{event.description}</p>
              <div className="mt-3 text-sm text-gray-700">
                <p><strong>Instructor:</strong> {event.instructor}</p>
                {event.location && <p><strong>Ubicación:</strong> {event.location}</p>}
                {event.duration && <p><strong>Duración:</strong> {event.duration}</p>}
                {event.price && <p><strong>Precio:</strong> {event.price} {event.currency ?? ''}</p>}
                {event.spots !== undefined && <p><strong>Cupos:</strong> {event.spots}</p>}
              </div>
              {event.included && Array.isArray(event.included) && (
                <div className="mt-3">
                  <h4 className="font-semibold">Incluye</h4>
                  <ul className="list-disc list-inside text-sm text-gray-700">
                    {event.included.map((inc: string, i: number) => <li key={i}>{inc}</li>)}
                  </ul>
                </div>
              )}
              {event.highlights && Array.isArray(event.highlights) && (
                <div className="mt-3">
                  <h4 className="font-semibold">Highlights</h4>
                  <ul className="list-disc list-inside text-sm text-gray-700">
                    {event.highlights.map((h: string, i: number) => <li key={i}>{h}</li>)}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="mt-4 flex justify-end gap-3">
            <button onClick={onClose} className="px-4 py-2 rounded-md border">Cerrar</button>
            <button onClick={() => { setSelectedEvent(event); onClose(); }} className="px-4 py-2 rounded-md bg-[var(--color-pink-vibrant)] text-white">Reservar</button>
          </div>
        </div>
      </div>
    );
  }

  // Hover details panel (small, non-modal)
  const HoverPanel = () => {
    if (!hoveredEvent) return null;
    return (
      <div className="fixed right-6 top-24 z-40 w-80 bg-white rounded-lg shadow-lg p-3">
        <h4 className="font-semibold">{hoveredEvent.title}</h4>
        <p className="text-sm text-gray-500">{hoveredEvent.date} · {hoveredEvent.time}</p>
        {hoveredEvent.description && <p className="mt-2 text-sm text-gray-700">{hoveredEvent.description}</p>}
        <div className="mt-2 flex justify-end">
          <button onClick={() => { setDetailEvent(hoveredEvent); }} className="text-sm underline">Ver más</button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-white-pure)]">
      <Header />
      <main className="flex-1 container mx-auto p-36">
        <h1 className="text-3xl font-bold mb-4">Reservar clase</h1>
        <p className="mb-6 text-gray-700">Selecciona una clase próxima para ver detalles y reservar.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <Calendar />
          </div>
          <div className="md:col-span-2">
            {filtered.length === 0 ? (
              <div className="p-6 bg-white rounded-lg shadow">No hay clases próximas por ahora.</div>
            ) : (
              filtered.map((ev) => (
                <article key={ev.id} className="flex flex-col bg-white rounded-xl shadow p-4 mb-4">
                      <div className="flex-1">
                        <h3
                          className="text-xl font-semibold cursor-pointer"
                          onMouseEnter={() => {
                            if (hoverTimeout.current) window.clearTimeout(hoverTimeout.current);
                            setHoveredEvent(ev);
                          }}
                          onMouseLeave={() => {
                            // small delay to avoid flicker
                            hoverTimeout.current = window.setTimeout(() => setHoveredEvent(null), 200);
                          }}
                          onClick={() => setDetailEvent(ev)}
                        >
                          {ev.title}
                        </h3>
                        <p className="text-sm text-gray-500">{ev.date} · {ev.time}</p>
                        <p className="mt-2 text-gray-700">Instructor: {ev.instructor}</p>
                      </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-sm text-gray-600">Cupos: {ev.spots ?? "N/A"}</div>
                    <button onClick={() => setSelectedEvent(ev)} className="px-4 py-2 rounded-full bg-[var(--color-pink-vibrant)] text-white">Reservar</button>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </main>

      <Footer />

      {selectedEvent && <ReservationForm event={selectedEvent} onClose={() => setSelectedEvent(null)} />}
      {detailEvent && <EventDetails event={detailEvent} onClose={() => setDetailEvent(null)} />}
      <HoverPanel />
    </div>
  );
}
