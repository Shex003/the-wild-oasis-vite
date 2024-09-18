// import styledComponent from "styled-components";
// import Button from "./ui/Button.jsx";
// import Input from "./ui/Input.jsx";
// import Heading from "./ui/Heading.jsx";
// import Row from "./ui/Row.jsx";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyle";
import Dashboard from "./pages/Dashboard.jsx";
import Bookings from "./pages/Bookings.jsx";
import Cabins from "./pages/Cabins.jsx";
import Users from "./pages/Users.jsx";
import Settings from "./pages/Settings.jsx";
import Account from "./pages/Account.jsx";
import Login from "./pages/Login.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
// import AppLayout from "./ui/AppLayout";
// const StyledApp = styledComponent.div`
//   padding: 20px;
// `;

// function App() {
//   return (
//     <>
//       <GlobalStyles />
//       <StyledApp>
//         <Row type="vertical">
//           <Row type="horizontal">
//             <Heading type="h1">The Wild Oasis</Heading>
//             <div>
//               <Heading as="h2">Ckech in and out</Heading>
//               <Button
//                 variation="primary"
//                 size="medium"
//                 onClick={() => alert("Check in")}
//               >
//                 Check in
//               </Button>
//               <Button
//                 variation="secondary"
//                 size="small"
//                 onClick={() => alert("Check out")}
//               >
//                 Check out
//               </Button>
//             </div>
//           </Row>
//           <Row type="vertical">
//             <Heading as="h3">Form</Heading>
//             <form>
//               <Input type="number" placeholder="Number of giests" />
//               <Input type="number" placeholder="Number of giests" />
//             </form>
//           </Row>
//         </Row>
//       </StyledApp>
//     </>
//   );
// }

// export default App;
function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="cabins" element={<Cabins />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
          <Route path="account" element={<Account />} />{" "}
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
