import { useRouter } from "next/router";

const DetailProdukViews = () => {
  const { query } = useRouter();

  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <section className="mx-auto max-w-xl rounded-lg bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">Detail Produk</h1>
        <p className="mt-2 text-slate-700">Produk: {query.id}</p>
      </section>
    </main>
  );
};

export default DetailProdukViews;
