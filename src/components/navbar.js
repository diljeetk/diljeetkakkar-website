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
    const navbar = {backgroundColor: '#7fdde966'};
    export  class NavbarComponent extends React.Component {
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
                <NavbarBrand href="/"><h1>Diljeet Kakkar</h1></NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href="/myPortfolio">CV and Portfolio</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/whyMe">Why Me</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        Connect with me 
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                        <NavLink href="https://www.facebook.com/diljeetkakkar31">Facebook</NavLink>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                        <NavLink href="https://www.linkedin.com/in/diljeetkakkar/">Linked IN</NavLink>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                        <NavLink href="mailto:diljeetkakkarw@gmail.com;diljeetkakkarbiz@icloud.com">Email Me </NavLink>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                        <NavLink href="https://github.com/diljeetk">GitHub</NavLink>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                </Collapse>
              </Navbar>
            </div>
          );
        }
      }

      Navbar.propTypes = {
        light: PropTypes.bool,
        dark: PropTypes.bool,
        fixed: PropTypes.string,
        color: PropTypes.string,
        role: PropTypes.string,
        expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
        tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
        // pass in custom element to use
      }