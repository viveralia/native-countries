import { Alert } from "react-native";
import useSWR from "swr";

export interface ICountry {
  name: string;
  capital: string;
  alpha2Code: string;
}

export interface IUseCountries {
  countries: ICountry[] | undefined;
  revalidate: () => Promise<boolean>;
  deleteCountry: (country: ICountry) => void;
}

const useCountries = (): IUseCountries => {
  const { data: countries, mutate, revalidate } = useSWR<ICountry[]>("/all");

  const cancelDestruction = () => null;

  const confirmDestruction = (country: ICountry) => {
    mutate(
      (countries) =>
        countries.filter((c) => c.alpha2Code !== country.alpha2Code),
      false
    );
  };

  const deleteCountry = (country: ICountry) => {
    Alert.alert(
      "Caution ⚠️",
      `Are you sure you want to delete ${country.name}?`,
      [
        {
          text: "Cancel",
          style: "cancel",
          onPress: () => cancelDestruction(),
        },
        {
          text: "Confirm",
          style: "destructive",
          onPress: () => confirmDestruction(country),
        },
      ]
    );
  };

  return {
    countries,
    revalidate,
    deleteCountry,
  };
};

export default useCountries;
