import { IconButton } from 'components/ui';

export const AddGameButton = IconButton({
  icon: 'add',
  label: 'Add',
  redirect: '/games/new'
});

export const AddPitchButton = IconButton({
  icon: 'add',
  label: 'Add',
  redirect: '/pitches/new'
});

export const AddUserButton = IconButton({
  icon: 'add',
  label: 'Add',
  redirect: '/players/new'
});
