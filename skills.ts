const webDevSkillsData = [
    {
      category: "Language & Frameworks",
      skills: [
        { name: "JavaScript", level: 90, icon: new URL('/development-icons/javascript.svg', import.meta.url).href },
        { name: "HTML", level: 95, icon: new URL('/development-icons/html.svg', import.meta.url).href },
        { name: "CSS", level: 90, icon: new URL('/development-icons/css.svg', import.meta.url).href },
        { name: "TypeScript", level: 85, icon: new URL('/development-icons/typescript.svg', import.meta.url).href },
        { name: "Python", level: 70, icon: new URL('/development-icons/python.svg', import.meta.url).href },
        { name: "PHP", level: 70, icon: new URL('/development-icons/php.png', import.meta.url).href }
      ]
    },
    {
      category: "Libraries & Frameworks",
      skills: [
        { name: "React", level: 90, icon: new URL('/development-icons/react.svg', import.meta.url).href },
        { name: "Vue", level: 80, icon: new URL('/development-icons/vuejs.svg', import.meta.url).href },
        { name: "Next.js", level: 90, icon: new URL('/development-icons/nextjs.png', import.meta.url).href }
      ]
    },
    {
      category: "AI Engineering",
      skills: [
        { name: "Prompt Engineering", level: 85, icon: new URL('/development-icons/gpt.svg', import.meta.url).href },
        { name: "HuggingFace", level: 70, icon: new URL('/development-icons/huggingface.svg', import.meta.url).href },
        { name: "AI Agents", level: 80, icon: new URL('/development-icons/openai.svg', import.meta.url).href },
        { name: "LangChain", level: 80, icon: new URL('/development-icons/langchain.svg', import.meta.url).href },
      ]
    },
    {
      category: "CSS Frameworks",
      skills: [
        { name: "Bootstrap", level: 90, icon: new URL('/development-icons/boostrap.svg', import.meta.url).href },
        { name: "Tailwind", level: 90, icon: new URL('/development-icons/tailwind.svg', import.meta.url).href },
        { name: "Sass", level: 90, icon: new URL('/development-icons/sass.svg', import.meta.url).href }
      ]
    },
    {
      category: "Database",
      skills: [
        { name: "Firestore", level: 85, icon: new URL('/development-icons/firestore.svg', import.meta.url).href },
        { name: "supbase", level: 80, icon: new URL('/development-icons/supabase.svg', import.meta.url).href }
      ]
    },
    {
      category: "Content Management System (CMS)",
      skills: [
        { name: "WordPress", level: 90, icon: new URL('/development-icons/wordpress.png', import.meta.url).href },
        { name: "Elementor", level: 90, icon: new URL('/development-icons/elementor.svg', import.meta.url).href },
        { name: "Shopify", level: 85, icon: new URL('/development-icons/shopify.svg', import.meta.url).href },
        { name: "Drupal", level: 85, icon: new URL('/development-icons/druplicon.svg', import.meta.url).href }
      ]
    },
    {
      category: "Unit Testing",
      skills: [
        { name: "Jasmine", level: 85, icon: new URL('/development-icons/jasmine.svg', import.meta.url).href }
      ]
    }
  ];
  
  const otherSkillsData = [
    {
      category: "Soft Skills",
      skills: [
        { name: "Adaptability", level: 95, icon: new URL('/development-icons/adaptability.svg', import.meta.url).href },
        { name: "Problem Solving", level: 95, icon: new URL('/development-icons/problem-solving.svg', import.meta.url).href },
        { name: "Teamwork", level: 95, icon: new URL('/development-icons/teamwork.svg', import.meta.url).href },
        { name: "Resilience", level: 98, icon: new URL('/development-icons/resilience.svg', import.meta.url).href }
      ]
    },
    {
      category: "UX/UI Design",
      skills: [
        { name: "UX Research", level: 80, icon: new URL('/development-icons/ux.svg', import.meta.url).href },
        { name: "Information Architecture", level: 85, icon: new URL('/development-icons/information.svg', import.meta.url).href },
        { name: "Wireframing & Prototyping", level: 80, icon: new URL('/development-icons/wireframe.svg', import.meta.url).href },
        { name: "Usability Testing", level: 80, icon: new URL('/development-icons/usability.svg', import.meta.url).href },
        { name: "Figma", level: 90, icon: new URL('/development-icons/figma.svg', import.meta.url).href },
        { name: "Maze", level: 90, icon: new URL('/development-icons/maze.jpeg', import.meta.url).href }
      ]
    },
    {
      category: "Product Management",
      skills: [
        { name: "Technical Expertise", level: 100, icon: new URL('/development-icons/tech.svg', import.meta.url).href },
        { name: "Understanding of UX", level: 90, icon: new URL('/development-icons/ux.svg', import.meta.url).href },
        { name: "Business Savvy", level: 80, icon: new URL('/development-icons/business.svg', import.meta.url).href },
        { name: "Data Analyze and Interpret", level: 85, icon: new URL('/development-icons/data.svg', import.meta.url).href },
        { name: "Prioritize", level: 90, icon: new URL('/development-icons/priority.svg', import.meta.url).href },
        { name: "Communication", level: 90, icon: new URL('/development-icons/communication.svg', import.meta.url).href },
        { name: "Storytelling", level: 90, icon: new URL('/development-icons/story.svg', import.meta.url).href }
      ]
    },
    {
      category: "Photography",
      skills: [
        { name: "Automobile Photography", level: 100, icon: new URL('/development-icons/photography.svg', import.meta.url).href },
        { name: "Portrait & Landscape", level: 80, icon: new URL('/development-icons/photo.svg', import.meta.url).href },
        { name: "Adobe Lightroom", level: 90, icon: new URL('/development-icons/lightroom.svg', import.meta.url).href },
        { name: "Adobe Photoshop", level: 90, icon: new URL('/development-icons/photoshop.svg', import.meta.url).href }
      ]
    },
    {
      category: "Video Production",
      skills: [
        { name: "Videography", level: 80, icon: new URL('/development-icons/video.svg', import.meta.url).href },
        { name: "Video Editing", level: 90, icon: new URL('/development-icons/videoeditor.png', import.meta.url).href },
        { name: "Adobe Premiere Pro", level: 85, icon: new URL('/development-icons/premierepro.png', import.meta.url).href },
        { name: "Adobe AfterEffects", level: 65, icon: new URL('/development-icons/aftereffects.svg', import.meta.url).href },
        { name: "DaVinci Resolve", level: 90, icon: new URL('/development-icons/davinci.png', import.meta.url).href },
        { name: "Final Cut Pro X", level: 85, icon: new URL('/development-icons/finalcutpro.png', import.meta.url).href }
      ]
    }
  ];
  
  export { webDevSkillsData, otherSkillsData };