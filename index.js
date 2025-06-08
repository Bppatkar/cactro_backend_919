#!/usr/bin/env node

const resumeContent = `
\x1b[48;5;235m\x1b[K\x1b[1m\x1b[96m                                                                     \x1b[0m\x1b[48;5;235m\x1b[K
\x1b[48;5;235m\x1b[1m\x1b[96m                    BHANU PRATAP PATKAR                            \x1b[0m\x1b[48;5;235m\x1b[K
\x1b[48;5;235m\x1b[1m\x1b[93m          Full-Stack Developer | MERN Stack Enthusiast             \x1b[0m\x1b[48;5;235m\x1b[K
\x1b[48;5;235m\x1b[1m\x1b[96m                                                                     \x1b[0m\x1b[48;5;235m\x1b[K

\x1b[48;5;235m\x1b[K
\x1b[48;5;235m\x1b[1m\x1b[48;5;240m\x1b[97m --- CONTACT INFORMATION ----------------------------------------- \x1b[0m\x1b[48;5;235m\x1b[K
\x1b[48;5;235m\x1b[K
  \x1b[48;5;235m\x1b[1m\x1b[95mEmail:\x1b[0m     \x1b[92mbhanupratappatkar777@gmail.com\x1b[0m\x1b[48;5;235m\x1b[K
  \x1b[48;5;235m\x1b[1m\x1b[95mPhone:\x1b[0m     \x1b[92m+918085274599\x1b[0m\x1b[48;5;235m\x1b[K
  \x1b[48;5;235m\x1b[1m\x1b[95mLinkedIn:\x1b[0m  \x1b[4m\x1b[92mhttps://www.linkedin.com/in/bhanu-pratap-patkar\x1b[0m\x1b[48;5;235m\x1b[K
  \x1b[48;5;235m\x1b[1m\x1b[95mGitHub:\x1b[0m     \x1b[4m\x1b[92mhttps://github.com/Bppatkar\x1b[0m\x1b[48;5;235m\x1b[K
  \x1b[48;5;235m\x1b[1m\x1b[95mPortfolio:\x1b[0m  \x1b[4m\x1b[92mhttps://final-by-my-side.vercel.app\x1b[0m\x1b[48;5;235m\x1b[K

\x1b[48;5;235m\x1b[K
\x1b[48;5;235m\x1b[1m\x1b[48;5;240m\x1b[97m --- SUMMARY --------------------------------------------------- \x1b[0m\x1b[48;5;235m\x1b[K
\x1b[48;5;235m\x1b[K
  \x1b[48;5;235m\x1b[97mAs a \x1b[1m\x1b[93mFull-Stack Developer\x1b[0m\x1b[48;5;235m passionate about creating dynamic and scalable web applications,\x1b[0m\x1b[48;5;235m\x1b[K
  \x1b[48;5;235mI specialize in leveraging the power of the \x1b[1m\x1b[96mMERN stack\x1b[0m\x1b[48;5;235m (MongoDB, Express.js, Node.js, React.js)\x1b[0m\x1b[48;5;235m\x1b[K
  \x1b[48;5;235mto deliver seamless and efficient solutions. With a strong foundation in front-end and back-end development,\x1b[0m\x1b[48;5;235m\x1b[K
  \x1b[48;5;235mI take pride in writing clean, maintainable code and building robust user experiences.\x1b[0m\x1b[48;5;235m\x1b[K

  \x1b[48;5;235mI am committed to my professional development and continuously improve my problem-solving skills\x1b[0m\x1b[48;5;235m\x1b[K
  \x1b[48;5;235mwhile mastering \x1b[1m\x1b[96mData Structures and Algorithms in C++\x1b[0m. \x1b[48;5;235mThis enables me to develop better solutions for real-world problems.\x1b[0m\x1b[48;5;235m\x1b[K

\x1b[48;5;235m\x1b[K
\x1b[48;5;235m\x1b[1m\x1b[48;5;240m\x1b[97m --- SKILLS & EXPERTISE ---------------------------------------- \x1b[0m\x1b[48;5;235m\x1b[K
\x1b[48;5;235m\x1b[K
  \x1b[48;5;235m\x1b[1m\x1b[95mLanguages:\x1b[0m             \x1b[93mC, C++, JavaScript (ES6+), HTML, CSS, TypeScript\x1b[0m\x1b[48;5;235m\x1b[K
  \x1b[48;5;235m\x1b[1m\x1b[95mFrameworks:\x1b[0m            \x1b[93mReact.js, Next.js, Express.js, Material-UI, Tailwind CSS, Bootstrap\x1b[0m\x1b[48;5;235m\x1b[K
  \x1b[48;5;235m\x1b[1m\x1b[95mDatabases:\x1b[0m             \x1b[93mMongoDB, SQL\x1b[0m\x1b[48;5;235m\x1b[K
  \x1b[48;5;235m\x1b[1m\x1b[95mDeveloper Tools:\x1b[0m       \x1b[93mGit, GitHub, VS Code, Visual Studio\x1b[0m\x1b[48;5;235m\x1b[K
  \x1b[48;5;235m\x1b[1m\x1b[95mLibraries & Technologies:\x1b[0m \x1b[93mNode.js, Redux, WebRTC, WebSockets, Socket.IO, REST APIs, Firebase, NPM, Chakra UI\x1b[0m\x1b[48;5;235m\x1b[K
  \x1b[48;5;235m\x1b[1m\x1b[95mConcepts:\x1b[0m              \x1b[93mData Structures & Algorithms, Problem Solving, Software Engineering Principles\x1b[0m\x1b[48;5;235m\x1b[K

\x1b[48;5;235m\x1b[K
\x1b[48;5;235m\x1b[1m\x1b[48;5;240m\x1b[97m --- EXPERIENCE ------------------------------------------------ \x1b[0m\x1b[48;5;235m\x1b[K
\x1b[48;5;235m\x1b[K
  \x1b[48;5;235m\x1b[1m\x1b[96mFresher / Entry-Level Full-Stack Developer\x1b[0m\x1b[48;5;235m\x1b[K
  \x1b[48;5;235m\x1b[97m- Eager to apply strong foundational knowledge in web development and DSA to real-world projects.\x1b[0m\x1b[48;5;235m\x1b[K
  \x1b[48;5;235m\x1b[97m- Ready to contribute to impactful projects in a collaborative environment.\x1b[0m\x1b[48;5;235m\x1b[K

\x1b[48;5;235m\x1b[K
\x1b[48;5;235m\x1b[1m\x1b[48;5;240m\x1b[97m --- PROJECTS -------------------------------------------------- \x1b[0m\x1b[48;5;235m\x1b[K
\x1b[48;5;235m\x1b[K
  \x1b[48;5;235m\x1b[1m\x1b[96m• DeepSeek AI Clone\x1b[0m \x1b[90m| Next.js, Clerk, MongoDB Atlas, DeepSeek API\x1b[0m\x1b[48;5;235m\x1b[K
    \x1b[48;5;235m\x1b[97m- Developed a \x1b[1m\x1b[92mfull-stack DeepSeek AI clone\x1b[0m \x1b[97mintegrating Clerk for user authentication and MongoDB Atlas for data management.\x1b[0m\x1b[48;5;235m\x1b[K
    \x1b[48;5;235m\x1b[97m- Powered AI responses via DeepSeek API, enabling chat history storage and retrieval through a sidebar interface.\x1b[0m\x1b[48;5;235m\x1b[K

  \x1b[48;5;235m\x1b[1m\x1b[96m• Grocery Delivery Web App\x1b[0m \x1b[90m| MERN Stack, Tailwind CSS, JWT\x1b[0m\x1b[48;5;235m\x1b[K
    \x1b[48;5;235m\x1b[97m- Engineered a \x1b[1m\x1b[92mfull-stack e-commerce platform\x1b[0m \x1b[97mwith MERN stack, featuring responsive UI with React/Tailwind CSS.\x1b[0m\x1b[48;5;235m\x1b[K
    \x1b[48;5;235m\x1b[97m- Implemented \x1b[1m\x1b[92msecure backend\x1b[0m \x1b[97m(Node.js/Express, JWT) with MongoDB for seller dashboards, order tracking, and payments.\x1b[0m\x1b[48;5;235m\x1b[K

  \x1b[48;5;235m\x1b[1m\x1b[96m• Real-Time Chat App\x1b[0m \x1b[90m| MERN Stack, Socket.IO\x1b[0m\x1b[48;5;235m\x1b[K
    \x1b[48;5;235m\x1b[97m- Built a \x1b[1m\x1b[92mfull-stack real-time chat application\x1b[0m \x1b[97musing the MERN stack (MongoDB, Express, React, Node.js).\x1b[0m\x1b[48;5;235m\x1b[K
    \x1b[48;5;235m\x1b[97m- Enabled \x1b[1m\x1b[92minstant message delivery\x1b[0m \x1b[97mthrough Socket.IO for bi-directional communication.\x1b[0m\x1b[48;5;235m\x1b[K

  \x1b[48;5;235m\x1b[1m\x1b[96m• Youtube Clone\x1b[0m \x1b[90m| React, Redux, Tailwind, Rapid API\x1b[0m\x1b[48;5;235m\x1b[K
    \x1b[48;5;235m\x1b[97m- Developed a \x1b[1m\x1b[92mYouTube Clone\x1b[0m \x1b[97musing React, Redux Toolkit for state, and Tailwind CSS; integrated Rapid API for dynamic video content.\x1b[0m\x1b[48;5;235m\x1b[K
    \x1b[48;5;235m\x1b[97m- Focused on responsive design and a seamless user experience, mirroring core YouTube functionalities.\x1b[0m\x1b[48;5;235m\x1b[K

  \x1b[48;5;235m\x1b[1m\x1b[96m• Swiggy API Clone\x1b[0m \x1b[90m| React, Redux, Tailwind, Swiggy API\x1b[0m\x1b[48;5;235m\x1b[K
    \x1b[48;5;235m\x1b[97m- Constructed a \x1b[1m\x1b[92mSwiggy API Clone\x1b[0m \x1b[97mwith React, Redux Toolkit, and Tailwind CSS, integrating Swiggy API for restaurant data display.\x1b[0m\x1b[48;5;235m\x1b[K
    \x1b[48;5;235m\x1b[97m- Enhanced UI responsiveness and visual appeal for an intuitive food delivery interface.\x1b[0m\x1b[48;5;235m\x1b[K

\x1b[48;5;235m\x1b[K
\x1b[48;5;235m\x1b[1m\x1b[48;5;240m\x1b[97m --- EDUCATION ------------------------------------------------- \x1b[0m\x1b[48;5;235m\x1b[K
\x1b[48;5;235m\x1b[K
  \x1b[48;5;235m\x1b[1m\x1b[93mMaster's of Computer Science\x1b[0m\x1b[48;5;235m\x1b[K
  \x1b[48;5;235m\x1b[97mMaharishi Mahesh Yogi Vedic Vishwavidhyalaya, Katni, MP\x1b[0m \x1b[96m| Apr. 2020 - May 2022\x1b[0m\x1b[48;5;235m\x1b[K

  \x1b[48;5;235m\x1b[1m\x1b[93mBachelor of Computer Science\x1b[0m\x1b[48;5;235m\x1b[K
  \x1b[48;5;235m\x1b[97mRDVV University, Jabalpur, MP\x1b[0m \x1b[96m| May. 2015 - Apr 2019\x1b[0m\x1b[48;5;235m\x1b[K
  \x1b[48;5;235m\x1b[97m- Strong academic grounding in problem-solving and principles of software engineering.\x1b[0m\x1b[48;5;235m\x1b[K
  \x1b[48;5;235m\x1b[97m- Hands-on training in HTML, CSS, JavaScript, React, and Tailwind CSS; continuously updating practical development skills.\x1b[0m\x1b[48;5;235m\x1b[K

\x1b[48;5;235m\x1b[K
\x1b[48;5;235m\x1b[1m\x1b[48;5;240m\x1b[97m --- CERTIFICATIONS -------------------------------------------- \x1b[0m\x1b[48;5;235m\x1b[K
\x1b[48;5;235m\x1b[K
  \x1b[48;5;235m\x1b[97m• \x1b[1m\x1b[96mJavaScript Certification Test\x1b[0m \x1b[90m(Youtube Course - KG Coding)\x1b[0m\x1b[48;5;235m\x1b[K
  \x1b[48;5;235m\x1b[97m• \x1b[1m\x1b[96mNamaste JavaScript\x1b[0m \x1b[90m(NamasteDev.com)\x1b[0m\x1b[48;5;235m\x1b[K
  \x1b[48;5;235m\x1b[1m\x1b[95mOngoing Udemy Courses:\x1b[0m\x1b[48;5;235m\x1b[K
    \x1b[48;5;235m\x1b[97m• Node.js, Express, MongoDB More: The Complete Bootcamp\x1b[0m\x1b[48;5;235m\x1b[K
    \x1b[48;5;235m\x1b[97m• Complete Web Development Course\x1b[0m\x1b[48;5;235m\x1b[K

\x1b[48;5;235m\x1b[K
\x1b[48;5;235m\x1b[1m\x1b[48;5;240m\x1b[97m --- PROFESSIONAL OBJECTIVES ----------------------------------- \x1b[0m\x1b[48;5;235m\x1b[K
\x1b[48;5;235m\x1b[K
  \x1b[48;5;235m\x1b[1m\x1b[93mShort-Term:\x1b[0m \x1b[97mDeepen my skills as a MERN stack developer, further developing problem-solving abilities while taking on challenging development projects.\x1b[0m\x1b[48;5;235m\x1b[K

  \x1b[48;5;235m\x1b[1m\x1b[93mLong-Term:\x1b[0m \x1b[97mTo be a versatile developer known for delivering fresh, scalable solutions and continue evolving with the never-ending technological landscape around me.\x1b[0m\x1b[48;5;235m\x1b[K

\x1b[48;5;235m\x1b[K
\x1b[48;5;235m\x1b[1m\x1b[48;5;240m\x1b[97m --- AVAILABILITY ---------------------------------------------- \x1b[0m\x1b[48;5;235m\x1b[K
\x1b[48;5;235m\x1b[K
  \x1b[48;5;235m\x1b[97mOpen to connecting for opportunities where I can contribute to impactful projects and constantly expand my knowledge and skills. Feel free to connect!\x1b[0m\x1b[48;5;235m\x1b[K

\x1b[0m`;

console.log(resumeContent);

console.log('\n');
