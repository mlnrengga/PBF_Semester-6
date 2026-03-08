import Link from "next/link";
import styles from "./register.module.css";

const halamanRegister = () => {
  return (
    <div className={styles.registerContainer}>
      {/* Tugas 1: Halaman Register menggunakan CSS Module */}
      <h1 className={styles.registerTitle}>Halaman Register</h1>
      <p className={styles.registerText}>Silakan lanjut ke halaman login jika sudah punya akun.</p>
      <Link href="/views/auth/login" className={styles.registerLink}>
        Ke Halaman Login
      </Link>
    </div>
  );
};

export default halamanRegister;