import 'normalize.css';
import 'antd/dist/antd.css';

import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export default function App({ Component, pageProps }: AppProps) {
  const client = new QueryClient();

  return (
    <>
      <QueryClientProvider client={client}>
        <ReactQueryDevtools />
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}
