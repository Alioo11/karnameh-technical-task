import { Suspense, lazy, type FC } from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Loader from "@components/Kit/Loader";
import Layout from "@components/Layout";

import { ROUTES } from "@constants/routes";

const _404 = lazy(() => import("@components/Pages/404"));
const Dashboard = lazy(() => import("@components/Pages/Dashboard"));

const Router: FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path={ROUTES.ROOT} element={<Navigate to={ROUTES.DASHBOARD} replace />} />
            <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
            <Route path="*" element={<_404 />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Suspense>
  );
};

export default Router;