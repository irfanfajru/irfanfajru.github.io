"use client"
import { Disclosure, Transition } from "@headlessui/react"
import Image from "next/image"
export default function Projects(){
    return(
        <div id="projects" className="bg-black px-40 py-10 text-white">
            <div className="text-center">    
                <h1 className="font-bold text-4xl">Selected Projects</h1>
                <p>Here is a <span className="text-secondary text-md">Sample of Projects</span> I Have Worked On.</p>
            </div>

            <div className="mt-20 grid grid-cols-2 gap-2">
                {/* pbsf */}
                <div>
                    <h2 className="font-bold text-2xl">Playbook Sales Force Telkomsel Balikpapan</h2>
                    <p>Fullstack Web Developer (Jul 2021 - Jul 2023)</p>
                    <hr className="w-12 h-1 rounded border-0 bg-secondary mt-2"/>
                    <p className="mt-4 text-paragraf text-justify text-md">
                    Application for monitoring Telkomsel Balikpapan Sales Force activities. Sales performs checkin, reporting and checkout on the mobile application. By using API, integration is carried out from mobile to web applications for monitoring sales activities.
                    </p>
                    <Disclosure>
                            {({open})=>(
                                <>
                            <Transition
                                enter="transition duration-600 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-300 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                            <Disclosure.Panel>
                                <div className="mt-2">
                                    <div className="text-justify mb-2 text-paragraf">
                                        <p className="mb-2">
                                            Sales checkin every day at the outlets that have been assigned from the website to mobile. Sales checks visits to outlets with the mobile application, if the sales distance from the outlet is within a 10 meter radius. While within the outlet radius, sales are required to carry out tasks such as outlet photos or other documentation during the assignment time of at least 15 minutes. If sales leave the radius then they are considered to have failed in completing the task. If sales successfully completes all tasks for a minimum duration of 15 minutes then checkin is successful and the data will be entered into the website via API. If the outlet is closed, then checkin only requires documentation that the outlet is closed and does not need to wait 15 minutes for other assignments.
                                        </p>
                                        <p>
                                            The website application is an application for admins to monitor sales force activities every day. There is a Daily Report for accumulated reporting of sales activities every day. Starting from the total outlet visits that day, first and last checkin time. There is also an activity log for more detailed monitoring of sales force activities, such as documentation, outlet data, checkin time and date and checkin status. Apart from reporting, there is also a leaderboard for monthly sales performance, admins can also download recap results in Excel form.
                                        </p>
                                    </div>
                                    <p className="text-lg">
                                        What did <span className="text-secondary"> I do on this project ?</span> 
                                    </p>
                                    <ul className="list-disc text-paragraf mt-2 mb-4">
                                        <li>
                                            Conduct meetings with clients.
                                        </li>
                                        <li>
                                            Designing logic, flow and database.
                                        </li>
                                        <li>
                                            Analyze requirements, architecture and application infrastructure.
                                        </li>
                                        <li>
                                            Collaborate with mobile developers for API integration.
                                        </li>
                                        <li>
                                            Perform coding, debugging, and troubleshooting.
                                        </li>
                                        <li>
                                            Building APIs and API testing with Postman.
                                        </li>
                                        <li>
                                            Deploying applications to hosting with SSH and maintaining applications.
                                        </li>
                                        <li>
                                            Perform application performance optimization.
                                        </li>
                                    </ul>
                                    
                                    <p className="text-lg">What <span className="text-secondary">technology do I use in this project ?</span></p>
                                    <ul className="list-disc mt-2 mb-4 text-paragraf">
                                        <li>
                                            PHP 8
                                        </li>
                                        <li>
                                            Laravel 8
                                        </li>
                                        <li>
                                            Jetstream
                                        </li>
                                        <li>
                                            Livewire
                                        </li>
                                        <li>
                                            Tailwind CSS
                                        </li>
                                        <li>
                                            MySQL
                                        </li>
                                        <li>
                                            Git
                                        </li>
                                        <li>
                                            Github
                                        </li>
                                        <li>
                                            Flutter (mobile app)
                                        </li>
                                    </ul>
                                <p className="text-lg mb-2">
                                    What are the
                                    <span className="text-secondary"> results of this project ?</span>
                                </p>
                                <p className="text-paragraf text-justify">
                                The application start to be used from 28 July 2021 to 26 July 2023. Not only during the creation period, but this application continues to be developed with various changes, updates and maintenance during use.
                                This application has succeeded in increasing the performance of the Telkomsel Balikpapan Sales Force. Overcoming sales force fraud for fake GPS locations and fake reporting. Based on the success of this application, it was continued with the creation of similar applications for other branches of Telkomsel which are explained in the next section.
                                </p>
                                </div>
                            </Disclosure.Panel>
                            </Transition>
                            <Disclosure.Button className={"border-b-2 border-secondary text-paragraf text-md mt-2"}>
                                {open?"Read Less":"Read More"}
                            </Disclosure.Button>

                                </>
                            )}
                    </Disclosure>
                </div>
                <div className="flex justify-center">
                    <Image width={600} height={600} className="h-96" alt="PBSF" src="/assets/projects/pbsf/mockup.png"/>
                </div>
            </div>
            {/* noken */}
            <div className="mt-20 grid grid-cols-2 gap-2">
                <div>
                    <h2 className="font-bold text-2xl">Noken Super App Telkomsel Sales Agent Papua Maluku</h2>
                    <p>Fullstack Web Developer (Oct 2022 - Apr 2023)</p>
                    <hr className="w-12 h-1 rounded border-0 bg-secondary mt-2"/>
                    <p className="mt-4 text-paragraf text-md text-justify">
                        Application for monitoring Telkomsel Papua Maluku Sales Agent activities. The sales agent checkin via the mobile application, then documents sales activities at that location. So that from the website application, monitoring can be carried out by the admin regarding sales work. This is a development of the successful Telkomsel Balikpapan Sales Force Playbook application to be implemented by Telkomsel Papua Maluku Sales Agents with adaptation to the location and work there.
                    </p>
                    <Disclosure>
                            {({open})=>(
                                <>
                            <Transition
                                enter="transition duration-600 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-300 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                            <Disclosure.Panel>
                                <div className="mt-2">
                                    <div className="text-justify mb-2 text-paragraf">
                                        <p className="mb-2">
                                        Sales check in at the location of their activities using the mobile application. From the check-in point, a radius of 1 km is given. Sales carries out activities and documents them on the mobile application while in the radius of that point. The condition for checking out is to input a file from Digipos (Excel format) into the application while in that radius. If sales leave the radius, a notification will appear to immediately enter the radius. Sales activity data will be sent to the website application via API. Documentation data and digipost files (excel format) will be entered into the database.
                                        </p>
                                        <p>
                                        The website application is an application for admins to monitor sales agent activities every day. There is a personal dashboard for monitoring sales performance recapitulation. Territory dashboard for monitoring territorial sales recapitulation. And activity log for detailed sales activities every day.
                                        </p>
                                    </div>
                                    <p className="text-lg">
                                        What did <span className="text-secondary"> I do on this project ?</span> 
                                    </p>
                                    <ul className="list-disc text-paragraf mt-2 mb-4">
                                        <li>
                                            Conduct meetings with clients.
                                        </li>
                                        <li>
                                            Designing logic, flow and database.
                                        </li>
                                        <li>
                                            Analyze requirements, architecture and application infrastructure.
                                        </li>
                                        <li>
                                            Collaborate with mobile developers for API integration.
                                        </li>
                                        <li>
                                            Perform coding, debugging, and troubleshooting.
                                        </li>
                                        <li>
                                            Building APIs and API testing with Postman.
                                        </li>
                                        <li>
                                            Deploying applications to hosting with SSH and maintaining applications.
                                        </li>
                                        <li>
                                            Perform application performance optimization.
                                        </li>
                                    </ul>
                                    
                                    <p className="text-lg">What <span className="text-secondary">technology do I use in this project ?</span></p>
                                    <ul className="list-disc mt-2 mb-4 text-paragraf">
                                        <li>
                                            PHP 8
                                        </li>
                                        <li>
                                            Laravel 8
                                        </li>
                                        <li>
                                            Jetstream
                                        </li>
                                        <li>
                                            Livewire
                                        </li>
                                        <li>
                                            Tailwind CSS
                                        </li>
                                        <li>
                                            MySQL
                                        </li>
                                        <li>
                                            Git
                                        </li>
                                        <li>
                                            Github
                                        </li>
                                        <li>
                                            Flutter (mobile app)
                                        </li>
                                    </ul>
                                <p className="text-lg mb-2">
                                    What are the
                                    <span className="text-secondary"> results of this project ?</span>
                                </p>
                                <p className="text-paragraf text-justify">
                                    This application was used from 19 October 2022 to 3 April 2023. As long as the application is used, development continues to be carried out for updates and maintenance. This application has succeeded in improving sales agent performance, making it easier for admins to monitor sales agent work and recapitulate sales agent performance data.
                                </p>
                                </div>
                            </Disclosure.Panel>
                            </Transition>
                            <Disclosure.Button className={"border-b-2 border-secondary text-paragraf text-md mt-2"}>
                                {open?"Read Less":"Read More"}
                            </Disclosure.Button>

                                </>
                            )}
                    </Disclosure>
                </div>
                <div className="flex justify-center">
                    <Image width={600} height={600}  className="h-96" alt="noken" src="/assets/projects/noken/mockup.png"/>
                </div>
            </div>
            {/* stela */}
            <div className="mt-20 grid grid-cols-2 gap-2">
                <div>
                    <h2 className="font-bold text-2xl">Sistem Tiket dan Eskalasi Layanan (STELA) DPR RI</h2>
                    <p>Back End Programmer (Aug 2022 - Dec 2022)</p>
                    <hr className="w-12 h-1 rounded border-0 bg-secondary mt-2"/>
                    <p className="mt-4 text-paragraf text-md text-justify">
                        Ticket System Application and Service Escalation in the DPR RI area. Users can create service tickets via the website or mobile application. Then the service desk will provide feedback, if escalation is needed to the officer, then the service desk can escalate it to the officer. Users can track service tickets that they have created via the website or mobile application.
                        This is the final assignment for the MSIB program at the DPR RI.
                    </p>
                    <Disclosure>
                            {({open})=>(
                                <>
                            <Transition
                                enter="transition duration-600 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-300 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                            <Disclosure.Panel>
                                <div className="mt-2">
                                    <div className="text-justify mb-2 text-paragraf">
                                        <p className="mb-2">
                                        Users can create service tickets via the website or mobile. Then the user gets a unique ticket code so that the user can track the progress of the service that has been created.
                                        </p>
                                        <p className="mb-2">
                                        Service tickets will be entered into the Service Desk via the website application. The service desk will provide feedback for service tickets created by users. If a service ticket requires an officer to come to a location or other process, the service desk can escalate it to an officer (Helpdesk or IT Specialist).
                                        </p>
                                        <p>
                                        If an escalation is carried out, the officer (Helpdesk or IT Specialist) is obliged to provide reporting regarding the process that has been carried out from the escalation provided via the website or mobile application. Every reporting or process from officers will be verified by the service desk for service ticket status. So that users can see the progress of the status of service tickets that have been created.
                                        </p>
                                    </div>
                                    <p className="text-lg">
                                        What did <span className="text-secondary"> I do on this project ?</span> 
                                    </p>
                                    <ul className="list-disc text-paragraf mt-2 mb-4">
                                        <li>
                                        Become an lead back end programmer intern to lead the team in creating applications.
                                        </li>
                                        <li>
                                        Designing database structure, logic and application documentation.
                                        </li>
                                        <li>
                                        Collaborate with front end and back end programmer intern in solving program code problems.
                                        </li>
                                        <li>
                                        Perform coding, code checking, debugging, and merge branches from feature branch to staging.
                                        </li>
                                        <li>
                                        Creating APIs and API testing with Postman.
                                        </li>
                                        <li>
                                        Presented the DPR RI Ticket and Service Escalation System application program code to the DPR RI Information Technology Center with a final score of 89.89 (very satisfactory).
                                        </li>
                                    </ul>
                                    
                                    <p className="text-lg">What <span className="text-secondary">technology do I use in this project ?</span></p>
                                    <ul className="list-disc mt-2 mb-4 text-paragraf">
                                        <li>
                                            PHP 5.6
                                        </li>
                                        <li>
                                            Zend Framework 1.12
                                        </li>
                                        <li>
                                            Bootstrap
                                        </li>
                                        <li>
                                            JQuery
                                        </li>
                                        <li>
                                            MySQL 5
                                        </li>
                                        <li>
                                            Git
                                        </li>
                                        <li>
                                            Github
                                        </li>
                                        <li>
                                            Kotlin (mobile app)
                                        </li>
                                    </ul>
                                <p className="text-lg mb-2">
                                    What are the
                                    <span className="text-secondary"> results of this project ?</span>
                                </p>
                                <p className="text-paragraf text-justify">
                                The application successfully meets the requirements of PUSTEKINFO DPR RI for the ticket system application and service escalation. By presenting this final assignment to PUSTEKINFO DPR RI, get a final assignment and presentation score of 92.
                                </p>
                                </div>
                            </Disclosure.Panel>
                            </Transition>
                            <Disclosure.Button className={"border-b-2 border-secondary text-paragraf text-md mt-2"}>
                                {open?"Read Less":"Read More"}
                            </Disclosure.Button>

                                </>
                            )}
                    </Disclosure>
                </div>
                <div className="flex justify-center">
                    <Image width={600} height={600}  className="h-96" alt="stela" src="/assets/projects/stela/mockup.png"/>
                </div>
            </div>
            {/* open music api */}
            <div className="mt-20 grid grid-cols-2 gap-2">
                <div>
                    <h2 className="font-bold text-2xl">Open Music API</h2>
                    <p>Back End Developer (May 2022)</p>
                    <hr className="w-12 h-1 rounded border-0 bg-secondary mt-2"/>
                    <p className="mt-4 text-paragraf text-md text-justify">
                    This is the final task of FGA back end developer training with Dicoding partners. Server side application using REST API for music management similar to Spotify.
                    </p>
                    <Disclosure>
                            {({open})=>(
                                <>
                            <Transition
                                enter="transition duration-600 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-300 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                            <Disclosure.Panel>
                                <div className="mt-2">
                                    <div className="text-justify mb-2 text-paragraf">
                                        <p className="mb-2 text-justify">
                                        This application has song, playlist and album management features.
                                        Users can read, add, edit or delete songs with authorization to edit and delete only the user concerned.
                                        </p>
                                        <p className="mb-2 text-justify">
                                        Users can read, add, edit and delete albums with authorization to edit and delete only the user concerned and add songs to the album. There is an album like feature, where users can like albums.
                                        </p>
                                        <p className="text-justify">
                                        Users can create song playlists and also collaborate with other users for song playlist management. Activities on song playlists are also saved for the song playlist management log.
                                        </p>
                                        <p>
                                        Users can export playlists in Json format and send them via email to the user.
                                        </p>
                                    </div>
                                    <p className="text-lg">
                                        What did <span className="text-secondary"> I do on this project ?</span> 
                                    </p>
                                    <ul className="list-disc text-paragraf mt-2 mb-4">
                                        <li>
                                        Implement authentication and authorization with JWT.
                                        </li>
                                        <li>
                                        Implement validation data with Joi.
                                        </li>
                                        <li>
                                        Implement database normalization.
                                        </li>
                                        <li>
                                        Implement query parameters for data filtering.
                                        </li>
                                        <li>
                                        Implement storage for file uploads.
                                        </li>
                                        <li>
                                        Implement email service.
                                        </li>
                                        <li>
                                        Implementation of application optimization by implementing server side caching and message brokers.
                                        </li>
                                        <li>
                                        Performed API testing with Postman.
                                        </li>
                                        <li>
                                        Implement clean code and best practices.
                                        </li>
                                        <li>
                                        Learn how to use Amazon Web Services.
                                        </li>
                                    </ul>
                                    
                                    <p className="text-lg">What <span className="text-secondary">technology do I use in this project ?</span></p>
                                    <ul className="list-disc mt-2 mb-4 text-paragraf">
                                        <li>
                                            NodeJS 
                                        </li>
                                        <li>
                                            HapiJS Framework
                                        </li>
                                        <li>
                                            PostgreSQL
                                        </li>
                                        <li>
                                            Redis
                                        </li>
                                        <li>
                                            RabbitMQ
                                        </li>
                                        <li>
                                            Google SMTP
                                        </li>
                                        <li>
                                            Git
                                        </li>
                                        <li>
                                            Github
                                        </li>
                                    </ul>
                                <p className="text-lg mb-2">
                                    What are the
                                    <span className="text-secondary"> results of this project ?</span>
                                </p>
                                <p className="text-paragraf text-justify">
                                The application successfully fulfills all requirements in the postman collection. With the results of the v1 application, v2 received a score of 5 stars in the final assignment submission. And for v3 it gets a score of 4 stars.
                                </p>
                                <p className="text-paragraf mt-2">
                                You can check this project via the following github repository link :
                                </p>
                                <a href="https://github.com/irfanfajru/open-music-api" target="blank" className="border-b-2 border-secondary text-paragraf text-sm mt-2">Open Music API</a> <br />
                                <a href="https://github.com/irfanfajru/open-music-consumer" target="blank" className="border-b-2 border-secondary text-paragraf text-sm mt-2">Open Music API Consumer (Email sending for export playlist)</a>
                                </div>
                            </Disclosure.Panel>
                            </Transition>
                            <Disclosure.Button className={"border-b-2 border-secondary text-paragraf text-md mt-2"}>
                                {open?"Read Less":"Read More"}
                            </Disclosure.Button>

                                </>
                            )}
                    </Disclosure>
                </div>
                <div className="flex justify-center">
                    <Image width={600} height={600}  className="h-96" alt="opemmusicapi" src="/assets/projects/openmusicapi/mockup.png"/>
                </div>
            </div>
            {/* smoking detection app */}
            <div className="mt-20 grid grid-cols-2 gap-2">
                <div>
                    <h2 className="font-bold text-2xl">Smoking Detection While Driving Using YOLOv7</h2>
                    <p>Fullstack Web Developer (Mar 2023 - Aug 2023)</p>
                    <hr className="w-12 h-1 rounded border-0 bg-secondary mt-2"/>
                    <p className="mt-4 text-paragraf text-md">
                        Website-based application to detect motorbike riders who smoke. Using the YOLOv7 deep learning object detection method to detect motorbike riders who smoke. This is my final thesis project for a bachelor of informatics at Ahmad Dahlan University.
                    </p>
                    <Disclosure>
                            {({open})=>(
                                <>
                            <Transition
                                enter="transition duration-600 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-300 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                            <Disclosure.Panel>
                                <div className="mt-2">
                                    <div className="text-justify mb-2 text-paragraf">
                                        <p className="mb-2 text-justify">
                                        The detection process is carried out with 2 models. The first detection was carried out using YOLOv7 weights from MS COCO to detect motorbike riders (person and motorcycle). Then, from the motorbike riders bounding box, detection is carried out using the second model to detect cigarettes. If cigarettes are detected in the motorbike riders bounding box, a smoking class bounding box will be created.
                                        </p>
                                        <p className="mb-2 text-justify">
                                        The website application uses NextJS as a client. The client will use the post method to send image input to the server. The server (Flask) will detect the input image and return the detection path. The client will display the detection results from the API response to the web browser.
                                        </p>
                                    </div>
                                    <p className="text-lg">
                                        What did <span className="text-secondary"> I do on this project ?</span> 
                                    </p>
                                    <ul className="list-disc text-paragraf mt-2 mb-4">
                                        <li>
                                        Collecting datasets.
                                        </li>
                                        <li>
                                        Training a YOLOv7 model to detect cigarettes.
                                        </li>
                                        <li>
                                        Analysis of model accuracy in detecting motorbike riders who smoke.
                                        </li>
                                        <li>
                                        Designing UI/UX.
                                        </li>
                                        <li>
                                        Create an API for use in website applications.
                                        </li>
                                        <li>
                                        Create website applications.
                                        </li>
                                        <li>
                                        Combines 2 object detection models for detection.
                                        </li>
                                    </ul>
                                    
                                    <p className="text-lg">What <span className="text-secondary">technology do I use in this project ?</span></p>
                                    <ul className="list-disc mt-2 mb-4 text-paragraf">
                                        <li>
                                            Python 
                                        </li>
                                        <li>
                                            Flask Framework
                                        </li>
                                        <li>
                                            NextJS
                                        </li>
                                        <li>
                                            Pytorch
                                        </li>
                                        <li>
                                            YOLOv7
                                        </li>
                                        <li>
                                            OpenCV
                                        </li>
                                        <li>
                                            Git
                                        </li>
                                        <li>
                                            Github
                                        </li>
                                    </ul>
                                <p className="text-lg mb-2">
                                    What are the
                                    <span className="text-secondary"> results of this project ?</span>
                                </p>
                                <p className="text-paragraf text-justify">
                                The application successfully detects drivers who smoke from the image input. With the model accuracy in detecting smoking motorbike riders of 97%, it was tested on 20 images of smoking motorbike riders and 20 images of non-smoking motorbike riders. Successfully presented to the thesis examiners and got an A grade.
                                </p>
                                <p className="text-paragraf mt-2">
                                You can check this project via the following github repository link :
                                </p>
                                <a href="https://github.com/irfanfajru/smoking-detection-back-end" target="blank" className="border-b-2 border-secondary text-paragraf text-sm mt-2">Back End (Flask)</a> <br />
                                <a href="https://github.com/irfanfajru/smoking-detection-front-end" target="blank" className="border-b-2 border-secondary text-paragraf text-sm mt-2">Front End (NextJS)</a>
                                </div>
                            </Disclosure.Panel>
                            </Transition>
                            <Disclosure.Button className={"border-b-2 border-secondary text-paragraf text-md mt-2"}>
                                {open?"Read Less":"Read More"}
                            </Disclosure.Button>

                                </>
                            )}
                    </Disclosure>
                </div>
                <div className="flex justify-center">
                    <Image width={600} height={600}  className="h-96" alt="smokedetection" src="/assets/projects/smokingdetection/mockup.png"/>
                </div>
            </div>
            {/* P2P lending service */}
            <div className="mt-20 grid grid-cols-2 gap-2">
                <div>
                    <h2 className="font-bold text-2xl">P2P Lending Service</h2>
                    <p>Back End Developer (Jun 2023)</p>
                    <hr className="w-12 h-1 rounded border-0 bg-secondary mt-2"/>
                    <p className="mt-4 text-paragraf text-md">
                    This is a simple service for P2P Lending transactions as the final assignment of Investree virtual internship. This service is a back end application with a REST API for authentication, authorization and lending and borrowing transaction features.
                    </p>
                    <Disclosure>
                            {({open})=>(
                                <>
                            <Transition
                                enter="transition duration-600 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-300 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                            <Disclosure.Panel>
                                <div className="mt-2">
                                    <div className="text-justify mb-2 text-paragraf">
                                        <p className="mb-2 text-justify">
                                        In this service there is a feature to log in using OAuth2 JWT from Spring Boot Security. There is a loan transaction service for users to make loans with the tenor and loan amount and loan interest. There is also a service to update the status of loan transactions to be paid off. And there is also a service for displaying transactions with pagination and also filtering by transaction status.
                                        </p>
                                    </div>
                                    <p className="text-lg">
                                        What did <span className="text-secondary"> I do on this project ?</span> 
                                    </p>
                                    <ul className="list-disc text-paragraf mt-2 mb-4">
                                        <li>
                                        Implemented the MVC Service Repository Design Pattern.
                                        </li>
                                        <li>
                                        Implemented unit tests with rest template and JUNIT.
                                        </li>
                                        <li>
                                        Implement pagination and filtering query parameters.
                                        </li>
                                        <li>
                                        Implemented authentication and authorization with spring boot security OAuth2 JWT.
                                        </li>
                                        <li>
                                        Building APIs and testing with Postman.
                                        </li>
                                    </ul>
                                    
                                    <p className="text-lg">What <span className="text-secondary">technology do I use in this project ?</span></p>
                                    <ul className="list-disc mt-2 mb-4 text-paragraf">
                                        <li>
                                            Java 17 
                                        </li>
                                        <li>
                                            Java Spring Boot 2.6
                                        </li>
                                        <li>
                                            Hibernate
                                        </li>
                                        <li>
                                            PostgreSQL
                                        </li>
                                        <li>
                                            Git
                                        </li>
                                        <li>
                                            Github
                                        </li>
                                    </ul>
                                <p className="text-lg mb-2">
                                    What are the
                                    <span className="text-secondary"> results of this project ?</span>
                                </p>
                                <p className="text-paragraf text-justify">
                                Successfully fulfilled all requirements in the final virtual internship assignment at Investree. By presenting the final assignment to the mentor and getting very satisfying results from the mentor.
                                </p>
                                <p className="text-paragraf mt-2">
                                You can check this project via the following github repository link :
                                </p>
                                <a href="https://github.com/irfanfajru/task-5-backend-investree" target="blank" className="border-b-2 border-secondary text-paragraf text-sm mt-2">P2P Lending Service</a> <br />
                                </div>
                            </Disclosure.Panel>
                            </Transition>
                            <Disclosure.Button className={"border-b-2 border-secondary text-paragraf text-md mt-2"}>
                                {open?"Read Less":"Read More"}
                            </Disclosure.Button>

                                </>
                            )}
                    </Disclosure>
                </div>
                <div className="flex justify-center">
                    <Image width={600} height={600}  className="h-96" alt="investree" src="/assets/projects/investree/mockup.png"/>
                </div>
            </div>
            {/* social commerce reseller service */}
            <div className="mt-20 grid grid-cols-2 gap-2">
                <div>
                    <h2 className="font-bold text-2xl">Social Commerce Reseller Service</h2>
                    <p>Back End Developer (Jul 2023)</p>
                    <hr className="w-12 h-1 rounded border-0 bg-secondary mt-2"/>
                    <p className="mt-4 text-paragraf text-md">
                        This is the final assignment of the virtual internship program at Evermos. By creating a simple API service for social commerce resellers using Golang and MySQL.
                    </p>
                    <Disclosure>
                            {({open})=>(
                                <>
                            <Transition
                                enter="transition duration-600 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-300 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                            <Disclosure.Panel>
                                <div className="mt-2">
                                    <div className="text-justify mb-2 text-paragraf">
                                        <p className="mb-2 text-justify">
                                        In this project there are several services such as login and registration authentication and account management. Management of stores, products, categories, shipping addresses, transactions and integration with regional APIs.
                                        </p>
                                    </div>
                                    <p className="text-lg">
                                        What did <span className="text-secondary"> I do on this project ?</span> 
                                    </p>
                                    <ul className="list-disc text-paragraf mt-2 mb-4">
                                        <li>
                                        Implemented the MVC Service Repository Design Pattern.
                                        </li>
                                        <li>
                                        Implement authentication and authorization with JWT.
                                        </li>
                                        <li>
                                        Implement data validation.
                                        </li>
                                        <li>
                                        Implement clean code, clean architecture and best practices.
                                        </li>
                                        <li>
                                        Implement database transactions.
                                        </li>
                                        <li>
                                        Implement local storage for file upload API.
                                        </li>
                                        <li>
                                        Implement pagination and data filters.
                                        </li>
                                        <li>
                                        Create and test APIs with Postman.
                                        </li>
                                        <li>
                                        Integrate with regional data API from emsifa.com/api-region-indonesia/
                                        </li>

                                    </ul>
                                    
                                    <p className="text-lg">What <span className="text-secondary">technology do I use in this project ?</span></p>
                                    <ul className="list-disc mt-2 mb-4 text-paragraf">
                                        <li>
                                            Golang
                                        </li>
                                        <li>
                                            GoFiber
                                        </li>
                                        <li>
                                            GORM
                                        </li>
                                        <li>
                                            MySQL
                                        </li>
                                        <li>
                                            Docker
                                        </li>
                                        <li>
                                            Git
                                        </li>
                                        <li>
                                            Github
                                        </li>
                                    </ul>
                                <p className="text-lg mb-2">
                                    What are the
                                    <span className="text-secondary"> results of this project ?</span>
                                </p>
                                <p className="text-paragraf text-justify">
                                Successfully fulfilled all requirements for the final assignment. Presenting the final assignment to the mentor and getting very satisfying results from the mentor.
                                </p>
                                <p className="text-paragraf mt-2">
                                You can check this project via the following github repository link :
                                </p>
                                <a href="https://github.com/irfanfajru/final-task-evermos" target="blank" className="border-b-2 border-secondary text-paragraf text-sm mt-2">Social Commerce Reseller Service</a> <br />
                                </div>
                            </Disclosure.Panel>
                            </Transition>
                            <Disclosure.Button className={"border-b-2 border-secondary text-paragraf text-md mt-2"}>
                                {open?"Read Less":"Read More"}
                            </Disclosure.Button>

                                </>
                            )}
                    </Disclosure>
                </div>
                <div className="flex justify-center">
                    <Image width={600} height={600}  className="h-96" alt="evermos" src="/assets/projects/evermos/mockup.png"/>
                </div>
            </div>
        </div>
    )
}