export default function Tabs({ children, button, ButtonContainer = "menu" }) {
  // const ButtonContainer = buttonsContainer;
  return (
    <>
      <ButtonContainer>{button}</ButtonContainer>
      {children}
    </>
  );
}
