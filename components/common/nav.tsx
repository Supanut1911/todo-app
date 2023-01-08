import { FC } from "react";
import Link from "next/link";
interface Props {}

const nav: FC<Props> = (props): JSX.Element => {
  return (
    <div className="p-4 bg-blue-500">
      <div className="flex align-middle justify-between">
        <p className="text-white text-xl">Todo - Sp@ce</p>
        <div className="flex space-x-4">
          <button className="bg-white p-1 rounded-md">
            <Link href="/signup">Sign up</Link>
          </button>
          <button className="bg-black text-white p-1 rounded-md">
            <Link href="/signin">Sign in</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default nav;
