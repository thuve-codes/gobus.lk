
import './globals.css';

export const metadata = {
  title: "GoBus.lk",
  description: "Powered by thuve-codes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
