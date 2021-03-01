import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

import RestaurantsStack from "./RestaurantsStack";
import FavoritesStack from "./FavoritesStack";
import TopRestaurantsStack from "./TopRestaurantsStack";
import SearchStack from "./SearchStack";
import AccountStack from "./AccountStack";

const Tab = createBottomTabNavigator();

const tabs = [
  {
    id: 1,
    name: "restaurants",
    component: RestaurantsStack,
    options: {
      title: "Restaurantes",
    },
  },
  {
    id: 2,
    name: "favorites",
    component: FavoritesStack,
    options: {
      title: "Favoritos",
    },
  },
  {
    id: 3,
    name: "top-restaurants",
    component: TopRestaurantsStack,
    options: {
      title: "Top 5",
    },
  },
  {
    id: 4,
    name: "search",
    component: SearchStack,
    options: {
      title: "Buscar",
    },
  },
  {
    id: 5,
    name: "account",
    component: AccountStack,
    options: {
      title: "Cuenta",
    },
  },
];

const Navigation = () => {
  const screenOptions = (route, color) => {
    const routeIcon = {
      restaurants: "compass-outline",
      favorites: "heart-outline",
      "top-restaurants": "star-outline",
      search: "magnify",
      account: "home-outline",
    };

    return (
      <Icon
        type="material-community"
        name={routeIcon[route.name]}
        size={22}
        color={color}
      />
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="restaurants"
        tabBarOptions={{
          activeTintColor: "#442484",
          inactiveTintColor: "#a17dc3",
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
        })}
      >
        {tabs.map((tab) => (
          <Tab.Screen
            key={tab.id}
            name={tab.name}
            component={tab.component}
            options={tab.options}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
