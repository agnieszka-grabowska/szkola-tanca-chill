import Image from "next/image";
import logo from "/public/logo.webp";

export default function Logo() {
  return <Image alt="Logo Chill" src={logo} />;
}
