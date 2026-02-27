import { useRouter } from "next/router";
import Navbar from '@/components/layouts/navbar';

const HalamanProduk = () => {
    // const Router = useRouter();
    // console.log(Router); // x4 { pathname: '/produk/[id]', route: '/produk/[id]', query: { id: 'sepatu' }, asPath: '/produk/sepatu', components: { '/produk/[...
    const { query } = useRouter();
  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', padding: '20px', color: '#000' }}>
      <Navbar />
      <h1>Halaman Produk</h1>
      <p style={{ marginTop: '20px' }}>Produk: {query.id}</p>
    </div>
  );
};

export default HalamanProduk;