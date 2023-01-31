import React from "react";
import { ConceptCard } from "../MarketingPages/ConceptCards";
// const { v4: uuidv4 } = require('uuid');

const FilterCard = ({ menuItem }) => {
  // console.log(menuItem, "card")
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          
        {
                menuItem.map((item) =>{
                    return (
                      <div className="col-lg-6 mb-3 mb-md-4"  key={item.id}>    
                        <ConceptCard title={item.title}
                            description={item.description}
                            tag={item.tag}
                            code={item.code}
                        />
                    </div>
                    )
                })
            }
         </div>
        </div>
     
    </>
  );
};

export default FilterCard;