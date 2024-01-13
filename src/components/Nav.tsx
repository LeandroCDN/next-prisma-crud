import Link from "next/link";
import ConnectWallet from "./ConnectWallet";

const Nav = () => {
  return (
    <nav className="flex flex-row justify-between bg-black text-white">
      <div className="p-2 flex flex-row gap-2">
        <Link href="/">
          <h3 className="">HOME</h3>
        </Link>
        <Link href="/">
          <h3 className="">Link1</h3>
        </Link>
        <Link href="/">
          <h3 className="">Link2</h3>
        </Link>
      </div>
      <div className="m-5">
        <ConnectWallet />
      </div>
    </nav>
  );
};

export default Nav;
