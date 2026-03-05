import { json } from 'co-body'

type SessionValue = { value?: string | null }

type SessionTransformInput = {
  checkout?: { orderFormId?: SessionValue }
  authentication?: { unitName?: SessionValue }
}

type SessionTransformOutput = {
  public: { corporateName: SessionValue }
}

export async function setB2BOrderForm(context: Context) {
  const body: SessionTransformInput = await json(context.req)
  const orderFormId = body.checkout?.orderFormId?.value
  const unitName = body.authentication?.unitName?.value

  const response: SessionTransformOutput = {
    public: {
      corporateName: { value: null },
    },
  }

  if (orderFormId && unitName) {
    await context.clients.checkout.updateCorporateName(orderFormId, unitName)
    response.public.corporateName.value = unitName
  }

  context.body = response
}
