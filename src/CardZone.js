import React from "react";
import Card from "./Card";
import i1 from "./img/i1.png";
import i2 from "./img/i2.png";
import i3 from "./img/i3.png";
import i4 from "./img/i4.png";
import i5 from "./img/i5.png";
import i6 from "./img/i6.png";
import i7 from "./img/i7.png";
import i8 from "./img/i8.png";

const CardZone = () => {
  return (
    <div>
      CardZone
      <Card
        img={i1}
        title="Titulo"
        text="Dolor reprehenderit labore minim officia fugiat ex elit pariatur ea amet esse. Labore officia culpa deserunt et quis Lorem eu. Elit esse officia veniam laborum magna nostrud ut pariatur. Adipisicing et mollit officia irure. In enim veniam occaecat id elit ad velit."
      />
      <Card
        img={i2}
        title="Titulo"
        text="Dolor reprehenderit labore minim officia fugiat ex elit pariatur ea amet esse. Labore officia culpa deserunt et quis Lorem eu. Elit esse officia veniam laborum magna nostrud ut pariatur. Adipisicing et mollit officia irure. In enim veniam occaecat id elit ad velit."
      />
      <Card
        img={i3}
        title="Titulo"
        text="Dolor reprehenderit labore minim officia fugiat ex elit pariatur ea amet esse. Labore officia culpa deserunt et quis Lorem eu. Elit esse officia veniam laborum magna nostrud ut pariatur. Adipisicing et mollit officia irure. In enim veniam occaecat id elit ad velit."
      />
      <Card
        img={i8}
        title="Titulo"
        text="Dolor reprehenderit labore minim officia fugiat ex elit pariatur ea amet esse. Labore officia culpa deserunt et quis Lorem eu. Elit esse officia veniam laborum magna nostrud ut pariatur. Adipisicing et mollit officia irure. In enim veniam occaecat id elit ad velit."
      />
    </div>
  );
};
export default CardZone;
