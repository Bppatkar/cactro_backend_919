#!/usr/bin/env node

// Beautiful dark theme terminal resume with fixed width and perfect alignment
// Optimized for dark backgrounds with consistent borders and spacing

const resumeContent = `
\x1b[48;2;15;23;42m\x1b[K
\x1b[48;2;15;23;42m\x1b[38;2;148;163;184m╭─────────────────────────────────────────────────────────────────────╮\x1b[0m\x1b[48;2;15;23;42m\x1b[K
\x1b[48;2;15;23;42m\x1b[38;2;148;163;184m│\x1b[0m                                                                     \x1b[38;2;148;163;184m│\x1b[0m\x1b[48;2;15;23;42m\x1b[K
\x1b[48;2;15;23;42m\x1b[38;2;148;163;184m│\x1b[0m             \x1b[1m\x1b[38;2;34;197;94m██████╗ ██╗  ██╗ █████╗ ███╗   ██╗██╗   ██╗\x1b[0m             \x1b[38;2;148;163;184m│\x1b[0m\x1b[48;2;15;23;42m\x1b[K
\x1b[48;2;15;23;42m\x1b[38;2;148;163;184m│\x1b[0m             \x1b[1m\x1b[38;2;34;197;94m██╔══██╗██║  ██║██╔══██╗████╗  ██║██║   ██║\x1b[0m             \x1b[38;2;148;163;184m│\x1b[0m\x1b[48;2;15;23;42m\x1b[K
\x1b[48;2;15;23;42m\x1b[38;2;148;163;184m│\x1b[0m             \x1b[1m\x1b[38;2;34;197;94m██████╔╝███████║███████║██╔██╗ ██║██║   ██║\x1b[0m             \x1b[38;2;148;163;184m│\x1b[0m\x1b[48;2;15;23;42m\x1b[K
\x1b[48;2;15;23;42m\x1b[38;2;148;163;184m│\x1b[0m             \x1b[1m\x1b[38;2;34;197;94m██╔══██╗██╔══██║██╔══██║██║╚██╗██║██║   ██║\x1b[0m             \x1b[38;2;148;163;184m│\x1b[0m\x1b[48;2;15;23;42m\x1b[K
\x1b[48;2;15;23;42m\x1b[38;2;148;163;184m│\x1b[0m             \x1b[1m\x1b[38;2;34;197;94m██████╔╝██║  ██║██║  ██║██║ ╚████║╚██████╔╝\x1b[0m             \x1b[38;2;148;163;184m│\x1b[0m\x1b[48;2;15;23;42m\x1b[K
\x1b[48;2;15;23;42m\x1b[38;2;148;163;184m│\x1b[0m             \x1b[1m\x1b[38;2;34;197;94m╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝\x1b[0m              \x1b[38;2;148;163;184m│\x1b[0m\x1b[48;2;15;23;42m\x1b[K
\x1b[48;2;15;23;42m\x1b[38;2;148;163;184m│\x1b[0m                                                                     \x1b[38;2;148;163;184m│\x1b[0m\x1b[48;2;15;23;42m\x1b[K
\x1b[48;2;15;23;42m\x1b[38;2;148;163;184m│\x1b[0m                    \x1b[1m\x1b[38;2;255;255;255mBHANU PRATAP PATKAR\x1b[0m                     \x1b[38;2;148;163;184m│\x1b[0m\x1b[48;2;15;23;42m\x1b[K
\x1b[48;2;15;23;42m\x1b[38;2;148;163;184m│\x1b[0m           \x1b[3m\x1b[38;2;125;211;252mFull-Stack Developer • MERN Stack Enthusiast\x1b[0m            \x1b[38;2;148;163;184m│\x1b[0m\x1b[48;2;15;23;42m\x1b[K
\x1b[48;2;15;23;42m\x1b[38;2;148;163;184m│\x1b[0m                                                                     \x1b[38;2;148;163;184m│\x1b[0m\x1b[48;2;15;23;42m\x1b[K
\x1b[48;2;15;23;42m\x1b[38;2;148;163;184m╰─────────────────────────────────────────────────────────────────────╯\x1b[0m\x1b[48;2;15;23;42m\x1b[K

\x1b[48;2;30;41;59m\x1b[K
\x1b[48;2;30;41;59m \x1b[1m\x1b[38;2;34;197;94m🔗 CONTACT\x1b[0m                                                        \x1b[48;2;30;41;59m\x1b[K
\x1b[48;2;30;41;59m\x1b[K

  \x1b[38;2;251;146;60m📧 Email:\x1b[0m      \x1b[4m\x1b[38;2;125;211;252mbhanupratappatkar777@gmail.com\x1b[0m
  \x1b[38;2;251;146;60m📱 Phone:\x1b[0m      \x1b[38;2;125;211;252m+918085274599\x1b[0m
  \x1b[38;2;251;146;60m💼 LinkedIn:\x1b[0m   \x1b[4m\x1b[38;2;125;211;252mhttps://www.linkedin.com/in/bhanu-pratap-patkar\x1b[0m
  \x1b[38;2;251;146;60m🐙 GitHub:\x1b[0m     \x1b[4m\x1b[38;2;125;211;252mhttps://github.com/Bppatkar\x1b[0m
  \x1b[38;2;251;146;60m🌐 Portfolio:\x1b[0m  \x1b[4m\x1b[38;2;125;211;252mhttps://final-by-my-side.vercel.app\x1b[0m

\x1b[48;2;30;41;59m\x1b[K
\x1b[48;2;30;41;59m \x1b[1m\x1b[38;2;139;92;246m✨ SUMMARY\x1b[0m                                                        \x1b[48;2;30;41;59m\x1b[K
\x1b[48;2;30;41;59m\x1b[K

  \x1b[38;2;203;213;225mPassionate \x1b[1m\x1b[38;2;34;197;94mFull-Stack Developer\x1b[0m\x1b[38;2;203;213;225m specializing in dynamic, scalable web\x1b[0m
  \x1b[38;2;203;213;225mapplications using the \x1b[1m\x1b[38;2;34;197;94mMERN stack\x1b[0m\x1b[38;2;203;213;225m (MongoDB, Express.js, React.js,\x1b[0m
  \x1b[38;2;203;213;225mNode.js). Strong foundation in both front-end and back-end development\x1b[0m
  \x1b[38;2;203;213;225mwith expertise in writing clean, maintainable code and building robust\x1b[0m
  \x1b[38;2;203;213;225muser experiences. Continuously improving problem-solving skills through\x1b[0m
  \x1b[1m\x1b[38;2;251;146;60mData Structures and Algorithms in JavaScript\x1b[0m\x1b[38;2;203;213;225m to develop better solutions.\x1b[0m

\x1b[48;2;30;41;59m\x1b[K
\x1b[48;2;30;41;59m \x1b[1m\x1b[38;2;244;114;182m🛠️  TECHNICAL SKILLS\x1b[0m                                             \x1b[48;2;30;41;59m\x1b[K
\x1b[48;2;30;41;59m\x1b[K

  \x1b[1m\x1b[38;2;251;146;60mLanguages:\x1b[0m          \x1b[38;2;203;213;225mC, C++, JavaScript (ES6+), HTML, CSS, TypeScript\x1b[0m
  \x1b[1m\x1b[38;2;251;146;60mFrameworks:\x1b[0m         \x1b[38;2;203;213;225mReact.js, Next.js, Express.js, Material-UI,\x1b[0m
                         \x1b[38;2;203;213;225mTailwind CSS, Bootstrap\x1b[0m
  \x1b[1m\x1b[38;2;251;146;60mDatabases:\x1b[0m          \x1b[38;2;203;213;225mMongoDB, SQL\x1b[0m
  \x1b[1m\x1b[38;2;251;146;60mDeveloper Tools:\x1b[0m    \x1b[38;2;203;213;225mGit, GitHub, VS Code, Visual Studio\x1b[0m
  \x1b[1m\x1b[38;2;251;146;60mLibraries & Tech:\x1b[0m   \x1b[38;2;203;213;225mNode.js, Redux, WebRTC, WebSockets, Socket.IO,\x1b[0m
                         \x1b[38;2;203;213;225mREST APIs, Firebase, NPM, Chakra UI\x1b[0m
  \x1b[1m\x1b[38;2;251;146;60mConcepts:\x1b[0m           \x1b[38;2;203;213;225mData Structures & Algorithms, Problem Solving,\x1b[0m
                         \x1b[38;2;203;213;225mSoftware Engineering Principles\x1b[0m

\x1b[48;2;30;41;59m\x1b[K
\x1b[48;2;30;41;59m \x1b[1m\x1b[38;2;251;146;60m🚀 KEY PROJECTS\x1b[0m                                                  \x1b[48;2;30;41;59m\x1b[K
\x1b[48;2;30;41;59m\x1b[K

  \x1b[1m\x1b[38;2;139;92;246m● DeepSeek AI Clone\x1b[0m \x1b[38;2;148;163;184m| Next.js, Clerk, MongoDB Atlas, DeepSeek API\x1b[0m
    \x1b[38;2;34;197;94m▪\x1b[0m \x1b[38;2;203;213;225mDeveloped full-stack AI chat application with Clerk authentication\x1b[0m
    \x1b[38;2;34;197;94m▪\x1b[0m \x1b[38;2;203;213;225mIntegrated DeepSeek API with MongoDB Atlas for chat history storage\x1b[0m

  \x1b[1m\x1b[38;2;139;92;246m● Grocery Delivery Platform\x1b[0m \x1b[38;2;148;163;184m| MERN Stack, Tailwind CSS, JWT\x1b[0m
    \x1b[38;2;34;197;94m▪\x1b[0m \x1b[38;2;203;213;225mBuilt complete e-commerce solution with responsive React frontend\x1b[0m
    \x1b[38;2;34;197;94m▪\x1b[0m \x1b[38;2;203;213;225mImplemented secure backend with JWT auth, seller dashboards & payments\x1b[0m

  \x1b[1m\x1b[38;2;139;92;246m● Real-Time Chat App\x1b[0m \x1b[38;2;148;163;184m| MERN Stack, Socket.IO\x1b[0m
    \x1b[38;2;34;197;94m▪\x1b[0m \x1b[38;2;203;213;225mCreated real-time messaging with Socket.IO for instant communication\x1b[0m
    \x1b[38;2;34;197;94m▪\x1b[0m \x1b[38;2;203;213;225mFull-stack implementation with MongoDB data persistence\x1b[0m

  \x1b[1m\x1b[38;2;139;92;246m● YouTube Clone\x1b[0m \x1b[38;2;148;163;184m| React, Redux, Tailwind, Rapid API\x1b[0m
    \x1b[38;2;34;197;94m▪\x1b[0m \x1b[38;2;203;213;225mBuilt video platform with Redux state management & API integration\x1b[0m
    \x1b[38;2;34;197;94m▪\x1b[0m \x1b[38;2;203;213;225mResponsive design mimicking core YouTube functionalities\x1b[0m

  \x1b[1m\x1b[38;2;139;92;246m● Swiggy API Clone\x1b[0m \x1b[38;2;148;163;184m| React, Redux, Tailwind, Swiggy API\x1b[0m
    \x1b[38;2;34;197;94m▪\x1b[0m \x1b[38;2;203;213;225mFood delivery interface with real restaurant data integration\x1b[0m
    \x1b[38;2;34;197;94m▪\x1b[0m \x1b[38;2;203;213;225mEnhanced UI/UX with responsive design and smooth interactions\x1b[0m

\x1b[48;2;30;41;59m\x1b[K
\x1b[48;2;30;41;59m \x1b[1m\x1b[38;2;125;211;252m🎓 EDUCATION\x1b[0m                                                     \x1b[48;2;30;41;59m\x1b[K
\x1b[48;2;30;41;59m\x1b[K

  \x1b[1m\x1b[38;2;251;146;60mMaster's of Computer Science\x1b[0m \x1b[38;2;148;163;184m| Apr 2020 - May 2022\x1b[0m
  \x1b[38;2;203;213;225mMaharishi Mahesh Yogi Vedic Vishwavidhyalaya, Katni, MP\x1b[0m

  \x1b[1m\x1b[38;2;251;146;60mBachelor of Computer Science\x1b[0m \x1b[38;2;148;163;184m| May 2015 - Apr 2019\x1b[0m
  \x1b[38;2;203;213;225mRDVV University, Jabalpur, MP\x1b[0m

\x1b[48;2;30;41;59m\x1b[K
\x1b[48;2;30;41;59m \x1b[1m\x1b[38;2;244;114;182m🏆 CERTIFICATIONS & LEARNING\x1b[0m                                    \x1b[48;2;30;41;59m\x1b[K
\x1b[48;2;30;41;59m\x1b[K

  \x1b[38;2;34;197;94m✓\x1b[0m \x1b[1m\x1b[38;2;125;211;252mJavaScript Certification\x1b[0m \x1b[38;2;148;163;184m- KG Coding (YouTube)\x1b[0m
  \x1b[38;2;34;197;94m✓\x1b[0m \x1b[1m\x1b[38;2;125;211;252mNamaste JavaScript\x1b[0m \x1b[38;2;148;163;184m- NamasteDev.com\x1b[0m
  \x1b[38;2;34;197;94m▪\x1b[0m \x1b[38;2;203;213;225mNode.js, Express, MongoDB Complete Bootcamp (Udemy - Ongoing)\x1b[0m
  \x1b[38;2;34;197;94m▪\x1b[0m \x1b[38;2;203;213;225mComplete Web Development Course (Udemy - Ongoing)\x1b[0m

\x1b[48;2;30;41;59m\x1b[K
\x1b[48;2;30;41;59m \x1b[1m\x1b[38;2;139;92;246m🎯 CAREER OBJECTIVES\x1b[0m                                            \x1b[48;2;30;41;59m\x1b[K
\x1b[48;2;30;41;59m\x1b[K

  \x1b[1m\x1b[38;2;251;146;60mImmediate:\x1b[0m \x1b[38;2;203;213;225mSecure a full-stack developer position to apply MERN stack\x1b[0m
             \x1b[38;2;203;213;225mexpertise in real-world projects and contribute to team success.\x1b[0m
  
  \x1b[1m\x1b[38;2;251;146;60mLong-term:\x1b[0m \x1b[38;2;203;213;225mBecome a versatile developer known for delivering scalable,\x1b[0m
             \x1b[38;2;203;213;225minnovative solutions while staying current with emerging tech.\x1b[0m

\x1b[48;2;15;23;42m\x1b[K
\x1b[48;2;15;23;42m\x1b[38;2;148;163;184m╭─────────────────────────────────────────────────────────────────────╮\x1b[0m\x1b[48;2;15;23;42m\x1b[K
\x1b[48;2;15;23;42m\x1b[38;2;148;163;184m│\x1b[0m                  \x1b[1m\x1b[38;2;34;197;94mReady to contribute and grow! 🚀\x1b[0m                  \x1b[38;2;148;163;184m│\x1b[0m\x1b[48;2;15;23;42m\x1b[K
\x1b[48;2;15;23;42m\x1b[38;2;148;163;184m╰─────────────────────────────────────────────────────────────────────╯\x1b[0m\x1b[48;2;15;23;42m\x1b[K
\x1b[0m`;

console.log(resumeContent);

console.log('\n\x1b[2m\x1b[38;2;148;163;184m' + '='.repeat(73) + '\x1b[0m');
console.log('\x1b[1m\x1b[38;2;34;197;94m' + ' '.repeat(22) + 'Resume Rendered Successfully!' + '\x1b[0m');
console.log('\x1b[2m\x1b[38;2;148;163;184m' + '='.repeat(73) + '\x1b[0m\n');