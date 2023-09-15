import Image from 'next/image'
import TextSection from './TextSection'

export default function Jumbotron(){
    return (
        <div id='home' className="flex bg-primary pt-10 px-40 text-white justify-center">
            <div className='pt-12'>
                <p className='text-2xl'>Hello, it's me</p>
                <h2 className='font-bold text-5xl'>Muhammad Irfan Fajru 
                <br />Ramadhan 
                <span className='text-secondary text-6xl'>.</span></h2>
                <TextSection title='Back End Developer'/>
                <p className='text-sm text-justify mt-2 mb-5 text-paragraf'>Build server-side logic and database architecture that powers web 
                and mobile applications, ensuring they function smoothly and securely.
                Experienced with programming languages like PHP, JavaScript, Python, Golang, and Java. Collaborate closely with front-end developers to create cohesive and efficient software solutions.</p>

                <div className='flex space-x-2 mb-5 text-sm text-secondary'>
                    <a href='mailto:irfanfajru025@gmail.com'>irfanfajru025@gmail.com</a>
                    <span className='text-paragraf'> | </span>
                    <a href='https://github.com/irfanfajru' target='blank' >github.com/irfanfajru</a>
                    <span className='text-paragraf'> | </span>
                    <a href='https://www.linkedin.com/in/irfanfajru/' target='blank' >linkedin.com/in/irfanfajru</a>
                </div>

                <a href="#about" className='border-b-2 border-secondary'>More about me 
                </a>
            </div>
            <div>
                <Image
                src="/photo.png"
                alt='my-photo'
                width={1300}
                height={1300}
                />
            </div>
        </div>
    )
}