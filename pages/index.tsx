import Modal from "./components/Modal/Modal";
import RegisterModal from "./components/Modal/RegisterModal";
import ClientOnly from "./components/Navbar/ClientOnly";
import Navbar from "./components/Navbar/Navbar";
import ToasterProvider from "./providers/ToasterProvider";

export default function Home() {
  return (
    <div>
      <ClientOnly>
        <ToasterProvider />
        <RegisterModal />
        <Navbar />
      </ClientOnly>
      <h1 className=" text-rose-500 text-2xl">Hello Airbnb!</h1>
    </div>
  );
}
