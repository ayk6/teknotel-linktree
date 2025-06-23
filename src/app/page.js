import Image from "next/image";
import { FaGlobe, FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import './page.css';
import BackgroundVideo from "./components/BackgroundVideo";
import Link from "next/link";
import ViewportHeightSetter from "./components/ViewportHeight";

export default function Home() {

  return (
    <>
      <ViewportHeightSetter />
      <div className=" main-container relative min-h-screen overflow-hidden font-[family-name:var(--font-geist-sans)] max-w-screen-sm w-full mx-auto">
        <BackgroundVideo />
        <div className="grid grid-rows-[100px_1fr_20px] items-center justify-items-center min-h-screen p-5 pb-8 gap-12 sm:p-20 relative z-10">
          <main className="flex flex-col gap-[50px] row-start-2 items-center sm:items-center">
            <Image
              className="dark:invert logo-image"
              src="/logoTt.png"
              alt="Logo"
              width={250}
              height={45}
              priority
            />
            <div className="grid grid-cols-3 gap-x-12 gap-y-12 icon-grid text-6xl">
              <a
                href="https://teknotelpremium.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center hover:text-gray-300 transition-colors"
              >
                <FaGlobe />
              </a>
              <Link href="/locations" className="flex justify-center hover:text-gray-300">
                <FaMapMarkerAlt />
              </Link>
              <a
                href="https://api.whatsapp.com/send?phone=905325660586&text=Merhaba!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center hover:text-gray-300 transition-colors"
              >
                <FaWhatsapp />
              </a>
              <a
                href="tel:+905551112233"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center hover:text-gray-300 transition-colors"
              >
                <FaPhoneVolume size={50} />
              </a>
              <a
                href="https://www.instagram.com/teknotelpremium/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center hover:text-gray-300 transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/p/TeknoTel-Premium-100034850628926/?locale=tr_TR"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center hover:text-gray-300 transition-colors"
              >
                <FaFacebook size={55} />
              </a>
            </div>
          </main>
          <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center footer">
            © 2025 Teknotel. Tüm hakları saklıdır.
          </footer>
        </div>
      </div>
    </>
  );
}
