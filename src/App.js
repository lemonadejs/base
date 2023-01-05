import lemonade from 'lemonadejs';
import Home from './Home';

function App() {
    let self = this;
    self.test = "Hello world";

    return `<Home @bind="self.test" @ref="self.component"/>`;
}

lemonade.setComponents({ Home });

export default App;