import { method } from '@vtex/api'

import { setB2BOrderForm } from './setB2BOrderForm'

export default {
  setB2BOrderForm: method({ POST: setB2BOrderForm }),
}
