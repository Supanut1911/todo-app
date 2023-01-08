import { useRouter } from "next/router";
import { FC, useState } from "react";

interface Props {}

const Signin: FC<Props> = (props): JSX.Element => {
  const router = useRouter();
  const [stateLogin, setStateLogin] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const copy = { ...stateLogin };
    copy[e.target.name] = e.target.value;
    setStateLogin(copy);
  };

  const handleSubmit = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: "POST",
      body: JSON.stringify(stateLogin),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      const json = await res.json();
      localStorage.setItem("token", json.token);
      router.push("/todo");
    } else {
      alert("Bad credentials");
    }
  };

  return (
    <div>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={stateLogin.usernamne}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="password"
        placeholder="password"
        value={stateLogin.password}
        onChange={handleChange}
      ></input>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Signin;
