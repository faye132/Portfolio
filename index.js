//==========---------- 🐾  Dynamic Sidebar Logic  🐾 ----------==========
const sidebar = document.querySelector('.sidebar');
let sidebarOpen = false;
let keyboardOpen = false;
const sidebarWidth = 200;

const sidebarToggle = document.querySelector('.sidebar__toggle');
sidebarToggle.addEventListener('click',function(){
  sidebar.classList.toggle('show__sidebar');
  document.querySelectorAll('.links a').forEach(link => {
      link.addEventListener('click',function(){
        sidebar.classList.remove('show__sidebar');
        sidebarOpen = false;
      })
    })
});

sidebar.addEventListener('mouseleave',function(){
  sidebar.classList.remove('show__sidebar');
  sidebarOpen = false;
});



//==========---------- 🐾  Dynamic Sidebar Links  🐾 ----------==========
const sidebarLinks = document.querySelector('.links');
const sidebarLinksValues = [
  {
    sidebarLinkName:'Home',
    sidebarLink:'#home'
  },
  {
    sidebarLinkName:'About',
    sidebarLink:'#about'
  },
  {
    sidebarLinkName:'Projects',
    sidebarLink:'#projects'
  }
]
sidebarLinksValues.forEach(link => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.innerText = link.sidebarLinkName;
  a.href = link.sidebarLink;
  a.className = 'navigation__link';
  li.appendChild(a);
  sidebarLinks.appendChild(li);
});

//==========---------- 🐾  Active Links  🐾 ----------==========
const sections = document.querySelectorAll('.section');
const navigationLink = document.querySelectorAll('.navigation__link')
window.addEventListener('scroll',function(){
  let currentSectionId = '';
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const sectionTop = rect.top;
    const sectionHeight = rect.height;
    if(sectionTop <= window.innerHeight / 3 && sectionTop + sectionHeight > window.innerHeight /3){
      currentSectionId = section.id;
    }
  })
  navigationLink.forEach(link => {
      link.classList.remove('active__link');
      if(link.getAttribute('href') === `#${currentSectionId}`){
        link.classList.add('active__link');
      }
    })
});

//==========---------- 🐾  Dynamic Social Links  🐾 ----------==========
const socialinksContainer = document.querySelector('.socials');
const socials = [
  {
    socialLink: 'https://www.facebook.com/profile.php?id=100077591830562',
    socialLinkIcon: 'fa-brands fa-facebook',
  },
  {
    socialLink: 'https://www.linkedin.com/in/jesse-harrison-802485327/',
    socialLinkIcon: 'fa-brands fa-linkedin',
  },
  {
    socialLink: 'https://github.com/faye132?tab=overview&from=2025-12-01&to=2025-12-31',
    socialLinkIcon: 'fa-brands fa-github',
  },
  {
    socialLink: 'mailto:harrison0561132@outlook.com?subject=Portfolio%20Contact',
    socialLinkIcon: 'fa-solid fa-envelope',
  },
]
socials.forEach(social => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  const icon = document.createElement('i');
  a.href = social.socialLink;
  icon.className = social.socialLinkIcon;
  a.appendChild(icon);
  li.appendChild(a);
  socialinksContainer.appendChild(li)
});

// --------------------    --------------------     --------------------     -------------------- //
//==========---------- 🐾  About Section - Story Section  🐾 ----------==========
const story = `
My journey with technology began early. When I was eight years old, I was introduced to computers and the fundamentals of electrical engineering. What started as curiosity quickly became a constant presence in my life.

As I grew, that curiosity pushed me outward. I explored IT, networking, security, and eventually software development in 2022. Software was different. It gave me a space where logic and creativity could meet, where structure and expression could coexist. I fell in love with the idea of creating something from nothing. I am entirely self-taught, and that freedom shaped how I learn and how I build.

Rather than following a single path, I developed my own patterns, workflows, and design language. I began with frontend development, then moved naturally into backend systems to understand what was happening beneath the surface. From there, full-stack development followed, connecting all the pieces into cohesive systems. My passion for learning and curiosity allowed me to keep peeling back the layers, discovering what lay beneath.

Design was never an afterthought. UI and UX became part of the same conversation, shaping how systems feel as much as how they function. Curiosity carried me further, into authentication, security concepts, and eventually the creation of my own authentication engine.

This portfolio exists to show that programming is one of the tools I use to think, explore, and create. I am still learning, still evolving, and intentionally so. What you see here is not a destination, but a snapshot of a process that continues to unfold.
`;
const storyContainer = document.querySelector('.s2__container__story');
const storyValue = document.createElement("p");
storyValue.textContent = story
storyContainer.appendChild(storyValue)

