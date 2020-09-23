import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

import Container from "../components/@common/container";
import getFlagEmoji from "../utils/emoji";
import Heading from "../components/@common/heading";
import Paragraph from "../components/@common/paragraph";
import { ICountry } from "../hooks/use-countries";

type ParamList = {
  country: ICountry;
};

const DetailScreen = () => {
  const { setOptions } = useNavigation();
  const { params } = useRoute<RouteProp<ParamList, "country">>();

  useEffect(() => {
    setOptions({ title: `${getFlagEmoji(params.alpha2Code)} ${params.name}` });
  }, []);

  return (
    <Container>
      <View style={styles.block}>
        <Heading>History of {params.name}</Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
          voluptate vero veniam minima, quis quae optio numquam autem
          blanditiis? Error minima ipsa, consectetur similique sequi est
          pariatur porro optio a.
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
          voluptate vero veniam minima, quis quae optio numquam autem
          blanditiis? Error minima ipsa, consectetur similique sequi est
          pariatur porro optio a.
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
          voluptate vero veniam minima, quis quae optio numquam autem
          blanditiis? Error minima ipsa, consectetur similique sequi est
          pariatur porro optio a.
        </Paragraph>
      </View>
      <View style={styles.block}>
        <Heading>About the Capital: {params.capital}</Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
          voluptate vero veniam minima, quis quae optio numquam autem
          blanditiis? Error minima ipsa, consectetur similique sequi est
          pariatur porro optio a.
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
          voluptate vero veniam minima, quis quae optio numquam autem
          blanditiis? Error minima ipsa, consectetur similique sequi est
          pariatur porro optio a.
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
          voluptate vero veniam minima, quis quae optio numquam autem
          blanditiis? Error minima ipsa, consectetur similique sequi est
          pariatur porro optio a.
        </Paragraph>
      </View>
    </Container>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  block: {
    marginBottom: 20,
  },
});
