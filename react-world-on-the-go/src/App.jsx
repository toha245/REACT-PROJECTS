import { Suspense } from "react";
import "./App.css";
import Countries from "./components/countries/Countries";

const countriesPromise = fetch(
  'https://restcountries.com/v3.1/all?fields=name'
).then((res) => res.json());

function App() {
  return (
    <>
      <h1>React world On the GO...</h1>
      <Suspense fallback={<h3>Nadir vai going......</h3>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  );
}

export default App;
