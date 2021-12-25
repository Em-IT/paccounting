export function capsulateData(data: any, error?: any) {
  let result = {
    data: null,
    isSuccessful: true,
    errorMessage: ''
  }
  if(error) {
    result.errorMessage = error.toString();
    result.isSuccessful = false;
  }
  else {
    result.data = data;
  }
  return result;
}
