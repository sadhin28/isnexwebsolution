import { Code, ExternalLink } from 'lucide-react';
import React from 'react';
import { BsGithub } from 'react-icons/bs';
import ReactiveButton from 'reactive-button';

const Projects = () => {
    const projects = [
        {
            title: "University Management System",
            description: "University Management System – A MERN stack web app built with React, TailwindCSS, React Router, Node.js, Express.js, and MongoDB, integrated with Firebase Authentication for secure user management. Features include student enrollment, results, class schedules, payments, role-based dashboards (Admin/Teacher/Student), and PDF report generation using jsPDF.",
            technologies: ["React", "TailwindCss", "Node.js", "MongoDB", "React Router", "Firebase", "jsPDF","express.js"],
            githubUrl: "https://github.com/sadhin28/university-management-system",
            liveUrl: "https://university-management-sy-dc929.web.app",
            image: "https://i.ibb.co.com/PsjmsQPL/Screenshot-2025-09-20-015449.png"
        },
        {
            title: "Job Portal",
            description: "A comprehensive job portal platform designed to enable seamless interaction between job seekers and employers. The system provides full CRUD operations for managing job postings, secure authentication, and a streamlined job application process.",
            technologies: ["React", "TailwindCss", "Node.js", "MongoDB", "React Router", "Firebase"],
            githubUrl: "https://github.com/sadhin28/Job-Portal-client",
            liveUrl: "https://job-portal-72009.web.app/",
            image: "https://i.ibb.co.com/3y9Vpn0w/Screenshot-2025-08-13-164956.png"
        },

        {
            title: "Chill Gamer ",
            description: "Chill Gamer is a clean, responsive, and user-friendly single-page application (SPA) that allows gamers to explore, share, and manage reviews of their favorite games. It is designed to provide a seamless and “chill” experience for every user, from casual players to hardcore fans.",
            technologies: ["React", "TailwindCss", "Firebase", "Node.js", "MongoDB"],
            githubUrl: "https://github.com/sadhin28/ChillGamer-Client",
            liveUrl: "https://chill-gemer.web.app/",
            image: "https://i.ibb.co.com/ZzMW08z2/Screenshot-2025-08-13-160257.png"
        },

        {
            title: "Discount Pro",
            description: "Discount PRO is a sleek and user-friendly single-page web application built to help users in Bangladesh find and use discount coupons from popular e-commerce brands. With features like Google authentication, brand-wise coupon listings, and easy code copying, users can save money effortlessly.",
            technologies: ["React", "Firebase", "Authentication", "React Router",],
            githubUrl: "https://github.com/sadhin28/Discount-Pro-A9-Project",
            liveUrl: "https://discount-pro-95f08.web.app/",
            image: "https://i.ibb.co.com/k6D6J3ZV/Screenshot-2025-08-13-165340.png"
        },
        {
            title: "City University Jatiotabadi Chatra Dal",
            description: "Modern post application with real-time uploading, Image sharing,  and user presence indicators.",
            technologies: ["React", "Node.js", "Express.js", "MongoDB", "Firebase Auth"],
            githubUrl: "https://github.com/sadhin28/My-Dragon-News",
            liveUrl: "https://dragon-news-9c86c.web.app/",
            image: "https://i.ibb.co.com/KxhzFcPK/Screenshot-2025-08-13-170053.png"
        },
        {
            title: "Donate Bangladesh",
            description: "Donate Bangladesh” features total funds (50,000 BDT), tab navigation (Donation, History), and donation cards with impactful images, current amounts, descriptions, input fields, and vibrant “Donate Now",
            technologies: ["Html", "JavaScript", "Tailwind CSS"],
            githubUrl: "https://github.com/sadhin28/assignment5",
            liveUrl: "https://assignment5-dun.vercel.app/",
            image: "https://i.ibb.co.com/pvb382RS/Screenshot-2025-08-13-171954.png"
        }
    ];
    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto ">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in-up">
                        Featured <span className="text-green-500">Projects</span>
                    </h2>
                    <p className="text-xl text-gray-400 text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
                        A showcase of my MERN stack applications demonstrating full-stack development capabilities
                    </p>
                </div>

                <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="flex flex-col group bg-gray-500/10 overflow-hidden border border-border hover:border-green-600/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl animate-fade-in-up rounded-lg"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Project Image/Gradient */}

                            <div className={`flex-grow relative overflow-hidden`}>

                                <div className="inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300">
                                    <img src={project.image} className='' alt="" />
                                </div>

                            </div>

                            {/* Project Content */}
                            <div className="px-6 py-6 space-y-4">
                                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3 pt-4 flex-wrap">
                                    <ReactiveButton outline
                                        className='rounded'
                                        color="green"
                                        idleText={
                                            <a className='flex items-center' href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                <BsGithub className="mr-2 h-4 w-4" />
                                                Code
                                            </a>
                                        }
                                        size="lerge"
                                    />
                                    <ReactiveButton
                                        className='rounded'
                                        color="primary"
                                        idleText={
                                            <a className='flex items-center' href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="mr-2 h-4 w-4" />
                                                Live Demo
                                            </a>
                                        }
                                        size="lerge"
                                    />



                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* More Projects CTA */}
                <div className="text-center  mt-12 animate-fade-in-up animate-delay-800">
                    <ReactiveButton outline
                        className='rounded'
                        color="green"
                        idleText={<a className='flex p-1 items-center' href="https://github.com/sadhin28" target="_blank" rel="noopener noreferrer">
                            <BsGithub className="mr-2 h-5 w-5" />
                            View All Projects on GitHub
                        </a>}
                        size="lerge"
                    />

                </div>
            </div>
        </section>
    );
};

export default Projects;