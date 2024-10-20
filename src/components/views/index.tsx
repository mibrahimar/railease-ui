import { Navigate, Route, Routes } from "react-router-dom";
import { AuthLayout, AppLayout } from "components/layouts";
import { LoginView, RegisterView } from "./auth";
import { SearchView, HistoryView, TrainsView } from "./app";
import { useAuth } from "store";

const PrivateRoute = ({ children }: React.PropsWithChildren) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/auth/login" />;

  return <>{children}</>;
};

const AdminRoute = ({ children }: React.PropsWithChildren) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/auth/login" />;

  if (!user.isAdmin) return <Navigate to="/app/search" />;

  return <>{children}</>;
};

const UserRoute = ({ children }: React.PropsWithChildren) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/auth/login" />;

  if (user.isAdmin) return <Navigate to="/app/trains" />;

  return <>{children}</>;
};

export default function Views() {
  return (
    <div>
      <Routes>
        {/* Authentication */}
        <Route path="auth" element={<AuthLayout />}>
          <Route path="login" element={<LoginView />} />
          <Route path="register" element={<RegisterView />} />
          <Route index path="*" element={<Navigate to="login" />} />
        </Route>

        {/* Application */}
        <Route
          path="app"
          element={
            <PrivateRoute>
              <AppLayout />
            </PrivateRoute>
          }
        >
          {/* User */}
          <Route
            path="search"
            element={
              <UserRoute>
                <SearchView />
              </UserRoute>
            }
          />
          <Route
            path="history"
            element={
              <UserRoute>
                <HistoryView />
              </UserRoute>
            }
          />

          {/* Admin */}
          <Route
            path="trains"
            element={
              <AdminRoute>
                <TrainsView />
              </AdminRoute>
            }
          />

          <Route index path="*" element={<Navigate to="search" />} />
        </Route>

        <Route index path="*" element={<Navigate to="auth" />} />
      </Routes>
    </div>
  );
}
