import { Router } from "./components/router/Router";
import "./styles.css";

const user = {
  name: "マイク",
  image: "https://source.unsplash.com/ZCHj_2lJP00",
  emial: "aa@gmail.com",
  phone: "000-00r0-000",
  company: {
    name: "IT Company"
  },
  website: "aaa.com"
};

export default function App() {
  return <Router />;
}
