import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";

interface Props {}

interface Profile {
  username: string;
}

const LayoutAutheticated: FC<Props> = (props): JSX.Element => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [profile, setProfile] = useState<Profile>();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    fetchProfile();
  }, []);

  async function fetchProfile() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/profile`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    if (res.ok) {
      const json = await res.json();
      setProfile(json);
    } else {
      router.push("/signin");
    }
  }

  function logout() {
    localStorage.removeItem("token");
    router.push("/");
  }

  return (
    <div>
      layout-autheticated
      <p>Sign in as {profile && profile.username} </p>
      <button onClick={logout}> logout </button>
    </div>
  );
};

export default LayoutAutheticated;
