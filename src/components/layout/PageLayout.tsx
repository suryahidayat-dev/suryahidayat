interface LayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    // 1. px-6: padding on mobile
    // 2. md:px-12: larger padding on tablets/desktop
    // 3. max-w-5xl: limits width so lines don't get too long on huge screens
    // 4. mx-auto: perfectly centers the content
    <div className="w-full max-w-5xl mx-auto px-6 md:px-12 py-10">
      {children}
    </div>
  );
};

export default PageLayout;