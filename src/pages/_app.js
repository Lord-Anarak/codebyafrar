import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";

const manrope = Manrope({ subsets: ["latin"] });
const kenyanCoffee = localFont({
  src: [
    {
      path: "./fonts/KenyanCoffee-Regular.ttf",
      weight: "400",
      style: "regular",
    },
    {
      path: "./fonts/KenyanCoffee-SemiBold.ttf",
      weight: "700",
      style: "regular",
    },
  ],
  variable: "--font-kenyanCoffee",
});

const App = ({ Component, pageProps }) => {
  return (
    <main className={`${manrope.className} ${kenyanCoffee.variable}`}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
};

export default App;
