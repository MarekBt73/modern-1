import * as React from "react"


//style 
const headerStyle = {
textAlign:"center",
fontFamily: "Roboto",
fontSize: "45px",
color:'white',
}
const containerHeader ={
    
    maxWidth: '1024px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    margin: '0 auto',
    width: '100%',
    backgroundColor: '#8a30e3',
}

const navMenu ={
fontSize:'16px',
}
const nav ={
    fontSize:'16px',
}

const navUl ={
   with:'100%',
   maxWidth: '1024px',
   listStyle: 'none',
   display: 'flex',
   flexDirection:'row',
   flexWrap: 'wrap',
}

const menu ={
    
 minWidth: 'auto'

}

const logo ={
    
    fontSize:'16px',
    textAlign:'center',
}
const contact={
    fontSize:'16px',
}
const linkMenu={
    paddingLeft: '15px'
}

const Header =()=>{
return(
<>
<div style={containerHeader}>
    <div style={navMenu}>
        <div style={nav}>
            <ul style={navUl}>
                    <li classStyle={menu, logo}>LOGO</li>
                    <li style={menu, linkMenu}>Dlaczego Gatsby</li>
                    <li style={menu, linkMenu}>Portfolio</li>
                    <li style={menu, contact}>Kontakt</li>
            </ul>
        </div>
    </div>
    <h1 style={headerStyle} >Modern e-commerce dla każdego</h1>
</div>

</>
)
}

export default Header
