import type { Metadata, NextPage } from "next";
import Index from "~/components";

export const metadata: Metadata = {
  title: "Hello World!",
};

const Home: NextPage = () => <Index />;

export default Home;
