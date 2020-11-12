<<<<<<< HEAD
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
=======
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
>>>>>>> 1ba7a81385445366745f7783448c8a8aafcdc634

export default class Navbar extends Component {
    render() {
        return (
<<<<<<< HEAD
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
=======
            <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
>>>>>>> 1ba7a81385445366745f7783448c8a8aafcdc634
                <Link to="/">
                    <img src={logo} alt="Loja de Smartphones" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
<<<<<<< HEAD
                            Produtos
=======
                            products
>>>>>>> 1ba7a81385445366745f7783448c8a8aafcdc634
                        </Link>
                    </li>
                </ul>
                <Link to="/compras" className="ml-auto">
<<<<<<< HEAD
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus" />
                        </span>
                        Minhas Compras
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
    background: var(--azul);
    .nav-link {
        color: var(--branco)!important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`;
=======
                    <button>
                        <i className="fas fa-cart-plus" />
                    </button>
                </Link>
            </nav>
        );
    }
}
>>>>>>> 1ba7a81385445366745f7783448c8a8aafcdc634
