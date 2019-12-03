import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { TransitionConfiguration } from "../transitionConfig";
import { UpdateTransactionScreen } from "../../screens/transaction/update/UpdateTransactionScreen";
import { SplitTransactionScreen } from "../../screens/transaction/splitDetail/SplitTransactionScreen";

const TransactionNavigator = createStackNavigator(
  {
    UpdateTransaction: {
      screen: UpdateTransactionScreen
    },
    SplitTransaction: SplitTransactionScreen
  },
  {
    headerMode: "none",
    transitionConfig: TransitionConfiguration
  }
);

export default createAppContainer(TransactionNavigator);
