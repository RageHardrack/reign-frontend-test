/**
 * Functional Component to render a Navigation Bar.
 */
export const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center w-full shadow-md">
      <div className="container flex items-center px-4 py-8 mx-auto md:py-14 md:px-8">
        <h1 className="font-serif text-3xl">HACKER NEWS</h1>
      </div>
    </nav>
  );
};
