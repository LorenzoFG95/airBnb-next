import styles from "./index.module.scss";
import { useState, useContext } from "react";
import { UserContext } from "../../index.js";

const Welcome = () => {
  const user = useContext(UserContext);

  return <h1>Welcome {user.name}</h1>;
};

export default Welcome;
