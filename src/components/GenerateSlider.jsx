import {Slider} from "@material-ui/core";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


const ProductResearch = ({max,url,minpass,maxpass}) => {  
  
    // console.log(minpass);
    // console.log(maxpass);
    const navigate = useNavigate();

    const [valueFilterPriceRange, setValueFilterPriceRange] = useState([minpass,maxpass]);
    const handleChangeFilterPriceRange = (e,data) => {
        setValueFilterPriceRange(data);
      };
    
      const handleChangeCommitted = (e,data) => {
        // setMin(data[0]);
        // setMax(data[1]);
        // navigate(getFilterUrl({ min: data[0], max: data[1]}));
        // navigate(getFilterUrl({ max: data[1] }));
     
        var urlforsend = url.toString().replace("/min/"+minpass, "/min/"+data[0]);
        var urlforsend2 = urlforsend.toString().replace("/max/"+maxpass, "/max/"+data[1]);
        navigate(urlforsend2);
 
      };
    return (
        <>
        
            <Slider
                getAriaLabel={() => 'Цена'}
                value={valueFilterPriceRange}
                onChange={handleChangeFilterPriceRange} 
                onChangeCommitted={handleChangeCommitted}
                valueLabelDisplay="auto"
                min={0}
                // color="e41e3f"
                max={max} 
            />
        
        </>
    )
};

export default ProductResearch;