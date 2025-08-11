<template>
  <div class="tw-bg-black tw-text-white font-['Space_Grotesk'] tw-overflow-x-hidden">
    <!-- Background elements -->
    <div class="tw-fixed tw-inset-0 tw-overflow-hidden tw-pointer-events-none tw-z-0">
      <div class="tw-absolute tw-top-20 tw-left-10 tw-w-96 tw-h-96 tw-bg-indigo-900/10 tw-rounded-full tw-blur-3xl"></div>
      <div class="tw-absolute tw-bottom-10 tw-right-10 tw-w-80 tw-h-80 tw-bg-purple-900/10 tw-rounded-full tw-blur-3xl"></div>
      <div class="tw-absolute tw-top-40 tw-right-20 tw-w-64 tw-h-64 tw-bg-cyan-900/10 tw-rounded-full tw-blur-3xl"></div>

      <!-- Decorative tw-grid lines -->
      <div class="tw-absolute tw-inset-0 tw-grid tw-grid-cols-12 tw-opacity-5 tw-pointer-events-none">
        <div class="tw-border-r tw-border-cyan-500"></div>
        <div class="tw-border-r tw-border-cyan-500"></div>
        <div class="tw-border-r tw-border-cyan-500"></div>
        <div class="tw-border-r tw-border-cyan-500"></div>
        <div class="tw-border-r tw-border-cyan-500"></div>
        <div class="tw-border-r tw-border-cyan-500"></div>
        <div class="tw-border-r tw-border-cyan-500"></div>
        <div class="tw-border-r tw-border-cyan-500"></div>
        <div class="tw-border-r tw-border-cyan-500"></div>
        <div class="tw-border-r tw-border-cyan-500"></div>
        <div class="tw-border-r tw-border-cyan-500"></div>
        <div class="tw-border-r tw-border-cyan-500"></div>
      </div>
      <div class="tw-absolute tw-inset-0 tw-grid tw-grid-rows-12 tw-opacity-5 tw-pointer-events-none">
        <div class="tw-border-b tw-border-cyan-500"></div>
        <div class="tw-border-b tw-border-cyan-500"></div>
        <div class="tw-border-b tw-border-cyan-500"></div>
        <div class="tw-border-b tw-border-cyan-500"></div>
        <div class="tw-border-b tw-border-cyan-500"></div>
        <div class="tw-border-b tw-border-cyan-500"></div>
        <div class="tw-border-b tw-border-cyan-500"></div>
        <div class="tw-border-b tw-border-cyan-500"></div>
        <div class="tw-border-b tw-border-cyan-500"></div>
        <div class="tw-border-b tw-border-cyan-500"></div>
        <div class="tw-border-b tw-border-cyan-500"></div>
        <div class="tw-border-b tw-border-cyan-500"></div>
      </div>
    </div>

    <!-- Navigation Bar -->
    <nav id="navbar" :class="{ 'scrolled': isScrolled }" class="tw-fixed tw-top-0 tw-left-0 tw-right-0 tw-bg-gray-900/70 tw-backdrop-blur-lg tw-border-b tw-border-cyan-500/30 tw-z-50 tw-transition-all tw-duration-300">
      <div class="container tw-mx-auto tw-px-6 tw-py-3">
        <div class="tw-flex tw-items-center tw-justify-between">
          <!-- Logo -->
          <div class="tw-flex tw-items-center">
            <div class="tw-relative tw-mr-2">
              <div class="tw-absolute tw-inset-0 tw-bg-cyan-400/30 tw-rounded-md tw-blur-sm"></div>
              <div class="tw-w-10 tw-h-10 tw-rounded-md tw-bg-gradient-to-br tw-from-indigo-600 tw-to-purple-600 tw-border tw-border-indigo-400/30 tw-flex tw-items-center tw-justify-center tw-relative tw-shadow-lg shadow-indigo-800/20">
                <div class="tw-absolute inset-[3px] tw-bg-gray-900 tw-rounded-[4px] tw-flex tw-items-center tw-justify-center tw-overflow-hidden">
                  <div class="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-indigo-900/20 tw-to-purple-900/20"></div>
                  <div class="tw-font-bold tw-text-lg tw-bg-gradient-to-r tw-from-cyan-400 tw-to-indigo-400 tw-bg-clip-text tw-text-transparent">AM</div>
                </div>
              </div>
            </div>
            <div class="tw-text-xl tw-font-medium tw-bg-gradient-to-r tw-from-indigo-400 tw-via-cyan-400 tw-to-purple-400 tw-bg-clip-text tw-text-transparent tw-flex tw-items-center">
              Akash Mhatre
            </div>
          </div>

          <!-- Desktop Navigation -->
          <div class="tw-hidden md:tw-flex tw-items-center tw-space-x-1">
            <a href="#home" @click.prevent="scrollToSection('home')" :class="{'active': activeSection === 'home'}" class="nav-link tw-text-gray-300 hover:text-cyan-400 tw-px-4 tw-py-2 tw-rounded-md tw-transition-colors tw-duration-200">Home</a>
            <a href="#about" @click.prevent="scrollToSection('about')" :class="{'active': activeSection === 'about'}" class="nav-link tw-text-gray-300 hover:text-cyan-400 tw-px-4 tw-py-2 tw-rounded-md tw-transition-colors tw-duration-200">About</a>
            <a href="#experience" @click.prevent="scrollToSection('experience')" :class="{'active': activeSection === 'experience'}" class="nav-link tw-text-gray-300 hover:text-cyan-400 tw-px-4 tw-py-2 tw-rounded-md tw-transition-colors tw-duration-200">Experience</a>
            <a href="#portfolio" @click.prevent="scrollToSection('portfolio')" :class="{'active': activeSection === 'portfolio'}" class="nav-link tw-text-gray-300 hover:text-cyan-400 tw-px-4 tw-py-2 tw-rounded-md tw-transition-colors tw-duration-200">Portfolio</a>
            <a href="#contact" @click.prevent="scrollToSection('contact')" :class="{'active': activeSection === 'contact'}" class="nav-link tw-text-gray-300 hover:text-cyan-400 tw-px-4 tw-py-2 tw-rounded-md tw-transition-colors tw-duration-200">Contact</a>
            <div class="tw-relative tw-ml-4 group">
              <div class="tw-absolute tw--inset-0.5 tw-bg-gradient-to-r tw-from-indigo-600/50 tw-to-purple-600/50 tw-rounded-lg tw-blur tw-opacity-75 group-hover:tw-opacity-100 tw-transition-all tw-duration-500"></div>
              <button @click="scrollToSection('contact')" class="contact-btn tw-px-4 tw-py-2 tw-bg-gradient-to-r tw-from-indigo-900/90 tw-to-purple-900/90 tw-rounded-lg tw-text-white tw-text-sm tw-font-medium tw-relative tw-z-10 tw-flex tw-items-center tw-justify-center tw-gap-2 group-hover:from-indigo-800/90 group-hover:to-purple-800/90 tw-transition-all tw-duration-300">
                <span class="tw-bg-gradient-to-r tw-from-cyan-300 tw-to-indigo-300 tw-bg-clip-text tw-text-transparent">Connect</span>
              </button>
            </div>
          </div>

          <!-- Mobile Navigation Button -->
          <div class="tw-flex md:tw-hidden">
            <button id="mobile-menu-button" @click="toggleMobileMenu" :class="{'active': isMobileMenuOpen}" class="tw-relative tw-w-10 tw-h-10 focus:tw-outline-none group" aria-label="Toggle menu">
              <div class="tw-absolute tw-w-5 tw-transform tw--translate-x-1/2 tw--translate-y-1/2 tw-left-1/2 tw-top-1/2">
                <span class="tw-block tw-h-0.5 tw-w-5 tw-bg-cyan-400 tw-mb-1 tw-transform tw-transition tw-duration-300 tw-ease-in-out" id="line1"></span>
                <span class="tw-block tw-h-0.5 tw-w-5 tw-bg-cyan-400 tw-mb-1 tw-transform tw-transition tw-duration-300 tw-ease-in-out" id="line2"></span>
                <span class="tw-block tw-h-0.5 tw-w-5 tw-bg-cyan-400 tw-transform tw-transition tw-duration-300 tw-ease-in-out" id="line3"></span>
              </div>
            </button>
          </div>
        </div>

        <!-- Mobile Menu -->
        <div id="mobile-menu" ref="mobileMenu" class="md:tw-hidden tw-overflow-hidden tw-transition-all tw-duration-300 tw-ease-in-out" style="height: 0;">
          <div class="tw-pt-2 tw-pb-4 tw-space-y-1">
            <a href="#home" @click.prevent="scrollToSection('home', true)" class="mobile-nav-link tw-block tw-text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 tw-px-4 tw-py-2 tw-rounded-md tw-transition-colors tw-duration-200">Home</a>
            <a href="#about" @click.prevent="scrollToSection('about', true)" class="mobile-nav-link tw-block tw-text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 tw-px-4 tw-py-2 tw-rounded-md tw-transition-colors tw-duration-200">About</a>
            <a href="#experience" @click.prevent="scrollToSection('experience', true)" class="mobile-nav-link tw-block tw-text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 tw-px-4 tw-py-2 tw-rounded-md tw-transition-colors tw-duration-200">Experience</a>
            <a href="#portfolio" @click.prevent="scrollToSection('portfolio', true)" class="mobile-nav-link tw-block tw-text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 tw-px-4 tw-py-2 tw-rounded-md tw-transition-colors tw-duration-200">Portfolio</a>
            <a href="#contact" @click.prevent="scrollToSection('contact', true)" class="mobile-nav-link tw-block tw-text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 tw-px-4 tw-py-2 tw-rounded-md tw-transition-colors tw-duration-200">Contact</a>
            <div class="tw-px-4 tw-pt-2">
              <button @click="scrollToSection('contact', true)" class="contact-btn tw-w-full tw-px-4 tw-py-2 tw-bg-gradient-to-r tw-from-indigo-700 tw-to-purple-700 tw-rounded-lg tw-text-white tw-text-sm tw-font-medium tw-flex tw-items-center tw-justify-center tw-gap-2 hover:tw-from-indigo-600 hover:tw-to-purple-600 tw-transition-all tw-duration-300">
                <span class="tw-bg-gradient-to-r tw-from-cyan-300 tw-to-indigo-300 tw-bg-clip-text tw-text-transparent">Connect</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content Sections -->
    <main>
        <!-- Home Section -->
        <section id="home" class="tw-min-h-screen tw-flex tw-items-center tw-justify-center tw-relative tw-pt-20">
            <div class="container tw-mx-auto tw-px-6 tw-py-20">
                <div class="tw-flex tw-flex-col tw-items-center tw-text-center">
                    <div class="tw-relative tw-mb-4">
                        <div class="tw-absolute tw-inset-0 tw-bg-cyan-500/25 tw-rounded-full tw-blur-3xl"></div>
                        <div ref="headerText" class="tw-text-6xl md:tw-text-7xl lg:tw-text-8xl tw-font-bold tw-bg-gradient-to-r tw-from-indigo-400 tw-via-cyan-400 tw-to-purple-400 tw-bg-clip-text tw-text-transparent tw-pb-2 tw-relative">
                            Akash Mhatre
                        </div>
                    </div>
                    <p class="tw-text-xl md:tw-text-2xl tw-text-gray-400 tw-max-w-3xl tw-mb-8">
                       A Full Stack Developer creating efficient, scalable, and user-friendly web and mobile applications.
                    </p>
                    <div class="tw-flex tw-gap-4 tw-flex-wrap tw-justify-center">
                        <div class="tw-relative tw-group">
                            <div class="tw-absolute tw-inset-0.5 tw-bg-gradient-to-r tw-from-indigo-600/50 tw-to-purple-600/50 tw-rounded-lg tw-blur tw-opacity-75 group-hover:tw-opacity-100 tw-transition-all tw-duration-500"></div>
                            <button @click="scrollToSection('portfolio')" class="tw-px-6 tw-py-3 tw-bg-gradient-to-r tw-from-indigo-900/90 tw-to-purple-900/90 tw-rounded-lg tw-text-white tw-text-base tw-font-medium tw-relative tw-z-10 tw-flex tw-items-center tw-justify-center tw-gap-2 group-hover:tw-from-indigo-800/90 group-hover:tw-to-purple-800/90 tw-transition-all tw-duration-300 tw-transform group-hover:tw-scale-105 group-active:tw-scale-95">
                                <span class="tw-bg-gradient-to-r tw-from-cyan-300 tw-to-indigo-300 tw-bg-clip-text tw-text-transparent">View My Work</span>
                            </button>
                        </div>
                        <button @click="scrollToSection('contact')" class="tw-px-6 tw-py-3 tw-bg-transparent tw-border tw-border-cyan-500/30 tw-rounded-lg tw-text-cyan-400 tw-text-base tw-font-medium tw-flex tw-items-center tw-justify-center tw-gap-2 hover:tw-bg-cyan-900/10 hover:border-cyan-500/50 tw-transition-all tw-duration-300">
                            Get In Touch
                        </button>
                    </div>
                </div>
            </div>
            <div class="tw-absolute tw-bottom-10 tw-left-1/2 tw-transform tw--translate-x-1/2 tw-animate-bounce">
                <svg class="tw-w-6 tw-h-6 tw-text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="tw-min-h-screen tw-flex tw-items-center tw-relative tw-py-20">
            <div class="container tw-mx-auto tw-px-6">
                <div class="tw-max-w-5xl tw-mx-auto">
                    <div class="tw-text-center tw-mb-12">
                        <div class="tw-inline-block tw-mb-3">
                            <div class="tw-text-xs tw-text-cyan-400 tw-tracking-widest tw-uppercase tw-mb-1">About Me</div>
                            <div class="tw-text-4xl md:tw-text-5xl tw-font-bold tw-bg-gradient-to-r tw-from-indigo-400 tw-to-purple-400 tw-bg-clip-text tw-text-transparent">Professional Summary</div>
                        </div>
                        <div class="tw-w-20 tw-h-1 tw-bg-gradient-to-r tw-from-cyan-500 tw-to-indigo-500 tw-mx-auto"></div>
                    </div>
                    <div class="tw-text-center tw-max-w-3xl tw-mx-auto tw-mb-12">
                         <p class="tw-text-lg tw-text-gray-300">Dedicated software developer with 3 years of experience in creating efficient web and mobile applications. Proficient in designing scalable systems, APIs, and user-friendly interfaces while leveraging modern tools and technologies like Node.js, Vue.js, Django, and AWS. Skilled in database management, tw-blockchain integration, and DevOps practices, delivering high-quality solutions tailored to client needs.</p>
                    </div>

                    <div class="tw-text-center tw-mb-12">
                        <div class="tw-inline-block tw-mb-3">
                             <div class="tw-text-4xl md:tw-text-5xl tw-font-bold tw-bg-gradient-to-r tw-from-indigo-400 tw-to-purple-400 tw-bg-clip-text tw-text-transparent">Technical Skills</div>
                        </div>
                        <div class="tw-w-20 tw-h-1 tw-bg-gradient-to-r tw-from-cyan-500 tw-to-indigo-500 tw-mx-auto"></div>
                    </div>
                     <div class="tw-grid tw-grid-cols-2 md:tw-grid-cols-4 tw-gap-6 tw-text-center">
                        <div class="tw-relative tw-group">
                            <div class="tw-absolute tw-inset-0 tw-bg-gradient-to-r tw-from-indigo-500/20 tw-to-purple-500/20 tw-rounded-xl tw-blur-sm group-hover:tw-bg-indigo-500/30 tw-transition-all tw-duration-500"></div>
                            <div class="tw-relative tw-bg-gray-900/70 tw-backdrop-blur-lg tw-border tw-border-indigo-500/20 tw-p-6 tw-rounded-xl tw-shadow-xl group-hover:tw-border-indigo-500/40 tw-transition-all tw-duration-300 tw-h-full">
                                <div class="tw-font-medium tw-text-xl tw-text-white tw-mb-3">Programming</div>
                                <p class="tw-text-gray-400">Python, JavaScript, Java, HTML, CSS</p>
                            </div>
                        </div>
                         <div class="tw-relative tw-group">
                            <div class="tw-absolute tw-inset-0 tw-bg-gradient-to-r tw-from-purple-500/20 tw-to-cyan-500/20 tw-rounded-xl tw-blur-sm group-hover:tw-bg-purple-500/30 tw-transition-all tw-duration-500"></div>
                            <div class="tw-relative tw-bg-gray-900/70 tw-backdrop-blur-lg tw-border tw-border-purple-500/20 tw-p-6 tw-rounded-xl tw-shadow-xl group-hover:tw-border-purple-500/40 tw-transition-all tw-duration-300 tw-h-full">
                                <div class="tw-font-medium tw-text-xl tw-text-white tw-mb-3">Frameworks & Tools</div>
                                <p class="tw-text-gray-400">Node.js, Django, Flask, Vue.js, React, Docker, Git</p>
                            </div>
                        </div>
                         <div class="tw-relative tw-group">
                            <div class="tw-absolute tw-inset-0 tw-bg-gradient-to-r tw-from-cyan-500/20 tw-to-indigo-500/20 tw-rounded-xl tw-blur-sm group-hover:bg-cyan-500/30 tw-transition-all tw-duration-500"></div>
                            <div class="tw-relative tw-bg-gray-900/70 tw-backdrop-blur-lg tw-border tw-border-cyan-500/20 tw-p-6 tw-rounded-xl tw-shadow-xl group-hover:border-cyan-500/40 tw-transition-all tw-duration-300 tw-h-full">
                                <div class="tw-font-medium tw-text-xl tw-text-white tw-mb-3">Databases</div>
                                <p class="tw-text-gray-400">MySQL, PostgreSQL, MongoDB</p>
                            </div>
                        </div>
                         <div class="tw-relative tw-group">
                            <div class="tw-absolute tw-inset-0 tw-bg-gradient-to-r tw-from-indigo-500/20 tw-to-cyan-500/20 tw-rounded-xl tw-blur-sm group-hover:tw-bg-indigo-500/30 tw-transition-all tw-duration-500"></div>
                            <div class="tw-relative tw-bg-gray-900/70 tw-backdrop-blur-lg tw-border tw-border-indigo-500/20 tw-p-6 tw-rounded-xl tw-shadow-xl group-hover:tw-border-indigo-500/40 tw-transition-all tw-duration-300 tw-h-full">
                                <div class="tw-font-medium tw-text-xl tw-text-white tw-mb-3">Cloud & DevOps</div>
                                <p class="tw-text-gray-400">AWS (EC2, S3), Microservices, Websockets</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Experience Section -->
        <section id="experience" class="tw-min-h-screen tw-flex tw-items-center tw-relative tw-py-20">
            <div class="container tw-mx-auto tw-px-6">
                <div class="tw-max-w-5xl tw-mx-auto">
                    <div class="tw-text-center tw-mb-12">
                        <div class="tw-inline-block tw-mb-3">
                            <div class="tw-text-xs tw-text-cyan-400 tw-tracking-widest tw-uppercase tw-mb-1">Professional Journey</div>
                            <div class="tw-text-4xl md:tw-text-5xl tw-font-bold tw-bg-gradient-to-r tw-from-indigo-400 tw-to-purple-400 tw-bg-clip-text tw-text-transparent">Work Experience</div>
                        </div>
                        <div class="tw-w-20 tw-h-1 tw-bg-gradient-to-r tw-from-cyan-500 tw-to-indigo-500 tw-mx-auto"></div>
                    </div>
                    <div class="tw-space-y-8">
                        <!-- Experience 1 -->
                        <div class="tw-relative tw-group">
                             <div class="tw-absolute tw-inset-0 tw-bg-indigo-500/5 tw-rounded-lg tw-opacity-0 group-hover:tw-opacity-100 tw-blur-sm tw-transition-opacity"></div>
                             <div class="tw-bg-gradient-to-br tw-from-gray-900 tw-to-gray-950 tw-border tw-border-indigo-500/20 tw-rounded-lg tw-p-6 tw-relative tw-z-10 group-hover:tw-border-indigo-500/40 tw-transition-all tw-duration-300">
                                <div class="tw-flex tw-justify-between tw-items-start">
                                    <div>
                                        <h3 class="tw-text-xl tw-font-bold tw-text-indigo-300">Full-Stack Developer</h3>
                                        <p class="tw-text-md tw-text-gray-400">Incentius</p>
                                    </div>
                                    <p class="tw-text-sm tw-text-gray-500">May 2022 – Present</p>
                                </div>
                                <ul class="tw-list-disc tw-list-inside tw-mt-4 tw-text-gray-400 tw-space-y-2">
                                    <li>Developed web and Android applications to enhance user engagement.</li>
                                    <li>Designed and implemented RESTful APIs for secure client-server communication.</li>
                                    <li>Created and managed database schemas for analytics and user data.</li>
                                    <li>Deployed applications using Docker and PM2, ensuring optimal performance.</li>
                                    <li>Integrated tw-blockchain-based secure transaction mechanisms.</li>
                                    <li>Streamlined project delivery with CI/CD pipelines.</li>
                                </ul>
                            </div>
                        </div>

                        <!-- Experience 2 -->
                        <div class="tw-relative tw-group">
                             <div class="tw-absolute tw-inset-0 tw-bg-purple-500/5 tw-rounded-lg tw-opacity-0 group-hover:tw-opacity-100 tw-blur-sm tw-transition-opacity"></div>
                             <div class="tw-bg-gradient-to-br tw-from-gray-900 tw-to-gray-950 tw-border tw-border-purple-500/20 tw-rounded-lg tw-p-6 tw-relative tw-z-10 group-hover:tw-border-purple-500/40 tw-transition-all tw-duration-300">
                                <div class="tw-flex tw-justify-between tw-items-start">
                                    <div>
                                        <h3 class="tw-text-xl tw-font-bold tw-text-purple-300">Full-Stack Intern</h3>
                                        <p class="tw-text-md tw-text-gray-400">Incentius</p>
                                    </div>
                                    <p class="tw-text-sm tw-text-gray-500">Jan 2022 – April 2022</p>
                                </div>
                                <ul class="tw-list-disc tw-list-inside tw-mt-4 tw-text-gray-400 tw-space-y-2">
                                    <li>Developed B2B e-commerce applications using Python (Flask), Vue (Quasar), and MongoDB.</li>
                                    <li>Optimized database performance, reducing page load times by 50%.</li>
                                    <li>Collaborated with cross-functional teams to develop and maintain web applications.</li>
                                    <li>Implemented UI/UX designs using HTML, CSS, Tailwind, and JavaScript.</li>
                                    <li>Worked with team members to resolve issues and apply best practices.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Portfolio Section -->
        <section id="portfolio" class="tw-min-h-screen tw-flex tw-items-center tw-relative tw-py-20">
             <div class="container tw-mx-auto tw-px-6">
                <div class="tw-max-w-5xl tw-mx-auto">
                    <div class="tw-text-center tw-mb-12">
                        <div class="tw-inline-block tw-mb-3">
                            <div class="tw-text-xs tw-text-cyan-400 tw-tracking-widest tw-uppercase tw-mb-1">My Work</div>
                            <div class="tw-text-4xl md:tw-text-5xl tw-font-bold tw-bg-gradient-to-r tw-from-indigo-400 tw-to-purple-400 tw-bg-clip-text tw-text-transparent">Featured Projects</div>
                        </div>
                        <div class="tw-w-20 tw-h-1 tw-bg-gradient-to-r tw-from-cyan-500 tw-to-indigo-500 tw-mx-auto"></div>
                    </div>
                    
                    <div class="tw-grid md:tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-6">
                        <!-- Project 1 -->
                        <div class="tw-relative tw-group tw-overflow-hidden tw-rounded-xl">
                            <div class="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-indigo-600/80 tw-to-purple-600/80 tw-opacity-0 group-hover:tw-opacity-90 tw-transition-all tw-duration-300 tw-z-10 tw-flex tw-items-center tw-justify-center">
                                <div class="tw-text-center tw-p-4 tw-transform tw-translate-y-8 tw-group-hover:tw-translate-y-0 tw-transition-transform tw-duration-300">
                                    <div class="tw-text-xl tw-font-medium tw-text-white tw-mb-2">Fanztar Platform</div>
                                    <p class="tw-text-gray-200 tw-mb-4">A tw-blockchain platform for creators to monetize content via NFTs linked to future income.</p>
                                </div>
                            </div>
                            <div class="tw-aspect-video tw-bg-gradient-to-br tw-from-gray-700 tw-to-gray-900 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-p-4">
                                <div class="tw-text-center">
                                    <h3 class="tw-text-2xl tw-font-bold tw-text-cyan-400/70">Fanztar Platform</h3>
                                    <p class="tw-text-gray-400/50">Blockchain & NFTs</p>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Project 2 -->
                        <div class="tw-relative tw-group tw-overflow-hidden tw-rounded-xl">
                            <div class="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-cyan-600/80 tw-to-indigo-600/80 tw-opacity-0 group-hover:tw-opacity-90 tw-transition-all tw-duration-300 tw-z-10 tw-flex tw-items-center tw-justify-center">
                                <div class="tw-text-center tw-p-4 tw-transform tw-translate-y-8 group-hover:tw-translate-y-0 tw-transition-transform tw-duration-300">
                                    <div class="tw-text-xl tw-font-medium tw-text-white tw-mb-2">Whayn Medical Marketplace</div>
                                    <p class="tw-text-gray-200 tw-mb-4">An e-commerce platform for medical products with real-time inventory and payments.</p>
                                </div>
                            </div>
                            <div class="tw-aspect-video tw-bg-gradient-to-br tw-from-gray-700 tw-to-gray-900 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-p-4">
                                <div class="tw-text-center">
                                    <h3 class="tw-text-2xl tw-font-bold tw-text-cyan-400/70">Whayn Medical Marketplace</h3>
                                    <p class="tw-text-gray-400/50">E-commerce</p>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Project 3 -->
                        <div class="tw-relative tw-group tw-overflow-hidden tw-rounded-xl lg:tw-col-span-2">
                            <div class="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-purple-600/80 tw-to-pink-600/80 tw-opacity-0 group-hover:tw-opacity-90 tw-transition-all tw-duration-300 tw-z-10 tw-flex tw-items-center tw-justify-center">
                                <div class="tw-text-center tw-p-4 tw-transform tw-translate-y-8 group-hover:tw-translate-y-0 tw-transition-transform tw-duration-300">
                                    <div class="tw-text-xl tw-font-medium tw-text-white tw-mb-2">Sensimarketing</div>
                                    <p class="tw-text-gray-200 tw-mb-4">A bulk email platform for creating and managing email campaigns, similar to Email Octopus.</p>
                                </div>
                            </div>
                            <div class="tw-aspect-video tw-bg-gradient-to-br tw-from-gray-700 tw-to-gray-900 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-p-4">
                                <div class="tw-text-center">
                                    <h3 class="tw-text-2xl tw-font-bold tw-text-cyan-400/70">Sensimarketing</h3>
                                    <p class="tw-text-gray-400/50">Bulk Email Platform</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="tw-min-h-screen tw-flex tw-items-center tw-relative tw-py-20">
            <div class="container tw-mx-auto tw-px-6">
                <div class="tw-max-w-5xl tw-mx-auto">
                    <div class="tw-text-center tw-mb-12">
                        <div class="tw-inline-block tw-mb-3">
                            <div class="tw-text-xs tw-text-cyan-400 tw-tracking-widest tw-uppercase tw-mb-1">Get In Touch</div>
                            <div class="tw-text-4xl md:tw-text-5xl tw-font-bold tw-bg-gradient-to-r tw-from-indigo-400 tw-to-purple-400 tw-bg-clip-text tw-text-transparent">Contact Me</div>
                        </div>
                        <div class="tw-w-20 tw-h-1 tw-bg-gradient-to-r tw-from-cyan-500 tw-to-indigo-500 tw-mx-auto"></div>
                    </div>
                    
                    <div class="tw-grid md:tw-grid-cols-5 tw-gap-8">
                        <div class="md:tw-col-span-2">
                            <div class="bg-gray-900/70 tw-backdrop-blur-lg tw-border tw-border-indigo-500/20 tw-p-6 tw-rounded-xl tw-shadow-xl tw-h-full">
                                <div class="tw-text-xl tw-font-medium tw-text-white tw-mb-4">Contact Information</div>
                                <div class="tw-space-y-4">
                                    <div class="tw-flex tw-items-start">
                                        <svg class="tw-w-5 tw-h-5 tw-text-cyan-400 tw-mt-1 tw-mr-3 tw-flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                        <div>
                                            <div class="tw-text-sm tw-text-gray-400">Location</div>
                                            <div class="tw-text-white">Pune, India</div>
                                        </div>
                                    </div>
                                    <div class="tw-flex tw-items-start">
                                        <svg class="tw-w-5 tw-h-5 tw-text-cyan-400 tw-mt-1 tw-mr-3 tw-flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                        </svg>
                                        <div>
                                            <div class="tw-text-sm tw-text-gray-400">Email</div>
                                            <a href="mailto:mhatreakash2308@gmail.com" class="tw-text-white hover:text-cyan-400 tw-transition-colors">mhatreakash2308@gmail.com</a>
                                        </div>
                                    </div>
                                    <div class="tw-flex tw-items-start">
                                        <svg class="tw-w-5 tw-h-5 tw-text-cyan-400 tw-mt-1 tw-mr-3 tw-flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                        </svg>
                                        <div>
                                            <div class="tw-text-sm tw-text-gray-400">Phone</div>
                                            <a href="tel:+919028681730" class="tw-text-white hover:text-cyan-400 tw-transition-colors">+91 9028681730</a>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="tw-mt-6">
                                    <div class="tw-text-white tw-mb-2">Find me on</div>
                                    <div class="tw-flex tw-space-x-3">
                                        <a href="https://github.com/Akashmhatredev" target="_blank" class="tw-w-8 tw-h-8 tw-rounded-full tw-bg-indigo-900/50 tw-flex tw-items-center tw-justify-center tw-text-white hover:tw-bg-indigo-800 tw-transition-colors">
                                           <svg class="tw-w-5 tw-h-5" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                            </svg>
                                        </a>
                                        <a href="https://linkedin.com/in/akash-sudhir-mhatre/" target="_blank" class="tw-w-8 tw-h-8 tw-rounded-full tw-bg-indigo-900/50 tw-flex tw-items-center tw-justify-center tw-text-white hover:tw-bg-indigo-800 tw-transition-colors">
                                            <svg class="tw-w-4 tw-h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="md:tw-col-span-3">
                            <div class="bg-gray-900/70 tw-backdrop-blur-lg tw-border tw-border-indigo-500/20 tw-p-6 tw-rounded-xl tw-shadow-xl">
                                <div class="tw-text-xl tw-font-medium tw-text-white tw-mb-4">Send me a message</div>
                                <form @submit.prevent>
                                    <div class="tw-grid md:tw-grid-cols-2 tw-gap-4 tw-mb-4">
                                        <div>
                                            <label for="name" class="tw-block tw-text-sm tw-text-gray-400 tw-mb-1">Name</label>
                                            <input type="text" id="name" class="tw-w-full tw-bg-gray-800/50 tw-border tw-border-gray-700 focus:border-cyan-500 tw-rounded-lg tw-py-2 tw-px-3 tw-text-white focus:tw-outline-none focus:tw-ring-1 focus:ring-cyan-500/50 tw-transition-colors">
                                        </div>
                                        <div>
                                            <label for="email" class="tw-block tw-text-sm tw-text-gray-400 tw-mb-1">Email</label>
                                            <input type="email" id="email" class="tw-w-full tw-bg-gray-800/50 tw-border tw-border-gray-700 focus:border-cyan-500 tw-rounded-lg tw-py-2 tw-px-3 tw-text-white focus:tw-outline-none focus:tw-ring-1 focus:ring-cyan-500/50 tw-transition-colors">
                                        </div>
                                    </div>
                                    <div class="tw-mb-4">
                                        <label for="subject" class="tw-block tw-text-sm tw-text-gray-400 tw-mb-1">Subject</label>
                                        <input type="text" id="subject" class="tw-w-full tw-bg-gray-800/50 tw-border tw-border-gray-700 focus:border-cyan-500 tw-rounded-lg tw-py-2 tw-px-3 tw-text-white focus:tw-outline-none focus:tw-ring-1 focus:ring-cyan-500/50 tw-transition-colors">
                                    </div>
                                    <div class="tw-mb-6">
                                        <label for="message" class="tw-block tw-text-sm tw-text-gray-400 tw-mb-1">Message</label>
                                        <textarea id="message" rows="4" class="tw-w-full tw-bg-gray-800/50 tw-border tw-border-gray-700 focus:border-cyan-500 tw-rounded-lg tw-py-2 tw-px-3 tw-text-white focus:tw-outline-none focus:tw-ring-1 focus:ring-cyan-500/50 tw-transition-colors tw-resize-none"></textarea>
                                    </div>
                                    <div class="tw-relative tw-group">
                                        <div class="tw-absolute tw--inset-0.5 tw-bg-gradient-to-r tw-from-indigo-600/50 tw-to-purple-600/50 tw-rounded-lg tw-blur tw-opacity-75 group-hover:tw-opacity-100 tw-transition-all tw-duration-500"></div>
                                        <button type="submit" class="tw-w-full tw-px-6 tw-py-3 tw-bg-gradient-to-r tw-from-indigo-900/90 tw-to-purple-900/90 tw-rounded-lg tw-text-white tw-text-base tw-font-medium tw-relative tw-z-10 tw-flex tw-items-center tw-justify-center tw-gap-2 group-hover:from-indigo-800/90 group-hover:to-purple-800/90 tw-transition-all tw-duration-300">
                                            <span class="tw-bg-gradient-to-r tw-from-cyan-300 tw-to-indigo-300 tw-bg-clip-text tw-text-transparent">Send Message</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    
    <!-- Footer -->
    <footer class=" tw-bg-gray-900/80 tw-backdrop-blur-lg tw-border-t tw-border-gray-800">
        <div class="container tw-mx-auto tw-px-6 tw-py-8">
            <div class="tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-items-center tw-space-y-4 md:tw-space-y-0">
                <div class="tw-flex tw-items-center">
                    <div class="tw-relative tw-mr-2">
                        <div class="tw-absolute tw-inset-0 tw-bg-cyan-400/30 tw-rounded-md tw-blur-sm"></div>
                        <div class="tw-w-8 tw-h-8 tw-rounded-md tw-bg-gradient-to-br tw-from-indigo-600 tw-to-purple-600 tw-border tw-border-indigo-400/30 tw-flex tw-items-center tw-justify-center tw-relative tw-shadow-lg shadow-indigo-800/20">
                            <div class="tw-absolute inset-[2px] tw-bg-gray-900 tw-rounded-[3px] tw-flex tw-items-center tw-justify-center tw-overflow-hidden">
                                <div class="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-indigo-900/20 tw-to-purple-900/20"></div>
                                <div class="tw-font-bold tw-text-xs tw-bg-gradient-to-r tw-from-cyan-400 tw-to-indigo-400 tw-bg-clip-text tw-text-transparent">AM</div>
                            </div>
                        </div>
                    </div>
                    <div class="tw-text-lg tw-font-medium tw-bg-gradient-to-r tw-from-indigo-400 via-cyan-400 tw-to-purple-400 tw-bg-clip-text tw-text-transparent tw-flex tw-items-center">
                        Akash Mhatre
                    </div>
                </div>
                
                <div class="tw-text-center tw-text-gray-500 tw-text-sm">
                    © 2025 Akash Mhatre. All rights reserved.
                </div>
                
                <div class="tw-flex tw-space-x-3">
                    <a href="https://github.com/Akashmhatredev" target="_blank" class="tw-w-8 tw-h-8 tw-rounded-full tw-bg-indigo-900/50 tw-flex tw-items-center tw-justify-center tw-text-white hover:tw-bg-indigo-800 tw-transition-colors">
                        <svg class="tw-w-5 tw-h-5" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                    </a>
                    <a href="https://linkedin.com/in/akash-sudhir-mhatre/" target="_blank" class="tw-w-8 tw-h-8 tw-rounded-full tw-bg-indigo-900/50 tw-flex tw-items-center tw-justify-center tw-text-white hover:tw-bg-indigo-800 tw-transition-colors">
                        <svg class="tw-w-4 tw-h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'PortfolioPage',
  data() {
    return {
      isScrolled: false,
      isMobileMenuOpen: false,
      activeSection: '',
      sections: [],
      observer: null,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
      const menu = this.$refs.mobileMenu;
      const button = document.getElementById('mobile-menu-button');
      if (this.isMobileMenuOpen) {
        menu.style.height = `${menu.scrollHeight}px`;
        button.classList.add('active');
      } else {
        menu.style.height = '0';
        button.classList.remove('active');
      }
    },
    closeMobileMenu() {
        if (this.isMobileMenuOpen) {
            this.toggleMobileMenu();
        }
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
      this.highlightCurrentSection();
    },
    scrollToSection(sectionId, closeMenu = false) {
      const targetSection = document.getElementById(sectionId);
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70; // Adjust for navbar height
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });

        // Briefly highlight the section
        targetSection.classList.add('section-highlight');
        setTimeout(() => {
          targetSection.classList.remove('section-highlight');
        }, 1000);
      }
      if (closeMenu) {
        this.closeMobileMenu();
      }
    },
    highlightCurrentSection() {
      let current = '';
      this.sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // Offset for better accuracy
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute('id');
        }
      });
      this.activeSection = current;
    },
    initIntersectionObserver() {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
          }
        });
      }, { threshold: 0.1 });

      this.sections.forEach(section => {
        section.classList.add('section-hidden');
        this.observer.observe(section);
      });
    },
    initHeaderTextAnimation() {
         setTimeout(() => {
            const headerText = this.$refs.headerText;
            if (headerText) {
                headerText.style.opacity = 1;
                headerText.style.transform = 'translateY(0)';
            }
        }, 300);
    }
  },
  mounted() {
    this.sections = this.$el.querySelectorAll('section');
    window.addEventListener('scroll', this.handleScroll);
    this.initIntersectionObserver();
    this.highlightCurrentSection();
    this.initHeaderTextAnimation();
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    if (this.observer) {
      this.observer.disconnect();
    }
  },
};
</script>

