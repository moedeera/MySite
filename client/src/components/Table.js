import React from 'react'


export const Table = () => {

const Array = [{rank:1,name:'Sam', age:25, gender:true},{rank:2,name:'Bill', age:35, gender:true},{rank:3,name:'John', age:22, gender:true},{rank:4,name:'Sarah', age:19, gender:false}]

function Alpha  (){
console.log('hello')

}
function Numa  (){

    console.log('Numa')
    
    }




    return (



        <div className="Table">
               
             <div className="Standings">
<div className="column">
                <div> <h3>Rank</h3></div>
               <div> <h3 onClick= {Alpha()}>Name</h3></div>
                <div> <h3 onClick= {Numa()}>Age</h3></div>
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
        </div>
    )
}


export default Table