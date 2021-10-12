import React    from "react";
import template from "./Menu.jsx";

class Menu extends React.Component {
  constructor(){
    super();
    this.state={
      menuItem:'home',
      isMobileView:false,
      isShowMobileMenu:false
    }
    this.fnMenuClick=this.fnMenuClick.bind(this);
    this.fnResize=this.fnResize.bind(this);
    let timer,flag=true;
    window.addEventListener('resize',()=>{
        if(flag){
          this.fnResize();
          flag=false;
        }
        clearTimeout(timer);
        timer=setTimeout(() => {
           this.fnResize();
        }, 500);
        
    })
}
componentDidMount(){
  this.fnResize();
}

fnResize(){
  if(document.body.offsetWidth < 650){
       this.setState({
         isMobileView:true
       })
  }else{
    this.setState({
         isMobileView:false
       })
  }
}



fnMenuClick(eve){
  debugger;
  eve.stopPropagation();
  if(eve.target.tagName == 'UL' || eve.target.tagName == 'LI')return;
  this.setState({
    menuItem:eve.target.id,
    isShowMobileMenu:false
  })
}


fnMenuBtnClick(){
    this.setState({
      isShowMobileMenu: !this.state.isShowMobileMenu
    })
}
  render() {
    return template.call(this);
  }
}

export default Menu;
