import Navbar from "./components/custom/Navbar";
import WelcomeScreen from "./components/custom/WelcomeScreen";
import "./styles.css";

// Instructions for Candidate:
// 1. Add an input field to accept an email.
// 2. Add a button that passes the input value to the parent component.
// 3. In the parent component, add logic to send the value to a backend with a POST request to
//the following url https://webhook.site/6064735c-c7f2-4584-ba9d-1f0e80f32721. Along with the email, send your github username in the JSON.
// 4. Add styling to the button (Button) and input (Input) using the ShadCN Component library here: https://ui.shadcn.com/docs/components/input

export default function App() {
  return (
    <main className="w-full h-screen bg-slate-950 text-slate-200 flex flex-col items-center">
      <Navbar />
      <WelcomeScreen />
    </main>
  );
}
