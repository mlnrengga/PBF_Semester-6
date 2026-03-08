import { useEffect } from "react";
import { useRouter } from "next/router";

const ProdukRedirectPage = () => {
  const { replace } = useRouter();

  useEffect(() => {
    replace("/views/produk");
  }, [replace]);

  return <div>Mengalihkan ke halaman produk baru...</div>;
};

export default ProdukRedirectPage;