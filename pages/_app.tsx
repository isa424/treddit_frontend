import React from 'react';
import { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Provider } from 'next-auth/client';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
	media: {
		mobile: 425,
	},
	colors: {
		primary: '#0070f3',
	},
};

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
	return (
		<>
			<Provider session={pageProps.session}>
				<GlobalStyle />
				<ThemeProvider theme={theme}>
					<Component {...pageProps} />
				</ThemeProvider>
			</Provider>
		</>
	);
};

export default MyApp;
