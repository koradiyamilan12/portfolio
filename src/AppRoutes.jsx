import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";

// Lazy route components
const Homepage = lazy(() => import("./pages/Homepage.jsx"));

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
    <div className="flex flex-col items-center gap-4">
      {/* Smooth modern spinner */}
      <div className="w-12 h-12 border-4 border-white/20 border-t-cyan-400 rounded-full animate-spin"></div>

      {/* Subtle text */}
      <p className="text-white/70 text-lg tracking-wide animate-pulse">
        Loading...
      </p>
    </div>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <Homepage />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
