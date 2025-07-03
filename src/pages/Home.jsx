import { Link } from "react-router-dom";
export default function Home() {
    return <>
        <section className="bg-center bg-cover bg-no-repeat bg-[url('/hero-image.jpg')] bg-gray-700 bg-blend-multiply">
            <div className="px-4 mx-auto h-screen w-full text-center py-24 lg:py-56">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                    Embark on a Journey with IrfanFajru
                </h1>
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                    Software Engineer
                </p>
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                    Turning ideas into impactful digital solutions with every line of code.
                </p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                    <Link
                        to="/journey"
                        className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
                    >
                        Start Journey
                    </Link>
                </div>
            </div>
        </section>
    </>
}