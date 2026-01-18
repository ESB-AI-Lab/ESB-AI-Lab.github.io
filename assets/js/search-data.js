// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "Current and past research projects in computational genomics, AI for agriculture, and climate resilience.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-team",
          title: "Team",
          description: "Meet the members of the ES Bioinformatics and AI Lab.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/team/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Publications from the ES Bioinformatics and AI Lab.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/index.html";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-paper-published-in-genome-research-diverse-patterns-of-secondary-structure-across-genes-and-transposable-elements-are-associated-with-sirna-production-and-epigenetic-fate",
          title: 'Paper published in Genome Research - “Diverse patterns of secondary structure across genes...',
          description: "",
          section: "News",},{id: "news-appointed-as-lecturer-at-uc-san-diego-in-computer-science-and-engineering-department-and-halicioglu-data-science-institute",
          title: 'Appointed as Lecturer at UC San Diego in Computer Science and Engineering Department...',
          description: "",
          section: "News",},{id: "news-avocado-genome-study-published-in-g3-and-featured-in-sdsc-news-and-uc-san-diego-today",
          title: 'Avocado genome study published in G3 and featured in SDSC News and UC...',
          description: "",
          section: "News",},{id: "news-expanded-teaching-role-at-halicioglu-data-science-institute-hdsi-at-uc-san-diego-teaching-graduate-level-big-data-analytics-and-machine-learning-courses",
          title: 'Expanded teaching role at Halicioglu Data Science Institute (HDSI) at UC San Diego,...',
          description: "",
          section: "News",},{id: "news-maize-rna-structures-research-featured-in-sdsc-press-release-supercomputing-simulations-in-multiyear-study-of-corn-to-address-food-insecurity",
          title: 'Maize RNA structures research featured in SDSC press release - “Supercomputing Simulations in...',
          description: "",
          section: "News",},{id: "news-awarded-465-000-grant-from-usda-nifa-western-regional-aquaculture-center-as-pi-to-develop-ai-technology-for-sturgeon-aquaculture",
          title: 'Awarded ~$465,000 grant from USDA NIFA Western Regional Aquaculture Center as PI to...',
          description: "",
          section: "News",},{id: "news-joined-informuta-inc-as-machine-learning-engineer-applying-ai-solutions-to-industry-challenges-alongside-academic-research",
          title: 'Joined Informuta, Inc. as Machine Learning Engineer, applying AI solutions to industry challenges...',
          description: "",
          section: "News",},{id: "news-our-sturgeon-ai-research-featured-in-sdsc-access-ci-and-seafoodsource-new-ai-technology-aims-to-revolutionize-fish-farming",
          title: 'Our Sturgeon AI research featured in SDSC, ACCESS-CI, and SeafoodSource - “New AI...',
          description: "",
          section: "News",},{id: "projects-sturgeon-ai",
          title: 'Sturgeon AI',
          description: "AI-assisted sex determination in sturgeon aquaculture",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_sturgeon_ai/";
            },},{id: "projects-maize-rna-structures",
          title: 'Maize RNA Structures',
          description: "Novel miRNA-like structures in maize genome regulation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_maize_rna/";
            },},{id: "projects-avocado-genomics",
          title: 'Avocado Genomics',
          description: "Domestication history and heterodichogamy in avocado",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_avocado/";
            },},{id: "projects-rapid-genome-assembly",
          title: 'Rapid Genome Assembly',
          description: "Cost-effective, high-quality genome assembly methods",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_genome_assembly/";
            },},{id: "projects-cv-framework",
          title: 'CV Framework',
          description: "Open-source computer vision for agriculture and conservation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_cv_framework/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ESB-AI-Lab", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=uhDHFV4AAAAJ", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-3220-4927", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/solarese", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Edwin-Solares/", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
