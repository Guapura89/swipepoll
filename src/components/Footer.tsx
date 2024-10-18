import { GitHub, Instagram, Twitter } from "react-feather";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-accent text-white">
      <div className="pt-20 pb-5 px-6 flex flex-col gap-4">
        <div>
          <h2 className="my-10">SwipePoll</h2>
          <ul className="flex flex-col gap-4 ">
          {
            [
              ["Back to top", "#header"], 
              ["How it works?", "#how-it-works"],
              ["About us", "#about-us"],
              ["Contact us", "#contact-us"]
            ].map(([item, url], i) => (
              <li key={`link-${i}`}>
                <Link href={url}>{item}</Link>
              </li>
            ))
          }
          </ul>
        </div>
        <div className="py-8">
          <ul className="flex md:justify-end gap-4">
            <li className="landscape:hover:scale-110 transition-all ease-linear duration-150"><Link href="https://github.com/"><GitHub /></Link></li>
            <li className="landscape:hover:scale-110 transition-all ease-linear duration-150"><Link href="https://instagram.com/"><Instagram /></Link></li>
            <li className="landscape:hover:scale-110 transition-all ease-linear duration-150"><Link href="https://x.com/"><Twitter /></Link></li>
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