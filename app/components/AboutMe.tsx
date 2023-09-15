import TextSection from "./TextSection"
export default function AboutMe(){
    return (
        <div id="about" className="bg-black px-40 py-10 text-white">
            <TextSection title="About Me"/>
            <div className="flex flex-row space-x-24 mt-8">
                <div className="basis-1/2">
                    <h3 className="text-4xl font-bold">I'm Back End Developer, based in Indonesia
                    <span className='text-secondary text-6xl'>.</span>
                    </h3>
                    <p className="text-md text-justify mt-2 mb-5 text-paragraf">
                    As a new graduate with a computer science degree in informatics from Ahmad Dahlan University, I have the desire and passion to start my career as a back end developer. 
                    During my college days, I developed my back end developer skills by attending trainings, internships and also working on application projects and have a strong understanding of the back end field. 
                    I am a dedicated individual, ready to learn, and eager to contribute to the back end field with great passion.
                    </p>
                    <div className="text-center">
                        <a href="" className="border border-secondary rounded border-2 p-2 text-bold">Get My CV</a>
                    </div>
                </div>
                <div className="basis-1/2">
                    <h3 className="text-4xl font-bold">Any Type Of Query & Discussion 
                    <span className='text-secondary text-6xl'>.</span>
                    </h3>
                    <p className="text-md text-justify mt-2 mb-10 text-paragraf">Let's talk with me</p>
                    <a href="mailto:irfanfajru025@gmail.com" className="border-b-2 border-secondary text-xl">irfanfajru025@gmail.com</a>
                </div>
            </div>
        </div>
    )
}