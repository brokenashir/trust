import { Navbar } from './components/navbar'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { AlignJustify } from 'lucide-react'
import { ThemeProvider, useTheme } from './components/theme-provider'
import { Separator } from './components/ui/separator'
import { Button } from './components/ui/button'
import { useEffect, useState } from 'react'
 
export default function App() {
  const [openNav, setOpenNav] = useState(false)
  const {setTheme} = useTheme()

  useEffect(() => {
    setTheme('dark')
  }, [])

  return (
    <> 
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <nav className="w-full px-4 fixed top-0 z-50 bg-background">
          <div className='flex items-center justify-between gap-4'>
            <Avatar className='w-16 h-16'>
              <AvatarImage src="/ma_logo.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className='flex items-center gap-4'>
              <div className='relative'>
                <Button size="icon" variant="ghost" onClick={() => setOpenNav(!openNav)}>
                  <AlignJustify />
                </Button>
                {openNav && (
                  <div className='border absolute top-full right-0 rounded-md p-2'>
                    <Navbar />
                  </div>
                )}
              </div>
            </div>
          </div>
          <Separator/>
        </nav>
        <main>
          <div className='min-h-screen flex flex-col gap-24 pt-40 backdrop-blur-3xl p-4 justify-center bg-no-repeat bg-cover bg-center' style={{backgroundImage: 'url("https://i.pinimg.com/564x/d6/9b/b3/d69bb334c2dd338893866f659ec492ee.jpg")'}}>
            <div className='flex flex-col gap-4'>
              <h1 className='mt-16 md:text-7xl'>Empowering Education,<br /> Shaping Futures</h1>
              <p className="max-w-screen-md">At [Trust Name], we believe that education is the cornerstone of a brighter future. Our mission is to provide quality education and opportunities for underprivileged children, empowering them to achieve their dreams and make a positive impact on their communities.</p>
              <div className='flex gap-4'>
                <Button >Our Goal</Button>
                <Button >Our Achievements</Button>
              </div>
            </div>
            <div className='space-y-24'>
              <div className=' space-y-4 rounded-2xl'>
                <h1>Our Mission</h1>
                <p>We are dedicated to creating a nurturing and inclusive educational environment where every child has the opportunity to learn, grow, and succeed. Through our various programs and initiatives, we aim to break down barriers to education and ensure that every student receives the support and resources they need to thrive.</p>
              </div>
              <div className=' space-y-4 rounded-2xl'>
                <h1>Our Programs</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                  <div className='bg-background p-4 rounded-2xl'>
                    <h2>After-School Tutoring</h2>
                    <p>Our after-school tutoring program provides students with the academic support they need to succeed in school. Our dedicated tutors work one-on-one with students to help them improve their grades, develop study skills, and build confidence in their abilities.</p>
                  </div>
                  <div className='bg-background p-4 rounded-2xl'>
                    <h2>Summer Enrichment Camp</h2>
                    <p>Our summer enrichment camp offers students a fun and engaging learning experience during the summer months. Students participate in a variety of activities, including arts and crafts, sports, and educational workshops, to help them stay active and engaged over the break.</p>
                  </div>
                  <div className='bg-background p-4 rounded-2xl'>
                    <h2>College Prep Program</h2>
                    <p>Our college prep program helps high school students prepare for the college application process and develop the skills they need to succeed in higher education. Students receive guidance on choosing the right college, writing strong application essays, and securing financial aid.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </ThemeProvider>
    </>
  )
}
