import { Link, usePage } from '@inertiajs/react';
import { Home, Info, BookOpen, FolderOpenDot, Mails, PhoneCall, Mail, Facebook, MessageCircle, Youtube, Github, Linkedin, Menu } from 'lucide-react';
import AppLogo from '@/components/app-logo';
import type { AppLayoutProps } from '@/types';

export default ({ children }: AppLayoutProps) => (
    <>
        <nav className="bg-gray-100">
            <div className="flex w-full lg:w-9/12 xl:w-8/12 mx-auto items-center justify-center lg:justify-between px-3 py-4">
                <div>
                    <Link
                        href={'/'}
                        prefetch
                        className="w-[150px] flex"
                    >
                        <AppLogo/>
                    </Link>
                </div>
                {/* Desktop Navigation */}
                <ul className="hidden lg:flex gap-4">
                    <li><Link href="/" className={usePage().url === '/' ? 'font-bold text-gray-800' : 'font-bold text-gray-500 hover:text-gray-800'}>Home</Link></li>
                    <li><Link href="/about" className={usePage().url === '/about' ? 'font-bold text-gray-800' : 'font-bold text-gray-500 hover:text-gray-800'}>About</Link></li>
                    <li><Link href="/projects" className={usePage().url === '/projects' ? 'font-bold text-gray-800' : 'font-bold text-gray-500 hover:text-gray-800'}>Projects</Link></li>
                    <li><Link href="/blogs" className={usePage().url === '/blogs' ? 'font-bold text-gray-800' : 'font-bold text-gray-500 hover:text-gray-800'}>Blogs</Link></li>
                    <li><Link href="/contact" className={usePage().url === '/contact' ? 'font-bold text-gray-800' : 'font-bold text-gray-500 hover:text-gray-800'}>Contact</Link></li>
                </ul>                
            </div>            
        </nav>
        <div className="main">
            {children}
        </div>
        <footer className="bg-gray-900">
            <div className="w-full lg:w-9/12 xl:w-8/12 mx-auto px-3">
                <div className="block lg:flex justify-between gap-3 py-8">
                    <div className="w-full md:w-1/2 xl:w-1/3 text-white">
                        <h2 className="text-4xl/12 font-extrabold mb-5">Let's Do Something Great Together</h2>
                        <p>Feel free to knock me or just say "hello"</p>
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/3 text-white mt-8 lg:mt-3">
                        <h4 className="text-xl font-bold">Contact</h4>
                        <p className="my-5"><Link href="tel:+8801889704201" className='flex items-center gap-2'><PhoneCall className="h-5 w-5"/><span>+8801889704201</span></Link></p>
                        <p><Link href="mailto:freelancersk216@gmail.com" className='flex items-center gap-2'><Mail className="h-5 w-5"/><span>freelancersk216@gmail.com</span></Link></p>
                    </div>
                    <div className="w-full xl:w-1/3 text-white mt-8 lg:mt-3">
                        <h4 className="text-xl font-bold">Follow Me</h4>
                        <ul className="flex items-center gap-3 mt-5">
                            <li><Link href="https://www.facebook.com/mr.sk.216" target="_blank"><Facebook className="h-8 w-8"/></Link></li>
                            <li><Link href="https://wa.me/qr/L6CSSHJ5LXAWO1" target="_blank"><MessageCircle className="h-8 w-8"/></Link></li>
                            <li><Link href="https://www.youtube.com/@MrSK-xh2yz" target="_blank"><Youtube className="h-8 w-8"/></Link></li>
                            <li><Link href="https://github.com/mrsk216" target="_blank"><Github className="h-8 w-8"/></Link></li>
                            <li><Link href="https://www.linkedin.com/in/shekh-md-mohsin-3488a9214/" target="_blank"><Linkedin className="h-8 w-8"/></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="w-full text-white text-sm text-center border-t py-4">© Copyright {new Date().getFullYear()} . Made by Shekh Md Mohsin</div>
            </div>
        </footer>
        {/* Mobile Navigation */}
        <div className="fixed bottom-0 left-0 w-full bg-gray-100 lg:hidden">
            <ul className="flex justify-around py-3">
                <li><Link href="/"><Home className={usePage().url === '/' ? 'text-gray-800 h-6 w-6' : 'text-gray-500 h-5 w-5'}/></Link></li>
                <li><Link href="/about"><Info className={usePage().url === '/about' ? 'text-gray-800 h-6 w-6' : 'text-gray-500 h-5 w-5'}/></Link></li>
                <li><Link href="/projects"><FolderOpenDot className={usePage().url === '/projects' ? 'text-gray-800 h-6 w-6' : 'text-gray-500 h-5 w-5'}/></Link></li>
                <li><Link href="/blogs"><BookOpen className={usePage().url === '/blogs' ? 'text-gray-800 h-6 w-6' : 'text-gray-500 h-5 w-5'}/></Link></li>
                <li><Link href="/contact"><Mails className={usePage().url === '/contact' ? 'text-gray-800 h-6 w-6' : 'text-gray-500 h-5 w-5'}/></Link></li>
            </ul>
        </div>
    </>
);
