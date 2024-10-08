import { useEffect, useState } from "react";
import {
  Navigate,
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";

import { history } from "./utils/history";
import { ContextCartCount } from "./utils/context-cart";
import { ContextToken } from "./utils/context-token";
import { PrivateRoute } from "./components/PrivateRoute";
import { AccessTokenPayloadDTO } from "./models/auth";

import ClientHome from "./routes/ClientHome";
import ProductDetails from "./routes/ClientHome/ProductDetails";
import Catalog from "./routes/ClientHome/Catalog";
import Cart from "./routes/ClientHome/Cart";
import Login from "./routes/ClientHome/Login";
import Confirmation from "./routes/ClientHome/Confirmation";

import AdminHome from "./routes/Admin";
import Dashboard from "./routes/Admin/Dashboard";
import ProductListing from "./routes/Admin/ProductListing";
import ProductForm from "./routes/Admin/ProductForm";

import * as authService from "./services/auth-service";
import * as cartService from "./services/cart-service";

function App() {
  const [contextCartCount, setContextCartCount] = useState<number>(0);
  const [contextTokenPayload, setContextTokenPayload] =
    useState<AccessTokenPayloadDTO>();

  useEffect(() => {
    setContextCartCount(cartService.getCart().items.length);

    if (authService.isAuthenticated()) {
      const payload = authService.getAccessTokenPayload();
      setContextTokenPayload(payload);
    }
  }, []);

  return (
    <ContextToken.Provider value={{ contextTokenPayload, setContextTokenPayload }}>
      <ContextCartCount.Provider value={{ contextCartCount, setContextCartCount }}>
        <HistoryRouter history={history}>
          <Routes>
            
            {/******** Rotas Área Pública ******/}
            <Route path="/" element={<ClientHome />}>            
              <Route index element={<Navigate to="/catalog" />} />
              <Route path="catalog" element={<Catalog />} />
              <Route path="product-details/:productId" element={<ProductDetails />} />
              <Route path="cart" element={<Cart />} />              
              <Route path="confirmation/:orderId" element=
                {<PrivateRoute>
                    <Confirmation />
                  </PrivateRoute>
                }
              />              
              <Route path="login" element={<Login />} />
            </Route>
            {/*******************************/}

            {/** Rotas Área Administrativa */}
            <Route path="/admin/" element=
              {
                <PrivateRoute roles={["ROLE_ADMIN"]}>
                  <AdminHome />
                </PrivateRoute>
              }
            >
              <Route index element={<Navigate to="/admin/dashboard" />} />
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="/admin/products" element={<ProductListing />} />
              <Route path="/admin/products/:productId" element={<ProductForm />} />
            </Route>
            {/*******************************/}

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>

        </HistoryRouter>
      </ContextCartCount.Provider>
    </ContextToken.Provider>
  );
}

export default App;
