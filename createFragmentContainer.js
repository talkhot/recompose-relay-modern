import Relay from 'react-relay'
import { toClass } from 'recompose'

const createFragmentContainer = options => BaseComponent =>
  Relay.createFragmentContainer(toClass(BaseComponent), options)

export default createFragmentContainer
