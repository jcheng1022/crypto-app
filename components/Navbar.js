import Link from "next/link";
import React from "react";
import styles from "../styles/Navbar.module.css";
import { useSession, signIn, signOut } from "next-auth/react";

function Navbar() {
  const { data: session } = useSession();
  return (
    <div className={styles.navbar}>
      <div className={styles.brandName}>
        <Link href="/"> Crypto App</Link>
      </div>
      <div className={styles.navlinks}>
        <div className={styles.navItems}>
          <Link href="/coins"> Coins</Link>
        </div>
        <div className={styles.navItems}>
          <Link href="/news"> News</Link>
        </div>
        {session ? (
          <div className={styles.navItems}>
            <p onClick={() => signOut()}>{session.user.email}</p>
          </div>
        ) : (
          <p onClick={() => signIn()}>Sign in</p>
        )}
      </div>
    </div>
  );
}

export default Navbar;
