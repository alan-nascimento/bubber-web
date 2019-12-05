export function createExcursionRequest(
  owner_id,
  title,
  departure_address,
  destiny_address,
  departure_date,
  return_date,
  vacancy_amount,
  transport_company,
  payment_types
) {
  console.log('tt', title);
  return {
    type: '@excursion/CREATE_EXCURSION_REQUEST',
    payload: {
      owner_id,
      title,
      departure_address,
      destiny_address,
      departure_date,
      return_date,
      vacancy_amount,
      transport_company,
      payment_types,
    },
  };
}

export function createExcursionFailure() {
  return {
    type: '@excursion/CREATE_EXCURSION_FAILURE',
  };
}
