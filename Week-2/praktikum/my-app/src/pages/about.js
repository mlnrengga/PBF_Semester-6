import Link from "next/link";

export default function About() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <nav style={{ marginBottom: "1rem" }}>
        <Link href="/" style={{ color: "blue", textDecoration: "underline" }}>
          ← Kembali ke Halaman Utama
        </Link>
      </nav>
      <h1>About Me</h1>
      <ul style={{ marginTop: "1rem", lineHeight: "2" }}>
        <li><strong>Nama Mahasiswa:</strong> Maulana Rengga Ramadan</li>
        <li><strong>NIM:</strong> 2341720160</li>
        <li><strong>Program Studi:</strong> Teknik Informatika</li>
      </ul>
    </div>
  );
}
