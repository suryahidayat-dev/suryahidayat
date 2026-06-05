import Contact from "./components/Contact";
import Typewriter from "./components/Typewriter";

export default function App() {
  return (
   <main className="h-screen w-screen flex items-center justify-center">
      <div>
        <div></div>
        <div>
          <h1>It's Surya</h1>
         
          <h2>
            I'm <Typewriter />
          </h2>
        </div>

        <div>
          <Contact />

        </div>
      </div>
    </main>
  );
}
