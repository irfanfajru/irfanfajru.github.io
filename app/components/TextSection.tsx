export default function TextSection({title}:{title:string}){
    return (
        <div className="text-secondary font-bold space-x-2 flex">
            <h1>{title}</h1>
            <hr className="w-12 h-1 rounded border-0 bg-secondary mt-3"/>
        </div>
    )
}