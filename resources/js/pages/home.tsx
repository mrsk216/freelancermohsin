import { Head, Link } from '@inertiajs/react';
import DynamicIcon from '@/components/DynamicIcon';
import PortfolioGallery, { type Project } from '@/components/PortfolioGallery';
import WordAnimation from '@/components/ui/wordAnimation';
import AppLayout from '@/layouts/guest-layout';

type WhyBestItem = {
    icon: string;
    title: string;
    description: string;
};

type HomeProps = {
    projects: Project[];
    whyBestArray: WhyBestItem[];
};

export default function Home({ projects, whyBestArray }: HomeProps) {
    //Changes Words
    const words = [
        'Full-Stack Developer',
        'Web Innovator',
        'Visual Storyteller',
        'Problem Solver'
    ];


    return (
        <AppLayout>
            <Head title="Home" />
            <section
                data-guest-hero
                className='w-full h-[calc(100vh-76px)] bg-[#ffffffba] dark:bg-[#000000ba] bg-[url("/assets/images/bg/hero.png")] dark:bg-[url("/assets/images/bg/hero-dark.jpg")] bg-no-repeat bg-blend-overlay lg:bg-blend-normal bg-left lg:bg-cover lg:bg-center flex items-center mt-[65px]'
            >
                <div className="w-full lg:w-10/12 xl:w-8/12 h-full mx-auto px-4">
                    <div className="flex justify-center lg:justify-start h-full">
                        <div className="w-full md:w-8/12 lg:w-1/2 flex items-center">
                            <div>
                                <h6 className="text-md font-extrabold">Crafting Digital Masterpieces, One Line of Code at a Time</h6>
                                <h1 className="text-3xl/10 md:text-5xl/18 font-extrabold mt-3 md:mt-0">
                                    <span className='block'>Where Code Meets Creativity</span>
                                    <WordAnimation words={words} />
                                </h1>
                                <p className="mt-4 mb-8" data-aos-delay="200">Hi, I'm <b>Shekh Md Mohsin</b>, a digital architect blending code with creativity. Let's build experiences that make an impact.</p>
                                <Link href="/contact" className="btn rounded-lg px-5 py-3">Let's Create</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='w-full bg-[#ffffff5c] dark:bg-[#0000005c] bg-[url("/assets/images/bg/bg-services.png")] dark:bg-[url("/assets/images/bg/bg-services-dark.png")] bg-no-repeat bg-blend-overlay lg:bg-blend-normal bg-cover bg-center flex items-center'>
                <div className="w-full lg:w-10/12 xl:w-8/12 h-full grid gap-8 mx-auto px-4">
                    <div className="flex justify-center mb-8">
                        <div className="w-full md:w-8/12 lg:w-7/12 text-center">
                            <h2 className="text-4xl font-bold mb-5">The Art of Digital Transformation</h2>
                            <p className="text-sm">I don't just create websites; I craft digital experiences that inspire, engage, and convert. Whether you're starting from scratch or evolving an existing idea, here's how I can help you make your mark.</p>
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 justify-center gap-5">
                        <div className="group w-full bg-white hover:bg-primary dark:bg-black transition-colors duration-800 rounded-4xl p-12.5 md:p-8 lg:p-7.5 xl:p-12.5 mb-5">
                            <DynamicIcon iconName="<Code/>" classes={'w-10 h-10 text-primary group-hover:text-white! transition-colors duration-800 stroke-[2.5]'}/>
                            <div className="mt-4 mb-3">
                                <h5 className="group-hover:text-white! text-lg font-bold my-2">Custom Web Development</h5>
                                <p className='group-hover:text-white!'>Tailored, intuitive, and scalable solutions using Laravel and cutting-edge technologies.</p>
                            </div>
                        </div>
                        <div className="group w-full bg-white hover:bg-primary dark:bg-black transition-colors duration-800 rounded-4xl p-12.5 md:p-8 lg:p-7.5 xl:p-12.5 mb-5">
                            <DynamicIcon iconName="<Palette/>" classes={'w-10 h-10 text-primary group-hover:text-white! transition-colors duration-800 stroke-[2.5]'}/>
                            <div className="mt-4 mb-3">
                                <h5 className="group-hover:text-white! text-lg font-bold my-2">Visual Design Mastery</h5>
                                <p className='group-hover:text-white!'>From branding to UX/UI, I bring stories to life through creative design that resonates.</p>
                            </div>
                        </div>
                        <div className="group w-full bg-white hover:bg-primary dark:bg-black transition-colors duration-800 rounded-4xl p-12.5 md:p-8 lg:p-7.5 xl:p-12.5 mb-5">
                            <DynamicIcon iconName="<Code/>" classes={'w-10 h-10 text-primary group-hover:text-white! transition-colors duration-800 stroke-[2.5]'}/>
                            <div className="mt-4 mb-3">
                                <h5 className="group-hover:text-white! text-lg font-bold my-2">WordPress Wizardry</h5>
                                <p className='group-hover:text-white!'>Bridging the gap between flexibility and ease-of-use with custom WordPress solutions.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center mt-5">
                        <Link href="/services" className="btn rounded-lg px-5 py-3">Discover My Approach</Link>
                    </div>
                </div>
            </section>
            <section id="projects" className='w-full py-5 bg-[#ffffff5c] dark:bg-[#161B1F] bg-no-repeat flex items-center'>
                <div className="w-full lg:w-10/12 xl:w-8/12 h-full grid gap-8 mx-auto px-4">
                    <div className="flex justify-center mb-8">
                        <div className="w-full md:w-8/12 lg:w-7/12 text-center">
                            <h2 className="text-4xl font-bold mb-5">Projects That Speak Volumes</h2>
                            <p className="text-sm">I believe in leaving a mark with every project I work on. These aren't just websites—they're experiences with a purpose. Dive into the stories behind the work.</p>
                        </div>
                    </div>
                    <div className="w-full">
                        <PortfolioGallery projects={projects} />
                    </div>
                    <div className="w-full flex justify-center mt-5">
                        <Link href="/projects" className="btn rounded-lg px-5 py-3">See the Full Journey</Link>
                    </div>
                </div>
            </section>
            <section className='w-full bg-[#ffffffd4] dark:bg-[#000000d4] bg-[url("/assets/images/bg/strategy.jpg")] dark:bg-[url("/assets/images/bg/strategy-dark.jpg")] bg-no-repeat bg-blend-overlay bg-fixed bg-cover bg-center flex items-center relative'>
                <div className="w-full lg:w-10/12 xl:w-8/12 h-full grid gap-8 mx-auto px-4">
                    <div className="flex justify-center mb-8">
                        <div className="w-full md:w-8/12 lg:w-7/12 text-center">
                            <h2 className="text-4xl font-bold mb-5">A Blend of Strategy, Design & Development</h2>
                            <p className="text-sm">I approach every project with a creative mind and a technical heart, using a seamless process that ensures excellence at every step.</p>
                        </div>
                    </div>
                    <div className="w-full my-5">
                        <div className="grid grid-cols-12 justify-center gap-5 mb-8 mb-lg-0">
                            <div className="col-span-12 lg:col-span-5">
                                <div className="process-box process-left bg-black">
                                    <div className="grid grid-cols-12 gap-4">
                                        <div className="col-span-5">
                                            <div className="process-step">
                                                <p className="m-0 p-0">Step</p>
                                                <h2 className="m-0 p-0">01</h2>
                                            </div>
                                        </div>
                                        <div className="col-span-7">
                                            <h5 className="font-semibold mb-2">Discovery & Consultation</h5>
                                            <p className="text-xs leading-tight">I start with a deep dive into your goals, challenges, and audience. Through a video meeting, we uncover opportunities and align on objectives.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-2 hidden lg:block"></div>
                            <div className="lg:col-span-5 relative z-0 hidden lg:block">
                                <div className="process-point-right"></div>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 justify-center gap-5 mb-8 mb-lg-0">
                            <div className="lg:col-span-5 relative z-0 hidden lg:block">
                                <div className="process-point-left"></div>
                            </div>
                            <div className="lg:col-span-2 hidden lg:block"></div>
                            <div className="col-span-12 lg:col-span-5">
                                <div className="process-box process-right">
                                    <div className="grid grid-cols-12 gap-4">
                                        <div className="col-span-5">
                                            <div className="process-step">
                                                <p className="m-0 p-0">Step</p>
                                                <h2 className="m-0 p-0">02</h2>
                                            </div>
                                        </div>
                                        <div className="col-span-7">
                                            <h5 className="font-semibold mb-2">Strategy & Planning</h5>
                                            <p className="text-xs leading-tight">Leveraging insights from Step 1, I craft a custom strategy—including wireframes, content outlines, and timelines. Your feedback shapes every detail.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 justify-center gap-5 mb-8 mb-lg-0">
                            <div className="col-span-12 lg:col-span-5">
                                <div className="process-box process-left">
                                    <div className="grid grid-cols-12 gap-4">
                                        <div className="col-span-5">
                                            <div className="process-step">
                                                <p className="m-0 p-0">Step</p>
                                                <h2 className="m-0 p-0">03</h2>
                                            </div>
                                        </div>
                                        <div className="col-span-7">
                                            <h5 className="font-semibold mb-2">Design & Development</h5>
                                            <p className="text-xs leading-tight">I brings ideas to life with pixel-perfect designs and robust, scalable builds. Iterating based on your input, I use tools like Figma for design and React/WordPress for development.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-2 hidden lg:block"></div>
                            <div className="lg:col-span-5 relative z-0 hidden lg:block">
                                <div className="process-point-right"></div>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 justify-center gap-5 mb-8 mb-lg-0">
                            <div className="lg:col-span-5 relative z-0 hidden lg:block">
                                <div className="process-point-left"></div>
                            </div>
                            <div className="lg:col-span-2 hidden lg:block"></div>
                            <div className="col-span-12 lg:col-span-5">
                                <div className="process-box process-right">
                                    <div className="grid grid-cols-12 gap-4">
                                        <div className="col-span-5">
                                            <div className="process-step">
                                                <p className="m-0 p-0">Step</p>
                                                <h2 className="m-0 p-0">04</h2>
                                            </div>
                                        </div>
                                        <div className="col-span-7">
                                            <h5 className="font-semibold mb-2">Testing & Launch</h5>
                                            <p className="text-xs leading-tight">I conduct thorough QA testing to ensure everything works flawlessly across devices. We launch together, with my hands-on support for a smooth rollout.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 justify-center gap-5 mb-8 mb-lg-0">
                            <div className="col-span-12 lg:col-span-5">
                                <div className="process-box process-left">
                                    <div className="grid grid-cols-12 gap-4">
                                        <div className="col-span-5">
                                            <div className="process-step">
                                                <p className="m-0 p-0">Step</p>
                                                <h2 className="m-0 p-0">05</h2>
                                            </div>
                                        </div>
                                        <div className="col-span-7">
                                            <h5 className="font-semibold mb-2">Optimization & Growth</h5>
                                            <p className="text-xs leading-tight">After launch, I monitor performance with analytics and refine based on data. Ongoing tweaks keep your project evolving without the hassle.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-2 hidden lg:block"></div>
                            <div className="lg:col-span-5 relative z-0 hidden lg:block">
                                <div className="process-point-right process-last"></div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center mt-5">
                        <Link href="/contact" className="btn rounded-lg px-5 py-3">Let's Collaborate</Link>
                    </div>
                </div>
            </section>
            <section id="whyUs" className="w-full py-5 bg-[#ffffff5c] dark:bg-[#161B1F] bg-no-repeat flex items-center">
                <div className="w-full lg:w-10/12 xl:w-8/12 h-full grid gap-8 mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-5">
                        <div className="w-full mb-5 lg:mb-0">
                            <h2 className="text-4xl font-bold mb-5">Why Choose Me</h2>
                            <p className="text-sm">As your one-person powerhouse, I deliver big-agency results with personal touch—no bureaucracy, just focused creativity.</p>
                            <img src="/assets/images/why_choose_us1.png" alt="Why Choose Me" className="img-fluid"/>
                        </div>
                        <div className="w-full">
                            {whyBestArray?.map((whyBestItem, i) => (
                                <div key={i} className="flex items-center gap-5 mb-8">
                                    <div className="bg-primary text-white flex justify-center items-center relative py-4 px-5 after:content-[''] after:absolute after:top-1.5 after:left-1.5 after:w-full after:h-full after:border-1 after:border-primary">
                                        <DynamicIcon iconName={whyBestItem.icon} classes={'w-10 h-10 stroke-[2.5]'}/>
                                    </div>
                                    <div className="content">
                                        <h4 className="font-bold title-color mb-1">{whyBestItem.title}</h4>
                                        <p className="text-sm leading-tight">{whyBestItem.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}
