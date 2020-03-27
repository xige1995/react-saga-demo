import React from "react";
import './index.less'
import { menuList } from '../../const/menu'
import { NavLink } from 'react-router-dom'
import { Menu } from 'antd'
const { SubMenu } = Menu

function assembleMenu(list) {
  return list.map( (item) => {
    if(item.children){
      return(
        <SubMenu title={item.title} key={item.key}>
          {assembleMenu(item.children)}
        </SubMenu>
      )
    }
    return <Menu.Item key={item.key}><NavLink to={item.key}>{item.title}</NavLink></Menu.Item>
  })
}

function LeftMenu() {
  return(
    <div>
      <Menu
        mode="inline"
        theme='dark'
      >
        {assembleMenu(menuList)}
      </Menu>
    </div>
  )
}

export default LeftMenu;