import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./PageTransition";
import Index from "@/pages/Index";
import Markets from "@/pages/Markets";
import MarketDetail from "@/pages/MarketDetail";
import Portfolio from "@/pages/Portfolio";
import HowItWorks from "@/pages/HowItWorks";
import NotFound from "@/pages/NotFound";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Index />
            </PageTransition>
          }
        />
        <Route
          path="/markets"
          element={
            <PageTransition>
              <Markets />
            </PageTransition>
          }
        />
        <Route
          path="/market/:id"
          element={
            <PageTransition>
              <MarketDetail />
            </PageTransition>
          }
        />
        <Route
          path="/portfolio"
          element={
            <PageTransition>
              <Portfolio />
            </PageTransition>
          }
        />
        <Route
          path="/how-it-works"
          element={
            <PageTransition>
              <HowItWorks />
            </PageTransition>
          }
        />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route
          path="*"
          element={
            <PageTransition>
              <NotFound />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
