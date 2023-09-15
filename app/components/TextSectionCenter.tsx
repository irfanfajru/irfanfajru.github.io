export default function TextSectionCenter({title}:{title:string}){
    return (
        <div className="text-secondary font-bold flex text-xl justify-center space-x-2">
            <hr className="w-8 h-1 rounded border-0 bg-secondary mt-5"/>
            <h1>{title}</h1>
            <hr className="w-8 h-1 rounded border-0 bg-secondary mt-5"/>
        </div>
    )
}