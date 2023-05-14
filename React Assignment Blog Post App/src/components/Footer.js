import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import { IconName } from "react-icons/fa";


const Footer = () => {
  return (
    <div>


      <div className='text-center p-3 mt-180' dark style={{ backgroundColor: '#000000e6', color: 'white',position:'relative',marginTop:'160px' }}>
                © 2022 Copyright
        <a className='text-white' href='https://nagarro.com/'>
          www.nagarro.com
        </a>
        
      </div>
    </div>
  );


}

export default Footer;