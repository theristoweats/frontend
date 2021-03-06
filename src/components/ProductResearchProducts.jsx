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
import { mobile, desktop1, desktop, desktop2, desktop3, desktop4, mobile1, mobile2, mobile3, mobile4, mobile10  } from "../responsive";
import FilterIcon from "../icons/filter.png";



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
    ${mobile({ paddingTop:"110px"})} 

`; 

const FullScreenLoad = styled.div`
    display: flex;
    width: 100%;
    ${mobile({ flexDirection: "column" })}

`;

const LeftFilter = styled.div`
    width: 100%%;
    ${mobile({ width: "100%", display:"none"})}
`;

const FilterMain = styled.div`
    width: 100%; 
    background-color: #242526;
    border-radius: 10px;
    padding-bottom: 5px; 
    margin-bottom: 15px;
    ${mobile({ marginBottom: "0", borderRadius:"0px", backgroundColor:"transparent", borderBottom:"1px solid #050505"})}
`;

const FilterInside = styled.div`
    padding:20px;  
    ${mobile({ paddingBottom: "10px"})}
`;

const FilterName = styled.label`
    font-size: 18px;
    color: white;
    font-family: GilroyLight;
    font-weight: bold;  
    ${mobile({ fontSize:"15px"})}

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
    ${mobile({ fontSize:"13px"})} 

     
`;

const MaxPrice = styled.span`
    color: #c4c4c4;
    font-size: 14px;
    font-family: GilroyLight; 
    ${mobile({ fontSize:"13px"})} 
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
    ${mobile({ fontSize:"12px"})} 
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
    ${mobile({ fontSize:"12px"})} 
`;

const RightProductsLoad = styled.div` 
    width: 80%;
    margin-left: 25px; 
    ${mobile({ width: "100%", marginLeft:"0px" })}
`;

const ProductsLoadInside = styled.div`
    width: 100%;
    border-radius: 10px;
`;

const ProductsLoadedInfo = styled.div`
    display: flex;
    width: 100%;
    align-items: center; 
    ${mobile({ flexDirection: "column", alignItems:"flex-start" })}
`;

const HeaderInfoProduct = styled.div`
    display: flex;
    flex: 1;
`;

const HeaderInfoTextProducts = styled.h1` 
    color: white;
    font-size: 17px;
    font-family: GilroyLight; 
    ${mobile({ marginTop:"10px", marginBottom:"25px", fontSize:"20px" })}
`;

const ChooseProductsType = styled.div`
    display:flex;
    align-items:center;
    ${mobile({ width:"100%" })}

`;

const ChooseSpan = styled.span` 
    color: #d1d1d1;
    font-size: 14px;
    font-family: GilroyLight; 
    margin-right:10px; 
    ${mobile({ display:"flex",flex:"1", fontSize:"13px", marginBottom:"5px" })} 
`;

const FiltersChoosed = styled.div`
    display: flex;
    margin-top:20px;
    ${mobile1({ display:"flex", flexDirection:"row" })} 
    ${mobile10({ display:"flex", flexDirection:"column" })} 

`;

const SingleFilterChoosed = styled.div` 
    display: flex;
    align-items: center;
    background: #242526;  
    border-radius: 10px;
    height: 40px;
    margin-right: 10px;
    ${mobile10({ marginBottom:"10px", marginRight:"0px" })} 

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
    ${mobile10({ right:"0", position:"absolute", marginRight:"13px" })} 
`;

const DeleteFilterIcon = styled.label`
    font-weight: bold;
    color:white;
    cursor: pointer; 
`;

const ProductsInfoInfo = styled.div`
    display:flex;
    flex-direction:column;
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
    ${mobile({ fontSize:"13px", height:"35px"})} 

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
    ${mobile({ fontSize:"13px"})} 

`;

const ChooseNumberResults = styled.div`
    display:flex;
    margin-top:15px;
    ${mobile({ marginTop:"5px"})}

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
    ${mobile({ fontSize:"12px", marginTop:"9px"})} 

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

const FiltersInfo = styled.div`
    ${desktop({ display:"none"})} 
    padding-top:15px;
    order:1;
`;

const FiltersOpen = styled.button`
    outline:none;
    border:none;
    background-color:#242526;
    font-family: GilroyLight; 
    color:white;
    width:40px;
    border-radius:10px;
    height:40px;
    font-size:13px;
    display:flex;
    justify-content:center;
    align-items:center; 

`;


