import dbConnect from '@lib/dbConnect';
import GroceryItem, { IGrocery } from '@models/groceryList';
import { getSession } from 'next-auth/react';
interface Props {
  groceryItems: IGrocery[];
}

const Home = ({ groceryItems }: Props) => {
  return (
    <div className="container bg-gray-50">
      <h1 className="font-serif text-3xl">Apezinho Groceries</h1>
      {!!groceryItems.length &&
        groceryItems.map((item) => (
          <div key={item._id}>
            <p>{item.name}</p>
            <p>{item.price}</p>
          </div>
        ))}
    </div>
  );
};

export async function getServerSideProps({ req }) {
  try {
    const session = await getSession({ req });
    if (!session) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }
    await dbConnect();

    /* find all the data in our database */
    const results: IGrocery[] = await GroceryItem.find({});
    const groceryItems = JSON.parse(JSON.stringify(results));

    return { props: { groceryItems } };
  } catch (error) {
    console.log('Error fetching: ', error);
  }
}

export default Home;
