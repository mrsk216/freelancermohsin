import Isotope from 'isotope-layout';
import React, { useEffect, useRef, useState } from 'react';
import './../../css/portfolio-filter-gallery.css';

type Project = {
    category: string;
    image: string;
    name: string;
    title: string;
};

type PortfolioGalleryProps = {
    projects: Project[];
};

const PortfolioGallery = ({ projects }: PortfolioGalleryProps) => {
    const gridRef = useRef<HTMLDivElement>(null);
    const isotopeRef = useRef<Isotope | null>(null);
    const [activeFilter, setActiveFilter] = useState('.frontend');

    useEffect(() => {
        // Initialize Isotope after component mounts
        if (gridRef.current && !isotopeRef.current) {
        isotopeRef.current = new Isotope(gridRef.current, {
            itemSelector: '.gallery-item',
            layoutMode: 'fitRows', // or 'masonry' based on your preference
            percentPosition: true,
            transitionDuration: '0.4s',
            stagger: 30,
            // If using masonry layout with different column widths
            masonry: {
            columnWidth: '.gallery-item'
            }
        });

        // Apply initial filter
        isotopeRef.current.arrange({ filter: activeFilter });
        }

        // Cleanup on component unmount
        return () => {
        if (isotopeRef.current) {
            isotopeRef.current.destroy();
            isotopeRef.current = null;
        }
        };
    }, []); // Empty dependency array - run once on mount

    // Handle filter changes
    const handleFilterClick = (filterValue: string, e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setActiveFilter(filterValue);

        if (isotopeRef.current) {
        isotopeRef.current.arrange({
            filter: filterValue
        });
        }
    };

    // Re-layout when projects change (if data is dynamic)
    useEffect(() => {
        if (isotopeRef.current && projects) {
        isotopeRef.current.layout();
        }
    }, [projects]);

    // Optional: Handle image loading to ensure proper layout
    useEffect(() => {
        if (isotopeRef.current) {
        // Relayout after all images are loaded
        const images = gridRef.current?.querySelectorAll('img');
        if (images) {
            let loadedCount = 0;
            const checkAllLoaded = () => {
            loadedCount++;
            if (loadedCount === images.length && isotopeRef.current) {
                isotopeRef.current.layout();
            }
            };

            images.forEach(img => {
            if (img.complete) {
                checkAllLoaded();
            } else {
                img.addEventListener('load', checkAllLoaded);
            }
            });
        }
        }
    }, [projects]);

    return (
        <div className="gallery-filter">
            <div className="p-0 text-center">
                <a
                href="#"
                data-filter=".frontend"
                className={`fables-forth-text-color ${activeFilter === '.frontend' ? 'active-filter' : ''}`}
                onClick={(e) => handleFilterClick('.frontend', e)}
                >
                Front End
                </a>
                <a
                href="#"
                data-filter=".backend"
                className={`fables-forth-text-color ${activeFilter === '.backend' ? 'active-filter' : ''}`}
                onClick={(e) => handleFilterClick('.backend', e)}
                >
                Back End
                </a>
                <a
                href="#"
                data-filter=".fullstack"
                className={`fables-forth-text-color ${activeFilter === '.fullstack' ? 'active-filter' : ''}`}
                onClick={(e) => handleFilterClick('.fullstack', e)}
                >
                Full Stack
                </a>
                <a
                href="#"
                data-filter=".wordpress"
                className={`fables-forth-text-color ${activeFilter === '.wordpress' ? 'active-filter' : ''}`}
                onClick={(e) => handleFilterClick('.wordpress', e)}
                >
                WordPress
                </a>
            </div>

            <div className="portfolioContainer mt-4" ref={gridRef}>
                {projects?.map((data, index) => (
                    <div
                        key={index}
                        className={`${data.category} gallery-item`}
                    >
                        <div className="filter-img-block relative image-container translate-effect-right overflow-hidden rounded-xl shadow-lg">
                            <img src={data.image} alt={data.name} className='w-full h-full rounded-xl' />
                            <div className="img-filter-overlay fables-main-color-transparent row m-0">
                                <div className="text-white mb-4 p-4">
                                    <h5 className="text-xl font-bold text-shadow">{data.name}</h5>
                                    <p className="line-clamp-2 text-sm mb-2">{data.title}</p>
                                    <a href={`/projects/${data.name}`}>
                                        <span className="text-white">More Details</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PortfolioGallery;
