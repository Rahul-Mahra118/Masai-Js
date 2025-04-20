import "./App.css";
import { Header } from "./Components/Header";
import { PriceCard } from "./Components/PriceCard";

function App() {
  return (
    <div className="app-component">
      <Header
        title="The Right Plan for Your Business"
        description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex aliquid alias excepturi veritatis fugit vitae delectus commodi illum sequi doloribus!"
      ></Header>
      <PriceCard
        plan="Starter"
        price="Free"
        features={["1 lorem ipsum", "Lorem, ipsum dolor.", "Monthly Updates"]}
      />
       <PriceCard
       plan="Lorem Plus"
        price="$35.50"
        features={["1 lorem ipsum", "Lorem, ipsum dolor.", "Monthly Updates"]}
      />
       <PriceCard
        plan="Lorem Plus"
        price="$65.90"
        features={["1 lorem ipsum", "Lorem, ipsum dolor.", "Monthly Updates"]}
      />
    </div>
  );
}

export default App;
