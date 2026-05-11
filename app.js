const { useState, useEffect, useRef, useMemo } = React;

const translations = {
  en: {
    phd: "My supervised Phd", equip: "Scientific Equipements", boards: "Embedded Boards", home: "Home", about: "About", teaching: "Teaching", research: "Research", publications: "Publications", projects: "Projects", academicProjects: "Academic Projects", learningApps: "Learning Apps", contact: "Contact", search: "Search...", viewResearch: "View Research", contactMe: "Contact Me", bio: "Biography", cv: "Download CV", expertise: "Areas of Expertise", courses: "Courses, laboratories, and educational resources", showMoreCourses: "Show More Courses", viewMaterials: "View Materials", hideMaterials: "Hide Materials", interests: "Research Interests", pubs: "Selected Publications", viewPaper: "View Paper", showMorePubs: "Show More Publications", showcase: "Showcase Projects", showMoreProj: "Show More Projects", dirProj: "Directed projects for Licence, Master, and Engineering", sortBy: "Sort By", date: "Date / Year", level: "Level", name: "Project Name", asc: "Ascending", desc: "Descending", showMoreAcad: "Show More Academic Projects", docCandidates: "Doctoral candidates under my supervision", completed: "Completed", inProgress: "In Progress", start: "Start", defense: "Defense", tools: "Laboratory tools and measurement devices", devBoards: "Development boards and microcontrollers", interact: "Interactive educational web applications", launch: "Launch App", getInTouch: "Get In Touch", info: "Contact Information", email: "Email", loc: "Location", follow: "Follow Me", sendMsg: "Send a Message", subj: "Subject", msg: "Message", send: "Send Message", back: "Back to Home", backPort: "Back to Portfolio", all: "All", noMatch: "No matches found for", tryAdj: "Try adjusting your search terms", authors: "Authors", quartile: "Quartile", filter: "Filter", allQuartiles: "All Quartiles", allYears: "All Years", exportCsv: "Export CSV", allLevels: "All Levels"
  },
  fr: {
    phd: "Mes doctorants", equip: "Équipements", boards: "Cartes embarquées", home: "Accueil", about: "À propos", teaching: "Enseignement", research: "Recherche", publications: "Publications", projects: "Projets", academicProjects: "Projets Dirigés", learningApps: "Apps Éducatives", contact: "Contact", search: "Chercher...", viewResearch: "Voir la recherche", contactMe: "Me contacter", bio: "Biographie", cv: "Télécharger CV", expertise: "Domaines d'expertise", courses: "Cours, laboratoires et ressources", showMoreCourses: "Voir plus de cours", viewMaterials: "Voir les documents", hideMaterials: "Cacher", interests: "Intérêts de recherche", pubs: "Publications", viewPaper: "Voir l'article", showMorePubs: "Voir plus", showcase: "Projets", showMoreProj: "Voir plus", dirProj: "Projets dirigés pour Licence, Master et Ingénieur", sortBy: "Trier par", date: "Date / Année", level: "Niveau", name: "Nom du projet", asc: "Croissant", desc: "Décroissant", showMoreAcad: "Voir plus", docCandidates: "Doctorants sous ma direction", completed: "Terminé", inProgress: "En cours", start: "Début", defense: "Soutenance", tools: "Outils de laboratoire et appareils", devBoards: "Cartes de développement", interact: "Applications web éducatives", launch: "Lancer", getInTouch: "Contact", info: "Coordonnées", email: "E-mail", loc: "Emplacement", follow: "Suivez-moi", sendMsg: "Envoyer un message", subj: "Sujet", msg: "Message", send: "Envoyer", back: "Retour", backPort: "Retour au portfolio", all: "Tous", noMatch: "Aucun résultat pour", tryAdj: "Essayez d'autres termes", authors: "Auteurs", quartile: "Quartile", filter: "Filtrer", allQuartiles: "Tous les Quartiles", allYears: "Toutes les Années", exportCsv: "Exporter CSV", allLevels: "Tous les Niveaux"
  },
  ar: {
    phd: "الدكتوراه تحت إشرافي", equip: "المعدات العلمية", boards: "اللوحات المدمجة", home: "الرئيسية", about: "حول", teaching: "التدريس", research: "البحث", publications: "المنشورات", projects: "المشاريع", academicProjects: "المشاريع الأكاديمية", learningApps: "تطبيقات تعليمية", contact: "اتصل", search: "بحث...", viewResearch: "عرض الأبحاث", contactMe: "اتصل بي", bio: "السيرة الذاتية", cv: "تحميل السيرة الذاتية", expertise: "مجالات الخبرة", courses: "الدروس والمختبرات والموارد التعليمية", showMoreCourses: "عرض المزيد", viewMaterials: "عرض المواد", hideMaterials: "إخفاء", interests: "اهتمامات البحث", pubs: "منشورات مختارة", viewPaper: "عرض المقال", showMorePubs: "عرض المزيد", showcase: "مشاريع العرض", showMoreProj: "عرض المزيد", dirProj: "المشاريع الموجهة لليسانس والماستر والمهندس", sortBy: "ترتيب حسب", date: "التاريخ / السنة", level: "المستوى", name: "اسم المشروع", asc: "تصاعدي", desc: "تنازلي", showMoreAcad: "عرض المزيد", docCandidates: "مرشحو الدكتوراه تحت إشرافي", completed: "مكتمل", inProgress: "قيد الإنجاز", start: "البداية", defense: "المناقشة", tools: "أدوات المختبر وأجهزة القياس", devBoards: "لوحات التطوير والمتحكمات الدقيقة", interact: "تطبيقات ويب تعليمية تفاعلية", launch: "تشغيل التطبيق", getInTouch: "ابقى على تواصل", info: "معلومات الاتصال", email: "البريد الإلكتروني", loc: "الموقع", follow: "تابعني", sendMsg: "إرسال رسالة", subj: "الموضوع", msg: "الرسالة", send: "إرسال", back: "العودة", backPort: "العودة للمحفظة", all: "الكل", noMatch: "لا توجد نتائج لـ", tryAdj: "حاول تعديل كلمات البحث", authors: "المؤلفون", quartile: "الربع", filter: "تصفية", allQuartiles: "جميع الأرباع", allYears: "جميع السنوات", exportCsv: "تصدير CSV", allLevels: "جميع المستويات"
  }
};

