import { NextResponse } from "next/server";

export async function GET() {
  const calendarId = "";
  const apiKey = process.env.GOOGLE_API_KEY 

  try {
    const response = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}`
    );

    if (!response.ok) {
      return NextResponse.json({ error: "Failed to fetch events" }, { status: 500 });
    }

    const data = await response.json();
    const events = data.items.map((event: any) => ({
      id: event.id,
      title: event.summary || "No Title",
      start: event.start.dateTime || event.start.date,
      end: event.end.dateTime || event.end.date,
    }));

    return NextResponse.json(events);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
