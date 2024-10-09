import { Play } from "react-feather";

export default function Home() {
  return (
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
          <h2 className="text-3xl font-bold">How it works?</h2>
          <p className="text-lg">Knoe more about our project</p>
        </div>
      </div>

      {/* Steps section */}
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-5 gap-5 p-6">
        <div className="md:row-span-2">
          <div className="flex items-center justigy-start gap-4">
            <div className="bg-accent text-white font-bold w-12 h-12 rounded-full flex items-center justify-center">
              1
            </div>
            <div>
              <p>Connect with your coummnity and make</p>
            </div>
          </div>
        </div>
        <div className="md:row-span-2 md:col-start-2 row-start-2">
          <div className="flex items-center justigy-end gap-4">
            <div>
              <p>Connect with your coummnity and make</p>
            </div>
            <div className="bg-accent text-white font-bold w-12 h-12 rounded-full flex items-center justify-center">
              1
            </div>
          </div>
        </div>
        <div className="md:row-span-2 row-start-3">
          <div className="flex items-center justigy-start gap-4">
            <div className="bg-accent text-white font-bold w-12 h-12 rounded-full flex items-center justify-center">
              1
            </div>
            <div>
              <p>Connect with your coummnity and make</p>
            </div>
          </div>
        </div>
        <div className="md:row-span-2 md:col-start-2 row-start-4">
          <div className="flex items-center justigy-end gap-4">
            <div>
              <p>Connect with your coummnity and make</p>
            </div>
            <div className="bg-accent text-white font-bold w-12 h-12 rounded-full flex items-center justify-center">
              1
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
