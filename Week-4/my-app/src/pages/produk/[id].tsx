import { useRouter } from "next/router";
import Navbar from '@/components/layouts/navbar';

const HalamanProduk = () => {
    // const Router = useRouter();
    // console.log(Router); // x4 { pathname: '/produk/[id]', route: '/produk/[id]', query: { id: 'sepatu' }, asPath: '/produk/sepatu', components: { '/produk/[...
    const { query } = useRouter();
  return (
    <div>
      <Navbar />
      <h1>Halaman Produk</h1>
      <p>Produk: {query.id}</p>
    </div>
  );
};

export default HalamanProduk;