const CALENDAR_URL = `https://www.google.com/calendar/render?
action=TEMPLATE&
text=Wedding+of+Sabit+%26+Choia+%F0%9F%92%8C&
location=Wedding+Venue&
details=With+humility+and+joy%2C+we+announce+the+wedding+of+Md.+Sabit+Islam+Bhuiya+and+Dr.+Sagufta+Tasnim+Choia.%0A%0AInvitation+Link%3A%0Ahttps%3A%2F%2Fwww.sabitandchoia.com%2F%0A%0AIt+would+be+our+pleasure+to+have+you+with+us+on+our+wedding+reception.%0A%0AThank+you+for+your+attention.%0A%0AWith+Love%2C%0ASabit+%26+Choia&
dates=20260414T130000Z%2F20260414T160000Z`;

const Agendas = () => {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <div className="mb-4 text-gray-500 font-head md:text-lg font-medium">
        Our wedding will be held on:
      </div>
      <h3 className="text-3xl md:text-4xl font-black mb-6 text-cente text-gray-700 font-sans">
        TUESDAY, APRIL 14, 2026
      </h3>
      <div className="px-12 flex max-w-md mx-auto mb-10">
        <a
          href={CALENDAR_URL}
          target={"_blank"}
          className="px-8 py-4 transition-all text-lg font-semibold w-full rounded-lg bg-contrast hover:bg-contrast-2 outline-contrast-3 text-white outline-4 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
          rel="noreferrer"
        >
          Save to Calendar
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4 text-center text-2xl px-4 py-8 md:py-16 md:px-0 md:text-3xl font-black">
        <div className="col-span-1 text-gray-400 text-left md:text-center font-sans">
          Mehendi Night
        </div>
        <div className="col-span-1 text-gray-700 text-right md:text-center font-sans">
          11th April
        </div>
      </div>
    </div>
  );
};

export default Agendas;
