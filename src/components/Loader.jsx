import { Html, useProgress } from '@react-three/drei'

export default function Loader() {
    const { progress } = useProgress()
    return <Html center style={
        {
            width: "100vw",
            height: "100vh",
        }
    }
        className="flex justify-center items-center p-4 bg-center bg-cover bg-no-repeat bg-[url('/hero-image.jpg')] bg-gray-700 bg-blend-multiply"
    >
        <div className='w-full md:w-1/2 flex flex-col gap-2 text-center'>

            <figure className="max-w-screen-md mx-auto text-center">
                <svg className="w-10 h-10 mx-auto mb-3 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
                <blockquote>
                    <p className="text-2xl italic font-medium text-white">
                        "Your journey continues. The sky awaits."</p>
                </blockquote>
            </figure>

            <div className="w-full bg-gray-200 rounded-full">
                <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                    style={{ width: `${Math.round(progress)}%` }}> {Math.round(progress)}%</div>
            </div>
        </div>

    </Html >
}