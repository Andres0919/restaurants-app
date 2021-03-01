import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { isUserLogged } from "../../utils/actions";
import UserLogged from "./UserLogged";
import UserGuest from "./UserGuest";

const Account = () => {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    (async () => setLogin(await isUserLogged()))();
  }, []);

  if (login == null) {
    return <Text>Cargando...</Text>;
  }

  return login ? <UserLogged /> : <UserGuest />;
};

export default Account;

const styles = StyleSheet.create({});
