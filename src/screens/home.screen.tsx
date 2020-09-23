import React, { useState } from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import DeleteAction from "../components/@common/delete-action";
import getFlagEmoji from "../utils/emoji";
import ListItem from "../components/@common/list-item";
import ListSeparator from "../components/@common/list-separator";
import useCountries from "../hooks/use-countries";

const HomeScreen = () => {
  const [refreshing] = useState(false);
  const { navigate } = useNavigation();
  const { countries, deleteCountry, revalidate } = useCountries();

  return (
    <FlatList
      data={countries}
      keyExtractor={(country) => country.alpha2Code}
      ItemSeparatorComponent={ListSeparator}
      refreshing={refreshing}
      onRefresh={revalidate}
      renderItem={({ item: country }) => (
        <ListItem
          title={country.name}
          subtitle={country.capital || "N/A"}
          leftText={getFlagEmoji(country.alpha2Code)}
          rightText={country.alpha2Code}
          onPress={() => navigate("Detail", country)}
          renderRightActions={() => (
            <DeleteAction onPress={() => deleteCountry(country)} />
          )}
        />
      )}
    />
  );
};

export default HomeScreen;