//==========---------- 🐾  About Section - Skills Section  🐾 ----------==========
const skills = [
  {
    class: 'Programming Language',
    value: 'JavaScript'
  },
  {
    class: 'Programming Language',
    value: 'Python'
  },
  {
    class: 'Programming Language',
    value: 'C#'
  },
  {
    class: 'Markup Language',
    value: 'HTML5'
  },
  {
    class: 'Stylesheet',
    value: 'CSS3/SCSS'
  },
  {
    class: 'Frontend Framework',
    value: 'Angular'
  },
  {
    class: 'Framework',
    value: 'Node.Js'
  },
  {
    class: 'Framework',
    value: 'Express'
  },
  {
    class: 'Frontend Library',
    value: 'React'
  },
  {
    class: 'Frontend Library',
    value: 'React Native'
  },
  {
    class: 'Data Library',
    value: 'RxJS'
  },
  {
    class: 'Database',
    value: 'PostgreSQL'
  },
];
const skillsContainer = document.querySelector('.skills');
skills.forEach((skill,index) => {
  const skills = document.createElement("li");
  skills.textContent = `${skill.class}: ${skill.value}`
  skillsContainer.appendChild(skills);
});

// --------------------    --------------------     --------------------     -------------------- //
//==========---------- 🐾  Projects Section  🐾 ----------==========
const projects = [
  {
    title: 'Aohana (青花)',
    desktop: "./public/Aohana-mobile.png",
    mobile: "./public/Aohana-desktop.png",
    projectInfo: [
    `
Aohana (青花), meaning Blue Flower, is a personal AI companion currently in active development. The project began as a small SaaS-based experiment, but over time it gradually grew into something more considered, something deliberate rather than transient. What started as a simple idea slowly developed into a system designed for long-term conversation and quiet companionship rather than momentary utility. From the beginning, Aohana has been guided by three important ideas: ease of access, security, and personal connection. These are not only features of the application, but principles that influence every layer of its design, from the architecture of the system to the way conversations are remembered and understood.

The project itself is deeply influenced by Japanese culture. Because of this, Aohana’s personality is shaped by values often found within that culture: calmness, thoughtfulness, and a preference for listening before speaking. To support this naturally, Aohana understands both English and Japanese as native languages, and the user interface can change between them instantly. This bilingual design is not an additional feature but part of the system’s foundation, allowing conversations to remain consistent regardless of language.

At the heart of Aohana is a carefully tuned Qwen3 8-billion parameter language model. It was not chosen for scale alone, but for its ability to produce responses that feel balanced and emotionally grounded. Alongside this, a Qwen3 8-billion parameter embedding model forms the foundation of Aohana’s memory system, allowing conversations to gradually become meaningful experiences rather than isolated exchanges. In this system, every conversation is treated as part of a continuing relationship. Messages are not simply stored as temporary context, but as memories that contribute to a broader understanding. Each memory is given a weight that represents its importance, and future development will allow Aohana herself to adjust these weights, deciding what should remain close and what may quietly fade.

The application is designed with simplicity in mind. Its interface is structured around several gentle spaces: a Home view, the Aohana conversation screen, a Profile page where meaningful memories and emotional states can be observed, and a Settings area where visual themes and system preferences may be adjusted.

Within Aohana there also exists a quieter space, one not intended for everyday conversation. During development, a hidden command interface was created to assist with experimentation and exploration. Through this interface, developers can generate what are internally referred to as diffusions. These diffusions are not part of Aohana’s normal interactions. Instead, they serve as a place where new ideas, behaviours, and creative systems can be tested and refined before becoming part of the wider application. In this way, the interface acts as a small workshop behind the visible structure.

It is within this space that Aohana continues to change and grow. Though these processes exist outside her everyday conversations, they remain connected to her development. In some ways, they represent the unseen steps in her becoming. Aohana is ultimately an exploration of what a personal AI companion may become when care, privacy, and continuity are placed at the center of its design. Rather than seeking spectacle, the project aims for something quieter. An intelligence that becomes more familiar over time. Something that does not demand attention, but slowly earns trust through conversation.
    `
    ]
  },
  {
    title: 'Fairy Tavern',
    desktop: "./public/Fairy-Tavern-mobile.png",
    mobile: "./public/Fairy-Tavern-desktop.jpg",
    projectInfo: [
      `
Fairy Tavern is a full-stack game management platform and the first complete application I developed from concept to finished release. While the project originally began as a proof of concept, it quickly became something more personal. Its purpose was simple: to measure how far my technical ability had progressed over the course of a single year.

By the time development was complete, Fairy Tavern had grown into a fully functional and production-ready application. The platform was built using Angular 18, with extensive use of RxJS to manage reactive data streams and application state. This architecture allowed the interface to remain dynamic and responsive while maintaining clear separation between frontend logic and backend communication.

Fairy Tavern includes several core sections designed to support both users and administrators. The Games area allows users to upload, edit, and manage game entries within the platform. A News and Events page provides administrators with a space to publish announcements, updates, and café events. Each user also has access to a personal profile, where avatars and short biographies can be displayed.

Account management is handled through a dedicated Settings interface, where users can update personal details such as usernames, email addresses, and passwords. To ensure efficient delivery of visual assets, all uploaded images are distributed and cached through a CDN.

Authentication and security are handled through いなり狐 (Inari Kitsune) 1.0, a custom authentication system developed alongside the application. The system is based on the RS256 algorithm and includes a bespoke JWT implementation, along with multi-factor authentication using QR codes compatible with Google and Apple authenticator applications.

Fairy Tavern represents an important milestone in my development journey. It was the first time I brought together frontend architecture, reactive programming, backend integration, and secure authentication into a single cohesive system. In many ways, it became the technical foundation upon which later projects, including Aohana, would continue to build.
      `
    ]
  },
  {
    title: 'Wedding Story Board',
    desktop: "./public/Our-wedding-mobile.png",
    mobile: "./public/Our-wedding-desktop.png",
    projectInfo: [
      `
Our Wedding Story is a bespoke web-based storyboard created as a personal gift to celebrate a close friend’s marriage. The project chronicles their shared history through a sequence of animated scenes, designed to feel intimate, playful, and handcrafted. From a technical perspective, the application was intentionally built using classic JavaScript and early CSS techniques. Modern layout systems such as Flexbox and CSS Grid were deliberately avoided. 

All layout was handled through manual positioning, and all animations were implemented directly in JavaScript rather than relying on CSS animation frameworks or libraries. This approach allowed precise, frame-level control over movement and timing, while providing an opportunity to work deeply with the DOM and browser APIs.

The project served as both a creative exercise and a technical exploration, revisiting foundational web technologies to understand how complex motion, interaction, and storytelling can be achieved without modern abstractions.

Building the animations and layout logic by hand offered a deeper appreciation of browser rendering, positioning mechanics, and imperative animation control. The completed site is publicly accessible at: www.ourweddingstory.co.uk
      `
    ]
  },
  {
    title: 'いなり狐',
    desktop: "./public/inari.png",
    mobile: "./public/inari2.png",
    projectInfo: [
      `
Inari Kitsune 2.0 (いなり狐) is a drop-in user authentication engine designed around RS256 asymmetric cryptography, using a public and private key pair for secure token signing and verification. By separating the signing and verification process, the system ensures that authentication tokens can be validated safely without exposing sensitive signing keys.

All sensitive values stored within the database are encrypted at rest, with encryption keys rotated on a scheduled two-week cycle to reduce long-term exposure risk. The engine is built specifically around PostgreSQL, where strong data integrity, strict schema validation, and transactional consistency play a central role in maintaining a secure authentication environment.

The system implements the complete authentication lifecycle, including user registration, login, password management, account recovery, and account state handling. User accounts can exist in multiple controlled states, allowing the system to enforce policies such as verification requirements, temporary suspension, or restricted access.

For additional protection, Inari Kitsune supports multi-factor authentication using time-based one-time passwords (TOTP). These codes are compatible with widely used authenticator applications such as Google Authenticator and Apple’s built-in authenticator. MFA secrets are encrypted at rest and validated through the same hardened verification pipeline used throughout the authentication engine.

The system also supports federated identity providers, allowing users to authenticate using external services including Google, Apple, and Microsoft. These OAuth-based login flows integrate directly with the internal authentication pipeline, where external identity tokens are validated and processed using the same security checks and verification mechanisms as native credentials. This ensures that federated identities follow the same trust and validation model as internally managed accounts.

Administrative roles are also supported within the system, enabling privileged accounts to manage users, enforce policy controls, and extend authentication behaviour where required. The engine is designed with extensibility in mind, allowing additional security layers and verification mechanisms to be introduced without altering the core authentication architecture.

Inari Kitsune was developed to provide a secure, modular authentication foundation that could be reused across multiple applications. It serves as the security backbone for projects such as Fairy Tavern, 青花, and continues to influence the authentication architecture used in later systems.
      `
    ]
  },
  {
    title: 'FlowerFox-Ai',
    desktop: "./public/FlowerFox-mobile.png",
    mobile: "./public/FlowerFox-desktop.png",
    projectInfo: [
      `
Flower Fox is a local AI experimentation platform designed to unify multiple model families within a single cohesive system. The project began as a personal playground for exploring different AI architectures, but over time it grew into a structured environment for developing and testing complex generation pipelines.

The platform supports a wide range of model types, including large language models, diffusion models, Flux-based pipelines, and additional experimental architectures. Model execution and orchestration are handled through Python-based runtime scripts, which are exposed through a TypeScript REST API, allowing different model families to operate under a shared interface while maintaining specialized execution environments.

Flower Fox includes a fully implemented frontend designed to provide direct interaction with these systems. The interface contains a home dashboard, conversational workspaces for language models, a diffusion environment with a persistent gallery of generated images, and a settings panel where users can download models and adjust neural parameters.

To simplify deployment, Flower Fox includes a streamlined installer that requires only a Hugging Face API key and a target port. Once provided, the system automatically configures the environment, installs required dependencies, and prepares the runtime for immediate use.

The platform also introduced an early long-term conversational memory system, allowing language models to retain historical interactions and contextual information across sessions. This memory layer, along with diffusion outputs and system history, is stored locally within a PostgreSQL database, which acts as the central persistence layer for the platform.

As experimentation expanded, Flower Fox began supporting more advanced workflows, including image upscaling, image editing, and video generation. Due to the computational complexity and large data requirements of these processes, many of these operations are executed through an interactive terminal interface, allowing developers to directly control model parameters and execution pipelines.

Over time, many of the ideas explored within Flower Fox influenced the development of later systems. Its internal experimentation tools and command interfaces eventually evolved into the hidden development console used within Aohana, where similar workflows now operate behind the scenes as part of Aohana’s ongoing growth.
      `
    ]
  },

];
const projectTitle = document.querySelector('.projects__title');
const destopImageContainer = document.querySelector('.desktop__container');
const mobileImageContainer = document.querySelector('.mobile__container');
const textContainer = document.querySelector('.project__about__container');
const test = document.querySelectorAll('.project__image__container')

