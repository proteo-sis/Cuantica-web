/** Compare event date (YYYY-MM-DD) to start of today in America/Mexico_City. */
export function isEventPast(date: string): boolean {
  const today = new Date(
    new Date().toLocaleString("en-US", { timeZone: "America/Mexico_City" })
  );
  today.setHours(0, 0, 0, 0);
  const eventDate = new Date(`${date}T00:00:00`);
  return eventDate < today;
}

export function getUpcomingEvents<T extends { date: string; isPastEvent?: boolean }>(
  events: T[]
): T[] {
  return events
    .filter((event) => !isEventPast(event.date) && !event.isPastEvent)
    .sort((a, b) => a.date.localeCompare(b.date));
}
