// import Image from "next/image";

export default async function Home() {
    const response = await fetch("http://localhost:3001/api/message");
    const data = await response.json();
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h2>Shaban</h2>
      <h1 className="text-4xl font-bold">{data.message}</h1>
    </div>
  );
}
