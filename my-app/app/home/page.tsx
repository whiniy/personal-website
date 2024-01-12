import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="about_image">
                    <Image className="homePic" src="media/sky.jpg" alt="A video of an image of the sky and clouds being too big"></Image>
                </div>
                <div className="about_text">
                    <p>
                        Hi! My name is Winnie Trinh, and I am a <em>first year Computer Science major</em> at <strong>Cal Poly SLO</strong>. My hobbies are mastering the skill of doing my nails, working out, going on hikes, and hanging out with my friends. I also love trying new things or opportunities that take me out of my comfort zone! Nothing too athletic though...like long distance running...
                    </p>
                    <p>
                        This quarter, I strive to make new friends, connections, and thrive in the classes I'm most interested/engaged in such as my Calculas and Data Structures class.
                    </p>
                </div>
    </main>
  )
}
