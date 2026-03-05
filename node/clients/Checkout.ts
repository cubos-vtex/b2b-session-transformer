import type { OrderForm } from '@vtex/clients'

import { AuthenticatedJanusClient } from './utils/AuthenticatedJanusClient'

const ORDER_FORM_BASE_PATH = '/api/checkout/pub/orderForm'

export class Checkout extends AuthenticatedJanusClient {
  public async getOrderForm(orderFormId: string) {
    return this.http.get<OrderForm>(`${ORDER_FORM_BASE_PATH}/${orderFormId}`)
  }

  public async updateCorporateName(orderFormId: string, corporateName: string) {
    const orderForm = await this.getOrderForm(orderFormId)

    return this.http.post<OrderForm>(
      `${ORDER_FORM_BASE_PATH}/${orderFormId}/attachments/clientProfileData`,
      {
        ...orderForm.clientProfileData,
        corporateName,
      }
    )
  }
}
