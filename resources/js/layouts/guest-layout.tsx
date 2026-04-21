import { Link, usePage } from '@inertiajs/react';
import AppLogo from '@/components/app-logo';
import type { AppLayoutProps } from '@/types';
import DynamicIcon from '@/components/DynamicIcon';
import { useTheme } from '@/hooks/use-theme';
import { useEffect, useRef, useState } from 'react';

const SCROLL_DELTA = 8;

/** `true` = hero has scrolled past; `false` = hero still visible; `null` = no hero marker (keep nav always visible). */
function getGuestHeroPastState(): boolean | null {
    const hero = document.querySelector<HTMLElement>('[data-guest-hero]');
    if (!hero) {
        return null;
    }
    const rect = hero.getBoundingClientRect();
    return rect.bottom <= SCROLL_DELTA;
}

export default function GuestLayout({ children }: AppLayoutProps) {
    const { url } = usePage();
    const { theme, toggleTheme } = useTheme();
    const lastScrollY = useRef(0);
    const ticking = useRef(false);
    const [navRevealed, setNavRevealed] = useState(true);

    useEffect(() => {
        lastScrollY.current = window.scrollY;

        const updateFromScroll = () => {
            const y = window.scrollY;
            const pastHero = getGuestHeroPastState();

            if (pastHero !== true) {
                setNavRevealed(true);
                lastScrollY.current = y;
                return;
            }

            const delta = y - lastScrollY.current;
            if (delta > SCROLL_DELTA) {
                setNavRevealed(false);
            } else if (delta < -SCROLL_DELTA) {
                setNavRevealed(true);
            }
            lastScrollY.current = y;
        };

        const onScroll = () => {
            if (ticking.current) {
                return;
            }
            ticking.current = true;
            requestAnimationFrame(() => {
                ticking.current = false;
                updateFromScroll();
            });
        };

        const onResize = () => {
            updateFromScroll();
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onResize);
        updateFromScroll();

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onResize);
        };
    }, [url]);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 z-10 w-full bg-gray-100 dark:bg-gray-900 transition-[transform,opacity] duration-300 ease-out motion-reduce:transition-none ${
                    navRevealed
                        ? 'translate-y-0 opacity-100'
                        : '-translate-y-full opacity-0 pointer-events-none'
                }`}
            >
                <div className="flex w-full lg:w-10/12 xl:w-8/12 mx-auto items-center justify-center lg:justify-between px-3 py-4">
                    <div>
                        <Link
                            href={'/'}
                            prefetch
                            className="w-[150px] flex"
                        >
                            <AppLogo/>
                        </Link>
                    </div>
                    <button
                        type="button"
                        onClick={toggleTheme}
                        className="lg:hidden font-bold text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100"
                        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                        title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                    >
                        <DynamicIcon
                            iconName={theme === 'dark' ? '<Sun/>' : '<Moon/>'}
                            classes="w-5 h-5 stroke-[2.5]"
                        />
                    </button>
                    {/* Desktop Navigation */}
                    <ul className="hidden lg:flex gap-8">
                        <li><Link href="/" className={url === '/' ? 'font-bold text-gray-800 dark:text-gray-100' : 'font-bold text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100'}>Home</Link></li>
                        <li><Link href="/about" className={url === '/about' ? 'font-bold text-gray-800 dark:text-gray-100' : 'font-bold text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100'}>About</Link></li>
                        <li><Link href="/projects" className={url === '/projects' ? 'font-bold text-gray-800 dark:text-gray-100' : 'font-bold text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100'}>Projects</Link></li>
                        <li><Link href="/blogs" className={url === '/blogs' ? 'font-bold text-gray-800 dark:text-gray-100' : 'font-bold text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100'}>Blogs</Link></li>
                        <li><Link href="/contact" className={url === '/contact' ? 'font-bold text-gray-800 dark:text-gray-100' : 'font-bold text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100'}>Contact</Link></li>
                        <li>
                            <button
                                type="button"
                                onClick={toggleTheme}
                                className="font-bold text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100"
                                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                            >
                                <DynamicIcon
                                    iconName={theme === 'dark' ? '<Sun/>' : '<Moon/>'}
                                    classes="w-5 h-5 stroke-[2.5]"
                                />
                            </button>
                        </li>
                    </ul>                
                </div>            
            </nav>
            <div className="main">
                {children}
            </div>
            <footer className="bg-gray-900 dark:bg-black">
                <div className="w-full lg:w-10/12 xl:w-8/12 mx-auto px-3">
                    <div className="block lg:flex justify-between gap-3 py-8">
                        <div className="w-full md:w-1/2 xl:w-1/3 text-white">
                            <h2 className="text-4xl/12 font-extrabold mb-5">Let's Do Something Great Together</h2>
                            <p>Feel free to knock me or just say "hello"</p>
                        </div>
                        <div className="w-full md:w-1/2 xl:w-1/3 text-white mt-8 lg:mt-3">
                            <h4 className="text-xl font-bold">Contact</h4>
                            <p className="my-5"><Link href="tel:+8801889704201" className='flex items-center gap-2'><DynamicIcon iconName='<PhoneCall/>' classes={'h-5 w-5'}/><span>+8801889704201</span></Link></p>
                            <p><Link href="mailto:freelancersk216@gmail.com" className='flex items-center gap-2'><DynamicIcon iconName='<Mail/>' classes={'h-5 w-5'}/><span>freelancersk216@gmail.com</span></Link></p>
                        </div>
                        <div className="w-full xl:w-1/3 text-white mt-8 lg:mt-3">
                            <h4 className="text-xl font-bold">Follow Me</h4>
                            <ul className="flex items-center gap-3 mt-5">
                                <li><Link href="https://www.facebook.com/mr.sk.216" target="_blank"><DynamicIcon iconName='<Facebook/>' classes={'h-8 w-8'}/></Link></li>
                                <li><Link href="https://wa.me/qr/L6CSSHJ5LXAWO1" target="_blank"><DynamicIcon iconName='<MessageCircle/>' classes={'h-8 w-8'}/></Link></li>
                                <li><Link href="https://www.youtube.com/@MrSK-xh2yz" target="_blank"><DynamicIcon iconName='<Youtube/>' classes={'h-8 w-8'}/></Link></li>
                                <li><Link href="https://github.com/mrsk216" target="_blank"><DynamicIcon iconName='<Github/>' classes={'h-8 w-8'}/></Link></li>
                                <li><Link href="https://www.linkedin.com/in/shekh-md-mohsin-3488a9214/" target="_blank"><DynamicIcon iconName='<Linkedin/>' classes={'h-8 w-8'}/></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full text-white text-sm text-center border-t py-4">© Copyright {new Date().getFullYear()} . Made by Shekh Md Mohsin</div>
                </div>
            </footer>
            <Link className='btn fixed top-1/2 left-[-3.8%] rotate-90 !tracking-[3px] font-black px-8 py-4'>Download CV</Link>
            {/* Mobile Navigation */}
            <div className="fixed bottom-0 left-0 w-full bg-gray-100 dark:bg-gray-900 lg:hidden">
                <ul className="flex justify-around py-3">
                    <li><Link href="/"><DynamicIcon iconName='<Home/>' classes={url === '/' ? 'text-gray-800 dark:text-gray-100 h-6 w-6' : 'text-gray-500 dark:text-gray-300 h-5 w-5'}/></Link></li>
                    <li><Link href="/about"><DynamicIcon iconName='<Info/>' classes={url === '/about' ? 'text-gray-800 dark:text-gray-100 h-6 w-6' : 'text-gray-500 dark:text-gray-300 h-5 w-5'}/></Link></li>
                    <li><Link href="/projects"><DynamicIcon iconName='<FolderOpenDot/>' classes={url === '/projects' ? 'text-gray-800 dark:text-gray-100 h-6 w-6' : 'text-gray-500 dark:text-gray-300 h-5 w-5'}/></Link></li>
                    <li><Link href="/blogs"><DynamicIcon iconName='<BookOpen/>' classes={url === '/blogs' ? 'text-gray-800 dark:text-gray-100 h-6 w-6' : 'text-gray-500 dark:text-gray-300 h-5 w-5'}/></Link></li>
                    <li><Link href="/contact"><DynamicIcon iconName='<Mails/>' classes={url === '/contact' ? 'text-gray-800 dark:text-gray-100 h-6 w-6' : 'text-gray-500 dark:text-gray-300 h-5 w-5'}/></Link></li>
                </ul>   
            </div>
        </>
    );
}
