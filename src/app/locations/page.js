import Link from 'next/link';
import BackgroundVideo from '../components/BackgroundVideo';
import { FiArrowLeft } from "react-icons/fi";
import './locations.css';

export default function LocationsPage() {
    const branches = [
        {
            name: "Merkez",
            address: "Alsancak Mah. Cumhuriyet Bulvarı No:280/B Konak/İZMİR",
            mapsUrl: "https://maps.app.goo.gl/dZeLYm2kHas6uLAS6",
            bgImage: "/alsancak.jpg"
        },
        {
            name: "Hilltown AVM 1. Şube",
            address: "Yalı Mah. 6522 Sk. Hilltown AVM No:3 Kat:-1 Karşıyaka/İZMİR",
            mapsUrl: "https://maps.app.goo.gl/mtfVhGMAtXgpHUWL8",
            bgImage: "/hilltown.jpg"
        },
        {
            name: "Hilltown AVM 2. Şube",
            address: "Yalı Mah. 6522 Sk. Hilltown AVM No:3 Kat:1 Karşıyaka/İZMİR",
            mapsUrl: "https://maps.app.goo.gl/mtfVhGMAtXgpHUWL8",
            bgImage: "/hilltown.jpg"
        },
        {
            name: "İstinye AVM",
            address: "Bahçelerarası Mah. Ş.B. Ali Resmi Tufan Cad. İstinye AVM Kat:-1 Balçova/İZMİR",
            mapsUrl: "https://maps.app.goo.gl/ENxCcF7RuSYrUbZD6",
            bgImage: "/istinye.jpg"
        },
        {
            name: "Alsancak",
            address: "Alsancak Mah. 1479 Sk. Kemal Bey Blok No:14B Konak/İZMİR",
            mapsUrl: "https://maps.app.goo.gl/DB4f1BcWS11LaaK69",
            bgImage: "/alsancak.jpg"
        },
        {
            name: "Güzelyalı",
            address: "Güzelyalı Mah. 40/1 Sk. No:1C Konak/İZMİR",
            mapsUrl: "https://maps.app.goo.gl/LEVuchqBcDYpT5n4A",
            bgImage: "/güzelyalı.jpg"
        },
    ];

    return (
        <div className="locations-wrapper dark relative min-h-screen overflow-hidden font-[family-name:var(--font-geist-sans)] max-w-screen-sm w-full mx-auto">
            <BackgroundVideo />
            <div className=" flex header-container relative z-10 items-center justify-center">
                <Link href="/" className="back-button hover:text-gray-300 transition p-1 rounded-md">
                    <FiArrowLeft size={28} />
                </Link>
                <h1>Şubelerimiz</h1>
            </div>
            <ul className="space-y-6">
                {branches.map((branch, i) => (
                    <a key={i}
                        className="branch-card block"
                        href={branch.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            "--bg-image": `url(${branch.bgImage})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            color: "white", // gerekirse
                        }}>
                        <h2>{branch.name}</h2>
                        <p>{branch.address}</p>
                    </a>
                ))}
            </ul>
        </div >
    );
}
