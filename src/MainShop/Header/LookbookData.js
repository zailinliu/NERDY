// import { useEffect, useState } from "react";

// export function useLookbookData() {
//   const [lookbookData, setLookbookData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchLookbookData = async () => {
//       try {
//         // Simulating data fetching without an actual API call
//         // Replace the following line with your logic to fetch data
//         const responseData = /* Your data fetching logic */;
        
// setLookbookData(responseData);
//       } catch (error) {
 
// console.error("Error fetching lookbook data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

// fetchLookbookData();
//   }, []); // Don't forget to add the dependency array here

// return { lookbookData, loading };
// }