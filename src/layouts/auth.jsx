
import { Route, Routes } from "react-router-dom";
import routes from './../routes';

function Auth() {
  return (
    <div className="relative min-h-screen w-full">
      <Routes>
        {routes.map(
          ({ layout, pages }) =>
            layout === "auth" &&
            pages.map(({ path, element }) => (
              <Route exact path={path} element={element} key={element} />
            ))
        )}
      </Routes>
    </div>
  )
}

Auth.propTypes = {}
Auth.displayName = "/src/layouts/Auth.jsx";
export default Auth
