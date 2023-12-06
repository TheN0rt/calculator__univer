import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from 'react';
import PageForCalculator from './components/PageForCalculator/PageForCalculator';
import Homepage from './components/Homepage/Homepage';
import CartPage from "./components/CartPage/CartPage";
import SuccessPage from "./components/SuccessPage/SuccessPage";
import { dataForLanding, dataForMarket, dataForShop } from './data/data';
import { imgDataForCartLanding, imgDataForCartMarket, imgDataForCartShop } from './data/imgDataForCart';
import { imgDataForListLanding, imgDataForListMarket, imgDataForListShop } from './data/imgDataForList';
import { setCalculator } from "./API/firebase";

function App() {
  const [summaryData, setSummaryData] = useState({})

  useEffect(() => {
    const data = {}
    dataForLanding["Тип бизнеса"].forEach(el => {
      const name = el.name
      if(sessionStorage.getItem(name) && sessionStorage.getItem(name).length > 2){
        data[name] = JSON.parse(sessionStorage.getItem(name))
      }
    })
    setSummaryData(data)
  }, [])

   const onChange = (nameOfproperty, obj) => {
     const data = {...summaryData}
     data[nameOfproperty] = obj
     setSummaryData({...data})
   }

  //  useEffect(() => {
  //   dataForLanding['Тип бизнеса'].reduce((acc, business) => {
  //     if(sessionStorage.getItem(`${business.name}`)){
  //       acc.push(JSON.parse(sessionStorage.getItem(`${business.name}`)))
  //     }
  //     return acc
  //   }, [])
  //  }, [])

   const removeItemFromSummaryData = (name) => {
      const data = {...summaryData}
      sessionStorage.removeItem(name)
      delete data[name]
      setSummaryData(data)
   }

   const removeAllItemsFromSummaryData = () => {
    setSummaryData([])
   }

   const addDataToFirebase = async (data) => {
    console.log('da')
    setCalculator(data).then(() => {
      dataForLanding["Тип бизнеса"].forEach(el => {
        const name = el.name
        if(sessionStorage.getItem(name)){
          sessionStorage.removeItem(name)
        }
      })
      removeAllItemsFromSummaryData()
    })
   }
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route element={<Homepage/>} exact path="/"/>
        <Route element={<PageForCalculator onChange={onChange} 
        nameOfproperty="Сайт-визитка"
        imgDataForCart={imgDataForCartLanding}
        data={dataForLanding}
        imgDataForList={imgDataForListLanding}
        />} path="/landing"/>
        <Route element={<PageForCalculator onChange={onChange} 
        nameOfproperty="Маркетплейс"
        imgDataForCart={imgDataForCartMarket}
        data={dataForMarket}
        imgDataForList={imgDataForListMarket}
        // sum={summaryData.summary}
        />} path="/market"/>
        <Route element={<PageForCalculator onChange={onChange} 
        nameOfproperty="Интернет-магазин"
        imgDataForCart={imgDataForCartShop}
        data={dataForShop}
        imgDataForList={imgDataForListShop}
        // sum={summaryData.summary}
        />} path="/shop"/>
        <Route element={<CartPage 
        summaryData={summaryData}
        addDataToFirebase={addDataToFirebase}
        removeItemFromSummaryData={removeItemFromSummaryData}/>} path="/cart"/>
        <Route element={<SuccessPage/>} path="/success"/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
