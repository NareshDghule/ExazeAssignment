import {navigationRef} from '../navigators/Root';

export const navigateToScreen = (name: string, params: object) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
};
