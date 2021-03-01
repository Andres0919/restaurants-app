import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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
  return (
    <NavigationContainer>
      <Tab.Navigator>
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
