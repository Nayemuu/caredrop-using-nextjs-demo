import Image from "next/image";
import img from "../../../../public/tree-736885_1920.jpg";

export default function Home() {
  return (
    <div className="container h-[100vh] w-[100vw] relative">
      <Image src={img} placeholder="blur" fill />
    </div>
  );
}
