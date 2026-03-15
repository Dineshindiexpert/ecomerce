

// Categories as objects with name and optional path
export const Category = [
  { name: "Electronics", path: "/electronics" },
  { name: "Clothing", path: "/clothing" },
  { name: "Books", path: "/books" },
  { name: 'GIFTS', path: "/gifts" },
  { name: 'toys', Path: '/toys' }
];

export const Price=[0,100,200,300,500,1000,10000];

// Profile menu: can include callback functions
export const Profile = [
  { name: "My Account", path: "/account" },
  { name: "Orders", path: "/orders" },
  {
    name: "Logout",
    action: () => {
      alert("Logged out!");
      localStorage.setItem("isLoggedIn", "false");
    }
  }
];