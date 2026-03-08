import { useRouter } from "next/router";
import Navbar from "../navbar";

const disableNavbar = ['/views/auth/login', '/views/auth/register'];

type AppShellProps = {
  children: React.ReactNode;
}

const AppShell = (props:AppShellProps) => {

  const { children } = props;
  const {pathname} = useRouter();
  return (
    <main>
      {!disableNavbar.includes(pathname) && <Navbar />}
      {children}
    </main>
  );
};

export default AppShell;