import './globals.css';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import { Header, Footer } from '~/components/defaultLayout';
import images from '~/assets/images';

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
                <div id="fb-root"></div>

                <div id="fb-customer-chat" className="fb-customerchat"></div>
                <Script
                    id="messenger-tag"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `{var chatbox = document.getElementById('fb-customer-chat');
                            chatbox.setAttribute("page_id", "115713988209658");
                            chatbox.setAttribute("attribution", "biz_inbox");}`,
                    }}
                ></Script>
                <Script
                    id="messenger-sdk"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `{window.fbAsyncInit = function() {
                            FB.init({
                            xfbml            : true,
                            version          : 'v17.0'
                            });
                        };
                    
                        (function(d, s, id) {
                            var js, fjs = d.getElementsByTagName(s)[0];
                            if (d.getElementById(id)) return;
                            js = d.createElement(s); js.id = id;
                            js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
                            fjs.parentNode.insertBefore(js, fjs);
                        }(document, 'script', 'facebook-jssdk'));}`,
                    }}
                ></Script>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}

// export default function RootLayout({
//     children,
// }: {
//     children: React.ReactNode;
// }) {
//     return (
//         <html lang="vi">
//             <body className={inter.className}>
//                 {/* <div id="fb-root"></div>
//                 <div id="fb-customer-chat" className="fb-customerchat"></div> */}
//                 <Header />
//                 {children}
//                 <Footer />
//             </body>
//         </html>
//     );
// }
