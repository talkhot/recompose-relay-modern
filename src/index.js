import createFragmentContainer from './createFragmentContainer';
import createRefetchContainer from './createRefetchContainer';
import createPaginationContainer from './createPaginationContainer';


module.exports = {
  fragmentContainer: createFragmentContainer,
  refetchContainer: createRefetchContainer,
  paginationContainer: createPaginationContainer,
}