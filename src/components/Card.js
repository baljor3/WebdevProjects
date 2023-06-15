import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
 

  return (
<HStack>
  <VStack backgroundColor='white' rounded="md">
    <Image rounded="md" src={imageSrc} />
    <Heading color="black">{title}</Heading>
    <Text color="black" textAlign="left">{description}</Text>
    <Text color="black" textAlign="left">See More <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
    </VStack>
</HStack> 
);
};

export default Card;
