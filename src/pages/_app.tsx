import type { AppProps } from 'next/app';
import Script from 'next/script';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { useEffect } from 'react';
config.autoAddCss = false;

export default function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
//
