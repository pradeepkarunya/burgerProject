import React from "react";
import Aux from "../../hoc/Aux1";
import "./Layout.scss";

//console.log('classes');
//console.log(classes);
const Layout = ({ children }) => (
  <Aux>
    {
        //<div>Sidebar, Toolbar, Backdrop</div>
    }
    <main className='Content'>
        {children}
    </main>
  </Aux>
);

export default Layout;
