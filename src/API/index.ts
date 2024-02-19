import { IData } from '../types/data.types'

/**
	 * Мне не нравится такой подход, это костыль. 
	 * Я бы не стал так делать, если бы не ограничение
	 * на mockAPI в два разных эндпоинта
	 * Так как предоставлено три валюты, я не стал убирать
	 * одну из валют. 
	 * В идеале я бы сделал так, чтобы при выборе валюты
	 * в getCurrency я бы передал тип желаемой валюты:
	 * export function getCurrency(currency: string){
	 *    fetch(url+string) ...
	 * }
	 * Но бесплатный сервис не дает таких возможностей
	 */

export async function getCurrency() {

	const url = "https://65d275bf987977636bfc5bb6.mockapi.io/currency/v1/allCurrency"

	const response = await fetch(url, {
		method: "GET",
	})
	const data: IData[] = await response.json()

	return data
}