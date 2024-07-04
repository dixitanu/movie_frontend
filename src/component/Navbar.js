import  {React} from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { SearchContext } from './SearchContext';
import { GenesContext } from './GenesContext';




export default function NavBarEx(){


  const { setQuery } = useContext(SearchContext);
  const {setGenes} = useContext(GenesContext);
  

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleGenes = (e) =>{
      setGenes(e);
    }
  

  const theme =useTheme();
  const match = useMediaQuery(theme.breakpoints.down('sm'));
  const [showSearch, setShowSearch] = useState(false);
  const [open,setOpen]= useState(false);

  const navigate = useNavigate();




  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

 



  const DrawerList = (
    <Box sx={{ width: 200 }}  role="presentation" onClick={toggleDrawer(false)}>
      <List style={{marginLeft:'50px',justifyContent:'center',marginTop:'50px'}}>
        
          <ListItem  disablePadding>
            <ListItemButton><a href='/' style={{textDecoration:'None',color:'black'}}>
              <ListItemText style={{fontWeight:'bolder'}} primary='Home' />
              </a>
            </ListItemButton>
          </ListItem>

          <ListItem  disablePadding>
            <ListItemButton onClick={()=>handleGenes('now_playing')}>
              <ListItemText style={{fontWeight:'bolder'}} primary='Popular' />
            </ListItemButton>
          </ListItem>

          <ListItem  disablePadding>
            <ListItemButton onClick={()=>handleGenes('top_rated')}>
              <ListItemText style={{fontWeight:'bolder'}} primary='Trending' />
            </ListItemButton>
          </ListItem>

          <ListItem  disablePadding>
            <ListItemButton onClick={()=>handleGenes('upcoming')}>
              <ListItemText style={{fontWeight:'bolder'}} primary='Upcoming' />
            </ListItemButton>
          </ListItem>

       
      </List>
      </Box>
  );


 

    return(
      <div style={{display:'flex',flexDirection:'column',width:'100%',height:'auto'}} >

        <div  style={{display:'flex',flexDirection:'row', background:"black", width:'100%',height:'auto' }}>

                {match?<MenuRoundedIcon onClick={toggleDrawer(true)}  style={{color:'#FFF',marginLeft:'10px',marginTop:'6px',fontSize:"30px"}}/>:<></>}
           
           
                {!match?<a href="/" style={{textDecoration:'None',marginLeft:'4%',marginTop:'7px'}}> <span style={{fontSize:"25px",fontWeight:"bolder" ,color:"#FFF"}}>MOVIES POINT</span></a>:
                      <a href="/" style={{textDecoration:'None',marginLeft:'20%',marginTop:'8px'}}> <span style={{fontSize:"17px",fontWeight:"bolder" ,color:"#FFF"}}>MOVIES POINT</span></a>
                      }
         


            {!match?
            <div style={{display:'flex',flexDirection:'row',marginLeft:'19%'}} >
            <ul > <a href="/" style={{textDecoration:'None'}}> <span style={{fontSize:"20px",fontWeight:"bolder" ,color:"#FFF"}}>Home</span></a></ul>
              <ul > <span  onClick={()=>handleGenes('popular')} style={{fontSize:"20px",fontWeight:"bolder" ,color:"#FFF",cursor:'pointer'}}>Popular</span></ul>
              <ul > <span onClick={()=>handleGenes('top_rated')} style={{fontSize:"20px",fontWeight:"bolder" ,color:"#FFF",cursor:'pointer'}}>Trending</span></ul>
              <ul >  <span onClick={()=>handleGenes('upcoming')} style={{fontSize:"20px",fontWeight:"bolder" ,color:"#FFF",cursor:'pointer'}}>Upcoming</span></ul>
            </div>:<></>
            }

            
              {!match?
              <div style={{  marginTop:'13px',marginLeft:'13%'}} >
            <TextField
              style={{background:'#FFF',borderRadius:'5px'}}
              onChange={handleInputChange}
          label="Search"
          id="outlined-size-small"
          size="small"
        />   </div>:<SearchOutlinedIcon onClick={handleSearchClick} style={{color:'#FFF',fontSize:"30px",marginLeft:'64px',marginTop:'5px'}}/>  
      }



        </div>

        <div>
        {showSearch && (
          <TextField
          style={{background:'#FFF',borderRadius:'10px'}}
          onChange={handleInputChange}
      label="Search"
      id="outlined-size-small"
      size="small"
      fullWidth
    />
       
      )}

      

        </div>
        <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    
       

        </div>
     

   

    )
}