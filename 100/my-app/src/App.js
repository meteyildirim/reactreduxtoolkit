import styled from "styled-components";
import Counter from "./features/counter/counter";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

const AppContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function App({ Component, pageProps }) {
  return (
    <PrimeReactProvider>
      <AppContainer>
        <Counter {...pageProps} />
      </AppContainer>
    </PrimeReactProvider>
  );
}
export default App;
