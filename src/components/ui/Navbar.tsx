import { Disclosure, Popover } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import Link from "next/link";
import classnames from "classnames";
import navigation from "../navigation";
import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { useEagerConnect, useInactiveListener } from "../../lib/crypto/hooks";
import { injected } from "../../lib/crypto/connectors";
import cryptoChains from "../CryptoChains";

enum ConnectorNames {
  Injected = "Injected",
}

const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
};

const ConnectedWallet = () => {
  const { connector, chainId, account, activate, active } = useWeb3React();
  const cryptoChain = cryptoChains[Number(chainId)];
  const [activatingConnector, setActivatingConnector] = useState<any>();

  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector);

  return (
    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
      {active ? (
        <div className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium font-mono text-white bg-gray-900 hover:bg-gray-800">
          <cryptoChain.monoIcon
            className="h-7 w-7 pr-2"
            aria-hidden="true"
            alt={cryptoChain.name}
          />
          {account.substring(0, 6)}...
          {account.substring(account.length - 4)}
        </div>
      ) : (
        <button
          className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-900 hover:bg-gray-800"
          onClick={() => {
            console.log("boom");
            setActivatingConnector(ConnectorNames.Injected);
            activate(connectorsByName[ConnectorNames.Injected]);
          }}
        >
          Connect To Wallet
        </button>
      )}
    </div>
  );
};

const Navbar = () => {
  const router = useRouter();

  const links = navigation.header.map((item) => (
    <Link href={item.href} key={item.name}>
      <a
        className={classnames({
          "text-base font-medium block px-3 py-2": true,
          "text-gray-900 border-b-4 border-gray-900":
            item.href === router.pathname,
          "text-gray-600 hover:border-b-4 hover:border-yellow-600":
            item.href !== router.pathname,
        })}
      >
        {item.name}
      </a>
    </Link>
  ));

  return (
    <div className="bg-tl-yellow pb-24 pt-12">
      <Disclosure as="nav" className="bg-tl-yellow">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16 px-4 sm:px-0">
                <div className="w-full py-6 flex items-center justify-between">
                  <div className="flex items-center">
                    <Link href="/">
                      <a className="flex-shrink-0 flex items-center">
                        <navigation.logo
                          className="h-10 w-10 text-white"
                          aria-hidden="true"
                        />
                        <h2 className="px-4 py-1 h-8 w-auto text-l font-bold leading-7 text-gray-900 sm:text-xl sm:truncate font-josefin uppercase tracking-tl-wide">
                          App
                        </h2>
                        <div className="hidden ml-10 space-x-9 lg:block"></div>
                      </a>
                    </Link>
                  </div>
                  <Popover.Group as="nav" className="hidden md:flex space-x-10">
                    {links}
                  </Popover.Group>
                  {ConnectedWallet()}
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-black hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="border-b border-gray-700 md:hidden">
              <div className="px-2 py-3 space-y-1 sm:px-3">{links}</div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <header className="py-6" />
    </div>
  );
};

export default Navbar;
