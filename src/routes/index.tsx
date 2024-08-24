import { Suspense, lazy, type FC } from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Loader from "@components/Kit/Loader";
import Layout from "@components/Layout";
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6";
import { ROUTES } from "@constants/routes";
import { QueryParamProvider } from "use-query-params";

const _404 = lazy(() => import("@components/Pages/404"));
const Dashboard = lazy(() => import("@components/Pages/Dashboard"));

const Router: FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <QueryParamProvider
          adapter={ReactRouter6Adapter}
        >
          <Layout>
            <Routes>
              <Route path={ROUTES.ROOT} element={<Navigate to={ROUTES.DASHBOARD} replace />} />
              <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
              <Route path="*" element={<_404 />} />
            </Routes>
          </Layout>
        </QueryParamProvider>
      </BrowserRouter>
    </Suspense>
  );
};

export default Router;
