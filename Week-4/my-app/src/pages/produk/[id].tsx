import { useEffect } from "react";
import { useRouter } from "next/router";

const ProdukDetailRedirectPage = () => {
  const { query, replace } = useRouter();

  useEffect(() => {
    if (query.id) {
      replace(`/views/produk/${query.id}`);
    }
  }, [query.id, replace]);

  return <div>Mengalihkan ke detail produk baru...</div>;
};

export default ProdukDetailRedirectPage;