import { memo, VFC } from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { homeRoutes } from "./HomeRoutes";


export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/home" render={({match:{url}})=>{
        <Switch>
          {homeRoutes.map((route)=>
          <Route key = {route.path} exact ={route.exact} >
            {route.children}
          </Route>
          }
        </Switch>
      }}>
    </Switch>
  );
});
