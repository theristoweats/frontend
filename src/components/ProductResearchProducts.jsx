// import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
// import { useState } from "react";
import styled from "styled-components";   
import { useLocation } from "react-router-dom";
import { Link, useParams, useNavigate } from 'react-router-dom';
// https://github.com/basir/amazona/blob/master/frontend/src/screens/ProductListScreen.js
import { createRef, useState } from "react";
import ProductsFetch from "../components/ProductsFetch";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from '../actions/productActions';
// import GenerateSlider from "../components/GenerateSlider";
// import {Slider} from "@material-ui/core";
import iconSelMenu from "../icons/down.png";
import Loading from "../components/Loading";
import ErrorProducts from "../components/ErrorProducts";



import "./style.css";
import ReactPaginate from "react-paginate";


const Container = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom:100px;
`;

const Wrapper = styled.div`
    width:93%;
`; 

const ProductsLoadAndFilter = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    padding-top: 130px;
`; 

const FullScreenLoad = styled.div`
    display: flex;
    width: 100%;
`;

const LeftFilter = styled.div`
    width: 25%;
`;

const FilterMain = styled.div`
    width: 100%; 
    background-color: #242526;
    border-radius: 10px;
    padding-bottom: 5px;
    margin-bottom: 15px;
`;

const FilterInside = styled.div`
    padding:20px;
`;

const FilterName = styled.label`
    font-size: 18px;
    color: white;
    font-family: GilroyLight;
    font-weight: bold;  
`;

const PriceRange = styled.div`
    display: flex;
    margin-bottom: 10px;
    width:100%
`;

const PriceRangeInsideMin = styled.div`
    margin-top: 20px;
    display:flex;
    flex:1
`;

const PriceRangeInsideMax = styled.div`
    margin-top: 20px;
`;

const PriceRangeInsideMinAc = styled.div`
    display:flex;
    flex:1;
    font-weight:bold;
`;

const PriceRangeInsideMaxAc = styled.div`
    font-weight:bold;
`;
const MinPrice = styled.span`
    color: #c4c4c4;
    font-size: 14px;
    font-family: GilroyLight; 
     
`;

const MaxPrice = styled.span`
    color: #c4c4c4;
    font-size: 14px;
    font-family: GilroyLight; 
`;

const MinPriceAc = styled.input`
    color: white;
    font-size: 15px;
    font-family: GilroyLight; 
    font-weight: bold;
    outline:none;
    width:50px;
    outline:none;
    border:none;
    border-radius:10px;
    height:35px;
    background-color:transparent;
    border:1px solid #404040;
    padding-left:10px;
    padding-right:10px;
`;

const MaxPriceAc = styled.input`
    color: white;
    font-size: 15px;
    font-family: GilroyLight; 
    font-weight: bold;
    outline:none;
    width:50px;
    outline:none;
    border:none;
    border-radius:10px;
    height:35px;
    background-color:transparent;
    border:1px solid #404040;
    padding-left:10px;
    padding-right:10px;
`;

const RightProductsLoad = styled.div` 
    width: 80%;
    margin-left: 25px; 
`;

const ProductsLoadInside = styled.div`
    width: 100%;
    border-radius: 10px;
`;

const ProductsLoadedInfo = styled.div`
    display: flex;
    width: 100%;
    align-items: center; 
`;

const HeaderInfoProduct = styled.div`
    display: flex;
    flex: 1;
`;

const HeaderInfoTextProducts = styled.h1` 
    color: white;
    font-size: 17px;
    font-family: GilroyLight; 
`;

const ChooseProductsType = styled.div`
    display:flex;
    align-items:center;
`;

const ChooseSpan = styled.span` 
    color: #d1d1d1;
    font-size: 14px;
    font-family: GilroyLight; 
    margin-right:10px
`;

const FiltersChoosed = styled.div`
    display: flex;
    margin-top:20px;
`;

const SingleFilterChoosed = styled.div` 
    display: flex;
    align-items: center;
    background: #242526;  
    border-radius: 10px;
    height: 40px;
    margin-right: 10px;
`;

const SingleFilterChoosedInside = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 15px; 
`;

const LabelFilterChoosed = styled.label`
    margin-right: 5px;    
    color: #b2b2b2;
    font-family: GilroyLight; 
    font-size: 14px;
