  // Carousel functionality
        let currentSlideIndex = 0;
        const slides = document.querySelectorAll('.carousel-slide');
        const dots = document.querySelectorAll('.carousel-dot');
        let autoSlideInterval;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove('active');
                dots[i].classList.remove('active');
            });

            if (index >= slides.length) {
                currentSlideIndex = 0;
            } else if (index < 0) {
                currentSlideIndex = slides.length - 1;
            } else {
                currentSlideIndex = index;
            }

            slides[currentSlideIndex].classList.add('active');
            dots[currentSlideIndex].classList.add('active');
        }

        function nextSlide() {
            showSlide(currentSlideIndex + 1);
            resetAutoSlide();
        }

        function previousSlide() {
            showSlide(currentSlideIndex - 1);
            resetAutoSlide();
        }

        function currentSlide(index) {
            showSlide(index);
            resetAutoSlide();
        }

        function autoSlide() {
            nextSlide();
        }

        function resetAutoSlide() {
            clearInterval(autoSlideInterval);
            autoSlideInterval = setInterval(autoSlide, 5000);
        }

        // Start auto-sliding
        autoSlideInterval = setInterval(autoSlide, 5000);

        // Hamburger menu
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Scroll reveal animation
        function reveal() {
            const reveals = document.querySelectorAll('.reveal');
            reveals.forEach(element => {
                const windowHeight = window.innerHeight;
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;

                if (elementTop < windowHeight - elementVisible) {
                    element.classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', reveal);
        reveal(); // Initial check

        // City selector
        function loadCity(city) {
            if (!city) return;
            
            const cityData = {
                lagos: {
                    name: "Lagos, Nigeria",
                    description: "Africa's largest megacity reimagined as a sustainable coastal innovation hub"
                },
                nairobi: {
                    name: "Nairobi, Kenya",
                    description: "Green city of the future with smart wildlife corridors and tech innovation"
                },
                cairo: {
                    name: "Cairo, Egypt",
                    description: "Ancient heritage meets futuristic design along the Nile"
                },
                johannesburg: {
                    name: "Johannesburg, South Africa",
                    description: "Mining city transformed into a renewable energy powerhouse"
                },
                accra: {
                    name: "Accra, Ghana",
                    description: "West Africa's digital gateway and smart trade center"
                },
                dakar: {
                    name: "Dakar, Senegal",
                    description: "Atlantic hub of culture, innovation, and sustainable development"
                }
            };

            if (cityData[city]) {
                alert(`Exploring ${cityData[city].name}\n\n${cityData[city].description}`);
            }
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Close mobile menu if open
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            });
        });

        // Add parallax effect to hero
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            if (hero && scrolled < window.innerHeight) {
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });

        // Keyboard navigation for carousel
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                previousSlide();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
            }
        });

        // Pause carousel on hover
        const carouselContainer = document.querySelector('.carousel-container');
        carouselContainer.addEventListener('mouseenter', () => {
            clearInterval(autoSlideInterval);
        });

        carouselContainer.addEventListener('mouseleave', () => {
            resetAutoSlide();
        });
