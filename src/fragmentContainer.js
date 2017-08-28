import Relay from 'react-relay'
import { toClass } from 'recompose'

const fragmentContainer = options => BaseComponent =>
  Relay.createFragmentContainer(toClass(BaseComponent), options)

export default fragmentContainer
