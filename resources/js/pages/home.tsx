import { Head, Link } from '@inertiajs/react';
import { Code } from 'lucide-react';
import WordAnimation from '@/components/ui/wordAnimation';
import AppLayout from '@/layouts/guest-layout';

export default function Home() {
    const words = [
        'Full-Stack Developer',
        'Web Innovator',
        'Visual Storyteller',
        'Problem Solver'
    ];

    return (
        <AppLayout>
            <Head title="Home" />
            <section className='w-full h-[calc(100vh-76px)] bg-[#ffffff5c] bg-[url("/assets/images/bg/hero.png")] lg:bg-[url("/assets/images/bg/hero.png")] bg-no-repeat bg-blend-overlay lg:bg-blend-normal bg-left lg:bg-cover lg:bg-center flex items-center'>
                <div className="w-full lg:w-10/12 xl:w-8/12 h-full mx-auto px-4">
                    <div className="flex justify-center lg:justify-start h-full">
                        <div className="w-full md:w-8/12 lg:w-1/2 flex items-center">
                            <div>
                                <h6 className="text-md font-extrabold">Crafting Digital Masterpieces, One Line of Code at a Time</h6>
                                <h1 className="text-5xl/18 font-extrabold">
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
            <section className='w-full bg-[#ffffff5c] bg-[url("/assets/images/bg/bg-services.png")] lg:bg-[url("/assets/images/bg/bg-services.png")] bg-no-repeat bg-blend-overlay lg:bg-blend-normal bg-cover bg-center flex items-center'>
                <div className="w-full lg:w-10/12 xl:w-8/12 h-full grid gap-8 mx-auto px-4">
                    <div className="flex justify-center mb-8">
                        <div className="w-full md:w-8/12 lg:w-7/12 text-center">
                            <h2 className="text-4xl font-bold mb-5">The Art of Digital Transformation</h2>
                            <p className="text-sm">I don't just create websites; I craft digital experiences that inspire, engage, and convert. Whether you're starting from scratch or evolving an existing idea, here's how I can help you make your mark.</p>
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 justify-center gap-5">
                        <div className="group w-full bg-white hover:bg-primary transition-colors duration-800 rounded-4xl p-12.5 md:p-8 lg:p-7.5 xl:p-12.5 mb-5">
                            <Code className="w-10 h-10 text-primary group-hover:text-white! transition-colors duration-800 stroke-[2.5]" />
                            <div className="mt-4 mb-3">
                                <h5 className="group-hover:text-white! text-lg font-bold my-2">Custom Web Development</h5>
                                <p className='group-hover:text-white!'>Tailored, intuitive, and scalable solutions using Laravel and cutting-edge technologies.</p>
                            </div>
                        </div>
                        <div className="group w-full bg-white hover:bg-primary transition-colors duration-800 rounded-4xl p-12.5 md:p-8 lg:p-7.5 xl:p-12.5 mb-5">
                            <Code className="w-10 h-10 text-primary group-hover:text-white! transition-colors duration-800 stroke-[2.5]" />
                            <div className="mt-4 mb-3">
                                <h5 className="group-hover:text-white! text-lg font-bold my-2">Visual Design Mastery</h5>
                                <p className='group-hover:text-white!'>From branding to UX/UI, I bring stories to life through creative design that resonates.</p>
                            </div>
                        </div>
                        <div className="group w-full bg-white hover:bg-primary transition-colors duration-800 rounded-4xl p-12.5 md:p-8 lg:p-7.5 xl:p-12.5 mb-5">
                            <Code className="w-10 h-10 text-primary group-hover:text-white! transition-colors duration-800 stroke-[2.5]" />
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
            <section id="projects" className='w-full py-5 bg-[#ffffff5c] bg-no-repeat flex items-center'>
                <div className="w-full lg:w-10/12 xl:w-8/12 h-full grid gap-8 mx-auto px-4">
                    <div className="flex justify-center mb-8">
                        <div className="w-full md:w-8/12 lg:w-7/12 text-center">
                            <h2 className="text-4xl font-bold mb-5">Projects That Speak Volumes</h2>
                            <p className="text-sm">I believe in leaving a mark with every project I work on. These aren't just websites—they're experiences with a purpose. Dive into the stories behind the work.</p>
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 justify-center gap-5">
                        {/* <div className="gallery-filter">
                            <div className="portfolioFilter mb-lg-5 clearfix">
                                <a href="#" data-filter=".frontend" className="fables-forth-text-color">Front End</a>
                                <a href="#" data-filter=".backend" className="fables-forth-text-color">Back End</a>
                                <a href="#" data-filter=".fullstack" className="fables-forth-text-color">Full Stack</a>
                                <a href="#" data-filter=".wordpress" className="fables-forth-text-color">WordPress</a>
                            </div>
                            <div className="portfolioContainer mt-4">
                                @foreach ($projects as $data)
                                    <div className="{{ $data["category"] }} gallery-item">
                                        <div className="filter-img-block position-relative image-container translate-effect-right overflow-hidden rounded-3 shadow-lg">
                                            <img src="{{ asset($data["image"]) }}" alt="image">
                                            <div className="img-filter-overlay fables-main-color-transparent row m-0">
                                                <div className="text-white mb-4">
                                                    <h5 className="h5 fw-bold text-shadow">{{ $data["name"] }}</h5>
                                                    <p className="text-sm mb-2">{{ $data["title"] }}</p>
                                                    <a href="{{ url("/projects") }}/{{ $data["name"] }}"><span className="text-white">More Details >></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                @endforeach
                            </div>
                        </div> */}
                        
                    </div>
                    <div className="w-full flex justify-center mt-5">
                        <Link href="/projects" className="btn rounded-lg px-5 py-3">See the Full Journey</Link>
                    </div>
                </div>
            </section>
            {/* // <section id="workProcess">
            //     <div class="container">
            //         <div class="row justify-content-center">
            //             <div class="col-md-8 col-lg-7 text-center mb-5">
            //                 <h2 class="h2 hero-title">A Blend of Strategy, Design & Development</h2>
            //                 <p class="text-sm">I approach every project with a creative mind and a technical heart, using a seamless process that ensures excellence at every step.</p>
            //             </div>
            //         </div>
            //         <div class="row my-5">
            //             <div class="col-12">
            //                 <div class="row mb-5 mb-lg-0">
            //                     <div class="col-12 col-lg-5">
            //                         <div class="process-box process-left" data-aos="fade-right" data-aos-duration="1000">
            //                             <div class="row">
            //                                 <div class="col-md-5">
            //                                     <div class="process-step">
            //                                         <p class="m-0 p-0">Step</p>
            //                                         <h2 class="m-0 p-0">01</h2>
            //                                     </div>
            //                                 </div>
            //                                 <div class="col-md-7">
            //                                     <h5 class="fw-semibold mb-2">Discovery & Consultation</h5>
            //                                     <p class="text-sm leading-tight">I start with a deep dive into your goals, challenges, and audience. Through a video meeting, we uncover opportunities and align on objectives.</p>
            //                                 </div>
            //                             </div>
            //                         </div>
            //                     </div>
            //                     <div class="col-lg-2 d-none d-lg-block"></div>
            //                     <div class="col-lg-5 position-relative d-none d-lg-block">
            //                         <div class="process-point-right"></div>
            //                     </div>
            //                 </div>
            //                 <div class="row mb-5 mb-lg-0">
            //                     <div class="col-md-5 position-relative d-none d-lg-block">
            //                         <div class="process-point-left"></div>
            //                     </div>
            //                     <div class="col-md-2 d-none d-lg-block"></div>
            //                     <div class="col-12 col-lg-5">
            //                         <div class="process-box process-right" data-aos="fade-left" data-aos-duration="1000">
            //                             <div class="row">
            //                                 <div class="col-md-5">
            //                                     <div class="process-step">
            //                                         <p class="m-0 p-0">Step</p>
            //                                         <h2 class="m-0 p-0">02</h2>
            //                                     </div>
            //                                 </div>
            //                                 <div class="col-md-7">
            //                                     <h5 class="fw-semibold mb-2">Strategy & Planning</h5>
            //                                     <p class="text-sm leading-tight">Leveraging insights from Step 1, I craft a custom strategy—including wireframes, content outlines, and timelines. Your feedback shapes every detail.</p>
            //                                 </div>
            //                             </div>
            //                         </div>
            //                     </div>
            //                 </div>
            //                 <div class="row mb-5 mb-lg-0">
            //                     <div class="col-12 col-lg-5">
            //                         <div class="process-box process-left" data-aos="fade-right" data-aos-duration="1000">
            //                             <div class="row">
            //                                 <div class="col-md-5">
            //                                     <div class="process-step">
            //                                         <p class="m-0 p-0">Step</p>
            //                                         <h2 class="m-0 p-0">03</h2>
            //                                     </div>
            //                                 </div>
            //                                 <div class="col-md-7">
            //                                     <h5 class="fw-semibold mb-2">Design & Development</h5>
            //                                     <p class="text-sm leading-tight">I brings ideas to life with pixel-perfect designs and robust, scalable builds. Iterating based on your input, I use tools like Figma for design and React/WordPress for development.</p>
            //                                 </div>
            //                             </div>
            //                         </div>
            //                     </div>
            //                     <div class="col-md-2 d-none d-lg-block"></div>
            //                     <div class="col-md-5 position-relative d-none d-lg-block">
            //                         <div class="process-point-right"></div>
            //                     </div>
            //                 </div>
            //                 <div class="row mb-5 mb-lg-0">
            //                     <div class="col-md-5 position-relative d-none d-lg-block">
            //                         <div class="process-point-left"></div>
            //                     </div>
            //                     <div class="col-md-2 d-none d-lg-block"></div>
            //                     <div class="col-12 col-lg-5">
            //                         <div class="process-box process-right" data-aos="fade-left" data-aos-duration="1000">
            //                             <div class="row">
            //                                 <div class="col-md-5">
            //                                     <div class="process-step">
            //                                         <p class="m-0 p-0">Step</p>
            //                                         <h2 class="m-0 p-0">04</h2>
            //                                     </div>
            //                                 </div>
            //                                 <div class="col-md-7">
            //                                     <h5 class="fw-semibold mb-2">Testing & Launch</h5>
            //                                     <p class="text-sm leading-tight">I conduct thorough QA testing to ensure everything works flawlessly across devices. We launch together, with my hands-on support for a smooth rollout.</p>
            //                                 </div>
            //                             </div>
            //                         </div>
            //                     </div>
            //                 </div>
            //                 <div class="row mb-5 mb-lg-0">
            //                     <div class="col-12 col-lg-5">
            //                         <div class="process-box process-left" data-aos="fade-right" data-aos-duration="1000">
            //                             <div class="row">
            //                                 <div class="col-md-5">
            //                                     <div class="process-step">
            //                                         <p class="m-0 p-0">Step</p>
            //                                         <h2 class="m-0 p-0">05</h2>
            //                                     </div>
            //                                 </div>
            //                                 <div class="col-md-7">
            //                                     <h5 class="fw-semibold mb-2">Optimization & Growth</h5>
            //                                     <p class="text-sm leading-tight">After launch, I monitor performance with analytics and refine based on data. Ongoing tweaks keep your project evolving without the hassle.</p>
            //                                 </div>
            //                             </div>
            //                         </div>
            //                     </div>
            //                     <div class="col-md-2 d-none d-lg-block"></div>
            //                     <div class="col-md-5 position-relative d-none d-lg-block">
            //                         <div class="process-point-right process-last"></div>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //         <div class="row">
            //             <div class="col-12 d-flex justify-content-center mt-5">
            //                 <a href="{{ url('/contact') }}" class="btn btn-theme">Let's Collaborate</a>
            //             </div>
            //         </div>
            //     </div>
            // </section>
            // <section id="whyUs" class="py-5">
            //     <div class="container">
            //         <div class="row justify-content-between align-items-center my-5">
            //             <div class="col-12 col-lg-6 mb-5 mb-lg-0">
            //                 <h2 class="h2 hero-title">Why Choose Me</h2>
            //                 <p class="text-sm">As your one-person powerhouse, I deliver big-agency results with personal touch—no bureaucracy, just focused creativity.</p>
            //                 <img src="{{ asset('assets/images/why_choose_us1.png') }}" alt="Why Choose Me" class="img-fluid">
            //             </div>
            //             <div class="col-12 col-lg-6 col-xl-5">
            //                 @foreach ($whyBestArray as $whybest)
            //                     <div class="d-flex align-items-center gap-4 mb-4">
            //                         <div class="bg-color icon">
            //                             <span class="text-white fs-3">{!! $whybest['icon'] !!}</span>
            //                         </div>
            //                         <div class="content">
            //                             <h4 class="fw-semibold title-color mb-2">{{ $whybest['title'] }}</h4>
            //                             <p class="text-sm leading-tight">{{ $whybest['description'] }}</p>
            //                         </div>
            //                     </div>
            //                 @endforeach
            //             </div>
            //         </div>
            //     </div>
            // </section> */}
        </AppLayout>
    );
}
