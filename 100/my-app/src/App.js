import styled from "styled-components";
import Counter from "./features/counter/counter";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import PostLists from "./features/post/PostLists";

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
        <main>
          {/* <Counter {...pageProps} /> */}
          <PostLists />
        </main>
      </AppContainer>
    </PrimeReactProvider>
  );
}
export default App;
