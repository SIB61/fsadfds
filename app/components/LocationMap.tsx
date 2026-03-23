import SectionWrapper from "./Utils/SectionWrapper";

const MAP_EMBEDED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.2320684403257!2d90.38883367568214!3d23.881388178581243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c534a719514f%3A0xfdf39b3660e9933b!2sSea%20Shell%20Hotel%20-%20Sales%20%26%20Booking%20Office!5e0!3m2!1sbn!2sbd!4v1774303164238!5m2!1sbn!2sbd";
const MAP_REDIRECT_URL =
  "https://www.google.com/maps/dir//Sea+Shell+Hotel+-+Sales+%26+Booking+Office,+House+%23+09+Road+No.+13,+%E0%A6%A2%E0%A6%BE%E0%A6%95%E0%A6%BE+1230/@23.8813882,90.3888337,17z/data=!4m19!1m10!3m9!1s0x3755c534a719514f:0xfdf39b3660e9933b!2sSea+Shell+Hotel+-+Sales+%26+Booking+Office!5m2!4m1!1i2!8m2!3d23.8813882!4d90.3914086!16s%2Fg%2F11zkcfkm7v!4m7!1m0!1m5!1m1!1s0x3755c534a719514f:0xfdf39b3660e9933b!2m2!1d90.3914086!2d23.8813882?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D";
const MAP_TITLE = "Sea Shell Hotel - Sales & Booking Office";
const MAP_ADDRESS =
  "House # 09 Road No. 13, Sector 10, Uttara";

const LocationMap = () => {
  return (
    <div className="py-10 bg-[#EFEFEF]">
      <SectionWrapper>
        <div className="flex flex-col-reverse md:flex-row">
          <div className="w-full px-4 md:w-1/2">
            <div className="p-2 bg-white rounded-lg shadow-lg">
              <iframe
                src={MAP_EMBEDED_URL}
                className="w-full h-[580px] md:h-[450px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={MAP_TITLE}
                scrolling="no"
                aria-label={MAP_TITLE}
              />
            </div>
          </div>

          <div className="md:w-1/2 w-full px-4 mb-6 md:mb-0">
            <div className="sticky top-8 text-center md:text-left">
              <h3 className="text-3xl font-head font-bold mb-3 text-gray-700">
                Wedding Location
              </h3>
              <h4 className="text-xl md:text-2xl mb-4 font-sans font-semibold text-gray-700">
                {MAP_TITLE}
              </h4>
              <p className="mb-16 md:mb-10 font-sans">{MAP_ADDRESS}</p>
              <div className="flex md:justify-start justify-center">
                <a
                  href={MAP_REDIRECT_URL}
                  target="_blank"
                  className="px-5 py-2 transition-all text-lg font-semibold rounded-md bg-contrast hover:bg-contrast-2 outline-contrast-3 text-white outline-4 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                  rel="noreferrer"
                >
                  Open Map
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default LocationMap;
