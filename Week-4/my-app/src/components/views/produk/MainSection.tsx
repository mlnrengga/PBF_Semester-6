import Link from "next/link";

const products = ["sepatu", "tas", "jam-tangan"];

const MainSection = () => {
  return (
    <section className="mt-6 rounded-lg border border-slate-200 bg-white p-6">
      <h2 className="text-xl font-semibold text-slate-800">Daftar Produk</h2>
      <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700">
        {products.map((item) => (
          <li key={item}>
            <Link className="text-blue-600 underline" href={`/views/produk/${item}`}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MainSection;
