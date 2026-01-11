import React, { useState, useEffect } from "react";
import { getItemFromLocalStorage } from "../../utils/storage";

const Auth: React.FC = () => {
  const [stateAuth, setStateAuth] = useState(true);

  useEffect(() => {
    const user = getItemFromLocalStorage("user");
    const verified = getItemFromLocalStorage("verified");

    if (!user || !verified) {
      setStateAuth(false);
    }
  }, []);



  console.log(stateAuth);

  return <div>Auth</div>;
};

export default Auth;
