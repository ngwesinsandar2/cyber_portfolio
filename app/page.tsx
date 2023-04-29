import Image from 'next/image'
import './page.css'
import CyberCircle from './components/CyberCircle'
import Socials from './components/Socials'

export default function Home() {
  return (
    <main className='h-screen'>
      <div className="marquee-container fixed">
        <div className="relative flex justify-center items-center bg-[var(--primary-color)] transform -rotate-180 writing_mode_rl w-10 h-full text-center text-md font-bold uppercase">
          <div className="flex gap-6 marquee">
            <p>ngwe_sin_sandar</p>
            <p>ngwe_sin_sandar</p>
            <p>ngwe_sin_sandar</p>
          </div>
          <div className="flex gap-6 marquee marquee2">
            <p>ngwe_sin_sandar</p>
            <p>ngwe_sin_sandar</p>
            <p>ngwe_sin_sandar</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 items-center pl-16 py-4 h-full">
        <div>
          <div className="text-lg">
            <p>What's up everyone</p>
            <p>Welcome from my cyber theme portfolio!!</p>
            <p>Thanks for visiting</p>
          </div>
        </div>

        <div className="overflow-hidden justify-self-end">
          <CyberCircle />
        </div>
      </div>

      <div className="fixed bottom-0 right-0">
        <Socials />
      </div>
    </main>
  )
}
