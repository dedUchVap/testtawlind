import 'react'
import {Container, Nav, Navbar} from "react-bootstrap";
import {IPath, IPathModal} from "../../types/common.ts";
import * as React from "react";
import {useState} from "react";
import {Link} from "react-router-dom";
import classes from "./MyNavBar.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilm} from "@fortawesome/free-solid-svg-icons";
import LinkWithAbsolute from "./LinkWithAbsolute.tsx";


interface MyNavBarProps {
    links: IPath[]
    links_modal: IPathModal[]
}

const MyNavBar: React.FC<MyNavBarProps> = ({links, links_modal}) => {
    const [selectedRef, setSelectedRef] = useState<string>('')

    function handleClick(ref: string) {
        setSelectedRef(ref)
    }

    return (
        <>
            <Navbar expand={'md'} className={classes.navbar} variant={'dark'}>
                <Container>
                    <Navbar.Brand className={classes.brand}>
                        <FontAwesomeIcon icon={faFilm}></FontAwesomeIcon>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls={'basic'}>

                    </Navbar.Toggle>

                    <Navbar.Collapse aria-controls={'basic'}>
                        <Nav>
                            {links.map(link =>
                                <Link onClick={() => handleClick(link.url)} key={link.url} to={link.url}
                                      className={'nav-link ' + (link.url == selectedRef ? classes.link_selected : classes.link)}>
                                    {link.name}
                                </Link>
                            )}
                            {links_modal.map(link =>
                                <LinkWithAbsolute function_render_page={link.render_func}
                                                  key={link.name}>
                                    {link.name}
                                </LinkWithAbsolute>)}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default MyNavBar;