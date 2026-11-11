import { ContactType as ContactTypeConst, Contact as ContactType, contacts } from "@/data/contact";
import Link from "next/link";

export default function
    Contact() {
    return (
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 flex flex-col gap-2 items-center w-full max-w-xs p-4 bg-white rounded-lg shadow-sm">
            <p className="text-sm font-normal text-gray-900">Let's get in touch</p>
            <div className="flex flex-wrap gap-2">
                {contacts.map((contact, i) => (
                    <ContactLink key={`contact-${i}`} data={contact} />
                ))}
            </div>
        </div>
    )
}

function ContactLink({ data }: { data: ContactType }) {

    if (data.type === ContactTypeConst.GMAIL)
        return (
            <Link href={data.href} target="_blank" rel="noopener noreferrer" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg px-2.5 py-1.5 text-xs font-medium inline-flex items-center">
                <svg className="w-6 h-5 me-2 -ms-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M34.9 448h81.5V250.2L0 163v250.2C0 432.5 15.7 448 34.9 448" fill="#4285f4" />
                    <path d="M395.6 448h81.5c19.3 0 34.9-15.7 34.9-34.9V163l-116.4 87.3" fill="#34a853" />
                    <path d="M395.6 99v151.3L512 163v-46.5c0-43.2-49.3-67.8-83.8-41.9" fill="#fbbc04" />
                    <path d="M116.4 250.2V99L256 203.7 395.6 99v151.3L256 355" fill="#ea4335" />
                    <path d="M0 116.4V163l116.4 87.3V99L83.8 74.5C49.2 48.6 0 73.2 0 116.4" fill="#c5221f" />
                </svg>
                {data.label}
            </Link>
        )

    if (data.type === ContactTypeConst.LINKEDIN)
        return (
            <Link href={data.href} target="_blank" rel="noopener noreferrer" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg px-2.5 py-1.5 text-xs font-medium inline-flex items-center">
                <svg className="w-6 h-5 me-2 -ms-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                        d="M56.9 512h398.2c31.4 0 56.9-25.5 56.9-56.9V56.9C512 25.5 486.5 0 455.1 0H56.9C25.5 0 0 25.5 0 56.9v398.2C0 486.5 25.5 512 56.9 512"
                        fill="#007ebb"
                        fillRule="evenodd"
                        clipRule="evenodd"
                    />
                    <path
                        d="M440.9 440.9h-76V311.5c0-35.5-13.5-55.3-41.6-55.3-30.5 0-46.5 20.6-46.5 55.3v129.4h-73.2V194.4h73.2v33.2s22-40.7 74.3-40.7 89.7 31.9 89.7 98v156zM116.3 162.1c-24.9 0-45.2-20.4-45.2-45.5s20.2-45.5 45.2-45.5 45.1 20.4 45.1 45.5-20.2 45.5-45.1 45.5M78.5 440.9h76.4V194.4H78.5z"
                        fill="#ffffff"
                        fillRule="evenodd"
                        clipRule="evenodd"
                    />
                </svg>
                {data.label}
            </Link>
        )

    if (data.type === ContactTypeConst.GITHUB)
        return (
            <Link href={data.href} target="_blank" rel="noopener noreferrer" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg px-2.5 py-1.5 text-xs font-medium inline-flex items-center">
                <svg className="w-7 h-6 me-2 -ms-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M280.5 426.5C214.5 418.5 168 371 168 309.5C168 284.5 177 257.5 192 239.5C185.5 223 186.5 188 194 173.5C214 171 241 181.5 257 196C276 190 296 187 320.5 187C345 187 365 190 383 195.5C398.5 181.5 426 171 446 173.5C453 187 454 222 447.5 239C463.5 258 472 283.5 472 309.5C472 371 425.5 417.5 358.5 426C375.5 437 387 461 387 488.5L387 540.5C387 555.5 399.5 564 414.5 558C505 523.5 576 433 576 321C576 179.5 461 64 319.5 64C178 64 64 179.5 64 321C64 432 134.5 524 229.5 558.5C243 563.5 256 554.5 256 541L256 501C249 504 240 506 232 506C199 506 179.5 488 165.5 454.5C160 441 154 433 142.5 431.5C136.5 431 134.5 428.5 134.5 425.5C134.5 419.5 144.5 415 154.5 415C169 415 181.5 424 194.5 442.5C204.5 457 215 463.5 227.5 463.5C240 463.5 248 459 259.5 447.5C268 439 274.5 431.5 280.5 426.5z" /></svg>
                {data.label}
            </Link>
        )

    return (
        <Link href={data.href} target="_blank" rel="noopener noreferrer" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg px-2.5 py-1.5 text-xs font-medium inline-flex items-center">
            {data.label}
        </Link>
    )
}