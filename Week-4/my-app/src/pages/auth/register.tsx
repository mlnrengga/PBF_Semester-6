import Link from "next/link";

const halamanRegister = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Halaman Register</h1>
      <br />
      <Link href="/auth/login" style={{ color: "blue", textDecoration: "underline" }}>
        Ke Halaman Login
      </Link>
    </div>
  );
};

export default halamanRegister;