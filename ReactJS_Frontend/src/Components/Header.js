import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (  
        <nav className="navbar navbar-expand-lg navbar-dark  
        justify-content-between" style={{'backgroundColor': "#080D11"}}>
            <div className="container">
                    <h1> 
                        <Link to={'/'} style={{'color': 'white'}} >
                            <b> Fiscalias MP  </b>
                        </Link>  
                    </h1>
            </div>

            <Link to={"/fiscalias/nuevo"}
               className="btn btn-warning nuevo-post d-block d-md-inline-block"
            >Agregar Fiscalia &#43;</Link>

        </nav>
    );
}
 
export default Header ;