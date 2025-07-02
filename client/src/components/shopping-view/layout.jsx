import { Outlet } from "react-router-dom";
import ShoppingHeader from "./header";
import Footer from "./footer";

function ShoppingLayout() {
  return (
    <div className="flex flex-col bg-white overflow-hidden min-h-screen">
      {/* common header */}
      <ShoppingHeader />
      <main className="flex flex-col w-full flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default ShoppingLayout;
