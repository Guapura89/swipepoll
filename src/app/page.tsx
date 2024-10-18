import { ContactForm } from "@/components/ContactForm";
import { FeatureCard } from "@/components/FeatureCard";
import { Footer } from "@/components/Footer";
import { LinkCard } from "@/components/LinkCard";
import { NavBar } from "@/components/NavBar";
import Image, { StaticImageData } from "next/image";
import { Play, GitHub, FileText, BookOpen, Sun, Linkedin, Mail, ArrowUp } from "react-feather";
import Link from "next/link";

// Images
import comment from "@/assets/img/comment.png";
import star from "@/assets/img/star.png";
import gaminGirl from "@/assets/img/gaming-girl.png";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="text-dark dark:text-white">
        <div className="py-10 md:py-20 px-10">
          <div className="px-4 py-10 text-center flex flex-col gap-10">
            <h1 className="text-5xl text-nowrap">
              <p>
                Your stream, <br /> your rules
              </p>
            </h1>

            <p className="font-bold">
              Connect with your <span className="text-accent">community</span> and
              make a pre-poll from a deck
            </p>

            <i>
              This application is not a affiliate with{" "}
              <a className="font-bold" target="_bank" href="https://www.twitch.tv/">Twitch</a>.
            </i>

            <div className="flex flex-col md:flex-row justify-center gap-10">
              <button className="btn btn-primary btn-rounded">Create a pre-poll</button>
              <button className="btn btn-ghost btn-rounded hover:opacity-50 hover:cursor-pointer hover:bg-transparent text-black flex items-center gap-2">
                <span>
                  <Play />
                </span>
                Whatch demo
              </button>
            </div>

            <div className="felx justify-center">
              <p>Compatible with <span className="text-lg font-extrabold">twitch</span></p>
            </div>
          </div>

          {/* Deck section */}
          <div className="w-full sm:w-4/6 md:w-4/5 lg:w-1/2 mx-auto mt-20 relative flex items-center justify-center h-60 md:h-80">
            <div className="absolute left-1 md:left-16 md:top-10 bottom-2 -rotate-12 bg-warning w-3/6 md:w-2/6 h-44 md:h-64 rounded-2xl"></div>
            <div className="absolute right-1 md:right-16 md:top-10 bottom-2 rotate-12 bg-secondary w-3/6 md:w-2/6 h-44 md:h-64 rounded-2xl"></div>
            <div className="absolute top-0 bg-accent w-3/6 md:w-2/6 h-44 md:h-64 rounded-2xl"></div>
          </div>

          <div className="text-center p-4 my-20">
            <h2 id="how-it-works">How it works?</h2>
            <p className="text-lg">Knoe more about our project</p>
          </div>
        </div>

        {/* Steps section */}
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-4 gap-y-2 p-6 w-full sm:w-4/5 lg:w-11/12 2xl:w-1/2 mx-auto">
          <div className="">
            <div className="flex items-center justify-start gap-4">
              <div className="bg-primary text-white font-bold w-12 h-12 rounded-full flex items-center justify-center aspect-square">
                1
              </div>
              <div className="flex flex-col gap-2">
                <div className="hidden md:flex items-end">
                  <Image src={comment} alt="comment" width={150} />
                  <Image src={star} alt="star" style={{width: '30px', height: '30px'}} />
                </div>
                <p className="py-4">Once you have connected your Twitch account, you will able to create a Deck of choices.</p>
              </div>
            </div>
          </div>
          <div className="md:col-start-2 row-start-2">
            <div className="flex items-center justify-end gap-4">
              <div className="flex flex-col gap-2">
                <div className="hidden md:flex justify-end items-end">
                  <Image src={comment} alt="comment" width={150} />
                  <Image src={star} alt="star" style={{width: '30px', height: '30px'}} />
                </div>
                <p className="py-4">With your deck ypu can run a swipe votation to let your viewers decide the final poll.</p>
              </div>
              <div className="bg-primary text-white font-bold w-12 h-12 rounded-full flex items-center justify-center aspect-square">
                2
              </div>
            </div>
          </div>
          <div className="row-start-3">
          <div className="flex items-center justify-start gap-4">
              <div className="bg-primary text-white font-bold w-12 h-12 rounded-full flex items-center justify-center aspect-square">
                3
              </div>
              <div className="flex flex-col gap-2">
                <div className="hidden md:flex items-end">
                  <Image src={comment} alt="comment" width={150} />
                  <Image src={star} alt="star" style={{width: '30px', height: '30px'}} />
                </div>
                <p className="py-4">The votation is easy, just swipe left to say No or right to say Yes.</p>
              </div>
            </div>
          </div>
          <div className="md:col-start-2 row-start-4">
            <div className="flex items-center justify-end gap-4">
              <div className="flex flex-col gap-2">
                <div className="hidden md:flex justify-end items-end">
                  <Image src={comment} alt="comment" width={150} />
                  <Image src={star} alt="star" style={{width: '30px', height: '30px'}} />
                </div>
                <p className="py-4">Once the votation time ends, you can create a channel poll directly from here. With all winner choices.</p>
              </div>
              <div className="bg-primary text-white font-bold w-12 h-12 rounded-full flex items-center justify-center aspect-square">
                4
              </div>
            </div>
          </div>
        </div>

        {/* Feature cards section */}
        <div className="grid grid-cols-4 place-content-center w-full lg:w-11/12 2xl:w-1/2 mx-auto gap-x-6 gap-y-10 py-24 px-6">
          <div className="col-span-4 md:col-span-2 flex justify-center w-full">
            <FeatureCard 
              title="Deck of choices" 
              description="Create a deck of up to 50 chiuces for your poll." 
            />
          </div>

          <div className="col-span-4 md:col-span-2 flex justify-center w-full">
            <FeatureCard 
              title="Duration"
              description="Decide the time duration to close the pre-poll."
            />
          </div>

          <div className="col-span-4 md:col-span-2 flex justify-center w-full">
            <FeatureCard 
              title="Poll creation"
              description="Create a Twitch channel poll from here. With your winner choices."
            />
          </div>

          <div className="col-span-4 md:col-span-2 flex justify-center w-full">
            <FeatureCard 
              title="Real-time votation"
              description="See what's your audience choosing."
            />
          </div>

          <div className="col-span-4 md:col-span-2 md:col-start-2 flex justify-center w-full">
            <FeatureCard 
              title="Share"
              description="Bring your audience the facility to access through QR Code or Session Code to start."
            />
          </div>
        </div>

        <div className="px-6 pb-10">
          <div className="text-center my-28">
            <h2>Demostration</h2>
            <p className="text-lg">Know more about our project</p>
          </div>

          <div className="bg-dark rounded-3xl aspect-video w-full sm:w-3/5 md:w-4/5 lg:w-1/2 h-[300px] lg:h-[400px] mx-auto my-10"></div>

          <div className="py-20 text-center">
            <p>Some documentaton about this project</p>
          </div>
        </div>
        {/* Link cards section */}
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 w-full sm:w-3/5 md:w-4/5 mx-auto gap-10 p-6">
          <LinkCard 
            title="Github"
            description="Our repository"
            url="/"
            icon={<GitHub size={30} />}
          />

          <LinkCard 
            title="One pager"
            description="Take a look"
            url="/"
            icon={<FileText size={30} />}
          />

          <LinkCard 
            title="Branding"
            description="Our brand book"
            url="/"
            icon={<BookOpen size={30} />}
          />

          <LinkCard 
            title="Figma"
            description="See the design"
            url="/"
            icon={<Sun size={30} />}
          />
        </div>


        {/* About us section */}
        <div id="about-us" className="grid grid-cols-1 lg:grid-cols-2 mt-20 p-6 gap-10 w-full md:w-4/5 mx-auto">
          <div className="p-4 text-center lg:text-left">
            <div className="">
              <h1>About us</h1>
              <p>Who's behind this project</p>
            </div>

            <div className="flex flex-col gap-10 my-10">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat tempore totam suscipit nulla soluta ab sequi ratione omnis incidunt quaerat.</p>

              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum itaque magnam quibusdam nam esse modi porro incidunt unde dolorum aliquam.</p>
            </div>

            <div className="grid grid-cols-2 place-items-center">
              <div className="flex flex-col items-center gap-5">
                <div className="avatar avatar-xl">
                  <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="avatar" />
                </div>
                <p className="font-semibold">Angel Lopez</p>

                <ul className="flex gap-4 items-center justify-center">
                  <li className="landscape:hover:scale-110 transition-all ease-linear duration-150"><Link href="https://github.com/"><GitHub /></Link></li>
                  <li className="landscape:hover:scale-110 transition-all ease-linear duration-150"><Link href="https://www.linkedin.com/"><Linkedin /></Link></li>
                  <li className="landscape:hover:scale-110 transition-all ease-linear duration-150"><Link href="https://gmail.com/"><Mail /></Link></li>
                </ul>
              </div>

              <div className="flex flex-col items-center gap-5">
                <div className="avatar avatar-xl">
                  <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="avatar" />
                </div>
                <p className="font-semibold">Carlos Sanchez</p>

                <ul className="flex gap-4 items-center justify-center">
                  <li className="landscape:hover:scale-110 transition-all ease-linear duration-150"><Link href="https://github.com/"><GitHub /></Link></li>
                  <li className="landscape:hover:scale-110 transition-all ease-linear duration-150"><Link href="https://www.linkedin.com/"><Linkedin /></Link></li>
                  <li className="landscape:hover:scale-110 transition-all ease-linear duration-150"><Link href="https://gmail.com/"><Mail /></Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="hidden lg:grid place-items-center p-4">
            <Image src={gaminGirl} alt="gaming-girl" style={{width: '80%'}} quality={100} />
          </div>
        </div>

        {/* Contact section */}
        <div id="contact-us" className="flex flex-col justify-center mt-20 p-6 gap-y-10 bg-dark dark:bg-light text-white dark:text-dark">
          <div className="text-center">
            <h1>Contact us</h1>
            <p>Get in touch with us</p>
          </div>

          <div className="flex flex-col items-center">
            <ContactForm />
          </div>
        </div>

        <div className="w-full lg:w-1/2 mx-auto flex flex-col justify-center items-center py-20 px-6 text-center gap-y-10">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aperiam consectetur mollitia neque expedita</p>

          <Link 
            href="#header"
            className="rounded-full p-4 w-16 h-16 landscape:hover:scale-105 transition-all ease-linear duration-150 aspect-square bg-primary grid place-items-center text-white"
          >
            <ArrowUp size={24} />
          </Link>

          <span className="font-bold">Back to top</span>
        </div>

      </main>
      <Footer />
    </>
  );
}
