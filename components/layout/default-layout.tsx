import { FC, ReactNode } from "react";
import Nav from "../common/nav";
interface Props {
  children: ReactNode;
}

const DefaultLayout: FC<Props> = (props): JSX.Element => {
  const { children } = props;
  return (
    <div className="">
      <div className=" max-w-sm mx-auto sm:max-w-xl xl:max-w-5xl">
        <Nav />
        {children}
      </div>
    </div>
  );
};

export default DefaultLayout;
