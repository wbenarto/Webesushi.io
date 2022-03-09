import Reac, {useState} from "react";
import {ModalBackground1, ModalContainer, ModalTitle,
    ModalImage,
    ModalDesc,
    ModalCategory,
    ModalPoints,
    ModalBox,
    Modalh1,
    ModalIngredients,
    ModalIngredient,
    ModalAddProductHeader,
    ModalAddImageSection,
    ModalImageBox,
    ModalRecipeDescription,
    ModalRecipeIngredients,
    ModalDropdownItem,
    ModalDropdown
} from './ModalElements'
import {  
    CardIcons,
    CardButton,} from '../Homemakase/Recipe/RecipeElements'
import ModalMUI from "@material-ui/core/Modal";

import { Link } from "react-router-dom";
import { FiFrown, FiSmile } from "react-icons/fi";
import {
    FaRegHeart,
    FaHeart,
    FaRegPlusSquare,
    FaRegCaretSquareDown
  } from "react-icons/fa";
  import {CSSTransition} from 'react-transition-group'


const NavItem = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <li onClick={() => setOpen(!open)}>
      {open ?  props.children : <FaRegCaretSquareDown /> }

      
    </li>
  )
}

const DropdownMenu = ({handleIngredients}) => {
  const [activeIngredient, setActiveIngredient] = useState('Vegetables'); //Essentials, Cooked, Raw, Vegetarian 
  const [activeMenu, setActiveMenu] = useState('main')

  const DropdownItem = (props) => {
    return (
      <ModalDropdownItem onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>{props.children}</ModalDropdownItem>

      // <ModalDropdownItem onClick={()=>handleIngredients(`${props.children}`)}>{props.children}</ModalDropdownItem>
    )

  }

  return (
    <ModalDropdown>
      <CSSTransition 
      in={activeMenu === 'main'}
      timeout={500}
      classNames="menu-primary"
      unmountOnExit>
        <div>
        <DropdownItem goToMenu='vegetarian'>Vegetarian</DropdownItem>
        <DropdownItem goToMenu='raw'>Raw</DropdownItem>
        <DropdownItem goToMenu='cooked'>Cooked</DropdownItem>
        <DropdownItem goToMenu='essentials'>Essentials</DropdownItem>

        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'vegetarian'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
      >
        <div>
          <DropdownItem goToMenu="main">
            <h2>Vegetarian</h2>
          </DropdownItem>
          <DropdownItem>Avocado</DropdownItem>
          <DropdownItem>Cucumber</DropdownItem>
          <DropdownItem>Daikon</DropdownItem>
          <DropdownItem>Shiso Leaf</DropdownItem>
          <DropdownItem>Inari</DropdownItem>
        </div>
      </CSSTransition>
      
    </ModalDropdown>
  )

}


const ModalAddProduct = ({ open, handleClose}) => {
  const [description, setDescription] = useState('')
  const [ingredients, setIngredients] = useState([])

  const handleSubmit = (event) => {
   
    event.preventDefault();
    alert('Description : ' + description);
    alert('ingredients : ' + ingredients)
  }

  const handleIngredients = (newIngredient) => {
    
    let parsedNewIngredient = newIngredient.toLowerCase();
    console.log('handle ingredients clicked : ' + parsedNewIngredient)
    setIngredients([...ingredients, parsedNewIngredient]);
    console.log(ingredients);
  }

  return (
    <ModalMUI open={open} >
  
      <ModalContainer>
          <form>
          <ModalAddProductHeader>
            <h3 onClick={handleClose}>Back</h3>
            <h1>Add New Sushi Recipe</h1>
            <h3 onClick={handleSubmit}>Post</h3>
          </ModalAddProductHeader>
          <ModalAddImageSection>
            <ModalImageBox>

              <h1>Product Image Upload</h1>  
            </ModalImageBox>
            <ModalRecipeDescription>
              <input placeholder='Recipe Name...'/>
              <textarea type="text" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)}  
              placeholder='Add Description...'/>
              
            </ModalRecipeDescription>
            
    
          </ModalAddImageSection>
          <ModalRecipeIngredients>

              <label for="ingredients"><h2>Select Ingredients:</h2></label>
              <NavItem icon={'><'}>
       
                <DropdownMenu handleIngredients={handleIngredients}></DropdownMenu>
              </NavItem>  
                {/* <div id="ingredients" name="ingredients">
                  <ul>
                    <li onClick={()=>handleIngredients('cucumber')} value="Cucumber">Cucumber</li>
                    <li onClick={()=>handleIngredients('avocado')} value="Avocado">Avocado</li>
                    <li onClick={()=>handleIngredients('fiat')} value="fiat">Fiat</li>
                    <li onClick={()=>handleIngredients('audi')} value="audi">Audi</li>
                  </ul>
                  
                </div> */}
        
                {ingredients?.map((e, i)=> (
                  <p>{e}</p>
                ))}
          </ModalRecipeIngredients>
          
          </form>
        
          
          <h1>Add Ingredients</h1>
          <h1>Add Category</h1>
          <h1>Add Sustainabilty Score</h1>
          <h1>Add Difficulty Score</h1>
          <h1>Add Steps +</h1>
          <h1>When add steps clicked, open new boxes</h1>
          <h2>Add Step Number</h2>
          <h2>Add Step Image</h2>
          <h2>Add Step Description</h2>
          <h1>Submit Button</h1>
        
      </ModalContainer>
    
    </ModalMUI>
    
  );
}

export default ModalAddProduct;