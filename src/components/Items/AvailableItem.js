import React from "react";
import Card from "../UI/Card";
import Thing from "./Thing/Thing";

import styles from "./AvailableItem.module.css";

const DUMMY_ITEMS = [
  {
    id: "i1",
    name: "Tubeless-Tyre",
    description: " Best quality rubber and glue",
    price: 99,
  },
  {
    id: "i2",
    name: "Tubed Tyre",
    description: "Pappu's specialty!",
    price: 169,
  },
  {
    id: "i3",
    name: "Rupture Tyre",
    description: "Replacing your tyres the professional way",
    price: 1299,
  },
  {
    id: "i4",
    name: "Oiling",
    description: "For the smoothness in cycle...",
    price: 29,
  },
];

const AvailableItem = (props) => {
  const itemList = DUMMY_ITEMS.map((item) => (
    <Thing
      id={item.id}
      key={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
    />
  ));
  return (
    <Card>
      <section className={styles.item}>
        <ul>{itemList}</ul>
      </section>
    </Card>
  );
};

export default AvailableItem;
