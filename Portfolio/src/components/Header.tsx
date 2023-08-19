import { useState } from "react";
type dataH = { text: string; id: string };
const dataHeader: dataH[] = [
  { text: "About me", id: "about" },
  { text: "Skills", id: "skills" },
  { text: "Proyects", id: "projects" },
  { text: "Contact me", id: "contact" },
];
export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex absolute inset-y-0 left-0 sm:hidden items-center ">
            <button
              type="button"
              className="relative inline-flex items-center justify-center  p-2 border-4 border-transparent rounded-3xl hover:border-white text-white  "
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <div>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } sm:hidden border-4 border-white rounded-3xl bg-transparent`}
            id="mobile-menu"
          >
            <div className="px-2 pb-3 mt-60 pt-2">
              {dataHeader.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-white border-4 rounded-3xl border-transparent  hover:border-white block  px-3 py-2 text-base font-medium"
                >
                  {item.text}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            {/* Logo y elementos de menú */}
            <div className="hidden md:block mx-auto space-x-4">
              {dataHeader.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className=" text-white border-4 rounded-3xl border-transparent  hover:border-white px-3 py-2 text-sm font-medium"
                >
                  {item.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
