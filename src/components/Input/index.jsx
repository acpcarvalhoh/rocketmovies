import { Container} from "./styles";
import { forwardRef } from "react";

export const Input = forwardRef(({ icon: Icon, ...rest }, ref) => {
    return (
      <Container>
        {Icon && <Icon size={20} />}
        <input ref={ref} {...rest} />
      </Container>
    );
});
