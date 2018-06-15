# react-freshdesk-widget

> A component of React for use the Freshdesk Widget

<br />

<p align="center">
  <img width="50%" src="./docs/freshdesk.png?raw=true" alt="Freshdesk Logotype" />
</p>

<br />

## Demo

[Check it live :)](https://secureEnd.github.io/react-freshdesk-widget/)

## Installation

```bash
yarn add @secureend/react-freshdesk-widget
```

## Basic Usage

```js
import FreshdeskWidget from '@secureend/react-freshdesk-widget';

...
render() {
    return (
        <FreshdeskWidget url="https://support.freshdesk.com" />
    );
}
...
```

<p align="center">
  <img width="100%" src="./docs/incorporated-desktop.png?raw=true" alt="Freshdesk Incorporated Widget" />
</p>

## With custom button

```js
import FreshdeskWidget from '@secureend/react-freshdesk-widget';

...
render() {
    return (
        <FreshdeskWidget url="https://support.freshdesk.com" type="pop-up">
            <button>Send Feedback</button>
        </FreshdeskWidget>
    );
}
...
```

<p align="center">
  <img width="100%" src="./docs/custom-button.gif?raw=true" alt="Freshdesk with custom button" />
</p>

## Props

-   [`url`](#urlProperty) - _required_
-   [`type`](#typeProperty) - _one of ['pop-up', 'incorporated']_
-   [`formTitle`](#formTitleProperty) - _default: Help and support_
-   [`formHeight`](#formHeightProperty) - _default: 500px_
-   [`submitThanks`](#submitThanksProperty) - _default: Thank you, one of our representatives will respond to you soon! =)_
-   [`buttonType`](#buttonTypeProperty) - _only if the type property are equal 'pop-up'_
-   [`buttonText`](#buttonTextProperty) - _only if the type property are equal 'pop-up'_
-   [`buttonColor`](#buttonColorProperty) - _only if the type property are equal 'pop-up'_
-   [`buttonOffset`](#buttonOffsetProperty) - _only if the type property are equal 'pop-up'_
-   [`buttonPosition`](#buttonPositionProperty) - _only if the type property are equal 'pop-up'_
-   [`buttonBackgroundColor`](#buttonBackgroundColorProperty) - _only if the type property are equal 'pop-up'_
-   [`buttonBackgroundImage`](#buttonBackgroundImageProperty) - _only if the type property are equal 'pop-up'_
-   [`autofill`](#autofillProperty) - _allows autofilling fields_
-   [`attachFile`](#attachFileProperty) - _default: yes_
-   [`captcha`](#captchaProperty) - _default: no_
-   [`searchArea`](#searchProperty) - _default: yes_

<a name="urlProperty"></a>

#### `url` (required)

An URL of the service of your Freshdesk

For example:

```js
...
render() {
    return (
        <FreshdeskWidget url="https://support.freshdesk.com" />
    );
}
...
```

<a name="typeProperty"></a>

#### `type` - one of ['pop-up', 'incorporated']

The type of widget you want to insert the page.

Currently you can perform through two ways:

1.  Through a pop-up where the user must click to display the widget.
2.  Incorporating direct in your HTML.

_default: incorporated_

For example:

```js
...
render() {
    return (
        <FreshdeskWidget
            url="https://support.freshdesk.com"
            type="pop-up"
        />
    );
}
...
```

<a name="formTitleProperty"></a>

#### `formTitle` (optional)

What will be the title of the form.

_default: Help and support_

For example:

```js
...
render() {
    return (
        <FreshdeskWidget
            url="https://support.freshdesk.com"
            formTitle="This is a custom title"
        />
    );
}
...
```

<a name="formHeightProperty"></a>

#### `formHeight`

The height of the form.

_default: 500px_

For example:

```js
...
render() {
    return (
        <FreshdeskWidget
            url="https://support.freshdesk.com"
            formHeight="700px"
        />
    );
}
...
```

<a name="submitThanksProperty"></a>

#### `submitThanks`

The message that appears after the user send feedback.

_default: Thank you, one of our representatives will respond to you soon! =)_

For example:

```js
...
render() {
    return (
        <FreshdeskWidget
            url="https://support.freshdesk.com"
            submitThanks="Thank you!!!"
        />
    );
}
...
```

<a name="buttonTypeProperty"></a>

#### `buttonType` - one of ['text', 'image']

The type of button when use pop-up.

_default: text_

Note: When do you use an image type is necessary to pass `buttonBackgroundImage` property.

For example:

```js
...
render() {
    return (
        <FreshdeskWidget
            url="https://support.freshdesk.com"
            type="pop-up"
            buttonType="image"
            buttonBackgroundImage="my-custom-button.png"
        />
    );
}
...
```

<a name="buttonTextProperty"></a>

#### `buttonText` - (optional)

The text of button.

_default: Support_

For example:

```js
...
render() {
    return (
        <FreshdeskWidget
            url="https://support.freshdesk.com"
            type="pop-up"
            buttonType="text"
            buttonText="Send feedback!"
        />
    );
}
...
```

<a name="buttonColorProperty"></a>

#### `buttonColor` - (optional)

The font color of button text.

_default: white_

For example:

```js
...
render() {
    return (
        <FreshdeskWidget
            url="https://support.freshdesk.com"
            type="pop-up"
            buttonType="text"
            buttonText="Send feedback!"
            buttonColor="yellow"
        />
    );
}
...
```

<a name="buttonBackgroundColorProperty"></a>

#### `buttonBackgroundColor` - (optional)

The background-color of button.

_default: #015453_

For example:

```js
...
render() {
    return (
        <FreshdeskWidget
            url="https://support.freshdesk.com"
            type="pop-up"
            buttonType="text"
            buttonText="Send feedback!"
            buttonColor="yellow"
            buttonBackgroundColor="#012471"
        />
    );
}
...
```

<a name="buttonPositionProperty"></a>

#### `buttonPosition` - one of ['left', 'right', 'top', 'bottom']

The position of button in the window.

_default: top_

For example:

```js
...
render() {
    return (
        <FreshdeskWidget
            url="https://support.freshdesk.com"
            type="pop-up"
            buttonType="text"
            buttonText="Send feedback!"
            buttonColor="yellow"
            buttonBackgroundColor="#012471"
            buttonPosition="bottom"
        />
    );
}
...
```

<a name="buttonOffsetProperty"></a>

#### `buttonOffset` - (optional)

The offset of button.

_default: 235px_

For example:

```js
...
render() {
    return (
        <FreshdeskWidget
            url="https://support.freshdesk.com"
            type="pop-up"
            buttonType="text"
            buttonText="Send feedback!"
            buttonColor="yellow"
            buttonBackgroundColor="#012471"
            buttonPosition="bottom"
            buttonOffset="150px"
        />
    );
}
...
```

<a name="buttonBackgroundImageProperty"></a>

#### `buttonBackgroundImage` - (optional)

When you use the `buttonType` with image, need to specify the URL and this property is for this.

_default: 235px_

For example:

```js
...
render() {
    return (
        <FreshdeskWidget
            url="https://support.freshdesk.com"
            type="pop-up"
            buttonType="image"
            buttonBackgroundImage="http://localhost/my-custom-image.png"
            buttonPosition="bottom"
            buttonOffset="150px"
        />
    );
}
...
```

<a name="autofillProperty"></a>

#### `autofill` - (optional)

If you want to fill any of the fields in with data from your application you
can do that here. This doesn't work for custom fields.

For example:

```js
...
render() {
    return (
        <FreshdeskWidget
            url="https://support.freshdesk.com"
            type="pop-up"
            autofill={{ requester: user.email }}
        />
    );
}
...
```

<a name="attachFileProperty"></a>

#### `attachFile` - (optional)

Default attach a file option shown with the message area. If do not want to allow attach file set to 'no'

_default: yes_

For example:

```js
...
render() {
    return (
        <FreshdeskWidget
            url="https://support.freshdesk.com"
            attachFile="no"
        />
    );
}
...
```

<a name="captchaProperty"></a>

#### `captcha` - (optional)

To enable captcha while input feedback, set captcha to 'yes'

_default: no_

For example:

```js
...
render() {
    return (
        <FreshdeskWidget
            url="https://support.freshdesk.com"
            captcha="yes"
        />
    );
}
...
```

<a name="searchAreaProperty"></a>

#### `searchArea` - (optional)

By default searchArea is enabled. To disable search set to 'no'

_default: yes_

For example:

```js
...
render() {
    return (
        <FreshdeskWidget
            url="https://support.freshdesk.com"
            searchArea="no"
        />
    );
}
...
```

## Development

To start developing in the project run:

```bash
yarn serve
```

Then ready at `http://localhost:9001`.

## Tests

Just run:

```bash
yarn test
```
