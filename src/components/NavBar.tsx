import { Menu } from "react-feather";
import Link from "next/link";

export const NavBar = () => {
  const links = ['Home', 'How it works?', 'About us', 'Contact us'];
  return(
    <header className="w-full lg:w-4/5 mx-auto flex items-center justify-between pt-4 h-32 p-4 text-black">
      <div>
        <h1 className="text-4xl font-bold"><a href="/">SwipePoll</a></h1>
      </div>

      <div className="hidden md:flex gap-4 items-center">
        <ul className="flex items-center gap-4">
          {
            [["Home", "/"], ["How it works?", "/"], ["About us", "/"], ["Contact us", "/"]].map(([item, link], i) =>
              <li key={`link-${i}`}>
                <a href={link} className="hover:opacity-50 text-lg font-bold hover:cursor-pointer transition-all duration-200 ease-linear">
                  {item}
                </a>
              </li>
            )
          }
        </ul>
        <Link href={"/dashboard"} className="btn btn-outline text-accent border-accent hover:bg-accent hover:border-accent hover:text-white btn-rounded transition-all duration-200 ease-linear">Get started</Link>
      </div>

      <div className="flex md:hidden items-center justify-center">
        <button className="flex items-center justify-center outline-none p-4 hover:text-white hover:bg-slate-700 rounded-lg transition-all duration-200 ease-linear">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
}
