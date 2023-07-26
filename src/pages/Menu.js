import React from 'react'
import { MenuList } from '../components/MenuList'
import MenuItems from '../components/MenuItems'
import '../styles/Menu.css'
export function Menu(){
    return(
        <div className="menu">
            <h1 className="menuTitle">Our Menu</h1>
            <div className="menuList">
                {MenuList.map((menuItem,key)=>{
                    return <MenuItems key={key} name={menuItem.name} price={menuItem.price} image={menuItem.image}/>
                })}
            </div>
        </div>
    )
}