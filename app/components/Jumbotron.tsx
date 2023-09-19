import Image from 'next/image'
import TextSection from './TextSection'

export default function Jumbotron(){
    return (
        <div id='home' className="flex p-2 bg-primary md:pt-10 md:px-40 text-white justify-center">
            <div className='md:pt-12'>
                <div className="md:hidden p-2 flex items-center space-x-4">
                    <Image width={40} height={40} className="w-20 h-20 p-1 ring-1 ring-white rounded-full" src="/photo1.jpeg" alt=""/>
                    <div className="font-medium dark:text-white">
                        <div className='text-md'>Muhammad Irfan Fajru Ramadhan</div>
                        <div className="text-md text-secondary">Software Engineer | Fullstack Developer | Back End Developer</div>
                    </div>
                </div>

                <div className='hidden mt-8 md:block'>
                <p className='text-xl md:text-2xl'>Hello, it&apos;s me</p>
                <h2 className='text-xl font-bold md:text-5xl'>Muhammad Irfan Fajru Ramadhan 
                <span className='text-secondary text-6xl'>.</span></h2>
                <h3 className='text-secondary text-lg'>Software Engineer | Fullstack Developer | Back End Developer</h3>
                </div>
                <p className='text-sm text-justify mt-2 mb-5 text-paragraf'>
                Always eager to learn and keep myself up to date with the latest developments in the world of technology, so as to continue providing the best software solutions.
                </p>
                <a href="#about" className='hidden md:inline border-b-2 border-secondary'>More about me 
                </a>
            </div>
            <div>
                <Image
                src="/photo.png"
                alt='my-photo'
                className='hidden md:block'
                width={1150}
                height={1150}
                />
            </div>
        </div>
    )
}