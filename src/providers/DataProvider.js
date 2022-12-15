// import axios from "axios";
// import React, { createContext, useContext, useEffect, useState } from "react";
// import { useAuth } from "./AuthProvider";

// const DataContext = createContext();

// const DataProvider = ({ children }) => {
//   const [result, setResult] = useState();
//   const { user } = useAuth();

//   useEffect(() => {
//     // getResults();
//     collection
//       .find()
//       .then((results) => setResult(results))
//       .catch((error) => console.log(error));
//   }, []);

//   // Find document
//   // const getResults = async () => {
//   //   collection
//   //     .find()
//   //     .then((results) => setResult(results))
//   //     .catch((error) => console.log(error));
//   //   // const results = await collection.find();
//   //   // setResult([...results]);
//   // };

//   const mongo = user.mongoClient("mongodb-atlas");
//   const collection = mongo.db("chvsDB").collection("Result");

//   return <DataContext.Provider value={result}>{children}</DataContext.Provider>;
// };

// export default DataProvider;

// const useData = () => {
//   const data = useContext(DataContext);
//   try {
//     if (data == null) {
//       throw new Error("useData() called outside of a DataProvider?"); // an alert is not placed because this is an error for the developer not the user
//     }
//   } catch (error) {
//     console.log(error);
//   }

//   return data;
// };

// export { useData };
