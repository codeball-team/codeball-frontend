import { BaseComponent } from 'components/base';
import ReactDatepickerCalendar from 'react-datepicker/lib/calendar';
import { Link as ReactRouterLink } from 'react-router';
import ReactSelect from 'react-select';

export const Calendar = BaseComponent(ReactDatepickerCalendar);
export const RouterLink = BaseComponent(ReactRouterLink);
export const Select = BaseComponent(ReactSelect);

export * from './buttons';

export BodyBackground from './body-background';
export Button from './button';
export ButtonsPanel from './buttons-panel';
export Errors from './errors';
export Form, {
  EditableText,
  InputWrapper,
  NumberPicker,
  RangePicker,
  ValuePicker
} from './form';
export Icon from './icon';
export IconButton from './icon-button';
export Link from './link';
export List from './list';
export ListItem from './list-item';
export LoadableContent from './loadable-content';
export Navigation from './navigation';
export NotLoaded from './not-loaded';
export Page from './page';
export Section from './section';
export Spinner from './spinner';
