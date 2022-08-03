import { Router } from "../src/router/Router";
import { UseProvider } from "./components/providers/UseProvider";
import "./styles.css";

export default function App() {
  return (
    <UseProvider>
      <Router />
    </UseProvider>
  );
}
