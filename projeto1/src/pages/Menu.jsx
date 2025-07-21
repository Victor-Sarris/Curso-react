import { Link } from 'react-router-dom';

function Menu(){
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/contato">Contato</Link>
        </div>
    )
}

export default Menu;
