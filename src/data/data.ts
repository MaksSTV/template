//Данные для приложения

import { ICurrency, IData } from '../types/data.types'

export const mockData: IData[] = [
  {
    "date": "2016-02-01",
    "month": "фев 2016",
    "indicator": "Курс доллара",
    "value": 72,
    "id": "1"
  },
  {
    "date": "2016-03-02",
    "month": "мар 2016",
    "indicator": "Курс доллара",
    "value": 80,
    "id": "2"
  },
  {
    "date": "2016-04-01",
    "month": "апр 2016",
    "indicator": "Курс доллара",
    "value": 77,
    "id": "3"
  },
  {
    "date": "2016-05-02",
    "month": "май 2016",
    "indicator": "Курс доллара",
    "value": 78,
    "id": "4"
  },
  {
    "date": "2016-02-01",
    "month": "июн 2016",
    "indicator": "Курс доллара",
    "value": 77,
    "id": "5"
  },
  {
    "date": "2016-03-02",
    "month": "июл 2016",
    "indicator": "Курс доллара",
    "value": 76,
    "id": "6"
  },
  {
    "date": "2016-04-01",
    "month": "авг 2016",
    "indicator": "Курс доллара",
    "value": 81,
    "id": "7"
  },
  {
    "date": "2016-05-02",
    "month": "сент 2016",
    "indicator": "Курс доллара",
    "value": 82,
    "id": "8"
  },
  {
    "date": "2016-02-01",
    "month": "фев 2016",
    "indicator": "Курс евро",
    "value": 90,
    "id": "9"
  },
  {
    "date": "2016-03-02",
    "month": "мар 2016",
    "indicator": "Курс евро",
    "value": 88,
    "id": "10"
  },
  {
    "date": "2016-04-01",
    "month": "апр 2016",
    "indicator": "Курс евро",
    "value": 87,
    "id": "11"
  },
  {
    "date": "2016-05-02",
    "month": "май 2016",
    "indicator": "Курс евро",
    "value": 91,
    "id": "12"
  },
  {
    "date": "2016-02-01",
    "month": "июн 2016",
    "indicator": "Курс евро",
    "value": 92,
    "id": "13"
  },
  {
    "date": "2016-03-02",
    "month": "июл 2016",
    "indicator": "Курс евро",
    "value": 93,
    "id": "14"
  },
  {
    "date": "2016-04-01",
    "month": "авг 2016",
    "indicator": "Курс евро",
    "value": 89,
    "id": "15"
  },
  {
    "date": "2016-05-02",
    "month": "сент 2016",
    "indicator": "Курс евро",
    "value": 88,
    "id": "16"
  },
  {
    "date": "2016-02-01",
    "month": "фев 2016",
    "indicator": "Курс юаня",
    "value": 22,
    "id": "17"
  },
  {
    "date": "2016-03-02",
    "month": "мар 2016",
    "indicator": "Курс юаня",
    "value": 24,
    "id": "18"
  },
  {
    "date": "2016-04-01",
    "month": "апр 2016",
    "indicator": "Курс юаня",
    "value": 25,
    "id": "19"
  },
  {
    "date": "2016-05-02",
    "month": "май 2016",
    "indicator": "Курс юаня",
    "value": 21,
    "id": "20"
  },
  {
    "date": "2016-02-01",
    "month": "июн 2016",
    "indicator": "Курс юаня",
    "value": 23,
    "id": "21"
  },
  {
    "date": "2016-03-02",
    "month": "июл 2016",
    "indicator": "Курс юаня",
    "value": 24,
    "id": "22"
  },
  {
    "date": "2016-04-01",
    "month": "авг 2016",
    "indicator": "Курс юаня",
    "value": 25,
    "id": "23"
  },
  {
    "date": "2016-05-02",
    "month": "сент 2016",
    "indicator": "Курс юаня",
    "value": 19,
    "id": "24"
  }
]

export const currencyData: ICurrency[] = [{
  symbol: "$",
  text: "КУРС ДОЛЛАРА, $/₽",
  of: 0,
  to: 7
},
{
  symbol: "€",
  text: "КУРС ЕВРО, €/₽",
  of: 8,
  to: 15
},
{
  symbol: "¥",
  text: "КУРС ЮАНЯ, ¥/₽",
  of: 16,
  to: 24
}]