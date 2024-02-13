import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import { useUser } from "../hooks/useUser";
import Header from "./Header";
import FullPageLoader from "./ui/FullPageLoader";

function AppLayout({ children }) {
  const { isLoading, user } = useUser();

  if (isLoading) {
    return <FullPageLoader title="Addis Food" />;
  }

  return (
    <BrowserRouter>
      <Suspense fallback={<FullPageLoader title="Addis Food" />}>
        <Header user={user} />
        {children}
      </Suspense>
    </BrowserRouter>
  );
}

export default AppLayout;
