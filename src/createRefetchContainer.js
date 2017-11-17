import Relay from 'react-relay';
import { toClass } from 'recompose';

const createRefetchContainer = (fragments, refetchConfig) => BaseComponent =>
  Relay.createRefetchContainer(toClass(BaseComponent), fragments, refetchConfig);

export default createRefetchContainer;
