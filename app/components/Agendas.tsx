import { useEffect, useState } from "react";

const Agendas = () => {
  const [calendarUrl, setCalendarUrl] = useState("");

  useEffect(() => {
    const currentUrl = window.location.href;
    const details = `With humility and joy, we announce the wedding of Md. Sabit Islam Bhuiya and Dr. Sagufta Tasnim Choia.

Invitation Link:
${currentUrl}

It would be our pleasure to have you with us on our wedding reception.

Thank you for your attention.

With Love,
Sabit & Choia`;

    const params = new URLSearchParams({
      action: "TEMPLATE",
      text: "Wedding of Sabit & Choia 💌",
      location: "Sea Shell Hotel & Party Palace, House # 09 Road No. 13, Sector 10, Uttara",
      details: details,
      dates: "20260414T130000Z/20260414T160000Z",
    });

    setCalendarUrl(`https://www.google.com/calendar/render?${params.toString()}`);
  }, []);
  return (
    <div className="max-w-3xl mx-auto text-center">
      <div className="mb-4 text-gray-500 font-head md:text-lg font-medium">
        Our wedding will be held on:
      </div>
      <h3 className="text-3xl md:text-4xl font-black mb-6 text-cente text-gray-700 font-sans">
        TUESDAY, APRIL 14, 2026
      </h3>
      <h5 className="text-3xl md:text-4xl font-black mb-6 text-cente text-gray-700 font-sans">
        1:00 PM
      </h5>
      <div className="px-12 flex max-w-md mx-auto mb-10">
        <a
          href={calendarUrl}
          target={"_blank"}
          className="px-8 py-4 transition-all text-lg font-semibold w-full rounded-lg bg-contrast hover:bg-contrast-2 outline-contrast-3 text-white outline-4 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
          rel="noreferrer"
        >
          Save to Calendar
        </a>
      </div>

      <div className="space-y-6 mt-8 mb-16 px-4 md:px-0">
        <div className="group bg-white border border-gray-100 hover:border-pink-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(236,72,153,0.12)] rounded-3xl p-6 md:p-8 transition-all duration-500 flex flex-col md:flex-row md:items-center justify-between relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-pink-300 to-pink-500 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out"></div>

          <div className="pl-2 md:pl-4 text-left">
            <h4 className="text-3xl md:text-4xl font-black text-gray-800 font-sans tracking-tight mb-1 group-hover:text-pink-500 transition-colors duration-300">
              Mehendi Night
            </h4>
            <div className="text-gray-400 font-sans text-base md:text-lg font-medium">An evening of henna and joy</div>
          </div>

          <div className="mt-6 md:mt-0 pl-2 md:pl-4 text-left md:text-right">
            <div className="text-2xl md:text-3xl font-black text-gray-700 font-sans">
              11th April
            </div>
            <div className="inline-block mt-2 px-3 py-1 bg-pink-50 text-pink-600 rounded-full text-sm font-bold font-sans tracking-wide">
              Evening Event
            </div>
          </div>
        </div>

        <div className="group bg-white border border-gray-100 hover:border-orange-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(249,115,22,0.12)] rounded-3xl p-6 md:p-8 transition-all duration-500 flex flex-col md:flex-row md:items-center justify-between relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-orange-300 to-orange-500 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out"></div>

          <div className="pl-2 md:pl-4 text-left">
            <h4 className="text-3xl md:text-4xl font-black text-gray-800 font-sans tracking-tight mb-1 group-hover:text-orange-500 transition-colors duration-300">
              Colour Fest
            </h4>
            <div className="text-gray-400 font-sans text-base md:text-lg font-medium">Vibrant morning celebrations</div>
          </div>

          <div className="mt-6 md:mt-0 pl-2 md:pl-4 text-left md:text-right">
            <div className="text-2xl md:text-3xl font-black text-gray-700 font-sans">
              12th April
            </div>
            <div className="inline-block mt-2 px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-sm font-bold font-sans tracking-wide">
              7:00 AM
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agendas;
