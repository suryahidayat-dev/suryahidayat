import About from "./components/About";
import Footer from "./components/Footer";
import PageLayout from "./components/layout/PageLayout";

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <PageLayout>
        <header className="mb-20">
          <h1 className="font-bold">Hi, I'm Surya👋</h1>
        </header>
        <About />
        <Footer />
      </PageLayout>
    </main>
  );
};

export default App;