<style>
/* Ensure Tailwind is loaded. If not, add this to your main HTML file: */
/* <script src="https://cdn.tailwindcss.com"></script> */
/* <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet"> */

/* Base styles & Custom properties */
:root {
  --primary: #6366f1; /* Indigo */
  --primary-dark: #4f46e5;
  --secondary: #06b6d4; /* Cyan */
  --accent: #a855f7; /* Purple */
  --dark-bg: #111827;
  --darker-bg: #030712;
  --text-primary: #f3f4f6;
  --text-secondary: #9ca3af;
  --navbar-bg: rgba(17, 24, 39, 0.7);
  --glass-effect: tw-blur(12px);
  --transition-normal: all 0.3s ease;
  --border-glow: rgba(99, 102, 241, 0.3);
  --neon-shadow: 0 0 15px rgba(6, 182, 212, 0.5);
  --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
}

body {
  font-family: 'Space Grotesk', sans-serif;
  background-color: var(--darker-bg);
  color: var(--text-primary);
  line-height: 1.6;
  overflow-x: hidden;
  min-height: 100vh;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--dark-bg);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, var(--primary), var(--accent));
  tw-border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, var(--primary-dark), var(--accent));
}

/* Navigation Bar Styles */
#navbar.scrolled {
  background-color: rgba(17, 24, 39, 0.9);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

