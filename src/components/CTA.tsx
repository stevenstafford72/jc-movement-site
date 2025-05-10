import { ctaDetails } from "@/data/cta";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { RiShirtFill } from "react-icons/ri";

const socialIcons = {
  Facebook: <FaFacebook size={24} className="hover:text-blue-400" />,
  Instagram: <FaInstagram size={24} className="hover:text-pink-400" />,
  Twitter: <FaTwitter size={24} className="hover:text-blue-300" />,
  YouTube: <FaYoutube size={24} className="hover:text-red-500" />,
  "Merch Store": <RiShirtFill size={24} className="hover:text-yellow-400" />,
};

const CTA: React.FC = () => {
  return (
    <section id="cta" className="mt-10 mb-5 lg:my-20">
      <div className="relative h-full w-full z-10 mx-auto py-12 sm:py-20">
        <div className="h-full w-full">
          <div className="rounded-3xl opacity-95 absolute inset-0 -z-10 h-full w-full bg-[#050a02] bg-[linear-gradient(to_right,#12170f_1px,transparent_1px),linear-gradient(to_bottom,#12170f_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <div className="rounded-3xl absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_600px_at_50%_500px,#1C1C02,transparent)]"></div>
          </div>

          <div className="h-full flex flex-col items-center justify-center text-white text-center px-5">
            <h2 className="text-2xl sm:text-3xl md:text-5xl md:leading-tight font-semibold mb-4 max-w-2xl">
              {ctaDetails.heading}
            </h2>
            <p className="text-lg font-medium text-gray-300">{ctaDetails.subheading}</p>

            <p className="mt-4 max-w-xl text-gray-400">{ctaDetails.description}</p>

            {ctaDetails.buttonText && ctaDetails.buttonLink && (
              <div className="mt-6">
                <a
                  href={ctaDetails.buttonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition"
                >
                  {ctaDetails.buttonText}
                </a>
              </div>
            )}

            {ctaDetails.socialLinks && (
              <div className="mt-6 flex gap-5 justify-center">
                {ctaDetails.socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="transition transform hover:scale-110"
                  >
                    {socialIcons[link.name]}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
