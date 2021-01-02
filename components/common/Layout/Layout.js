import { useState, useEffect } from "react";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "next-themes";

export function Layout({ children }) {
  return (
    <div className="w-full min-h-screen dark:bg-gray-700 dark:text-white">
      <div className="max-w-screen-md px-4 py-12 mx-auto antialiased font-body">
        <Header />
        <main>{children}</main>
        <footer className="text-sm font-light">
          Built with{" "}<a href="https://nextjs.org/">Next.js</a>
          {" "} &#169; Sumant Bagade, {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
}

const Header = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const { pathname } = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleDarkMode = (checked) => {
    const isDarkMode = checked;

    if (isDarkMode) setTheme("dark");
    else setTheme("light");
  };

  const isRoot = pathname === "/";
  const isDarkMode = resolvedTheme === "dark";

  return (
    <header
      className={clsx("flex  justify-between ", {
        "mb-8": isRoot,
        "mb-4": !isRoot,
      })}
    >
      <div className={"flex flex-row  max-w-md"}>
        {isRoot ? <LargeTitle /> : <LargeTitle />}
      </div>
      {mounted && (
        <DarkModeSwitch
          checked={isDarkMode}
          onChange={toggleDarkMode}
          className={isRoot ? 28 : 24}
        />
      )}
    </header>
  );
};

const LargeTitle = () => (
  <div>
    <Link href="/"
    >
      <a
        className={clsx(
          "text-2xl font-black leading-none text-black no-underline font-display",
          "dark:text-white"
        )}
      >
        Home
      </a>
    </Link>
    <Link href="/about"
    >
      <a
        className={clsx(
          "text-2xl mx-4 font-black leading-none text-black no-underline font-display",
          "dark:text-white"
        )}
      >
        About
      </a>
    </Link>
  </div>
);

const SmallTitle = () => (
  <h2>
    <Link href="/">
      <a
        className={clsx(
          "text-2xl font-black text-black no-underline font-display",
          "dark:text-white"
        )}
      >
        Sumant Bagade
      </a>
    </Link>
  </h2>
);

