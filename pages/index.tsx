import { Inter } from "@next/font/google";
import Link from "next/link";

import DefaultLayout from "../components/layout/default-layout";
import TodoList from "../components/todo-list";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <div>{/* <TodoList /> */}</div>
        <img src="/images/bg.jpg"></img>
      </DefaultLayout>
    </>
  );
}
