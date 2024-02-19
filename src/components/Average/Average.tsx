import { Layout } from '@consta/uikit/Layout'

type Props = {
	average: number
}

function Average({ average }: Props): JSX.Element {

	return (
		<Layout flex={1} direction="column" className='average'>
			<Layout flex={1} className='average__title'>
				Среднее за период
			</Layout>
			<Layout direction="row" flex={1} className='average__total'>
				<Layout flex={1} className='average__digits'>
					{average.toFixed(1)}
				</Layout>
				<Layout flex={1} className='average__currency'>
					₽
				</Layout>
			</Layout>
		</Layout>
	)
}


export default Average