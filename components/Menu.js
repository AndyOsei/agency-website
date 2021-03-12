import React, { useState, cloneElement } from "react";
import { Flex } from "@chakra-ui/react";

export default function Menu({ children, ...rest }) {
  const [selected, setSelected] = useState(0);

  return (
    <Flex {...rest}>
      {React.Children.map(children, (child, index) =>
        cloneElement(
          child,
          {
            active: index === selected,
            onClick: () => setSelected(index),
          },
          null
        )
      )}
    </Flex>
  );
}
