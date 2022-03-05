import React , { useEffect, useState } from 'react'
import {
    AppFooter,
    AppIconsWrapper,
    AppIcons,
    AppIconsTitle,
  } from "./HomemakaseElements";
import Badge from "@material-ui/core/Badge";
import {
    FaHome,
    FaStore,
    FaTape,
    FaUserAlt,
    FaPlus
  } from "react-icons/fa";
import ModalAddProduct from '../Modal/ModalAddProduct'
import { Link } from "react-router-dom";

const HomemakaseFooter = ({props}) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true)
    }

    const handleClose = () => {
      setOpen(false);
    };

    return (
        <>
        <AppFooter>
          <AppIconsWrapper>
            <Link to='/homemakase/'>  
            <AppIcons>
              <FaHome />
            </AppIcons>
            <AppIconsTitle>Recipes</AppIconsTitle>
            </Link>
          </AppIconsWrapper>
          
          <AppIconsWrapper>
            <Link to='/homemakase/shoppinglist'>
            <AppIcons>
              <Badge
                color="secondary"
                badgeContent={
                  props.data.shoppingCart ? props.data.shoppingCart.length : 0
                }
              >
                <FaTape />
              </Badge>
            </AppIcons>
            <AppIconsTitle>Shopping List</AppIconsTitle>   
            </Link>
          </AppIconsWrapper>

          <AppIconsWrapper onClick={() => handleOpen()}>
                <AppIcons >
                  <FaPlus />
                  <AppIconsTitle>Post Recipe</AppIconsTitle> 
                </AppIcons>
          </AppIconsWrapper>
          <ModalAddProduct open={open} handleClose={handleClose} />
          
          <AppIconsWrapper>
            <Link to='/homemakase/ingredients'>
            <AppIcons>
              <FaStore />
            </AppIcons>
            <AppIconsTitle>Ingredients</AppIconsTitle>
            </Link>
          </AppIconsWrapper>
          
          <AppIconsWrapper>
            <Link to='/homemakase/profile'>
            <AppIcons>
              <FaUserAlt />
            </AppIcons>
            <AppIconsTitle>Profile</AppIconsTitle>
            </Link>
          </AppIconsWrapper>
             
        </AppFooter>
        </>
    )
}

export default HomemakaseFooter;