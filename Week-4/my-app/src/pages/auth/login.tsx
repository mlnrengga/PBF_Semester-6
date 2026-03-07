import Link from "next/link";
import { useRouter } from "next/router";

const halamanLogin = () => {
  const {push} = useRouter();
  
  const handlerLogin = () => {
    localStorage.setItem("token", "dummy-token-123");
    
    push('/produk');
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Halaman Login</h1>
      <button onClick={handlerLogin} style={{ padding: "10px 20px", cursor: "pointer" }}>
        Login (Imperative Navigation)
      </button>
      <br /><br />
      <Link href="/auth/register" style={{ color: "blue", textDecoration: "underline" }}>
        Ke Halaman Register
      </Link>
    </div>
  );
};

export default halamanLogin;