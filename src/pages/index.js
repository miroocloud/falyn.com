import Image from 'next/image';

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col items-center justify-between">
      <div className="xl:w-1/2 flex-1 flex flex-col items-center justify-center text-center px-4 lg:px-0">
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic  after:blur-2xl after:content-[''] before:bg-gradient-to-br before:from-transparent before:to-blue-700/10 after:from-sky-900 after:via-[#0141ff]/40 before:lg:h-[360px]">
          <Image className="relative" height={'300'} width={'300'} src="/img/haze-programmer-writing-code-on-laptop.png" alt="Illustration by xopolin from Ouch!" priority />
        </div>
        <p className="text-4xl font-bold text-gray-700 capitalize tracking-wide mt-8">Website under maintenance!</p>
        <p className="text-xl text-gray-700 uppercase mt-4">We&apos;ll be back soon</p>
      </div>
    </main>
  );
}
