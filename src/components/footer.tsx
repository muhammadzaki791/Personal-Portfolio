import Image from "next/image";

export function Footer() {
  return (
    <footer className="py-6 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image
              src={"/logo.png"}
              width={80}
              height={80}
              alt="Personal"
              className="rounded-full p-4"
            />
            <span className="font-bold text-xl">Personal</span>
          </div>
          <div className="text-gray-400">
            © 2019-2023 Personal. Made In Figma
          </div>
        </div>
      </div>
    </footer>
  );
}
