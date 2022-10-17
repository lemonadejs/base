import lemonade from "lemonadejs";
import Router from '@lemonadejs/router';
import Toolbar from '@lemonadejs/toolbar';

function App() {
    let self = this;

    self.beforeChange = function(route) {
        let auth = jwt();
        if (! auth) {
            return '/login';
        }
    }

    let template = `<>
            <Header @ref="self.headerRef" />
            <div class="row" style="justify-content: left;">
                <Menu logo="img/logo.png" data="{{self.menuData}}" @ref="self.menu" />
                <Router animation="{{self.animation}}" @ref="self.router" onbeforechange={{self.beforeChange}}>
                    <Route path="/login" controller="Login" />
                    <Route path="/user" url="views/ecole/user.html" controller="User" />
                    <Route path=".*" controller="Error" />
                </Router>
            </div>
            <Toolbar data="{{self.toolbar}}" @ref="self.toolbarRef" />
            <Dialog @ref="self.dialog" />
            <ActionSheet @ref="self.actionsheet" />
        </>`;

    return lemonade.element(template, self, {
        Error,
    });
}


export default App;