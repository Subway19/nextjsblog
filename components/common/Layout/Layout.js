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
        <footer className="text-base font-light">
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
        "mb-2": !isRoot,
      })}
    >
      <div className={"flex flex-row  max-w-md"}>
        {isRoot ? <LargeTitle /> : <SmallTitle />}
        {/* <Links /> */}
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
  <h2>
    <Link href="/"
      style={{
        margin: '20px'
      }}
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
       style={{
        margin: '20px'
      }}
    >
      <a
        className={clsx(
          "text-2xl font-black leading-none text-black no-underline font-display",
          "dark:text-white"
        )}
      >
        About
      </a>
    </Link>
  </h2>
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


const Links = () => (
  <div>
  <Link
      style={{
        boxShadow: `none`,
        textDecoration: `none`,
        color: `inherit`,
        margin: '0 20px'
      }}
      href={`/`}
    >
      Home
  </Link>
  <Link
      style={{
        boxShadow: `none`,
        textDecoration: `none`,
        color: `inherit`,
        margin: '0 20px'
      }}
      href={`/about`}
    >
      About
    </Link>
</div>
)
