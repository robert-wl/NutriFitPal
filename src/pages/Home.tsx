import Layout from "../components/Layout.tsx";
import ImageDescription from "../components/ImageDescription.tsx";

export default function Home() {
  return (
    <Layout>
      <ImageDescription
        className="p-16 px-32"
        src="/home/food-1.png"
        direction="left">
        <div className="flex flex-col justify-center items-start w-1/2 gap-2">
          <h1 className="text-secondary text-[4rem] text-start font-bold">Kalori yang cukup, Kesehatan yang optimal</h1>
          <h3 className="text-secondary font-semibold text-2xl text-start">Hidup lebih sehat dengan kalori tercukupi bersama NutriFitPal.</h3>
          <button className="bg-tertiary transition-colors hover:bg-secondary hover:text-white mt-5 rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-xl font-semibold text-secondary">
            Mulai Perjalanan Anda
          </button>
        </div>
      </ImageDescription>
      <ImageDescription
        className="p-16 px-32"
        src="/home/food-2.png"
        direction="right">
        <div className="flex flex-col justify-center items-start w-1/2 gap-2">
          <h1 className="text-secondary text-[4rem] text-start font-bold">Mendukung kesehatan anda di setiap waktu.</h1>
          <h3 className="text-secondary font-semibold text-2xl text-start">
            Dapatkan rincian tentang asupan kalori anda setiap harinya. Atur asupan kalori setiap harinya sesuai dengan preferensi anda.
          </h3>
        </div>
      </ImageDescription>
      <ImageDescription
        className="p-16 px-32"
        src="/home/calories-1.png"
        direction="left">
        <div className="flex flex-col justify-center items-start w-1/2 gap-2">
          <h1 className="text-secondary text-[4rem] text-start font-bold">Kumpulan kalori setiap menu makanan.</h1>
          <h3 className="text-secondary font-semibold text-2xl text-start">
            Gunakan fitur nutrition dictionary untuk mengetahui jumlah kalori makanan yang anda konsumsi.
          </h3>
        </div>
      </ImageDescription>
      <ImageDescription
        className="p-16 px-32"
        src="/home/calories-2.png"
        direction="right">
        <div className="flex flex-col justify-center items-start w-1/2 gap-2">
          <h1 className="text-secondary text-[4rem] text-start font-bold">Perhitungan kalori yang anda dapatkan.</h1>
          <h3 className="text-secondary font-semibold text-2xl text-start">
            Calories calculation akan membantu anda mengakumulasi kalori makanan yang ada konsumsi setiap harinya.
          </h3>
        </div>
      </ImageDescription>
    </Layout>
  );
}
