import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
    import React from 'react';
    import PropTypes from 'prop-types';
    

    import Avatar from 'material-ui/Avatar';
    import FileFolder from 'material-ui/svg-icons/file/folder';
    import FontIcon from 'material-ui/FontIcon';
    import List from 'material-ui/List/List';
    import ListItem from 'material-ui/List/ListItem';    
    const navbar = {backgroundColor: '#7fdde966'};
    const style = {margin: 5};
    export  class FooterComponent extends React.Component {
        constructor(props) {
          super(props);
      
          this.toggle = this.toggle.bind(this);
          this.state = {
            isOpen: false
          };
        }
        toggle() {
          this.setState({
            isOpen: !this.state.isOpen
          });
        }
        render() {
          return (
            <div>
              <Navbar style={navbar} light expand="md">
                <NavbarBrand href="/"><h1> </h1></NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href="https://www.facebook.com/diljeetkakkar31"> <Avatar
          src="images/footer/fb.jpeg"
          size={30}
          style={style}
        />
        </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="https://github.com/diljeetk"><Avatar
          src="images/footer/github.png"
          size={30}
          style={style}
        /></NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="https://www.linkedin.com/in/diljeetkakkar/"><Avatar
          src="images/footer/linkedin.svg"
          size={30}
          style={style}
        /></NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
            </div>
          );
        }
      }

      FooterComponent.propTypes = {
        light: PropTypes.bool,
        dark: PropTypes.bool,
        fixed: PropTypes.string,
        color: PropTypes.string,
        role: PropTypes.string,
        expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
        tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
        // pass in custom element to use
      }