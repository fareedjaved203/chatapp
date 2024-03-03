import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Chat = lazy(() => import("./pages/Chat"));
const Groups = lazy(() => import("./pages/Groups"));
const NotFound = lazy(() => import("./pages/NotFound"));

let user = true;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<ProtectedRoute user={user} />}>
          <Route
            path="/"
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/chat/:chatId"
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <Chat />
              </Suspense>
            }
          />

          <Route
            path="/groups"
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <Groups />
              </Suspense>
            }
          />
        </Route>

        <Route element={<ProtectedRoute user={!user} redirect="/" />}>
          <Route
            path="/login"
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="/signup"
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <Signup />
              </Suspense>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
