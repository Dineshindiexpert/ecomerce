

// Categories as objects with name and optional path
export const Category = [
  { name: "Electronics", path: "/electronics" },
  { name: "Clothing", path: "/clothes" },
  { name: "Gifts", path: "/gifts" },
  { name: "Toys", path: "/toys" },
  { name: "Books", path: "/books" },
  { name: "Home & Kitchen", path: "/home-kitchen" },
  { name: "Sports", path: "/sports" },
  { name: "Beauty & Personal Care", path: "/beauty" },
];

export const Price=[0,100,200,300,500,1000,10000];

// Profile menu: can include callback functions
export const Profile = [
  { name: "My Account", path: "/account" },
  { name: "Orders", path: "/orders" },
  {   
    name: "Logout",
    action: () => {
      // alert("Logged out!");
      window.location.href = "/"; 
      localStorage.setItem("isLoggedIn", "false");
    }
  }
];