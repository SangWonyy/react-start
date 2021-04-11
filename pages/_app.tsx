import { AppProps } from 'next/app';
import Top from '../src/components/common/Top';
import Footer from '../src/components/common/Footer';
import styled from 'styled-components';
import { ChakraProvider } from '@chakra-ui/react';

const DivContainer = styled.div`
  margin-left: 20%;
  margin-right: 20%;
`;

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider>
      <DivContainer>
        <Top />
        <Component {...pageProps} />
        <Footer />
      </DivContainer>
    </ChakraProvider>
  );
}

export default App;
