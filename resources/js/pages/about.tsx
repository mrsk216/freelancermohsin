import DynamicIcon from '@/components/DynamicIcon';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/guest-layout';
import { useState } from 'react';

type skillItem = {
    icon: string;
    name: string;
    percentage: number;
};

type aboutProps = {
    skills: skillItem[]
}

export default function About({skills}: aboutProps){
    const [visibleSkillCount, setVisibleSkillCount] = useState(9);
    const visibleSkills = skills?.slice(0, visibleSkillCount) ?? [];
    const hasMoreSkills = visibleSkillCount < (skills?.length ?? 0);

    return (
        <AppLayout>
            <section id="whyUs" className="w-full py-5 bg-[#ffffff5c] dark:bg-[#161B1F] bg-no-repeat flex items-center mt-[65px]">
                <div className="w-full lg:w-10/12 xl:w-8/12 h-full grid gap-8 mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-5">
                        <div className="w-full grid items-center content-center mb-5 lg:mb-0">
                            <h2 className="text-4xl font-bold uppercase mb-5">Shekh Md Mohsin</h2>
                            <h6 className="text-md font-bold uppercase tracking-[3px] mb-2">A Professional web Developer based in Bangladesh</h6>
                            <p className="text-sm mb-2">I design and develop custom digital solutions for clients of all sizes—from startups to enterprises—specializing in stylish, modern websites, seamless web services, and high-converting online stores (using platforms like Shopify or WooCommerce). Every project is a close collaboration, blending your goals with intuitive functionality and SEO-ready performance to drive traffic and revenue.</p>
                            <p className="text-sm mb-2">My passion? Crafting bold, user-centric interfaces that spark meaningful interactions—vibrant designs, smooth animations, and accessible experiences that turn visitors into loyal fans. With expertise in UI/UX (Figma), front-end (React, HTML/CSS/JS), and back-end (Node.js, APIs), I deliver fast, scalable results that feel personal and powerful.</p>
                            <p className="text-sm mb-3">Let's build something bold—your vision, amplified.</p>
                            <div className="md:flex md:gap-4 mt-5">
                                <div>
                                    <p className='flex gap-3 mb-5'><DynamicIcon iconName='<User/>' classes="w-5 h-5 stroke-[2]" /> 26 years old</p>
                                    <p className='flex gap-3 mb-5'><DynamicIcon iconName='<Globe/>' classes="w-5 h-5 stroke-[2]" /> Bangladesh</p>
                                    <p className='flex gap-3'><DynamicIcon iconName='<Mail/>' classes="w-5 h-5 stroke-[2]" /> freelancersk216@gmail.com</p>
                                </div>
                                <div>
                                    <p className='flex gap-3 mb-5'><DynamicIcon iconName='<LocateFixed/>' classes="w-5 h-5 stroke-[2]" /> Harirampur,Manikganj</p>
                                    <p className='flex gap-3 mb-5'><DynamicIcon iconName='<Phone/>' classes="w-5 h-5 stroke-[2]" /> +8801889704201</p>
                                    <p className="flex gap-3 text-green-600"><DynamicIcon iconName='<Clock/>' classes="w-5 h-5 stroke-[2]" /> Available</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <img src="assets/images/Shekh_Md_Mohsin.png" alt="Shekh Md Mohsin" className="w-3/4 ml-auto" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full py-5 bg-[#F5F5F5] dark:bg-gray-900 bg-no-repeat flex items-center">
                <div className="w-full lg:w-10/12 xl:w-8/12 h-full grid gap-8 mx-auto px-4">
                    <div className="flex justify-center mb-8">
                        <div className="w-full md:w-8/12 lg:w-7/12 text-center">
                            <h2 className="text-4xl font-bold mb-5">My Skills</h2>
                            <p className="text-sm">Creative brand, website design and development studio that can bring your online business dreams to life</p>
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-3 gap-8">
                        {visibleSkills.map((skill, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-3 bg-white dark:bg-black rounded-[25px] shadow p-[2.5rem]"
                                style={{
                                    animationName: 'skillFadeUp',
                                    animationDuration: '560ms',
                                    animationTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
                                    animationFillMode: 'both',
                                    animationDelay: `${Math.max(i - 9, 0) * 70}ms`,
                                }}
                            >
                                <img src={skill.icon} alt={skill.name} className='w-12 h-12'/>
                                <div className='w-full'>
                                    <h1 className='text-xl font-bold mb-3'>{skill.name}</h1>
                                    <div className="w-full bg-gray-200 rounded-full h-4">
                                        <div className="bg-primary h-4 rounded-full transition-all duration-500 ease-out" style={{width: skill.percentage+'%'}}></div>
                                    </div>   
                                </div>  
                            </div>
                        ))}
                    </div>
                    {hasMoreSkills && (
                        <div className="flex justify-center mt-8">
                            <Button
                                type="button"
                                onClick={() => setVisibleSkillCount((prev) => prev + 6)}
                                className="h-auto px-6 py-3 rounded-full bg-primary text-white font-semibold transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-[0.98]"
                            >
                                Load More
                            </Button>
                        </div>
                    )}
                </div>
            </section>            
        </AppLayout>
    );
}