const TextFiltersOpen = styled.span``;

const IconOpenFilters = styled.img`
    width:22px;
    height:22px;
    margin-bottom:-3px;
`;

const ForMobile = styled.div`
    display:flex;
    align-items:center;
    ${mobile({ display:"flex", flexDirection:"column", alignItems:"flex-start", flex:"1"})} 
`;

const FiltersForMobileProD = styled.div` 
    width:100%;

`;

const DafFiltersForMobileProD = styled.div`
    ${mobile({ width:"100%"})}  
    width:25%;
`;

const CloseFilters = styled.button`
    width:35px;
    outline:none;
    border:none;
    cursor:pointer;
    height:35px;
    background-color:#3a3b3c;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center; 
`;

const IconCloseFilters = styled.span`
    color:white;
    font-family: GilroyLight; 
    font-size:15px;
    margin-bottom:-1px;
    margin-left:-1px;
`;

const FilterChooseFilterTexts = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between; 
    padding:20px;
    padding-top:15px;
    padding-bottom:10px;
    border-bottom: 1px solid #050505;
    ${desktop({ display:"none"})} 
`;

const FiltersTextInfo = styled.span`
    color:white;
    font-family: GilroyLight; 
    font-size:15px;
    font-weight:bold;
`;

const FiltersTextWithIcon = styled.div`
    display:flex;
    align-items:center;
