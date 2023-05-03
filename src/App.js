import React, { Component } from "react";
import Card from "./Components/Card";

class App extends Component {
  render() {
    return (
      <div className="card__wrapper">
        <Card
          title="Orange Juice"
          img="https://www.minutemaid.com/content/dam/nagbrands/us/minutemaidus/en/products/variety-juices-and-more/jtg/JTG-PCP-Thumbnails-orange.png"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reiciendis, sint ad voluptatem doloribus labore voluptas?"
          price="4.99"
          off="30"
        />
        <Card
          title="Orange Juice"
          img="https://www.minutemaid.com/content/dam/nagbrands/us/minutemaidus/en/products/variety-juices-and-more/jtg/JTG-PCP-Thumbnails-orange.png"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Reiciendis, sint ad voluptatem doloribus labore voluptas?"
          price="3.49"
          off=""
        />
        <Card
          title="Cherry Juice"
          img="https://www.minutemaid.com/content/dam/nagbrands/us/minutemaidus/en/products/variety-juices-and-more/jtg/JTG-PCP-Thumbnails-orange.png"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Reiciendis, sint ad voluptatem doloribus labore voluptas?"
          price="9.99"
          off="30"
        />
        <Card
          title="Grape Juice"
          img="https://www.minutemaid.com/content/dam/nagbrands/us/minutemaidus/en/products/variety-juices-and-more/jtg/JTG-PCP-Thumbnails-orange.png"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    Reiciendis, sint ad voluptatem doloribus labore voluptas?"
          price="2.99"
          off="10"
        />
        <Card
          title="Apple Juice"
          img="https://www.minutemaid.com/content/dam/nagbrands/us/minutemaidus/en/products/variety-juices-and-more/jtg/JTG-PCP-Thumbnails-orange.png"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Reiciendis, sint ad voluptatem doloribus labore voluptas?"
          price="4.99"
          off="60"
        />
      </div>
    );
  }
}

export default App;
