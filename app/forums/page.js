import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const topics = [
    {
      text: "Python",
      img: "/python.png",
      desc: "Let's discuss everything related to Python",
      slug:"python-chats"
    },
    {
      text: "JavaScript",
      img: "/javascript.png",
      desc: "A hub for all things JavaScript, from frameworks to fundamentals.",
      slug:"javascript-chats"
    },
    {
      text: "React",
      img: "/react.png",
      desc: "Share your React projects, tips, and best practices.",
      slug:"react-chats"
    },
    {
      text: "Node.js",
      img: "/nodejs.png",
      desc: "Discuss server-side JavaScript with Node.js and its ecosystem.",
      slug:"nodejs-chats"
    },
    {
      text: "Web Development",
      img: "/webdev.png",
      desc: "General web development discussions, including HTML, CSS, and more.",
      slug:"web-chats"
    },
    {
      text: "Data Science",
      img: "/datascience.png",
      desc: "Explore the world of data science, machine learning, and AI.",
      slug:"dataScience-chat"
    }
  ];

function Forums() {
  return (
    <div className='container mx-auto my-20'>
     <h1 className='text-4xl text-center font-bold '>Discussion Forums</h1>
     <div className='flex flex-wrap justify-center'>
        {
            topics.map((topic)=>{
                return <div key={topic.img} className='shadow-lg bg-gradient-to-r from-blue-500 to-purple-500 w-1/4 m-4 flex flex-col justify-center py-10 px-3 items-center rounded-xl gap-4'>
                    <Image height={50} width={50} src={topic.img} alt='img' className=''/>
                    <h2 className='text-2xl text-black'>{topic.text}</h2>
                    <p className='px-3'>{topic.desc}</p>
                    <Link href={`/forum/${topic.slug}`}>
                    <button className='px-4 border border-slate-300 py-2 bg-pink-800 hover:bg-pink-700 '>Discuss Now</button>
                    </Link>
                    </div>
            })
        }
     </div>
    </div>
  )
}

export default Forums
