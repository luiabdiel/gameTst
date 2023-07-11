import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Home, NotFound, Forgot, Auth } from "../pages";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
