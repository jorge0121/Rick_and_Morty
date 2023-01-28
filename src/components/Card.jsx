import styled from "styled-components";
import { Link } from "react-router-dom";

const Img = styled.img`
   border-radius: 20%;
   box-shadow: 2px -6px 10px #fff;
   width: 170px;
   margin: 0 auto;
 
  
`;

const Title = styled.h1`
   color: beige;
   font-weight: bold;
   margin-left: 30px;
`;

const Texth2 = styled.h2`
   color: #efe;
   font-size: 25px;
   font-weight: 400;
  
   display:flex;
   flex-direction:row;
   flex-wrap: wrap;
   justify-content: space-around;
   width:180px;
   border-radius:25px;
   margin: 0 auto;

`;
const Button1 = styled.button` 
background-color: rgb(200 0 0);
font-weight:bold;
margin-left: 6px
`; // aqui estuvo Jorge Diaz jeje
export default function Card(props) {
   return (
      
      <div style={{alignContent:"center", border:"5px solid white", width:"250px", margin:" 0 auto", paddingBottom:"15px", backgroundColor:"#00304E", borderRadius:"15px"}}>
         <Button1 onClick={() => props.onClose(props.id)}>X</Button1>
         <Link to = {`/detail/${props.id}`}>
         <Title>{props.name}</Title>
         </Link>
         
         <Texth2>
         <Img  src={props.image} alt="img not found" />
           <div>{props.gender}</div> 
           
           <div> {props.species} </div>
            
            </Texth2>
      </div>
      
   );
}
