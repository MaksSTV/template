import { ReactECharts, ReactEChartsProps } from '../Echarts/ReactECharts'
import { IData } from '../../types/data.types'
import { prepareChartData } from '../../utils'

type Props = {
	data: IData[]
}

/**
 * Добавил небольшую обертку,
 * тк напрямую без задания option
 * вызвать подготовленный компонент
 * не выйдет
 */

function ChartComponent({ data }: Props): JSX.Element {
	const chartOption = prepareChartData(data)

	const chartProps: ReactEChartsProps = {
		option: chartOption,
		theme: 'light',
		style: { height: '370px', width: '100%' },
	}

	return <ReactECharts {...chartProps} />
}

export default ChartComponent