import Container from './container';

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center justify-evenly">
          <p className="text-4xl font-medium">WANT MORE?</p>
          <p className="text-4xl font-medium">INSTAGRAM</p>
        </div>
      </Container>
    </footer>
  );
}
