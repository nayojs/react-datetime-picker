# React DateTime Picker

## Overview
React DateTime Picker is a robust and highly customizable date-time picker library for React applications. This component offers seamless integration with various UI designs, allowing developers to choose from a wide range of styling options or apply custom styles to match their projects' specific requirements.

![datetime-picker](https://github.com/user-attachments/assets/d0672930-c774-4480-befd-e27d4a9d6263)


## Installation
To install the library, use [npm](https://www.npmjs.com/package/@nayojs/react-datetime-picker):
```ruby
npm install @nayojs/react-datetime-picker
```
## Features
- **Date Selection:** Easily select dates using the intuitive date picker interface.
- **Time Selection:** Includes a time picker for selecting specific hours and minutes.
- **Calendar View:** Displays a fully interactive calendar for navigating through months and years.
- **Customizable Styles:** Override default styles with ease using CSS classes or a utility function for merging styles.

## Components

### 1. DatePicker
The `DatePicker` component combines the functionality of a calendar and time picker into a single component. It can be customized with styles and classes that are passed down to the `Calendar` and `TimePicker` components.

### 2. Calendar
The `Calendar` component provides a visual representation of a calendar where users can select a date. It is fully customizable, allowing developers to define the appearance of various parts of the calendar.

### 3. TimePicker
The `TimePicker` component allows users to select a specific time. Like the `Calendar`, it is highly customizable, with various style options for different elements.


## Usage
### DatePicker Example

Here’s a basic example of how to use the `DatePicker` component:

```jsx
import React from 'react';
import { DatePicker } from '@nayojs/react-datetime-picker';

function App() {
  const selectDateHandler = (date) => {
    console.log('Selected Date:', date);
  };

  const selectTimeHandler = (time) => {
    console.log('Selected Time:', time);
  };

  return (
    <div>
      <Calendar selectDateHandler={selectDateHandler} selectTimeHandler={selectTimeHandler}/>
    </div>
  );
}

export default App;
```

### Calendar Example

To use the `Calendar` component independently:

```jsx
import React from 'react';
import { Calendar } from '@nayojs/react-datetime-picker';

function App() {
  const selectDateHandler = (date) => {
    console.log('Selected Date:', date);
  };

  return (
    <div>
      <Calendar selectDateHandler={selectDateHandler} />
    </div>
  );
}

export default App;
```

### TimePicker Example

To use the `TimePicker` component independently:

```jsx
import React from 'react';
import { TimePicker } from '@nayojs/react-datetime-picker';

function App() {
  const selectTimeHandler = (time) => {
    console.log('Selected Time:', time);
  };

  return (
    <div>
      <TimePicker selectTimeHandler={selectTimeHandler} />
    </div>
  );
}

export default App;
```

### Custom Styling

The `DatePicker`, `Calendar`, and `TimePicker` components come with default styles, but you can easily override them by passing custom class names or styles.

#### Example: Custom Styles for DatePicker

```jsx
import React from 'react';
import { DatePicker } from '@nayojs/react-datetime-picker';

function App() {
  const selectDateHandler = (date) => {
    console.log('Selected Date:', date);
  };

  return (
    <div>
      <DatePicker
        selectDateHandler={selectDateHandler}
        datePickerStyles={{
          containerStyles: { width: '300px' },
          triggerStyles: { padding: '10px', backgroundColor: '#f0f0f0' },
        }}
        calendarStyles={{
          containerStyles: { backgroundColor: '#fff' },
          dateStyles: { color: '#333' },
          selectedDateStyles: { backgroundColor: '#1A71FF', color: 'white' },
        }}
      />
    </div>
  );
}

export default App;
```

### Style Prop Options

For each component, you can override specific style classes and styles:

- **DatePicker**
  - `containerClass`: Styles the main container of the date picker.
  - `triggerClass`: Styles the trigger button/input.
  - `calendarClasses`: Classes passed down to the Calendar component.
  - `calendarStyles`: Styles passed down to the Calendar component.

- **Calendar**
  - `containerClass`: Styles the main container of the calendar.
  - `headerClass`: Styles the header of the calendar.
  - `dateClass`: Styles individual date cells.
  - `selectedDateClass`: Styles the selected date.
  - `navigatorClass`: Styles the navigation buttons.

- **TimePicker**
  - `containerClass`: Styles the main container of the time picker.
  - `triggerClass`: Styles the trigger button/input.
  - `timeContainerClass`: Styles the time selection container.
  - `timeItemClass`: Styles each time option.
  - `selectedTimeItemClass`: Styles the selected time option.

## Default Styles

The library provides default styles for all components. If you do not override these styles, the components will use the following defaults:

- [DatePicker Styles](src/components/DatePicker/styles/defaultStyles.ts)
- [Calendar Styles](src/components/Calendar/styles/defaultStyles.ts)
- [TimePicker Styles](src/components/timepicker/defaultStyles.ts)


## Advanced Usage

### Overriding Default Styles with Helper Function

To ensure that overriding a specific style doesn’t remove other default styles, use the `mergeStyles` utility function:

```jsx
import React from 'react';
import { DatePicker, mergeStyles } from '@nayojs/react-datetime-picker';

const customStyles = mergeStyles({
  nayojsDatetimePickerContainer: 'background-color: blue;',
});

function App() {
  const selectDateHandler = (date) => {
    console.log('Selected Date:', date);
  };

  return (
    <div>
      <DatePicker
        selectDateHandler={selectDateHandler}
        datePickerStyles={customStyles}
      />
    </div>
  );
}

export default App;
```

## Contribution

If you'd like to contribute to the project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them.
4. Push to your branch and submit a pull request.

## Show your support
If you find EduMeet helpful, please give us a star ⭐️ on GitHub! Your support is greatly appreciated and motivates us to keep improving the project.

## Author
:bust_in_silhouette: **RWUBAKWANAYO**
- GitHub: [https://github.com/RWUBAKWANAYO](https://github.com/RWUBAKWANAYO)
- LinkedIn: [https://www.linkedin.com/in/rwubakwanayo/](https://www.linkedin.com/in/rwubakwanayo/)

## 📝 License
React DateTime Picker is licensed under the MIT License. For more information, see the [LICENSE file](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt).
