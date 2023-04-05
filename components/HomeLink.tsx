import Link from 'next/link';

export const HomeLink = ({ href, children }) => {
  return (
    <Link href={href} style={{ color: '#d53d40' }} className="text-4xl font-medium underline">
      {children}
    </Link>
  );
};
