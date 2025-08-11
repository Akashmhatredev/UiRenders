<template>
  <div class="tw-bg-black tw-text-white font-['Space_Grotesk'] tw-overflow-x-hidden">
    <div class="tw-fixed tw-inset-0 tw-overflow-hidden tw-pointer-events-none tw-z-0">
      <div class="tw-absolute tw-top-20 tw-left-10 tw-w-96 tw-h-96 bg-indigo-900/10 tw-rounded-full blur-3xl"></div>
      <div class="tw-absolute tw-bottom-10 tw-right-10 tw-w-80 tw-h-80 bg-purple-900/10 tw-rounded-full blur-3xl"></div>
      <div class="tw-absolute tw-top-40 tw-right-20 tw-w-64 tw-h-64 bg-cyan-900/10 tw-rounded-full blur-3xl"></div>

      <div class="tw-absolute tw-inset-0 tw-grid tw-grid-cols-12 tw-opacity-5 tw-pointer-events-none">
        <div class="tw-border-r border-cyan-500"></div>
        <div class="tw-border-r border-cyan-500"></div>
        <div class="tw-border-r border-cyan-500"></div>
        <div class="tw-border-r border-cyan-500"></div>
        <div class="tw-border-r border-cyan-500"></div>
        <div class="tw-border-r border-cyan-500"></div>
        <div class="tw-border-r border-cyan-500"></div>
        <div class="tw-border-r border-cyan-500"></div>
        <div class="tw-border-r border-cyan-500"></div>
        <div class="tw-border-r border-cyan-500"></div>
        <div class="tw-border-r border-cyan-500"></div>
        <div class="tw-border-r border-cyan-500"></div>
      </div>
      <div class="tw-absolute tw-inset-0 tw-grid tw-grid-rows-12 tw-opacity-5 tw-pointer-events-none">
        <div class="tw-border-b border-cyan-500"></div>
        <div class="tw-border-b border-cyan-500"></div>
        <div class="tw-border-b border-cyan-500"></div>
        <div class="tw-border-b border-cyan-500"></div>
        <div class="tw-border-b border-cyan-500"></div>
        <div class="tw-border-b border-cyan-500"></div>
        <div class="tw-border-b border-cyan-500"></div>
        <div class="tw-border-b border-cyan-500"></div>
        <div class="tw-border-b border-cyan-500"></div>
        <div class="tw-border-b border-cyan-500"></div>
        <div class="tw-border-b border-cyan-500"></div>
        <div class="tw-border-b border-cyan-500"></div>
      </div>
    </div>

    <nav id="navbar" :class="{ 'scrolled': isScrolled }" class="tw-fixed tw-top-0 tw-left-0 tw-right-0 bg-gray-900/70 backdrop-blur-lg tw-border-b border-cyan-500/30 tw-z-50 tw-transition-all tw-duration-300">
      <div class="container tw-mx-auto tw-px-6 tw-py-3">
        <div class="tw-flex tw-items-center tw-justify-between">
          <div class="tw-flex tw-items-center">
            <div class="tw-relative tw-mr-2">
              <div class="tw-absolute tw-inset-0 bg-cyan-400/30 tw-rounded-md blur-sm"></div>
              <div class="tw-w-10 tw-h-10 tw-rounded-md tw-bg-gradient-to-br tw-from-indigo-600 tw-to-purple-600 tw-border border-indigo-400/30 tw-flex tw-items-center tw-justify-center tw-relative tw-shadow-lg shadow-indigo-800/20">
                <div class="tw-absolute inset-[3px] tw-bg-gray-900 rounded-[4px] tw-flex tw-items-center tw-justify-center tw-overflow-hidden">
                  <div class="tw-absolute tw-inset-0 tw-bg-gradient-to-br from-indigo-900/20 to-purple-900/20"></div>
                  <div class="tw-font-bold tw-text-lg tw-bg-gradient-to-r from-cyan-400 tw-to-indigo-400 tw-bg-clip-text tw-text-transparent">FN</div>
                </div>
              </div>
            </div>
            <div class="tw-text-xl tw-font-medium tw-bg-gradient-to-r tw-from-indigo-400 via-cyan-400 tw-to-purple-400 tw-bg-clip-text tw-text-transparent tw-flex tw-items-center">
              FutureNav
            </div>
          </div>

          <div class="tw-hidden md:tw-flex tw-items-center tw-space-x-1">
            <a href="#home" @click.prevent="scrollToSection('home')" :class="{'active': activeSection === 'home'}" class="nav-link tw-text-gray-300 hover:text-cyan-400 tw-px-4 tw-py-2 tw-rounded-md tw-transition-colors tw-duration-200">Home</a>
            <a href="#about" @click.prevent="scrollToSection('about')" :class="{'active': activeSection === 'about'}" class="nav-link tw-text-gray-300 hover:text-cyan-400 tw-px-4 tw-py-2 tw-rounded-md tw-transition-colors tw-duration-200">About</a>
            <a href="#services" @click.prevent="scrollToSection('services')" :class="{'active': activeSection === 'services'}" class="nav-link tw-text-gray-300 hover:text-cyan-400 tw-px-4 tw-py-2 tw-rounded-md tw-transition-colors tw-duration-200">Services</a>
            <a href="#portfolio" @click.prevent="scrollToSection('portfolio')" :class="{'active': activeSection === 'portfolio'}" class="nav-link tw-text-gray-300 hover:text-cyan-400 tw-px-4 tw-py-2 tw-rounded-md tw-transition-colors tw-duration-200">Portfolio</a>
            <a href="#contact" @click.prevent="scrollToSection('contact')" :class="{'active': activeSection === 'contact'}" class="nav-link tw-text-gray-300 hover:text-cyan-400 tw-px-4 tw-py-2 tw-rounded-md tw-transition-colors tw-duration-200">Contact</a>
            <div class="tw-relative tw-ml-4 group">
              <div class="tw-absolute tw--inset-0.5 tw-bg-gradient-to-r from-indigo-600/50 to-purple-600/50 tw-rounded-lg blur tw-opacity-75 group-hover:tw-opacity-100 tw-transition-all tw-duration-500"></div>
              <button class="contact-btn tw-px-4 tw-py-2 tw-bg-gradient-to-r from-indigo-900/90 to-purple-900/90 tw-rounded-lg tw-text-white tw-text-sm tw-font-medium tw-relative tw-z-10 tw-flex tw-items-center tw-justify-center tw-gap-2 group-hover:from-indigo-800/90 group-hover:to-purple-800/90 tw-transition-all tw-duration-300">
                <span class="tw-bg-gradient-to-r from-cyan-300 tw-to-indigo-300 tw-bg-clip-text tw-text-transparent">Connect</span>
              </button>
            </div>
          </div>

          <div class="tw-flex md:tw-hidden">
            <button id="mobile-menu-button" @click="toggleMobileMenu" :class="{'active': isMobileMenuOpen}" class="tw-relative tw-w-10 tw-h-10 focus:tw-outline-none group" aria-label="Toggle menu">
              <div class="tw-absolute tw-w-5 tw-transform tw--translate-x-1/2 tw--translate-y-1/2 tw-left-1/2 tw-top-1/2">
                <span class="tw-block tw-h-0.5 tw-w-5 bg-cyan-400 tw-mb-1 tw-transform tw-transition tw-duration-300 tw-ease-in-out" id="line1"></span>
                <span class="tw-block tw-h-0.5 tw-w-5 bg-cyan-400 tw-mb-1 tw-transform tw-transition tw-duration-300 tw-ease-in-out" id="line2"></span>
                <span class="tw-block tw-h-0.5 tw-w-5 bg-cyan-400 tw-transform tw-transition tw-duration-300 tw-ease-in-out" id="line3"></span>
              </div>
            </button>
          </div>
        </div>

        <div id="mobile-menu" ref="mobileMenu" class="md:tw-hidden tw-overflow-hidden tw-transition-all tw-duration-300 tw-ease-in-out" style="height: 0;">
          <div class="tw-pt-2 tw-pb-4 tw-space-y-1">
            <a href="#home" @click.prevent="scrollToSection('home', true)" class="mobile-nav-link tw-block tw-text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 tw-px-4 tw-py-2 tw-rounded-md tw-transition-colors tw-duration-200">Home</a>
            <a href="#about" @click.prevent="scrollToSection('about', true)" class="mobile-nav-link tw-block tw-text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 tw-px-4 tw-py-2 tw-rounded-md tw-transition-colors tw-duration-200">About</a>
            <a href="#services" @click.prevent="scrollToSection('services', true)" class="mobile-nav-link tw-block tw-text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 tw-px-4 tw-py-2 tw-rounded-md tw-transition-colors tw-duration-200">Services</a>
            <a href="#portfolio" @click.prevent="scrollToSection('portfolio', true)" class="mobile-nav-link tw-block tw-text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 tw-px-4 tw-py-2 tw-rounded-md tw-transition-colors tw-duration-200">Portfolio</a>
            <a href="#contact" @click.prevent="scrollToSection('contact', true)" class="mobile-nav-link tw-block tw-text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 tw-px-4 tw-py-2 tw-rounded-md tw-transition-colors tw-duration-200">Contact</a>
            <div class="tw-px-4 tw-pt-2">
              <button class="contact-btn tw-w-full tw-px-4 tw-py-2 tw-bg-gradient-to-r tw-from-indigo-700 tw-to-purple-700 tw-rounded-lg tw-text-white tw-text-sm tw-font-medium tw-flex tw-items-center tw-justify-center tw-gap-2 hover:tw-from-indigo-600 hover:tw-to-purple-600 tw-transition-all tw-duration-300">
                <span class="tw-bg-gradient-to-r from-cyan-300 tw-to-indigo-300 tw-bg-clip-text tw-text-transparent">Connect</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <main>
        <section id="home" class="tw-min-h-screen tw-flex tw-items-center tw-justify-center tw-relative tw-pt-20">
            <div class="container tw-mx-auto tw-px-6 tw-py-20">
                <div class="tw-flex tw-flex-col tw-items-center tw-text-center">
                    <div class="tw-relative tw-mb-4">
                        <div class="tw-absolute tw-inset-0 bg-cyan-500/20 tw-rounded-full blur-3xl"></div>
                        <div ref="headerText" class="tw-text-6xl md:tw-text-7xl lg:tw-text-8xl tw-font-bold tw-bg-gradient-to-r tw-from-indigo-400 via-cyan-400 tw-to-purple-400 tw-bg-clip-text tw-text-transparent tw-pb-2 tw-relative">
                            Future of Navigation
                        </div>
                    </div>
                    <p class="tw-text-xl md:tw-text-2xl tw-text-gray-400 tw-max-w-3xl tw-mb-8">
                        Cutting-edge UI components designed for the next generation web interfaces
                    </p>
                    <div class="tw-flex tw-gap-4 tw-flex-wrap tw-justify-center">
                        <div class="tw-relative group">
                            <div class="tw-absolute tw--inset-0.5 tw-bg-gradient-to-r from-indigo-600/50 to-purple-600/50 tw-rounded-lg blur tw-opacity-75 group-hover:tw-opacity-100 tw-transition-all tw-duration-500"></div>
                            <button class="tw-px-6 tw-py-3 tw-bg-gradient-to-r from-indigo-900/90 to-purple-900/90 tw-rounded-lg tw-text-white tw-text-base tw-font-medium tw-relative tw-z-10 tw-flex tw-items-center tw-justify-center tw-gap-2 group-hover:from-indigo-800/90 group-hover:to-purple-800/90 tw-transition-all tw-duration-300 tw-transform group-hover:tw-scale-105 group-active:tw-scale-95">
                                <span class="tw-bg-gradient-to-r from-cyan-300 tw-to-indigo-300 tw-bg-clip-text tw-text-transparent">Get Started</span>
                            </button>
                        </div>
                        <button class="tw-px-6 tw-py-3 tw-bg-transparent tw-border border-cyan-500/30 tw-rounded-lg text-cyan-400 tw-text-base tw-font-medium tw-flex tw-items-center tw-justify-center tw-gap-2 hover:bg-cyan-900/10 hover:border-cyan-500/50 tw-transition-all tw-duration-300">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
            <div class="tw-absolute tw-bottom-10 tw-left-1/2 tw-transform tw--translate-x-1/2 tw-animate-bounce">
                <svg class="tw-w-6 tw-h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>
        </section>

        <section id="about" class="tw-min-h-screen tw-flex tw-items-center tw-relative tw-py-20">
           <div class="container tw-mx-auto tw-px-6">
                <div class="tw-max-w-5xl tw-mx-auto">
                    <div class="tw-text-center tw-mb-12">
                        <div class="tw-inline-block tw-mb-3">
                            <div class="tw-text-xs text-cyan-400 tw-tracking-widest tw-uppercase tw-mb-1">About Our Technology</div>
                            <div class="tw-text-4xl md:tw-text-5xl tw-font-bold tw-bg-gradient-to-r tw-from-indigo-400 tw-to-purple-400 tw-bg-clip-text tw-text-transparent">Next Generation UI</div>
                        </div>
                        <div class="tw-w-20 tw-h-1 tw-bg-gradient-to-r from-cyan-500 tw-to-indigo-500 tw-mx-auto"></div>
                    </div>
                    <div class="tw-grid md:tw-grid-cols-2 tw-gap-8 tw-items-center">
                        <div class="tw-relative group">
                            <div class="tw-absolute tw-inset-0 tw-bg-gradient-to-r tw-from-indigo-500/20 tw-to-purple-500/20 tw-rounded-xl blur-sm group-hover:tw-bg-indigo-500/30 tw-transition-all tw-duration-500"></div>
                            <div class="tw-relative bg-gray-900/70 backdrop-blur-lg tw-border tw-border-indigo-500/20 tw-p-6 tw-rounded-xl tw-shadow-xl group-hover:tw-border-indigo-500/40 tw-transition-all tw-duration-300">
                                <div class="tw-flex tw-flex-col">
                                    <div class="tw-font-medium tw-text-xl tw-text-white tw-mb-3">Futuristic Design Approach</div>
                                    <p class="tw-text-gray-400">Our design system uses cutting-edge techniques like glassmorphism, subtle gradients, and neon accents to create interfaces that feel like they're from the future.</p>
                                </div>
                            </div>
                        </div>
                        <div class="tw-relative group">
                            <div class="tw-absolute tw-inset-0 tw-bg-gradient-to-r tw-from-purple-500/20 to-cyan-500/20 tw-rounded-xl blur-sm group-hover:tw-bg-purple-500/30 tw-transition-all tw-duration-500"></div>
                            <div class="tw-relative bg-gray-900/70 backdrop-blur-lg tw-border tw-border-purple-500/20 tw-p-6 tw-rounded-xl tw-shadow-xl group-hover:tw-border-purple-500/40 tw-transition-all tw-duration-300">
                                <div class="tw-flex tw-flex-col">
                                    <div class="tw-font-medium tw-text-xl tw-text-white tw-mb-3">Advanced User Experience</div>
                                    <p class="tw-text-gray-400">Every interaction is carefully crafted to provide fluid tw-transitions, intuitive feedback, and a seamless Browse experience across all devices.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="services" class="tw-min-h-screen tw-flex tw-items-center tw-relative tw-py-20">
            <div class="container tw-mx-auto tw-px-6">
                <div class="tw-max-w-5xl tw-mx-auto">
                    <div class="tw-text-center tw-mb-12">
                        <div class="tw-inline-block tw-mb-3">
                            <div class="tw-text-xs text-cyan-400 tw-tracking-widest tw-uppercase tw-mb-1">What We Offer</div>
                            <div class="tw-text-4xl md:tw-text-5xl tw-font-bold tw-bg-gradient-to-r tw-from-indigo-400 tw-to-purple-400 tw-bg-clip-text tw-text-transparent">Our Services</div>
                        </div>
                        <div class="tw-w-20 tw-h-1 tw-bg-gradient-to-r from-cyan-500 tw-to-indigo-500 tw-mx-auto"></div>
                    </div>
                    <div class="tw-grid md:tw-grid-cols-3 tw-gap-6">
                        <div class="tw-relative group">
                            <div class="tw-absolute tw-inset-0 tw-bg-indigo-500/5 tw-rounded-lg tw-opacity-0 group-hover:tw-opacity-100 blur-sm tw-transition-opacity"></div>
                            <div class="tw-bg-gradient-to-br tw-from-gray-900 to-gray-950 tw-border tw-border-indigo-500/20 tw-rounded-lg tw-p-6 tw-relative tw-z-10 tw-h-full group-hover:tw-border-indigo-500/40 tw-transition-all tw-duration-300">
                                <div class="tw-flex tw-flex-col tw-h-full">
                                    <div class="tw-flex tw-items-center tw-mb-4">
                                        <div class="tw-w-10 tw-h-10 tw-rounded bg-indigo-900/60 tw-flex tw-items-center tw-justify-center tw-mr-3 group-hover:bg-indigo-800/70 tw-transition-colors">
                                            <svg class="tw-w-5 tw-h-5 tw-text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                                            </svg>
                                        </div>
                                        <div class="tw-font-medium tw-text-lg tw-text-indigo-300 group-hover:tw-text-indigo-200 tw-transition-colors">UI Design</div>
                                    </div>
                                    <p class="tw-text-gray-400 tw-mb-4">Create stunning user interfaces with our futuristic design components and templates.</p>
                                    <a href="#" class="tw-mt-auto tw-text-indigo-400 hover:tw-text-indigo-300 tw-inline-flex tw-items-center">
                                        Learn more
                                        <svg class="tw-w-4 tw-h-4 tw-ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="tw-relative group">
                            <div class="tw-absolute tw-inset-0 tw-bg-purple-500/5 tw-rounded-lg tw-opacity-0 group-hover:tw-opacity-100 blur-sm tw-transition-opacity"></div>
                            <div class="tw-bg-gradient-to-br tw-from-gray-900 to-gray-950 tw-border tw-border-purple-500/20 tw-rounded-lg tw-p-6 tw-relative tw-z-10 tw-h-full group-hover:tw-border-purple-500/40 tw-transition-all tw-duration-300">
                                <div class="tw-flex tw-flex-col tw-h-full">
                                    <div class="tw-flex tw-items-center tw-mb-4">
                                        <div class="tw-w-10 tw-h-10 tw-rounded bg-purple-900/60 tw-flex tw-items-center tw-justify-center tw-mr-3 group-hover:bg-purple-800/70 tw-transition-colors">
                                            <svg class="tw-w-5 tw-h-5 tw-text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                            </svg>
                                        </div>
                                        <div class="tw-font-medium tw-text-lg tw-text-purple-300 group-hover:tw-text-purple-200 tw-transition-colors">Development</div>
                                    </div>
                                    <p class="tw-text-gray-400 tw-mb-4">Turn designs into functional websites with our clean, optimized code implementation.</p>
                                    <a href="#" class="tw-mt-auto tw-text-purple-400 hover:tw-text-purple-300 tw-inline-flex tw-items-center">
                                        Learn more
                                        <svg class="tw-w-4 tw-h-4 tw-ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="tw-relative group">
                            <div class="tw-absolute tw-inset-0 bg-cyan-500/5 tw-rounded-lg tw-opacity-0 group-hover:tw-opacity-100 blur-sm tw-transition-opacity"></div>
                            <div class="tw-bg-gradient-to-br tw-from-gray-900 to-gray-950 tw-border border-cyan-500/20 tw-rounded-lg tw-p-6 tw-relative tw-z-10 tw-h-full group-hover:border-cyan-500/40 tw-transition-all tw-duration-300">
                                <div class="tw-flex tw-flex-col tw-h-full">
                                    <div class="tw-flex tw-items-center tw-mb-4">
                                        <div class="tw-w-10 tw-h-10 tw-rounded bg-cyan-900/60 tw-flex tw-items-center tw-justify-center tw-mr-3 group-hover:bg-cyan-800/70 tw-transition-colors">
                                            <svg class="tw-w-5 tw-h-5 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                            </svg>
                                        </div>
                                        <div class="tw-font-medium tw-text-lg text-cyan-300 group-hover:text-cyan-200 tw-transition-colors">UX Research</div>
                                    </div>
                                    <p class="tw-text-gray-400 tw-mb-4">Improve user experience through data-driven insights and comprehensive user testing.</p>
                                    <a href="#" class="tw-mt-auto text-cyan-400 hover:text-cyan-300 tw-inline-flex tw-items-center">
                                        Learn more
                                        <svg class="tw-w-4 tw-h-4 tw-ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="portfolio" class="tw-min-h-screen tw-flex tw-items-center tw-relative tw-py-20">
            <div class="container tw-mx-auto tw-px-6">
                <div class="tw-max-w-5xl tw-mx-auto">
                    <div class="tw-text-center tw-mb-12">
                        <div class="tw-inline-block tw-mb-3">
                            <div class="tw-text-xs text-cyan-400 tw-tracking-widest tw-uppercase tw-mb-1">Our Work</div>
                            <div class="tw-text-4xl md:tw-text-5xl tw-font-bold tw-bg-gradient-to-r tw-from-indigo-400 tw-to-purple-400 tw-bg-clip-text tw-text-transparent">Featured Projects</div>
                        </div>
                        <div class="tw-w-20 tw-h-1 tw-bg-gradient-to-r from-cyan-500 tw-to-indigo-500 tw-mx-auto"></div>
                    </div>
                    
                    <div class="tw-grid md:tw-grid-cols-2 tw-gap-6">
                        <div class="tw-relative group tw-overflow-hidden tw-rounded-xl">
                            <div class="tw-absolute tw-inset-0 tw-bg-gradient-to-br from-indigo-600/80 to-purple-600/80 tw-opacity-0 group-hover:tw-opacity-90 tw-transition-all tw-duration-300 tw-z-10 tw-flex tw-items-center tw-justify-center">
                                <div class="tw-text-center tw-p-4 tw-transform tw-translate-y-8 group-hover:tw-translate-y-0 tw-transition-transform tw-duration-300">
                                    <div class="tw-text-xl tw-font-medium tw-text-white tw-mb-2">AI Dashboard</div>
                                    <p class="tw-text-gray-200 tw-mb-4">Futuristic analytics interface with real-time data visualization</p>
                                    <button class="tw-px-4 tw-py-2 bg-white/20 backdrop-blur-sm tw-rounded tw-text-white hover:bg-white/30 tw-transition-colors tw-duration-300">View Details</button>
                                </div>
                            </div>
                            <div class="aspect-video tw-bg-gradient-to-br tw-from-gray-700 tw-to-gray-900 tw-rounded-xl tw-flex tw-items-center tw-justify-center">
                                <div class="text-cyan-400/30 tw-font-medium">Project Image 1</div>
                            </div>
                        </div>
                        
                        <div class="tw-relative group tw-overflow-hidden tw-rounded-xl">
                            <div class="tw-absolute tw-inset-0 tw-bg-gradient-to-br from-cyan-600/80 to-indigo-600/80 tw-opacity-0 group-hover:tw-opacity-90 tw-transition-all tw-duration-300 tw-z-10 tw-flex tw-items-center tw-justify-center">
                                <div class="tw-text-center tw-p-4 tw-transform tw-translate-y-8 group-hover:tw-translate-y-0 tw-transition-transform tw-duration-300">
                                    <div class="tw-text-xl tw-font-medium tw-text-white tw-mb-2">Crypto Platform</div>
                                    <p class="tw-text-gray-200 tw-mb-4">Modern cryptocurrency trading platform with advanced charting</p>
                                    <button class="tw-px-4 tw-py-2 bg-white/20 backdrop-blur-sm tw-rounded tw-text-white hover:bg-white/30 tw-transition-colors tw-duration-300">View Details</button>
                                </div>
                            </div>
                            <div class="aspect-video tw-bg-gradient-to-br tw-from-gray-700 tw-to-gray-900 tw-rounded-xl tw-flex tw-items-center tw-justify-center">
                                <div class="text-cyan-400/30 tw-font-medium">Project Image 2</div>
                            </div>
                        </div>
                        
                        <div class="tw-relative group tw-overflow-hidden tw-rounded-xl">
                            <div class="tw-absolute tw-inset-0 tw-bg-gradient-to-br from-purple-600/80 to-pink-600/80 tw-opacity-0 group-hover:tw-opacity-90 tw-transition-all tw-duration-300 tw-z-10 tw-flex tw-items-center tw-justify-center">
                                <div class="tw-text-center tw-p-4 tw-transform tw-translate-y-8 group-hover:tw-translate-y-0 tw-transition-transform tw-duration-300">
                                    <div class="tw-text-xl tw-font-medium tw-text-white tw-mb-2">Smart Home UI</div>
                                    <p class="tw-text-gray-200 tw-mb-4">IoT control interface for next generation smart homes</p>
                                    <button class="tw-px-4 tw-py-2 bg-white/20 backdrop-blur-sm tw-rounded tw-text-white hover:bg-white/30 tw-transition-colors tw-duration-300">View Details</button>
                                </div>
                            </div>
                            <div class="aspect-video tw-bg-gradient-to-br tw-from-gray-700 tw-to-gray-900 tw-rounded-xl tw-flex tw-items-center tw-justify-center">
                                <div class="text-cyan-400/30 tw-font-medium">Project Image 3</div>
                            </div>
                        </div>
                        
                        <div class="tw-relative group tw-overflow-hidden tw-rounded-xl">
                            <div class="tw-absolute tw-inset-0 tw-bg-gradient-to-br from-cyan-600/80 to-blue-600/80 tw-opacity-0 group-hover:tw-opacity-90 tw-transition-all tw-duration-300 tw-z-10 tw-flex tw-items-center tw-justify-center">
                                <div class="tw-text-center tw-p-4 tw-transform tw-translate-y-8 group-hover:tw-translate-y-0 tw-transition-transform tw-duration-300">
                                    <div class="tw-text-xl tw-font-medium tw-text-white tw-mb-2">AR Navigation</div>
                                    <p class="tw-text-gray-200 tw-mb-4">Augmented reality navigation system for urban environments</p>
                                    <button class="tw-px-4 tw-py-2 bg-white/20 backdrop-blur-sm tw-rounded tw-text-white hover:bg-white/30 tw-transition-colors tw-duration-300">View Details</button>
                                </div>
                            </div>
                            <div class="aspect-video tw-bg-gradient-to-br tw-from-gray-700 tw-to-gray-900 tw-rounded-xl tw-flex tw-items-center tw-justify-center">
                                <div class="text-cyan-400/30 tw-font-medium">Project Image 4</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="contact" class="tw-min-h-screen tw-flex tw-items-center tw-relative tw-py-20">
            <div class="container tw-mx-auto tw-px-6">
                <div class="tw-max-w-5xl tw-mx-auto">
                    <div class="tw-text-center tw-mb-12">
                        <div class="tw-inline-block tw-mb-3">
                            <div class="tw-text-xs text-cyan-400 tw-tracking-widest tw-uppercase tw-mb-1">Get In Touch</div>
                            <div class="tw-text-4xl md:tw-text-5xl tw-font-bold tw-bg-gradient-to-r tw-from-indigo-400 tw-to-purple-400 tw-bg-clip-text tw-text-transparent">Contact Us</div>
                        </div>
                        <div class="tw-w-20 tw-h-1 tw-bg-gradient-to-r from-cyan-500 tw-to-indigo-500 tw-mx-auto"></div>
                    </div>
                    
                    <div class="tw-grid md:tw-grid-cols-5 tw-gap-8">
                        <div class="md:tw-col-span-2">
                            <div class="bg-gray-900/70 backdrop-blur-lg tw-border tw-border-indigo-500/20 tw-p-6 tw-rounded-xl tw-shadow-xl">
                                <div class="tw-text-xl tw-font-medium tw-text-white tw-mb-4">Contact Information</div>
                                <div class="tw-space-y-4">
                                    <div class="tw-flex tw-items-start">
                                        <svg class="tw-w-5 tw-h-5 text-cyan-400 tw-mt-1 tw-mr-3 tw-flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                        <div>
                                            <div class="tw-text-sm tw-text-gray-400">Address</div>
                                            <div class="tw-text-white">100 Tech Plaza, Innovation District</div>
                                            <div class="tw-text-white">San Francisco, CA 94103</div>
                                        </div>
                                    </div>
                                    <div class="tw-flex tw-items-start">
                                        <svg class="tw-w-5 tw-h-5 text-cyan-400 tw-mt-1 tw-mr-3 tw-flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                        </svg>
                                        <div>
                                            <div class="tw-text-sm tw-text-gray-400">Email</div>
                                            <a href="mailto:info@futurenav.com" class="tw-text-white hover:text-cyan-400 tw-transition-colors">info@futurenav.com</a>
                                        </div>
                                    </div>
                                    <div class="tw-flex tw-items-start">
                                        <svg class="tw-w-5 tw-h-5 text-cyan-400 tw-mt-1 tw-mr-3 tw-flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                        </svg>
                                        <div>
                                            <div class="tw-text-sm tw-text-gray-400">Phone</div>
                                            <a href="tel:+14155552671" class="tw-text-white hover:text-cyan-400 tw-transition-colors">+1 (415) 555-2671</a>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="tw-mt-6">
                                    <div class="tw-text-white tw-mb-2">Follow Us</div>
                                    <div class="tw-flex tw-space-x-3">
                                        <a href="#" class="tw-w-8 tw-h-8 tw-rounded-full bg-indigo-900/50 tw-flex tw-items-center tw-justify-center tw-text-white hover:tw-bg-indigo-800 tw-transition-colors">
                                            <svg class="tw-w-4 tw-h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                            </svg>
                                        </a>
                                        <a href="#" class="tw-w-8 tw-h-8 tw-rounded-full bg-indigo-900/50 tw-flex tw-items-center tw-justify-center tw-text-white hover:tw-bg-indigo-800 tw-transition-colors">
                                            <svg class="tw-w-4 tw-h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                                            </svg>
                                        </a>
                                        <a href="#" class="tw-w-8 tw-h-8 tw-rounded-full bg-indigo-900/50 tw-flex tw-items-center tw-justify-center tw-text-white hover:tw-bg-indigo-800 tw-transition-colors">
                                            <svg class="tw-w-4 tw-h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="md:tw-col-span-3">
                            <div class="bg-gray-900/70 backdrop-blur-lg tw-border tw-border-indigo-500/20 tw-p-6 tw-rounded-xl tw-shadow-xl">
                                <div class="tw-text-xl tw-font-medium tw-text-white tw-mb-4">Send us a message</div>
                                <form @submit.prevent>
                                    <div class="tw-grid md:tw-grid-cols-2 tw-gap-4 tw-mb-4">
                                        <div>
                                            <label for="name" class="tw-block tw-text-sm tw-text-gray-400 tw-mb-1">Name</label>
                                            <input type="text" id="name" class="tw-w-full bg-gray-800/50 tw-border tw-border-gray-700 focus:border-cyan-500 tw-rounded-lg tw-py-2 tw-px-3 tw-text-white focus:tw-outline-none focus:tw-ring-1 focus:ring-cyan-500/50 tw-transition-colors">
                                        </div>
                                        <div>
                                            <label for="email" class="tw-block tw-text-sm tw-text-gray-400 tw-mb-1">Email</label>
                                            <input type="email" id="email" class="tw-w-full bg-gray-800/50 tw-border tw-border-gray-700 focus:border-cyan-500 tw-rounded-lg tw-py-2 tw-px-3 tw-text-white focus:tw-outline-none focus:tw-ring-1 focus:ring-cyan-500/50 tw-transition-colors">
                                        </div>
                                    </div>
                                    <div class="tw-mb-4">
                                        <label for="subject" class="tw-block tw-text-sm tw-text-gray-400 tw-mb-1">Subject</label>
                                        <input type="text" id="subject" class="tw-w-full bg-gray-800/50 tw-border tw-border-gray-700 focus:border-cyan-500 tw-rounded-lg tw-py-2 tw-px-3 tw-text-white focus:tw-outline-none focus:tw-ring-1 focus:ring-cyan-500/50 tw-transition-colors">
                                    </div>
                                    <div class="tw-mb-6">
                                        <label for="message" class="tw-block tw-text-sm tw-text-gray-400 tw-mb-1">Message</label>
                                        <textarea id="message" rows="4" class="tw-w-full bg-gray-800/50 tw-border tw-border-gray-700 focus:border-cyan-500 tw-rounded-lg tw-py-2 tw-px-3 tw-text-white focus:tw-outline-none focus:tw-ring-1 focus:ring-cyan-500/50 tw-transition-colors tw-resize-none"></textarea>
                                    </div>
                                    <div class="tw-relative group">
                                        <div class="tw-absolute tw--inset-0.5 tw-bg-gradient-to-r from-indigo-600/50 to-purple-600/50 tw-rounded-lg blur tw-opacity-75 group-hover:tw-opacity-100 tw-transition-all tw-duration-500"></div>
                                        <button type="submit" class="tw-w-full tw-px-6 tw-py-3 tw-bg-gradient-to-r from-indigo-900/90 to-purple-900/90 tw-rounded-lg tw-text-white tw-text-base tw-font-medium tw-relative tw-z-10 tw-flex tw-items-center tw-justify-center tw-gap-2 group-hover:from-indigo-800/90 group-hover:to-purple-800/90 tw-transition-all tw-duration-300">
                                            <span class="tw-bg-gradient-to-r from-cyan-300 tw-to-indigo-300 tw-bg-clip-text tw-text-transparent">Send Message</span>
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
    
    <footer class="bg-gray-900/80 backdrop-blur-lg tw-border-t tw-border-gray-800">
        <div class="container tw-mx-auto tw-px-6 tw-py-8">
            <div class="tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-items-center">
                <div class="tw-flex tw-items-center tw-mb-4 md:tw-mb-0">
                    <div class="tw-relative tw-mr-2">
                        <div class="tw-absolute tw-inset-0 bg-cyan-400/30 tw-rounded-md blur-sm"></div>
                        <div class="tw-w-8 tw-h-8 tw-rounded-md tw-bg-gradient-to-br tw-from-indigo-600 tw-to-purple-600 tw-border border-indigo-400/30 tw-flex tw-items-center tw-justify-center tw-relative tw-shadow-lg shadow-indigo-800/20">
                            <div class="tw-absolute inset-[2px] tw-bg-gray-900 rounded-[3px] tw-flex tw-items-center tw-justify-center tw-overflow-hidden">
                                <div class="tw-absolute tw-inset-0 tw-bg-gradient-to-br from-indigo-900/20 to-purple-900/20"></div>
                                <div class="tw-font-bold tw-text-xs tw-bg-gradient-to-r from-cyan-400 tw-to-indigo-400 tw-bg-clip-text tw-text-transparent">FN</div>
                            </div>
                        </div>
                    </div>
                    <div class="tw-text-lg tw-font-medium tw-bg-gradient-to-r tw-from-indigo-400 via-cyan-400 tw-to-purple-400 tw-bg-clip-text tw-text-transparent tw-flex tw-items-center">
                        FutureNav
                    </div>
                </div>
                
                <div class="tw-flex tw-justify-center tw-mb-4 md:tw-mb-0">
                    <a href="#home" @click.prevent="scrollToSection('home')" class="tw-text-gray-400 hover:text-cyan-400 tw-mx-2 tw-transition-colors">Home</a>
                    <a href="#about" @click.prevent="scrollToSection('about')" class="tw-text-gray-400 hover:text-cyan-400 tw-mx-2 tw-transition-colors">About</a>
                    <a href="#services" @click.prevent="scrollToSection('services')" class="tw-text-gray-400 hover:text-cyan-400 tw-mx-2 tw-transition-colors">Services</a>
                    <a href="#portfolio" @click.prevent="scrollToSection('portfolio')" class="tw-text-gray-400 hover:text-cyan-400 tw-mx-2 tw-transition-colors">Portfolio</a>
                    <a href="#contact" @click.prevent="scrollToSection('contact')" class="tw-text-gray-400 hover:text-cyan-400 tw-mx-2 tw-transition-colors">Contact</a>
                </div>
                
                <div class="tw-flex tw-space-x-3">
                    <a href="#" class="tw-w-8 tw-h-8 tw-rounded-full bg-indigo-900/50 tw-flex tw-items-center tw-justify-center tw-text-white hover:tw-bg-indigo-800 tw-transition-colors">
                        <svg class="tw-w-4 tw-h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                        </svg>
                    </a>
                    <a href="#" class="tw-w-8 tw-h-8 tw-rounded-full bg-indigo-900/50 tw-flex tw-items-center tw-justify-center tw-text-white hover:tw-bg-indigo-800 tw-transition-colors">
                        <svg class="tw-w-4 tw-h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                        </svg>
                    </a>
                    <a href="#" class="tw-w-8 tw-h-8 tw-rounded-full bg-indigo-900/50 tw-flex tw-items-center tw-justify-center tw-text-white hover:tw-bg-indigo-800 tw-transition-colors">
                        <svg class="tw-w-4 tw-h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                        </svg>
                    </a>
                </div>
            </div>
            <div class="tw-text-center tw-text-gray-500 tw-text-sm tw-mt-8">
                © 2025 FutureNav. All rights reserved.
            </div>
        </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'FutureNavPage',
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
      if (this.isMobileMenuOpen) {
        menu.style.height = `${menu.scrollHeight}px`;
      } else {
        menu.style.height = '0';
      }
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
      this.$refs.mobileMenu.style.height = '0';
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
  --glass-effect: blur(12px);
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
  transition: background-color 0.5s ease;
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
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, var(--primary-dark), var(--accent));
}

/* Navigation Bar Styles */
#navbar.scrolled {
  padding: 0.5rem 0;
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
  text-shadow: 0 0 8px rgba(6, 182, 212, 0.3);
}

/* Mobile Navigation Hamburger Animation */
#mobile-menu-button #line1,
#mobile-menu-button #line2,
#mobile-menu-button #line3 {
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    transform-origin: center;
}

#mobile-menu-button.active #line1 {
    transform: translateY(4.5px) rotate(45deg);
}

#mobile-menu-button.active #line2 {
    opacity: 0;
}

#mobile-menu-button.active #line3 {
    transform: translateY(-4.5px) rotate(-45deg);
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