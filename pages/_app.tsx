import '~/styles/globals.css'
import Navbar from '~/components/navbar';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className='max-w-[624px] w-full mx-auto'>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </>
  );
}
