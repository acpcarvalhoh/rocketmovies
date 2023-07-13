import { Container } from "./styles";

import { ButtonRating } from "../ButtonRating";

export function Rating() {
  return (
    <Container>
      <ButtonRating isActive/>
      <ButtonRating isActive/>
      <ButtonRating isActive/>
      <ButtonRating isActive/>
      <ButtonRating/>
      <ButtonRating/>
    </Container>
  );
}
