import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

interface Props {}

const Signup: NextPage<Props> = () => {
  const router = useRouter();

  const [stateSignup, SetStateSignup] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const copy = { ...stateSignup };
    copy[e.target.name] = e.target.value;
    SetStateSignup(copy);
  };

  const handleSubmit = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, {
      method: "POST",
      body: JSON.stringify(stateSignup),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      alert("User registed success");
      router.push("/signin");
    }
  };

  return (
    <div>
      <input
        type="text"
        name="username"
        placeholder="username ..."
        value={stateSignup.username}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="password"
        placeholder="password ..."
        value={stateSignup.password}
        onChange={handleChange}
      ></input>
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
};

export default Signup;
