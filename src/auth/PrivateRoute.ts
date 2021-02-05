// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
// // import { isLogin } from ".";
// import Cookies from 'js-cookie';

// export const PrivateRoute = ({ component: Component, path, ...rest }: any) => {
//   const pathName = `${path.charAt(1).toUpperCase()}${path.substring(
//     2,
//     path.length
//   )}`;
//   const user = Cookies.getJSON(`neipUser${pathName}`);

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         user ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{
//               pathname: '/login',
//             }}
//           />
//         )
//       }
//     />
//   );
// };

const PrivateRoute = () => {}

export default PrivateRoute;