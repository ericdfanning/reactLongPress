#Long Press for React
This wrapper component is only compatible with projects that use React 16.8.0 and up since it uses hooks. 
The LongPress component allows you to create a long press on any children you give it

```jsx
	<LongPress 
			pressTime={300}
			inactiveHide={true}
			inactiveHideTime={2000}
			onClickDefault={onClickDefault}
			id={item.name}
			classNames={'card__command on_button'}
			elementOnInteraction={longPressInteractionElements()}
		>
			<div>
				Some Button text or container that you want clickable.
			</div>
		</LongPress>
```

```jsx
	<LongPress 
			pressTime={300}
			inactiveHide={true}
			inactiveHideTime={2000}
			onClickDefault={onClickDefault}
			id={item.name}
			classNames={'card__command on_button'}
			elementOnInteraction={longPressInteractionElements()}
		>
			<div>
				{(state > 0 || state === 'ON') ? state: 'Off'}
			</div>
		</LongPress>
```