`;


const SpanFilterChoosed = styled.span`
    margin-right: 5px;
    color: white;
    font-family: GilroyLight; 
    font-size: 14px;
`;

const DeleteFilter = styled.button`
    margin-left: 5px;
    outline:none;
    border:none;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: #353637;
    height: 40px;
    cursor: pointer; 
`;

const DeleteFilterIcon = styled.label`
    font-weight: bold;
    color:white;
    cursor: pointer; 
`;

const ProductsInfoInfo = styled.div`
    display:flex;
    flex-direction:column
`;
 

const SliderPriceRange = styled.div`
    margin-top:20px;
`;

// const Select = styled.select``;

const Option = styled.option``;

const ButtonFilterPrices = styled.button`
    outline:none;
    border:none;
    border-radius:10px;
    height:40px;
    margin-top:20px;
    cursor:pointer;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center;

    font-family: GilroyLight; 
    background:transparent;
    border: 1px solid #404040;
    color: white;
`;
 

const SarchProductBar = styled.div`
    margin-top:10px;
`;

const SarchProductBarInside = styled.div`
    display:flex;
`;

const SarchProductBarInput = styled.input`
    color: white;
    font-size: 15px;
    font-family: GilroyLight; 
    outline:none;
    width:100%;
    outline:none;
    border:none;
    border-radius:10px;
    height:35px;
    background-color:transparent;
    border:1px solid #404040;
    padding-left:10px;
    padding-right:10px;
`;

const ChooseNumberResults = styled.div`
    display:flex;
    margin-top:15px;
`;

const SingleNumResultsShown = styled.button`
    outline:none;
    border:none;
    color:white;
    cursor:pointer;
    background:transparent;
    border-radius:10px;
    height:25px;
    width:40px;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:14px;
    border:1px solid #404040;
    margin-right:10px;
`;

const IconSelectMenu = styled.img`
    width:16px;
    height:16px;
    opacity: .7;
    cursor:pointer;
    outline:none;
`;

const SelectedMenuPro = styled.div`
    position:relative;
`;

const IconsFlexPr = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-color: #353637;
    cursor:pointer;
    position:absolute;
    right:0;
    top:0;
    height: 35px;
    border-bottom-right-radius: 10px;
    width: 35px;
    border-top-right-radius: 10px;
`;

const ProductResearch = () => { 
  const navigate = useNavigate(); 
//   const setClickedSort = createRef<HTMLSelectElement>();


  const [searchProduct, setSearchProduct] = useState('');
   
  const [minPricePro, setMinPrice] = useState(0);
  const [maxPricePro, setMaxPrice] = useState(0);


  const handleClickPrices = () => {
    if( (minPricePro > 0 && maxPricePro > 0) && (minPricePro !== 0 && maxPricePro !== 0)){
        navigate(getFilterUrl({ min: minPricePro, max:maxPricePro, page: 1 }));
    }

  };

  //get product categories 
  const location = useLocation();
//   const category = location.pathname.split("/")[2];
// 
  const [searchValue, setSearchValue] = useState('');  
  const dispatch = useDispatch();
  
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages, maxPrice, totalProducts } = productList;
  
  console.log(products); 
//   const [pageNumber, setPageNumber] = useState(1);
//   const [name, setName] = useState('all');
  const [sort, setSort] = useState("cheapest");
//   const [min, setMin] = useState(0);
//   const [max, setMax] = useState(0); 

//   const {
//     name = 'all',
//     category = cat ? cat : 'all',
//     min = 0,
//     max = 0,
//     order = 'cheapest',
//     pageNumber = 1,
//   } = useParams();
//   const [MaxMax, setMaxMax] = useState(0);
  const [PageNum, setPageNumber] = useState(1);
  const {
    name = 'all',
    category = 'all',
    min = 0,
    max = 0,
    order = 'cheapest',
    pageNumber = 1, 
    shown = 12,
  } = useParams();

  
 

