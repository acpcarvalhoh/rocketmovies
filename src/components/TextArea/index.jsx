import { Container } from "./styles";
import { forwardRef } from "react";

export const TextArea = forwardRef(({ value, ...rest }, ref) => {
    return (
      <Container {...rest} ref={ref} value={value}>
        
      </Container>
    );
}); 