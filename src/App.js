import lemonade from 'lemonadejs';
import Modal from './Modal.js';

function App() {
    let self = this;

    return `<Modal title="Hello" width="400" height="400" closed="false">
        <h1>Hello World</h1>
    </Modal>`;
}

lemonade.setComponents({ Modal });

export default App;