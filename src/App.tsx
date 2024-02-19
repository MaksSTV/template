import { useEffect, useState } from 'react'
import { Card } from '@consta/uikit/Card'
import { Layout } from '@consta/uikit/Layout'
import "./App.css"
import { Theme, presetGpnDefault } from '@consta/uikit/Theme'
import { ICurrency, IData } from './types/data.types'
import { getCurrency } from './API'
import { getAverage, getCertainCurrency } from './utils'
import ChartComponent from './components/ChartComponent/ChartComponent'
import Average from './components/Average/Average'
import { currencyData } from './data/data'
import ChoiceCurrency from './components/ChoiceCurrency/ChoiceCurrency'

function App() {

  const [currency, setCurrency] = useState<ICurrency | null>(currencyData[0])
  const [data, setData] = useState<IData[]>([])
  const [average, setAverage] = useState<number>(0)
  const [title, setTitle] = useState<string>(currencyData[0].text)

  // Вызываем хук только при перезагрузке страницы, передаем первую валюту
  useEffect(() => {
    getCurrency().then((data) => { // Запрос на получение данных
      setData(getCertainCurrency(currencyData[0].of, currencyData[0].to, data)) // Вычленяем нужную валюту
      setAverage(getAverage(data)) // Находим и записываем среднее по валюте
    })

  }, [])

  function setNewCurrency(currency: ICurrency) {
    setCurrency(currency)

    getCurrency().then((res) => { // Запрос на получение данных
      setData(getCertainCurrency(currency.of, currency.to, res)) // Вычленяем нужную валюту
    })
    setAverage(getAverage(data)) // Находим и записываем среднее по валюте
    setTitle(currency.text)
  }

  return (
    <Theme preset={presetGpnDefault}>
      <Card
        verticalSpace="s"
        horizontalSpace="s"
        className='card'
      >
        <Layout direction="column" className='card__content'>
          <Layout flex={1} className='card__header'>
            <Layout flex={1} className='card__title'>
              {title}
            </Layout>
            <ChoiceCurrency currency={currency} items={currencyData} setNewCurrency={setNewCurrency} />
          </Layout>
          <Layout direction="row" className='card__main' flex={6}>
            <Layout flex={6}>
              <ChartComponent data={data} />
            </Layout>
            <Average average={average} />
          </Layout>
        </Layout>
      </Card>
    </Theme>
  )
}

export default App
