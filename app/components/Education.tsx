import TextSection from "./TextSection"
export default function Education(){
    return (
        <div id="education" className="bg-black px-40 py-10 text-white">
            <TextSection title="Education"/>
            <div className="grid grid-cols-2 gap-8 mt-8">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                    <h3 className="text-lg font-bold text-white">Ahmad Dahlan University</h3>
                    <p className="text-xs text-gray">2019 - 2023</p>
                    <p className="text-paragraf text-sm text-justify mt-2">Bachelor of Informatics - GPA 3.85</p>
                    <p className="text-paragraf text-sm text-justify mt-2">During college, I studied informatics such as software engineering, artificial intelligence, informatics project management and many more. Besides studying, I also become a lab assistant to teach basic programming. I set a target to graduate on time with a cum laude predicate, and I succeeded in realizing that target. I graduated cum laude after exactly 4 years of study, with my undergraduate thesis entitled SMOKING DETECTION WHILE DRIVING USING YOLOv7 related to artificial intelligence.</p>
                </div>
                <div className="flex justify-center">
                    <iframe src="https://lottie.host/?file=5aaa650b-564f-4cd9-929d-a8edcaf17f23/lwIL1uwHhL.json"></iframe>
                </div>
            </div>
        </div>
    )
}