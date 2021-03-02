import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { isUserLogged } from "../../utils/actions";

import Loading from "../../components/Loading";
import UserLogged from "./UserLogged";
import UserGuest from "./UserGuest";

const Account = () => {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    (async () => setLogin(await isUserLogged()))();
  }, []);

  if (login == null) {
    return <Loading isVisible={true} text="Cargando..." />;
  }

  return login ? <UserLogged /> : <UserGuest />;
};

export default Account;

const styles = StyleSheet.create({});
