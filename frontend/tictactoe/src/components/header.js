import React, {Component} from 'react';
import { PageHeader } from 'antd';
import logo from "../assets/images/logo.png";

class Header extends Component {
  render() {
    return (
      <div>
        <img src={logo} alt="Logo" style={{marginTop:'50px', width:'300px'}}/>
        <PageHeader
          style={{
            backgroundColor: '#002050',
          }}
          subTitle="project by Bruno Matos and Layla Andrade"
        />
      </div>
    )
  }
}

export default Header;