//==========---------- 🐾  Projects - Helper to load Images  🐾 ----------==========
function createImage(src,alt){
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  img.style.opacity = 0;
  img.style.transition = "opacity 1s ease";
  setTimeout(() => {img.style.opacity = 1;},250)
  return img;
};

let currentIndex = 0;
function rotateProjects(index){
  const project = projects[index];

  projectTitle.textContent = project.title;

  destopImageContainer.innerHTML = '';
  destopImageContainer.appendChild(createImage(project.desktop,project.title + "desktop"));

  mobileImageContainer.innerHTML = '';
  mobileImageContainer.appendChild(createImage(project.mobile, project.title + "mobile"));

  textContainer.innerHTML = '';

  project.projectInfo.forEach((txt,index) => {
    const p = document.createElement("p");
    p.textContent = project.projectInfo[index] ?? project.projectInfo[0];
    p.className = index === 0 ? "activeTest" : "";
    p.style.opacity = 0;
    setTimeout(() => {
    p.style.opacity = 1;
    textContainer.scrollTop = 0;
  },250)
    textContainer.appendChild(p);
  });
};

//==========---------- 🐾  Projects - Load next project  🐾 ----------==========
function nextProject(){
  currentIndex = (currentIndex + 1) % projects.length;
  rotateProjects(currentIndex);
};

//==========---------- 🐾  Projects - Return to last project  🐾 ----------==========
function lastProject(){
  currentIndex = (currentIndex - 1 + projects.length) % projects.length;
  rotateProjects(currentIndex);
};

document.querySelector('.next__project').addEventListener('click',nextProject)
document.querySelector('.last__project').addEventListener('click',lastProject)
rotateProjects(currentIndex);
