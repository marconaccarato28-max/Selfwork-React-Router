import { RouterProvider } from "react-router-dom";
import router from "./routing/router.jsx";
import { UserProvider } from "./context/UserContext.jsx";

function App() {
return (
<UserProvider>
<RouterProvider router={router} />
</UserProvider>
);
}

export default App;