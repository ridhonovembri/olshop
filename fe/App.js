import StackNavigator from "./apps/navigations/StackNavigator";
import Sandbox from "./apps/components/Sandbox";

import { BasketContext } from "./apps/context/Context";
import ProductType from "./apps/components/ProductType";

export default function App() {
  return (
    <>
      {/* <ProductType /> */}
      <BasketContext>
        <StackNavigator />
      </BasketContext>
      {/* <Sandbox /> */}
    </>
  );
}
