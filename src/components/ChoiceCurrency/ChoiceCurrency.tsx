import { ChoiceGroup } from '@consta/uikit/ChoiceGroup'
import { Layout } from '@consta/uikit/Layout'
import { ICurrency } from '../../types/data.types'

type Props = {
	currency: ICurrency | null,
	items: ICurrency[],
	setNewCurrency: (value: ICurrency) => void
}

function ChoiceCurrency({ currency, items, setNewCurrency }: Props): JSX.Element {

	return (
		<Layout flex={1} className='card__tickets'>
			<ChoiceGroup
				size='s'
				name="ChoiceGroupExample"
				value={currency}
				onChange={({ value }) => setNewCurrency(value)}
				items={items}
				getItemLabel={(item) => item.symbol}
			/>
		</Layout>
	)
}

export default ChoiceCurrency