// Custom Hook for Scroll Animation
const useScrollAnimation = () => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setIsVisible(entry.isIntersecting));
        });

        const { current } = domRef;
        if (current) {
            observer.observe(current);
        }

        return () => {
            if (current) {
                observer.unobserve(current);
            }
        };
    }, []);

    return [domRef, isVisible];
};

const FadeInSection = ({ children }) => {
    const [domRef, isVisible] = useScrollAnimation();

    return (
        <div className={`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
            {children}
        </div>
    );
};

const TopBar = ({ darkMode, setDarkMode, searchQuery, setSearchQuery, performSearch, setCurrentApp, setViewingSection, lang, setLang, t, socialLinks }) => {
    return (
        <div className="container-fluid py-2 d-flex flex-column flex-md-row justify-content-between align-items-center px-4" style={{ backgroundColor: darkMode ? '#212529' : '#e9ecef' }}>
            <ul className="nav mb-2 mb-md-0 d-flex flex-nowrap overflow-auto" style={{ whiteSpace: 'nowrap' }}>
                <li className="nav-item">
                    <a className={`nav-link fw-bold px-2 ${darkMode ? 'text-light' : 'text-primary'}`} style={{ fontSize: '0.9rem' }} href="#supervised-phd" onClick={() => { setCurrentApp(null); setViewingSection(null); }}>
                        {t.phd}
                    </a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link fw-bold px-2 ${darkMode ? 'text-light' : 'text-primary'}`} style={{ fontSize: '0.9rem' }} href="#scientific-equipments" onClick={() => { setCurrentApp(null); setViewingSection(null); }}>
                        {t.equip}
                    </a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link fw-bold px-2 ${darkMode ? 'text-light' : 'text-primary'}`} style={{ fontSize: '0.9rem' }} href="#embedded-boards" onClick={() => { setCurrentApp(null); setViewingSection(null); }}>
                        {t.boards}
                    </a>
                </li>
            </ul>

            <div className="d-flex align-items-center gap-2">
                {socialLinks && (
                    <div className="d-flex gap-1 me-2 border-end pe-3 border-secondary">
                        {socialLinks.linkedin && socialLinks.linkedin !== '#' && <a href={socialLinks.linkedin} target="_blank" className={`btn btn-sm py-0 px-1 fs-5 ${darkMode ? 'text-light' : 'text-primary'}`}><i className="bi bi-linkedin"></i></a>}
                        {socialLinks.youtube && socialLinks.youtube !== '#' && <a href={socialLinks.youtube} target="_blank" className="btn btn-sm py-0 px-1 fs-5 text-danger"><i className="bi bi-youtube"></i></a>}
                        {socialLinks.github && socialLinks.github !== '#' && <a href={socialLinks.github} target="_blank" className={`btn btn-sm py-0 px-1 fs-5 ${darkMode ? 'text-light' : 'text-dark'}`}><i className="bi bi-github"></i></a>}
                        {socialLinks.orcid && socialLinks.orcid !== '#' && <a href={socialLinks.orcid} target="_blank" className="btn btn-sm py-0 px-1 fs-5 text-success"><i className="bi bi-globe"></i></a>}
                    </div>
                )}
                <select 
                    className={`form-select form-select-sm border rounded ${darkMode ? 'bg-secondary text-white border-secondary' : 'bg-white border-light'}`} 
                    style={{ width: '100px' }}
                    value={lang}
                    onChange={(e) => setLang(e.target.value)}
                >
                    <option value="en">English</option>
                    <option value="fr">Français</option>
                    <option value="ar">العربية</option>
                </select>

                <form className="d-flex m-0" onSubmit={e => { e.preventDefault(); performSearch(); }}>
                    <div className="input-group input-group-sm">
                        <input 
                            className={`form-control ${darkMode ? 'bg-secondary text-white placeholder-light border-secondary' : 'bg-white border-light'}`} 
                            type="search" 
                            placeholder={t.search} 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button className={`btn ${darkMode ? 'btn-secondary border-secondary' : 'btn-white border-light bg-white text-primary'}`} type="submit">
                            <i className="bi bi-search"></i>
                        </button>
                    </div>
                </form>

                <button
                    className={`btn btn-sm ${darkMode ? 'btn-outline-light' : 'btn-light text-primary border'}`}
                    onClick={() => setDarkMode(!darkMode)}
                    aria-label="Toggle dark mode"
                    style={{ width: '32px', height: '32px', padding: 0 }}
                >
                    <i className={`bi ${darkMode ? 'bi-sun-fill' : 'bi-moon-fill'}`}></i>
                </button>
            </div>
        </div>
    );
};

const Navbar = ({ darkMode, setDarkMode, title, setCurrentApp, setViewingSection, searchQuery, setSearchQuery, performSearch, lang, setLang, t, socialLinks }) => {
    return (
        <div className="fixed-top shadow-sm" style={{ zIndex: 1030 }}>
            <TopBar 
                darkMode={darkMode} 
                setDarkMode={setDarkMode} 
                searchQuery={searchQuery} 
                setSearchQuery={setSearchQuery} 
                performSearch={performSearch} 
                setCurrentApp={setCurrentApp} 
                setViewingSection={setViewingSection}
                lang={lang}
                setLang={setLang}
                t={t}
                socialLinks={socialLinks}
            />
            
            <nav id="main-navbar" className={`navbar navbar-expand-xl ${darkMode ? 'navbar-dark bg-dark' : 'navbar-dark bg-primary'} px-4`}>
                <div className="container-fluid">
                    <a className="navbar-brand text-white fw-bold me-3" href="#home" onClick={() => { setCurrentApp(null); setViewingSection(null); }}>
                        {title}
                    </a>
                    <button className="navbar-toggler text-white border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto mb-2 mb-xl-0 align-items-xl-center">
                            <li className="nav-item"><a className="nav-link text-white px-1 px-xl-2" style={{ whiteSpace: 'nowrap', fontSize: '0.85rem' }} href="#home" onClick={() => { setCurrentApp(null); setViewingSection(null); }}>{t.home}</a></li>
                            <li className="nav-item"><a className="nav-link text-white px-1 px-xl-2" style={{ whiteSpace: 'nowrap', fontSize: '0.85rem' }} href="#about" onClick={() => { setCurrentApp(null); setViewingSection(null); }}>{t.about}</a></li>
                            <li className="nav-item"><a className="nav-link text-white px-1 px-xl-2" style={{ whiteSpace: 'nowrap', fontSize: '0.85rem' }} href="#teaching" onClick={() => { setCurrentApp(null); setViewingSection(null); }}>{t.teaching}</a></li>
                            <li className="nav-item"><a className="nav-link text-white px-1 px-xl-2" style={{ whiteSpace: 'nowrap', fontSize: '0.85rem' }} href="#research" onClick={() => { setCurrentApp(null); setViewingSection(null); }}>{t.research}</a></li>
                            <li className="nav-item"><a className="nav-link text-white px-1 px-xl-2" style={{ whiteSpace: 'nowrap', fontSize: '0.85rem' }} href="#publications" onClick={() => { setCurrentApp(null); setViewingSection(null); }}>{t.publications}</a></li>
                            <li className="nav-item"><a className="nav-link text-white px-1 px-xl-2" style={{ whiteSpace: 'nowrap', fontSize: '0.85rem' }} href="#projects" onClick={() => { setCurrentApp(null); setViewingSection(null); }}>{t.projects}</a></li>
                            <li className="nav-item"><a className="nav-link text-white px-1 px-xl-2" style={{ whiteSpace: 'nowrap', fontSize: '0.85rem' }} href="#academic-projects" onClick={() => { setCurrentApp(null); setViewingSection(null); }}>{t.academicProjects}</a></li>
                            <li className="nav-item"><a className="nav-link text-white px-1 px-xl-2" style={{ whiteSpace: 'nowrap', fontSize: '0.85rem' }} href="#learning-apps" onClick={() => { setCurrentApp(null); setViewingSection(null); }}>{t.learningApps}</a></li>
                            <li className="nav-item"><a className="nav-link text-white px-1 px-xl-2" style={{ whiteSpace: 'nowrap', fontSize: '0.85rem' }} href="#contact" onClick={() => { setCurrentApp(null); setViewingSection(null); }}>{t.contact}</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

const Hero = ({ data, t }) => {
    return (
        <section id="home" className="hero-section section-bg-1">
            <div className="container">
                <div className="row align-items-center flex-column-reverse flex-md-row">
                    <div className="col-md-7 text-center text-md-start mt-5 mt-md-0">
                        <h1 className="display-4 fw-bold mb-3">
                            Hello, I'm <span className="text-primary">{data.title}</span>
                        </h1>
                        <h2 className="h4 text-muted mb-4 fw-normal">
                            {data.subtitle}
                        </h2>
                        <p className="lead mb-5">
                            {data.description}
                        </p>
                        <div className="d-flex gap-3 justify-content-center justify-content-md-start">
                            <a href="#research" className="btn btn-primary btn-lg">{t.viewResearch}</a>
                            <a href="#contact" className="btn btn-outline-primary btn-lg">{t.contactMe}</a>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="hero-img-container">
                            <div className="hero-shape"></div>
                            <img
                                src={data.imgUrl || "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}
                                alt={data.title}
                                className="hero-img"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const About = ({ data, t }) => {
    return (
        <section id="about" className="py-5 section-bg-1">
            <FadeInSection>
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <h2 className="section-title">{t.about}</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <h3 className="h4 mb-3">{t.bio}</h3>
                            {data.biography.split('\n').map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                            {data.cvUrl && data.cvUrl !== '#' && (
                                <a href={data.cvUrl} target="_blank" className="btn btn-outline-primary mt-3">
                                    <i className="bi bi-download me-2"></i> {t.cv}
                                </a>
                            )}
                        </div>
                        <div className="col-lg-6">
                            <h3 className="h4 mb-4">{t.expertise}</h3>
                            {data.skills.map((skill, index) => (
                                <div className="mb-3" key={index}>
                                    <div className="d-flex justify-content-between mb-1">
                                        <span className="fw-medium">{skill.name}</span>
                                        <span className="text-muted">{skill.level}%</span>
                                    </div>
                                    <div className="progress">
                                        <div
                                            className="progress-bar bg-primary"
                                            role="progressbar"
                                            style={{ width: `${skill.level}%` }}
                                            aria-valuenow={skill.level}
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </FadeInSection>
        </section>
    );
};

const CourseCard = ({ course, t }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    return (
        <div className="card text-center p-4 h-100 d-flex flex-column shadow-sm border-0">
            <div className="mb-3">
                <i className={`bi ${course.icon} display-4 text-primary`}></i>
            </div>
            <h4 className="h5 card-title">{course.title}</h4>
            <p className="card-text small text-muted mt-3 mb-4">{course.desc}</p>
            <div className="mt-auto position-relative">
                {course.materials && course.materials.length > 0 ? (
                    <div className="w-100">
                        <button className="btn btn-sm btn-outline-primary w-100" onClick={() => setDropdownOpen(!dropdownOpen)}>
                            <i className="bi bi-folder2-open me-1"></i> {dropdownOpen ? t.hideMaterials : t.viewMaterials}
                        </button>
                        {dropdownOpen && (
                            <ul className="list-group mt-2 text-start position-absolute w-100 shadow" style={{ zIndex: 1000 }}>
                                {course.materials.map((mat, idx) => (
                                    <a key={idx} href={mat.url} target="_blank" className="list-group-item list-group-item-action d-flex align-items-center text-truncate py-2">
                                        <i className="bi bi-file-earmark-text me-2 text-primary"></i> 
                                        <span style={{ fontSize: '0.85rem' }}>{mat.name}</span>
                                    </a>
                                ))}
                            </ul>
                        )}
                    </div>
                ) : (
                    <span className="text-muted small border rounded p-2 d-block bg-light">No materials available</span>
                )}
            </div>
        </div>
    );
};

const Teaching = ({ data, limit, onShowMore, t }) => {
    const displayData = limit && data.length > limit ? data.slice(0, limit) : data;

    return (
        <section id="teaching" className="py-5 section-bg-2">
            <FadeInSection>
                <div className="container py-4">
                    <div className="text-center mb-5">
                        <h2 className="section-title">{t.teaching}</h2>
                        <p className="text-muted">{t.courses}</p>
                    </div>
                    <div className="row g-4">
                        {displayData.map((course, index) => (
                            <div className="col-md-6 col-lg-3" key={index}>
                                <CourseCard course={course} t={t} />
                            </div>
                        ))}
                    </div>
                    {limit && data.length > limit && (
                        <div className="text-center mt-5">
                            <button className="btn btn-outline-primary" onClick={onShowMore}>{t.showMoreCourses}</button>
                        </div>
                    )}
                </div>
            </FadeInSection>
        </section>
    );
};

const Research = ({ data, socialLinks, t }) => {
    return (
        <section id="research" className="py-5 section-bg-1">
            <FadeInSection>
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <h2 className="section-title">{t.research}</h2>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <h3 className="h4 mb-3">{t.interests}</h3>
                            <ul className="list-group list-group-flush bg-transparent">
                                {data.interests.map((interest, idx) => (
                                    <li className="list-group-item bg-transparent d-flex align-items-start border-0 px-0" key={idx}>
                                        <i className="bi bi-check-circle-fill text-primary me-3 mt-1"></i>
                                        <span>{interest}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-4 d-flex gap-3">
                                {socialLinks.googleScholar && socialLinks.googleScholar !== '#' && (
                                    <a href={socialLinks.googleScholar} target="_blank" className="btn btn-light border shadow-sm"><i className="bi bi-google me-2 text-danger"></i> Google Scholar</a>
                                )}
                                {socialLinks.scopus && socialLinks.scopus !== '#' && (
                                    <a href={socialLinks.scopus} target="_blank" className="btn btn-light border shadow-sm"><i className="bi bi-journal-text me-2 text-primary"></i> Scopus</a>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row g-3">
                                <div className="col-6">
                                    <div className="card p-4 text-center text-white bg-primary border-0 h-100 shadow-sm">
                                        <h2 className="display-4 fw-bold mb-0 text-white">{data.hIndex}</h2>
                                        <p className="mb-0 fw-medium text-white">h-index</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="card p-4 text-center text-success bg-success bg-opacity-10 border-0 h-100 shadow-sm">
                                        <h2 className="display-4 fw-bold mb-0">{data.publicationsCount}</h2>
                                        <p className="mb-0 fw-medium">Publications</p>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="card p-4 text-center text-warning bg-warning bg-opacity-10 border-0 shadow-sm">
                                        <h2 className="display-4 fw-bold mb-0">{data.totalCitations}</h2>
                                        <p className="mb-0 fw-medium">Total Citations</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeInSection>
        </section>
    );
};

const Publications = ({ data, socialLinks, limit, onShowMore, t }) => {
    const [sortBy, setSortBy] = useState('year');
    const [sortOrder, setSortOrder] = useState('desc');
    const [filterQuartile, setFilterQuartile] = useState('all');
    const [filterYear, setFilterYear] = useState('all');

    const quartiles = useMemo(() => {
        if (!data) return [];
        const q = new Set(data.map(p => p.quartile).filter(Boolean));
        return Array.from(q).sort();
    }, [data]);
    
    const years = useMemo(() => {
        if (!data) return [];
        const y = new Set(data.map(p => p.year).filter(Boolean));
        return Array.from(y).sort((a, b) => b - a);
    }, [data]);

    const displayData = useMemo(() => {
        if (!data) return [];
        let result = [...data];

        if (!limit) {
            if (filterQuartile !== 'all') {
                result = result.filter(p => p.quartile === filterQuartile);
            }
            if (filterYear !== 'all') {
                result = result.filter(p => p.year?.toString() === filterYear?.toString());
            }

            result.sort((a, b) => {
                let valA = a[sortBy] || '';
                let valB = b[sortBy] || '';

                if (sortBy === 'year') {
                    valA = parseInt(valA) || 0;
                    valB = parseInt(valB) || 0;
                } else {
                    valA = valA.toString().toLowerCase();
                    valB = valB.toString().toLowerCase();
                }

                if (valA < valB) return sortOrder === 'asc' ? -1 : 1;
                if (valA > valB) return sortOrder === 'asc' ? 1 : -1;
                return 0;
            });
        }

        return limit && result.length > limit ? result.slice(0, limit) : result;
    }, [data, filterQuartile, filterYear, sortBy, sortOrder, limit]);

    const handleExport = () => {
        const headers = ['Title', 'Authors', 'Journal', 'Year', 'Quartile', 'Link'];
        const csvRows = [headers.join(',')];
        
        displayData.forEach(pub => {
            const row = [
                `"${(pub.title || '').replace(/"/g, '""')}"`,
                `"${(pub.authors || '').replace(/"/g, '""')}"`,
                `"${(pub.journal || '').replace(/"/g, '""')}"`,
                `"${pub.year || ''}"`,
                `"${pub.quartile || ''}"`,
                `"${pub.link && pub.link !== '#' ? pub.link : ''}"`
            ];
            csvRows.push(row.join(','));
        });
        
        const csvContent = "data:text/csv;charset=utf-8," + encodeURIComponent(csvRows.join('\n'));
        const link = document.createElement("a");
        link.setAttribute("href", csvContent);
        link.setAttribute("download", "publications_export.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="publications" className="py-5 section-bg-2">
            <FadeInSection>
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <h2 className="section-title">{t.pubs}</h2>
                    </div>

                    {!limit && (
                        <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-3 bg-light p-3 rounded shadow-sm">
                            <div className="d-flex flex-wrap gap-3 align-items-center">
                                <div className="d-flex align-items-center gap-2">
                                    <span className="fw-medium text-muted">{t.sortBy}:</span>
                                    <select className="form-select form-select-sm w-auto border-0 shadow-sm" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                                        <option value="year">{t.date}</option>
                                        <option value="title">{t.name}</option>
                                        <option value="authors">{t.authors}</option>
                                        <option value="quartile">{t.quartile}</option>
                                    </select>
                                    <button className="btn btn-sm btn-outline-secondary bg-white border-0 shadow-sm" onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}>
                                        <i className={`bi bi-sort-${sortOrder === 'asc' ? 'down' : 'up'}`}></i>
                                    </button>
                                </div>
                                
                                <div className="d-flex align-items-center gap-2">
                                    <span className="fw-medium text-muted">{t.filter}:</span>
                                    <select className="form-select form-select-sm w-auto border-0 shadow-sm" value={filterQuartile} onChange={(e) => setFilterQuartile(e.target.value)}>
                                        <option value="all">{t.allQuartiles}</option>
                                        {quartiles.map(q => <option key={q} value={q}>{q}</option>)}
                                    </select>
                                    <select className="form-select form-select-sm w-auto border-0 shadow-sm" value={filterYear} onChange={(e) => setFilterYear(e.target.value)}>
                                        <option value="all">{t.allYears}</option>
                                        {years.map(y => <option key={y} value={y}>{y}</option>)}
                                    </select>
                                </div>
                            </div>
                            
                            <button className="btn btn-sm btn-success shadow-sm" onClick={handleExport}>
                                <i className="bi bi-download me-1"></i> {t.exportCsv}
                            </button>
                        </div>
                    )}

                    <div className="card p-0 overflow-hidden shadow-sm border-0">
                        <div className="list-group list-group-flush">
                            {displayData.map((pub, index) => (
                                <div className="list-group-item p-4 border-bottom-0" key={index}>
                                    <div className="d-flex w-100 justify-content-between mb-2">
                                        <h5 className="mb-1 text-primary">{pub.title}</h5>
                                        <div className="d-flex gap-2">
                                            {pub.quartile && <span className="badge bg-primary rounded-pill align-self-start">{pub.quartile}</span>}
                                            <span className="badge bg-secondary rounded-pill align-self-start">{pub.year}</span>
                                        </div>
                                    </div>
                                    <p className="mb-1 fw-medium">{pub.authors}</p>
                                    <p className="text-muted small mb-3"><i>{pub.journal}</i></p>
                                    {pub.link && pub.link !== '#' && (
                                        <a href={pub.link} target="_blank" className="btn btn-sm btn-outline-secondary">
                                            <i className="bi bi-box-arrow-up-right me-1"></i> {t.viewPaper}
                                        </a>
                                    )}
                                </div>
                            ))}
                            {displayData.length === 0 && !limit && (
                                <div className="p-4 text-center text-muted">
                                    No publications match the selected filters.
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="text-center mt-4 d-flex justify-content-center gap-3">
                        {limit && data.length > limit && (
                            <button className="btn btn-outline-primary" onClick={onShowMore}>{t.showMorePubs}</button>
                        )}
                        {socialLinks.googleScholar && socialLinks.googleScholar !== '#' && !limit && (
                            <a href={socialLinks.googleScholar} target="_blank" className="btn btn-outline-secondary">View All on Google Scholar</a>
                        )}
                    </div>
                </div>
            </FadeInSection>
        </section>
    );
};

