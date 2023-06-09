import './globals.css';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import { Header, Footer } from '~/components/defaultLayout';
import images from '~/assets/images';
import MessegerPage from '~/components/MessegerPage';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    // icons: {
    //     icon: images.LogoCompany,
    // },
    title: 'Công Ty Luật TNHH MTV Phúc Minh Anh - Tư vấn pháp lý uy tín và chuyên nghiệp',
    description:
        'Công Ty Luật TNHH MTV Phúc Minh Anh - Tư vấn pháp lý uy tín và chuyên nghiệp',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="vi">
            <body className={inter.className}>
                <MessegerPage />
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
