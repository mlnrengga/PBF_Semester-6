import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const produk = () => {
  const [isLogin, setIsLogin] = useState(false);
  const { push } = useRouter();
  
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token"); 
      if (!token) {
        push("/auth/login");
      } else {
        setIsLogin(true);
      }
    };
    
    checkAuth();
  }, []);
  
  if (!isLogin) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>Produk User Page</div>
  );
};

export default produk;