const Projects = ({ data, limit, onShowMore, t }) => {
    const displayData = limit && data.length > limit ? data.slice(0, limit) : data;

    return (
        <section id="projects" className="py-5 section-bg-1">
            <FadeInSection>
                <div className="container py-4">
                    <div className="text-center mb-5">
                        <h2 className="section-title">{t.showcase}</h2>
                    </div>
                    <div className="row g-4">
                        {displayData.map((proj, index) => (
                            <div className="col-md-4" key={index}>
                                <div className="card h-100 overflow-hidden shadow-sm border-0">
                                    <img src={proj.img || "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&q=80"} className="card-img-top" alt={proj.title} style={{ height: '200px', objectFit: 'cover' }} />
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">{proj.title}</h5>
                                        <p className="card-text text-muted small">{proj.desc}</p>
                                        <div className="mt-auto mb-3">
                                            {proj.tags && proj.tags.map((tag, i) => (
                                                <span className="badge bg-light text-dark border me-2 mb-2" key={i}>{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {limit && data.length > limit && (
                        <div className="text-center mt-5">
                            <button className="btn btn-outline-primary" onClick={onShowMore}>{t.showMoreProj}</button>
                        </div>
                    )}
                </div>
            </FadeInSection>
        </section>
    );
};

const AcademicProjects = ({ data, limit, onShowMore, t }) => {
    const [sortBy, setSortBy] = useState('year');
    const [sortOrder, setSortOrder] = useState('desc');
    const [filterLevel, setFilterLevel] = useState('all');
    const [filterYear, setFilterYear] = useState('all');

    const levels = useMemo(() => {
        if (!data) return [];
        const l = new Set(data.map(p => p.level).filter(Boolean));
        return Array.from(l).sort();
    }, [data]);

    const years = useMemo(() => {
        if (!data) return [];
        const y = new Set(data.map(p => {
            if (!p.year) return '';
            return p.year.toString().split('-')[0];
        }).filter(Boolean));
        return Array.from(y).sort((a, b) => b - a);
    }, [data]);

    const displayData = useMemo(() => {
        if (!data) return [];
        let result = [...data];

        if (!limit) {
            if (filterLevel !== 'all') {
                result = result.filter(p => p.level === filterLevel);
            }
            if (filterYear !== 'all') {
                result = result.filter(p => p.year?.toString().split('-')[0] === filterYear);
            }

            result.sort((a, b) => {
                let valA = a[sortBy] || '';
                let valB = b[sortBy] || '';

                if (sortBy === 'year') {
                    valA = new Date(valA).getTime() || 0;
                    valB = new Date(valB).getTime() || 0;
                } else {
                    valA = valA.toString().toLowerCase();
                    valB = valB.toString().toLowerCase();
                }

                if (valA < valB) return sortOrder === 'asc' ? -1 : 1;
                if (valA > valB) return sortOrder === 'asc' ? 1 : -1;
                return 0;
            });
        }

        return limit && result.length > limit ? result.slice(0, limit) : result;
    }, [data, filterLevel, filterYear, sortBy, sortOrder, limit]);

    if (!data || data.length === 0) return null;

    const handleExport = () => {
        const headers = ['Project Name', 'Level', 'Date/Year', 'Description'];
        const csvRows = [headers.join(',')];
        
        displayData.forEach(proj => {
            const row = [
                `"${(proj.title || '').replace(/"/g, '""')}"`,
                `"${(proj.level || '').replace(/"/g, '""')}"`,
                `"${(proj.year || '').replace(/"/g, '""')}"`,
                `"${(proj.desc || '').replace(/"/g, '""')}"`
            ];
            csvRows.push(row.join(','));
        });
        
        const csvContent = "data:text/csv;charset=utf-8," + encodeURIComponent(csvRows.join('\n'));
        const link = document.createElement("a");
        link.setAttribute("href", csvContent);
        link.setAttribute("download", "academic_projects_export.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="academic-projects" className="py-5 section-bg-2">
            <FadeInSection>
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <h2 className="section-title">{t.academicProjects}</h2>
                        <p className="text-muted">{t.dirProj}</p>
                    </div>

                    {!limit && (
                        <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-3 bg-light p-3 rounded shadow-sm">
                            <div className="d-flex flex-wrap gap-3 align-items-center">
                                <div className="d-flex align-items-center gap-2">
                                    <span className="fw-medium text-muted">{t.sortBy}:</span>
                                    <select className="form-select form-select-sm w-auto border-0 shadow-sm" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                                        <option value="year">{t.date}</option>
                                        <option value="level">{t.level}</option>
                                        <option value="title">{t.name}</option>
                                    </select>
                                    <button className="btn btn-sm btn-outline-secondary bg-white border-0 shadow-sm" onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}>
                                        <i className={`bi bi-sort-${sortOrder === 'asc' ? 'down' : 'up'}`}></i>
                                    </button>
                                </div>
                                
                                <div className="d-flex align-items-center gap-2">
                                    <span className="fw-medium text-muted">{t.filter}:</span>
                                    <select className="form-select form-select-sm w-auto border-0 shadow-sm" value={filterLevel} onChange={(e) => setFilterLevel(e.target.value)}>
                                        <option value="all">{t.allLevels || 'All Levels'}</option>
                                        {levels.map(l => <option key={l} value={l}>{l}</option>)}
                                    </select>
                                    <select className="form-select form-select-sm w-auto border-0 shadow-sm" value={filterYear} onChange={(e) => setFilterYear(e.target.value)}>
                                        <option value="all">{t.allYears || 'All Years'}</option>
                                        {years.map(y => <option key={y} value={y}>{y}</option>)}
                                    </select>
                                </div>
                            </div>
                            
                            <button className="btn btn-sm btn-success shadow-sm" onClick={handleExport}>
                                <i className="bi bi-download me-1"></i> {t.exportCsv || 'Export CSV'}
                            </button>
                        </div>
                    )}

                    <div className="row g-4">
                        {displayData.map((proj, idx) => (
                            <div className="col-md-6" key={idx}>
                                <div className="card h-100 border-primary border-opacity-25 shadow-sm">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom border-light">
                                            <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2">{proj.level}</span>
                                            <span className="text-muted small fw-bold">
                                                <i className="bi bi-calendar-event me-1"></i> 
                                                {proj.year ? new Date(proj.year).toLocaleDateString() : ''}
                                            </span>
                                        </div>
                                        <h5 className="card-title mb-3 text-dark">{proj.title}</h5>
                                        <p className="card-text text-muted">{proj.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {displayData.length === 0 && !limit && (
                            <div className="col-12 text-center text-muted p-4">
                                No academic projects match the selected filters.
                            </div>
                        )}
                    </div>
                    {limit && data.length > limit && (
                        <div className="text-center mt-5">
                            <button className="btn btn-outline-primary" onClick={onShowMore}>{t.showMoreAcad}</button>
                        </div>
                    )}
                </div>
            </FadeInSection>
        </section>
    );
};

const SupervisedPhd = ({ data, t }) => {
    if (!data || data.length === 0) return null;
    return (
        <section id="supervised-phd" className="py-5 section-bg-2">
            <FadeInSection>
                <div className="container py-4">
                    <div className="text-center mb-5">
                        <h2 className="section-title">{t.phd}</h2>
                        <p className="text-muted">{t.docCandidates}</p>
                    </div>
                    <div className="row g-4 justify-content-center">
                        {data.map((phd, idx) => (
                            <div className="col-md-6 col-lg-4" key={idx}>
                                <div className="card h-100 text-center p-4 shadow-sm border-0 position-relative">
                                    {phd.soutenanceDate ? (
                                        <span className="position-absolute top-0 end-0 m-3 badge bg-success">{t.completed}</span>
                                    ) : (
                                        <span className="position-absolute top-0 end-0 m-3 badge bg-warning text-dark d-flex align-items-center gap-2">
                                            <div className="spinner-border spinner-border-sm" role="status"></div>
                                            {t.inProgress}
                                        </span>
                                    )}
                                    <div className="mb-3 mx-auto" style={{ width: '100px', height: '100px', overflow: 'hidden', borderRadius: '50%' }}>
                                        <img src={phd.img || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&q=80"} alt={phd.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <h4 className="h5 card-title text-primary">{phd.name}</h4>
                                    <p className="fw-bold mb-2 small">{phd.title}</p>
                                    <div className="mt-auto d-flex flex-column text-muted small">
                                        <span><i className="bi bi-calendar-play me-2"></i>{t.start}: {phd.startDate || 'N/A'}</span>
                                        {phd.soutenanceDate && <span><i className="bi bi-calendar-check me-2"></i>{t.defense}: {phd.soutenanceDate}</span>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </FadeInSection>
        </section>
    );
};

const ScientificEquipments = ({ data, t }) => {
    if (!data || data.length === 0) return null;
    return (
        <section id="scientific-equipments" className="py-5 section-bg-2">
            <FadeInSection>
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <h2 className="section-title">{t.equip}</h2>
                        <p className="text-muted">{t.tools}</p>
                    </div>
                    <div className="row g-4">
                        {data.map((eq, idx) => (
                            <div className="col-md-4" key={idx}>
                                <div className="card h-100 shadow-sm border-0 overflow-hidden">
                                    <img src={eq.img || "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=600&q=80"} className="card-img-top" alt={eq.name} style={{ height: '220px', objectFit: 'cover' }} />
                                    <div className="card-body">
                                        <h5 className="card-title text-primary">{eq.name}</h5>
                                        <h6 className="card-subtitle mb-3 text-success fw-bold">{eq.price}</h6>
                                        <p className="card-text text-muted small">{eq.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </FadeInSection>
        </section>
    );
};

const EmbeddedBoards = ({ data, t }) => {
    if (!data || data.length === 0) return null;
    return (
        <section id="embedded-boards" className="py-5 section-bg-1">
            <FadeInSection>
                <div className="container py-4">
                    <div className="text-center mb-5">
                        <h2 className="section-title">{t.boards}</h2>
                        <p className="text-muted">{t.devBoards}</p>
                    </div>
                    <div className="row g-4">
                        {data.map((board, idx) => (
                            <div className="col-md-4" key={idx}>
                                <div className="card h-100 shadow-sm border-0 overflow-hidden">
                                    <img src={board.img || "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80"} className="card-img-top" alt={board.name} style={{ height: '220px', objectFit: 'cover' }} />
                                    <div className="card-body">
                                        <h5 className="card-title text-primary">{board.name}</h5>
                                        <h6 className="card-subtitle mb-3 text-success fw-bold">{board.price}</h6>
                                        <p className="card-text text-muted small">{board.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </FadeInSection>
        </section>
    );
};

const LearningAppsSection = ({ data, setCurrentApp, t }) => {
    if (!data || data.length === 0) return null;
    return (
        <section id="learning-apps" className="py-5 section-bg-1">
            <FadeInSection>
                <div className="container py-4">
                    <div className="text-center mb-5">
                        <h2 className="section-title">{t.learningApps}</h2>
                        <p className="text-muted">{t.interact}</p>
                    </div>
                    <div className="row g-4">
                        {data.map((app, idx) => (
                            <div className="col-md-4" key={idx}>
                                <div 
                                    className="card h-100 text-center p-4 shadow-sm border-0 border-top border-4 border-primary" 
                                    onClick={() => setCurrentApp(app)} 
                                    style={{cursor: 'pointer', transition: 'transform 0.2s'}}
                                    onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                    onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                >
                                    <i className="bi bi-laptop display-4 text-primary mb-3"></i>
                                    <h4 className="h5 card-title">{app.name}</h4>
                                    <button className="btn btn-outline-primary mt-auto mx-auto mt-4 w-75 rounded-pill">{t.launch}</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </FadeInSection>
        </section>
    );
};

const Contact = ({ data, t }) => {
    return (
        <section id="contact" className="py-5 section-bg-2 mb-0">
            <FadeInSection>
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <h2 className="section-title">{t.getInTouch}</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 mb-5 mb-lg-0">
                            <div className="card p-4 h-100 bg-primary text-white border-0 shadow">
                                <h3 className="h4 mb-4">{t.info}</h3>
                                
                                <div className="d-flex align-items-center mb-3">
                                    <div className="bg-white bg-opacity-25 p-2 rounded me-3">
                                        <i className="bi bi-envelope-fill fs-5"></i>
                                    </div>
                                    <div>
                                        <p className="mb-0 fw-medium">{t.email}</p>
                                        <a href={`mailto:${data.email}`} className="text-white text-decoration-none small">{data.email}</a>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center mb-4">
                                    <div className="bg-white bg-opacity-25 p-2 rounded me-3">
                                        <i className="bi bi-geo-alt-fill fs-5"></i>
                                    </div>
                                    <div>
                                        <p className="mb-0 fw-medium">{t.loc}</p>
                                        <p className="mb-0 small text-white-50">{data.location}</p>
                                    </div>
                                </div>

                                <h4 className="h6 mb-3 mt-auto">{t.follow}</h4>
                                <div className="d-flex gap-2 flex-wrap">
                                    {data.social.linkedin && data.social.linkedin !== '#' && <a href={data.social.linkedin} target="_blank" className="btn btn-light btn-sm px-3"><i className="bi bi-linkedin text-primary"></i></a>}
                                    {data.social.youtube && data.social.youtube !== '#' && <a href={data.social.youtube} target="_blank" className="btn btn-light btn-sm px-3"><i className="bi bi-youtube text-danger"></i></a>}
                                    {data.social.github && data.social.github !== '#' && <a href={data.social.github} target="_blank" className="btn btn-light btn-sm px-3"><i className="bi bi-github text-dark"></i></a>}
                                    {data.social.orcid && data.social.orcid !== '#' && <a href={data.social.orcid} target="_blank" className="btn btn-light btn-sm px-3"><i className="bi bi-globe text-success"></i></a>}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="card p-4 p-md-5 shadow-sm border-0">
                                <h3 className="h5 mb-4">{t.sendMsg}</h3>
                                <form onSubmit={(e) => e.preventDefault()}>
                                    <div className="row g-3">
                                        <div className="col-12">
                                            <label htmlFor="subject" className="form-label small fw-medium">{t.subj}</label>
                                            <input type="text" className="form-control" id="subject" required />
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="message" className="form-label small fw-medium">{t.msg}</label>
                                            <textarea className="form-control" id="message" rows="5" required></textarea>
                                        </div>
                                        <div className="col-12 mt-4">
                                            <button type="submit" className="btn btn-primary w-100 rounded-pill">
                                                <i className="bi bi-send-fill me-2"></i> {t.send}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeInSection>
        </section>
    );
};

const SearchResultsView = ({ data, query, setViewingSection, t }) => {
    const q = query.toLowerCase();

    // Very simple but effective full-text search across multiple sections
    const results = {
        teaching: data.teaching?.filter(i => (i.title + ' ' + i.desc).toLowerCase().includes(q)) || [],
        publications: data.publications?.filter(i => (i.title + ' ' + i.authors + ' ' + i.journal).toLowerCase().includes(q)) || [],
        projects: data.projects?.filter(i => (i.title + ' ' + i.desc).toLowerCase().includes(q)) || [],
        academicProjects: data.academicProjects?.filter(i => (i.title + ' ' + i.desc).toLowerCase().includes(q)) || []
    };

    const hasResults = results.teaching.length > 0 || results.publications.length > 0 || results.projects.length > 0 || results.academicProjects.length > 0;

    return (
        <div className="container py-5 mt-5">
            <div className="d-flex justify-content-between align-items-center mb-5">
                <h2>{t.search} <span className="text-primary">"{query}"</span></h2>
                <button className="btn btn-outline-primary" onClick={() => setViewingSection(null)}>
                    <i className="bi bi-x-lg me-2"></i> Close
                </button>
            </div>

            {!hasResults ? (
                <div className="alert alert-secondary text-center py-5">
                    <h4>{t.noMatch} "{query}"</h4>
                    <p className="mb-0 text-muted">{t.tryAdj}</p>
                </div>
            ) : (
                <div className="d-flex flex-column gap-5">
                    {results.teaching.length > 0 && (
                        <div>
                            <h4 className="border-bottom pb-2 text-primary">{t.teaching}</h4>
                            <div className="row g-3 mt-2">
                                {results.teaching.map((item, idx) => (
                                    <div className="col-md-6 col-lg-3" key={idx}><CourseCard course={item} t={t} /></div>
                                ))}
                            </div>
                        </div>
                    )}
                    {results.publications.length > 0 && (
                        <div>
                            <h4 className="border-bottom pb-2 text-primary">{t.publications}</h4>
                            <div className="list-group list-group-flush mt-3 border rounded shadow-sm">
                                {results.publications.map((pub, index) => (
                                    <div className="list-group-item p-4 border-0 border-bottom" key={index}>
                                        <h5 className="mb-1 text-primary">{pub.title}</h5>
                                        <p className="mb-1 fw-medium">{pub.authors}</p>
                                        <p className="text-muted small mb-0"><i>{pub.journal}</i> ({pub.year})</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    {results.projects.length > 0 && (
                        <div>
                            <h4 className="border-bottom pb-2 text-primary">{t.projects}</h4>
                            <div className="row g-3 mt-2">
                                {results.projects.map((proj, idx) => (
                                    <div className="col-md-4" key={idx}>
                                        <div className="card h-100 shadow-sm border-0">
                                            <div className="card-body"><h5 className="card-title text-primary">{proj.title}</h5><p className="small text-muted">{proj.desc}</p></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    {results.academicProjects.length > 0 && (
                        <div>
                            <h4 className="border-bottom pb-2 text-primary">{t.academicProjects}</h4>
                            <div className="row g-3 mt-2">
                                {results.academicProjects.map((proj, idx) => (
                                    <div className="col-md-6" key={idx}>
                                        <div className="card h-100 shadow-sm border-0 bg-light">
                                            <div className="card-body"><h5 className="card-title text-primary">{proj.title}</h5><span className="badge bg-secondary mb-2">{proj.level}</span><p className="small text-muted mb-0">{proj.desc}</p></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

const Footer = ({ title }) => {
    return (
        <footer className="py-4 text-center">
            <div className="container">
                <p className="mb-0 text-muted small">
                    &copy; {new Date().getFullYear()} {title}. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

const App = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [data, setData] = useState(null);
    const [currentApp, setCurrentApp] = useState(null);
    const [viewingSection, setViewingSection] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [lang, setLang] = useState('en');

    const t = translations[lang];

    const performSearch = () => {
        if (searchQuery.trim() !== '') {
            setCurrentApp(null);
            setViewingSection('search');
        } else {
            setViewingSection(null);
        }
    };

    useEffect(() => {
        if (darkMode) {
            document.documentElement.setAttribute('data-bs-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-bs-theme', 'light');
        }
    }, [darkMode]);

    useEffect(() => {
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }, [lang]);

    useEffect(() => {
        // Fetch data.json directly so this works perfectly on GitHub Pages
        fetch('data.json')
            .then(res => res.json())
            .then(fetchedData => {
                setData(fetchedData);
            })
            .catch(err => console.error("Error loading data:", err));
    }, []);

    if (!data) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    const renderFullSection = () => {
        if (viewingSection === 'search') return <SearchResultsView data={data} query={searchQuery} setViewingSection={setViewingSection} t={t} />;

        return (
            <div className="container py-5 mt-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2>{t.all} {viewingSection.charAt(0).toUpperCase() + viewingSection.slice(1)}</h2>
                    <button className="btn btn-outline-primary" onClick={() => setViewingSection(null)}>
                        <i className="bi bi-arrow-left me-2"></i> {t.back}
                    </button>
                </div>
                {viewingSection === 'teaching' && <Teaching data={data.teaching} t={t} />}
                {viewingSection === 'publications' && <Publications data={data.publications} socialLinks={data.contact.social} t={t} />}
                {viewingSection === 'projects' && <Projects data={data.projects} t={t} />}
                {viewingSection === 'academicProjects' && <AcademicProjects data={data.academicProjects} t={t} />}
            </div>
        );
    };

    return (
        <div>
            <Navbar 
                darkMode={darkMode} 
                setDarkMode={setDarkMode} 
                title={data.hero.title} 
                setCurrentApp={setCurrentApp}
                setViewingSection={setViewingSection}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                performSearch={performSearch}
                lang={lang}
                setLang={setLang}
                t={t}
                socialLinks={data.contact.social}
            />
            
            <main style={{ paddingTop: '130px' }}>
                {currentApp ? (
                    <div className="container py-5">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h2>{currentApp.name}</h2>
                            <button className="btn btn-outline-primary" onClick={() => setCurrentApp(null)}>
                                <i className="bi bi-arrow-left me-2"></i> {t.backPort}
                            </button>
                        </div>
                        <div className="card p-0 overflow-hidden border-0 shadow-sm" style={{ minHeight: '600px' }}>
                            <div className="card-body p-0">
                                <div dangerouslySetInnerHTML={{ __html: currentApp.htmlCode }} className="w-100 h-100 p-4" />
                            </div>
                        </div>
                    </div>
                ) : viewingSection ? (
                    renderFullSection()
                ) : (
                    <>
                        <Hero data={data.hero} t={t} />
                        <SupervisedPhd data={data.supervisedPhd} t={t} />
                        <About data={data.about} t={t} />
                        <Teaching data={data.teaching} limit={4} onShowMore={() => setViewingSection('teaching')} t={t} />
                        <Research data={data.research} socialLinks={data.contact.social} t={t} />
                        <ScientificEquipments data={data.scientificEquipments} t={t} />
                        <EmbeddedBoards data={data.embeddedBoards} t={t} />
                        <Publications data={data.publications} socialLinks={data.contact.social} limit={4} onShowMore={() => setViewingSection('publications')} t={t} />
                        <Projects data={data.projects} limit={3} onShowMore={() => setViewingSection('projects')} t={t} />
                        <AcademicProjects data={data.academicProjects} limit={4} onShowMore={() => setViewingSection('academicProjects')} t={t} />
                        <LearningAppsSection data={data.learningApplications} setCurrentApp={setCurrentApp} t={t} />
                        <Contact data={data.contact} t={t} />
                    </>
                )}
            </main>
            <Footer title={data.hero.title} />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
