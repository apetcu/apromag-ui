export enum OrderStatusEnum {
  SUBMITTED = 'SUBMITTED',
  IN_PROGRESS = 'IN_PROGRESS',
  CANCELED = 'CANCELED',
  SHIPPED = 'SHIPPED',
  COMPLETED = 'COMPLETED'
}

export const OrderStatusMappings = {
  SUBMITTED: 'Comanda initializata',
  IN_PROGRESS: 'Comanda preluata',
  SHIPPED: 'Comanda expediata',
  COMPLETED: 'Comanda finalizata',
  CANCELED: 'Comanda anulata'
};
