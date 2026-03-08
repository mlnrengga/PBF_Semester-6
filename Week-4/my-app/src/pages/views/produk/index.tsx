import HeroSection from "@/components/views/produk/HeroSection";
import MainSection from "@/components/views/produk/MainSection";

const HalamanProdukViews = () => {
  return (
    <main className="min-h-screen bg-slate-100 p-8">
      {/* Tugas 2: Hero Section dipisahkan ke komponen sendiri */}
      <HeroSection />

      {/* Tugas 2: Main Section dipisahkan ke komponen sendiri */}
      <MainSection />
    </main>
  );
};

export default HalamanProdukViews;
