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
  },{id: "nav-organization",
          title: "Organization",
          description: "About ESB AI Lab, a California 501(c)(3) nonprofit.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/organization/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "Current and past research projects in computational genomics, AI for agriculture, and climate resilience.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Publications from ESB AI Lab.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-education",
          title: "Education",
          description: "Intensive bootcamps, workshops, and training in AI, machine learning, bioinformatics, and scientific computing.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/education/";
          },
        },{id: "nav-donate",
          title: "Donate",
          description: "Support ESB AI Lab&#39;s mission in AI, conservation, and education.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/donate/";
          },
        },{id: "nav-contact",
          title: "Contact",
          description: "Get in touch with ESB AI Lab.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "nav-team",
          title: "Team",
          description: "Meet the team behind ESB AI Lab.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/team/";
          },
        },{id: "nav-news",
          title: "News",
          description: "Latest updates from ESB AI Lab",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "news-paper-published-in-genome-research-diverse-patterns-of-secondary-structure-across-genes-and-transposable-elements-are-associated-with-sirna-production-and-epigenetic-fate",
          title: 'Paper published in Genome Research. “Diverse patterns of secondary structure across genes and...',
          description: "",
          section: "News",},{id: "news-avocado-genome-study-published-in-g3-featured-in-sdsc-news-and-uc-san-diego-today",
          title: 'Avocado genome study published in G3. Featured in SDSC News and UC San...',
          description: "",
          section: "News",},{id: "news-maize-rna-structures-research-featured-in-sdsc-press-release-read-supercomputing-simulations-in-multiyear-study-of-corn-to-address-food-insecurity",
          title: 'Maize RNA structures research featured in SDSC press release. Read: “Supercomputing Simulations in...',
          description: "",
          section: "News",},{id: "news-dr-edwin-solares-awarded-50-000-through-the-university-of-california-san-diego-under-the-ca-cares-program-this-funding-supports-computational-research-in-bioinformatics-and-ai-the-award-was-administered-by-ucsd-the-research-and-expertise-developed-through-this-work-inform-the-research-directions-esb-ai-lab-is-building-toward",
          title: 'Dr. Edwin Solares awarded $50,000 through the University of California, San Diego under...',
          description: "",
          section: "News",},{id: "news-dr-edwin-solares-awarded-approximately-465-000-from-the-usda-nifa-western-regional-aquaculture-center-wrac-as-lead-principal-investigator-the-grant-supports-development-of-computer-vision-and-deep-learning-methods-for-non-invasive-sex-determination-in-white-sturgeon-this-research-was-awarded-to-dr-solares-individually-through-the-university-of-california-davis-the-methods-and-domain-expertise-developed-through-this-work-inform-the-research-directions-esb-ai-lab-is-building-toward-in-computer-vision-for-aquaculture-species-assessment",
          title: 'Dr. Edwin Solares awarded approximately $465,000 from the USDA NIFA Western Regional Aquaculture...',
          description: "",
          section: "News",},{id: "news-sturgeon-ai-research-featured-in-national-media-coverage-in-sdsc-access-ci-and-seafoodsource-new-ai-technology-aims-to-revolutionize-fish-farming",
          title: 'Sturgeon AI research featured in national media. Coverage in SDSC, ACCESS-CI, and SeafoodSource:...',
          description: "",
          section: "News",},{id: "news-esb-ai-lab-corporation-is-officially-incorporated-in-california-the-california-secretary-of-state-approved-the-articles-of-incorporation-entity-no-b20260165215-establishing-esb-ai-lab-as-a-california-nonprofit-public-benefit-corporation-organized-exclusively-for-scientific-educational-and-charitable-purposes-within-the-meaning-of-section-501-c-3-of-the-internal-revenue-code",
          title: 'ESB AI Lab Corporation is officially incorporated in California. The California Secretary of...',
          description: "",
          section: "News",},{id: "news-statement-of-information-filed-and-incorporator-resolutions-signed-the-california-si-100-was-filed-file-no-ba20260926447-designating-edwin-solares-as-executive-director-kwasi-connor-as-treasurer-and-allison-moreno-as-secretary-incorporator-initial-resolutions-formally-appointed-all-three-as-directors",
          title: 'Statement of Information filed and Incorporator Resolutions signed. The California SI-100 was filed...',
          description: "",
          section: "News",},{id: "news-esb-ai-lab-corporation-holds-organizational-formation-meeting-the-board-ratified-the-articles-of-incorporation-confirmed-the-initial-board-with-staggered-terms-elected-officers-adopted-amended-and-restated-bylaws-adopted-a-conflict-of-interest-policy-established-the-education-program-approved-the-fy2026-27-budget-and-authorized-the-corporation-to-obtain-an-ein-open-a-bank-account-and-file-for-federal-and-state-tax-exempt-status-the-bylaws-were-restated-and-ratified-demonstrating-the-board-s-commitment-to-esb-ai-lab-s-mission-of-advancing-scientific-research-and-education-through-artificial-intelligence-machine-learning-computer-vision-and-genomics-across-food-security-species-conservation-climate-resilience-human-health-science-accessibility-and-language-preservation",
          title: 'ESB AI Lab Corporation holds organizational formation meeting. The Board ratified the Articles...',
          description: "",
          section: "News",},{id: "news-foundation-group-engaged-for-501-c-3-formation-esb-ai-lab-corporation-engaged-foundation-group-under-their-surestart-complete-package-to-manage-the-full-federal-and-state-tax-exemption-process-including-irs-form-1023-california-ftb-form-3500-attorney-general-ct-1-registration-and-first-year-form-990-preparation",
          title: 'Foundation Group engaged for 501(c)(3) formation. ESB AI Lab Corporation engaged Foundation Group...',
          description: "",
          section: "News",},{id: "news-esb-ai-lab-corporation-receives-employer-identification-number-the-irs-assigned-ein-42-2446472-notice-cp575e-this-enables-the-corporation-to-open-a-business-bank-account-apply-for-501-c-3-tax-exempt-status-and-register-with-federal-grant-systems-including-sam-gov-grants-gov-and-nih-era-commons",
          title: 'ESB AI Lab Corporation receives Employer Identification Number. The IRS assigned EIN 42-2446472...',
          description: "",
          section: "News",},{id: "news-esb-ai-lab-executive-director-edwin-solares-attends-web-summit-vancouver-2026-looking-forward-to-connecting-with-researchers-entrepreneurs-and-technologists-exploring-how-artificial-intelligence-can-accelerate-scientific-discovery-and-address-global-challenges-in-food-security-conservation-and-climate-resilience",
          title: 'ESB AI Lab Executive Director Edwin Solares attends Web Summit Vancouver 2026. Looking...',
          description: "",
          section: "News",},{id: "news-red-abalone-deep-learning-paper-published-in-frontiers-in-artificial-intelligence-this-work-demonstrates-that-convolutional-neural-networks-can-classify-reproductive-tissue-from-ultrasound-imagery-non-invasively-reducing-stress-on-animals-lowering-operational-costs-for-producers-and-improving-scalability-in-breeding-programs-this-is-the-first-application-of-deep-learning-to-sex-determination-in-abalone-and-opens-a-pathway-for-ai-assisted-species-assessment-in-aquaculture-more-broadly-read-the-paper",
          title: 'Red Abalone deep learning paper published in Frontiers in Artificial Intelligence. This work...',
          description: "",
          section: "News",},{id: "news-pvgap-paper-published-in-the-journal-of-infectious-diseases-this-work-describes-a-cost-effective-amplicon-panel-with-80-high-diversity-targets-for-population-genomics-and-8-targets-of-epidemiological-interest-for-plasmodium-vivax-validated-with-ethiopian-field-samples-and-computational-assessment-across-three-geographic-regions-the-panel-supports-drug-resistance-tracking-distinguishes-infection-origins-and-helps-separate-reinfection-from-recrudescence-in-efficacy-studies-read-the-paper",
          title: 'PvGAP paper published in The Journal of Infectious Diseases. This work describes a...',
          description: "",
          section: "News",},{id: "news-esb-ai-lab-corporation-is-now-a-registered-entity-in-the-u-s-federal-government-s-system-for-award-management-sam-gov-the-registration-assigns-esb-ai-lab-a-unique-entity-id-uei-d1sdzls12kk6-enabling-the-organization-to-apply-for-and-receive-federal-grants-contracts-and-cooperative-agreements-this-milestone-positions-esb-ai-lab-to-pursue-funding-from-agencies-including-nsf-nih-usda-and-doe-in-support-of-its-mission-to-advance-scientific-research-through-artificial-intelligence-machine-learning-and-genomics",
          title: 'ESB AI Lab Corporation is now a registered entity in the U.S. federal...',
          description: "",
          section: "News",},{id: "news-esb-ai-lab-launches-its-education-programs-page-featuring-22-hands-on-training-programs-across-four-domains-bioinformatics-machine-learning-infrastructure-and-hardware-offerings-range-from-free-public-seminars-to-multi-day-bootcamps-in-ai-scientific-computing-computer-vision-and-genomics-programs-are-designed-for-working-researchers-with-contact-hours-ranging-from-4-to-32-hours-an-interest-form-is-now-live-for-prospective-participants-to-indicate-which-programs-they-would-like-to-see-scheduled-first-program-dates-will-be-set-based-on-demand-and-scholarship-support-is-available",
          title: 'ESB AI Lab launches its Education Programs page, featuring 22 hands-on training programs...',
          description: "",
          section: "News",},{id: "news-executive-director-edwin-solares-s-research-on-ai-assisted-sex-determination-in-endangered-red-abalone-is-featured-by-the-san-diego-supercomputer-center-the-study-developed-deep-learning-models-trained-on-thousands-of-ultrasound-images-to-identify-abalone-sex-non-invasively-achieving-approximately-86-accuracy-with-near-instantaneous-results-traditional-methods-require-removing-abalone-from-their-shells-causing-stress-and-potential-injury-the-work-conducted-at-uc-san-diego-using-nsf-access-allocations-on-sdsc-s-expanse-and-pittsburgh-supercomputing-center-s-bridges-2-systems-supports-conservation-hatcheries-in-selecting-mature-breeding-candidates-more-efficiently-this-research-was-completed-prior-to-dr-solares-s-appointment-as-executive-director-of-esb-ai-lab",
          title: 'Executive Director Edwin Solares’s research on AI-assisted sex determination in endangered red abalone...',
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
            },},{id: "projects-ai-driven-genome-assembly-amp-variant-calling",
          title: 'AI-Driven Genome Assembly &amp;amp; Variant Calling',
          description: "AI and bioinformatics methods for more accurate, continuous genome assemblies and improved downstream analysis",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_genome_assembly/";
            },},{id: "projects-cv-framework",
          title: 'CV Framework',
          description: "Open-source computer vision for agriculture and conservation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_cv_framework/";
            },},{id: "projects-ai-directed-breeding",
          title: 'AI-Directed Breeding',
          description: "Developing machine learning methods to accelerate selective breeding decisions in agriculture and aquaculture",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_ai_breeding/";
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
