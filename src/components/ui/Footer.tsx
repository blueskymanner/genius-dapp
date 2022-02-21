import Link from "next/link";
import navigation from "../navigation";
import Image from "next/image";

const GlobalLinks = () => {
  return (
    <footer>
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex flex-horizonatal text-gray-400">
              <navigation.logo className="h-10 w-10 " aria-hidden="true" />
              <h2 className="px-4 py-1 h-8 w-auto text-l font-bold leading-7 sm:text-xl sm:truncate font-josefin uppercase tracking-tl-wide">
                Tokenlaunch
              </h2>
            </div>

            <p className="text-gray-500 text-base">
              Find the best new tokens in Crypto
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Token
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.footer.token.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href}>
                        <a className="text-base text-gray-500 hover:text-gray-900">
                          {item.name}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Create
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.footer.create.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href}>
                        <a className="text-base text-gray-500 hover:text-gray-900">
                          {item.name}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Social
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.footer.social.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href}>
                        <a className="text-base text-gray-500 hover:text-gray-900">
                          {item.name}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Help
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.footer.help.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href}>
                        <a className="text-base text-gray-500 hover:text-gray-900">
                          {item.name}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2021 Submap, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default GlobalLinks;
