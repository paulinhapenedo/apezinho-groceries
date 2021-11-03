import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../lib/dbConnect";
import GroceryItem from "../../../models/groceryList";

export default async function GroceryItemRequest(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const groceryItems = await GroceryItem.find(
          {}
        ); /* find all the data in our database */
        res.status(200).json({ success: true, data: groceryItems });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const groceryItems = await GroceryItem.create(
          req.body
        ); /* create a new model in the database */
        res.status(201).json({ success: true, data: groceryItems });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
