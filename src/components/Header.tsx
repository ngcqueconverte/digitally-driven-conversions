const Header = () => {
  return (
    <header className="w-full bg-background py-6">
      <div className="container-narrow flex items-center justify-center px-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-6 h-6 text-primary-foreground"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
          <span className="font-heading font-bold text-xl text-foreground">
            Negócio Que Converte
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
