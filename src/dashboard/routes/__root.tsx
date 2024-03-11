import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <>
      <a href="/">Home</a>
      <h1>Dashboard</h1>

      <nav>
        <ul>
          <li>
            <Link to="/">Workflow</Link>
          </li>
          <li>
            <Link to="/list">List</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  ),
});
