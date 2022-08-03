import React, { useState } from 'react';
import { AppBar, styled, Toolbar, Typography, Box, InputBase, Badge, Avatar, MenuItem, Menu} from '@mui/material';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { Mail, Notifications} from "@mui/icons-material";


const Styledtoolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
})
const Search = styled("div")(({theme})=>({
    backgroundColor: "white",
    padding: "0px 10px",
    color: "text.primary",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}))
const Icon = styled(Box)(({theme})=>({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {display: "flex"}
}))
const UserBox = styled(Box)(({theme})=>({
    display: "flex",
    justifyContent: "space-between",
    alignItems:"center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {display: "none"}
}))
const Navbar = ()=>{
    const [open, setOpen] = useState(false)
    return (
        <AppBar  position="sticky">
            <Styledtoolbar>
            <Typography variant="h5"  sx={{display:{xs: "none", sm: "block"}}}>
                Rgram
            </Typography>
            <SportsEsportsIcon sx={{display:{xs: "block", sm: "none"}}}/>
            <Search>
                <InputBase placeholder="search..."/>
                </Search>
            <Icon>
                <Badge badgeContent={4} color="error">
                    <Mail/>
                </Badge>
                <Badge badgeContent={4} color="error">
                    <Notifications/>
                </Badge>
                <Avatar sx={{width: 30, height: 30}} alt="Roshan kc" src="https://avatars.githubusercontent.com/u/83297534?v=4" onClick = {(e)=>setOpen(true)
                }/>
     
            </Icon>
            <UserBox>
                    <Avatar sx={{width: 30, height: 30}} alt="Roshan kc" src="https://avatars.githubusercontent.com/u/83297534?v=4" 
                    onClick = {(e)=>setOpen(true)}
                    />
                    <Typography variant="p">
                        Roshan kc
                    </Typography>
                </UserBox>
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    open={open}
                    onClose={(e)=>setOpen(false)}
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                >
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>My account</MenuItem>
                    <MenuItem>Logout</MenuItem>
                </Menu>
            </Styledtoolbar>
            
        </AppBar>

    )
}
export default Navbar;