import TextSection from "./TextSection"
export default function AboutMe(){
    return (
        <div id="about" className="bg-black p-2 py-10 md:px-40 md:py-10 text-white">
            <TextSection title="About Me"/>
            <div className="grid md:grid-cols-2 md:gap-24 md:mt-8">
                <div>
                    <h3 className="text-md md:text-4xl font-bold">Back End Developer, based in Indonesia
                    <span className='text-secondary text-6xl'>.</span>
                    </h3>
                    <p className="text-sm md:text-md text-justify mt-2 mb-5 text-paragraf">
                    Fresh graduate of Bachelor of Computers who has interest in programming. Have an understanding of programming, database management, system security and web application development. Have experience using PHP, JavaScript, Python, Golang, and Java programming languages. Have internship and freelance project experience in building applications and websites. Adaptive learner, fast learner, has analytical, problem solving skills, can communicate and work well individually and in teams.
                    </p>
                </div>
                <div className="text-center">
                    <h3 className="text-lg md:text-4xl font-bold">Any Type Of Query & Discussion 
                    <span className='text-secondary text-6xl'>.</span>
                    </h3>
                    <p className="text-sm md:text-md mt-2 mb-4 md:mb-10 text-paragraf">Lets talk with me</p>
                    <a href="mailto:irfanfajru025@gmail.com" className="border-b-2 border-secondary text-lg md:text-xl">irfanfajru025@gmail.com</a>
                </div>
            </div>
        </div>
    )
}