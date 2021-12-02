import React from 'react'
import { useState } from 'react'


export const Table = () => {

    // Vanilla Array //
const Array = [{rank:1,name:'Samuel', age:25, gender:true},{rank:2,name:'Billy', age:35, gender:true},{rank:3,name:'Johnathan', age:22, gender:true},{rank:4,name:'Ann', age:19, gender:false}]

const Alpha = ()=>{
    Array.sort((a,b) => (a.name> b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    console.log(Array)
}
 const Numa = ()=>{
    console.log('Numa')
 
    }

 // ///////////////////UseState Array //
 let asc = true;
 var newArr
 const [Array2,SetArray] = useState([
     {rank:1,name:'Sam', age:25, gender:true},
     {rank:2,name:'Bill', age:35, gender:true},
     {rank:3,name:'John', age:22, gender:true},
     {rank:4,name:'Sarah', age:19, gender:false}]
 )
 const Alpha2 = ()=>{
if (asc===true){
     newArr = [...Array2].sort((a,b) => (a.name> b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    asc = false 

    console.log('cond 1')
  
    }
   
else if(asc=== false ){
     newArr = [...Array2].sort((a,b) => (b.name> a.name) ? 1 : ((a.name > b.name) ? -1 : 0))
     asc = true 
     console.log('cond 2')
    
}
SetArray(newArr)   



}


//                  






    return (



        <div className="Table">
               <h3>Table 1</h3>
             <div className="Standings">
<div className="column">
                <div> <h3>Rank</h3></div>
               <div onClick= {()=>Alpha()}> <h3 >Name</h3></div>
                <div> <h3 onClick= {()=>Numa()}>Age</h3></div>
                <div> <h3>Gender</h3></div>
</div>
            {Array.map((profile)=>(
            <div key={profile.rank} className="column">
                 <div> <h3>{profile.rank}</h3></div>
                <div> <h3>{profile.name}</h3></div>
                <div> <h3>{profile.age}</h3></div>
                <div> <h3>{profile.gender?'male': 'female'}</h3></div>
                 
                                           
            </div>
            
            
            
            
            ))}

             </div>
             <h3>Table 2</h3>
             <div className="Standings">
<div className="column">
                <div> <h3>Rank</h3></div>
               <div onClick= {()=>Alpha2()}> <h3 >Name</h3></div>
                <div> <h3 onClick= {()=>Numa()}>Age</h3></div>
                <div> <h3>Gender</h3></div>
</div>
            {Array2.map((profile)=>(
            <div key={profile.rank} className="column">
                 <div> <h3>{profile.rank}</h3></div>
                <div> <h3>{profile.name}</h3></div>
                <div> <h3>{profile.age}</h3></div>
                <div> <h3>{profile.gender?'male': 'female'}</h3></div>
                 
                                           
            </div>
            
            
            
            
            ))}

             </div>
        </div>
    )
}


export default Table