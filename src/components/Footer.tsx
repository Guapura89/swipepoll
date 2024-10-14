import { GitHub, Instagram, Twitter } from "react-feather";

export const Footer = () => {
  return (
    <footer className="bg-accent text-white">
      <div className="pt-20 pb-5 px-6 flex flex-col gap-4">
        <div>
          <h2 className="my-10">SwipePoll</h2>
          <ul className="flex flex-col gap-4 ">
          {
            [
              ["Back to top", "#"], 
              ["How it works?", "#how-it-works"],
              ["About us", "#"],
              ["Contact us", "#"]
            ].map(([item, url], i) => (
              <li key={`link-${i}`}>
                <a href={url}>{item}</a>
              </li>
            ))
          }
          </ul>
        </div>
        <div className="py-8">
          <ul className="flex gap-4">
            <li><a href="/"><GitHub /></a></li>
            <li><a href="/"><Instagram /></a></li>
            <li><a href="/"><Twitter /></a></li>
          </ul>
          <div className="w-full opacity-80 flex justify-between pt-8"> 
            <p>SwipePoll 2024</p>
            <p>Privacy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}