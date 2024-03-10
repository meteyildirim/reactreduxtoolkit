import styled from "styled-components";
import Counter from "./features/counter/counter";

const AppContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <Counter />
    </AppContainer>
  );
}
export default App;
