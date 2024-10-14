import { ContactForm } from "@/components/ContactForm";
import { FeatureCard } from "@/components/FeatureCard";
import { LinkCard } from "@/components/LinkCard";
import { Play, GitHub, FileText, BookOpen, Sun, Linkedin, Mail } from "react-feather";

export default function Home() {
  return (
    <>
      <NavBar/>
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
              <a className="font-bold" href="https://www.twitch.tv/">Twitch</a>.
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
          <div className="mt-20 relative flex items-center justify-center  h-60">
            <div className="absolute left-1 bottom-2 -rotate-12 bg-warning w-3/6 h-44 rounded-2xl"></div>
            <div className="absolute right-1 bottom-2 rotate-12 bg-secondary w-3/6 h-44 rounded-2xl"></div>
            <div className="absolute bg-accent w-3/6 h-44 rounded-2xl"></div>
          </div>

        <div className="text-center p-4 my-20">
          <h2>How it works?</h2>
          <p className="text-lg">Knoe more about our project</p>
        </div>

      {/* Steps section */}
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-5 gap-16 p-6">
        <div className="md:row-span-2">
          <div className="flex items-center justify-start gap-4">
            <div className="bg-primary text-white font-bold w-12 h-12 rounded-full flex items-center justify-center">
              1
            </div>
            <div className="text-left">
              <p>Connect with your coummnity and make</p>
            </div>
          </div>
        </div>
        <div className="md:row-span-2 md:col-start-2 row-start-2">
          <div className="flex items-center justify-end gap-4">
            <div className="text-right">
              <p>Connect with your coummnity and make</p>
            </div>
            <div className="bg-primary text-white font-bold w-12 h-12 rounded-full flex items-center justify-center">
              1
            </div>
          </div>
        </div>
        <div className="md:row-span-2 row-start-3">
          <div className="flex items-center justify-start gap-4">
            <div className="bg-primary text-white font-bold w-12 h-12 rounded-full flex items-center justify-center">
              1
            </div>
            <div className="text-left">
              <p>Connect with your coummnity and make</p>
            </div>
          </div>
        </div>
        <div className="md:row-span-2 md:col-start-2 row-start-4">
          <div className="flex items-center justify-end gap-4">
            <div className="text-right">
              <p>Connect with your coummnity and make</p>
            </div>
            <div className="bg-primary text-white font-bold w-12 h-12 rounded-full flex items-center justify-center">
              1
            </div>
          </div>
        </div>
      </div>

      {/* Feature cards section */}
      <div className="grid grid-cols-1 gap-y-10 p-6">
        <FeatureCard 
          title="Deck of choices" 
          description="Create a deck of up to 50 chiuces for your poll." 
        />

        <FeatureCard 
          title="Duration"
          description="Decide the time duration to close the pre-poll."
        />

        <FeatureCard 
          title="Poll creation"
          description="Create a Twitch channel poll from here. With your winner choices."
        />

        <FeatureCard 
          title="Real-time votation"
          description="See what's your audience choosing."
        />

        <FeatureCard 
          title="Share"
          description="Bring your audience the facility to access through QR Code or Session Code to start."
        />
      </div>

      <div className="px-6 pb-10">
        <div className="text-center my-20">
          <h2>Demostration</h2>
          <p className="text-lg">Know more about our project</p>
        </div>

        <div className="bg-dark rounded-3xl aspect-video w-full h-52 my-10"></div>

        <div className="py-20 text-center">
          <p>Some documentaton about this project</p>
        </div>
      </div>
      {/* Link cards section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6">
        <LinkCard 
          title="Github"
          description="Our repository"
          url="/"
          icon={<GitHub size={50} />}
        />

        <LinkCard 
          title="One pager"
          description="Take a look"
          url="/"
          icon={<FileText size={50} />}
        />

        <LinkCard 
          title="Branding"
          description="Our brand book"
          url="/"
          icon={<BookOpen size={50} />}
        />

        <LinkCard 
          title="Figma"
          description="See the design"
          url="/"
          icon={<Sun size={50} />}
        />
      </div>


      {/* About us section */}
      <div className="flex flex-col justify-center mt-20 p-6 gap-y-10">
        <div className="text-center">
          <h1>About us</h1>
          <p>Who's behind this project</p>
        </div>

        <div className="flex flex-col gap-10 text-center my-10">
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
              <li><a href=""><GitHub /></a></li>
              <li><a href=""><Linkedin /></a></li>
              <li><a href=""><Mail /></a></li>
            </ul>
          </div>

          <div className="flex flex-col items-center gap-5">
            <div className="avatar avatar-xl">
              <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="avatar" />
            </div>
            <p className="font-semibold">Carlos Sanchez</p>

            <ul className="flex gap-4 items-center justify-center">
              <li><a href=""><GitHub /></a></li>
              <li><a href=""><Linkedin /></a></li>
              <li><a href=""><Mail /></a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact section */}
      <div className="flex flex-col justify-center mt-20 p-6 gap-y-10 bg-dark dark:bg-light text-white dark:text-dark">
        <div className="text-center">
          <h1>Contact us</h1>
          <p>Get in touch with us</p>
        </div>

        <div className="flex flex-col items-center">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