`;

const FiltersTextIcon = styled.img`
    width:20px;
    height:20px;
    margin-right:10px;
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
        __SET__HANDLE_FILTERS_MOBILE(false); 

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
        __SET__HANDLE_FILTERS_MOBILE(false); 


    }
  };

  const handleClick = (selectedVal) => {
    navigate(getFilterUrl({ shown: selectedVal, page:1 }));
    __SET__HANDLE_FILTERS_MOBILE(false); 
    // console.log(selectedVal);
  };
  
  //////////////////////////////////////////

   
  const [__HANDLE_FILTERS_MOBILE, __SET__HANDLE_FILTERS_MOBILE] = useState(false); 

  const _mobileFiltersOpen = (e) =>{
    e.preventDefault();
    __SET__HANDLE_FILTERS_MOBILE(true);
  }

  const handleCloseFilters = (e) => {
      
    e.preventDefault();
    __SET__HANDLE_FILTERS_MOBILE(false);
  }

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
                    <DafFiltersForMobileProD className={__HANDLE_FILTERS_MOBILE && "f---d--s-alldps-s"}>
                        <FiltersForMobileProD className={__HANDLE_FILTERS_MOBILE && "d--s-alldps-s"}>
                            <LeftFilter className={__HANDLE_FILTERS_MOBILE && "d-lep-pela"}>
                                <FilterMain>
                                    <FilterChooseFilterTexts>
                                        <FiltersTextWithIcon>
                                            <FiltersTextIcon src={FilterIcon}/>
                                            <FiltersTextInfo>????????????</FiltersTextInfo>
                                        </FiltersTextWithIcon>
                                        <CloseFilters onClick={(e) => handleCloseFilters(e)}>
                                            <IconCloseFilters>X</IconCloseFilters>
                                        </CloseFilters> 
                                    </FilterChooseFilterTexts>
                                    <FilterInside>
                                        <FilterName>?????????????????? ??????????????????</FilterName> 
        
                                        <PriceRange className="m-ldp---d-d-d-">
                                            <PriceRangeInsideMin>
                                                <MinPrice>???????????? ???????? ???? ??????????????????</MinPrice>
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
                                        <FilterName>???????????????? ??????????????</FilterName> 
        
                                        <PriceRange>
                                            <PriceRangeInsideMin>
                                                <MinPrice>?????? ???? ??????????????</MinPrice>
                                            </PriceRangeInsideMin> 
                                        </PriceRange>
        
                                        <SarchProductBar>
                                            <SarchProductBarInside>
                                                
                                                <SarchProductBarInput type="text" placeholder="?????????? ??????????????..."  onChange={(e)=>setSearchProduct(e.target.value)}  defaultValue={name !=='all' ? name : '' }/> 
                                            </SarchProductBarInside>
                                        </SarchProductBar>
                                        <ButtonFilterPrices onClick={handleClickSearch}>????????????????</ButtonFilterPrices>
                                        

                                    </FilterInside>
                                </FilterMain>
                                <FilterMain> 
        
                                    <FilterInside className="mobile-0x4212">
                                        <FilterName>????????</FilterName>
                                        <PriceRange>
                                            <PriceRangeInsideMin>
                                                <MinPrice>??????????????</MinPrice>
                                            </PriceRangeInsideMin>
                                            <PriceRangeInsideMax>
                                                <MaxPrice>??????????????????</MaxPrice>
                                            </PriceRangeInsideMax>
                                        </PriceRange>

                                        <PriceRange>
                                            <PriceRangeInsideMinAc>
                                                <MinPriceAc type="text" placeholder="0 ??????." onChange={(e)=>setMinPrice(e.target.value)} defaultValue={ min > 0 ? min : '' }/>
                                            </PriceRangeInsideMinAc>
                                            <PriceRangeInsideMaxAc>                                        
                                                <MaxPriceAc type="text" placeholder="0 ??????." onChange={(e)=>setMaxPrice(e.target.value)} defaultValue={ max > 0 ? max : '' }/>
                                            </PriceRangeInsideMaxAc>
                                        </PriceRange>

                                        <ButtonFilterPrices onClick={handleClickPrices}>
                                            ??????????????????
                                        </ButtonFilterPrices>
                                        

                                    </FilterInside>

                                    
                                </FilterMain>

                            </LeftFilter>
                        </FiltersForMobileProD>
                    
                    </DafFiltersForMobileProD>

                    <RightProductsLoad>
                        <ProductsLoadInside>
                            <ProductsInfoInfo>
                                <ProductsLoadedInfo>
                                    <HeaderInfoProduct>
                                        <HeaderInfoTextProducts>???????????????????? {totalProducts} ??????????????????</HeaderInfoTextProducts>
                                    </HeaderInfoProduct>
                                    <ChooseProductsType>
                                        
                                        <FiltersInfo>
                                            <FiltersOpen onClick={(e) => _mobileFiltersOpen(e)}>
                                                <TextFiltersOpen><IconOpenFilters src={FilterIcon}/></TextFiltersOpen>
                                            </FiltersOpen>
                                        </FiltersInfo>
                                        <ForMobile>
                                            <ChooseSpan>?????????????? ????:</ChooseSpan>                                              

                                            <SelectedMenuPro>

                                                <select
                                                    value={order}
                                                    onChange={(e) => {
                                                    navigate(getFilterUrl({ order: e.target.value }));
                                                    }}
                                                    className="select-pro-bro"
                                                >
                                                    <option value="cheapest">??????????????????</option>
                                                    <option value="expensives">????????????????</option>
                                                </select>
                                                <IconsFlexPr>
                                                    <IconSelectMenu src={iconSelMenu}></IconSelectMenu>
                                                </IconsFlexPr>


                                            </SelectedMenuPro>
                                        </ForMobile>

                                    </ChooseProductsType>
                                </ProductsLoadedInfo>
                                {((min > 0 && max > 0) || (name !== 'all') ) ? 
                                <FiltersChoosed>
                                    {min > 0 && max > 0  ? 
                                            <SingleFilterChoosed>
                                                    <SingleFilterChoosedInside>
                                                        <LabelFilterChoosed>????????:</LabelFilterChoosed>
                                                        <SpanFilterChoosed>{min} ??????. - {max} ??????.</SpanFilterChoosed>
                                                        <DeleteFilter onClick={deleteFilterPriceRange}>
                                                            <DeleteFilterIcon>X</DeleteFilterIcon>
                                                        </DeleteFilter>
                                                    </SingleFilterChoosedInside>
                                            </SingleFilterChoosed>
                                    : <></>
                                    } 

                
                                    {name !== 'all'  ? 
                                        <SingleFilterChoosed>
                                                <SingleFilterChoosedInside>
                                                    <LabelFilterChoosed>???????????? ??????????????:</LabelFilterChoosed>
                                                    <SpanFilterChoosed>{name}</SpanFilterChoosed>
                                                    <DeleteFilter onClick={deleteFilterSearch}>
                                                        <DeleteFilterIcon>X</DeleteFilterIcon>
                                                    </DeleteFilter>
                                                </SingleFilterChoosedInside>
                                        </SingleFilterChoosed>
                                    : <></>
                                    } 
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
