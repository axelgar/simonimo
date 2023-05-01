import Link from 'next/link';
import Alert from '../components/alert';
import Footer from '../components/footer';
import Meta from '../components/meta';

// TODO: work on the alert component
export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <header className="p-5">
          <Link href="/">
            <img className="h-20 w-20" src="/gifsimonimo.gif" />
          </Link>
        </header>
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
