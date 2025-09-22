let orders = [
  {
    orderno: "C001",
    total_amount: 15000,
    no_Of_Item: 10,
    type_of_Customer: "Existing",
  },
  {
    orderno: "C002",
    total_amount: 5000,
    no_Of_Item: 2,
    type_of_Customer: "Existing",
  },
  {
    orderno: "C003",
    total_amount: 20000,
    no_Of_Item: 4,
    type_of_Customer: "New",
  },
];
for (let orderin of orders) {
  console.log(
    "order no" + orderin.orderno + "total amount" + orderin.total_amount
  );
}
