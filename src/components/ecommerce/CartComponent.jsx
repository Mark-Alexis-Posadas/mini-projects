import { Button, Card, TextInput } from "flowbite-react";
export default function CartComponent() {
  return (
    <Card className="max-w-sm">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Title
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
      <div className="flex">
        <Button className="w-10">+</Button>
        <TextInput id="small" type="text" value="1" className="w-10" />
        <Button className="w-10">-</Button>
      </div>
      <div className="flex">
        <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white mr-5">
          Price
        </h5>
        <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
          Total Price:
        </h5>
      </div>
      <Button color="failure">Remove</Button>
    </Card>
  );
}