/* Navigation Links */
.nav-link {
  position: relative;
  overflow: hidden;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(to right, rgb(6, 182, 212), rgb(99, 102, 241));
  transition: width 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 80%;
}

.nav-link:hover {
  color: var(--secondary);
  tw-text-shadow: 0 0 8px rgba(6, 182, 212, 0.3);
}

/* Mobile Navigation Hamburger Animation */
#mobile-menu-button #line1,
#mobile-menu-button #line2,
#mobile-menu-button #line3 {
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    transform-origin: center;
}

#mobile-menu-button.active #line1 {
    transform: translateY(6px) rotate(45deg);
}

#mobile-menu-button.active #line2 {
    opacity: 0;
}

#mobile-menu-button.active #line3 {
    transform: translateY(-6px) rotate(-45deg);
}

/* Section Styles */
section {
  padding: 6rem 0;
}

/* Section transitions and animations */
.section-hidden {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.section-visible {
  opacity: 1;
  transform: translateY(0);
}

.section-highlight {
  position: relative;
}

.section-highlight::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(6, 182, 212, 0.1), transparent 70%);
  opacity: 0;
  animation: pulse 1s ease;
  pointer-events: none;
  z-index: -1;
}

@keyframes pulse {
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
}

/* Header animation */
.text-6xl {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease, transform 1s ease;
}

/* Button with shiny hover effect */
.contact-btn {
  position: relative;
  overflow: hidden;
}

.contact-btn::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent 40%,
    rgba(6, 182, 212, 0.2) 45%,
    rgba(6, 182, 212, 0.4) 50%,
    rgba(6, 182, 212, 0.2) 55%,
    transparent 60%
  );
  transition: transform 0.5s ease;
  transform: translateX(-100%) translateY(-100%) rotate(45deg);
}

.contact-btn:hover::before {
  transform: translateX(100%) translateY(100%) rotate(45deg);
}


/* Enhanced accessibility */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
</style>
