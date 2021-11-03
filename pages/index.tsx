import type { NextPage } from "next";
import { stringify } from "querystring";
import dbConnect from "../lib/dbConnect";
import GroceryItem from "../models/groceryList";

const Home: NextPage = ({ groceryItems }) => {
  return (
    <div className="bg-gray-50">
      <h1 className="text-3xl">Apezinho Groceries</h1>
      {!!groceryItems.length &&
        groceryItems.map((item) => <div key={item.name}>{item.name}</div>)}
    </div>
  );
};

export async function getServerSideProps() {
  try {
    await dbConnect();

    /* find all the data in our database */
    const result = await GroceryItem.find({});
    const groceryItems = result ? stringify(result) : null;

    console.log(groceryItems);

    return { props: { groceryItems: [] } };
  } catch (error) {
    console.log("Error fetching: ", error);
  }
}

export default Home;
