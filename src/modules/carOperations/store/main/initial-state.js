const state = {
  loadedCar: [],
  cars:[],
  reports: [],
  headers: [
    
    {
      text: "Car name",
      align: "start",
      sortable: false,
      value: "name",
      class: "red accent-4 white--text",
    },
    { text: "Price", value: "price", class: "red accent-4 white--text" },
    {
      text: "Number of Seats",
      value: "numberofseats",
      class: "red accent-4 white--text",
    },
    { text: "Date", value: "date", class: "red accent-4 white--text" },
    {
      text: "selling price",
      value: "sellingprice",
      class: "red accent-4 white--text",
    },
    {
      text: "The buyer name",
      value: "Thebuyername",
      class: "red accent-4 white--text",
    },
    {
      text: "Actions",
      value: "actions",
      class: "red accent-4 white--text",
    },
  ],
};

export default state;
