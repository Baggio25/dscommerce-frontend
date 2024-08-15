import { useState } from "react";
import {
  Navigate,
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { history } from "./utils/history";

import { ContextCartCount } from "./utils/context-cart";
import { PrivateRoute } from "./components/PrivateRoute";

import ClientHome from "./routes/ClientHome";
import ProductDetails from "./routes/ClientHome/ProductDetails";
import Catalog from "./routes/ClientHome/Catalog";
import Cart from "./routes/ClientHome/Cart";
import Login from "./routes/ClientHome/Login";
import AdminHome from "./routes/Admin";
import Dashboard from "./routes/Admin/Dashboard";

function App() {
  const [contextCartCount, setContextCartCount] = useState<number>(0);

  return (
    <ContextCartCount.Provider
      value={{ contextCartCount, setContextCartCount }}
    >
      <HistoryRouter history={history}>
        <Routes>
          <Route path="/" element={<ClientHome />}>
            <Route index element={<Catalog />} />
            <Route path="catalog" element={<Catalog />} />
            <Route
              path="product-details/:productId"
              element={<ProductDetails />}
            />
            <Route path="cart" element={<Cart />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route
            path="/admin/"
            element={
              <PrivateRoute>
                <AdminHome />
              </PrivateRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </HistoryRouter>
    </ContextCartCount.Provider>
  );
}

export default App;
