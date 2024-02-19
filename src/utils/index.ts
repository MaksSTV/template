import { IData } from '../types/data.types'

export function getCertainCurrency(ofId: number, toId: number, data: IData[]) {
	// костыль для API, из-за проблем описанных в API/index.ts
	const certainCurrency = data.slice(ofId, toId + 1)

	return certainCurrency
}

export function getAverage(data: IData[]) { // Получим среднее значение у заданной валюты
	const sumOfValues = data.reduce((sum, item) => sum + item.value, 0)
	return sumOfValues / data.length
}

export function prepareChartData(data: IData[]) { // настройка графика
	const xAxisData: string[] = []
	const seriesData: number[] = []
	let indicator: string
	let minValue: number

	if (data && data.length > 0) {
		indicator = data[0].indicator
		minValue = data.reduce((min, current) => Math.min(min, current.value), data[0].value)

	} else {
		indicator = "Курс"
		minValue = 0
	}

	data.forEach((item) => {
		xAxisData.push(item.month)
		seriesData.push(item.value)
	})

	return {
		color: ['#F38B00'],
		tooltip: { // Настройка тултипа, чтобы прибавить с дефолтному виду "₽"
			trigger: "axis",
			formatter: function (params: any) {
				let tooltipString = '<div style="font-size: 12px; color: #000;">'
				tooltipString += '<strong style="font-weight: 700;">' + params[0].name + ' год</strong><br>'
				params.forEach(function (item: any) {
					tooltipString += '<div style="text-align: center; display: flex; align-items: center;">'
					tooltipString += '<span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: ' + item.color + '; margin-right: 5px;"></span>'
					tooltipString += item.seriesName + '<span style="font-weight: 700; margin-left: 20px;">' + item.value + 'Р </span> <br>'
					tooltipString += '</div>'
				})
				tooltipString += '</div>'
				return tooltipString
			},
		},
		xAxis: [{
			type: "category",
			data: xAxisData,
			boundaryGap: false,
		}],
		yAxis: [{
			type: "value",
			scale: false,
			min: minValue - 1, // чтобы график не прилипал к оси, но тогда у доллара деление добавляется еще одно
			minInterval: 1,
			splitNumber: 4,
			axisLabel: {
				formatter: function (value: any, index: any) {
					// Скрываем только первую метку на оси
					if (index === 0) {
						return ''
					} else {
						return value
					}
				}
			}
		}],
		series: [{
			name: indicator,
			type: "line",
			symbol: 'none',
			data: seriesData,
		}]
	}
}