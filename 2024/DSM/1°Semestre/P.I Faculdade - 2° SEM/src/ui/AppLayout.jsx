import { Link, Outlet } from "react-router-dom";
import Logo from "./Logo";
import MenuItens from "./MenuItems";

function AppLayout() {
  return (
    <div className="relative flex h-screen flex-col bg-stone-100 font-[Poppins] text-sm text-stone-800">
      <aside className="z-20 bg-stone-900 px-3 py-4">
        <div className="mx-auto flex max-w-6xl flex-1 items-center justify-between">
          <Logo />
          <MenuItens />
          <Link
            to="/order"
            className="hidden rounded-xl bg-primary-600 px-4 py-2 text-base font-bold tracking-wide text-stone-900 sm:block"
          >
            Realizar pedido
          </Link>
        </div>
      </aside>
      <main className="z-10 flex-1">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
