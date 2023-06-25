import React from 'react'
import styles from "../styles/about.module.css"
import { Sora } from 'next/font/google';

const shadow = Sora({
  weight: '400',
  subsets: ['latin'],
});


function page() {
  return (
    <div className={styles.content_container}>
      <h2 className={styles.headinga}>About Me</h2>

<div className={shadow.className}>


  <p className={styles.paragraph}>
    Hello! I'm <b>Mohd Ammar</b>, a passionate <b>full-stack freelance web developer</b> hailing from India. With a strong foundation in various front-end and back-end languages, as well as expertise in responsiveness and database management systems, I bring a comprehensive skill set to the table.
  </p>

  <p className={styles.paragraph}>
    My love for coding extends beyond just development - <b>I also thoroughly enjoy creating articles</b> that share my knowledge and insights with the community. Writing allows me to not only deepen my understanding of concepts but also contribute to the growth and learning of fellow developers.
  </p>

  <p className={styles.paragraph}>
    Proficient in languages such as <b>HTML, CSS, and JavaScript</b>, I have the ability to bring stunning designs to life and create interactive user experiences. With expertise in <b>Node.js</b>, I excel at building scalable and efficient server-side applications. Additionally, my proficiency in <b>React, Git, GitHub, Next.js, and MongoDB</b> empowers me to develop robust and dynamic web solutions.
  </p>

  <p className={styles.paragraph}>
    Constantly staying up-to-date with the latest industry trends, frameworks, and tools, I believe in leveraging the power of technology to solve real-world problems. I am passionate about utilizing my skills and creativity to develop innovative solutions that not only meet client requirements but also exceed expectations.
  </p>

  <p className={styles.paragraph}>
    With a meticulous attention to detail, I strive to deliver high-quality code that is clean, maintainable, and optimized for performance. I believe in the importance of collaboration, communication, and continuous improvement, and I am always eager to learn and explore new technologies that broaden my horizons.
  </p>

  <p className={styles.paragraph}>
    By combining my technical expertise, creativity, and passion for writing, I aim to create <b>engaging and informative articles</b> that inspire and educate others in the field of web development. Through my articles, I hope to share practical tips, best practices, and insights that empower fellow developers on their coding journey.
  </p>

  <p className={styles.paragraph}>
    Apart from coding, <b> I also have a deep love for traveling.</b> Exploring new places, immersing myself in different cultures, and experiencing the beauty of the world are sources of immense joy for me. Traveling fuels my creativity and provides me with fresh perspectives that I can bring into my coding endeavors.
  </p>

  <p className={styles.paragraph}>
    I am excited to continue expanding my knowledge, honing my skills, and embarking on new projects that challenge me to push the boundaries of what's possible. Let's collaborate and create exceptional web experiences together!
  </p>

</div>
    </div>
  )
}

export default page
