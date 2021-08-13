import React from "react";

//Styles.
import {
  ButtonContainer,
  Button,
} from "../styled-components/repetitive/AdministrationWindow";

function ModalButton({ source, cancelFn, submitFn, children = "Pridėti"}) {
  return (
    <ButtonContainer>
      {/* Cancel button*/}
      <Button
        inputColor='#C6CBCB'
        bgColor='#F07167'
        whileHover={{
          backgroundColor: "#F35144",
          transition: { duration: 0.2, type: "tween" },
        }}
        onClick={cancelFn}
      >
        Atšaukti
      </Button>
      {/* Create button*/}
      <Button
        inputColor='#C6CBCB'
        bgColor='#0081A7'
        disabled={source.length ? false : true}
        style={{ opacity: source.length ? 1 : 0.2 }}
        whileHover={{
          scale: source.length ? 1.03 : 1,
          transition: { duration: 0.2, type: "tween" },
        }}
        whileTap={{
          scale: source.length ? 0.96 : 1,
          transition: { duration: 0.2, type: "tween" },
        }}
        type='submit'
        onClick={submitFn}
      >
        {children}
      </Button>
    </ButtonContainer>
  );
}

export default ModalButton;
