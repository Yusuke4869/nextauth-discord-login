import { Roboto } from "next/font/google";
import type { FC, ReactNode } from "react";
import "~/styles/globals.scss";

import { NextAuthProvider } from "./providers";

type Props = {
  children: ReactNode;
};

const roboto = Roboto({
  weight: "400",
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const Layout: FC<Props> = ({ children }) => (
  <NextAuthProvider>
    <html lang="ja">
      <body className={roboto.className}>
        <main>{children}</main>
      </body>
    </html>
  </NextAuthProvider>
);

export default Layout;
