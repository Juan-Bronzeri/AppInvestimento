import React, { useState } from 'react';
import LogoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

import Toggle from '../Toggle';

import {
    Container,
    Header,
    LogImg,
    MenuContainer,
    MenuItemLink,
    Title,
    MenuItemButton,
    ToggleMenu,
    ThemeToggleFooter
} from './styles';
import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp,
    MdClose,
    MdMenu
} from 'react-icons/md';

import { useAuth } from '../../hooks/auth'
import { useTheme } from '../../hooks/theme'

const Aside: React.FC = () => {
    const { toggleTheme, theme } = useTheme();
    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);

    const { signOut } = useAuth();
    const [toggleMenuIsOpened, setToggleMenuIsOpened] = useState(false);
    const handleToggleMenu = () => {
        setToggleMenuIsOpened(!toggleMenuIsOpened);
    }
    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme);
        toggleTheme();
    }
    return (
        <Container menuIsOpen={toggleMenuIsOpened}>
            <Header>
                <ToggleMenu onClick={handleToggleMenu}>
                    {
                        toggleMenuIsOpened ? <MdClose /> : <MdMenu />
                    }
                </ToggleMenu>
                <LogImg src={LogoImg} alt="Logo Minha Carteira" />
                <Title>Minha Carteira</Title>
            </Header>
            <MenuContainer>
                <Link to="/dashboard">
                    <MenuItemLink>
                        <MdDashboard />
                        DashBoard
                    </MenuItemLink>
                </Link>
                <Link to="/list/entry-balance">
                    <MenuItemLink>
                        <MdArrowUpward />
                        Entradas
                    </MenuItemLink>
                </Link>
                <Link to="/list/exit-balance">
                    <MenuItemLink>
                        <MdArrowDownward />
                        Saídas
                    </MenuItemLink>
                </Link>
                <Link to="/">
                    <MenuItemButton onClick={signOut}>
                        <MdExitToApp />
                        Sair
                    </MenuItemButton>
                </Link>
            </MenuContainer>
            <ThemeToggleFooter menuIsOpen={toggleMenuIsOpened}>
                <Toggle
                    labelLeft='Light'
                    labelRight='Dark'
                    checked={darkTheme}
                    onChange={handleChangeTheme}
                />
            </ThemeToggleFooter>
        </Container>
    );
}
export default Aside;