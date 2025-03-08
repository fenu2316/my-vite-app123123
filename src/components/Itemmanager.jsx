import React, { useRef,useState } from "react";
export default function Itemmanager(){
    let itemref= useRef()
    let priceref= useRef()
    let categoryref= useRef()
    let Quantityref= useRef()

    let categories=["Electronics","Toys","Groceries","Clothing"]
    let CategoriesUI = categories.map((c)=><option value={c}>{c}</option> )

    const [itemsArray,setItemsArray]=useState([])
    const [ui,setui]=useState()
    let btnref=useRef()
    let olddataref=useRef()

    let addItem=()=>
    {
        if(btnref.current.value=="Add")
        {
            let item={itemname: itemref.current.value,price:priceref.current.value,category:categoryref.current.value,
                Quantity:Quantityref.current.value}
        itemsArray.push(item)
        }
    else
    {
        let index=itemsArray.findIndex((i)=>i.itemname==olddataref.current.value)
        itemsArray[index].itemname=itemref.current.value
        itemsArray[index].Price=priceref.current.value
        itemsArray[index].category=categoryref.current.value
        itemsArray[index].Quantity=Quantityref.current.value
    }
    itemref.current.value=""
    priceref.current.value=""
    Quantityref.current.value=""
    showItems()
}

    let deleteItem=(iname)=>
      {
        alert(iname)
        let index = itemsArray.findIndex((i)=> i.itemname==iname)
        itemsArray.splice(index,1)
        showItems()
      } 
      let editItem=(item)=>
      {
        btnref.current.value="update"
        itemref.current.value=item.itemname;
        priceref.current.value=item.price
        categoryref.current.value=item.category
        Quantityref.current.value=item.Quantity

        olddataref.current.value=item.itemname;
      }

    let showItems=()=>
    {
        let x=itemsArray.map((item)=>{
        return<tr><td>{item.itemname}</td>
        <td>{item.price}</td>
        <td>{item.category}</td>
        <td>{item.Quantity}</td>


        <td><input type="button" className="border-2 bg-red-400 text-white p-1" value="edit" 
        onClick={()=>editItem(item)} /></td>

        <td><input type="button" className="border-2 bg-red-400 text-white p-1" value="delete" 
        onClick={()=>deleteItem(item.itemname)} /></td>
        
        </tr>
      })
        setui(x)
    }

return(
    <div>
        <div>Enter Item Name: <input type="text" ref={itemref} className="border-2" />
       
        <div>Price: <input type="text" ref={priceref} className="border-2" />
        </div>
       
        <div>Category:
            <select ref={categoryref} className="border-2">
                {CategoriesUI}

            </select>
        </div>

        <div>Quantity: <input type="number" ref={Quantityref} className="border-2"/></div>

      <input type="text" ref={olddataref} className="hidden"></input>

        <input type="button" value="Add" onClick={()=>addItem()} className="border-2 p-2 bg-blue-300" ref={btnref}></input></div>
        <br></br>
     <table>
            <thead>
                <tr><th>ItemName</th>
                <th>price</th>
                <th>Category</th>
                <th>Quantity</th></tr>
            </thead>
            <tbody>
                {ui}
            </tbody>
        </table>
    </div>
 )

}