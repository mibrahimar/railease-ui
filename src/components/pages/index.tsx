import { Navigate, Route, Routes } from "react-router-dom";
import { AppLayout } from "components/layouts/app-layout";
import { AuthLayout } from "components/layouts/auth-layout";
import { LoginPage } from "./login";
import { RegisterPage } from "./register";
import { SearchPage } from "./search";
import { BookingHistoryPage } from "./booking-history";
import { TrainsPage } from "./trains";

export default function Pages() {
  return (
    <div>
      <Routes>
        {/* Authentication */}
        <Route path="auth" element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route index path="*" element={<Navigate to="login" />} />
        </Route>

        {/* Application */}
        <Route path="app" element={<AppLayout />}>
          {/* User */}
          <Route path="search" element={<SearchPage />} />
          <Route path="history" element={<BookingHistoryPage />} />

          {/* Admin */}
          <Route path="trains" element={<TrainsPage />} />

          <Route index path="*" element={<Navigate to="search" />} />
        </Route>

        <Route index path="*" element={<Navigate to="auth" />} />
      </Routes>
    </div>
  );
}
