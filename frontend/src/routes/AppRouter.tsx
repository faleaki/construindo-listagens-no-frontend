import { Switch, Route } from 'react-router-dom';
import * as React from 'react';
import routes from './index';
type Props = {
    
};
const AppRouter = () => {
    return (
        <Switch>
            {
                routes.map(
                    (route, key) => (
                        <Route
                            key={key}
                            path={route.path}
                            component={route.component}
                            exact={route.exact === true}
                        />
                    )
                )
            }
        </Switch>
    );
};

export default AppRouter;