//   const [clearInput, setClearInput] = useState(name !=='all' ? name : '' );

  const getFilterUrl = (filter) => {
    const filterPage = filter.page || pageNumber;
    const filterCategory = filter.category || category;
    const filterName = filter.name || name;
    const sortOrder = filter.order || order;
    
    const filterShown = filter.shown || shown;
    const filterMin = filter.min ? filter.min : filter.min === 0 ? 0 : min;
    const filterMax = filter.max ? filter.max : filter.max === 0 ? 0 : max;
    return `/products/category/${filterCategory}/name/${filterName}/min/${filterMin}/max/${filterMax}/shown/${filterShown}/order/${sortOrder}/pageNumber/${filterPage}`;
  };
  
  useEffect(() => {
    dispatch( 
        listProducts({
          pageNumber,
          name: name !== 'all' ? name : '',
          category: category !== 'all' ? category : '',
          min,
          max,
          order,
          shown,
        })
    );  
    // setSearchValue(name !=='all' ? name : '');
  }, [category, dispatch, max, min, name, order, shown, pageNumber]);

   
   

  const deleteFilterPriceRange = (e) => { 
    setMaxPrice(0);
    setMinPrice(0)
    navigate(getFilterUrl({ min: 0, max:0 }));
  };

  const deleteFilterSearch = (e) => {
    navigate(getFilterUrl({ name:'all' }));
    setSearchProduct(''); 
  };
  

  ////////////////////////////////// pagination handle

  const handlePageClick = async (data) => {
    // setPageNumber(data.selected + 1); 
    navigate(getFilterUrl({ page: data.selected + 1 }));
    // console.log(data.selected);
    // scroll to the top
    //window.scrollTo(0, 0)
  };

  const handleSelect = (data) => {
    navigate(getFilterUrl({ order: data.target.value }));
  };

  const handleClickSearch = () => {
    if(searchProduct !== '' && searchProduct !== undefined){
        navigate(getFilterUrl({ name: searchProduct, page:1 }));

    }
  };

  const handleClick = (selectedVal) => {
    navigate(getFilterUrl({ shown: selectedVal, page:1 }));
    // console.log(selectedVal);
  };
  
  //////////////////////////////////////////

   
   
  return (
      <>
    { loading ? 
        (<Loading />) 
    : error ? 
        ( <ErrorProducts />) 
    : (<>
    <Container>
        <Wrapper> 
            <ProductsLoadAndFilter>
                <FullScreenLoad>
                    <LeftFilter>
                        <FilterMain>
                            <FilterInside>
                                <FilterName>Прикажани производи</FilterName> 
 
                                <PriceRange>
                                    <PriceRangeInsideMin>
                                        <MinPrice>Избери број на резултати</MinPrice>
                                    </PriceRangeInsideMin> 
                                </PriceRange>  

                                <ChooseNumberResults> 
                                    <SingleNumResultsShown className={Number(shown) === 12 ? "targetShownProducts" : "" } onClick={() => handleClick(12)}>12</SingleNumResultsShown>
                                    <SingleNumResultsShown className={Number(shown) === 24 ? "targetShownProducts" : "" } onClick={() => handleClick(24)}>24</SingleNumResultsShown>
                                    <SingleNumResultsShown className={Number(shown) === 36 ? "targetShownProducts" : "" } onClick={() => handleClick(36)}>36</SingleNumResultsShown>
                                </ChooseNumberResults>
                                 

                            </FilterInside>
                        </FilterMain>
                        <FilterMain>
                            <FilterInside>
                                <FilterName>Пребарај продукт</FilterName> 
 
                                <PriceRange>
                                    <PriceRangeInsideMin>
                                        <MinPrice>Име на продукт</MinPrice>
                                    </PriceRangeInsideMin> 
                                </PriceRange>
 
                                <SarchProductBar>
                                    <SarchProductBarInside>
                                         
                                        <SarchProductBarInput type="text" placeholder="Свежи печурки..."  onChange={(e)=>setSearchProduct(e.target.value)}  defaultValue={name !=='all' ? name : '' }/> 
                                    </SarchProductBarInside>
                                </SarchProductBar>
                                <ButtonFilterPrices onClick={handleClickSearch}>
                                    Пребарај
                                </ButtonFilterPrices>
                                 

                            </FilterInside>
                        </FilterMain>
                        <FilterMain> 
 
                            <FilterInside>
                                <FilterName>Цена</FilterName>
                                <PriceRange>
                                    <PriceRangeInsideMin>
                                        <MinPrice>Најмала</MinPrice>
                                    </PriceRangeInsideMin>
                                    <PriceRangeInsideMax>
                                        <MaxPrice>Најголема</MaxPrice>
                                    </PriceRangeInsideMax>
                                </PriceRange>

                                <PriceRange>
                                    <PriceRangeInsideMinAc>
                                        <MinPriceAc type="text" placeholder="0 ден." onChange={(e)=>setMinPrice(e.target.value)} defaultValue={ min > 0 ? min : '' }/>
                                    </PriceRangeInsideMinAc>
                                    <PriceRangeInsideMaxAc>                                        
                                        <MaxPriceAc type="text" placeholder="0 ден." onChange={(e)=>setMaxPrice(e.target.value)} defaultValue={ max > 0 ? max : '' }/>
                                    </PriceRangeInsideMaxAc>
                                </PriceRange>

                                <ButtonFilterPrices onClick={handleClickPrices}>
                                    Филтрирај
                                </ButtonFilterPrices>
                                 

                            </FilterInside>

                            
                        </FilterMain>

                    </LeftFilter>

                    <RightProductsLoad>
                        <ProductsLoadInside>
                            <ProductsInfoInfo>
                                <ProductsLoadedInfo>
                                    <HeaderInfoProduct>
                                        <HeaderInfoTextProducts>Пронајдени {totalProducts} производи</HeaderInfoTextProducts>
                                    </HeaderInfoProduct>
                                    <ChooseProductsType>
                                        <ChooseSpan>Подреди по:</ChooseSpan>                                              

                                        <SelectedMenuPro>

                                            <select
                                                value={order}
                                                onChange={(e) => {
                                                navigate(getFilterUrl({ order: e.target.value }));
                                                }}
                                                className="select-pro-bro"
                                            >
                                                <option value="cheapest">Најефтини</option>
                                                <option value="expensives">Најскапи</option>
                                            </select>
                                            <IconsFlexPr>
                                                <IconSelectMenu src={iconSelMenu}></IconSelectMenu>
                                            </IconsFlexPr>


                                        </SelectedMenuPro>

                                    </ChooseProductsType>
                                </ProductsLoadedInfo>
                                {((min > 0 && max > 0) || (name !== 'all') ) ? 
                                <FiltersChoosed>
                                    <SingleFilterChoosed>
                                        {min > 0 && max > 0  ? 
                                            <SingleFilterChoosedInside>
                                                <LabelFilterChoosed>Цена:</LabelFilterChoosed>
                                                <SpanFilterChoosed>{min} ден. - {max} ден.</SpanFilterChoosed>
                                                <DeleteFilter onClick={deleteFilterPriceRange}>
                                                    <DeleteFilterIcon>X</DeleteFilterIcon>
                                                </DeleteFilter>
                                            </SingleFilterChoosedInside>
                                        : <></>
                                        } 
                                    </SingleFilterChoosed>

                
                                    <SingleFilterChoosed>
                                        {name !== 'all'  ? 
                                            <SingleFilterChoosedInside>
                                                <LabelFilterChoosed>Клучни зборови:</LabelFilterChoosed>
                                                <SpanFilterChoosed>{name}</SpanFilterChoosed>
                                                <DeleteFilter onClick={deleteFilterSearch}>
                                                    <DeleteFilterIcon>X</DeleteFilterIcon>
                                                </DeleteFilter>
                                            </SingleFilterChoosedInside>
                                        : <></>
                                        } 
                                    </SingleFilterChoosed>
                                </FiltersChoosed>
                                :<></>
                                }
                            </ProductsInfoInfo>

                        </ProductsLoadInside>

                        
                                <ProductsFetch  products={products}/>
                                <ReactPaginate
                                    previousLabel={"<"}
                                    nextLabel={">"}
                                    breakLabel={"..."}
                                    pageCount={pages} 
                                    forcePage={pageNumber-1}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={3}
                                    onPageChange={handlePageClick}
                                    containerClassName={"pagination justify-content-center"}
                                    pageClassName={"page-item"}
                                    pageLinkClassName={"page-link"}
                                    previousClassName={"page-item prev-item-d"}
                                    previousLinkClassName={"page-link"}
                                    nextClassName={"page-item next-item-d"}
                                    nextLinkClassName={"page-link"}
                                    breakClassName={"page-item"}
                                    breakLinkClassName={"page-link"}
                                    activeClassName={"active"}
                                /> 
                        
                    </RightProductsLoad>

                </FullScreenLoad>
            </ProductsLoadAndFilter>
        </Wrapper>
    </Container>
    </>
    )} 

    </>
);
};

export default ProductResearch;
