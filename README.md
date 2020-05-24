# Long Press for React
**For both desktop and touch devices on the web.**
This wrapper component is only compatible with projects that use React 16.8.0 and up since it uses hooks. 
The LongPress component allows you to create a long press on any children you give it. Want a simple button? Cool, pass it as a child. Want a whole card on mobile? It'll do that too. If the press time doesn't exceed the specified `pressTime` in props, it will behave as if the item had a normal click.

### Conditionally Render another child based on the long press
**This only excepts a single element**  
This can be helpful if you want to render an element based on if the press meets the long press threshold (that you specify with `pressTime`). For example, my use case was a vertical slider input that appears next to the button if the press/click is long enough (for dimming lights on my home network). If you look at the API you'll notice it accepts this conditional element as `elementOnInteraction`. You can specify if you want the element to hide if its not interacted with by setting `inactiveHide` and specify the length of time it takes before it hides with `inactiveHideTime`. If you want the conditional element to hide after the specified time, but want it to stay visible if it's interacted with before the time is up, then you can use the LongPress context in the element you passed in with:

```js
import { LongPressContext } from '@tencoder/longpressreact';
const { setHasInteraction, setShowInteractionElements } = useContext(LongPressContext);
```
Call `setHasInteraction(false)` on its first touch/click event to have it remain visible. And if you want to hide the `elementOnInteraction` after its been engaged with, call `setShowInteractionElements(false)`.

# API
#### Import
```js
import { LongPress } from '@tencoder/longpressreact';
import { LongPressContext } from '@tencoder/longpressreact';
```
```json
pressTime: Number in milliseconds || default = 300,
callbackStart: Function || default = null - triggers on start of a touch/click,
callbackRelease: Function || default = null - triggers on release of a touch/click,
onClickDefault: Function || default = null - triggers if normal touch/click (no long press),
id: String || default = '',
classNames: String || default = '',
elementOnInteraction: JSX || default = null,
inactiveHide: Boolean || default = false,
inactiveHideTime: Number in milliseconds || default = 3000
```

### Simple element wrapped with LongPress
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
### My personal usage. Simple on/off button, that shows input element after long press.
```jsx
const longPressInteractionElements = () => {
  return (
    <div className={`vertical-slider-container vertical-slider-container__${index}`}>
      <VerticalSlider
        update={updateValue}
        state={state}
      />
    </div>
  )
}
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

As mentioned above, here is the input element that is passed in as `elementOnInteraction`. When I long press the Off button, this vertical input appears. Based on my code snipped above this paragraph, the element will hide after 2 seconds unless I interact with the slider. I should note, clicking on input element isn't enough for me, it will still close. This is because it depends on what elements you attach the `setHasInteraction` and `setShowInteractionElements` to. 
![image](https://user-images.githubusercontent.com/28798368/82742781-df11ea00-9d27-11ea-84ec-e259780020e3.png)
