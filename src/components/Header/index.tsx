import { ListChecks } from "phosphor-react";
import logo from '../../assets/logo.svg'
import { HeaderContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <ListChecks size={36}/>
      
      <img src={logo} alt="" />
    </HeaderContainer>
  )
}