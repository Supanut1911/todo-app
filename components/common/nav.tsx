import { FC } from "react";

interface Props {}

const nav: FC<Props> = (props): JSX.Element => {
  return (
    <div className=" h-10 p-2">
      Todo app
      <div className="h-[1px] bg-black"></div>
    </div>
  );
};

export default nav;
