import React from 'react'
import { NavLink } from 'react-router-dom'


function Header()
 { return (
<>
  <NavLink to="/">Accueil</NavLink>
  <NavLink to="/secteur/avocat"> Avocats </NavLink>
  <NavLink to="/secteur/expert-comptable"> Expert-comptable </NavLink>
  <NavLink to="/secteur/association"> Association </NavLink>
  <NavLink to="/secteur/tpe-pme"> TPE-PME </NavLink>
  <NavLink to="/secteur/grands-groupes"> Grands-Groupes </NavLink>
  <NavLink to="/secteur/sante"> Santé </NavLink>
  <NavLink to="/secteur/architectes"> Architectes </NavLink>
  <NavLink to="/secteur/btp"> BTP </NavLink>
  <NavLink to="/secteur/secteur-public"> Secteur-public </NavLink>
  <NavLink to="/secteur/finance"> Finance </NavLink>
  <NavLink to="/secteur/commercial"> Commercial </NavLink>
  <NavLink to="/secteur/freelance-independant"> Freelance-Independant </NavLink>
  <NavLink to="/secteur/medico-social-associatif"> Médico-social-associatif </NavLink>



</>
)
};
export default Header; 
