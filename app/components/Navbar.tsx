export default function NavBar(){
    return (
        <div className="hidden md:flex flex sticky top-0 z-10 space-x-4 justify-center p-4 bg-primary text-white">
            <a href="#home" className="hover:text-secondary transition-all hover:border-b-2 hover:border-secondary">Home</a>
            <a href="#about" className="hover:text-secondary transition-all hover:border-b-2 hover:border-secondary">About</a>
            <a href="#experiences" className="hover:text-secondary transition-all hover:border-b-2 hover:border-secondary">Experience</a>
            <a href="#education" className="hover:text-secondary transition-all hover:border-b-2 hover:border-secondary">Education</a>
            <a href="#skillsandcertifications" className="hover:text-secondary transition-all hover:border-b-2 hover:border-secondary">Skills & Certifications</a>
            <a href="#projects" className="hover:text-secondary transition-all hover:border-b-2 hover:border-secondary">Projects</a>
        </div>
    )
}