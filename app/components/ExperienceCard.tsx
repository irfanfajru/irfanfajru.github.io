export default function ExperienceCard({
    company,
    role,
    startDate,
    endDate,
    jobs}:{
    company:string,
    role:string,
    startDate:string,
    endDate:string,
    jobs:string[],
}){
    return (
        <div>
            <p className="font-bold text-lg">{company} <span className="text-secondary">/ {role}</span></p>
            <p className="text-xs text-gray">{startDate} - {endDate}</p>
            <p className="text-paragraf text-sm text-justify mt-2">
            {jobs.map((v)=>(v+" "))}
            </p>
        </div>
    )
}